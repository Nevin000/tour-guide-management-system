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
    MapPin,
    Filter,
    ChevronRight,
    ArrowUpDown,
    Download,
    Eye,
    X,
    ExternalLink,
    Sparkles,
} from "lucide-react";

interface Destination {
    id: string;
    name: string;
    slug: string;
    image: string;
    shortDescription: string | null;
    description: string;
    location: string | null;
    district: string | null;
    province: string | null;
    category: string | null;
    featured: boolean;
    published: boolean;
    createdAt: string;
    updatedAt: string;
}

const CATEGORIES = [
    { label: "All Categories", value: "all" },
    { label: "Hill Country", value: "hill country" },
    { label: "Beach & Coastal", value: "beach" },
    { label: "Cultural & Heritage", value: "cultural" },
    { label: "Wildlife & Nature", value: "wildlife" },
    { label: "City & Urban", value: "city" },
    { label: "Adventure & Hiking", value: "adventure" },
];

export default function AdminDestinationsPage() {
    const router = useRouter();
    const { accessToken, isAuthenticated } = useAuthStore();

    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [previewDestination, setPreviewDestination] = useState<Destination | null>(null);

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
            return;
        }

        fetchDestinations();
    }, [accessToken, isAuthenticated]);

    const fetchDestinations = async () => {
        try {
            setLoading(true);
            const res = await apiClient.get("/destinations?limit=100");
            if (res.data?.success) {
                setDestinations(res.data.data || []);
            }
        } catch (error) {
            console.error("Error fetching admin destinations:", error);
            toast.error("Failed to fetch destinations.");
        } finally {
            setLoading(false);
        }
    };

    const handleToggleStatus = async (dest: Destination) => {
        try {
            const newPublished = !dest.published;
            const formData = new FormData();
            formData.append("id", dest.id);
            formData.append("name", dest.name);
            formData.append("description", dest.description || "");
            formData.append("published", String(newPublished));

            const response = await apiClient.put("/destinations", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data?.success) {
                toast.success(`Destination status updated to ${newPublished ? "Published" : "Draft"}`);
                fetchDestinations();
            }
        } catch {
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this destination permanently?")) return;

        try {
            const res = await apiClient.delete(`/destinations?id=${id}`);
            if (res.data?.success) {
                toast.success("Destination deleted.");
                fetchDestinations();
            } else {
                toast.error(res.data?.message || "Failed to delete destination.");
            }
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Failed to delete destination.");
        }
    };

    const filteredDestinations = useMemo(() => {
        return destinations.filter((dest) => {
            const query = searchQuery.toLowerCase();
            const matchesSearch =
                dest.name.toLowerCase().includes(query) ||
                (dest.district && dest.district.toLowerCase().includes(query)) ||
                (dest.category && dest.category.toLowerCase().includes(query));

            const matchesCategory =
                selectedCategory === "all" ||
                (dest.category && dest.category.toLowerCase().includes(selectedCategory.toLowerCase()));

            const matchesStatus =
                selectedStatus === "all" ||
                (selectedStatus === "published" && dest.published) ||
                (selectedStatus === "draft" && !dest.published);

            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [destinations, searchQuery, selectedCategory, selectedStatus]);

    return (
        <div className="w-full">
            {/* ======================================== */}
            {/* Page Header */}
            {/* ======================================== */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-[#111827] tracking-tight">
                    Destinations
                </h1>

                <nav className="flex items-center gap-2 text-base text-[#6B7280]">
                    <Link
                        href="/admin/dashboard"
                        className="hover:text-[#465FFF] transition-colors"
                    >
                        Home
                    </Link>
                    <ChevronRight className="h-4.5 w-4.5 text-[#9CA3AF]" />
                    <span className="text-[#111827] font-medium">Destinations</span>
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
                            Destinations List
                        </h2>
                        <p className="text-sm text-[#6B7280] mt-1">
                            Manage and organize all Sri Lankan travel destinations.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchDestinations}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#E4E7EC] text-base font-medium text-[#111827] hover:bg-[#F9FAFB] transition"
                        >
                            Export
                            <Download className="h-5 w-5" />
                        </button>

                        <Link
                            href="/admin/destinations/add"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#465FFF] hover:bg-[#3441b8] text-white font-medium text-base rounded-lg shadow-sm transition"
                        >
                            <Plus className="h-5 w-5" />
                            <span>Add Destination</span>
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
                                placeholder="Search destinations by name or district..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent w-full text-base text-[#111827] placeholder:text-[#9CA3AF] outline-none font-medium"
                            />
                        </div>

                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
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
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="h-12 px-4 bg-transparent border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-medium focus:border-[#465FFF] outline-none cursor-pointer min-w-[150px]"
                        >
                            <option value="all">All Statuses</option>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
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
                            Loading destinations...
                        </span>
                    </div>
                ) : filteredDestinations.length === 0 ? (
                    <div className="h-64 flex flex-col items-center justify-center text-[#6B7280]">
                        <MapPin className="h-12 w-12 mb-3 stroke-[1.5]" />
                        <p className="text-base font-medium">
                            No destinations found.
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
                                            Destination
                                            <ArrowUpDown className="h-4 w-4 text-[#9CA3AF]" />
                                        </span>
                                    </th>
                                    <th className="py-4 px-4 text-base font-medium text-[#6B7280]">
                                        <span className="inline-flex items-center gap-1.5">
                                            District / Region
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
                                {filteredDestinations.map((dest) => (
                                    <tr
                                        key={dest.id}
                                        className="hover:bg-[#F9FAFB] transition-colors"
                                    >
                                        {/* Checkbox */}
                                        <td className="py-5 px-7">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 rounded border-[#E4E7EC] cursor-pointer accent-[#465FFF]"
                                            />
                                        </td>

                                        {/* Destination Info */}
                                        <td className="py-5 px-4">
                                            <div className="flex items-center gap-4">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={
                                                        dest.image ||
                                                        "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=400"
                                                    }
                                                    alt={dest.name}
                                                    className="h-14 w-20 object-cover rounded-lg border border-[#E4E7EC] shrink-0"
                                                />
                                                <div className="min-w-0">
                                                    <p className="text-base font-medium text-[#111827] truncate max-w-[240px]">
                                                        {dest.name}
                                                    </p>
                                                    <p className="text-sm font-mono text-[#6B7280] mt-0.5">
                                                        /destinations/{dest.slug}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* District / Region */}
                                        <td className="py-5 px-4">
                                            <span className="text-base font-medium text-[#6B7280]">
                                                {dest.district || dest.province || dest.location || "Sri Lanka"}
                                            </span>
                                        </td>

                                        {/* Category */}
                                        <td className="py-5 px-4">
                                            <span className="text-base font-medium text-[#6B7280] capitalize">
                                                {dest.category || "General"}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="py-5 px-4">
                                            <button
                                                onClick={() => handleToggleStatus(dest)}
                                                className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition ${dest.published
                                                    ? "bg-[#ECFDF5] text-[#10B981]"
                                                    : "bg-[#FEF3F2] text-[#EF4444]"
                                                    }`}
                                            >
                                                {dest.published ? "Published" : "Draft"}
                                            </button>
                                        </td>

                                        {/* Created At */}
                                        <td className="py-5 px-4">
                                            <span className="text-base font-medium text-[#6B7280]">
                                                {dest.createdAt
                                                    ? new Date(
                                                        dest.createdAt
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
                                                    onClick={() => setPreviewDestination(dest)}
                                                    className="p-2.5 rounded-lg hover:bg-[#F2F4F7] text-[#6B7280] hover:text-[#465FFF] transition"
                                                    title="Preview Destination"
                                                >
                                                    <Eye className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        router.push(
                                                            `/admin/destinations/edit/${dest.id}`
                                                        )
                                                    }
                                                    className="p-2.5 rounded-lg hover:bg-[#F2F4F7] text-[#6B7280] hover:text-[#465FFF] transition"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(dest.id)
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
                {!loading && filteredDestinations.length > 0 && (
                    <div className="px-7 py-5 border-t border-[#F2F4F7] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-base text-[#6B7280]">
                            Showing{" "}
                            <span className="font-medium text-[#111827]">
                                {filteredDestinations.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-[#111827]">
                                {destinations.length}
                            </span>{" "}
                            destinations
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

            {/* Destination Preview Modal Popup */}
            {previewDestination && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111827]/60 backdrop-blur-xs"
                    onClick={() => setPreviewDestination(null)}
                >
                    <div
                        className="w-full max-w-2xl bg-white rounded-2xl border border-[#E4E7EC] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Image Banner */}
                        <div className="relative h-56 bg-[#F9FAFB] w-full overflow-hidden">
                            {previewDestination.image ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                    src={previewDestination.image}
                                    alt={previewDestination.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-[#EBF1FF] text-[#465FFF]">
                                    <MapPin className="h-16 w-16 opacity-50" />
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                            <button
                                onClick={() => setPreviewDestination(null)}
                                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold bg-[#465FFF] text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                        {previewDestination.category || "Destination"}
                                    </span>
                                    {previewDestination.featured && (
                                        <span className="text-xs font-semibold bg-[#F59E0B] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                            <Sparkles className="h-3 w-3" /> Featured
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl font-bold text-white tracking-tight">
                                    {previewDestination.name}
                                </h2>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto space-y-5 text-sm">
                            {/* Location & Status Pill */}
                            <div className="grid grid-cols-2 gap-3 p-4 bg-[#F9FAFB] rounded-xl border border-[#E4E7EC]">
                                <div className="space-y-0.5">
                                    <span className="text-xs text-[#6B7280] font-medium block">Location</span>
                                    <span className="text-base font-bold text-[#111827] flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4 text-[#465FFF]" />
                                        {previewDestination.district || previewDestination.location || "Sri Lanka"}
                                        {previewDestination.province ? `, ${previewDestination.province}` : ""}
                                    </span>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-xs text-[#6B7280] font-medium block">Visibility Status</span>
                                    <span
                                        className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${previewDestination.published
                                                ? "bg-[#ECFDF5] text-[#10B981]"
                                                : "bg-[#F3F4F6] text-[#6B7280]"
                                            }`}
                                    >
                                        {previewDestination.published ? "Published" : "Draft"}
                                    </span>
                                </div>
                            </div>

                            {/* Short Description */}
                            {previewDestination.shortDescription && (
                                <div className="space-y-1">
                                    <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                                        Summary
                                    </h4>
                                    <p className="text-sm font-medium text-[#111827]">
                                        {previewDestination.shortDescription}
                                    </p>
                                </div>
                            )}

                            {/* Full Description */}
                            {previewDestination.description && (
                                <div className="space-y-1.5">
                                    <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                                        Full Description
                                    </h4>
                                    <p className="text-sm text-[#374151] leading-relaxed whitespace-pre-line">
                                        {previewDestination.description}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-[#E4E7EC] bg-[#F9FAFB] flex items-center justify-between">
                            <button
                                onClick={() => setPreviewDestination(null)}
                                className="px-5 py-2.5 rounded-lg border border-[#E4E7EC] text-sm font-medium text-[#374151] hover:bg-white transition"
                            >
                                Close Preview
                            </button>

                            <button
                                onClick={() => window.open(`/destinations/${previewDestination.id}`, "_blank")}
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
