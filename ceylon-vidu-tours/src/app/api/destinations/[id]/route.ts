export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { errorResponse, successResponse } from '@/lib/response';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        errorResponse('Destination ID is required.'),
        { status: 400 }
      );
    }

    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
    const item = await (prisma as any).destination.findUnique({
      where: isUuid ? { id } : { slug: id },
      include: {
        images: true,
        highlights: true,
      }
    });

    if (!item) {
      return NextResponse.json(
        errorResponse('Destination not found.'),
        { status: 404 }
      );
    }

    return NextResponse.json(
      successResponse('Destination retrieved successfully.', item),
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch destination details error:', error);
    return NextResponse.json(
      errorResponse(error.message || 'Something went wrong.'),
      { status: 550 }
    );
  }
}
