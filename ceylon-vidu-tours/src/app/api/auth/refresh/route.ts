export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { refreshAccessToken } from '@/features/auth/services/auth.service';

import {
  successResponse,
  errorResponse,
} from '@/lib/response';

export async function POST(request: NextRequest) {
  try {
    
    const refreshToken = request.cookies.get('refreshToken')?.value;

    if (!refreshToken) {
      return NextResponse.json(errorResponse('Refresh token not found.'), {
        status: 401,
      });
    }

    const result = await refreshAccessToken({
      refreshToken,
    });

    return NextResponse.json(
      successResponse(
        'Access token refreshed successfully.',
        result
      ),
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        errorResponse(
          'Validation failed.',
          error.flatten()
        ),
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      errorResponse(
        error instanceof Error
          ? error.message
          : 'Something went wrong.'
      ),
      {
        status: 400,
      }
    );
  }
}