"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { apiClient } from "@/lib/api-client";
import {
    MapPin,
    ArrowLeft,
    ArrowRight,
    Sparkles,
    Calendar,
    Clock,
    Coins,
    CloudSun,
    Coffee,
    ShoppingBag,
    Hotel,
    Star,
    Map,
    Info,
    ImageIcon,
    X,
    ChevronRight,
    Compass,
} from "lucide-react";

interface DestinationHighlight {
    id: string;
    title: string;
    description: string;
    image: string;
}
interface DestinationImage {
    id: string;
    url: string;
}

interface Destination {
    id: string;
    name: string;
    slug: string;
    image: string;
    ogImage: string | null;
    shortDescription: string | null;
    description: string;
    location: string | null;
    district: string | null;
    province: string | null;
    latitude: number | null;
    longitude: number | null;
    category: string | null;
    bestTime: string | null;
    duration: string | null;
    budget: string | null;
    weatherAvg: string | null;
    weatherRain: string | null;
    howToGetThere: string | null;
    highlights: DestinationHighlight[];
    images: DestinationImage[];
}

function Reveal({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

function Eyebrow({
    icon: Icon,
    children,
}: {
    icon: React.ElementType;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 rounded-full bg-emerald-500" />
            <Icon className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-emerald-600">
                {children}
            </span>
        </div>
    );
}

function Lightbox({
    images,
    index,
    onClose,
    onChange,
}: {
    images: DestinationImage[];
    index: number;
    onClose: () => void;
    onChange: (next: number) => void;
}) {
    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowRight") onChange((index + 1) % images.length);
            if (event.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKey);
        };
    }, [index, images.length, onChange, onClose]);

    const current = images[index];
    if (!current) return null;

    return (
        <div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Destination gallery"
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:top-7"
                aria-label="Close gallery"
            >
                <X className="h-5 w-5" />
            </button>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            onChange((index - 1 + images.length) % images.length);
                        }}
                        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:left-7"
                        aria-label="Previous image"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            onChange((index + 1) % images.length);
                        }}
                        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-7"
                        aria-label="Next image"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </>
            )}

            <div className="flex max-h-[90vh] max-w-[92vw] flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={current.url}
                    alt={`Gallery image ${index + 1}`}
                    className="max-h-[82vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">
                    {index + 1} / {images.length}
                </span>
            </div>
        </div>
    );
}

export default function DestinationDetailPage() {
    const { id } = useParams() as { id: string };
    const [destination, setDestination] = useState<Destination | null>(null);
    const [loading, setLoading] = useState(true);
    const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
    const [selectedFeature, setSelectedFeature] = useState<{ title: string; description: string; image?: string; label?: string } | null>(null);
    const galleryScrollRef = useRef<HTMLDivElement>(null);

    const scrollGallery = (direction: 'left' | 'right') => {
        if (!galleryScrollRef.current) return;
        const scrollAmount = window.innerWidth > 1024 ? window.innerWidth * 0.32 : window.innerWidth * 0.8;
        galleryScrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const loadDestination = async () => {
            try {
                setLoading(true);
                const response = await apiClient.get(`/destinations/${id}`);
                if (response.data?.success) {
                    setDestination(response.data.data);
                }
            } catch (error) {
                console.error("Failed to load destination:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) loadDestination();
    }, [id]);

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <div className="text-center">
                    <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-emerald-500" />
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
                        Loading destination
                    </p>
                </div>
            </main>
        );
    }

    if (!destination) {
        return (
            <main className="flex min-h-screen flex-col bg-white">
                <Navbar />
                <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
                    <MapPin className="mb-5 h-14 w-14 text-slate-200" />
                    <h1 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-slate-900">
                        Destination Not Found
                    </h1>
                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                        The destination you are looking for could not be found.
                    </p>
                    <Link
                        href="/destinations"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Destinations
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const facts = [
        { icon: Calendar, label: "Best Time", value: destination.bestTime || "Year-round" },
        { icon: Clock, label: "Ideal Stay", value: destination.duration || "1–2 Days" },
        { icon: Coins, label: "Budget", value: destination.budget || "Moderate" },
        {
            icon: CloudSun,
            label: "Climate",
            value: destination.weatherAvg
                ? `${destination.weatherAvg}${destination.weatherRain ? ` · ${destination.weatherRain}` : ""}`
                : "Tropical",
        },
    ];

    const heroImage = destination.image || destination.images?.[0]?.url;
    const galleryImages = destination.images || [];

    const combinedAttractions = destination.highlights || [];

    return (
        <main className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            <Navbar />

            {/* HERO BANNER HEADER */}
            <section className="relative overflow-hidden bg-slate-900 pt-48 pb-32 text-center text-white lg:pt-56 lg:pb-40">
                {/* Micro particle decorations */}
                <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
                <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

                <div className="relative mx-auto flex max-w-[2100px] flex-col items-center px-6 space-y-7 xl:px-20">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 backdrop-blur-md">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>
                                {destination.location ||
                                    [destination.district, destination.province].filter(Boolean).join(", ") ||
                                    destination.category ||
                                    "Sri Lanka"}
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={160}>
                        <h1 className="font-[family-name:var(--font-manrope)] text-[clamp(3.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-xl">
                            {destination.name}
                        </h1>
                    </Reveal>

                    {destination.shortDescription && (
                        <Reveal delay={220}>
                            <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-white/80 sm:text-lg">
                                {destination.shortDescription}
                            </p>
                        </Reveal>
                    )}

                    <Reveal delay={280}>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                href={`/contact?message=${encodeURIComponent(`I am interested in a tour to ${destination.name}`)}`}
                                className="inline-flex h-13 items-center gap-2 rounded-full bg-emerald-500 px-8 text-sm font-bold text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600"
                            >
                                Explore Tours
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            {galleryImages.length > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setGalleryIndex(0)}
                                    className="inline-flex h-13 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
                                >
                                    View Gallery
                                    <ImageIcon className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* QUICK FACTS (Floating Glass Cards) */}
            <section className="relative z-20 mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16 -mt-12 sm:-mt-16 lg:-mt-20">
                <div className="rounded-[2.5rem] bg-white lg:p-10 p-6 shadow-2xl shadow-slate-200/60 ring-1 ring-slate-100">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x divide-slate-100/80">
                        {facts.map((fact, index) => {
                            const Icon = fact.icon;
                            return (
                                <Reveal key={fact.label} delay={index * 100}>
                                    <div className="group flex flex-col items-center text-center px-4 hover:-translate-y-1 transition-transform duration-300">
                                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.3)]">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                                            {fact.label}
                                        </p>
                                        <p className="mt-2 text-[15px] sm:text-[17px] font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                                            {fact.value}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* INTRODUCTION / OVERVIEW */}
            <section id="overview" className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="mx-auto grid max-w-[2100px] gap-12 px-6 sm:px-10 lg:grid-cols-2 xl:gap-24 lg:gap-16 lg:px-16 items-stretch">

                    {/* LEFT SIDE IMAGE OVERVIEW */}
                    <Reveal delay={100} className="order-2 lg:order-1 relative w-full h-[400px] sm:h-[500px] lg:h-auto lg:min-h-full overflow-hidden rounded-[3rem] shadow-2xl shadow-slate-200/80 border-[8px] border-white">
                        {heroImage ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={heroImage}
                                alt={destination.name}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        ) : (
                            <div className="flex bg-slate-100 h-full w-full items-center justify-center text-slate-300">
                                <ImageIcon className="h-16 w-16" />
                            </div>
                        )}
                        <div className="absolute top-6 left-6 lg:top-8 lg:left-8 rounded-full bg-white/95 backdrop-blur-md px-5 py-2.5 shadow-xl">
                            <p className="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider">
                                <Sparkles className="h-4 w-4" /> Discovery View
                            </p>
                        </div>
                    </Reveal>

                    {/* RIGHT SIDE TEXT CONTENT */}
                    <Reveal delay={160} className="order-1 lg:order-2 flex flex-col justify-center">
                        <Eyebrow icon={Info}>Destination Guide</Eyebrow>
                        <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-[clamp(2.4rem,4.5vw,4rem)] font-black leading-[1.02] tracking-[-0.04em] text-slate-900">
                            Experience the magic of {destination.name}
                        </h2>

                        {destination.shortDescription && (
                            <p className="mt-8 border-l-4 border-emerald-500 pl-6 text-xl font-semibold leading-relaxed text-slate-700">
                                {destination.shortDescription}
                            </p>
                        )}
                        <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-slate-500">
                            {destination.description}
                        </p>

                        <div className="mt-12 flex gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-emerald-600 transition hover:bg-emerald-50">
                                <Compass className="h-6 w-6" />
                            </div>
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-emerald-600 transition hover:bg-emerald-50">
                                <Map className="h-6 w-6" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* HIDDEN GEMS / ATTRACTIONS COMBINED */}
            {combinedAttractions.length > 0 && (
                <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 border-t border-slate-100">
                    <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16">
                        <Reveal>
                            <Eyebrow icon={Sparkles}>Discover More</Eyebrow>
                            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                                <h2 className="max-w-3xl font-[family-name:var(--font-manrope)] text-[clamp(2.1rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.045em]">
                                    Must-see places & hidden gems
                                </h2>
                                <p className="max-w-md text-sm leading-7 text-slate-500">
                                    Go beyond the usual tourist trail and experience the incredible attractions that give {destination.name} its unique character.
                                </p>
                            </div>
                        </Reveal>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {combinedAttractions.map((highlight, index) => (
                                <Reveal key={highlight.id || index} delay={index * 70}>
                                    <article
                                        className="group flex flex-col h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                                        onClick={() => setSelectedFeature({ title: highlight.title, description: highlight.description, image: highlight.image, label: "Explore" })}
                                    >
                                        {highlight.image && (
                                            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={highlight.image}
                                                    alt={highlight.title}
                                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6 sm:p-7 flex flex-col flex-1">
                                            <span className="mb-4 block h-0.5 w-8 bg-emerald-500" />
                                            <h3 className="font-[family-name:var(--font-manrope)] text-xl font-extrabold tracking-[-0.025em] text-slate-900 group-hover:text-emerald-700 transition">
                                                {highlight.title}
                                            </h3>
                                            {highlight.description && (
                                                <p className="mt-3 text-sm leading-7 text-slate-500 line-clamp-3">
                                                    {highlight.description}
                                                </p>
                                            )}
                                            <div className="mt-auto pt-5 flex items-center gap-1.5 text-sm font-bold text-emerald-600 transition group-hover:gap-2.5">
                                                Read More <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* LOCATION, BEST TIME & WEATHER */}
            <section className="bg-white py-12 sm:py-16 border-t border-slate-100">
                <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-stretch">
                        {/* LEFT: MAP */}
                        <Reveal className="w-full h-full">
                            <div className="h-[450px] lg:h-full min-h-[450px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-sm border border-slate-200 group">
                                {destination.latitude && destination.longitude ? (
                                    <iframe
                                        src={`https://maps.google.com/maps?q=${destination.latitude},${destination.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="h-full w-full grayscale-[15%] transition duration-700 group-hover:grayscale-0 focus:grayscale-0 contrast-105"
                                    ></iframe>
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-slate-400">
                                        <Map className="mx-auto mb-3 h-10 w-10 opacity-50" />
                                        <p className="text-sm font-bold">Map unavailable</p>
                                    </div>
                                )}
                            </div>
                        </Reveal>

                        {/* RIGHT: CONTENT */}
                        <div className="flex flex-col justify-center space-y-16 lg:py-8 h-full">
                            {/* Getting There (acting as Hidden Gems placeholder) */}
                            {destination.howToGetThere && (
                                <Reveal delay={100}>
                                    <h2 className="font-serif text-4xl lg:text-[42px] font-normal text-slate-900 mb-6 tracking-tight">
                                        Getting There
                                    </h2>
                                    <div className="prose prose-slate prose-p:leading-8 prose-p:text-slate-600">
                                        <p className="whitespace-pre-line text-sm sm:text-[15px]">{destination.howToGetThere}</p>
                                    </div>
                                </Reveal>
                            )}

                            {/* Best Time to Visit */}
                            {destination.bestTime && (
                                <Reveal delay={150}>
                                    <h2 className="font-serif text-4xl lg:text-[42px] font-normal text-slate-900 mb-6 tracking-tight">
                                        Best Times to Visit
                                    </h2>
                                    <p className="text-sm sm:text-[15px] leading-8 text-slate-600">
                                        {destination.bestTime}
                                    </p>
                                </Reveal>
                            )}

                            {/* Weather */}
                            {(destination.weatherAvg || destination.weatherRain) && (
                                <Reveal delay={200}>
                                    <h2 className="font-serif text-4xl lg:text-[42px] font-normal text-slate-900 mb-10 tracking-tight">
                                        Weather
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-12 sm:gap-16">
                                        <div className="flex flex-col text-center">
                                            <span className="text-[12px] font-bold uppercase tracking-widest text-[#1a2b49]">
                                                {destination.name}
                                            </span>
                                            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500 mt-0.5">
                                                WEATHER
                                            </span>
                                        </div>
                                        <CloudSun className="h-14 w-14 text-slate-400 stroke-[1.2]" />
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-medium text-slate-800">
                                                {destination.weatherAvg || "Tropical"}
                                            </span>
                                            {destination.weatherRain && (
                                                <span className="text-[13px] text-slate-500 mt-1 lowercase">
                                                    {destination.weatherRain}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Reveal>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            {galleryImages.length > 0 && (
                <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 border-t border-slate-100">
                    <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16">
                        <Reveal>
                            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                                <div>
                                    <Eyebrow icon={ImageIcon}>Location Gallery</Eyebrow>
                                    <h2 className="font-serif text-[clamp(2.1rem,4vw,3.5rem)] font-normal text-slate-900 tracking-tight">
                                        See {destination.name} through our lens
                                    </h2>
                                </div>
                                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                                    {galleryImages.length} Photos
                                </span>
                            </div>
                        </Reveal>

                        {/* NEW HORIZONTAL SCROLL GALLERY LAYOUT WITH CLEAR ARROWS */}
                        <Reveal delay={100} className="relative mt-10 w-full lg:mt-14">
                            {galleryImages.length > 3 && (
                                <>
                                    <button
                                        onClick={() => scrollGallery('left')}
                                        className="absolute left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-xl backdrop-blur-md transition hover:scale-110 hover:bg-white xl:-left-6"
                                        aria-label="Previous images"
                                    >
                                        <ArrowLeft className="h-6 w-6" />
                                    </button>

                                    <button
                                        onClick={() => scrollGallery('right')}
                                        className="absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-xl backdrop-blur-md transition hover:scale-110 hover:bg-white xl:-right-6"
                                        aria-label="Next images"
                                    >
                                        <ArrowRight className="h-6 w-6" />
                                    </button>
                                </>
                            )}

                            <div
                                ref={galleryScrollRef}
                                className="flex w-full snap-x snap-mandatory gap-3 sm:gap-4 lg:gap-6 overflow-x-auto pb-8 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                {galleryImages.map((img, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setGalleryIndex(i)}
                                        className="group relative h-[350px] w-full flex-none sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] snap-center overflow-hidden rounded-3xl bg-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl sm:h-[450px] sm:snap-start lg:h-[550px] lg:rounded-[40px] cursor-pointer"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={img.url}
                                            alt="..."
                                            className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.07]"
                                            loading="lazy"
                                        />

                                        {/* Dark overlay on hover */}
                                        <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                                        {/* Hover icon */}
                                        <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                            <div className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-md">
                                                <ImageIcon className="h-5 w-5 text-slate-800" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="bg-slate-50 px-6 py-8 sm:px-10 sm:py-12 lg:px-16 pb-16">
                <div className="mx-auto max-w-[2100px]">
                    <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
                        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-28 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

                        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                            <div className="max-w-2xl">
                                <Eyebrow icon={Sparkles}>Start Your Journey</Eyebrow>
                                <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                                    Ready to experience {destination.name}?
                                </h2>
                                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                                    Talk to our local travel experts and create a journey around the places you want to discover.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href={`/contact?message=${encodeURIComponent(
                                        `I am interested in a tour to ${destination.name}`
                                    )}`}
                                    className="group inline-flex h-13 items-center gap-2 rounded-full bg-emerald-500 px-7 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
                                >
                                    Plan My Trip
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/destinations"
                                    className="inline-flex h-13 items-center gap-2 rounded-full border border-white/15 px-7 text-sm font-bold text-white transition hover:bg-white/10"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    All Destinations
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {galleryIndex !== null && (
                <Lightbox
                    images={galleryImages}
                    index={galleryIndex}
                    onClose={() => setGalleryIndex(null)}
                    onChange={setGalleryIndex}
                />
            )}

            {/* FEATURE MODAL POPUP */}
            {selectedFeature && (
                <div
                    className="fixed inset-0 z-[400] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-md sm:p-6 animate-in fade-in duration-200"
                    onClick={() => setSelectedFeature(null)}
                >
                    <div
                        className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl md:border-[6px] border-[4px] border-white/50 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedFeature(null)}
                            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-md text-slate-900 transition hover:bg-white border border-slate-200 shadow-sm"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {selectedFeature.image && (
                            <div className="h-56 sm:h-96 w-full shrink-0 overflow-hidden bg-slate-100 relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={selectedFeature.image}
                                    alt={selectedFeature.title}
                                    className="h-full w-full object-cover"
                                />
                                {selectedFeature.label && (
                                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg">
                                        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-700">
                                            <Sparkles className="h-3 w-3" /> {selectedFeature.label}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="p-6 sm:p-10 overflow-y-auto">
                            <h2 className="font-[family-name:var(--font-manrope)] text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                                {selectedFeature.title}
                            </h2>
                            <div className="mt-5 border-t border-slate-100 pt-5">
                                <p className="whitespace-pre-line text-sm sm:text-[15px] leading-relaxed text-slate-600 sm:leading-8">
                                    {selectedFeature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}