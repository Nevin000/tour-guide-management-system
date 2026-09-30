"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Sparkles,
    MapPin,
    ArrowUpRight,
    ArrowRight,
    Compass,
} from "lucide-react";

interface Destination {
    id: string;
    name: string;
    region: string;
    tagline: string;
    toursCount: number;
    image: string;
    highlights: string[];
    featured?: boolean;
}

const destinations: Destination[] = [
    {
        id: "sigiriya",
        name: "Sigiriya Ancient Fortress",
        region: "Cultural Triangle",
        tagline: "The 8th Wonder of the Ancient World with Royal Rock Palace & Water Gardens",
        toursCount: 16,
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Lion Rock Citadel", "Mirror Wall Frescoes", "Royal Water Gardens"],
        featured: true,
    },
    {
        id: "ella",
        name: "Ella & Nine Arch Bridge",
        region: "Central Highlands",
        tagline: "Mist-covered mountain peaks, lush tea valleys, and iconic colonial railway bridges",
        toursCount: 14,
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Nine Arch Railway Bridge", "Little Adam's Peak Trek", "Scenic Blue Train Ride"],
        featured: true,
    },
    {
        id: "yala",
        name: "Yala National Park",
        region: "Southern Wildlife",
        tagline: "World's highest density of wild leopards, Asian elephants, and coastal jungle wilderness",
        toursCount: 12,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Wild Leopard Safaris", "Elephant Herd Sightings", "Sloth Bear & Lagoon Birds"],
    },
    {
        id: "galle",
        name: "Galle Dutch Fort",
        region: "Southern Coastline",
        tagline: "Living UNESCO heritage Dutch colonial fort with cobbled alleys and ocean ramparts",
        toursCount: 18,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        highlights: ["UNESCO Fortress Walls", "Boutique Ocean Cafes", "Lighthouse Sunset Views"],
    },
    {
        id: "kandy",
        name: "Kandy Sacred City",
        region: "Central Hills",
        tagline: "Cultural heart of Ceylon surrounded by tropical hills and sacred Buddhist heritage",
        toursCount: 15,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Temple of the Tooth Relic", "Royal Botanical Gardens", "Traditional Kandyan Dance"],
    },
    {
        id: "mirissa",
        name: "Mirissa & Weligama Bay",
        region: "South Coast Beaches",
        tagline: "Pristine palm-fringed golden beaches, blue whale ocean safaris, and surf breaks",
        toursCount: 11,
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Blue Whale Ocean Safaris", "Coconut Tree Hill Sunset", "Surfing & Beach Clubs"],
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

export default function PopularDestinations() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-24 sm:py-32 lg:py-40 select-none">
            {/* Soft Ambient Background Glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-50">
                <div className="absolute -top-32 left-1/4 h-125 w-125 rounded-full bg-[#16A34A]/10 blur-[140px]" />
                <div className="absolute bottom-10 right-10 h-137.5 w-137.5 rounded-full bg-[#0EA5E9]/10 blur-[150px]" />
            </div>

            {/* Subtle Light Grid Pattern */}
            <div className="absolute inset-0 -z-5 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

            {/* Top Divider Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#16A34A]/40 to-transparent" />

            <div className="relative mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">
                {/* Section Header */}
                <div className="mx-auto max-w-5xl text-center">
                    <ScrollReveal direction="down" delay={0}>
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 px-6 py-2.5 text-xs sm:text-sm font-extrabold tracking-widest text-[#16A34A] uppercase shadow-xs transition-all duration-300 hover:scale-105 hover:bg-[#16A34A]/20">
                            <Sparkles className="h-4 w-4 text-[#16A34A] animate-pulse" />
                            <span>Discover Sri Lanka</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={120}>
                        <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.06]">
                            Must-Visit Iconic{" "}
                            <span className="bg-linear-to-r from-[#16A34A] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-xs">
                                Destinations
                            </span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600 sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
                            From ancient UNESCO heritage citadels to wild safari jungles and pristine tropical beaches across Ceylon.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Destinations Cards Grid */}
                <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {destinations.map((dest, index) => {
                        const delay = (index % 3) * 120;
                        return (
                            <ScrollReveal key={dest.id} direction="up" delay={delay}>
                                <Link
                                    href={`/destinations/${dest.id}`}
                                    className="group relative block overflow-hidden rounded-3xl bg-slate-900 border border-slate-200/90 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#16A34A]/20 h-120 sm:h-130"
                                >
                                    {/* Cover Image */}
                                    <Image
                                        src={dest.image}
                                        alt={dest.name}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 transition-opacity duration-500 group-hover:opacity-95" />

                                    {/* Top Badges */}
                                    <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/75 border border-white/20 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                                            <MapPin className="h-3.5 w-3.5 text-[#38BDF8]" />
                                            {dest.region}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#16A34A]/90 border border-emerald-400/30 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur-md">
                                            <Compass className="h-3.5 w-3.5 text-white" />
                                            {dest.toursCount} Tours
                                        </span>
                                    </div>

                                    {/* Content Card at Bottom */}
                                    <div className="absolute bottom-0 inset-x-0 z-10 p-7 sm:p-9 flex flex-col justify-end text-white">
                                        {/* Highlight Tags */}
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            {dest.highlights.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-1 rounded-md backdrop-blur-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-snug">
                                            {dest.name}
                                        </h3>

                                        {/* Tagline */}
                                        <p className="mt-2 text-sm sm:text-base font-normal leading-relaxed text-slate-300 line-clamp-2">
                                            {dest.tagline}
                                        </p>

                                        {/* Action Button Link */}
                                        <div className="mt-6 flex items-center gap-2 text-sm sm:text-base font-bold text-[#38BDF8] group-hover:text-white transition-colors duration-300">
                                            <span>Explore Destination</span>
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#16A34A] transition-all duration-300 group-hover:rotate-45">
                                                <ArrowUpRight className="h-4.5 w-4.5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Bottom View All Destinations Button */}
                <ScrollReveal direction="up" delay={200}>
                    <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center">
                        <Link
                            href="/destinations"
                            className="group relative inline-flex h-16 items-center justify-center gap-3.5 rounded-full bg-[#16A34A] px-10 text-lg sm:text-xl font-bold text-white shadow-xl shadow-[#16A34A]/30 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer"
                        >
                            <span>View All Destinations</span>
                            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                        </Link>
                        <p className="mt-4 text-sm font-semibold text-slate-500">
                            Discover over 25+ iconic travel hubs across Sri Lanka
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
