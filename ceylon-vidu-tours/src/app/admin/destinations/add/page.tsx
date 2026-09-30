"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import {
    ArrowLeft,
    Save,
    Loader2,
    Plus,
    Trash2,
    ChevronRight,
    Upload,
    Image as ImageIcon,
} from "lucide-react";

interface DestinationHighlight {
    id?: string;
    title: string;
    description: string;
    image: string;
    file?: File | null;
}

export default function AdminAddDestinationPage() {
    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);

    const [form, setForm] = useState({
        name: "",
        slug: "",
        shortDescription: "",
        description: "",
        location: "",
        district: "",
        province: "",
        category: "",
        bestTime: "",
        duration: "",
        budget: "",
        latitude: "",
        longitude: "",
        weatherAvg: "",
        weatherRain: "",
        howToGetThere: "",
        seoTitle: "",
        seoDescription: "",
        featured: false,
        published: true,
    });

    const [highlights, setHighlights] = useState<DestinationHighlight[]>([]);
    const [galleryUrls, setGalleryUrls] = useState<string[]>([]);
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleNameChange = (nameVal: string) => {
        const generatedSlug = nameVal
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");
        setForm((prev) => ({ ...prev, name: nameVal, slug: generatedSlug }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleGalleryFilesAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            const newPreviews = files.map((f) => URL.createObjectURL(f));
            setGalleryUrls((prev) => [...prev, ...newPreviews]);
            setGalleryFiles((prev) => [...prev, ...files]);
        }
    };

    const removeGalleryImage = (idx: number) => {
        const urlToRemove = galleryUrls[idx];
        setGalleryUrls((prev) => prev.filter((_, i) => i !== idx));

        if (urlToRemove && urlToRemove.startsWith("blob:")) {
            const dbImageCount = galleryUrls.filter((u) => !u.startsWith("blob:")).length;
            const fileIdx = idx - dbImageCount;
            if (fileIdx >= 0) {
                setGalleryFiles((prev) => prev.filter((_, i) => i !== fileIdx));
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.description) {
            toast.error("Destination Name and Overview Description are required.");
            return;
        }
        if (!selectedFile) {
            toast.error("Cover image is required.");
            return;
        }

        try {
            setSubmitting(true);
            const formData = new FormData();
            if (selectedFile) formData.append("file", selectedFile);

            formData.append("name", form.name);
            formData.append(
                "slug",
                form.slug || form.name.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
            );
            formData.append("shortDescription", form.shortDescription);
            formData.append("description", form.description);
            formData.append("location", form.location);
            formData.append("district", form.district);
            formData.append("province", form.province);
            formData.append("category", form.category);
            formData.append("bestTime", form.bestTime);
            formData.append("duration", form.duration);
            formData.append("budget", form.budget);
            formData.append("latitude", form.latitude);
            formData.append("longitude", form.longitude);
            formData.append("weatherAvg", form.weatherAvg);
            formData.append("weatherRain", form.weatherRain);
            formData.append("howToGetThere", form.howToGetThere);
            formData.append("seoTitle", form.seoTitle);
            formData.append("seoDescription", form.seoDescription);
            formData.append("featured", String(form.featured));
            formData.append("published", String(form.published));

            const highlightsJson = highlights.map((h, idx) => {
                if (h.file) {
                    formData.append(`highlight_image_${idx}`, h.file);
                }
                return {
                    id: h.id,
                    title: h.title,
                    description: h.description,
                    image: h.image,
                };
            });
            formData.append("highlights", JSON.stringify(highlightsJson));

            const existingGalleryUrls = galleryUrls.filter((url) => !url.startsWith("blob:"));
            formData.append("galleryImages", JSON.stringify(existingGalleryUrls));

            galleryFiles.forEach((file, idx) => {
                formData.append(`gallery_image_${idx}`, file);
            });

            const res = await apiClient.post("/destinations", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (res.data?.success) {
                toast.success("Destination created successfully!");
                router.push("/admin/destinations");
            } else {
                toast.error(res.data?.message || "Failed to create destination.");
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to create destination.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* Page Header (Matching Add Tour style) */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/destinations"
                        className="p-2 bg-white border border-[#E2E8F0] rounded-lg text-[#64748B] hover:text-[#1C2434] hover:bg-[#F7F9FC] transition"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-[#1C2434] tracking-tight">
                            Add New Destination
                        </h1>
                        <p className="text-sm font-normal text-[#64748B] mt-0.5">
                            Create a new travel destination guide for Ceylon Vidu Tours
                        </p>
                    </div>
                </div>

                <nav className="flex items-center gap-2 text-sm font-normal text-[#64748B]">
                    <Link
                        href="/admin/dashboard"
                        className="hover:text-[#3C50E0] transition-colors"
                    >
                        Home
                    </Link>
                    <ChevronRight className="h-4 w-4 text-[#8A99AD]" />
                    <Link
                        href="/admin/destinations"
                        className="hover:text-[#3C50E0] transition-colors"
                    >
                        Destinations
                    </Link>
                    <ChevronRight className="h-4 w-4 text-[#8A99AD]" />
                    <span className="text-[#3C50E0] font-medium">Add New Destination</span>
                </nav>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Destination Details Card */}
                <div className="bg-white rounded-[10px] border border-[#E2E8F0] shadow-xs">
                    <div className="border-b border-[#E2E8F0] px-7 py-4">
                        <h2 className="text-[18px] font-bold text-[#1C2434]">
                            Destination Details
                        </h2>
                    </div>

                    <div className="p-6 space-y-5">
                        {/* Row 1: Name & Slug */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Destination Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Ella"
                                    value={form.name}
                                    onChange={(e) => handleNameChange(e.target.value)}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    URL Slug
                                </label>
                                <input
                                    type="text"
                                    placeholder="ella"
                                    value={form.slug}
                                    onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-mono text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>
                        </div>

                        {/* Row 2: Category, Best Time, Duration */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Hill Country / Mountain"
                                    value={form.category}
                                    onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Best Time to Visit
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. January to April"
                                    value={form.bestTime}
                                    onChange={(e) => setForm((prev) => ({ ...prev, bestTime: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Recommended Duration
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 2 - 3 Days"
                                    value={form.duration}
                                    onChange={(e) => setForm((prev) => ({ ...prev, duration: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>
                        </div>

                        {/* Short Summary Description */}
                        <div>
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                Short Summary Description
                            </label>
                            <input
                                type="text"
                                placeholder="Brief one-line summary..."
                                value={form.shortDescription}
                                onChange={(e) => setForm((prev) => ({ ...prev, shortDescription: e.target.value }))}
                                className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                            />
                        </div>

                        {/* Full Overview Description */}
                        <div>
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                Full Detailed Overview *
                            </label>
                            <textarea
                                required
                                rows={5}
                                placeholder="Write a comprehensive guide about this destination..."
                                value={form.description}
                                onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                                className="w-full p-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Location & Travel Details Card */}
                <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
                    <div className="border-b border-[#F2F4F7] px-6 py-4">
                        <h2 className="text-[18px] font-semibold text-[#111827]">
                            Location & Travel Information
                        </h2>
                        <p className="text-sm font-normal text-[#6B7280] mt-0.5">
                            Geography, map coordinates, and transport details
                        </p>
                    </div>

                    <div className="p-6 space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    District
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Badulla"
                                    value={form.district}
                                    onChange={(e) => setForm((prev) => ({ ...prev, district: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Province
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Uva Province"
                                    value={form.province}
                                    onChange={(e) => setForm((prev) => ({ ...prev, province: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Location / Region
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Ella Town"
                                    value={form.location}
                                    onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Latitude
                                </label>
                                <input
                                    type="text"
                                    placeholder="6.8667"
                                    value={form.latitude}
                                    onChange={(e) => setForm((prev) => ({ ...prev, latitude: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-mono text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Longitude
                                </label>
                                <input
                                    type="text"
                                    placeholder="81.0466"
                                    value={form.longitude}
                                    onChange={(e) => setForm((prev) => ({ ...prev, longitude: e.target.value }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-mono text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                How To Get There (Transport Guide)
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Scenic train from Kandy or private chauffeur via A4 highway..."
                                value={form.howToGetThere}
                                onChange={(e) => setForm((prev) => ({ ...prev, howToGetThere: e.target.value }))}
                                className="w-full p-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Attraction Highlights Card */}
                <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
                    <div className="border-b border-[#F2F4F7] px-6 py-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-[18px] font-semibold text-[#111827]">
                                Key Attraction Highlights
                            </h2>
                            <p className="text-sm font-normal text-[#6B7280] mt-0.5">
                                Add major spots to visit in this destination
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() =>
                                setHighlights((prev) => [
                                    ...prev,
                                    { title: "", description: "", image: "" },
                                ])
                            }
                            className="px-4 py-2 bg-[#465FFF] hover:bg-[#3441b8] text-white font-medium text-sm rounded-lg flex items-center gap-1.5 transition"
                        >
                            <Plus className="h-4 w-4" />
                            Add Highlight
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        {highlights.length === 0 ? (
                            <div className="text-center py-6 border border-dashed border-[#E4E7EC] rounded-lg text-[#6B7280]">
                                <p className="text-sm font-medium">No highlights added yet.</p>
                                <p className="text-xs text-[#98A2B3] mt-1">Click &quot;Add Highlight&quot; to include top sights (e.g. Nine Arch Bridge).</p>
                            </div>
                        ) : (
                            highlights.map((h, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 border border-[#E4E7EC] rounded-lg bg-[#F9FAFB] space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-[#465FFF]">
                                            Highlight #{idx + 1}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setHighlights((prev) => prev.filter((_, i) => i !== idx))}
                                            className="text-[#EF4444] hover:text-red-700 text-sm font-medium flex items-center gap-1 transition"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            Remove
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Highlight Title (e.g. Nine Arch Bridge)"
                                        value={h.title}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setHighlights((prev) => {
                                                const copy = [...prev];
                                                copy[idx].title = val;
                                                return copy;
                                            });
                                        }}
                                        className="w-full h-11 px-3.5 bg-white border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                                    />
                                    <textarea
                                        rows={2}
                                        placeholder="Description..."
                                        value={h.description}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setHighlights((prev) => {
                                                const copy = [...prev];
                                                copy[idx].description = val;
                                                return copy;
                                            });
                                        }}
                                        className="w-full p-3 bg-white border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition resize-none"
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Media & Gallery Card */}
                <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
                    <div className="border-b border-[#F2F4F7] px-6 py-4">
                        <h2 className="text-[18px] font-semibold text-[#111827]">
                            Media & Gallery
                        </h2>
                        <p className="text-sm font-normal text-[#6B7280] mt-0.5">
                            Main cover photo and photo gallery
                        </p>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Cover Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                Main Cover Photo *
                            </label>
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="border-2 border-dashed border-[#E4E7EC] hover:border-[#465FFF] rounded-xl p-6 text-center cursor-pointer bg-[#F9FAFB] transition"
                            >
                                {previewUrl ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={previewUrl}
                                        alt="Cover Preview"
                                        className="h-48 w-full object-cover rounded-lg mx-auto"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center space-y-2 text-[#6B7280]">
                                        <Upload className="h-9 w-9 text-[#465FFF]" />
                                        <p className="text-sm font-medium text-[#111827]">
                                            Click to upload Main Cover Photo
                                        </p>
                                        <p className="text-xs text-[#98A2B3]">JPG, PNG or WEBP (Max 10MB)</p>
                                    </div>
                                )}
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>

                        {/* Gallery Upload */}
                        <div>
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                Gallery Photos
                            </label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleGalleryFilesAdd}
                                className="w-full text-xs text-[#64748B] file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border file:border-[#E2E8F0] file:text-xs file:font-semibold file:bg-[#F8FAFC] file:text-[#1C2434] hover:file:bg-slate-100"
                            />

                            {galleryUrls.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                                    {galleryUrls.map((url, idx) => (
                                        <div key={idx} className="relative group aspect-video rounded-lg overflow-hidden bg-slate-100 border border-[#E2E8F0]">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={url} alt="Gallery" className="w-full h-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={() => removeGalleryImage(idx)}
                                                className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* SEO & Publishing Details Card */}
                <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
                    <div className="border-b border-[#F2F4F7] px-6 py-4">
                        <h2 className="text-[18px] font-semibold text-[#111827]">
                            SEO & Publishing Options
                        </h2>
                    </div>

                    <div className="p-6 space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Publication Status
                                </label>
                                <select
                                    value={form.published ? "true" : "false"}
                                    onChange={(e) => setForm((prev) => ({ ...prev, published: e.target.value === "true" }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] focus:border-[#465FFF] focus:ring-0 outline-none transition appearance-none cursor-pointer"
                                >
                                    <option value="true">Published (Active)</option>
                                    <option value="false">Draft (Hidden)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Featured Destination
                                </label>
                                <select
                                    value={form.featured ? "true" : "false"}
                                    onChange={(e) => setForm((prev) => ({ ...prev, featured: e.target.value === "true" }))}
                                    className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] focus:border-[#465FFF] focus:ring-0 outline-none transition appearance-none cursor-pointer"
                                >
                                    <option value="false">No (Standard)</option>
                                    <option value="true">Yes (Show in Featured Home Section)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                SEO Title Tag
                            </label>
                            <input
                                type="text"
                                placeholder="Ella Sri Lanka Travel Guide | Ceylon Vidu Tours"
                                value={form.seoTitle}
                                onChange={(e) => setForm((prev) => ({ ...prev, seoTitle: e.target.value }))}
                                className="w-full h-11 px-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                Meta Description
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Discover the top things to do in Ella, Sri Lanka..."
                                value={form.seoDescription}
                                onChange={(e) => setForm((prev) => ({ ...prev, seoDescription: e.target.value }))}
                                className="w-full p-3.5 bg-transparent border border-[#E4E7EC] rounded-lg text-sm font-normal text-[#111827] placeholder:text-[#98A2B3] focus:border-[#465FFF] focus:ring-0 outline-none transition resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Action Footer */}
                <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/admin/destinations"
                            className="px-5 py-2.5 rounded-lg border border-[#E4E7EC] text-sm font-medium text-[#111827] hover:bg-[#F9FAFB] transition"
                        >
                            Cancel
                        </Link>
                    </div>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-6 py-2.5 bg-[#465FFF] hover:bg-[#3441b8] text-white font-medium text-sm rounded-lg flex items-center gap-2 shadow-sm transition disabled:opacity-50"
                    >
                        {submitting ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Save className="h-4 w-4" />
                        )}
                        <span>
                            {submitting ? "Saving Destination..." : "Save Destination"}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}
