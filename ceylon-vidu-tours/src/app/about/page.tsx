"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Sparkles,
    ShieldCheck,
    Heart,
    Globe,
    Compass,
    Users,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    CarFront,
    MapPin,
    Calendar,
    Star,
    CalendarCheck,
    Headphones,
    Map,
    BadgeDollarSign,
    Smile,
    Leaf,
    HeartHandshake,
    Landmark,
    BadgeCheck,
} from "lucide-react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold: 0.05, rootMargin: "40px 0px 0px 0px" }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const transform = isVisible
        ? "opacity-100 translate-x-0 translate-y-0 scale-100"
        : direction === "left"
            ? "opacity-0 translate-x-12 scale-[0.98]"
            : direction === "right"
                ? "opacity-0 -translate-x-12 scale-[0.98]"
                : direction === "down"
                    ? "opacity-0 -translate-y-10 scale-[0.98]"
                    : direction === "none"
                        ? "opacity-0 scale-[0.96]"
                        : "opacity-0 translate-y-10 scale-[0.98]";

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out will-change-transform ${transform} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

// Data Arrays
const whyUs = [
    {
        icon: ShieldCheck,
        title: "Safe & Trusted Travel",
        description:
            "We focus on reliable travel planning, trusted local support, clear information, and a comfortable journey from start to finish.",
    },
    {
        icon: Heart,
        title: "Authentic Sri Lankan Experiences",
        description:
            "Discover more than famous attractions through local culture, food, traditions, nature, heritage, and meaningful experiences.",
    },
    {
        icon: Compass,
        title: "Personalized Journeys",
        description:
            "Every traveler is different. Our tours can be planned around your interests, pace, budget, preferred destinations, and travel style.",
    },
    {
        icon: Globe,
        title: "Responsible Tourism",
        description:
            "We believe tourism should respect Sri Lankan communities, culture, wildlife, natural environments, and future generations.",
    },
];

const services = [
    {
        icon: Calendar,
        title: "Tour Packages",
        description: "Explore carefully planned cultural, wildlife, beach, nature, and adventure journeys.",
    },
    {
        icon: Users,
        title: "Local Tour Guides",
        description: "Connect with knowledgeable local guides who can make your Sri Lankan journey more meaningful.",
    },
    {
        icon: MapPin,
        title: "Sri Lankan Destinations",
        description: "Discover iconic landmarks, hidden gems, beautiful beaches, hill country, wildlife, and heritage sites.",
    },
    {
        icon: Compass,
        title: "Custom Travel Planning",
        description: "Build a flexible itinerary that matches your interests, schedule, and preferred travel experience.",
    },
];

const destinations = [
    { name: "Sigiriya & Cultural Triangle", image: "/Sigiriya.png" },
    { name: "Ella & Hill Country", image: "/Ella.png" },
    { name: "Yala & Wildlife", image: "/Yala.png" },
    { name: "Southern Beaches", image: "/Galle.png" },
];

const teamMembers = [
    {
        name: "Kavindu Perera",
        role: "Founder & Lead Travel Guide",
        experience: "12+ Years Experience",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    },
    {
        name: "Nalin Fernando",
        role: "Heritage & Culture Expert",
        experience: "10+ Years Experience",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
    {
        name: "Dilshan Wickramasinghe",
        role: "Wildlife & Nature Specialist",
        experience: "8+ Years Experience",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900">
            <Navbar />

            {/* 01. HERO */}
            <section className="relative flex min-h-[560px] items-center overflow-hidden bg-slate-950 py-32 text-white sm:min-h-[650px] lg:min-h-[700px]">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-35"
                    style={{ backgroundImage: "url('/about_hero_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/65 to-slate-950" />
                <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#16A34A]/20 blur-[130px]" />
                <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#0EA5E9]/20 blur-[130px]" />

                <div className="relative mx-auto w-full max-w-[2100px] px-6 text-center sm:px-10 lg:px-16 xl:px-20">
                    <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="h-3.5 w-3.5 text-[#16A34A]" />
                        <span className="text-[#16A34A]">About Us</span>
                    </div>

                    <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-8xl">
                        Discover the Story Behind{" "}
                        <span className="bg-gradient-to-r from-[#16A34A] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
                            Ceylon Vidu Tours
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-relaxed text-slate-300 sm:text-xl lg:text-2xl">
                        We make discovering Sri Lanka simpler, more authentic, and more memorable by connecting travelers with amazing destinations, local expertise, and meaningful experiences.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/tours"
                            className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-8 py-4 text-base font-bold text-white shadow-xl shadow-green-900/30 transition hover:-translate-y-1 hover:bg-[#15803D]"
                        >
                            Explore Our Tours <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link
                            href="/guides"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                        >
                            Meet Our Guides
                        </Link>
                    </div>
                </div>
            </section>

            {/* 01.5 STATS SECTION (SOCIAL PROOF) */}
            <section className="bg-[#16A34A] py-12 text-white">
                <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">
                    <div className="grid grid-cols-2 gap-8 divide-x divide-white/20 text-center md:grid-cols-4">
                        <ScrollReveal direction="up" delay={0}>
                            <p className="text-4xl font-black sm:text-5xl">12+</p>
                            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-emerald-100 sm:text-sm">Years Experience</p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={100}>
                            <p className="text-4xl font-black sm:text-5xl">500+</p>
                            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-emerald-100 sm:text-sm">Happy Travelers</p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <p className="text-4xl font-black sm:text-5xl">100%</p>
                            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-emerald-100 sm:text-sm">Local Guides</p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={300}>
                            <p className="text-4xl font-black sm:text-5xl">24/7</p>
                            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-emerald-100 sm:text-sm">On-Trip Support</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 02. WHO WE ARE */}
            <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">
                    <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28">

                        {/* Editorial Image Composition */}
                        <ScrollReveal direction="left">
                            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[38px] bg-slate-100 shadow-2xl">
                                    <Image
                                        src="/Sigiriya.png"
                                        alt="Discover Sri Lanka with Ceylon Vidu Tours"
                                        fill
                                        priority
                                        className="object-cover transition duration-700 hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 48vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                                    {/* Image Caption */}
                                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                                            Discover Ceylon
                                        </p>
                                        <p className="mt-2 max-w-md text-xl font-bold leading-snug text-white sm:text-2xl">
                                            Ancient heritage, wild nature and unforgettable island experiences.
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Experience Card */}
                                <div className="absolute -bottom-7 -right-4 w-[230px] rounded-3xl border border-white/80 bg-white p-5 shadow-2xl sm:-right-8 sm:w-[270px] sm:p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#16A34A]/10 text-[#16A34A]">
                                            <Compass className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black text-slate-900">01</p>
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                                Island to Explore
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Editorial Content */}
                        <ScrollReveal direction="right" delay={120}>
                            <div className="lg:pl-2">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#16A34A]" />
                                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#16A34A] sm:text-sm">
                                        Who We Are
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem]">
                                    We Help You Experience Sri Lanka, Not Just Visit It.
                                </h2>

                                <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-600 sm:text-xl sm:leading-9">
                                    Ceylon Vidu Tours is a Sri Lanka-focused travel platform created for travelers who want more than a standard holiday. We bring destinations, local expertise, tour experiences, and trusted guides together to make exploring the island easier.
                                </p>

                                {/* Added Origin Story Paragraph */}
                                <div className="mt-8 rounded-2xl bg-slate-50 p-6 border border-slate-100">
                                    <h3 className="text-lg font-black text-slate-900">Our Origin Story</h3>
                                    <p className="mt-2 text-base leading-7 text-slate-500">
                                        Founded by Kavindu Perera, a local travel expert with over 12 years of experience, Ceylon Vidu Tours was born out of a profound passion to share the real Sri Lanka. Recognizing that travelers were often rushed through generic tourist traps, Kavindu set out to build a platform that prioritized authentic connections, secret local spots, and sustainable island travel.
                                    </p>
                                </div>

                                {/* Real-world style highlights */}
                                <div className="mt-9 grid max-w-2xl grid-cols-1 border-y border-slate-200 sm:grid-cols-3">
                                    <div className="py-5 sm:pr-6">
                                        <p className="text-2xl font-black text-slate-900 sm:text-3xl">Local</p>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Island Knowledge
                                        </p>
                                    </div>
                                    <div className="border-slate-200 py-5 sm:border-x sm:px-6">
                                        <p className="text-2xl font-black text-slate-900 sm:text-3xl">Personal</p>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Tailored Experiences
                                        </p>
                                    </div>
                                    <div className="py-5 sm:pl-6">
                                        <p className="text-2xl font-black text-slate-900 sm:text-3xl">Authentic</p>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Sri Lankan Moments
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <Link
                                        href="/tours"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16A34A] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-[#15803D]"
                                    >
                                        Explore Our Experiences
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>

                                    <Link
                                        href="/destinations"
                                        className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-700 transition hover:text-[#16A34A]"
                                    >
                                        Discover Destinations
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 03. OUR PURPOSE */}
            <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32 lg:py-36">
                {/* Background decoration */}
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#16A34A]/15 blur-[120px]" />
                <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#0EA5E9]/15 blur-[120px]" />

                <div className="relative mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-20">

                    {/* Section Heading */}
                    <ScrollReveal direction="up">
                        <div className="mx-auto max-w-4xl text-center">

                            <div className="flex items-center justify-center gap-3">
                                <span className="h-px w-10 bg-[#16A34A]" />

                                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#38BDF8] sm:text-sm">
                                    Our Purpose
                                </span>

                                <span className="h-px w-10 bg-[#16A34A]" />
                            </div>

                            <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                                Travel With Purpose.
                                <span className="block text-[#16A34A]">
                                    Experience With Meaning.
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                                We believe travelling is more than visiting a destination.
                                It is about discovering new perspectives, connecting with
                                people, experiencing local culture, and creating memories
                                that stay with you long after the journey ends.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Mission + Vision */}
                    <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">

                        {/* Mission */}
                        <ScrollReveal direction="left">
                            <div className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#16A34A]/40 hover:bg-white/[0.07] sm:p-10 lg:p-12">

                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#16A34A]/10 blur-3xl transition duration-500 group-hover:bg-[#16A34A]/20" />

                                <div className="relative">
                                    <div className="flex items-center justify-between">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16A34A]/15 text-[#22C55E]">
                                            <Compass className="h-7 w-7" />
                                        </div>

                                        <span className="text-5xl font-black text-white/5">
                                            01
                                        </span>
                                    </div>

                                    <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#22C55E]">
                                        Our Mission
                                    </p>

                                    <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                                        Making Every Journey Easier & More Meaningful
                                    </h3>

                                    <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                                        Our mission is to make exploring Sri Lanka simple,
                                        authentic, safe, and memorable by connecting
                                        travelers with thoughtfully designed experiences,
                                        trusted local guides, and the places that make
                                        Sri Lanka truly special.
                                    </p>

                                    <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                                        Traveler-focused experiences
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Vision */}
                        <ScrollReveal direction="right" delay={120}>
                            <div className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0EA5E9]/40 hover:bg-white/[0.07] sm:p-10 lg:p-12">

                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#0EA5E9]/10 blur-3xl transition duration-500 group-hover:bg-[#0EA5E9]/20" />

                                <div className="relative">
                                    <div className="flex items-center justify-between">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0EA5E9]/15 text-[#38BDF8]">
                                            <Globe className="h-7 w-7" />
                                        </div>

                                        <span className="text-5xl font-black text-white/5">
                                            02
                                        </span>
                                    </div>

                                    <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
                                        Our Vision
                                    </p>

                                    <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                                        Becoming a Trusted Way to Discover Sri Lanka
                                    </h3>

                                    <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                                        Our vision is to become a trusted digital travel
                                        platform for discovering authentic Sri Lankan
                                        destinations and experiences while creating
                                        meaningful value for travelers, local guides,
                                        businesses, and communities.
                                    </p>

                                    <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 text-[#38BDF8]" />
                                        Connecting travelers with Sri Lanka
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>

                    {/* Bottom Statement */}
                    <ScrollReveal direction="up" delay={180}>
                        <div className="mx-auto mt-12 max-w-4xl text-center">
                            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
                                <Heart className="h-4 w-4 text-[#16A34A]" />

                                <span className="text-sm font-semibold text-slate-300">
                                    Creating journeys worth remembering
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </section>

            {/* 04. WHY CHOOSE US */}
            <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">

                    {/* Heading */}
                    <ScrollReveal direction="up">
                        <div className="mx-auto max-w-4xl text-center">

                            <div className="flex items-center justify-center gap-3">
                                <span className="h-px w-10 bg-[#16A34A]" />

                                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#16A34A] sm:text-sm">
                                    Why Choose Us
                                </span>

                                <span className="h-px w-10 bg-[#16A34A]" />
                            </div>

                            <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-6xl">
                                More Than a Tour.
                                <span className="block text-[#16A34A]">
                                    A Better Way to Travel.
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                                From the moment you start planning to the moment you
                                return home, we focus on making your Sri Lankan journey
                                easier, more personal, and more memorable.
                            </p>

                        </div>
                    </ScrollReveal>


                    {/* Main Benefits */}
                    <div className="mt-16 grid gap-6 lg:grid-cols-12">

                        {/* Featured Benefit */}
                        <ScrollReveal
                            direction="left"
                            className="lg:col-span-5"
                        >
                            <div className="group relative h-full min-h-[520px] overflow-hidden rounded-[36px] bg-slate-900 p-8 text-white shadow-xl sm:p-10">

                                {/* Decorative glow */}
                                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#16A34A]/20 blur-[90px]" />

                                <div className="relative flex h-full flex-col">

                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16A34A] shadow-lg shadow-green-900/30">
                                            <Compass className="h-7 w-7 text-white" />
                                        </div>

                                        <span className="text-7xl font-black text-white/5">
                                            01
                                        </span>
                                    </div>

                                    <div className="mt-auto pt-20">

                                        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-400">
                                            The Ceylon Vidu Difference
                                        </p>

                                        <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                                            Local Knowledge.
                                            <span className="block text-emerald-400">
                                                Real Experiences.
                                            </span>
                                        </h3>

                                        <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                                            Sri Lanka is best experienced through people
                                            who know the island. We connect travelers
                                            with local knowledge, authentic experiences,
                                            and carefully planned journeys.
                                        </p>

                                        <Link
                                            href="/tours"
                                            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-emerald-400"
                                        >
                                            Explore Our Tours
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>


                        {/* Benefit Grid */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">

                            {/* 02 */}
                            <ScrollReveal direction="right" delay={80}>
                                <div className="group h-full rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#16A34A]/30 hover:shadow-xl sm:p-8">

                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16A34A]/10 text-[#16A34A]">
                                            <ShieldCheck className="h-6 w-6" />
                                        </div>

                                        <span className="text-4xl font-black text-slate-100">
                                            02
                                        </span>
                                    </div>

                                    <h3 className="mt-7 text-xl font-black text-slate-900 sm:text-2xl">
                                        Safe & Trusted Travel
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                                        Travel with confidence through reliable
                                        information, trusted local support, and
                                        carefully organized experiences.
                                    </p>

                                </div>
                            </ScrollReveal>


                            {/* 03 */}
                            <ScrollReveal direction="right" delay={160}>
                                <div className="group h-full rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0EA5E9]/30 hover:shadow-xl sm:p-8">

                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0EA5E9]/10 text-[#0EA5E9]">
                                            <Heart className="h-6 w-6" />
                                        </div>

                                        <span className="text-4xl font-black text-slate-100">
                                            03
                                        </span>
                                    </div>

                                    <h3 className="mt-7 text-xl font-black text-slate-900 sm:text-2xl">
                                        Authentic Experiences
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                                        Go beyond ordinary sightseeing and experience
                                        Sri Lankan culture, food, traditions, nature,
                                        and local life.
                                    </p>

                                </div>
                            </ScrollReveal>


                            {/* 04 */}
                            <ScrollReveal direction="right" delay={240}>
                                <div className="group h-full rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/30 hover:shadow-xl sm:p-8">

                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B]">
                                            <Sparkles className="h-6 w-6" />
                                        </div>

                                        <span className="text-4xl font-black text-slate-100">
                                            04
                                        </span>
                                    </div>

                                    <h3 className="mt-7 text-xl font-black text-slate-900 sm:text-2xl">
                                        Personalized Journeys
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                                        Plan experiences around your interests, travel
                                        style, schedule, preferred destinations, and
                                        pace.
                                    </p>

                                </div>
                            </ScrollReveal>


                            {/* 05 */}
                            <ScrollReveal direction="right" delay={320}>
                                <div className="group h-full rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:shadow-xl sm:p-8">

                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                                            <Globe className="h-6 w-6" />
                                        </div>

                                        <span className="text-4xl font-black text-slate-100">
                                            05
                                        </span>
                                    </div>

                                    <h3 className="mt-7 text-xl font-black text-slate-900 sm:text-2xl">
                                        All-in-One Travel Service
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                                        Discover destinations, explore tour packages,
                                        find local guides, and plan your journey from
                                        one convenient platform.
                                    </p>

                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </div>
            </section>

            {/* 05. OUR SERVICES */}
            <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">

                    <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">

                        {/* LEFT SIDE */}
                        <div>

                            {/* Label */}
                            <div className="flex items-center gap-3">

                                <span className="h-2.5 w-2.5 rounded-full bg-[#16A34A]" />

                                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#16A34A] sm:text-sm">
                                    Our Services
                                </span>

                                <span className="h-px w-12 bg-[#16A34A]/40" />

                            </div>


                            {/* Heading */}
                            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#1E293B] sm:text-5xl lg:text-6xl">
                                Everything You Need

                                <span className="block text-[#16A34A]">
                                    for an Unforgettable Journey
                                </span>
                            </h2>


                            {/* Description */}
                            <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
                                From choosing the right tour to reaching your destination
                                safely, we provide reliable services designed to make your
                                Sri Lankan journey comfortable, simple, and memorable.
                            </p>


                            {/* SERVICES */}
                            <div className="mt-10 space-y-3">

                                {/* 01 */}
                                <div className="group flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:px-5 sm:py-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16A34A] text-sm font-black text-white sm:h-12 sm:w-12">
                                        01
                                    </div>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                                        <Map className="h-6 w-6" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-black text-[#1E293B] sm:text-lg">
                                            Flexible Tour Packages
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                                            Choose packages that suit your interests, budget, and travel style.
                                        </p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#16A34A]" />
                                </div>


                                {/* 02 */}
                                <div className="group flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:px-5 sm:py-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16A34A] text-sm font-black text-white sm:h-12 sm:w-12">
                                        02
                                    </div>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9]">
                                        <CarFront className="h-6 w-6" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-black text-[#1E293B] sm:text-lg">
                                            Airport &amp; Travel Transfers
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                                            Comfortable and reliable transfers throughout your journey.
                                        </p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#0EA5E9]" />
                                </div>


                                {/* 03 */}
                                <div className="group flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:px-5 sm:py-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16A34A] text-sm font-black text-white sm:h-12 sm:w-12">
                                        03
                                    </div>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-black text-[#1E293B] sm:text-lg">
                                            Safety First
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                                            Your safety remains our highest priority.
                                        </p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#16A34A]" />
                                </div>


                                {/* 04 */}
                                <div className="group flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:px-5 sm:py-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16A34A] text-sm font-black text-white sm:h-12 sm:w-12">
                                        04
                                    </div>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/10 text-[#F59E0B]">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-black text-[#1E293B] sm:text-lg">
                                            Friendly Drivers &amp; Local Guides
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                                            Experienced, friendly people who care about your travel experience.
                                        </p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#F59E0B]" />
                                </div>


                                {/* 05 */}
                                <div className="group flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:px-5 sm:py-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16A34A] text-sm font-black text-white sm:h-12 sm:w-12">
                                        05
                                    </div>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9]">
                                        <Headphones className="h-6 w-6" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-black text-[#1E293B] sm:text-lg">
                                            24/7 Travel Support
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                                            Stay connected with us whenever you need help.
                                        </p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#0EA5E9]" />
                                </div>


                                {/* 06 */}
                                <div className="group flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:px-5 sm:py-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16A34A] text-sm font-black text-white sm:h-12 sm:w-12">
                                        06
                                    </div>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                                        <CalendarCheck className="h-6 w-6" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-black text-[#1E293B] sm:text-lg">
                                            Easy &amp; Convenient Booking
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                                            Make your booking quickly through a simple process.
                                        </p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#16A34A]" />
                                </div>

                            </div>

                        </div>


                        {/* RIGHT IMAGE */}
                        <ScrollReveal direction="right" delay={100}>

                            <div className="relative h-[620px] overflow-hidden rounded-[36px] bg-slate-900 lg:h-full lg:min-h-[760px]">

                                <Image
                                    src="/tea-plantation-tour-in-ella-sri-lanka.png"
                                    alt="Tourists experiencing Sri Lanka"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                                {/* Top Badge */}
                                <div className="absolute left-7 top-7 sm:left-9 sm:top-9">
                                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                                            Travel With Confidence
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Content */}
                                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                                    <div className="rounded-[28px] bg-[#16A34A]/95 p-6 text-white backdrop-blur-md sm:p-7">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#16A34A]">
                                                <BadgeDollarSign className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black sm:text-2xl">
                                                    Great Experiences. Fair Prices.
                                                </h3>
                                                <p className="mt-2 text-sm leading-6 text-emerald-50">
                                                    Quality travel services at fair prices, giving you genuine value throughout your journey.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/20 pt-5 sm:grid-cols-4">
                                            <div className="flex items-center gap-2 text-xs font-bold">
                                                <BadgeDollarSign className="h-4 w-4" />
                                                Best Value
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-bold">
                                                <ShieldCheck className="h-4 w-4" />
                                                Trusted
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-bold">
                                                <Smile className="h-4 w-4" />
                                                Happy Travelers
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-bold">
                                                <Heart className="h-4 w-4" />
                                                Memorable
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>

            {/* =========================================================
    06. OUR COMMITMENT — RESPONSIBLE TRAVEL
========================================================= */}
            <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">

                {/* =====================================================
        BACKGROUND AMBIENT GLOWS
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            left-1/4
            top-0
            h-[420px]
            w-[700px]
            -translate-y-1/2
            rounded-full
            bg-[#16A34A]/10
            blur-[120px]
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            h-[500px]
            w-[500px]
            translate-y-1/3
            rounded-full
            bg-[#0EA5E9]/10
            blur-[140px]
        "
                />


                {/* =====================================================
        SAME CONTAINER AS OTHER SECTIONS
    ====================================================== */}
                <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10 xl:px-12">


                    {/* =================================================
            SECTION HEADER
        ================================================= */}
                    <ScrollReveal direction="up">

                        <div className="mx-auto max-w-[820px] text-center">

                            {/* Label */}
                            <div className="flex items-center justify-center gap-3">

                                <span className="h-px w-10 bg-[#16A34A]" />

                                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#16A34A] sm:text-sm">
                                    Our Commitment
                                </span>

                                <span className="h-px w-10 bg-[#16A34A]" />

                            </div>


                            {/* Heading */}
                            <h2
                                className="
                        mt-5
                        text-4xl
                        font-black
                        leading-[1.05]
                        tracking-[-0.04em]
                        text-white
                        sm:text-5xl
                        lg:text-[56px]
                    "
                            >
                                Travel That Leaves a

                                <span className="block bg-gradient-to-r from-[#16A34A] to-[#0EA5E9] bg-clip-text text-transparent">
                                    Positive Footprint.
                                </span>

                            </h2>


                            {/* Description */}
                            <p
                                className="
                        mx-auto
                        mt-5
                        max-w-[700px]
                        text-sm
                        leading-7
                        text-slate-400
                        sm:text-base
                        sm:leading-8
                    "
                            >
                                We believe tourism should protect nature, celebrate
                                culture, and uplift the local communities that welcome us.
                                Here is how we travel responsibly.
                            </p>

                        </div>

                    </ScrollReveal>


                    {/* =================================================
            RESPONSIBLE TRAVEL CARDS
        ================================================= */}
                    <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:gap-5">


                        {/* =================================================
                01 — ECO-CONSCIOUS EXPLORATION
            ================================================= */}
                        <ScrollReveal direction="up" delay={100}>

                            <div
                                className="
                        group
                        relative
                        h-full
                        min-h-[330px]
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/10
                        bg-slate-900
                        p-7
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-[#16A34A]/40
                        sm:p-8
                    "
                            >

                                {/* Background Image */}
                                <div
                                    className="
                            absolute
                            inset-0
                            bg-cover
                            bg-center
                            opacity-[0.16]
                            transition-transform
                            duration-700
                            group-hover:scale-105
                        "
                                    style={{
                                        backgroundImage:
                                            "url('/tea-plantation-tour-in-ella-sri-lanka.png')",
                                    }}
                                />


                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/40" />


                                {/* Content */}
                                <div className="relative flex h-full flex-col">

                                    {/* Icon */}
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16A34A]/15 text-[#16A34A] backdrop-blur-md">
                                        <Leaf className="h-7 w-7" />
                                    </div>


                                    <div className="mt-auto pt-10">

                                        <div className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#16A34A]">
                                            01
                                        </div>

                                        <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                                            Eco-Conscious Exploration
                                        </h3>

                                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                                            Sri Lanka's biodiversity is our greatest
                                            treasure. We promote minimal-waste travel,
                                            respect wildlife boundaries, and support
                                            eco-friendly accommodation partners.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </ScrollReveal>


                        {/* =================================================
                02 — COMMUNITY FIRST
            ================================================= */}
                        <ScrollReveal direction="up" delay={180}>

                            <div
                                className="
                        group
                        relative
                        h-full
                        min-h-[330px]
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/10
                        bg-slate-900
                        p-7
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-[#F59E0B]/40
                        sm:p-8
                    "
                            >

                                {/* Ambient Glow */}
                                <div
                                    className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-24
                            h-72
                            w-72
                            rounded-full
                            bg-[#F59E0B]/10
                            blur-[90px]
                            transition-all
                            duration-500
                            group-hover:bg-[#F59E0B]/20
                        "
                                />


                                <div className="relative flex h-full flex-col">

                                    {/* Icon */}
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F59E0B]/15 text-[#F59E0B]">
                                        <HeartHandshake className="h-7 w-7" />
                                    </div>


                                    <div className="mt-auto pt-10">

                                        <div className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                                            02
                                        </div>

                                        <h3 className="text-2xl font-black tracking-tight text-white">
                                            Community First
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                                            We help ensure your travel budget benefits
                                            local families, independent guides and
                                            drivers, village-run eateries, and homestays.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </ScrollReveal>


                        {/* =================================================
                03 — PRESERVING HERITAGE
            ================================================= */}
                        <ScrollReveal direction="up" delay={260}>

                            <div
                                className="
                        group
                        relative
                        h-full
                        min-h-[330px]
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/10
                        bg-slate-900
                        p-7
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-[#0EA5E9]/40
                        sm:p-8
                    "
                            >

                                {/* Ambient Glow */}
                                <div
                                    className="
                            pointer-events-none
                            absolute
                            -bottom-24
                            -left-24
                            h-72
                            w-72
                            rounded-full
                            bg-[#0EA5E9]/10
                            blur-[90px]
                            transition-all
                            duration-500
                            group-hover:bg-[#0EA5E9]/20
                        "
                                />


                                <div className="relative flex h-full flex-col">

                                    {/* Icon */}
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0EA5E9]/15 text-[#0EA5E9]">
                                        <Landmark className="h-7 w-7" />
                                    </div>


                                    <div className="mt-auto pt-10">

                                        <div className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#0EA5E9]">
                                            03
                                        </div>

                                        <h3 className="text-2xl font-black tracking-tight text-white">
                                            Preserving Heritage
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                                            We educate our guests on cultural etiquette
                                            and encourage respectful visits to ancient
                                            sites, sacred temples, and heritage locations.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </ScrollReveal>


                        {/* =================================================
                04 — THE TRAVELER PROMISE
            ================================================= */}
                        <ScrollReveal direction="up" delay={340}>

                            <div
                                className="
                        group
                        relative
                        h-full
                        min-h-[330px]
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-slate-900
                        to-slate-950
                        p-7
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-[#8B5CF6]/40
                        sm:p-8
                    "
                            >

                                {/* Purple Ambient Light */}
                                <div
                                    className="
                            pointer-events-none
                            absolute
                            right-0
                            top-0
                            h-full
                            w-2/3
                            bg-gradient-to-l
                            from-[#8B5CF6]/10
                            to-transparent
                        "
                                />


                                <div className="relative flex h-full flex-col">

                                    {/* Icon */}
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B5CF6]/15 text-[#A78BFA]">
                                        <ShieldCheck className="h-7 w-7" />
                                    </div>


                                    <div className="mt-auto pt-10">

                                        <div className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#A78BFA]">
                                            04
                                        </div>

                                        <h3 className="text-2xl font-black tracking-tight text-white">
                                            The Traveler Promise
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                                            Zero hidden fees, no forced tourist-trap
                                            shopping stops, and complete transparency.
                                            We respect your time, budget, safety, and
                                            comfort throughout your journey.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </ScrollReveal>

                    </div>


                    {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}
                    <ScrollReveal direction="up" delay={420}>

                        <div className="mx-auto mt-8 max-w-3xl text-center sm:mt-10">

                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">

                                <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />

                                <span className="text-xs font-bold text-slate-300 sm:text-sm">
                                    Travel responsibly. Explore meaningfully.
                                </span>

                            </div>

                        </div>

                    </ScrollReveal>

                </div>

            </section>

            {/* 07. OUR GUIDES / TEAM */}
            <section className="bg-white py-20 sm:py-28 lg:py-36">
                <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">
                    <ScrollReveal direction="up">
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#16A34A]">
                                Local Experts
                            </span>
                            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                                Meet Our Guides
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                                Local knowledge can turn a good trip into an unforgettable one. Meet the people who help travelers experience Sri Lanka from a local perspective.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="mt-14 grid gap-7 md:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <ScrollReveal key={member.name} delay={index * 100}>
                                <div className="group overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                                        <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-bold text-emerald-400 backdrop-blur">
                                            {member.experience}
                                        </div>
                                    </div>
                                    <div className="p-7">
                                        <h3 className="text-2xl font-black text-slate-900">{member.name}</h3>
                                        <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-[#0EA5E9]">
                                            {member.role}
                                        </p>
                                        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500">
                                            <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                                            Local travel specialist
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            href="/guides"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#16A34A] hover:text-[#16A34A]"
                        >
                            Explore All Guides <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}