import { NextRequest } from 'next/server';

import { requireAuth } from '@/lib/require-auth';

export function requireRole(request: NextRequest, role: 'ADMIN' | 'CUSTOMER') {
  const user = requireAuth(request);

  if (!user || user.role !== role) {
    return null;
  }

  return user;
}
