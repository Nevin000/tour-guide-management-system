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
 * GET /api/bookings/[id]
 * Fetch single booking details
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params;
        const idOrNumber = sanitizeInput(resolvedParams.id || '');

        const isUuid = isValidUUID(idOrNumber);
        const booking = await prisma.booking.findFirst({
            where: isUuid
                ? { id: idOrNumber }
                : { bookingNumber: idOrNumber },
            include: {
                tourPackage: true,
                payments: true,
            },
        });

        if (!booking) {
            return NextResponse.json(
                { success: false, message: 'Booking not found.' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: booking,
        });
    } catch (error: any) {
        console.error('Error fetching single booking:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to retrieve booking details.' },
            { status: 500 }
        );
    }
}

/**
 * PUT /api/bookings/[id]
 * High-Security Admin Endpoint to update/confirm/cancel booking details
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
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
        const rateCheck = checkRateLimit(clientIp, 'update_booking', 30, 60 * 1000);
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
        const existing = await prisma.booking.findFirst({
            where: isUuid
                ? { id: idOrNumber }
                : { bookingNumber: idOrNumber },
        });

        if (!existing) {
            return NextResponse.json(
                { success: false, message: 'Booking not found for update.' },
                { status: 404 }
            );
        }

        const updateData: any = {};

        if (sanitizedBody.status && ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'].includes(sanitizedBody.status.toUpperCase())) {
            updateData.status = sanitizedBody.status.toUpperCase();
        }

        if (sanitizedBody.paymentStatus && ['PAID', 'PENDING', 'FAILED', 'REFUNDED'].includes(sanitizedBody.paymentStatus.toUpperCase())) {
            updateData.paymentStatus = sanitizedBody.paymentStatus.toUpperCase();
        }

        if (sanitizedBody.customerName) updateData.customerName = sanitizedBody.customerName;
        if (sanitizedBody.customerEmail) updateData.customerEmail = sanitizedBody.customerEmail;
        if (sanitizedBody.customerPhone) updateData.customerPhone = sanitizedBody.customerPhone;
        if (sanitizedBody.pickupLocation) updateData.pickupLocation = sanitizedBody.pickupLocation;
        if (sanitizedBody.specialRequests !== undefined) updateData.specialRequests = sanitizedBody.specialRequests;
        if (sanitizedBody.travelDate) updateData.travelDate = new Date(sanitizedBody.travelDate);
        if (sanitizedBody.numberOfAdults !== undefined) updateData.numberOfAdults = parseInt(sanitizedBody.numberOfAdults, 10);
        if (sanitizedBody.numberOfChildren !== undefined) updateData.numberOfChildren = parseInt(sanitizedBody.numberOfChildren, 10);

        const updatedBooking = await prisma.booking.update({
            where: { id: existing.id },
            data: updateData,
            include: {
                tourPackage: true,
                payments: true,
            },
        });

        return NextResponse.json({
            success: true,
            message: 'Booking details updated successfully.',
            data: updatedBooking,
        });
    } catch (error: any) {
        console.error('Error updating booking:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to update booking.' },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/bookings/[id]
 * High-Security Admin Endpoint to remove booking
 */
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
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

        const resolvedParams = await params;
        const idOrNumber = sanitizeInput(resolvedParams.id || '');

        const isUuid = isValidUUID(idOrNumber);
        const existing = await prisma.booking.findFirst({
            where: isUuid
                ? { id: idOrNumber }
                : { bookingNumber: idOrNumber },
        });

        if (!existing) {
            return NextResponse.json(
                { success: false, message: 'Booking not found for deletion.' },
                { status: 404 }
            );
        }

        await prisma.booking.delete({
            where: { id: existing.id },
        });

        return NextResponse.json({
            success: true,
            message: 'Booking deleted successfully.',
        });
    } catch (error: any) {
        console.error('Error deleting booking:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete booking.' },
            { status: 500 }
        );
    }
}
