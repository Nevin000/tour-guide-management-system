"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Sparkles,
    Star,
    Quote,
    CheckCircle2,
    Globe,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

interface Testimonial {
    id: string;
    name: string;
    country: string;
    flag: string;
    avatar: string;
    tourName: string;
    travelDate: string;
    rating: number;
    title: string;
    comment: string;
    verified: boolean;
}

const testimonialsData: Testimonial[] = [
    {
        id: "review-1",
        name: "Sarah & Marcus Vance",
        country: "United Kingdom",
        flag: "🇬🇧",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        tourName: "10-Day Island Explorer Tour",
        travelDate: "January 2026",
        rating: 5,
        title: "An Unforgettable Sri Lankan Adventure!",
        comment:
            "From the moment we landed in Colombo until our flight home, Ceylon Vidu Tours took care of every single detail. Our guide Nalin was incredibly knowledgeable about Sigiriya's history and took us to hidden local tea shops in Ella. 10/10 experience!",
        verified: true,
    },
    {
        id: "review-2",
        name: "Dr. Thomas Weber",
        country: "Germany",
        flag: "🇩🇪",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        tourName: "7-Day Cultural Heritage & Tea Country",
        travelDate: "December 2025",
        rating: 5,
        title: "Punctual, Professional & Highly Recommended",
        comment:
            "Outstanding service! As someone who values clear communication and safety, Ceylon Vidu Tours exceeded expectations. The private air-conditioned vehicle was immaculate, and the scenic train ride to Ella was seamlessly booked for us.",
        verified: true,
    },
    {
        id: "review-3",
        name: "Elena & Dimitri Rostova",
        country: "Australia",
        flag: "🇦🇺",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
        tourName: "8-Day Coastal & Wildlife Safari",
        travelDate: "February 2026",
        rating: 5,
        title: "Leopards in Yala & Sunset in Galle Fort!",
        comment:
            "We spotted two leopards on our Yala jeep safari thanks to our expert tracker! The coastal hotels were breathtaking. Having a local team available 24/7 on WhatsApp gave us complete peace of mind throughout our vacation.",
        verified: true,
    },
    {
        id: "review-4",
        name: "Jean-Luc & Chloe Dupont",
        country: "France",
        flag: "🇫🇷",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        tourName: "Highland Tea Trails & Scenic Train",
        travelDate: "November 2025",
        rating: 5,
        title: "Magical Memories in Ceylon",
        comment:
            "The personalized touch made all the difference. We loved drinking fresh Ceylon tea at private estates and walking around Nine Arch Bridge early morning before crowds arrived. Merci to Ceylon Vidu Tours!",
        verified: true,
    },
    {
        id: "review-5",
        name: "Kenji & Yumi Takahashi",
        country: "Japan",
        flag: "🇯🇵",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
        tourName: "Royal Heritage & Botanical Discovery",
        travelDate: "January 2026",
        rating: 5,
        title: "Warm Hospitality & Authentic Sri Lankan Food",
        comment:
            "The warmth of Sri Lankan people is genuine! Our guide arranged authentic home-cooked meals in Kandy and explained Buddhist traditions with deep respect and insight. Beautiful country and wonderful agency.",
        verified: true,
    },
    {
        id: "review-6",
        name: "David & Jessica Miller",
        country: "United States",
        flag: "🇺🇸",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        tourName: "Grand Ceylon Luxury Expedition",
        travelDate: "February 2026",
        rating: 5,
        title: "Luxury Beyond Expectations!",
        comment:
            "From boutique heritage hotels to private helicopter transfer options, Ceylon Vidu Tours curated an itinerary that rivaled 5-star trips anywhere in the world. Truly a memory of a lifetime for our 10th anniversary!",
        verified: true,
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

export default function Testimonials() {
    return (
        <section className="relative w-full overflow-hidden bg-slate-100 bg-[url('/tea_estate_bg.png')] bg-cover bg-center py-24 sm:py-32 lg:py-40 select-none">
            {/* White Soft Overlay for High Contrast */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1.5px] pointer-events-none -z-10" />
            {/* Soft Ambient Background Glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-60">
                <div className="absolute -top-32 right-1/4 h-125 w-125 rounded-full bg-[#16A34A]/12 blur-[140px]" />
                <div className="absolute bottom-10 left-1/4 h-137.5 w-137.5 rounded-full bg-[#0EA5E9]/12 blur-[150px]" />
            </div>

            {/* Subtle Light Grid Pattern */}
            <div className="absolute inset-0 -z-5 opacity-[0.035] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

            {/* Top Divider Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#16A34A]/40 to-transparent" />

            <div className="relative mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">
                {/* Header */}
                <div className="mx-auto max-w-5xl text-center">
                    <ScrollReveal direction="down" delay={0}>
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 px-6 py-2.5 text-xs sm:text-sm font-extrabold tracking-widest text-[#16A34A] uppercase shadow-xs transition-all duration-300 hover:scale-105 hover:bg-[#16A34A]/20">
                            <Sparkles className="h-4 w-4 text-[#16A34A] animate-pulse" />
                            <span>Verified Traveler Stories</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={120}>
                        <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.06]">
                            Loved by Travelers{" "}
                            <span className="bg-linear-to-r from-[#16A34A] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-xs">
                                Worldwide
                            </span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600 sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
                            Read genuine experiences shared by travelers who explored Sri Lanka with our local guide team.
                        </p>
                    </ScrollReveal>

                    {/* Trust Rating Bar */}
                    <ScrollReveal direction="up" delay={260}>
                        <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-3xl border border-slate-200 bg-white px-8 py-4 shadow-lg shadow-slate-200/50 backdrop-blur-md">
                            <div className="flex items-center gap-2">
                                <div className="flex text-[#FACC15]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-[#FACC15] text-[#FACC15]" />
                                    ))}
                                </div>
                                <span className="text-lg font-black text-slate-900">4.95 / 5.0</span>
                            </div>

                            <div className="hidden sm:block h-6 w-px bg-slate-200" />

                            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-700">
                                <ShieldCheck className="h-5 w-5 text-[#16A34A]" />
                                <span>1,200+ Verified Reviews</span>
                            </div>

                            <div className="hidden sm:block h-6 w-px bg-slate-200" />

                            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-700">
                                <Globe className="h-5 w-5 text-[#0EA5E9]" />
                                <span>80+ Countries Served</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {testimonialsData.map((review, index) => {
                        const delay = (index % 3) * 120;
                        return (
                            <ScrollReveal key={review.id} direction="up" delay={delay}>
                                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xl shadow-slate-200/60 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#16A34A]/15 hover:border-[#16A34A]/50 h-full min-h-105">
                                    {/* Quote Icon Backdrop */}
                                    <Quote className="absolute top-6 right-6 h-16 w-16 text-slate-100 pointer-events-none group-hover:text-[#16A34A]/10 transition-colors duration-500" />

                                    <div>
                                        {/* User Header Info */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#16A34A] shadow-md">
                                                <Image
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="64px"
                                                />
                                            </div>

                                            <div>
                                                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                                                    {review.name}
                                                </h3>
                                                <div className="flex items-center gap-1.5 mt-0.5 text-xs sm:text-sm font-semibold text-slate-500">
                                                    <span>{review.flag}</span>
                                                    <span>{review.country}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="flex items-center gap-1 mt-5">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="h-4.5 w-4.5 fill-[#FACC15] text-[#FACC15]" />
                                            ))}
                                        </div>

                                        {/* Review Title */}
                                        <h4 className="mt-3 text-xl font-extrabold text-slate-900 group-hover:text-[#16A34A] transition-colors leading-snug">
                                            &ldquo;{review.title}&rdquo;
                                        </h4>

                                        {/* Comment */}
                                        <p className="mt-3 text-base font-normal leading-relaxed text-slate-600">
                                            {review.comment}
                                        </p>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" />
                                            {review.tourName}
                                        </span>

                                        <span className="text-xs font-medium text-slate-400">
                                            {review.travelDate}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Bottom View All Reviews Button */}
                <ScrollReveal direction="up" delay={200}>
                    <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center">
                        <Link
                            href="/reviews"
                            className="group relative inline-flex h-16 items-center justify-center gap-3.5 rounded-full bg-[#16A34A] px-10 text-lg sm:text-xl font-bold text-white shadow-xl shadow-[#16A34A]/30 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer"
                        >
                            <span>View All Traveler Reviews</span>
                            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                        </Link>
                        <p className="mt-4 text-sm font-semibold text-slate-500">
                            Rated 4.95 / 5 stars across 1,200+ verified Tripadvisor & Google reviews
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
