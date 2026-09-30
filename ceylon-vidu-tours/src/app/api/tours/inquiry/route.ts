import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
    checkRateLimit,
    getClientIp,
    sanitizeInput,
    sanitizeObject,
    verifyRequestOrigin,
    isValidUUID,
    applySecurityHeaders,
} from '@/lib/security';

export async function POST(request: NextRequest) {
    const response = new NextResponse();
    applySecurityHeaders(response);

    try {
        // Origin verification
        if (!verifyRequestOrigin(request)) {
            return NextResponse.json(
                { success: false, message: 'Forbidden: Invalid request origin.' },
                { status: 403 }
            );
        }

        // Strict rate limit: Max 5 inquiry submissions per 10 minutes per IP
        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'tour_inquiry', 5, 10 * 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Too many booking requests. Please wait ${Math.ceil(rateCheck.resetInSec / 60)} minutes before trying again.`,
                },
                { status: 429 }
            );
        }

        const body = await request.json();

        // Honeypot anti-spam protection check
        if (body.website || body.honeypot || body.company_address) {
            // Silently reject bots without disclosing security trap
            return NextResponse.json(
                { success: true, message: 'Your booking request has been received.' },
                { status: 200 }
            );
        }

        const sanitized = sanitizeObject(body);
        const { tourId, name, email, phone, travelDate, travelersCount, message } = sanitized;

        // Basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: 'Name, email, and phone number are required fields.' },
                { status: 400 }
            );
        }

        // Email format regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        let validTourId: string | null = null;
        if (tourId && isValidUUID(tourId)) {
            const tour = await prisma.tourPackage.findUnique({ where: { id: tourId } });
            if (tour) validTourId = tour.id;
        }

        const count = Math.max(1, Math.min(100, parseInt(travelersCount || '1', 10)));

        const inquiry = await prisma.tourInquiry.create({
            data: {
                tourId: validTourId,
                name: sanitizeInput(name),
                email: sanitizeInput(email).toLowerCase(),
                phone: sanitizeInput(phone),
                travelDate: travelDate ? sanitizeInput(travelDate) : null,
                travelersCount: isNaN(count) ? 1 : count,
                message: message ? sanitizeInput(message) : null,
                status: 'PENDING',
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you! Your tour inquiry has been submitted securely. Our travel specialists will contact you shortly.',
                data: { inquiryId: inquiry.id },
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error submitting tour inquiry:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred while submitting your booking request.' },
            { status: 500 }
        );
    }
}
