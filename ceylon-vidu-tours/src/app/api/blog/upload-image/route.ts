export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { errorResponse, successResponse } from '@/lib/response';
import { requireRole } from '@/lib/require-role';

export async function POST(request: NextRequest) {
  try {
    await requireRole(request, 'ADMIN');

    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json(errorResponse('No image file provided'), { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), 'public', 'uploads', 'blog', 'inline');
    await mkdir(uploadDir, { recursive: true });

    const ext = file.name.split('.').pop() || 'jpg';
    const fileName = `inline-${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
    
    await writeFile(join(uploadDir, fileName), buffer);

    const imageUrl = `/uploads/blog/inline/${fileName}`;

    return NextResponse.json(successResponse('Image uploaded successfully', { url: imageUrl }));
  } catch (err: any) {
    if (err.name === 'TokenExpiredError' || err.message === 'Unauthorized') {
      return NextResponse.json(errorResponse('Unauthorized'), { status: 401 });
    }
    console.error('Inline image upload error:', err);
    return NextResponse.json(errorResponse('Failed to upload image'), { status: 500 });
  }
}
