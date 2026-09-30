"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Sparkles,
    Clock,
    MapPin,
    Star,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
} from "lucide-react";

// Types
interface TourPackage {
    id: string;
    title: string;
    category: "one day tour" | "round tour";
    duration: string;
    rating: number;
    reviewsCount: number;
    price: number;
    image: string;
    destinations: string[];
    highlights: string[];
    featuredTag?: string;
}

const tourPackages: TourPackage[] = [
    {
        id: "tour-1",
        title: "Royal Kingdoms & Ancient Heritage",
        category: "round tour",
        duration: "7 Days / 6 Nights",
        rating: 4.95,
        reviewsCount: 184,
        price: 790,
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
        destinations: ["Sigiriya", "Kandy", "Dambulla", "Polonnaruwa"],
        highlights: ["Sigiriya Rock Fortress Entry", "Temple of the Sacred Tooth Relic", "Traditional Cultural Dance Show", "Spices & Botanical Garden"],
        featuredTag: "Most Popular",
    },
    {
        id: "tour-2",
        title: "Wild Ceylon Safari & National Parks",
        category: "round tour",
        duration: "6 Days / 5 Nights",
        rating: 4.92,
        reviewsCount: 142,
        price: 850,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
        destinations: ["Yala", "Udawalawe", "Wilpattu", "Mirissa"],
        highlights: ["Leopard & Elephant Safari", "Whale Watching Cruise", "Luxury Jungle Glamping", "Bird Watching Sanctuary"],
        featuredTag: "Best Seller",
    },
    {
        id: "tour-3",
        title: "Sigiriya Rock & Dambulla Cave One Day Tour",
        category: "one day tour",
        duration: "1 Day / Day Trip",
        rating: 4.98,
        reviewsCount: 210,
        price: 150,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        destinations: ["Sigiriya", "Dambulla"],
        highlights: ["UNESCO Sigiriya Rock Hike", "Golden Temple Cave Complex", "Traditional Village Lunch", "Private Luxury Vehicle Transfer"],
        featuredTag: "Top Day Tour",
    },
    {
        id: "tour-4",
        title: "Highland Tea Trails & Scenic Blue Train",
        category: "round tour",
        duration: "5 Days / 4 Nights",
        rating: 4.90,
        reviewsCount: 116,
        price: 680,
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
        destinations: ["Nuwara Eliya", "Ella", "Nine Arch Bridge", "Horton Plains"],
        highlights: ["Famous Kandy to Ella Scenic Train", "Private Tea Factory Tasting", "Nine Arch Bridge Sunrise", "World's End Cliff Trek"],
    },
    {
        id: "tour-5",
        title: "Ultimate Ceylon Grand Luxury Expedition",
        category: "round tour",
        duration: "10 Days / 9 Nights",
        rating: 5.0,
        reviewsCount: 95,
        price: 1850,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
        destinations: ["Sigiriya", "Kandy", "Tea Trails", "Yala", "Galle"],
        highlights: ["Helicopter Airport Transfers", "5-Star Boutique Hotels", "Dedicated Chauffeur & Expert Guide", "Helicopter Island Sightseeing"],
        featuredTag: "Signature Luxury",
    },
    {
        id: "tour-6",
        title: "Kandy Sacred City & Botanical Garden One Day Tour",
        category: "one day tour",
        duration: "1 Day / Day Trip",
        rating: 4.96,
        reviewsCount: 168,
        price: 130,
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200&auto=format&fit=crop",
        destinations: ["Kandy", "Peradeniya"],
        highlights: ["Temple of the Sacred Tooth Relic", "Royal Botanical Gardens", "Tea Factory & Spice Garden", "Scenic Driver Escort"],
    },
];

// Helper Component for Scroll Reveal Animations
function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getTransformClass = () => {
        if (isVisible) return "opacity-100 translate-x-0 translate-y-0 scale-100";
        switch (direction) {
            case "up":
                return "opacity-0 translate-y-16 scale-[0.97]";
            case "down":
                return "opacity-0 -translate-y-16 scale-[0.97]";
            case "left":
                return "opacity-0 translate-x-16 scale-[0.97]";
            case "right":
                return "opacity-0 -translate-x-16 scale-[0.97]";
            case "none":
                return "opacity-0 scale-[0.95]";
            default:
                return "opacity-0 translate-y-16 scale-[0.97]";
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out will-change-transform ${getTransformClass()} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default function FeaturedTours() {
    return (
        <section className="relative w-full overflow-hidden bg-slate-100 bg-[url('/tours_beach_bg.png')] bg-cover bg-center py-24 sm:py-32 lg:py-40 select-none">
            {/* White Soft Overlay for High Contrast */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] pointer-events-none -z-10" />

            {/* Soft Ambient Background Glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-50">
                <div className="absolute top-1/4 -right-32 h-125 w-125 rounded-full bg-[#16A34A]/15 blur-[140px]" />
                <div className="absolute bottom-1/4 -left-32 h-137.5 w-137.5 rounded-full bg-[#0EA5E9]/15 blur-[150px]" />
            </div>

            {/* Subtle Light Grid Pattern */}
            <div className="absolute inset-0 -z-5 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

            {/* Top Divider Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#16A34A]/40 to-transparent" />

            <div className="relative mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">
                {/* Header */}
                <div className="mx-auto max-w-5xl text-center">
                    <ScrollReveal direction="down" delay={0}>
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 px-6 py-2.5 text-xs sm:text-sm font-extrabold tracking-widest text-[#16A34A] uppercase shadow-xs transition-all duration-300 hover:scale-105 hover:bg-[#16A34A]/20">
                            <Sparkles className="h-4 w-4 text-[#16A34A] animate-pulse" />
                            <span>Curated Travel Experiences</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={120}>
                        <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.06]">
                            Explore Featured{" "}
                            <span className="bg-linear-to-r from-[#16A34A] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-xs">
                                Sri Lanka Tours
                            </span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600 sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
                            Handcrafted itineraries tailored for unforgettable journeys, luxury comfort, and authentic island discoveries.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Tour Cards Grid (All 6 Packages) */}
                <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {tourPackages.map((pkg, index) => {
                        const delay = (index % 3) * 120;
                        return (
                            <ScrollReveal key={pkg.id} direction="up" delay={delay}>
                                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#16A34A]/15 hover:border-[#16A34A]/50 h-full min-h-105">
                                    {/* Cover Image Container */}
                                    <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                                        {/* Featured Pill Tag */}
                                        {pkg.featuredTag && (
                                            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#16A34A] px-3.5 py-1 text-xs font-bold text-white shadow-md">
                                                <Sparkles className="h-3.5 w-3.5 fill-white text-white" />
                                                <span>{pkg.featuredTag}</span>
                                            </div>
                                        )}

                                        {/* Duration Pill */}
                                        <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-slate-950/75 border border-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                                            <Clock className="h-3.5 w-3.5 text-[#38BDF8]" />
                                            <span>{pkg.duration}</span>
                                        </div>

                                        {/* Verified Badge */}
                                        <div className="absolute bottom-4 right-4 z-10">
                                            <div className="flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                                                <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A]" />
                                                <span>Verified Tour</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="flex flex-col justify-between flex-1 p-7 sm:p-9">
                                        <div>
                                            {/* Destinations Badges */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                {Array.isArray(pkg.destinations) && pkg.destinations.map((dest: any, i: number) => {
                                                    const name = typeof dest === "string" ? dest : dest?.name || dest?.title || "";
                                                    if (!name) return null;
                                                    return (
                                                        <span
                                                            key={i}
                                                            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                                                        >
                                                            <MapPin className="h-3 w-3 text-[#0EA5E9]" />
                                                            {name}
                                                        </span>
                                                    );
                                                })}
                                            </div>

                                            {/* Title */}
                                            <h3 className="mt-4 text-2xl font-extrabold text-slate-900 group-hover:text-[#16A34A] transition-colors duration-300 leading-snug">
                                                {pkg.title}
                                            </h3>

                                            {/* Highlights List */}
                                            <ul className="mt-5 space-y-2 text-sm text-slate-600 font-medium">
                                                {pkg.highlights.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-2">
                                                        <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                                                        <span className="truncate">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Card Footer */}
                                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">From</span>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl font-black text-slate-900">${pkg.price}</span>
                                                    <span className="text-xs font-medium text-slate-500">/ person</span>
                                                </div>
                                            </div>

                                            <Link
                                                href={`/tours/${pkg.id}`}
                                                className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#16A34A]/20 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-lg active:scale-95"
                                            >
                                                <span>View Details</span>
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Bottom Centered "View All Tour Packages" CTA Button */}
                <ScrollReveal direction="up" delay={200}>
                    <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center">
                        <Link
                            href="/tours"
                            className="group relative inline-flex h-16 items-center justify-center gap-3.5 rounded-full bg-[#16A34A] px-10 text-lg sm:text-xl font-bold text-white shadow-xl shadow-[#16A34A]/30 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer"
                        >
                            <span>View All Tour Packages</span>
                            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                        </Link>
                        <p className="mt-4 text-sm font-semibold text-slate-500">
                            Over 50+ customizable Sri Lanka itineraries available
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

