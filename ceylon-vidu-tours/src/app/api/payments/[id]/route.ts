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
} from '@/lib/security';

/**
 * GET /api/payments/[id]
 * Fetch single payment record with invoice and booking
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params;
        const idOrNumber = sanitizeInput(resolvedParams.id || '');

        const isUuid = isValidUUID(idOrNumber);
        const payment = await prisma.payment.findFirst({
            where: isUuid
                ? { id: idOrNumber }
                : { OR: [{ paymentNumber: idOrNumber }, { invoiceNumber: idOrNumber }] },
            include: {
                booking: {
                    include: {
                        tourPackage: true,
                    }
                }
            }
        });

        if (!payment) {
            return NextResponse.json(
                { success: false, message: 'Payment record not found.' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: payment,
        });
    } catch (error: any) {
        console.error('Error fetching payment:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to retrieve payment record.' },
            { status: 500 }
        );
    }
}

/**
 * PUT /api/payments/[id]
 * Refund Management endpoint
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        if (!verifyRequestOrigin(request)) {
            return NextResponse.json(
                { success: false, message: 'Forbidden: Invalid origin.' },
                { status: 403 }
            );
        }

        const user = requireRole(request, 'ADMIN');
        if (!user) {
            return NextResponse.json({ success: false, message: 'Unauthorized access.' }, { status: 401 });
        }

        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'refund_payment', 10, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Rate limit exceeded.' },
                { status: 429 }
            );
        }

        const resolvedParams = await params;
        const idOrNumber = sanitizeInput(resolvedParams.id || '');
        const body = await request.json();
        const sanitizedBody = sanitizeObject(body);

        const isUuid = isValidUUID(idOrNumber);
        const existing = await prisma.payment.findFirst({
            where: isUuid
                ? { id: idOrNumber }
                : { OR: [{ paymentNumber: idOrNumber }, { invoiceNumber: idOrNumber }] },
        });

        if (!existing) {
            return NextResponse.json(
                { success: false, message: 'Payment record not found.' },
                { status: 404 }
            );
        }

        const action = sanitizedBody.action || 'REFUND';
        const notes = sanitizedBody.notes || 'Payment refunded by administrator.';

        if (action === 'REFUND') {
            const updatedPayment = await prisma.payment.update({
                where: { id: existing.id },
                data: {
                    status: 'REFUNDED',
                    notes: `${existing.notes ? existing.notes + ' | ' : ''}${notes}`,
                }
            });

            // Also update associated booking payment status
            await prisma.booking.update({
                where: { id: existing.bookingId },
                data: {
                    paymentStatus: 'REFUNDED',
                    status: 'CANCELLED',
                }
            });

            return NextResponse.json({
                success: true,
                message: 'Payment refunded successfully and booking cancelled.',
                data: updatedPayment,
            });
        }

        return NextResponse.json(
            { success: false, message: 'Invalid payment action specified.' },
            { status: 400 }
        );
    } catch (error: any) {
        console.error('Error modifying payment:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to modify payment.' },
            { status: 500 }
        );
    }
}
