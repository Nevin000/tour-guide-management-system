import { NextRequest, NextResponse } from 'next/server';
import { mkdir, writeFile, unlink } from 'fs/promises';
import { join } from 'path';
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

    const post = await prisma.blogPost.findFirst({
      where: isUuid 
        ? { id }
        : { slug: id },
      include: {
        category: true,
        tags: { include: { tag: true } },
        placesMentioned: true,
        destination: true,
      },
    });

    if (!post) {
      return NextResponse.json(errorResponse('Post not found.'), { status: 404 });
    }

    // Increment views (fire-and-forget)
    prisma.blogPost.update({ where: { id: post.id }, data: { views: { increment: 1 } } }).catch(() => {});

    return NextResponse.json(successResponse('Post fetched.', post));
  } catch (err) {
    console.error('Blog GET by ID error:', err);
    return NextResponse.json(errorResponse('Failed to fetch post.'), { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireRole(request, 'ADMIN');
    const { id } = await params;

    const existing = await prisma.blogPost.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(errorResponse('Post not found.'), { status: 404 });
    }

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const slug = (formData.get('slug') as string) || slugify(title);
    const excerpt = formData.get('excerpt') as string | null;
    const content = formData.get('content') as string;
    const categoryId = formData.get('categoryId') as string | null;
    const authorName = (formData.get('authorName') as string) || 'Ceylon Vidu Tours';
    const status = (formData.get('status') as string) || existing.status;
    const featured = formData.get('featured') === 'true';
    const seoTitle = formData.get('seoTitle') as string | null;
    const seoDescription = formData.get('seoDescription') as string | null;
    const seoKeywords = formData.get('seoKeywords') as string | null;
    const tagsRaw = formData.get('tags') as string | null;

    let coverImage = existing.coverImage;
    const coverFile = formData.get('coverImage') as File | null;
    if (coverFile && coverFile.size > 0) {
      coverImage = await saveCoverImage(coverFile, slug);
    }

    const wasPublished = existing.status === 'PUBLISHED';
    const publishedAt = status === 'PUBLISHED' && !wasPublished ? new Date() : existing.publishedAt;

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

    // Delete old tags and recreate
    await prisma.blogPostTag.deleteMany({ where: { postId: id } });

    const post = await prisma.blogPost.update({
      where: { id },
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

    return NextResponse.json(successResponse('Post updated.', post));
  } catch (err: any) {
    console.error('Blog PATCH error:', err);
    const status = (err.name === 'TokenExpiredError' || err.message === 'Unauthorized') ? 401 : err.message === 'Forbidden' ? 403 : 500;
    return NextResponse.json(errorResponse(err.message || 'Failed to update post.'), { status });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireRole(request, 'ADMIN');
    const { id } = await params;

    const post = await prisma.blogPost.findUnique({ where: { id } });
    if (!post) {
      return NextResponse.json(errorResponse('Post not found.'), { status: 404 });
    }

    await prisma.blogPost.delete({ where: { id } });

    // Try to delete cover image file
    if (post.coverImage?.startsWith('/uploads/')) {
      const filePath = join(process.cwd(), 'public', post.coverImage);
      unlink(filePath).catch(() => {});
    }

    return NextResponse.json(successResponse('Post deleted.'));
  } catch (err: any) {
    console.error('Blog DELETE error:', err);
    const status = (err.name === 'TokenExpiredError' || err.message === 'Unauthorized') ? 401 : err.message === 'Forbidden' ? 403 : 500;
    return NextResponse.json(errorResponse(err.message || 'Failed to delete post.'), { status });
  }
}
