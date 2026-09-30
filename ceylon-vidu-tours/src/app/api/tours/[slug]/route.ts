import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireRole } from '@/lib/require-role';
import {
    checkRateLimit,
    getClientIp,
    sanitizeInput,
    sanitizeObject,
    verifyRequestOrigin,
    isValidUUID,
    applySecurityHeaders,
    decodeHtmlEntities,
    decodeObjectEntities,
} from '@/lib/security';

/**
 * GET /api/tours/[slug]
 * Public Single Tour Fetcher with Rate Limiting & Input Sanitization
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const response = new NextResponse();
    applySecurityHeaders(response);

    try {
        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'get_single_tour', 60, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Too many requests. Please wait a moment.' },
                { status: 429 }
            );
        }

        const resolvedParams = await params;
        const slugOrId = sanitizeInput(resolvedParams.slug || '');

        if (!slugOrId) {
            return NextResponse.json(
                { success: false, message: 'Tour identifier is required.' },
                { status: 400 }
            );
        }

        const isUuid = isValidUUID(slugOrId);
        let tour: any = null;

        try {
            tour = await prisma.tourPackage.findFirst({
                where: isUuid
                    ? { OR: [{ id: slugOrId }, { slug: slugOrId }] }
                    : { slug: slugOrId },
                include: {
                    destination: {
                        select: { id: true, name: true, slug: true, image: true, shortDescription: true }
                    },
                    blogPosts: {
                        where: { status: 'PUBLISHED' },
                        select: { id: true, title: true, slug: true, coverImage: true, excerpt: true }
                    }
                } as any
            });
        } catch (includeErr) {
            console.warn("Retrying GET single tour query without relations:", includeErr);
            tour = await prisma.tourPackage.findFirst({
                where: isUuid
                    ? { OR: [{ id: slugOrId }, { slug: slugOrId }] }
                    : { slug: slugOrId },
            });
        }

        if (!tour) {
            return NextResponse.json(
                { success: false, message: 'Tour package not found.' },
                { status: 404 }
            );
        }

        // Parse JSON strings back to structured arrays and decode any encoded HTML entities (such as &#x2F; -> /)
        const formattedTour = {
            ...tour,
            image: decodeHtmlEntities(tour.image || ''),
            ogImage: decodeHtmlEntities(tour.ogImage || ''),
            destinations: decodeObjectEntities(parseJsonArray(tour.destinations)),
            highlights: decodeObjectEntities(parseJsonArray(tour.highlights)),
            itinerary: decodeObjectEntities(parseJsonArray(tour.itinerary)),
            included: decodeObjectEntities(parseJsonArray(tour.included)),
            excluded: decodeObjectEntities(parseJsonArray(tour.excluded)),
            faqs: decodeObjectEntities(parseJsonArray((tour as any).faqs || '[]')),
            gallery: decodeObjectEntities(parseJsonArray(tour.gallery || '[]')),
            vehicleOptions: decodeObjectEntities(parseJsonArray((tour as any).vehicleOptions || '[]')),
            includedActivities: decodeObjectEntities(parseJsonArray((tour as any).includedActivities || '[]')),
            excludedActivities: decodeObjectEntities(parseJsonArray((tour as any).excludedActivities || '[]')),
        };

        return NextResponse.json({
            success: true,
            data: formattedTour,
        });
    } catch (error: any) {
        console.error('Error fetching single tour:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to retrieve tour details.' },
            { status: 500 }
        );
    }
}

/**
 * PUT /api/tours/[slug]
 * High-Security Admin Tour Updater
 */
export async function PUT(
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
            return NextResponse.json({ success: false, message: 'Unauthorized.' }, { status: 401 });
        }

        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'update_tour', 30, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Rate limit exceeded.' },
                { status: 429 }
            );
        }

        const resolvedParams = await params;
        const slugOrId = sanitizeInput(resolvedParams.slug || '');
        const body = await request.json();
        const sanitizedBody = sanitizeObject(body);

        const isUuid = isValidUUID(slugOrId);
        const existingTour = await prisma.tourPackage.findFirst({
            where: isUuid
                ? { OR: [{ id: slugOrId }, { slug: slugOrId }] }
                : { slug: slugOrId },
        });

        if (!existingTour) {
            return NextResponse.json(
                { success: false, message: 'Tour package not found for update.' },
                { status: 404 }
            );
        }

        const updatedData: any = {};
        const fields = [
            'title',
            'category',
            'theme',
            'duration',
            'daysCount',
            'nightsCount',
            'price',
            'discountPrice',
            'rating',
            'reviewsCount',
            'image',
            'ogImage',
            'shortDescription',
            'overview',
            'bestTime',
            'popular',
            'published',
            'startLocation',
            'endLocation',
            'travelDistance',
            'estimatedTravelTime',
            'routeText',
            'whatToBring',
            'importantInfo',
            'safetyInfo',
            'accessibility',
            'canonicalUrl',
            'destinationId',
            'seoTitle',
            'seoDescription',
        ];

        fields.forEach((field) => {
            if (sanitizedBody[field] !== undefined) {
                if (field === 'price' || field === 'discountPrice' || field === 'rating') {
                    updatedData[field] = sanitizedBody[field] !== null ? parseFloat(sanitizedBody[field]) : null;
                } else if (field === 'daysCount' || field === 'nightsCount' || field === 'reviewsCount') {
                    updatedData[field] = parseInt(sanitizedBody[field], 10);
                } else if (field === 'published' || field === 'popular') {
                    updatedData[field] = Boolean(sanitizedBody[field]);
                } else if (field === 'destinationId') {
                    const destVal = sanitizedBody.destinationId;
                    updatedData.destinationId = (destVal && typeof destVal === 'string' && destVal.trim() !== '') ? destVal.trim() : null;
                } else {
                    updatedData[field] = sanitizedBody[field];
                }
            }
        });

        if (sanitizedBody.destinations) {
            updatedData.destinations = typeof sanitizedBody.destinations === 'string'
                ? sanitizedBody.destinations
                : JSON.stringify(sanitizedBody.destinations);
        }
        if (sanitizedBody.highlights) {
            updatedData.highlights = typeof sanitizedBody.highlights === 'string'
                ? sanitizedBody.highlights
                : JSON.stringify(sanitizedBody.highlights);
        }
        if (sanitizedBody.itinerary) {
            updatedData.itinerary = typeof sanitizedBody.itinerary === 'string'
                ? sanitizedBody.itinerary
                : JSON.stringify(sanitizedBody.itinerary);
        }
        if (sanitizedBody.included) {
            updatedData.included = typeof sanitizedBody.included === 'string'
                ? sanitizedBody.included
                : JSON.stringify(sanitizedBody.included);
        }
        if (sanitizedBody.excluded) {
            updatedData.excluded = typeof sanitizedBody.excluded === 'string'
                ? sanitizedBody.excluded
                : JSON.stringify(sanitizedBody.excluded);
        }
        if (sanitizedBody.faqs) {
            updatedData.faqs = typeof sanitizedBody.faqs === 'string'
                ? sanitizedBody.faqs
                : JSON.stringify(sanitizedBody.faqs);
        }
        if (sanitizedBody.gallery) {
            updatedData.gallery = typeof sanitizedBody.gallery === 'string'
                ? sanitizedBody.gallery
                : JSON.stringify(sanitizedBody.gallery);
        }
        if (sanitizedBody.vehicleOptions) {
            updatedData.vehicleOptions = typeof sanitizedBody.vehicleOptions === 'string'
                ? sanitizedBody.vehicleOptions
                : JSON.stringify(sanitizedBody.vehicleOptions);
        }
        if (sanitizedBody.includedActivities) {
            updatedData.includedActivities = typeof sanitizedBody.includedActivities === 'string'
                ? sanitizedBody.includedActivities
                : JSON.stringify(sanitizedBody.includedActivities);
        }
        if (sanitizedBody.excludedActivities) {
            updatedData.excludedActivities = typeof sanitizedBody.excludedActivities === 'string'
                ? sanitizedBody.excludedActivities
                : JSON.stringify(sanitizedBody.excludedActivities);
        }

        let updated;
        try {
            updated = await prisma.tourPackage.update({
                where: { id: existingTour.id },
                data: updatedData,
            });
        } catch (updateErr: any) {
            if (updateErr.message && updateErr.message.includes('Unknown argument')) {
                console.warn('Retrying update without optional fields:', updateErr.message);
                delete updatedData.travelStyle;
                delete updatedData.theme;
                delete updatedData.popular;
                delete updatedData.bestTime;
                delete updatedData.destinationId;
                delete updatedData.faqs;
                updated = await prisma.tourPackage.update({
                    where: { id: existingTour.id },
                    data: updatedData,
                });
            } else {
                throw updateErr;
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Tour package updated successfully.',
            data: updated,
        });
    } catch (error: any) {
        console.error('Error updating tour:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to update tour.' },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/tours/[slug]
 * High-Security Admin Tour Deleter
 */
export async function DELETE(
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
            return NextResponse.json({ success: false, message: 'Unauthorized.' }, { status: 401 });
        }

        const resolvedParams = await params;
        const slugOrId = sanitizeInput(resolvedParams.slug || '');

        const isUuid = isValidUUID(slugOrId);
        const tour = await prisma.tourPackage.findFirst({
            where: isUuid
                ? { OR: [{ id: slugOrId }, { slug: slugOrId }] }
                : { slug: slugOrId },
        });

        if (!tour) {
            return NextResponse.json(
                { success: false, message: 'Tour package not found for deletion.' },
                { status: 404 }
            );
        }

        await prisma.tourPackage.delete({
            where: { id: tour.id },
        });

        return NextResponse.json({
            success: true,
            message: 'Tour package deleted successfully.',
        });
    } catch (error: any) {
        console.error('Error deleting tour:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete tour package.' },
            { status: 500 }
        );
    }
}

function parseJsonArray(input: string): any[] {
    try {
        if (!input) return [];
        const unescaped = decodeHtmlEntities(input);
        const parsed = JSON.parse(unescaped);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}
