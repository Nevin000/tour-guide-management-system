"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { authService } from "@/services/auth.service";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import {
    CreditCard,
    Search,
    Filter,
    Clock,
    CheckCircle2,
    XCircle,
    DollarSign,
    User,
    Mail,
    ArrowLeft,
    RefreshCw,
    Loader2,
    Eye,
    Printer,
    Download,
    RotateCcw,
    Sparkles,
    ShieldCheck,
    FileText,
    Building,
    Calendar,
    MapPin,
    LayoutDashboard,
    Map,
    Images,
    Star,
    Plane,
    Menu,
    X,
    LogOut,
    TrendingUp
} from "lucide-react";

interface Payment {
    id: string;
    paymentNumber: string;
    invoiceNumber: string;
    bookingId: string;
    customerName: string;
    customerEmail: string;
    paymentMethod: string;
    amount: number;
    currency: string;
    status: "PAID" | "PENDING" | "FAILED" | "REFUNDED";
    transactionDate: string;
    notes?: string | null;
    booking?: {
        id: string;
        bookingNumber: string;
        travelDate: string;
        numberOfAdults: number;
        numberOfChildren: number;
        tourPackage?: {
            title: string;
            category: string;
            duration: string;
            price: number;
        }
    }
}

export default function AdminPaymentsPage() {
    const router = useRouter();
    const { accessToken, isAuthenticated, user } = useAuthStore();

    const [payments, setPayments] = useState<Payment[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters (Section 3.6.3)
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [methodFilter, setMethodFilter] = useState("all");

    // Invoice View Modal
    const [invoicePayment, setInvoicePayment] = useState<Payment | null>(null);

    // Refund Confirmation Modal
    const [refundingPayment, setRefundingPayment] = useState<Payment | null>(null);
    const [refundNotes, setRefundNotes] = useState("");
    const [processingRefund, setProcessingRefund] = useState(false);

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
            return;
        }
        fetchPayments();
    }, [accessToken, isAuthenticated]);

    const fetchPayments = async () => {
        try {
            setLoading(true);
            const res = await apiClient.get("/payments?limit=100");
            if (res.data?.success) {
                setPayments(res.data.data);
            }
        } catch (err) {
            console.error("Error fetching payments:", err);
            toast.error("Failed to load payment transactions.");
        } finally {
            setLoading(false);
        }
    };

    const handleProcessRefund = async () => {
        if (!refundingPayment) return;
        try {
            setProcessingRefund(true);
            const res = await apiClient.put(`/payments/${refundingPayment.id}`, {
                action: "REFUND",
                notes: refundNotes || "Refunded by administrator",
            });

            if (res.data?.success) {
                toast.success("Payment refunded and associated booking cancelled.");
                setRefundingPayment(null);
                setRefundNotes("");
                fetchPayments();
            } else {
                toast.error(res.data?.message || "Refund failed.");
            }
        } catch (err: any) {
            console.error("Refund error:", err);
            toast.error(err.response?.data?.message || "Failed to process refund.");
        } finally {
            setProcessingRefund(false);
        }
    };

    const handlePrintInvoice = () => {
        window.print();
    };

    // Filter logic according to 3.6.3
    const filteredPayments = payments.filter((p) => {
        const matchesStatus = statusFilter === "all" || p.status === statusFilter;
        const matchesMethod = methodFilter === "all" || p.paymentMethod.toLowerCase().includes(methodFilter.toLowerCase());
        const matchesSearch = !search ||
            p.paymentNumber.toLowerCase().includes(search.toLowerCase()) ||
            p.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
            p.customerName.toLowerCase().includes(search.toLowerCase()) ||
            p.customerEmail.toLowerCase().includes(search.toLowerCase()) ||
            (p.booking && p.booking.bookingNumber.toLowerCase().includes(search.toLowerCase()));

        return matchesStatus && matchesMethod && matchesSearch;
    });

    const totalPaidAmount = payments.filter(p => p.status === "PAID").reduce((sum, p) => sum + p.amount, 0);
    const paidCount = payments.filter(p => p.status === "PAID").length;
    const refundedCount = payments.filter(p => p.status === "REFUNDED").length;
    const refundedAmount = payments.filter(p => p.status === "REFUNDED").reduce((sum, p) => sum + p.amount, 0);

    if (!isAuthenticated) return null;

    return (
        <div className="p-4 sm:p-5 w-full mx-0 space-y-5">

            {/* Header Navbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/dashboard"
                        className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Financial Operations</span>
                        <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                            <CreditCard className="h-6 w-6 text-emerald-600" />
                            Payment & Invoice Management
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={fetchPayments}
                        className="p-3 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                        title="Refresh Payments"
                    >
                        <RefreshCw className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Metric Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase">Total Revenue Collected</span>
                        <p className="text-3xl font-black text-emerald-600 mt-1">${totalPaidAmount.toLocaleString()}</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                        <DollarSign className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase">Successful Payments</span>
                        <p className="text-3xl font-black text-slate-900 mt-1">{paidCount}</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase">Refunded Count</span>
                        <p className="text-3xl font-black text-amber-500 mt-1">{refundedCount}</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center font-black">
                        <RotateCcw className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase">Total Refunded Amount</span>
                        <p className="text-3xl font-black text-rose-600 mt-1">${refundedAmount.toLocaleString()}</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-black">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                </div>
            </div>

            {/* Filter Toolbar (Section 3.6.3) */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
                        <Filter className="h-4 w-4 text-emerald-600" />
                        <span>Search & Transaction Filters</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                        Showing {filteredPayments.length} of {payments.length} transactions
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200">
                        <Search className="h-4 w-4 text-slate-400 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search Payment ID, Invoice #, Booking Ref, Customer..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-slate-400 shrink-0" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none"
                        >
                            <option value="all">All Payment Statuses</option>
                            <option value="PAID">PAID</option>
                            <option value="PENDING">PENDING</option>
                            <option value="FAILED">FAILED</option>
                            <option value="REFUNDED">REFUNDED</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200">
                        <CreditCard className="h-4 w-4 text-slate-400 shrink-0" />
                        <select
                            value={methodFilter}
                            onChange={(e) => setMethodFilter(e.target.value)}
                            className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none"
                        >
                            <option value="all">All Payment Methods</option>
                            <option value="card">Credit / Debit Card</option>
                            <option value="stripe">Stripe</option>
                            <option value="paypal">PayPal</option>
                            <option value="bank">Bank Transfer</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Transaction Table (Section 3.6.1 & 3.6.2) */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
                {loading ? (
                    <div className="flex h-64 items-center justify-center gap-3">
                        <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
                        <span className="text-xs font-bold text-slate-500">Loading payment history...</span>
                    </div>
                ) : filteredPayments.length === 0 ? (
                    <div className="flex h-64 flex-col items-center justify-center text-center p-6">
                        <CreditCard className="h-10 w-10 text-slate-300 mb-2" />
                        <p className="text-sm font-bold text-slate-700">No payment transactions found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 text-slate-500 font-extrabold uppercase border-b border-slate-200">
                                <tr>
                                    <th className="p-4 pl-6">Payment & Invoice Ref</th>
                                    <th className="p-4">Booking Ref</th>
                                    <th className="p-4">Customer Name</th>
                                    <th className="p-4">Payment Method</th>
                                    <th className="p-4">Amount</th>
                                    <th className="p-4">Date & Time</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 pr-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                                {filteredPayments.map((p) => (
                                    <tr key={p.id} className="hover:bg-slate-50/80 transition">
                                        <td className="p-4 pl-6">
                                            <div className="font-mono font-bold text-slate-900">{p.paymentNumber}</div>
                                            <div className="text-[10px] text-emerald-700 font-bold font-mono">{p.invoiceNumber}</div>
                                        </td>
                                        <td className="p-4 font-mono font-bold text-slate-700">
                                            {p.booking?.bookingNumber || "N/A"}
                                        </td>
                                        <td className="p-4">
                                            <div className="font-extrabold text-slate-900">{p.customerName}</div>
                                            <div className="text-[10px] text-slate-400">{p.customerEmail}</div>
                                        </td>
                                        <td className="p-4 font-bold text-slate-700">
                                            <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-800 text-[10px]">
                                                {p.paymentMethod}
                                            </span>
                                        </td>
                                        <td className="p-4 font-black text-slate-900 text-sm">
                                            ${p.amount} <span className="text-[10px] text-slate-400 font-bold">{p.currency}</span>
                                        </td>
                                        <td className="p-4 text-slate-600 font-bold">
                                            {new Date(p.transactionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase ${p.status === "PAID"
                                                ? "bg-emerald-100 text-emerald-800"
                                                : p.status === "PENDING"
                                                    ? "bg-amber-100 text-amber-800"
                                                    : p.status === "REFUNDED"
                                                        ? "bg-purple-100 text-purple-800"
                                                        : "bg-rose-100 text-rose-800"
                                                }`}>
                                                {p.status}
                                            </span>
                                        </td>
                                        <td className="p-4 pr-6 text-right space-x-1.5">
                                            <button
                                                onClick={() => setInvoicePayment(p)}
                                                className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition cursor-pointer flex items-center gap-1.5 inline-flex"
                                                title="View & Print Invoice"
                                            >
                                                <FileText className="h-4 w-4" />
                                                <span className="text-[10px] font-bold">Invoice</span>
                                            </button>
                                            {p.status === "PAID" && (
                                                <button
                                                    onClick={() => setRefundingPayment(p)}
                                                    className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 transition cursor-pointer flex items-center gap-1 inline-flex"
                                                    title="Process Refund"
                                                >
                                                    <RotateCcw className="h-3.5 w-3.5" />
                                                    <span className="text-[10px] font-bold">Refund</span>
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* INVOICE PRINT / VIEW MODAL */}
            {invoicePayment && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                    <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

                        {/* Top Controls */}
                        <div className="bg-slate-900 text-white p-4 px-6 flex items-center justify-between print:hidden">
                            <div className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-emerald-400" />
                                <span className="text-xs font-bold uppercase text-white tracking-wider">Official Invoice Preview</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handlePrintInvoice}
                                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 transition cursor-pointer"
                                >
                                    <Printer className="h-4 w-4" />
                                    <span>Print / Save PDF</span>
                                </button>
                                <button onClick={() => setInvoicePayment(null)} className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
                                    <XCircle className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Printable Invoice Container */}
                        <div className="p-8 overflow-y-auto space-y-6 text-slate-800 bg-white" id="printable-invoice">

                            {/* Header Branding */}
                            <div className="flex items-start justify-between border-b border-slate-200 pb-6">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center text-lg">
                                            CV
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-black text-slate-900">CEYLON VIDU TOURS</h2>
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">Luxury Travel & Tour Operations</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-xs text-slate-500 font-medium space-y-0.5">
                                        <p>No. 45 Beach Road, Colombo 03, Sri Lanka</p>
                                        <p>Email: info@ceylonvidutours.com | Hotline: +94 11 234 5678</p>
                                        <p>Web: www.ceylonvidutours.com</p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-black text-xs uppercase rounded-lg">
                                        INVOICE
                                    </span>
                                    <h3 className="text-lg font-black font-mono text-slate-900 mt-2">{invoicePayment.invoiceNumber}</h3>
                                    <p className="text-xs font-bold text-slate-400">Date: {new Date(invoicePayment.transactionDate).toLocaleDateString()}</p>
                                </div>
                            </div>

                            {/* Customer & Booking References */}
                            <div className="grid grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs">
                                <div>
                                    <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">BILLED TO</span>
                                    <h4 className="font-extrabold text-slate-900 text-sm">{invoicePayment.customerName}</h4>
                                    <p className="text-slate-600 font-medium">{invoicePayment.customerEmail}</p>
                                    <p className="text-slate-500 mt-1">Payment Method: <span className="font-bold text-slate-800">{invoicePayment.paymentMethod}</span></p>
                                </div>

                                <div>
                                    <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">BOOKING DETAILS</span>
                                    <p className="font-mono font-bold text-emerald-700">Ref: {invoicePayment.booking?.bookingNumber || "N/A"}</p>
                                    <p className="font-bold text-slate-800 mt-1">{invoicePayment.booking?.tourPackage?.title || "Custom Sri Lanka Tour"}</p>
                                    <p className="text-slate-500 font-medium">{invoicePayment.booking?.tourPackage?.duration} • Travel Date: {invoicePayment.booking?.travelDate ? new Date(invoicePayment.booking.travelDate).toLocaleDateString() : 'Confirmed'}</p>
                                </div>
                            </div>

                            {/* Itemized Table */}
                            <table className="w-full text-xs text-left">
                                <thead className="bg-slate-900 text-white uppercase font-black text-[10px]">
                                    <tr>
                                        <th className="p-3 pl-4 rounded-l-xl">Description</th>
                                        <th className="p-3">Travelers</th>
                                        <th className="p-3 text-right pr-4 rounded-r-xl">Amount ({invoicePayment.currency})</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                                    <tr>
                                        <td className="p-4 pl-4">
                                            <div className="font-bold text-slate-900">{invoicePayment.booking?.tourPackage?.title || "Tour Package Booking"}</div>
                                            <div className="text-[10px] text-slate-400 font-normal">All-inclusive guided tour, vehicle transfers, and hotel arrangements</div>
                                        </td>
                                        <td className="p-4 font-bold">
                                            {invoicePayment.booking ? `${invoicePayment.booking.numberOfAdults} Adults, ${invoicePayment.booking.numberOfChildren} Children` : '1 Group'}
                                        </td>
                                        <td className="p-4 pr-4 text-right font-black text-slate-900">
                                            ${invoicePayment.amount}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Financial Total Summary */}
                            <div className="flex justify-end pt-4">
                                <div className="w-64 space-y-2 text-xs">
                                    <div className="flex justify-between text-slate-600 font-medium">
                                        <span>Subtotal:</span>
                                        <span>${invoicePayment.amount}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 font-medium">
                                        <span>Taxes & Service Charge:</span>
                                        <span>$0.00 (Included)</span>
                                    </div>
                                    <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-black text-slate-900">
                                        <span>Total Paid:</span>
                                        <span className="text-emerald-600">${invoicePayment.amount} {invoicePayment.currency}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Terms */}
                            <div className="border-t border-slate-200 pt-6 text-center text-[10px] text-slate-400 space-y-1">
                                <p className="font-bold text-slate-600">Thank you for choosing Ceylon Vidu Tours for your Sri Lanka journey!</p>
                                <p>This is a computer-generated invoice. No physical signature is required.</p>
                            </div>
                        </div>

                    </div>
                </div>
            )
            }

            {/* REFUND CONFIRMATION MODAL */}
            {
                refundingPayment && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                        <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
                            <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                                <RotateCcw className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-slate-900">Process Refund?</h4>
                                <p className="text-xs font-semibold text-slate-500 mt-1">
                                    Are you sure you want to refund <span className="font-bold text-slate-900">${refundingPayment.amount}</span> for transaction <span className="font-mono font-bold">{refundingPayment.paymentNumber}</span>?
                                </p>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Reason / Refund Notes</label>
                                <textarea
                                    rows={2}
                                    placeholder="Customer requested cancellation..."
                                    value={refundNotes}
                                    onChange={(e) => setRefundNotes(e.target.value)}
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-2">
                                <button
                                    onClick={() => setRefundingPayment(null)}
                                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleProcessRefund}
                                    disabled={processingRefund}
                                    className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                                >
                                    {processingRefund ? <Loader2 className="h-4 w-4 animate-spin text-white" /> : null}
                                    <span>Confirm Refund</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
