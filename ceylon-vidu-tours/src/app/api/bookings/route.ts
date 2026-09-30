import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireRole } from '@/lib/require-role';
import {
    checkRateLimit,
    getClientIp,
    sanitizeInput,
    sanitizeObject,
    verifyRequestOrigin,
    applySecurityHeaders,
} from '@/lib/security';

/**
 * Auto-seed sample bookings if table is empty for instant demonstration
 */
async function autoSeedBookingsIfEmpty() {
    const count = await prisma.booking.count();
    if (count === 0) {
        // Find a tour package to link
        const tour = await prisma.tourPackage.findFirst();
        if (tour) {
            const sampleBookings = [
                {
                    bookingNumber: 'BK-2026-1001',
                    customerName: 'Sarah Jenkins',
                    customerEmail: 'sarah.jenkins@example.com',
                    customerPhone: '+1 (555) 234-5678',
                    tourPackageId: tour.id,
                    travelDate: new Date('2026-10-15'),
                    numberOfAdults: 2,
                    numberOfChildren: 1,
                    pickupLocation: 'Bandaranaike International Airport (BIA)',
                    specialRequests: 'Dietary preference: Vegetarian. Requires child seat in vehicle.',
                    totalAmount: tour.price * 2 + (tour.price * 0.5),
                    currency: 'USD',
                    status: 'CONFIRMED' as const,
                    paymentStatus: 'PAID' as const,
                },
                {
                    bookingNumber: 'BK-2026-1002',
                    customerName: 'Michael Schmidt',
                    customerEmail: 'm.schmidt@berlin-travel.de',
                    customerPhone: '+49 171 9876543',
                    tourPackageId: tour.id,
                    travelDate: new Date('2026-11-02'),
                    numberOfAdults: 2,
                    numberOfChildren: 0,
                    pickupLocation: 'Cinnamon Grand Hotel, Colombo',
                    specialRequests: 'Anniversary celebration trip. Please arrange flowers in hotel room.',
                    totalAmount: tour.price * 2,
                    currency: 'USD',
                    status: 'PENDING' as const,
                    paymentStatus: 'PENDING' as const,
                },
                {
                    bookingNumber: 'BK-2026-1003',
                    customerName: 'Elena Rostova',
                    customerEmail: 'elena.rostova@travel.ru',
                    customerPhone: '+7 916 123-45-67',
                    tourPackageId: tour.id,
                    travelDate: new Date('2026-12-20'),
                    numberOfAdults: 4,
                    numberOfChildren: 2,
                    pickupLocation: 'Heritance Ahungalla Resort',
                    specialRequests: 'Requires English-fluent tour guide.',
                    totalAmount: tour.price * 4 + (tour.price * 2 * 0.5),
                    currency: 'USD',
                    status: 'COMPLETED' as const,
                    paymentStatus: 'PAID' as const,
                }
            ];

            for (const b of sampleBookings) {
                const createdBooking = await prisma.booking.create({ data: b });
                if (b.paymentStatus === 'PAID') {
                    await prisma.payment.create({
                        data: {
                            paymentNumber: `PAY-${b.bookingNumber.replace('BK-', '')}`,
                            invoiceNumber: `INV-${b.bookingNumber.replace('BK-', '')}`,
                            bookingId: createdBooking.id,
                            customerName: b.customerName,
                            customerEmail: b.customerEmail,
                            paymentMethod: 'Credit Card (Stripe)',
                            amount: b.totalAmount,
                            currency: 'USD',
                            status: 'PAID',
                            notes: 'Online payment received via secure gateway.',
                        }
                    });
                }
            }
        }
    }
}

/**
 * GET /api/bookings
 * Fetch list of customer tour bookings
 */
export async function GET(request: NextRequest) {
    const response = new NextResponse();
    applySecurityHeaders(response);

    try {
        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'get_bookings', 60, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Too many requests. Please wait a moment.' },
                { status: 429 }
            );
        }

        await autoSeedBookingsIfEmpty();

        const { searchParams } = new URL(request.url);
        const search = sanitizeInput(searchParams.get('search') || '');
        const status = sanitizeInput(searchParams.get('status') || '');
        const paymentStatus = sanitizeInput(searchParams.get('paymentStatus') || '');
        const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
        const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
        const skip = (page - 1) * limit;

        const where: any = {};

        if (status && status !== 'all') {
            where.status = status.toUpperCase();
        }

        if (paymentStatus && paymentStatus !== 'all') {
            where.paymentStatus = paymentStatus.toUpperCase();
        }

        if (search) {
            where.OR = [
                { bookingNumber: { contains: search, mode: 'insensitive' } },
                { customerName: { contains: search, mode: 'insensitive' } },
                { customerEmail: { contains: search, mode: 'insensitive' } },
                { customerPhone: { contains: search, mode: 'insensitive' } },
                { tourPackage: { title: { contains: search, mode: 'insensitive' } } },
            ];
        }

        const [bookings, total] = await Promise.all([
            prisma.booking.findMany({
                where,
                include: {
                    tourPackage: {
                        select: {
                            id: true,
                            title: true,
                            slug: true,
                            image: true,
                            category: true,
                            duration: true,
                            price: true,
                        }
                    },
                    payments: true,
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            prisma.booking.count({ where }),
        ]);

        return NextResponse.json({
            success: true,
            data: bookings,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error: any) {
        console.error('Error fetching bookings:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to retrieve bookings.' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/bookings
 * Create a new booking request (Customer or Admin)
 */
export async function POST(request: NextRequest) {
    try {
        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'create_booking', 20, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Rate limit exceeded for booking requests.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const sanitizedBody = sanitizeObject(body);

        const {
            customerName,
            customerEmail,
            customerPhone,
            tourPackageId,
            travelDate,
            numberOfAdults,
            numberOfChildren,
            pickupLocation,
            specialRequests,
        } = sanitizedBody;

        if (!customerName || !customerEmail || !customerPhone || !tourPackageId || !travelDate) {
            return NextResponse.json(
                { success: false, message: 'Missing required booking fields (Name, Email, Phone, Tour Package, Travel Date).' },
                { status: 400 }
            );
        }

        const tourPackage = await prisma.tourPackage.findUnique({
            where: { id: tourPackageId },
        });

        if (!tourPackage) {
            return NextResponse.json(
                { success: false, message: 'Selected tour package does not exist.' },
                { status: 404 }
            );
        }

        const adults = Math.max(1, parseInt(numberOfAdults || '1', 10));
        const children = Math.max(0, parseInt(numberOfChildren || '0', 10));

        // Calculate pricing: full adult price + 50% child price
        const adultTotal = tourPackage.price * adults;
        const childTotal = (tourPackage.price * 0.5) * children;
        const totalAmount = adultTotal + childTotal;

        // Auto generate booking number BK-YYYY-XXXX
        const year = new Date().getFullYear();
        const randomDigits = Math.floor(1000 + Math.random() * 9000);
        const bookingNumber = `BK-${year}-${randomDigits}`;

        const booking = await prisma.booking.create({
            data: {
                bookingNumber,
                customerName,
                customerEmail,
                customerPhone,
                tourPackageId: tourPackage.id,
                travelDate: new Date(travelDate),
                numberOfAdults: adults,
                numberOfChildren: children,
                pickupLocation: pickupLocation || tourPackage.startLocation || 'Colombo BIA Airport',
                specialRequests: specialRequests || null,
                totalAmount,
                currency: tourPackage.currency || 'USD',
                status: 'PENDING',
                paymentStatus: 'PENDING',
            },
            include: {
                tourPackage: true,
            }
        });

        // Increment booking count on tour package
        await prisma.tourPackage.update({
            where: { id: tourPackage.id },
            data: { bookingsCount: { increment: 1 } },
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Booking request created successfully.',
                data: booking,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error creating booking:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to submit booking request.' },
            { status: 500 }
        );
    }
}
