export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { inquirySchema } from '@/features/inquiries/validators/inquiry.schema';
import { sendInquiryEmail } from '@/features/inquiries/services/email.service';
import { errorResponse, successResponse } from '@/lib/response';
import { prisma } from '@/lib/prisma';
import { requireRole } from '@/lib/require-role';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = inquirySchema.parse(body);

    // 1. Try to save to database as a persistent log
    let savedToDb = false;
    try {
      // Check if contactMessage exists on prisma client dynamically
      if ('contactMessage' in prisma) {
        await (prisma as any).contactMessage.create({
          data: {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone || null,
            subject: 'Contact Form Submission',
            message: validatedData.message,
          }
        });
        savedToDb = true;
        console.log('[Contact API] Contact message successfully saved to database.');
      } else {
        console.log('[Contact API] prisma.contactMessage is not defined. Skipping database log.');
      }
    } catch (dbErr) {
      console.error('[Contact API] Database logging failed:', dbErr);
    }

    // 2. Dispatch email
    const emailResult = await sendInquiryEmail({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || undefined,
      message: validatedData.message,
    });

    return NextResponse.json(
      successResponse(
        emailResult.provider === 'local_mock' || emailResult.provider === 'console'
          ? `Message received! ${emailResult.message}`
          : 'Thank you! Your message has been sent successfully. We will get back to you shortly.',
        {
          provider: emailResult.provider,
          savedToDb,
          messageId: emailResult.id,
          filePath: (emailResult as any).filePath || null,
        }
      ),
      { status: 200 }
    );

  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Contact Form validation error:', error.flatten());
      return NextResponse.json(
        errorResponse('Validation failed. Please check the form fields.', error.flatten()),
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      console.error('Contact Form execution error:', error.message);
      return NextResponse.json(
        errorResponse(error.message),
        { status: 400 }
      );
    }

    console.error('Contact Form unexpected error:', error);
    return NextResponse.json(
      errorResponse('Something went wrong while sending your message.'),
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Restrict access to authenticated admins only
    const admin = requireRole(request, 'ADMIN');

    const messages = await (prisma as any).contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(
      successResponse('Messages retrieved successfully.', messages),
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch contact messages error:', error);
    const status = error.message === 'Forbidden' ? 403 : 401;
    return NextResponse.json(
      errorResponse(error.message || 'Unauthorized'),
      { status }
    );
  }
}
