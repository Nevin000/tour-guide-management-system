import { NextRequest } from 'next/server';

import { verifyAccessToken } from '@/lib/jwt';

export interface AuthUser {
  userId: string;
  email: string;
  role: string;
}

export function requireAuth(request: NextRequest): AuthUser | null {
  const authHeader = request.headers.get('authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = verifyAccessToken(token);
    return {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
    };
  } catch (error) {
    return null;
  }
}
