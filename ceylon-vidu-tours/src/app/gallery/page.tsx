"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import {
    ChevronLeft,
    ChevronRight,
    X,
    ZoomIn,
    Info,
    Image as ImageIcon,
    Loader2,
    ChevronRight as ChevronRightIcon,
    Play
} from "lucide-react";

interface GalleryItem {
    id: string;
    title: string;
    url: string;
    category: string;
    altText: string | null;
    description: string | null;
}

const isVideoFile = (url: string | null) => {
    if (!url) return false;
    const cleanUrl = url.split("?")[0].toLowerCase();
    return cleanUrl.endsWith(".mp4") ||
        cleanUrl.endsWith(".webm") ||
        cleanUrl.endsWith(".ogg") ||
        cleanUrl.endsWith(".mov") ||
        cleanUrl.endsWith(".m4v");
};

function ScrollReveal({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={className}>{children}</div>;
    }

    return (
        <div
            style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
            className={`animate-slide-up-fade ${className}`}
        >
            {children}
        </div>
    );
}

export default function GalleryPage() {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Lightbox slider state
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const fetchGallery = async () => {
        try {
            setLoading(true);
            const res = await apiClient.get("/gallery");
            if (res.data?.success) setGalleryItems(res.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const filteredItems = selectedCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

    // Add keyboard listener for Lightbox slider navigation
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setLightboxIndex(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, filteredItems]);

    const handleNext = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    };

    const handlePrev = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    };

    const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* 01. HERO BANNER HEADER */}
            <section className="relative overflow-hidden bg-slate-900 py-32 text-center text-white">
                {/* Micro particle decorations */}
                <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative max-w-6xl mx-auto px-6 space-y-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#16A34A] animate-pulse">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                        <span>Media Showcase</span>
                    </div>

                    <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        Sights of{" "}
                        <span className="bg-gradient-to-r from-[#16A34A] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
                            Beautiful Sri Lanka
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-relaxed text-slate-350 sm:text-xl">
                        Embark on a visual journey through Ceylon Vidū Tours. Explore pristine gold sand beaches, ancient temple civilizations, wildlife sanctuaries, and breathtaking mountainous trails.
                    </p>
                </div>
            </section>

            {/* 02. GALLERY LIBRARY SECTION */}
            <section className="bg-slate-50 py-24">
                <div className="max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-12">

                    {/* Category Filter Tabs */}
                    {!loading && galleryItems.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
                            {["All", ...Array.from(new Set(galleryItems.map(item => item.category)))].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => { setSelectedCategory(cat); setLightboxIndex(null); }}
                                    className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${selectedCategory.toLowerCase() === cat.toLowerCase()
                                        ? "bg-[#16A34A] text-white shadow-lg shadow-emerald-500/25 scale-105"
                                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-350 hover:bg-slate-50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {loading ? (
                        <div className="h-96 flex flex-col justify-center items-center">
                            <Loader2 className="h-10 w-10 animate-spin text-[#16A34A]" />
                            <p className="text-xs text-slate-400 mt-3 font-bold uppercase tracking-widest leading-none">Loading dynamic gallery showcase...</p>
                        </div>
                    ) : galleryItems.length === 0 ? (
                        <ScrollReveal direction="none" className="max-w-lg mx-auto">
                            <div className="h-80 flex flex-col justify-center items-center rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-xs">
                                <ImageIcon className="h-12 w-12 text-slate-350 mb-3" />
                                <h4 className="text-base font-bold text-slate-700 uppercase tracking-wider">No media found</h4>
                                <p className="text-sm text-slate-400 mt-1.5">Check back later or upload photos in the admin panel.</p>
                            </div>
                        </ScrollReveal>
                    ) : filteredItems.length === 0 ? (
                        <ScrollReveal className="max-w-lg mx-auto">
                            <div className="h-80 flex flex-col justify-center items-center rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-xs">
                                <ImageIcon className="h-12 w-12 text-slate-350 mb-3" />
                                <h4 className="text-base font-bold text-slate-700 uppercase tracking-wider">No items in this category</h4>
                                <p className="text-sm text-slate-400 mt-1.5">Try selecting another filter or choose "All Media".</p>
                            </div>
                        </ScrollReveal>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.map((item, idx) => {
                                const isVid = isVideoFile(item.url);
                                return (
                                    <ScrollReveal key={item.id} delay={idx * 55}>
                                        <div
                                            onClick={() => setLightboxIndex(idx)}
                                            className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-150/10 hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
                                        >
                                            <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative border-b border-slate-100">
                                                {isVid ? (
                                                    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-white relative transition-transform duration-700 group-hover:scale-105">
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent pointer-events-none" />
                                                        <Play className="h-12 w-12 text-[#16A34A] fill-[#16A34A]/20 group-hover:scale-110 transition duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-10" />
                                                        <span className="text-xs font-black text-slate-300 uppercase tracking-widest mt-2 z-10">Video Preview</span>
                                                    </div>
                                                ) : (
                                                    <img
                                                        src={item.url}
                                                        alt={item.altText || item.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        loading="lazy"
                                                        onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x300?text=Ceylon+Vidu"; }}
                                                    />
                                                )}

                                                {isVid && (
                                                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center z-10 shadow-lg">
                                                        <Play className="h-4 w-4 fill-current text-white ml-0.5" />
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all transform scale-90 group-hover:scale-100 duration-300 shadow-lg">
                                                        {isVid ? (
                                                            <Play className="h-5 w-5 fill-current text-white ml-0.5" />
                                                        ) : (
                                                            <ZoomIn className="h-5 w-5" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 flex flex-col justify-between">
                                                <div>
                                                    <span className="inline-flex items-center rounded-md bg-[#16A34A]/10 border border-[#16A34A]/20 px-2.5 py-0.5 text-xs font-bold text-[#16A34A] uppercase tracking-wider mb-2.5">
                                                        {item.category}
                                                    </span>
                                                    <h3 className="font-extrabold text-slate-800 text-base sm:text-[19px] uppercase tracking-tight truncate">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                {item.description && (
                                                    <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mt-3 font-medium line-clamp-3">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* LIGHTBOX SLIDER SCREEN */}
            {lightboxIndex !== null && activeLightboxItem && (
                <div className="fixed inset-0 z-[100] flex flex-col justify-between p-4 bg-black/95 backdrop-blur-md animate-fade-in duration-200 select-none text-white">

                    <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-3">
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-slate-400 font-mono">
                                {lightboxIndex + 1} / {filteredItems.length}
                            </span>
                        </div>
                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="h-10 w-10 shrink-0 bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center rounded-full transition"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto p-2">
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 md:-left-8 h-12 w-12 bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center rounded-full transition z-10"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        {isVideoFile(activeLightboxItem.url) ? (
                            <video
                                src={activeLightboxItem.url}
                                className="max-h-[70vh] max-w-full rounded-2xl shadow-2xl border border-white/5"
                                controls
                                autoPlay
                                playsInline
                            />
                        ) : (
                            <img
                                src={activeLightboxItem.url}
                                alt={activeLightboxItem.altText || activeLightboxItem.title}
                                className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/5"
                            />
                        )}

                        <button
                            onClick={handleNext}
                            className="absolute right-0 md:-right-8 h-12 w-12 bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center rounded-full transition z-10"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="bg-slate-900 border border-white/10 p-5 rounded-[22px] max-w-3xl w-full mx-auto text-center space-y-1 mb-3">
                        <h2 className="text-xl font-black text-white uppercase tracking-tight">
                            {activeLightboxItem.title}
                        </h2>
                        {activeLightboxItem.description && (
                            <p className="text-sm text-slate-350 max-w-lg mx-auto leading-relaxed">
                                {activeLightboxItem.description}
                            </p>
                        )}
                    </div>

                </div>
            )}

            <Footer />
        </main>
    );
}
