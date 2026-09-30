"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Loader2,
    Copy,
    Compass,
    Filter,
    ChevronRight,
    ArrowUpDown,
    Download,
    Eye,
    X,
    ExternalLink,
    Clock,
    Sparkles,
} from "lucide-react";

interface TourPackage {
    id: string;
    title: string;
    slug: string;
    category: string;
    duration: string;
    daysCount: number;
    nightsCount: number;
    price: number;
    currency: string;
    image: string;
    overview: string;
    destinations: any;
    highlights: string[];
    itinerary: any[];
    popular?: boolean;
    published: boolean;
    bookingsCount: number;
    updatedAt: string;
}

const CATEGORIES = [
    { label: "All Categories", value: "all" },
    { label: "One Day Tours", value: "one day tour" },
    { label: "Round Tours", value: "round tour" },
    { label: "Airport Transfers", value: "airport transfer" },
    { label: "Shore Excursions", value: "shore excursion" },
    { label: "Wildlife & Safari Tours", value: "wildlife & safari tour" },
    { label: "Cultural & Heritage Tours", value: "cultural & heritage tour" },
    { label: "Beach Tours", value: "beach tour" },
    { label: "Hill Country Tours", value: "hill country tour" },
    { label: "Custom Tours", value: "custom tour" },
];

export default function AdminToursPage() {
    const router = useRouter();
    const { accessToken, isAuthenticated } = useAuthStore();

    const [tours, setTours] = useState<TourPackage[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [previewTour, setPreviewTour] = useState<TourPackage | null>(null);

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
            return;
        }

        fetchTours();
    }, [accessToken, isAuthenticated]);

    const fetchTours = async () => {
        try {
            setLoading(true);
            const toursRes = await apiClient.get(
                "/tours?limit=100&includeAllStatus=true"
            );

            if (toursRes.data?.success) {
                setTours(toursRes.data.data || []);
            }
        } catch (error) {
            console.error("Error fetching admin tours:", error);
            toast.error("Failed to fetch tour packages.");
        } finally {
            setLoading(false);
        }
    };

    const handleToggleStatus = async (tour: TourPackage) => {
        try {
            const newPublished = !tour.published;
            const response = await apiClient.put(`/tours/${tour.id}`, {
                ...tour,
                published: newPublished,
            });

            if (response.data?.success) {
                toast.success(`Tour status updated to ${newPublished ? "Published" : "Draft"}`);
                fetchTours();
            }
        } catch {
            toast.error("Failed to update status");
        }
    };

    const handleDuplicate = async (tourId: string) => {
        try {
            const res = await apiClient.post(`/tours/${tourId}/duplicate`);
            if (res.data?.success) {
                toast.success("Tour duplicated successfully!");
                fetchTours();
            }
        } catch {
            toast.error("Failed to duplicate tour.");
        }
    };

    const handleDelete = async (tourId: string) => {
        if (
            !confirm(
                "Are you sure you want to delete this tour package permanently?"
            )
        )
            return;

        try {
            const res = await apiClient.delete(`/tours/${tourId}`);
            if (res.data?.success) {
                toast.success("Tour package deleted.");
                fetchTours();
            }
        } catch {
            toast.error("Failed to delete tour.");
        }
    };

    const filteredTours = useMemo(() => {
        return tours.filter((t) => {
            const matchesSearch =
                t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.category.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory =
                selectedCategory === "all" ||
                t.category.toLowerCase() === selectedCategory.toLowerCase();

            return matchesSearch && matchesCategory;
        });
    }, [tours, searchQuery, selectedCategory]);

    return (
        <div className="w-full">
            {/* ======================================== */}
            {/* Page Header */}
            {/* ======================================== */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-[#111827] tracking-tight">
                    Tour Packages
                </h1>

                <nav className="flex items-center gap-2 text-base text-[#6B7280]">
                    <Link
                        href="/admin/dashboard"
                        className="hover:text-[#465FFF] transition-colors"
                    >
                        Home
                    </Link>
                    <ChevronRight className="h-4.5 w-4.5 text-[#9CA3AF]" />
                    <span className="text-[#111827] font-medium">Tours</span>
                </nav>
            </div>

            {/* ======================================== */}
            {/* Main Card */}
            {/* ======================================== */}
            <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
                {/* Card Header */}
                <div className="px-7 py-6 border-b border-[#F2F4F7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-[#111827]">
                            Tours List
                        </h2>
                        <p className="text-sm text-[#6B7280] mt-1">
                            Manage and organize all your Ceylon Vidu tour packages.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchTours}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#E4E7EC] text-base font-medium text-[#111827] hover:bg-[#F9FAFB] transition"
                        >
                            Export
                            <Download className="h-5 w-5" />
                        </button>

                        <Link
                            href="/admin/tours/add"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#465FFF] hover:bg-[#3441b8] text-white font-medium text-base rounded-lg shadow-sm transition"
                        >
                            <Plus className="h-5 w-5" />
                            <span>Add Tour Package</span>
                        </Link>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="px-7 py-5 border-b border-[#F2F4F7]">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 flex items-center gap-3 h-12 px-4 bg-transparent border border-[#E4E7EC] rounded-lg focus-within:border-[#465FFF] transition">
                            <Search className="h-5 w-5 text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search tours..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent w-full text-base text-[#111827] placeholder:text-[#9CA3AF] outline-none font-medium"
                            />
                        </div>

                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                            className="h-12 px-4 bg-transparent border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-medium focus:border-[#465FFF] outline-none cursor-pointer min-w-[180px]"
                        >
                            {CATEGORIES.map((cat) => (
                                <option key={cat.value} value={cat.value}>
                                    {cat.label}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedStatus}
                            onChange={(e) =>
                                setSelectedStatus(e.target.value)
                            }
                            className="h-12 px-4 bg-transparent border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-medium focus:border-[#465FFF] outline-none cursor-pointer min-w-[150px]"
                        >
                            <option value="all">All Statuses</option>
                            <option value="ACTIVE">Active</option>
                            <option value="DRAFT">Draft</option>
                            <option value="HIDDEN">Hidden</option>
                        </select>

                        <button className="inline-flex items-center gap-2 px-5 h-12 rounded-lg border border-[#E4E7EC] text-base font-medium text-[#111827] hover:bg-[#F9FAFB] transition">
                            <Filter className="h-5 w-5" />
                            Filter
                        </button>
                    </div>
                </div>

                {/* Table */}
                {loading ? (
                    <div className="h-64 flex flex-col items-center justify-center space-y-3">
                        <Loader2 className="h-10 w-10 animate-spin text-[#465FFF]" />
                        <span className="text-base font-medium text-[#6B7280]">
                            Loading tour packages...
                        </span>
                    </div>
                ) : filteredTours.length === 0 ? (
                    <div className="h-64 flex flex-col items-center justify-center text-[#6B7280]">
                        <Compass className="h-12 w-12 mb-3 stroke-[1.5]" />
                        <p className="text-base font-medium">
                            No tour packages found.
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#F9FAFB] border-b border-[#E4E7EC]">
                                    <th className="py-4 px-7 w-12">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 rounded border-[#E4E7EC] cursor-pointer accent-[#465FFF]"
                                        />
                                    </th>
                                    <th className="py-4 px-4 text-base font-medium text-[#6B7280]">
                                        <span className="inline-flex items-center gap-1.5">
                                            Tour Package
                                            <ArrowUpDown className="h-4 w-4 text-[#9CA3AF]" />
                                        </span>
                                    </th>
                                    <th className="py-4 px-4 text-base font-medium text-[#6B7280]">
                                        <span className="inline-flex items-center gap-1.5">
                                            Category
                                            <ArrowUpDown className="h-4 w-4 text-[#9CA3AF]" />
                                        </span>
                                    </th>
                                    <th className="py-4 px-4 text-base font-medium text-[#6B7280]">
                                        <span className="inline-flex items-center gap-1.5">
                                            Duration
                                            <ArrowUpDown className="h-4 w-4 text-[#9CA3AF]" />
                                        </span>
                                    </th>
                                    <th className="py-4 px-4 text-base font-medium text-[#6B7280]">
                                        <span className="inline-flex items-center gap-1.5">
                                            Price
                                            <ArrowUpDown className="h-4 w-4 text-[#9CA3AF]" />
                                        </span>
                                    </th>
                                    <th className="py-4 px-4 text-base font-medium text-[#6B7280]">
                                        Status
                                    </th>
                                    <th className="py-4 px-4 text-base font-medium text-[#6B7280]">
                                        Created At
                                    </th>
                                    <th className="py-4 px-7 text-right text-base font-medium text-[#6B7280]">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2F4F7]">
                                {filteredTours.map((tour) => (
                                    <tr
                                        key={tour.id}
                                        className="hover:bg-[#F9FAFB] transition-colors"
                                    >
                                        {/* Checkbox */}
                                        <td className="py-5 px-7">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 rounded border-[#E4E7EC] cursor-pointer accent-[#465FFF]"
                                            />
                                        </td>

                                        {/* Product / Tour */}
                                        <td className="py-5 px-4">
                                            <div className="flex items-center gap-4">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={
                                                        tour.image ||
                                                        "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=400"
                                                    }
                                                    alt={tour.title}
                                                    className="h-14 w-20 object-cover rounded-lg border border-[#E4E7EC] shrink-0"
                                                />
                                                <div className="min-w-0">
                                                    <p className="text-base font-medium text-[#111827] truncate max-w-[240px]">
                                                        {tour.title}
                                                    </p>
                                                    <p className="text-sm text-[#6B7280] mt-0.5">
                                                        {tour.daysCount}D /{" "}
                                                        {tour.nightsCount}N
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Category */}
                                        <td className="py-5 px-4">
                                            <span className="text-base font-medium text-[#6B7280] capitalize">
                                                {tour.category}
                                            </span>
                                        </td>

                                        {/* Duration */}
                                        <td className="py-5 px-4">
                                            <span className="text-base font-medium text-[#6B7280]">
                                                {tour.duration}
                                            </span>
                                        </td>

                                        {/* Price */}
                                        <td className="py-5 px-4">
                                            <span className="text-base font-medium text-[#111827]">
                                                ${tour.price}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="py-5 px-4">
                                            <button
                                                onClick={() =>
                                                    handleToggleStatus(tour)
                                                }
                                                className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition ${tour.published
                                                    ? "bg-[#ECFDF5] text-[#10B981]"
                                                    : "bg-[#FEF3F2] text-[#EF4444]"
                                                    }`}
                                            >
                                                {tour.published ? "Published" : "Draft"}
                                            </button>
                                        </td>

                                        {/* Created At */}
                                        <td className="py-5 px-4">
                                            <span className="text-base font-medium text-[#6B7280]">
                                                {tour.updatedAt
                                                    ? new Date(
                                                        tour.updatedAt
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                        }
                                                    )
                                                    : "—"}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="py-5 px-7">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setPreviewTour(tour)}
                                                    className="p-2.5 rounded-lg hover:bg-[#F2F4F7] text-[#6B7280] hover:text-[#465FFF] transition"
                                                    title="Preview Tour Package"
                                                >
                                                    <Eye className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        router.push(
                                                            `/admin/tours/edit/${tour.id}`
                                                        )
                                                    }
                                                    className="p-2.5 rounded-lg hover:bg-[#F2F4F7] text-[#6B7280] hover:text-[#465FFF] transition"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDuplicate(tour.id)
                                                    }
                                                    className="p-2.5 rounded-lg hover:bg-[#F2F4F7] text-[#6B7280] hover:text-[#465FFF] transition"
                                                    title="Duplicate"
                                                >
                                                    <Copy className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(tour.id)
                                                    }
                                                    className="p-2.5 rounded-lg hover:bg-[#FEF3F2] text-[#6B7280] hover:text-[#EF4444] transition"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Table Footer */}
                {!loading && filteredTours.length > 0 && (
                    <div className="px-7 py-5 border-t border-[#F2F4F7] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-base text-[#6B7280]">
                            Showing{" "}
                            <span className="font-medium text-[#111827]">
                                {filteredTours.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-[#111827]">
                                {tours.length}
                            </span>{" "}
                            tour packages
                        </span>

                        <div className="flex items-center gap-2">
                            <button className="h-10 px-4 rounded-lg border border-[#E4E7EC] text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB] transition">
                                Previous
                            </button>
                            <button className="h-10 w-10 rounded-lg bg-[#465FFF] text-white text-sm font-medium">
                                1
                            </button>
                            <button className="h-10 px-4 rounded-lg border border-[#E4E7EC] text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB] transition">
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Tour Preview Modal Popup */}
            {previewTour && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111827]/60 backdrop-blur-xs"
                    onClick={() => setPreviewTour(null)}
                >
                    <div
                        className="w-full max-w-2xl bg-white rounded-2xl border border-[#E4E7EC] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Image Banner */}
                        <div className="relative h-56 bg-[#F9FAFB] w-full overflow-hidden">
                            {previewTour.image ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                    src={previewTour.image}
                                    alt={previewTour.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-[#EBF1FF] text-[#465FFF]">
                                    <Compass className="h-16 w-16 opacity-50" />
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                            <button
                                onClick={() => setPreviewTour(null)}
                                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold bg-[#465FFF] text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                        {previewTour.category}
                                    </span>
                                    {previewTour.featured && (
                                        <span className="text-xs font-semibold bg-[#F59E0B] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                            <Sparkles className="h-3 w-3" /> Featured
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl font-bold text-white tracking-tight">
                                    {previewTour.title}
                                </h2>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto space-y-5 text-sm">
                            {/* Meta Quick Bar */}
                            <div className="grid grid-cols-3 gap-3 p-4 bg-[#F9FAFB] rounded-xl border border-[#E4E7EC]">
                                <div className="space-y-0.5">
                                    <span className="text-xs text-[#6B7280] font-medium block">Price</span>
                                    <span className="text-base font-bold text-[#111827]">
                                        {previewTour.currency || "$"} {previewTour.price || 0}
                                    </span>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-xs text-[#6B7280] font-medium block">Duration</span>
                                    <span className="text-base font-bold text-[#111827] flex items-center gap-1">
                                        <Clock className="h-4 w-4 text-[#465FFF]" />
                                        {previewTour.duration || `${previewTour.daysCount || 1} Days`}
                                    </span>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-xs text-[#6B7280] font-medium block">Status</span>
                                    <span
                                        className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${previewTour.published
                                            ? "bg-[#ECFDF5] text-[#10B981]"
                                            : "bg-[#F3F4F6] text-[#6B7280]"
                                            }`}
                                    >
                                        {previewTour.published ? "Published" : "Draft"}
                                    </span>
                                </div>
                            </div>

                            {/* Overview */}
                            {previewTour.overview && (
                                <div className="space-y-1.5">
                                    <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                                        Package Overview
                                    </h4>
                                    <p className="text-sm text-[#374151] leading-relaxed">
                                        {previewTour.overview}
                                    </p>
                                </div>
                            )}

                            {/* Highlights */}
                            {previewTour.highlights && previewTour.highlights.length > 0 && (
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                                        Highlights
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {previewTour.highlights.map((h, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-xs text-[#374151]"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#465FFF] mt-1.5 shrink-0" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-[#E4E7EC] bg-[#F9FAFB] flex items-center justify-between">
                            <button
                                onClick={() => setPreviewTour(null)}
                                className="px-5 py-2.5 rounded-lg border border-[#E4E7EC] text-sm font-medium text-[#374151] hover:bg-white transition"
                            >
                                Close Preview
                            </button>

                            <button
                                onClick={() => window.open(`/tours/${previewTour.slug}`, "_blank")}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#465FFF] hover:bg-[#3441b8] text-white text-sm font-medium rounded-lg shadow-sm transition"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Open Public Webpage
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}