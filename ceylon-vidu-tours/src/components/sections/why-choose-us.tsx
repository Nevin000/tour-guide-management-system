"use client";

import { useEffect, useRef, useState } from "react";
import {
    Award,
    Car,
    ShieldCheck,
    DollarSign,
    Headphones,
    Sparkles,
    CheckCircle2,
    Utensils,
} from "lucide-react";

const features = [
    {
        icon: Award,
        bgColor: "bg-[#16A34A]",
        glowColor: "hover:shadow-[0_30px_70px_rgba(22,163,74,0.3)]",
        accentBorder: "group-hover:border-[#16A34A]",
        iconGlow: "shadow-lg shadow-[#16A34A]/50",
        number: "01",
        title: "Local Expertise & Guides",
        description:
            "Discover Sri Lanka with certified local experts who understand secret waterfalls, ancient heritage, and hidden island gems.",
        tag: "Certified Experts",
    },
    {
        icon: ShieldCheck,
        bgColor: "bg-[#0EA5E9]",
        glowColor: "hover:shadow-[0_30px_70px_rgba(14,165,233,0.3)]",
        accentBorder: "group-hover:border-[#0EA5E9]",
        iconGlow: "shadow-lg shadow-[#0EA5E9]/50",
        number: "02",
        title: "Trusted & Reliable",
        description:
            "Professional coordination from inquiry to departure, keeping your journey organized, safe, and 100% stress-free.",
        tag: "Fully Insured",
    },
    {
        icon: Headphones,
        bgColor: "bg-[#F59E0B]",
        glowColor: "hover:shadow-[0_30px_70px_rgba(245,158,11,0.3)]",
        accentBorder: "group-hover:border-[#F59E0B]",
        iconGlow: "shadow-lg shadow-[#F59E0B]/50",
        number: "03",
        title: "24/7 Travel Support",
        description:
            "Our dedicated travel assistance team is available 24/7 on WhatsApp before, during, and throughout your trip.",
        tag: "Always Online",
    },
    {
        icon: DollarSign,
        bgColor: "bg-[#16A34A]",
        glowColor: "hover:shadow-[0_30px_70px_rgba(22,163,74,0.3)]",
        accentBorder: "group-hover:border-[#16A34A]",
        iconGlow: "shadow-lg shadow-[#16A34A]/50",
        number: "04",
        title: "Transparent Pricing",
        description:
            "All-inclusive transparent pricing with zero hidden fees or unexpected charges, ensuring budget peace of mind.",
        tag: "No Hidden Fees",
    },
    {
        icon: Car,
        bgColor: "bg-[#0EA5E9]",
        glowColor: "hover:shadow-[0_30px_70px_rgba(14,165,233,0.3)]",
        accentBorder: "group-hover:border-[#0EA5E9]",
        iconGlow: "shadow-lg shadow-[#0EA5E9]/50",
        number: "05",
        title: "Seamless Transport",
        description:
            "Travel in air-conditioned luxury sedans, SUVs, or executive vans with professional private chauffeurs.",
        tag: "Premium Fleet",
    },
    {
        icon: Utensils,
        bgColor: "bg-[#F59E0B]",
        glowColor: "hover:shadow-[0_30px_70px_rgba(245,158,11,0.3)]",
        accentBorder: "group-hover:border-[#F59E0B]",
        iconGlow: "shadow-lg shadow-[#F59E0B]/50",
        number: "06",
        title: "Authentic Culture",
        description:
            "Experience authentic Sri Lankan village meals, tea estate trails, and sacred temple rituals with local storytellers.",
        tag: "Local Traditions",
    },
];

// Helper Component for Smooth One-Time Scroll Reveal Animations
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
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.02,
                rootMargin: "60px 0px 0px 0px",
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
                return "opacity-0 translate-y-12 scale-[0.97]";
            case "down":
                return "opacity-0 -translate-y-12 scale-[0.97]";
            case "left":
                return "opacity-0 translate-x-12 scale-[0.97]";
            case "right":
                return "opacity-0 -translate-x-12 scale-[0.97]";
            case "none":
                return "opacity-0 scale-[0.95]";
            default:
                return "opacity-0 translate-y-12 scale-[0.97]";
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

export default function WhyChooseUs() {
    return (
        <section className="relative w-full overflow-hidden bg-slate-50/70 py-24 sm:py-32 lg:py-40 select-none">
            {/* Soft Ambient Perfect Circle Glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-60">
                <div className="absolute -top-32 right-0 h-140 w-140 rounded-full bg-[#16A34A]/15 blur-[140px]" />
                <div className="absolute top-1/3 -left-32 h-150 w-150 rounded-full bg-[#0EA5E9]/15 blur-[150px]" />
                <div className="absolute -bottom-32 right-1/4 h-160 w-160 rounded-full bg-[#38BDF8]/15 blur-[160px]" />
            </div>

            {/* Subtle Light Grid Pattern */}
            <div className="absolute inset-0 -z-5 opacity-[0.035] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

            {/* Top Divider Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#16A34A]/50 to-transparent" />

            {/* Main Container */}
            <div className="relative mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">

                {/* Section Header */}
                <div className="mx-auto max-w-5xl text-center">
                    <ScrollReveal direction="down" delay={0}>
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 px-7 py-3 text-xs sm:text-sm font-extrabold tracking-widest text-[#16A34A] uppercase shadow-xs transition-all duration-300 hover:scale-105 hover:bg-[#16A34A]/20">
                            <Sparkles className="h-4 w-4 text-[#16A34A] animate-pulse" />
                            <span>Why Choose Ceylon Vidu Tours</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={100}>
                        <h2 className="mt-8 text-5xl font-black tracking-[-0.03em] text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.06]">
                            Your Gateway to{" "}
                            <span className="bg-linear-to-r from-[#16A34A] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-xs">
                                Authentic Sri Lanka
                            </span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={180}>
                        <p className="mt-8 text-lg font-medium leading-relaxed text-slate-600 sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto">
                            We combine local island expertise with luxury standards to deliver seamless, authentic, and safe travel experiences across Ceylon.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Features Grid: EXTRA LARGE 100% CIRCLE CARDS & HIGH-CONTRAST BOLD ICONS */}
                <div className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-16 justify-items-center">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const cardDelay = (index % 3) * 120;

                        return (
                            <ScrollReveal key={index} direction="up" delay={cardDelay} className="w-full max-w-[460px] sm:max-w-[500px]">
                                <div
                                    className={`
                                        group relative flex flex-col items-center justify-between text-center
                                        w-full aspect-square rounded-full
                                        bg-white border-2 border-slate-200/90 p-10 sm:p-14 lg:p-16 
                                        shadow-2xl shadow-slate-200/80 
                                        transition-all duration-500 
                                        hover:-translate-y-4 hover:scale-105 
                                        ${feature.glowColor} ${feature.accentBorder}
                                    `}
                                >
                                    {/* Circle Inner Ambient Glow */}
                                    <div className="absolute inset-5 rounded-full bg-slate-50/80 -z-10 group-hover:bg-[#16A34A]/5 transition-colors duration-500" />

                                    {/* Number Circle Badge */}
                                    <div className="absolute -top-4 left-1/4 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white shadow-lg border-2 border-white group-hover:bg-[#16A34A] transition-colors duration-300 z-10">
                                        {feature.number}
                                    </div>

                                    {/* ULTRA-CLEAR HIGH-CONTRAST BOLD ICON CIRCLE */}
                                    <div className={`mt-2 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full ${feature.bgColor} text-white shadow-2xl ${feature.iconGlow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0 border-4 border-white`}>
                                        <Icon className="h-12 w-12 sm:h-14 sm:w-14 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]" strokeWidth={2.8} />
                                    </div>

                                    {/* Title & Description */}
                                    <div className="my-auto max-w-[320px]">
                                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#16A34A] transition-colors duration-300 leading-snug">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-3 text-sm sm:text-base font-semibold leading-relaxed text-slate-600 line-clamp-3">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Bottom Circle Tag Badge */}
                                    <div className="mb-2">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 transition-all duration-300 group-hover:border-[#16A34A]/40 group-hover:bg-[#16A34A]/10 group-hover:text-[#16A34A]">
                                            <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                                            {feature.tag}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}