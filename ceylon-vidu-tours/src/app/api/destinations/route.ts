export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { ZodError } from 'zod';
import { z } from 'zod';

import { errorResponse, successResponse } from '@/lib/response';
import { prisma } from '@/lib/prisma';
import { requireRole } from '@/lib/require-role';

const destinationSchema = z.object({
  name: z.string().min(1, 'Name is required.').max(200),
  slug: z.string().min(1, 'Slug is required.').max(255),
  shortDescription: z.string().optional().nullable(),
  description: z.string().min(1, 'Description is required.'),
  location: z.string().optional().nullable(),
  district: z.string().optional().nullable(),
  province: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  bestTime: z.string().optional().nullable(),
  duration: z.string().optional().nullable(),
  budget: z.string().optional().nullable(),
  latitude: z.number().optional().nullable(),
  longitude: z.number().optional().nullable(),
  weatherAvg: z.string().optional().nullable(),
  weatherRain: z.string().optional().nullable(),
  howToGetThere: z.string().optional().nullable(),
  seoTitle: z.string().optional().nullable(),
  seoDescription: z.string().optional().nullable(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
});

function getErrorResponse(error: any, contextMessage: string) {
  console.error(`${contextMessage} error:`, error);
  if (error instanceof ZodError) {
    return NextResponse.json(errorResponse('Validation failed.', error.flatten()), { status: 400 });
  }
  const isAuthErr = error.message === 'Unauthorized' || 
                    error.name === 'TokenExpiredError' || 
                    error.name === 'JsonWebTokenError' || 
                    error.message?.includes('expired') || 
                    error.message?.includes('jwt');
  const status = error.message === 'Forbidden' ? 403 : (isAuthErr ? 401 : 500);
  return NextResponse.json(errorResponse(error.message || 'Something went wrong.'), { status });
}

async function saveUploadedFile(file: File, prefix: string, baseSlug: string): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadDir = join(process.cwd(), 'public', 'uploads');
  await mkdir(uploadDir, { recursive: true });
  const fileExt = file.name.split('.').pop() || 'jpg';
  const fileName = `${baseSlug}-${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}.${fileExt}`;
  const filePath = join(uploadDir, fileName);
  await writeFile(filePath, buffer);
  return `/uploads/${fileName}`;
}

export async function GET(request: NextRequest) {
  try {
    const items = await (prisma as any).destination.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        images: true,
        highlights: true,
      }
    });

    return NextResponse.json(
      successResponse('Destinations retrieved successfully.', items),
      { status: 200 }
    );
  } catch (error: any) {
    return getErrorResponse(error, 'Fetch destinations');
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = requireRole(request, 'ADMIN');

    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const ogFile = formData.get('ogFile') as File | null;

    const name = formData.get('name') as string || '';
    let slug = formData.get('slug') as string || '';
    if (!slug && name) {
      slug = name.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    }

    const shortDescription = formData.get('shortDescription') as string || null;
    const description = formData.get('description') as string || '';
    const location = formData.get('location') as string || null;
    const district = formData.get('district') as string || null;
    const province = formData.get('province') as string || null;
    const category = formData.get('category') as string || null;
    const bestTime = formData.get('bestTime') as string || null;
    const duration = formData.get('duration') as string || null;
    const budget = formData.get('budget') as string || null;

    const rawLat = formData.get('latitude');
    const latitude = rawLat !== null && rawLat !== '' ? Number(rawLat) : null;
    const rawLng = formData.get('longitude');
    const longitude = rawLng !== null && rawLng !== '' ? Number(rawLng) : null;

    const weatherAvg = formData.get('weatherAvg') as string || null;
    const weatherRain = formData.get('weatherRain') as string || null;
    const howToGetThere = formData.get('howToGetThere') as string || null;

    const seoTitle = formData.get('seoTitle') as string || null;
    const seoDescription = formData.get('seoDescription') as string || null;
    const featured = formData.get('featured') === 'true';
    const published = formData.get('published') === 'true';

    const validatedData = destinationSchema.parse({
      name,
      slug,
      shortDescription,
      description,
      location,
      district,
      province,
      category,
      bestTime,
      duration,
      budget,
      latitude,
      longitude,
      weatherAvg,
      weatherRain,
      howToGetThere,
      seoTitle,
      seoDescription,
      featured,
      published
    });

    // Check slug uniqueness
    const existing = await (prisma as any).destination.findUnique({
      where: { slug: validatedData.slug }
    });
    if (existing) {
      return NextResponse.json(
        errorResponse(`Destination slug "${validatedData.slug}" is already in use. Please choose another unique slug.`),
        { status: 400 }
      );
    }

    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        errorResponse('Destination cover image upload is required.'),
        { status: 400 }
      );
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json(errorResponse('Please upload a valid cover image file.'), { status: 400 });
    }
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(errorResponse('Cover image must be less than 5MB.'), { status: 400 });
    }

    const dbUrl = await saveUploadedFile(file, 'cover', validatedData.slug);

    // Handle OG image upload if supplied
    let ogDbUrl: string | null = null;
    if (ogFile && (ogFile instanceof File) && ogFile.size > 0) {
      if (!ogFile.type.startsWith('image/')) {
        return NextResponse.json(errorResponse('Please upload a valid image file for OG Image.'), { status: 400 });
      }
      if (ogFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(errorResponse('OG Image must be less than 5MB.'), { status: 400 });
      }
      ogDbUrl = await saveUploadedFile(ogFile, 'og', validatedData.slug);
    }

    // Process nested arrays: Highlights
    const highlightsDataRaw = formData.get('highlights') as string || '[]';
    const highlightsData = JSON.parse(highlightsDataRaw);
    const highlightsToCreate = [];
    for (let i = 0; i < highlightsData.length; i++) {
      const item = highlightsData[i];
      let imgUrl = item.image || '';
      const fileForHighlight = formData.get(`highlight_image_${i}`) as File | null;
      if (fileForHighlight && fileForHighlight.size > 0) {
        imgUrl = await saveUploadedFile(fileForHighlight, 'highlight', validatedData.slug);
      }
      highlightsToCreate.push({
        title: item.title || '',
        description: item.description || '',
        image: imgUrl
      });
    }





    // Process nested arrays: Gallery Images
    const galleryImagesToCreate = [];
    let gIndex = 0;
    while (true) {
      const gFile = formData.get(`gallery_image_${gIndex}`) as File | null;
      if (!gFile) break;
      if (gFile.size > 0) {
        const url = await saveUploadedFile(gFile, 'gallery', validatedData.slug);
        galleryImagesToCreate.push({ url });
      }
      gIndex++;
    }

    const newDest = await (prisma as any).destination.create({
      data: {
        name: validatedData.name,
        slug: validatedData.slug,
        shortDescription: validatedData.shortDescription,
        description: validatedData.description,
        image: dbUrl,
        ogImage: ogDbUrl,
        location: validatedData.location,
        district: validatedData.district,
        province: validatedData.province,
        category: validatedData.category,
        bestTime: validatedData.bestTime,
        duration: validatedData.duration,
        budget: validatedData.budget,
        latitude: validatedData.latitude,
        longitude: validatedData.longitude,
        weatherAvg: validatedData.weatherAvg,
        weatherRain: validatedData.weatherRain,
        howToGetThere: validatedData.howToGetThere,
        seoTitle: validatedData.seoTitle,
        seoDescription: validatedData.seoDescription,
        featured: validatedData.featured,
        published: validatedData.published,
        images: {
          create: galleryImagesToCreate
        },
        highlights: {
          create: highlightsToCreate
        }
      },
      include: {
        images: true,
        highlights: true,
      }
    });

    return NextResponse.json(
      successResponse('Destination created successfully.', newDest),
      { status: 201 }
    );
  } catch (error: any) {
    return getErrorResponse(error, 'Create destination');
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const admin = requireRole(request, 'ADMIN');

    const { searchParams } = request.nextUrl;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        errorResponse('Destination ID is required.'),
        { status: 400 }
      );
    }

    const ids = id.split(',');
    await (prisma as any).destination.deleteMany({
      where: { id: { in: ids } }
    });

    return NextResponse.json(
      successResponse('Destination(s) deleted successfully.'),
      { status: 200 }
    );
  } catch (error: any) {
    return getErrorResponse(error, 'Delete destination');
  }
}

export async function PUT(request: NextRequest) {
  try {
    const admin = requireRole(request, 'ADMIN');

    const formData = await request.formData();
    const id = formData.get('id') as string || '';
    const file = formData.get('file') as File | null;
    const ogFile = formData.get('ogFile') as File | null;

    const name = formData.get('name') as string || '';
    let slug = formData.get('slug') as string || '';
    if (!slug && name) {
      slug = name.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    }

    const shortDescription = formData.get('shortDescription') as string || null;
    const description = formData.get('description') as string || '';
    const location = formData.get('location') as string || null;
    const district = formData.get('district') as string || null;
    const province = formData.get('province') as string || null;
    const category = formData.get('category') as string || null;
    const bestTime = formData.get('bestTime') as string || null;
    const duration = formData.get('duration') as string || null;
    const budget = formData.get('budget') as string || null;

    const rawLat = formData.get('latitude');
    const latitude = rawLat !== null && rawLat !== '' ? Number(rawLat) : null;
    const rawLng = formData.get('longitude');
    const longitude = rawLng !== null && rawLng !== '' ? Number(rawLng) : null;

    const weatherAvg = formData.get('weatherAvg') as string || null;
    const weatherRain = formData.get('weatherRain') as string || null;
    const howToGetThere = formData.get('howToGetThere') as string || null;

    const seoTitle = formData.get('seoTitle') as string || null;
    const seoDescription = formData.get('seoDescription') as string || null;
    const featured = formData.get('featured') === 'true';
    const published = formData.get('published') === 'true';

    if (!id) {
      return NextResponse.json(
        errorResponse('Destination ID is required.'),
        { status: 400 }
      );
    }

    const validatedData = destinationSchema.parse({
      name,
      slug,
      shortDescription,
      description,
      location,
      district,
      province,
      category,
      bestTime,
      duration,
      budget,
      latitude,
      longitude,
      weatherAvg,
      howToGetThere,
      seoTitle,
      seoDescription,
      featured,
      published
    });

    // Check slug uniqueness excluding current destination
    const existing = await (prisma as any).destination.findFirst({
      where: {
        slug: validatedData.slug,
        NOT: { id }
      }
    });

    if (existing) {
      return NextResponse.json(
        errorResponse(`Destination slug "${validatedData.slug}" is already in use by another destination.`),
        { status: 400 }
      );
    }

    let dbUrl: string | undefined;
    if (file && (file instanceof File) && file.size > 0) {
      if (!file.type.startsWith('image/')) {
        return NextResponse.json(errorResponse('Please upload a valid cover image file.'), { status: 400 });
      }
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(errorResponse('Cover image must be less than 5MB.'), { status: 400 });
      }
      dbUrl = await saveUploadedFile(file, 'cover', validatedData.slug);
    }

    let ogDbUrl: string | null | undefined;
    if (ogFile && (ogFile instanceof File) && ogFile.size > 0) {
      if (!ogFile.type.startsWith('image/')) {
        return NextResponse.json(errorResponse('Please upload a valid image file for OG Image.'), { status: 400 });
      }
      if (ogFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(errorResponse('OG Image must be less than 5MB.'), { status: 400 });
      }
      ogDbUrl = await saveUploadedFile(ogFile, 'og', validatedData.slug);
    }

    // Process nested arrays: Highlights
    const highlightsDataRaw = formData.get('highlights') as string || '[]';
    const highlightsData = JSON.parse(highlightsDataRaw);
    const highlightsToCreate = [];
    for (let i = 0; i < highlightsData.length; i++) {
      const item = highlightsData[i];
      let imgUrl = item.image || '';
      const fileForHighlight = formData.get(`highlight_image_${i}`) as File | null;
      if (fileForHighlight && fileForHighlight.size > 0) {
        imgUrl = await saveUploadedFile(fileForHighlight, 'highlight', validatedData.slug);
      }
      highlightsToCreate.push({
        title: item.title || '',
        description: item.description || '',
        image: imgUrl
      });
    }





    // Process nested arrays: Gallery Images
    const existingGalleryUrlsRaw = formData.get('galleryImages') as string || '[]';
    const existingGalleryUrls = JSON.parse(existingGalleryUrlsRaw) as string[];
    const galleryImagesToCreate = [...existingGalleryUrls.map(url => ({ url }))];

    let gIndex = 0;
    while (true) {
      const gFile = formData.get(`gallery_image_${gIndex}`) as File | null;
      if (!gFile) break;
      if (gFile.size > 0) {
        const url = await saveUploadedFile(gFile, 'gallery', validatedData.slug);
        galleryImagesToCreate.push({ url });
      }
      gIndex++;
    }

    const updateData: any = {
      name: validatedData.name,
      slug: validatedData.slug,
      shortDescription: validatedData.shortDescription,
      description: validatedData.description,
      location: validatedData.location,
      district: validatedData.district,
      province: validatedData.province,
      category: validatedData.category,
      bestTime: validatedData.bestTime,
      duration: validatedData.duration,
      budget: validatedData.budget,
      latitude: validatedData.latitude,
      longitude: validatedData.longitude,
      weatherAvg: validatedData.weatherAvg,
      weatherRain: validatedData.weatherRain,
      howToGetThere: validatedData.howToGetThere,
      seoTitle: validatedData.seoTitle,
      seoDescription: validatedData.seoDescription,
      featured: validatedData.featured,
      published: validatedData.published
    };

    if (dbUrl) {
      updateData.image = dbUrl;
    }
    if (ogDbUrl !== undefined) {
      updateData.ogImage = ogDbUrl;
    }

    // Run delete-and-create in a transaction to prevent inconsistent states
    await (prisma as any).$transaction([
      (prisma as any).destinationImage.deleteMany({ where: { destinationId: id } }),
      (prisma as any).destinationHighlight.deleteMany({ where: { destinationId: id } }),


      (prisma as any).destination.update({
        where: { id },
        data: {
          ...updateData,
          images: {
            create: galleryImagesToCreate
          },
          highlights: {
            create: highlightsToCreate
          }
        }
      })
    ]);

    const updatedDest = await (prisma as any).destination.findUnique({
      where: { id },
      include: {
        images: true,
        highlights: true,
      }
    });

    return NextResponse.json(
      successResponse('Destination updated successfully.', updatedDest),
      { status: 200 }
    );
  } catch (error: any) {
    return getErrorResponse(error, 'Update destination');
  }
}
