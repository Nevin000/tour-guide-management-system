"use client";

import React, { useState } from "react";
import { X, Upload, Check, Image as ImageIcon, Sparkles, Search, Loader2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";

// Curated high-resolution Sri Lanka travel photo gallery
export const PRESET_SRI_LANKA_IMAGES = [
    {
        url: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
        title: "Sigiriya Rock Fortress",
        category: "Cultural Triangle"
    },
    {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
        title: "Yala Leopard & Safari",
        category: "Wildlife & Safari"
    },
    {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        title: "Galle Fort Coastal Sunset",
        category: "Beaches & Heritage"
    },
    {
        url: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
        title: "Kandy Tea Plantation & Blue Train",
        category: "Highlands & Tea"
    },
    {
        url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200&auto=format&fit=crop",
        title: "Temple of Sacred Tooth Relic Kandy",
        category: "Cultural Triangle"
    },
    {
        url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
        title: "Ella Nine Arch Bridge Train",
        category: "Highlands & Tea"
    },
    {
        url: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200&auto=format&fit=crop",
        title: "Mirissa Blue Whale Cruise",
        category: "Ocean & Wildlife"
    },
    {
        url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop",
        title: "Dambulla Golden Cave Temple",
        category: "Cultural Triangle"
    },
    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        title: "Bentota Golden Beach Resort",
        category: "Beaches & Heritage"
    },
    {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        title: "Pinnawala Elephant River Bathing",
        category: "Wildlife & Safari"
    },
    {
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
        title: "Traditional Sri Lankan Curry Feast",
        category: "Food & Culture"
    },
    {
        url: "https://images.unsplash.com/photo-1476514525535-ce74f45814d1?q=80&w=1200&auto=format&fit=crop",
        title: "Polonnaruwa Ancient Stupa",
        category: "Cultural Triangle"
    }
];

interface ImagePickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectImage: (imageUrl: string) => void;
    title?: string;
    currentImage?: string;
}

export default function ImagePickerModal({
    isOpen,
    onClose,
    onSelectImage,
    title = "Select Image for Tour",
    currentImage = ""
}: ImagePickerModalProps) {
    const [tab, setTab] = useState<"library" | "upload">("library");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [uploading, setUploading] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState(currentImage);

    if (!isOpen) return null;

    const categories = ["All", "Cultural Triangle", "Wildlife & Safari", "Beaches & Heritage", "Highlands & Tea", "Ocean & Wildlife", "Food & Culture"];

    const filteredPresets = PRESET_SRI_LANKA_IMAGES.filter((item) => {
        const matchesCat = categoryFilter === "All" || item.category === categoryFilter;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setUploading(true);
            const formData = new FormData();
            formData.append("image", file);

            const res = await apiClient.post("/tours/upload-image", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (res.data?.success && res.data?.data?.url) {
                const uploadedUrl = res.data.data.url;
                setSelectedUrl(uploadedUrl);
                toast.success("Image uploaded successfully!");
                onSelectImage(uploadedUrl);
                onClose();
            } else {
                toast.error(res.data?.message || "Failed to upload image.");
            }
        } catch (err: any) {
            console.error("Image upload error:", err);
            toast.error(err.response?.data?.message || "Error uploading image file.");
        } finally {
            setUploading(false);
        }
    };

    const handleConfirmSelection = () => {
        if (!selectedUrl) {
            return toast.error("Please choose an image first.");
        }
        onSelectImage(selectedUrl);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                            <ImageIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-base font-black text-white">{title}</h3>
                            <p className="text-xs text-slate-400 font-medium">Choose from curated Sri Lanka travel library or upload from computer</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Sub-Header Tabs */}
                <div className="px-6 pt-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div className="flex gap-4">
                        <button
                            onClick={() => setTab("library")}
                            className={`pb-3 text-xs font-extrabold border-b-2 transition flex items-center gap-2 cursor-pointer ${tab === "library"
                                    ? "border-emerald-600 text-emerald-600"
                                    : "border-transparent text-slate-500 hover:text-slate-800"
                                }`}
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>Travel Photo Library</span>
                        </button>
                        <button
                            onClick={() => setTab("upload")}
                            className={`pb-3 text-xs font-extrabold border-b-2 transition flex items-center gap-2 cursor-pointer ${tab === "upload"
                                    ? "border-emerald-600 text-emerald-600"
                                    : "border-transparent text-slate-500 hover:text-slate-800"
                                }`}
                        >
                            <Upload className="h-4 w-4" />
                            <span>Upload Local File</span>
                        </button>
                    </div>

                    {tab === "library" && (
                        <div className="relative mb-2">
                            <Search className="h-3.5 w-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search photos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-8 pl-8 pr-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                            />
                        </div>
                    )}
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto flex-1 space-y-4">
                    {tab === "library" && (
                        <div className="space-y-4">
                            {/* Category Filter Pills */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setCategoryFilter(cat)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition cursor-pointer ${categoryFilter === cat
                                                ? "bg-slate-900 text-white shadow-xs"
                                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Photo Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredPresets.map((item, idx) => {
                                    const isSelected = selectedUrl === item.url;
                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedUrl(item.url)}
                                            className={`relative group rounded-2xl overflow-hidden border-2 cursor-pointer transition-all aspect-video shadow-xs ${isSelected
                                                    ? "border-emerald-600 ring-4 ring-emerald-500/20 scale-[1.02]"
                                                    : "border-slate-200 hover:border-emerald-400 hover:shadow-md"
                                                }`}
                                        >
                                            <Image
                                                src={item.url}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-3 flex flex-col justify-end">
                                                <span className="text-[11px] font-extrabold text-white line-clamp-1">
                                                    {item.title}
                                                </span>
                                                <span className="text-[9px] font-bold text-slate-300">
                                                    {item.category}
                                                </span>
                                            </div>

                                            {isSelected && (
                                                <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                                                    <Check className="h-4 w-4" />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {tab === "upload" && (
                        <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50 hover:bg-slate-50 transition text-center p-6">
                            {uploading ? (
                                <div className="space-y-3">
                                    <Loader2 className="h-10 w-10 animate-spin text-emerald-600 mx-auto" />
                                    <p className="text-xs font-bold text-slate-700">Uploading image to server...</p>
                                </div>
                            ) : (
                                <div className="space-y-4 max-w-md">
                                    <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-md">
                                        <Upload className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-extrabold text-slate-900">Upload High-Res Tour Photo</h4>
                                        <p className="text-xs text-slate-500 font-medium mt-1">
                                            Supports JPG, PNG, WEBP files up to 10MB. Photo will be automatically saved to your tour gallery.
                                        </p>
                                    </div>
                                    <label className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg transition cursor-pointer">
                                        <Upload className="h-4 w-4" />
                                        <span>Browse Files From Computer</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileUpload}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer Buttons */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-semibold text-slate-500 truncate max-w-md">
                        {selectedUrl ? (
                            <span className="text-emerald-700 font-bold">Selected: {selectedUrl.substring(0, 50)}...</span>
                        ) : (
                            <span>No photo selected</span>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleConfirmSelection}
                            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition cursor-pointer"
                        >
                            Select This Photo
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
