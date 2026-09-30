import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireRole } from '@/lib/require-role';
import {
    checkRateLimit,
    getClientIp,
    sanitizeInput,
    verifyRequestOrigin,
    isValidUUID,
} from '@/lib/security';

/**
 * POST /api/tours/[slug]/duplicate
 * High-Security Admin Endpoint to duplicate an existing tour package
 */
export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        if (!verifyRequestOrigin(request)) {
            return NextResponse.json(
                { success: false, message: 'Forbidden: Invalid request origin.' },
                { status: 403 }
            );
        }

        const user = requireRole(request, 'ADMIN');
        if (!user) {
            return NextResponse.json({ success: false, message: 'Unauthorized access.' }, { status: 401 });
        }

        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'duplicate_tour', 15, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Rate limit exceeded for duplication requests.' },
                { status: 429 }
            );
        }

        const resolvedParams = await params;
        const slugOrId = sanitizeInput(resolvedParams.slug || '');

        const isUuid = isValidUUID(slugOrId);
        const existingTour = await prisma.tourPackage.findFirst({
            where: isUuid
                ? { OR: [{ id: slugOrId }, { slug: slugOrId }] }
                : { slug: slugOrId },
        });

        if (!existingTour) {
            return NextResponse.json(
                { success: false, message: 'Source tour package not found.' },
                { status: 404 }
            );
        }

        const newTitle = `${existingTour.title} (Copy)`;
        const baseSlug = newTitle
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');
        
        let newSlug = baseSlug;
        let counter = 1;
        while (await prisma.tourPackage.findUnique({ where: { slug: newSlug } })) {
            newSlug = `${baseSlug}-${counter}`;
            counter++;
        }

        const duplicatedTour = await prisma.tourPackage.create({
            data: {
                title: newTitle,
                slug: newSlug,
                category: existingTour.category,
                duration: existingTour.duration,
                daysCount: existingTour.daysCount,
                nightsCount: existingTour.nightsCount,
                price: existingTour.price,
                discountPrice: existingTour.discountPrice,
                currency: existingTour.currency,
                rating: 5.0,
                reviewsCount: 0,
                bookingsCount: 0,
                image: existingTour.image,
                gallery: existingTour.gallery,
                videoUrl: existingTour.videoUrl,
                ogImage: existingTour.ogImage,
                shortDescription: existingTour.shortDescription,
                overview: existingTour.overview,
                destinations: existingTour.destinations,
                highlights: existingTour.highlights,
                itinerary: existingTour.itinerary,
                included: existingTour.included,
                excluded: existingTour.excluded,
                featuredTag: existingTour.featuredTag,
                featured: false,
                published: false,
                status: 'DRAFT',
                maxGroupSize: existingTour.maxGroupSize,
                difficulty: existingTour.difficulty,
                startLocation: existingTour.startLocation,
                endLocation: existingTour.endLocation,
                googleMapLocation: existingTour.googleMapLocation,
                seoTitle: existingTour.seoTitle ? `${existingTour.seoTitle} (Copy)` : null,
                seoDescription: existingTour.seoDescription,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Tour package duplicated successfully as Draft.',
                data: duplicatedTour,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error duplicating tour:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to duplicate tour package.' },
            { status: 500 }
        );
    }
}
