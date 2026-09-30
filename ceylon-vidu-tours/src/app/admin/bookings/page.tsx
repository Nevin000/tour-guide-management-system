"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import {
    Calendar,
    Search,
    Filter,
    Clock,
    CheckCircle2,
    XCircle,
    DollarSign,
    User,
    Mail,
    Phone,
    MapPin,
    RefreshCw,
    Loader2,
    Eye,
    Edit2,
    Trash2,
    ChevronRight,
    Users,
    CreditCard
} from "lucide-react";

interface Booking {
    id: string;
    bookingNumber: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    tourPackageId: string;
    travelDate: string;
    numberOfAdults: number;
    numberOfChildren: number;
    pickupLocation?: string | null;
    specialRequests?: string | null;
    totalAmount: number;
    currency: string;
    status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
    paymentStatus: "PENDING" | "PAID" | "FAILED" | "REFUNDED";
    createdAt: string;
    tourPackage?: {
        id: string;
        title: string;
        slug: string;
        image: string;
        category: string;
        duration: string;
        price: number;
    };
    payments?: any[];
}

export default function AdminBookingsPage() {
    const router = useRouter();
    const { accessToken, isAuthenticated } = useAuthStore();

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [paymentFilter, setPaymentFilter] = useState("all");

    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
    const [updating, setUpdating] = useState(false);

    const [editForm, setEditForm] = useState({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        travelDate: "",
        numberOfAdults: 1,
        numberOfChildren: 0,
        pickupLocation: "",
        specialRequests: "",
        status: "PENDING" as "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED",
        paymentStatus: "PENDING" as "PENDING" | "PAID" | "FAILED" | "REFUNDED",
    });

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
            return;
        }
        fetchBookings();
    }, [accessToken, isAuthenticated]);

    const fetchBookings = async () => {
        try {
            setLoading(true);
            const res = await apiClient.get("/bookings?limit=100");
            if (res.data?.success) {
                setBookings(res.data.data);
            }
        } catch (err) {
            console.error("Error fetching bookings:", err);
            toast.error("Failed to load booking requests.");
        } finally {
            setLoading(false);
        }
    };

    const handleOpenEditModal = (booking: Booking) => {
        setEditingBooking(booking);
        setEditForm({
            customerName: booking.customerName,
            customerEmail: booking.customerEmail,
            customerPhone: booking.customerPhone,
            travelDate: booking.travelDate ? new Date(booking.travelDate).toISOString().split('T')[0] : "",
            numberOfAdults: booking.numberOfAdults,
            numberOfChildren: booking.numberOfChildren,
            pickupLocation: booking.pickupLocation || "",
            specialRequests: booking.specialRequests || "",
            status: booking.status,
            paymentStatus: booking.paymentStatus,
        });
    };

    const handleUpdateBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingBooking) return;

        try {
            setUpdating(true);
            const res = await apiClient.put(`/bookings/${editingBooking.id}`, editForm);
            if (res.data?.success) {
                toast.success("Booking details updated successfully!");
                setEditingBooking(null);
                setSelectedBooking(null);
                fetchBookings();
            } else {
                toast.error(res.data?.message || "Failed to update booking.");
            }
        } catch (err: any) {
            console.error("Update booking error:", err);
            toast.error(err.response?.data?.message || "Failed to update booking.");
        } finally {
            setUpdating(false);
        }
    };

    const handleQuickStatusChange = async (booking: Booking, newStatus: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED") => {
        try {
            const res = await apiClient.put(`/bookings/${booking.id}`, { status: newStatus });
            if (res.data?.success) {
                toast.success(`Booking status changed to ${newStatus}`);
                fetchBookings();
            }
        } catch (err) {
            console.error("Quick status update error:", err);
            toast.error("Failed to update status.");
        }
    };

    const handleDeleteBooking = async (id: string) => {
        if (!confirm("Are you sure you want to delete this booking record?")) return;
        try {
            const res = await apiClient.delete(`/bookings/${id}`);
            if (res.data?.success) {
                toast.success("Booking record deleted.");
                if (selectedBooking?.id === id) setSelectedBooking(null);
                fetchBookings();
            }
        } catch (err) {
            console.error("Delete error:", err);
            toast.error("Failed to delete booking.");
        }
    };

    const filteredBookings = bookings.filter((b) => {
        const matchesStatus = statusFilter === "all" || b.status === statusFilter;
        const matchesPayment = paymentFilter === "all" || b.paymentStatus === paymentFilter;
        const matchesSearch = !search ||
            b.bookingNumber.toLowerCase().includes(search.toLowerCase()) ||
            b.customerName.toLowerCase().includes(search.toLowerCase()) ||
            b.customerEmail.toLowerCase().includes(search.toLowerCase()) ||
            (b.tourPackage && b.tourPackage.title.toLowerCase().includes(search.toLowerCase()));

        return matchesStatus && matchesPayment && matchesSearch;
    });

    const pendingCount = bookings.filter(b => b.status === "PENDING").length;
    const confirmedCount = bookings.filter(b => b.status === "CONFIRMED").length;
    const totalRevenue = bookings.filter(b => b.paymentStatus === "PAID").reduce((sum, b) => sum + b.totalAmount, 0);

    if (!isAuthenticated) return null;

    return (
        <div className="w-full space-y-6">
            {/* Header & Breadcrumbs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#1C2434] tracking-tight">Booking Management</h1>
                    <p className="text-xs text-[#64748B] mt-0.5">Manage customer tour bookings and update order status</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                    <Link href="/admin/dashboard" className="hover:text-[#10B981] transition font-bold">Home</Link>
                    <ChevronRight className="h-4 w-4 text-[#8A99AD]" />
                    <span className="text-[#10B981] font-bold">Bookings</span>
                </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-[#8A99AD] uppercase tracking-wider mb-1">Total Bookings</p>
                        <h3 className="text-2xl font-bold text-[#1C2434]">{bookings.length}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
                        <Calendar className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-[#8A99AD] uppercase tracking-wider mb-1">Pending Approval</p>
                        <h3 className="text-2xl font-bold text-[#F59E0B]">{pendingCount}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-[#8A99AD] uppercase tracking-wider mb-1">Confirmed Tours</p>
                        <h3 className="text-2xl font-bold text-[#10B981]">{confirmedCount}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-[#8A99AD] uppercase tracking-wider mb-1">Paid Revenue</p>
                        <h3 className="text-2xl font-bold text-[#1C2434]">${totalRevenue.toLocaleString()}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
                        <DollarSign className="h-6 w-6" />
                    </div>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#1C2434]">
                        <Filter className="h-4 w-4 text-[#3C50E0]" />
                        <span>Search & Filters</span>
                    </div>
                    <span className="text-xs font-medium text-[#8A99AD]">
                        Showing {filteredBookings.length} of {bookings.length} booking records
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                        <Search className="h-4 w-4 text-[#94A3B8] shrink-0" />
                        <input
                            type="text"
                            placeholder="Search by ID, Customer Name, Email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent text-xs font-medium text-[#1C2434] outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                        <CheckCircle2 className="h-4 w-4 text-[#94A3B8] shrink-0" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full bg-transparent text-xs font-semibold text-[#1C2434] outline-none"
                        >
                            <option value="all">All Booking Statuses</option>
                            <option value="PENDING">PENDING</option>
                            <option value="CONFIRMED">CONFIRMED</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELLED">CANCELLED</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                        <CreditCard className="h-4 w-4 text-[#94A3B8] shrink-0" />
                        <select
                            value={paymentFilter}
                            onChange={(e) => setPaymentFilter(e.target.value)}
                            className="w-full bg-transparent text-xs font-semibold text-[#1C2434] outline-none"
                        >
                            <option value="all">All Payment Statuses</option>
                            <option value="PAID">PAID</option>
                            <option value="PENDING">PENDING</option>
                            <option value="FAILED">FAILED</option>
                            <option value="REFUNDED">REFUNDED</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Booking List Table */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden">
                {loading ? (
                    <div className="flex h-64 items-center justify-center gap-3">
                        <Loader2 className="h-8 w-8 animate-spin text-[#3C50E0]" />
                        <span className="text-xs font-semibold text-[#8A99AD]">Loading bookings...</span>
                    </div>
                ) : filteredBookings.length === 0 ? (
                    <div className="flex h-64 flex-col items-center justify-center text-center p-6">
                        <Calendar className="h-10 w-10 text-[#94A3B8] mb-2" />
                        <p className="text-sm font-bold text-[#1C2434]">No booking requests found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-[#F8FAFC] text-[#8A99AD] font-bold uppercase border-b border-[#E2E8F0]">
                                <tr>
                                    <th className="p-4 pl-6">Booking Ref</th>
                                    <th className="p-4">Customer Details</th>
                                    <th className="p-4">Selected Tour</th>
                                    <th className="p-4">Travel Date</th>
                                    <th className="p-4">Travelers</th>
                                    <th className="p-4">Total Amount</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Payment</th>
                                    <th className="p-4 pr-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F1F5F9] font-medium text-[#1C2434]">
                                {filteredBookings.map((b) => (
                                    <tr key={b.id} className="hover:bg-[#F8FAFC] transition">
                                        <td className="p-4 pl-6 font-mono font-bold text-[#3C50E0] text-xs">
                                            {b.bookingNumber}
                                        </td>
                                        <td className="p-4">
                                            <div className="font-bold text-[#1C2434]">{b.customerName}</div>
                                            <div className="text-[11px] text-[#64748B]">{b.customerEmail}</div>
                                            <div className="text-[10px] text-[#8A99AD]">{b.customerPhone}</div>
                                        </td>
                                        <td className="p-4 max-w-xs">
                                            <div className="font-bold text-[#1C2434] truncate">
                                                {b.tourPackage?.title || "Tour Package"}
                                            </div>
                                            <div className="text-[10px] text-[#8A99AD]">
                                                {b.tourPackage?.duration} • {b.tourPackage?.category}
                                            </div>
                                        </td>
                                        <td className="p-4 font-semibold text-[#1C2434]">
                                            {b.travelDate ? new Date(b.travelDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}
                                        </td>
                                        <td className="p-4">
                                            <span className="font-bold text-[#1C2434]">{b.numberOfAdults} Adults</span>
                                            {b.numberOfChildren > 0 && (
                                                <span className="text-[10px] text-[#64748B] block">+{b.numberOfChildren} Children</span>
                                            )}
                                        </td>
                                        <td className="p-4 font-bold text-[#1C2434]">
                                            ${b.totalAmount} <span className="text-[10px] text-[#8A99AD]">{b.currency}</span>
                                        </td>
                                        <td className="p-4">
                                            <select
                                                value={b.status}
                                                onChange={(e) => handleQuickStatusChange(b, e.target.value as any)}
                                                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase cursor-pointer border-none focus:outline-none ${b.status === "CONFIRMED"
                                                    ? "bg-[#10B981]/10 text-[#10B981]"
                                                    : b.status === "PENDING"
                                                        ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                                                        : b.status === "COMPLETED"
                                                            ? "bg-[#3C50E0]/10 text-[#3C50E0]"
                                                            : "bg-[#EF4444]/10 text-[#EF4444]"
                                                    }`}
                                            >
                                                <option value="PENDING">Pending</option>
                                                <option value="CONFIRMED">Confirmed</option>
                                                <option value="COMPLETED">Completed</option>
                                                <option value="CANCELLED">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase ${b.paymentStatus === "PAID"
                                                ? "bg-[#10B981]/10 text-[#10B981]"
                                                : b.paymentStatus === "PENDING"
                                                    ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                                                    : "bg-[#EF4444]/10 text-[#EF4444]"
                                                }`}>
                                                {b.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="p-4 pr-6 text-right space-x-1.5">
                                            <button
                                                onClick={() => setSelectedBooking(b)}
                                                className="p-2 rounded-lg border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#64748B] transition"
                                                title="View Booking Details"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleOpenEditModal(b)}
                                                className="p-2 rounded-lg bg-[#EBF1FF] text-[#3C50E0] hover:bg-[#EBF1FF]/80 transition"
                                                title="Edit Booking"
                                            >
                                                <Edit2 className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteBooking(b.id)}
                                                className="p-2 rounded-lg bg-[#FEE2E2] text-[#EF4444] hover:bg-[#FEE2E2]/80 transition"
                                                title="Delete Booking"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* VIEW BOOKING DETAILS MODAL */}
            {selectedBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C2434]/40 backdrop-blur-xs">
                    <div className="w-full max-w-2xl bg-white rounded-xl border border-[#E2E8F0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                        <div className="bg-[#1C2434] text-white p-6 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-bold uppercase text-[#3C50E0] tracking-widest block">Booking Overview</span>
                                <h3 className="text-xl font-bold font-mono text-white">{selectedBooking.bookingNumber}</h3>
                            </div>
                            <button onClick={() => setSelectedBooking(null)} className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
                                <XCircle className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#1C2434]">
                            <div className="bg-[#F8FAFC] p-4 rounded-lg border border-[#E2E8F0] flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] font-bold text-[#8A99AD] uppercase">Selected Tour Package</span>
                                    <h4 className="text-base font-bold text-[#1C2434]">{selectedBooking.tourPackage?.title || "Tour Package"}</h4>
                                    <span className="text-xs text-[#64748B] font-medium">{selectedBooking.tourPackage?.duration}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-bold text-[#8A99AD] uppercase">Total Amount</span>
                                    <p className="text-xl font-bold text-[#3C50E0]">${selectedBooking.totalAmount} {selectedBooking.currency}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 bg-[#F8FAFC] p-4 rounded-lg border border-[#E2E8F0]">
                                <div>
                                    <span className="text-[10px] font-bold text-[#8A99AD] uppercase block mb-1">Customer Details</span>
                                    <div className="space-y-1">
                                        <div className="font-bold text-[#1C2434] flex items-center gap-1.5">
                                            <User className="h-3.5 w-3.5 text-[#3C50E0]" />
                                            <span>{selectedBooking.customerName}</span>
                                        </div>
                                        <div className="text-[#64748B] flex items-center gap-1.5">
                                            <Mail className="h-3.5 w-3.5 text-[#8A99AD]" />
                                            <span>{selectedBooking.customerEmail}</span>
                                        </div>
                                        <div className="text-[#64748B] flex items-center gap-1.5">
                                            <Phone className="h-3.5 w-3.5 text-[#8A99AD]" />
                                            <span>{selectedBooking.customerPhone}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-[10px] font-bold text-[#8A99AD] uppercase block mb-1">Travel Specifications</span>
                                    <div className="space-y-1">
                                        <div className="font-semibold text-[#1C2434] flex items-center gap-1.5">
                                            <Calendar className="h-3.5 w-3.5 text-[#3C50E0]" />
                                            <span>Date: {new Date(selectedBooking.travelDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="font-semibold text-[#1C2434] flex items-center gap-1.5">
                                            <Users className="h-3.5 w-3.5 text-[#3C50E0]" />
                                            <span>{selectedBooking.numberOfAdults} Adults, {selectedBooking.numberOfChildren} Children</span>
                                        </div>
                                        <div className="text-[#64748B] flex items-center gap-1.5">
                                            <MapPin className="h-3.5 w-3.5 text-[#8A99AD]" />
                                            <span>Pickup: {selectedBooking.pickupLocation || "BIA Airport"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {selectedBooking.specialRequests && (
                                <div className="bg-[#F59E0B]/10 p-4 rounded-lg border border-[#F59E0B]/20 text-[#1C2434]">
                                    <span className="text-[10px] font-bold uppercase text-[#F59E0B] block mb-1">Special Requirements</span>
                                    <p className="font-medium text-xs">{selectedBooking.specialRequests}</p>
                                </div>
                            )}

                            <div className="flex justify-end gap-3 pt-2 border-t border-[#F1F5F9]">
                                <button
                                    onClick={() => handleOpenEditModal(selectedBooking)}
                                    className="px-5 py-2.5 bg-[#3C50E0] text-white font-medium text-xs rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                                >
                                    <Edit2 className="h-4 w-4" />
                                    <span>Edit Booking</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* EDIT BOOKING MODAL */}
            {editingBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C2434]/40 backdrop-blur-xs">
                    <div className="w-full max-w-xl bg-white rounded-xl border border-[#E2E8F0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                        <div className="bg-[#1C2434] text-white p-6 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-bold uppercase text-[#3C50E0] tracking-widest block">Modify Booking</span>
                                <h3 className="text-lg font-bold text-white">{editingBooking.bookingNumber}</h3>
                            </div>
                            <button onClick={() => setEditingBooking(null)} className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
                                <XCircle className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleUpdateBooking} className="p-6 overflow-y-auto space-y-4 text-xs font-medium text-[#1C2434]">
                            <div>
                                <label className="block text-xs font-semibold text-[#1C2434] mb-1">Customer Name</label>
                                <input
                                    type="text"
                                    required
                                    value={editForm.customerName}
                                    onChange={(e) => setEditForm({ ...editForm, customerName: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#1C2434]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-[#1C2434] mb-1">Customer Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={editForm.customerEmail}
                                        onChange={(e) => setEditForm({ ...editForm, customerEmail: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#1C2434]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#1C2434] mb-1">Customer Phone</label>
                                    <input
                                        type="text"
                                        required
                                        value={editForm.customerPhone}
                                        onChange={(e) => setEditForm({ ...editForm, customerPhone: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#1C2434]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-[#1C2434] mb-1">Travel Date</label>
                                    <input
                                        type="date"
                                        required
                                        value={editForm.travelDate}
                                        onChange={(e) => setEditForm({ ...editForm, travelDate: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#1C2434] font-bold"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#1C2434] mb-1">Adults</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={editForm.numberOfAdults}
                                        onChange={(e) => setEditForm({ ...editForm, numberOfAdults: parseInt(e.target.value, 10) || 1 })}
                                        className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#1C2434]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#1C2434] mb-1">Children</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={editForm.numberOfChildren}
                                        onChange={(e) => setEditForm({ ...editForm, numberOfChildren: parseInt(e.target.value, 10) || 0 })}
                                        className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#1C2434]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-[#1C2434] mb-1">Booking Status</label>
                                    <select
                                        value={editForm.status}
                                        onChange={(e) => setEditForm({ ...editForm, status: e.target.value as any })}
                                        className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#1C2434] font-bold"
                                    >
                                        <option value="PENDING">PENDING</option>
                                        <option value="CONFIRMED">CONFIRMED</option>
                                        <option value="COMPLETED">COMPLETED</option>
                                        <option value="CANCELLED">CANCELLED</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#1C2434] mb-1">Payment Status</label>
                                    <select
                                        value={editForm.paymentStatus}
                                        onChange={(e) => setEditForm({ ...editForm, paymentStatus: e.target.value as any })}
                                        className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#1C2434] font-bold"
                                    >
                                        <option value="PENDING">PENDING</option>
                                        <option value="PAID">PAID</option>
                                        <option value="FAILED">FAILED</option>
                                        <option value="REFUNDED">REFUNDED</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setEditingBooking(null)}
                                    className="px-5 py-2.5 rounded-lg border border-[#E2E8F0] text-[#64748B] font-medium text-xs"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={updating}
                                    className="px-6 py-2.5 bg-[#3C50E0] hover:bg-blue-700 text-white font-medium text-xs rounded-lg shadow-sm transition flex items-center gap-2 disabled:opacity-50"
                                >
                                    {updating ? <Loader2 className="h-4 w-4 animate-spin text-white" /> : null}
                                    <span>Save Changes</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
