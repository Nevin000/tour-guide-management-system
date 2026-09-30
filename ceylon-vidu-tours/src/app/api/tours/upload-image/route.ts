export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { errorResponse, successResponse } from '@/lib/response';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json(errorResponse('No image file provided'), { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), 'public', 'uploads', 'tours');
    await mkdir(uploadDir, { recursive: true });

    const ext = file.name.split('.').pop() || 'jpg';
    const fileName = `tour-${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
    
    await writeFile(join(uploadDir, fileName), buffer);

    const imageUrl = `/uploads/tours/${fileName}`;

    return NextResponse.json(successResponse('Image uploaded successfully', { url: imageUrl }));
  } catch (err: any) {
    console.error('Tour image upload error:', err);
    return NextResponse.json(errorResponse('Failed to upload tour image'), { status: 500 });
  }
}
