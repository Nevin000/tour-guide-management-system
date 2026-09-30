export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { logoutUser } from '@/features/auth/services/auth.service';

import { successResponse, errorResponse } from '@/lib/response';

export async function POST(request: NextRequest) {
  try {
    let refreshToken = request.cookies.get('adminRefreshToken')?.value;
    let cookieName = 'adminRefreshToken';

    if (!refreshToken) {
      refreshToken = request.cookies.get('refreshToken')?.value;
      cookieName = 'refreshToken';
    }

    if (!refreshToken) {
      return NextResponse.json(errorResponse('Refresh token not found.'), {
        status: 401,
      });
    }

    const result = await logoutUser({
      refreshToken,
    });

    const response = NextResponse.json(successResponse(result.message), {
      status: 200,
    });

    // Clear customer cookie
    response.cookies.set({
      name: 'refreshToken',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    });

    // Clear admin cookie
    response.cookies.set({
      name: 'adminRefreshToken',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    });

    return response;
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(errorResponse('Validation failed.', error.flatten()), {
        status: 400,
      });
    }

    return NextResponse.json(
      errorResponse(error instanceof Error ? error.message : 'Something went wrong.'),
      {
        status: 400,
      }
    );
  }
}
