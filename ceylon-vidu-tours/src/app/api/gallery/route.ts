export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { ZodError } from 'zod';
import { z } from 'zod';

import { errorResponse, successResponse } from '@/lib/response';
import { prisma } from '@/lib/prisma';
import { requireRole } from '@/lib/require-role';

const galleryItemSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(200),
  category: z.string().min(1, 'Category is required.').max(100),
  altText: z.string().max(200).optional().nullable(),
  description: z.string().optional().nullable(),
});

function getErrorResponse(error: any, contextMessage: string) {
  console.error(`${contextMessage} error:`, error);
  if (error instanceof ZodError) {
    return NextResponse.json(errorResponse('Validation failed.', error.flatten()), { status: 400 });
  }
  const isAuthErr = error.message === 'Unauthorized' || 
                    error.name === 'TokenExpiredError' || 
                    error.name === 'JsonWebTokenError' || 
                    error.message?.includes('expired') || 
                    error.message?.includes('jwt');
  const status = error.message === 'Forbidden' ? 403 : (isAuthErr ? 401 : 550);
  const finalStatus = status === 550 ? 500 : status;
  return NextResponse.json(errorResponse(error.message || 'Something went wrong.'), { status: finalStatus });
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const category = searchParams.get('category');

    const whereClause = category && category !== 'All'
      ? { category: { equals: category, mode: 'insensitive' as const } }
      : {};

    const items = await (prisma as any).galleryItem.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(
      successResponse('Gallery items retrieved successfully.', items),
      { status: 200 }
    );
  } catch (error: any) {
    return getErrorResponse(error, 'Fetch gallery items');
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = requireRole(request, 'ADMIN');

    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const title = formData.get('title') as string || '';
    const category = formData.get('category') as string || '';
    const altText = formData.get('altText') as string || '';
    const description = formData.get('description') as string || '';

    const validatedData = galleryItemSchema.parse({ title, category, altText, description });

    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        errorResponse('Image file upload is required.'),
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    const sanitizedFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = join(uploadDir, sanitizedFileName);
    await writeFile(filePath, buffer);

    const dbUrl = `/uploads/${sanitizedFileName}`;

    const newItem = await (prisma as any).galleryItem.create({
      data: {
        title: validatedData.title,
        url: dbUrl,
        category: validatedData.category,
        altText: validatedData.altText || validatedData.title,
        description: validatedData.description || '',
      }
    });

    return NextResponse.json(
      successResponse('Gallery item created successfully.', newItem),
      { status: 201 }
    );
  } catch (error: any) {
    return getErrorResponse(error, 'Create gallery item');
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const admin = requireRole(request, 'ADMIN');

    const { searchParams } = request.nextUrl;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        errorResponse('Gallery item ID is required.'),
        { status: 400 }
      );
    }

    const ids = id.split(',');
    await (prisma as any).galleryItem.deleteMany({
      where: { id: { in: ids } }
    });

    return NextResponse.json(
      successResponse('Gallery item(s) deleted successfully.'),
      { status: 200 }
    );
  } catch (error: any) {
    return getErrorResponse(error, 'Delete gallery item');
  }
}

export async function PUT(request: NextRequest) {
  try {
    const admin = requireRole(request, 'ADMIN');

    const formData = await request.formData();
    const id = formData.get('id') as string || '';
    const file = formData.get('file') as File | null;
    const title = formData.get('title') as string || '';
    const category = formData.get('category') as string || '';
    const altText = formData.get('altText') as string || '';
    const description = formData.get('description') as string || '';

    if (!id) {
      return NextResponse.json(
        errorResponse('Gallery item ID is required.'),
        { status: 400 }
      );
    }

    const validatedData = galleryItemSchema.parse({ title, category, altText, description });

    let dbUrl: string | undefined;

    if (file && (file instanceof File) && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadDir, { recursive: true });

      const sanitizedFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const filePath = join(uploadDir, sanitizedFileName);
      await writeFile(filePath, buffer);

      dbUrl = `/uploads/${sanitizedFileName}`;
    }

    const updateData: any = {
      title: validatedData.title,
      category: validatedData.category,
      altText: validatedData.altText || validatedData.title,
      description: validatedData.description || '',
    };

    if (dbUrl) {
      updateData.url = dbUrl;
    }

    const updatedItem = await (prisma as any).galleryItem.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json(
      successResponse('Gallery item updated successfully.', updatedItem),
      { status: 200 }
    );
  } catch (error: any) {
    return getErrorResponse(error, 'Update gallery item');
  }
}
