export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { z, ZodError } from 'zod';
import { prisma } from '@/lib/prisma';
import { errorResponse, successResponse } from '@/lib/response';
import { requireRole } from '@/lib/require-role';

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function saveCoverImage(file: File, slug: string): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadDir = join(process.cwd(), 'public', 'uploads', 'blog');
  await mkdir(uploadDir, { recursive: true });
  const ext = file.name.split('.').pop() || 'jpg';
  const fileName = `${slug}-${Date.now()}.${ext}`;
  await writeFile(join(uploadDir, fileName), buffer);
  return `/uploads/blog/${fileName}`;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.min(50, parseInt(searchParams.get('limit') || '9'));
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const tag = searchParams.get('tag') || '';
    const featured = searchParams.get('featured') === 'true';
    const adminMode = searchParams.get('admin') === 'true';

    const where: any = {};

    if (!adminMode) {
      where.status = 'PUBLISHED';
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (category) {
      where.category = { slug: category };
    }

    if (tag) {
      where.tags = { some: { tag: { slug: tag } } };
    }

    if (featured) {
      where.featured = true;
    }

    const [total, posts] = await Promise.all([
      prisma.blogPost.count({ where }),
      prisma.blogPost.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          category: true,
          tags: { include: { tag: true } },
        },
      }),
    ]);

    return NextResponse.json(successResponse('Blog posts fetched.', {
      posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    }));
  } catch (err) {
    console.error('Blog GET error:', err);
    return NextResponse.json(errorResponse('Failed to fetch blog posts.'), { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireRole(request, 'ADMIN');

    const formData = await request.formData();

    const title = formData.get('title') as string;
    const slug = (formData.get('slug') as string) || slugify(title);
    const excerpt = formData.get('excerpt') as string | null;
    const content = formData.get('content') as string;
    const categoryId = formData.get('categoryId') as string | null;
    const authorName = (formData.get('authorName') as string) || 'Ceylon Vidu Tours';
    const status = (formData.get('status') as string) || 'DRAFT';
    const featured = formData.get('featured') === 'true';
    const seoTitle = formData.get('seoTitle') as string | null;
    const seoDescription = formData.get('seoDescription') as string | null;
    const seoKeywords = formData.get('seoKeywords') as string | null;
    const tagsRaw = formData.get('tags') as string | null;
    const publishedAt = status === 'PUBLISHED' ? new Date() : null;

    if (!title || !content) {
      return NextResponse.json(errorResponse('Title and content are required.'), { status: 400 });
    }

    let coverImage: string | null = null;
    const coverFile = formData.get('coverImage') as File | null;
    if (coverFile && coverFile.size > 0) {
      coverImage = await saveCoverImage(coverFile, slug);
    }

    const tagNames: string[] = tagsRaw ? JSON.parse(tagsRaw) : [];

    const tagConnections = await Promise.all(
      tagNames.map(async (name: string) => {
        const tagSlug = slugify(name);
        const tag = await prisma.blogTag.upsert({
          where: { slug: tagSlug },
          create: { name: name.trim(), slug: tagSlug },
          update: {},
        });
        return { tagId: tag.id };
      })
    );

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverImage,
        categoryId: categoryId || null,
        authorName,
        status: status as any,
        featured,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        seoKeywords: seoKeywords || null,
        publishedAt,
        tags: { create: tagConnections },
      },
      include: { category: true, tags: { include: { tag: true } } },
    });

    return NextResponse.json(successResponse('Blog post created.', post), { status: 201 });
  } catch (err: any) {
    console.error('Blog POST error:', err);
    if (err.code === 'P2002') {
      return NextResponse.json(errorResponse('Slug already exists. Please use a unique slug.'), { status: 409 });
    }
    const status = (err.name === 'TokenExpiredError' || err.message === 'Unauthorized') ? 401 : err.message === 'Forbidden' ? 403 : 500;
    return NextResponse.json(errorResponse(err.message || 'Failed to create post.'), { status });
  }
}
