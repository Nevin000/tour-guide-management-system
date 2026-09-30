export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { loginUser } from '@/features/auth/services/auth.service';
import { loginSchema } from '@/features/auth/validators/login.schema';
import { errorResponse, successResponse } from '@/lib/response';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = loginSchema.parse(body);

    const result = await loginUser(validatedData);

    const response = NextResponse.json(
      successResponse('Login successful.', {
        user: result.user,
        accessToken: result.accessToken,
      }),
      {
        status: 200,
      }
    );

    response.cookies.set({
      name: 'refreshToken',
      value: result.refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Login validation error:', error.flatten());
      return NextResponse.json(errorResponse('Validation failed.', error.flatten()), {
        status: 400,
      });
    }

    if (error instanceof Error) {
      console.error('Login error:', error.message);
      return NextResponse.json(errorResponse(error.message), {
        status: 400,
      });
    }

    console.error('Login unexpected error:', error);
    return NextResponse.json(errorResponse('Something went wrong.'), {
      status: 500,
    });
  }
}
