export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { errorResponse, successResponse } from '@/lib/response';

import { registerUser } from '@/features/auth/services/auth.service';
import { registerSchema } from '@/features/auth/validators/register.schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = registerSchema.parse(body);

    const user = await registerUser(validatedData);

    return NextResponse.json(successResponse('User registered successfully.', user), {
      status: 201,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Registration validation error:', error.flatten());
      return NextResponse.json(errorResponse('Validation failed.', error.flatten()), {
        status: 400,
      });
    }

    if (error instanceof Error) {
      console.error('Registration error:', error.message);
      return NextResponse.json(errorResponse(error.message), {
        status: 400,
      });
    }

    console.error('Registration unexpected error:', error);
    return NextResponse.json(errorResponse('Something went wrong.'), {
      status: 500,
    });
  }
}
