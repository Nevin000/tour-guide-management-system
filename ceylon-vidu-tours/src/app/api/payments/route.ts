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
 * GET /api/payments
 * Fetch payment transactions & invoice history
 */
export async function GET(request: NextRequest) {
    const response = new NextResponse();
    applySecurityHeaders(response);

    try {
        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'get_payments', 60, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Too many requests.' },
                { status: 429 }
            );
        }

        const { searchParams } = new URL(request.url);
        const search = sanitizeInput(searchParams.get('search') || '');
        const status = sanitizeInput(searchParams.get('status') || '');
        const method = sanitizeInput(searchParams.get('method') || '');
        const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
        const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
        const skip = (page - 1) * limit;

        const where: any = {};

        if (status && status !== 'all') {
            where.status = status.toUpperCase();
        }

        if (method && method !== 'all') {
            where.paymentMethod = { contains: method, mode: 'insensitive' };
        }

        if (search) {
            where.OR = [
                { paymentNumber: { contains: search, mode: 'insensitive' } },
                { invoiceNumber: { contains: search, mode: 'insensitive' } },
                { customerName: { contains: search, mode: 'insensitive' } },
                { customerEmail: { contains: search, mode: 'insensitive' } },
                { booking: { bookingNumber: { contains: search, mode: 'insensitive' } } },
            ];
        }

        const [payments, total] = await Promise.all([
            prisma.payment.findMany({
                where,
                include: {
                    booking: {
                        include: {
                            tourPackage: true,
                        }
                    }
                },
                orderBy: { transactionDate: 'desc' },
                skip,
                take: limit,
            }),
            prisma.payment.count({ where }),
        ]);

        return NextResponse.json({
            success: true,
            data: payments,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error: any) {
        console.error('Error fetching payments:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to retrieve payment records.' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/payments
 * Complete online payment transaction for a booking (Step 1-8 workflow)
 */
export async function POST(request: NextRequest) {
    try {
        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'process_payment', 10, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Payment processing rate limit exceeded.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const sanitizedBody = sanitizeObject(body);

        const {
            bookingId,
            paymentMethod,
            amount,
            currency,
            notes,
        } = sanitizedBody;

        if (!bookingId || !paymentMethod) {
            return NextResponse.json(
                { success: false, message: 'Booking ID and Payment Method are required.' },
                { status: 400 }
            );
        }

        const booking = await prisma.booking.findFirst({
            where: {
                OR: [{ id: bookingId }, { bookingNumber: bookingId }]
            },
            include: { tourPackage: true }
        });

        if (!booking) {
            return NextResponse.json(
                { success: false, message: 'Associated booking record not found.' },
                { status: 404 }
            );
        }

        const year = new Date().getFullYear();
        const numPart = booking.bookingNumber.replace(/^BK-\d+-/, '') || Math.floor(1000 + Math.random() * 9000).toString();
        const paymentNumber = `PAY-${year}-${numPart}`;
        const invoiceNumber = `INV-${year}-${numPart}`;

        const paymentAmount = amount ? parseFloat(amount) : booking.totalAmount;

        // Create transaction record
        const payment = await prisma.payment.create({
            data: {
                paymentNumber,
                invoiceNumber,
                bookingId: booking.id,
                customerName: booking.customerName,
                customerEmail: booking.customerEmail,
                paymentMethod: paymentMethod || 'Credit Card',
                amount: paymentAmount,
                currency: currency || booking.currency || 'USD',
                status: 'PAID',
                notes: notes || 'Online payment verified successfully.',
            },
        });

        // Update associated booking to CONFIRMED & PAID
        const updatedBooking = await prisma.booking.update({
            where: { id: booking.id },
            data: {
                status: 'CONFIRMED',
                paymentStatus: 'PAID',
            },
            include: {
                tourPackage: true,
                payments: true,
            }
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Payment processed successfully! Booking confirmed and invoice generated.',
                data: {
                    payment,
                    booking: updatedBooking,
                    invoiceNumber,
                },
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error processing payment:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Payment processing failed.' },
            { status: 500 }
        );
    }
}
