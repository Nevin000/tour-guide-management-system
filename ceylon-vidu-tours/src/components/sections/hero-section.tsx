"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
    Compass,
    Award,
    ShieldCheck,
    Star,
    Volume2,
    VolumeX,
    Mail,
    MessageCircle,
    Globe,
    Sparkles,
    ArrowRight
} from "lucide-react";

export default function HeroSection() {
    const [isMuted, setIsMuted] = useState(true);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Wait for page to finish loading and rendering before requesting video resources
        const timer = setTimeout(() => {
            setShouldLoadVideo(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="relative isolate min-h-screen w-full overflow-hidden bg-slate-950 select-none flex flex-col justify-between">
            {/* ===== Background Video / Fallback Cover ===== */}
            <div className="absolute inset-0 -z-30 h-full w-full bg-slate-950">
                <img
                    src="/Contact_Background.png"
                    alt="Scenic Sri Lanka Background"
                    className="absolute inset-0 h-full w-full object-cover opacity-75"
                />

                {shouldLoadVideo && (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted={isMuted}
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-1000 ease-out"
                    >
                        <source src="/Hero_Video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {/* ===== Subtle Video Overlays ===== */}
            <div className="absolute inset-0 -z-20 bg-slate-950/20 backdrop-brightness-[0.95]" />
            <div className="absolute inset-0 -z-10 bg-radial from-slate-950/30 via-slate-950/40 to-slate-950/70" />
            <div className="absolute inset-x-0 top-0 -z-10 h-44 bg-linear-to-b from-slate-950/80 via-slate-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Emerald/Cyan Ambient Glow Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-160 w-160 rounded-full bg-emerald-500/15 blur-[160px] pointer-events-none" />

            {/* ===== CENTERED HERO CONTENT ===== */}
            <div className="relative mx-auto flex flex-1 w-full max-w-[1500px] flex-col items-center justify-center px-6 sm:px-8 lg:px-12 pt-36 pb-12 text-center">

                {/* Pill Badge */}
                <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm sm:text-base font-bold tracking-wide text-white shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-emerald-400/50 hover:bg-white/20 cursor-pointer">
                    <Sparkles className="h-5 w-5 text-emerald-400 animate-pulse" />
                    <span className="bg-linear-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
                        Premium Sri Lanka Tours &amp; Experiences
                    </span>
                </div>

                {/* Extra Large Heading */}
                <h1 className="max-w-6xl text-6xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-8xl md:text-9xl xl:text-[112px] drop-shadow-2xl">
                    Discover{" "}
                    <span className="block bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_12px_40px_rgba(16,185,129,0.35)] mt-2">
                        Paradise Sri Lanka
                    </span>
                </h1>

                {/* Larger Subtitle Paragraph */}
                <p className="mt-8 max-w-4xl text-lg font-medium leading-relaxed text-slate-100/95 sm:text-2xl lg:text-3xl drop-shadow-md">
                    Embark on extraordinary journeys across Sri Lanka. From ancient heritage sites and lush tea plantations
                    to pristine beaches and luxury wildlife safaris.
                </p>

                {/* Larger Action Buttons */}
                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center justify-center w-full max-w-md sm:max-w-none">
                    {/* Primary Button */}
                    <Link
                        href="/tours"
                        className="group relative inline-flex h-16 items-center justify-center gap-3.5 rounded-full bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-600 px-10 text-lg sm:text-xl font-bold text-white shadow-[0_10px_35px_rgba(16,185,129,0.45)] transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(16,185,129,0.65)] hover:scale-[1.03] active:translate-y-0 active:scale-[0.98]"
                    >
                        <Compass className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-45" />
                        <span>Explore Our Tours</span>
                        <ArrowRight className="h-5.5 w-5.5 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>

                    {/* Secondary Button */}
                    <Link
                        href="/contact"
                        className="group inline-flex h-16 items-center justify-center gap-3.5 rounded-full border border-white/35 bg-white/15 px-10 text-lg sm:text-xl font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white hover:text-slate-950 hover:scale-[1.03] active:translate-y-0 active:scale-[0.98]"
                    >
                        <span>Custom Travel Plan</span>
                    </Link>
                </div>

                {/* Circular Social & Brand Partner Icons Row */}
                <div className="mt-11 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                    {/* Facebook Icon */}
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-slate-900/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-blue-500 hover:bg-blue-600 shadow-2xl"
                        aria-label="Facebook"
                    >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>

                    {/* Instagram Icon */}
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-slate-900/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 shadow-2xl"
                        aria-label="Instagram"
                    >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/94771234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-slate-900/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-emerald-500 hover:bg-emerald-600 shadow-2xl"
                        aria-label="WhatsApp"
                    >
                        <MessageCircle className="h-6 w-6" />
                    </a>

                    {/* TripAdvisor / Globe */}
                    <a
                        href="https://tripadvisor.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-slate-900/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-emerald-400 hover:bg-emerald-700 shadow-2xl"
                        aria-label="TripAdvisor"
                    >
                        <Globe className="h-6 w-6" />
                    </a>

                    {/* GetYourGuide */}
                    <a
                        href="https://getyourguide.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-slate-900/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 shadow-2xl"
                        aria-label="GetYourGuide"
                    >
                        <span className="text-[13px] font-black tracking-tighter text-red-400 group-hover:text-white transition-colors">GYG</span>
                    </a>

                    {/* Mail */}
                    <a
                        href="mailto:hello@ceylonvidu.lk"
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-slate-900/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-red-500 hover:bg-red-600 shadow-2xl"
                        aria-label="Email"
                    >
                        <Mail className="h-6 w-6" />
                    </a>
                </div>
            </div>

            {/* ===== ENLARGED FLOATING GLASS FEATURE CAPSULE ===== */}
            <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-8 pb-10 flex items-center justify-center">
                <div className="rounded-full border border-white/30 bg-slate-900/85 px-10 sm:px-16 py-5 sm:py-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-500 hover:border-emerald-400/60 hover:bg-slate-900/95">
                    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-white text-base sm:text-lg font-extrabold">

                        <div className="flex items-center gap-3">
                            <Compass className="h-6 w-6 text-emerald-400 shrink-0" />
                            <span>Tailor-Made Itineraries</span>
                        </div>

                        <div className="hidden sm:block h-5 w-px bg-white/25" />

                        <div className="flex items-center gap-3">
                            <Award className="h-6 w-6 text-teal-400 shrink-0" />
                            <span>Expert Local Guides</span>
                        </div>

                        <div className="hidden sm:block h-5 w-px bg-white/25" />

                        <div className="flex items-center gap-3">
                            <ShieldCheck className="h-6 w-6 text-sky-400 shrink-0" />
                            <span>100% Verified Safety</span>
                        </div>

                        <div className="hidden sm:block h-5 w-px bg-white/25" />

                        <div className="flex items-center gap-3">
                            <Star className="h-5.5 w-5.5 fill-amber-400 text-amber-400 shrink-0" />
                            <span>4.9/5 Rating (15k+ Reviews)</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* ===== FLOATING MUTE / UNMUTE BUTTON ===== */}
            <button
                onClick={toggleMute}
                className="fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full border border-white/35 bg-slate-900/85 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white/60 cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
                {isMuted ? (
                    <VolumeX className="h-6 w-6 text-slate-300" />
                ) : (
                    <Volume2 className="h-6 w-6 text-emerald-400 animate-pulse" />
                )}
            </button>
        </section>
    );
}