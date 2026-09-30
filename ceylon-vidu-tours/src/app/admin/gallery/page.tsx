"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { useAuthStore } from "@/stores/auth.store";
import {
    Images,
    Trash2,
    Edit2,
    Upload,
    Check,
    Loader2,
    Search,
    Eye,
    ChevronRight,
    Play,
    X,
    Filter,
    ArrowLeft,
    ArrowRight,
    Download,
} from "lucide-react";

interface GalleryItem {
    id: string;
    title: string;
    url: string;
    category: string;
    altText: string | null;
    description: string | null;
    createdAt?: string;
    views?: number;
    likes?: number;
}

const isVideoFile = (url: string | null) => {
    if (!url) return false;
    const cleanUrl = url.split("?")[0].toLowerCase();
    return (
        cleanUrl.endsWith(".mp4") ||
        cleanUrl.endsWith(".webm") ||
        cleanUrl.endsWith(".ogg") ||
        cleanUrl.endsWith(".mov") ||
        cleanUrl.endsWith(".m4v")
    );
};

const CATEGORIES = [
    { label: "All Categories", value: "all" },
    { label: "General", value: "General" },
    { label: "Beach & Coastal", value: "Beach" },
    { label: "Culture & Heritage", value: "Culture" },
    { label: "Hill Country", value: "Hill Country" },
    { label: "Wildlife & Safari", value: "Wildlife" },
    { label: "Hotels & Stay", value: "Hotels" },
];

export default function AdminGalleryPage() {
    const router = useRouter();
    const { accessToken, isAuthenticated } = useAuthStore();
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [modalType, setModalType] = useState<"upload" | "edit" | null>(null);
    const [editTarget, setEditTarget] = useState<GalleryItem | null>(null);

    const [form, setForm] = useState({ title: "", category: "General", altText: "", desc: "" });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [submitting, setSubmitting] = useState(false);

    const uploadInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
            return;
        }
        fetchGallery();
    }, [accessToken, isAuthenticated]);

    const fetchGallery = async () => {
        try {
            setLoading(true);
            const res = await apiClient.get("/gallery");
            if (res.data?.success) {
                setGalleryItems(res.data.data || []);
            }
        } catch (err) {
            console.error("Error fetching gallery items:", err);
            toast.error("Failed to load gallery items.");
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, isEdit = false) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            if (!isEdit && !form.title) {
                const pretty = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
                setForm((p) => ({ ...p, title: pretty, altText: pretty }));
            }
        }
    };

    const handleUploadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.title || !selectedFile) return toast.error("File and title are required.");
        submitForm("/gallery", "POST");
    };

    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editTarget) return;
        submitForm("/gallery", "PUT", editTarget.id);
    };

    const submitForm = async (endpoint: string, method: "POST" | "PUT", editId?: string) => {
        try {
            setSubmitting(true);
            const formData = new FormData();
            if (editId) formData.append("id", editId);
            if (selectedFile) formData.append("file", selectedFile);
            formData.append("title", form.title);
            formData.append("category", form.category || "General");
            formData.append("altText", form.altText || form.title);
            formData.append("description", form.desc);

            const res =
                method === "POST"
                    ? await apiClient.post(endpoint, formData, {
                        headers: { "Content-Type": "multipart/form-data" },
                    })
                    : await apiClient.put(endpoint, formData, {
                        headers: { "Content-Type": "multipart/form-data" },
                    });

            if (res.data?.success) {
                toast.success(`Media ${method === "POST" ? "published" : "updated"} successfully!`);
                resetForms();
                setSelectedIds([]);
                fetchGallery();
            }
        } catch {
            toast.error("Operation failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const resetForms = () => {
        setForm({ title: "", category: "General", altText: "", desc: "" });
        setSelectedFile(null);
        setPreviewUrl("");
        setModalType(null);
        setEditTarget(null);
    };

    const openEditMode = () => {
        const target = galleryItems.find((i) => i.id === selectedIds[0]);
        if (target) {
            setEditTarget(target);
            setForm({
                title: target.title,
                category: target.category || "General",
                altText: target.altText || "",
                desc: target.description || "",
            });
            setPreviewUrl(target.url);
            setSelectedFile(null);
            setModalType("edit");
        }
    };

    const handleDeleteSelected = async () => {
        if (!confirm(`Are you sure you want to delete ${selectedIds.length} item(s) permanently?`)) return;
        try {
            const res = await apiClient.delete(`/gallery?id=${selectedIds.join(",")}`);
            if (res.data?.success) {
                toast.success("Selected media items deleted.");
                setSelectedIds([]);
                fetchGallery();
            }
        } catch {
            toast.error("Deletion failed.");
        }
    };

    const handleToggleAll = () => {
        const activeItems = filteredGallery.map((i) => i.id);
        const allSelected = activeItems.length > 0 && activeItems.every((id) => selectedIds.includes(id));
        if (allSelected) {
            setSelectedIds(selectedIds.filter((id) => !activeItems.includes(id)));
        } else {
            setSelectedIds(Array.from(new Set([...selectedIds, ...activeItems])));
        }
    };

    const filteredGallery = useMemo(() => {
        return (galleryItems || []).filter((item) => {
            if (!item) return false;
            const q = (searchQuery || "").toLowerCase();
            const matchesSearch =
                (item.title && item.title.toLowerCase().includes(q)) ||
                (item.description && item.description.toLowerCase().includes(q)) ||
                (item.altText && item.altText.toLowerCase().includes(q));

            const matchesCategory =
                selectedCategory === "all" ||
                (item.category && item.category.toLowerCase() === selectedCategory.toLowerCase());

            return matchesSearch && matchesCategory;
        });
    }, [galleryItems, searchQuery, selectedCategory]);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
            if (e.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
            if (e.key === "Escape") setLightboxIndex(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, filteredGallery]);

    const isPreviewVideo = selectedFile
        ? selectedFile.type.startsWith("video/")
        : isVideoFile(previewUrl);

    return (
        <div className="w-full">
            {/* ======================================== */}
            {/* Page Header */}
            {/* ======================================== */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-[#111827] tracking-tight">
                    Gallery Workspace
                </h1>

                <nav className="flex items-center gap-2 text-base text-[#6B7280]">
                    <Link
                        href="/admin/dashboard"
                        className="hover:text-[#465FFF] transition-colors"
                    >
                        Home
                    </Link>
                    <ChevronRight className="h-4.5 w-4.5 text-[#9CA3AF]" />
                    <span className="text-[#111827] font-medium">Gallery</span>
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
                            Media Library
                        </h2>
                        <p className="text-sm text-[#6B7280] mt-1">
                            Manage and organize photos and video assets for your tour packages & destinations.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {selectedIds.length > 0 && (
                            <>
                                {selectedIds.length === 1 && (
                                    <button
                                        onClick={openEditMode}
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#E4E7EC] bg-[#EBF1FF] text-[#465FFF] text-base font-medium hover:bg-[#dbe7ff] transition"
                                    >
                                        <Edit2 className="h-4.5 w-4.5" />
                                        Edit Selected
                                    </button>
                                )}
                                <button
                                    onClick={handleDeleteSelected}
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#F8C4C6] bg-[#FEF3F2] text-[#EF4444] text-base font-medium hover:bg-[#fde8e7] transition"
                                >
                                    <Trash2 className="h-4.5 w-4.5" />
                                    Delete ({selectedIds.length})
                                </button>
                            </>
                        )}

                        <button
                            onClick={() => {
                                resetForms();
                                setModalType("upload");
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#465FFF] hover:bg-[#3441b8] text-white font-medium text-base rounded-lg shadow-sm transition"
                        >
                            <Upload className="h-5 w-5" />
                            <span>Upload Media</span>
                        </button>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="px-7 py-5 border-b border-[#F2F4F7]">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 flex items-center gap-3 h-12 px-4 bg-transparent border border-[#E4E7EC] rounded-lg focus-within:border-[#465FFF] transition">
                            <Search className="h-5 w-5 text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search media by title or description..."
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

                        <button
                            onClick={handleToggleAll}
                            className="inline-flex items-center gap-2 px-5 h-12 rounded-lg border border-[#E4E7EC] text-base font-medium text-[#111827] hover:bg-[#F9FAFB] transition"
                        >
                            <Filter className="h-5 w-5 text-[#6B7280]" />
                            <span>{filteredGallery.length > 0 && filteredGallery.every((i) => selectedIds.includes(i.id)) ? "Deselect All" : "Select All"}</span>
                        </button>
                    </div>
                </div>

                <input
                    type="file"
                    ref={uploadInputRef}
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={(e) => {
                        handleFileChange(e, modalType === "edit");
                        if (!modalType) setModalType("upload");
                    }}
                />

                {/* Media Grid Content */}
                <div className="p-7">
                    {loading ? (
                        <div className="h-64 flex flex-col items-center justify-center space-y-3">
                            <Loader2 className="h-10 w-10 animate-spin text-[#465FFF]" />
                            <span className="text-base font-medium text-[#6B7280]">
                                Loading media library...
                            </span>
                        </div>
                    ) : filteredGallery.length === 0 ? (
                        <div className="h-64 flex flex-col items-center justify-center text-[#6B7280]">
                            <Images className="h-12 w-12 mb-3 stroke-[1.5]" />
                            <p className="text-base font-medium">
                                No media items found in gallery.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredGallery.map((item, idx) => {
                                const isSelected = selectedIds.includes(item.id);
                                const isVid = isVideoFile(item.url);

                                return (
                                    <div
                                        key={item.id}
                                        onClick={() =>
                                            setSelectedIds((p) =>
                                                p.includes(item.id)
                                                    ? p.filter((x) => x !== item.id)
                                                    : [...p, item.id]
                                            )
                                        }
                                        className={`group relative bg-white border rounded-xl overflow-hidden cursor-pointer transition ${isSelected
                                            ? "border-[#465FFF] ring-2 ring-[#465FFF]/20 shadow-md"
                                            : "border-[#E4E7EC] hover:border-[#465FFF]/60 hover:shadow-sm"
                                            }`}
                                    >
                                        {/* Selection Checkbox Pill */}
                                        <div
                                            className={`absolute top-3 left-3 h-6 w-6 rounded-lg flex items-center justify-center border transition z-10 ${isSelected
                                                ? "bg-[#465FFF] border-[#465FFF] text-white"
                                                : "bg-white/90 border-[#E4E7EC] text-transparent hover:border-[#465FFF]"
                                                }`}
                                        >
                                            <Check className="h-4 w-4 stroke-[3]" />
                                        </div>

                                        {/* Video Tag */}
                                        {isVid && (
                                            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#111827]/80 backdrop-blur-xs text-white text-[11px] font-semibold uppercase px-2.5 py-1 rounded-md z-10">
                                                <Play className="h-3 w-3 fill-current" /> VIDEO
                                            </div>
                                        )}

                                        {/* Media Preview Box */}
                                        <div className="aspect-square bg-[#F9FAFB] overflow-hidden relative">
                                            {isVid ? (
                                                <div className="w-full h-full bg-[#111827] flex flex-col items-center justify-center text-white">
                                                    <Play className="h-10 w-10 text-[#465FFF] fill-white" />
                                                </div>
                                            ) : (
                                                /* eslint-disable-next-line @next/next/no-img-element */
                                                <img
                                                    src={item.url}
                                                    alt={item.altText || item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                                />
                                            )}

                                            {/* Hover Action Overlay */}
                                            <div className="absolute inset-0 bg-[#111827]/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setLightboxIndex(idx);
                                                    }}
                                                    className="p-3 rounded-full bg-white text-[#111827] shadow-lg hover:scale-110 transition"
                                                    title="Preview Media"
                                                >
                                                    <Eye className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Meta Footer */}
                                        <div className="p-4 space-y-1.5 border-t border-[#F2F4F7]">
                                            <span className="inline-block text-xs font-semibold text-[#465FFF] bg-[#EBF1FF] px-2.5 py-0.5 rounded-full">
                                                {item.category || "General"}
                                            </span>
                                            <h3 className="font-medium text-[#111827] text-base truncate">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Footer Count Bar */}
                {!loading && filteredGallery.length > 0 && (
                    <div className="px-7 py-5 border-t border-[#F2F4F7] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-base text-[#6B7280]">
                            Showing{" "}
                            <span className="font-medium text-[#111827]">
                                {filteredGallery.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-[#111827]">
                                {galleryItems.length}
                            </span>{" "}
                            media items
                        </span>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-[#6B7280]">
                                {selectedIds.length} item(s) selected
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* ======================================== */}
            {/* Upload / Edit Modal Dialog */}
            {/* ======================================== */}
            {modalType && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111827]/50 backdrop-blur-xs">
                    <div className="w-full max-w-xl bg-white rounded-xl border border-[#E4E7EC] shadow-2xl p-7 relative">
                        <button
                            onClick={resetForms}
                            className="absolute top-5 right-5 p-2 text-[#9CA3AF] hover:text-[#111827] transition rounded-lg hover:bg-[#F2F4F7]"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <h3 className="font-bold text-[#111827] text-xl mb-6 border-b border-[#F2F4F7] pb-4">
                            {modalType === "upload" ? "Upload New Media" : "Edit Media Item"}
                        </h3>

                        <form
                            onSubmit={modalType === "upload" ? handleUploadSubmit : handleEditSubmit}
                            className="space-y-5 text-base font-medium text-[#111827]"
                        >
                            <div>
                                <label className="block font-medium mb-2 text-sm text-[#111827]">
                                    Choose Media File {modalType === "upload" && <span className="text-[#EF4444]">*</span>}
                                </label>
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    required={modalType === "upload"}
                                    onChange={(e) => handleFileChange(e, modalType === "edit")}
                                    className="w-full text-sm text-[#6B7280] file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border file:border-[#E4E7EC] file:bg-[#F9FAFB] file:text-[#111827] file:font-medium hover:file:bg-[#F2F4F7] cursor-pointer"
                                />
                            </div>

                            {previewUrl && (
                                <div className="p-3 border border-[#E4E7EC] bg-[#F9FAFB] rounded-xl text-center">
                                    {isPreviewVideo ? (
                                        <video
                                            src={previewUrl}
                                            className="w-full h-44 object-cover rounded-lg"
                                            controls
                                        />
                                    ) : (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="w-full h-44 object-cover rounded-lg"
                                        />
                                    )}
                                </div>
                            )}

                            <div>
                                <label className="block font-medium mb-2 text-sm text-[#111827]">
                                    Title <span className="text-[#EF4444]">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter media title"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value ?? "" })}
                                    className="w-full px-4 h-12 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-medium outline-none focus:border-[#465FFF]"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2 text-sm text-[#111827]">
                                    Category <span className="text-[#EF4444]">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Category (e.g. Beach, Culture, Wildlife)"
                                    value={form.category}
                                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                                    className="w-full px-4 h-12 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-medium outline-none focus:border-[#465FFF]"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2 text-sm text-[#111827]">
                                    Description
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Add a brief description..."
                                    value={form.desc}
                                    onChange={(e) => setForm({ ...form, desc: e.target.value })}
                                    className="w-full p-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-medium outline-none focus:border-[#465FFF]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full h-12 bg-[#465FFF] hover:bg-[#3441b8] text-white rounded-lg text-base font-medium shadow-sm transition flex items-center justify-center gap-2"
                            >
                                {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
                                <span>{modalType === "upload" ? "Publish Media" : "Save Changes"}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* ======================================== */}
            {/* Lightbox Preview Modal */}
            {/* ======================================== */}
            {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111827]/90 backdrop-blur-md p-6"
                    onClick={() => setLightboxIndex(null)}
                >
                    <button
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
                        }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                    >
                        <ArrowLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
                        }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                    >
                        <ArrowRight className="h-6 w-6" />
                    </button>

                    <div
                        className="max-w-4xl w-full flex flex-col items-center gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {isVideoFile(filteredGallery[lightboxIndex].url) ? (
                            <video
                                src={filteredGallery[lightboxIndex].url}
                                controls
                                autoPlay
                                className="max-h-[75vh] rounded-xl shadow-2xl"
                            />
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={filteredGallery[lightboxIndex].url}
                                alt={filteredGallery[lightboxIndex].title}
                                className="max-h-[75vh] object-contain rounded-xl shadow-2xl"
                            />
                        )}
                        <div className="text-center text-white space-y-1">
                            <h3 className="text-xl font-bold">{filteredGallery[lightboxIndex].title}</h3>
                            {filteredGallery[lightboxIndex].description && (
                                <p className="text-sm text-[#9CA3AF] max-w-lg">{filteredGallery[lightboxIndex].description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}