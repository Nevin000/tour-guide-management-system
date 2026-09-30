export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/require-auth';
import { successResponse, errorResponse } from '@/lib/response';

import { getCurrentUser } from '@/features/auth/services/auth.service';

export async function GET(request: NextRequest) {
  try {
    const authUser = requireAuth(request);
    if (!authUser) {
      return NextResponse.json(errorResponse('Unauthorized.'), { status: 401 });
    }

    const user = await getCurrentUser(authUser.userId);

    return NextResponse.json(successResponse('Current user retrieved successfully.', user), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      errorResponse(error instanceof Error ? error.message : 'Unauthorized.'),
      {
        status: 401,
      }
    );
  }
}
