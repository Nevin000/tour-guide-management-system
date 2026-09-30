export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { errorResponse, successResponse } from '@/lib/response';
import { requireRole } from '@/lib/require-role';

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function GET() {
  try {
    const categories = await prisma.blogCategory.findMany({
      orderBy: { name: 'asc' },
      include: { _count: { select: { posts: true } } },
    });
    return NextResponse.json(successResponse('Categories fetched.', categories));
  } catch (err) {
    console.error('Blog categories GET error:', err);
    return NextResponse.json(errorResponse('Failed to fetch categories.'), { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireRole(request, 'ADMIN');
    const body = await request.json();
    const { name, description } = body;
    if (!name) return NextResponse.json(errorResponse('Name is required.'), { status: 400 });

    const slug = slugify(name);
    const category = await prisma.blogCategory.upsert({
      where: { slug },
      create: { name: name.trim(), slug, description: description || null },
      update: { name: name.trim(), description: description || null },
    });
    return NextResponse.json(successResponse('Category saved.', category), { status: 201 });
  } catch (err: any) {
    const status = err.message === 'Unauthorized' ? 401 : err.message === 'Forbidden' ? 403 : 500;
    return NextResponse.json(errorResponse(err.message || 'Failed.'), { status });
  }
}
