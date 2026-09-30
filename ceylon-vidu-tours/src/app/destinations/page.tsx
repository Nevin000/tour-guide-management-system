"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { Search, MapPin, ArrowRight, Loader2, Mountain } from "lucide-react";

interface Destination {
    id: string;
    slug: string | null;
    name: string;
    image: string;
    description: string;
}
function Reveal({ children, delay = 0, className = "" }: {
    children: React.ReactNode; delay?: number; className?: string;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
                else setIsVisible(false);
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${className}`}
        >
            {children}
        </div>
    );
}

export default function DestinationsPage() {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await apiClient.get("/destinations");
                if (res.data?.success) setDestinations(res.data.data);
            } catch (err) { console.error(err); }
            finally { setLoading(false); }
        })();
    }, []);

    const filtered = destinations.filter(d => {
        const q = searchQuery.toLowerCase();
        return d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q);
    });

    return (
        <main className="min-h-screen bg-white" style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}>
            <Navbar />

            {/* ══════════════════════════════════════════════════════════
                HERO — full-viewport cinematic, Blue Lanka style
            ══════════════════════════════════════════════════════════ */}
            <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden flex items-center justify-center">
                {/* Parallax-style background */}
                <div className="absolute inset-0 bg-[url('/destination_hero.jpg')] bg-cover bg-center" />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

                <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-7 max-w-4xl mx-auto">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 border border-white/30 backdrop-blur-sm bg-white/10 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                        <Mountain className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Explore Sri Lanka</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                        Discover Our<br />
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Destinations
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed font-medium">
                        Pristine beaches, ancient temples, misty highlands — handpicked across the Pearl of the Indian Ocean.
                    </p>


                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                DESTINATION CARDS — Blue Lanka editorial grid
            ══════════════════════════════════════════════════════════ */}
            <section className="bg-white pb-16 pt-8">
                <div className="max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16">

                    {/* Section intro row */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 flex-wrap gap-6">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-2">
                                — Our Collection
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                                {searchQuery
                                    ? <>{filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;</>
                                    : <>{destinations.length} Remarkable Destinations</>
                                }
                            </h2>
                        </div>

                        {/* Search bar moved here */}
                        <div className="w-full md:w-auto md:min-w-[350px] flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 hover:border-emerald-300">
                            <Search className="h-5 w-5 text-slate-400 shrink-0" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                placeholder="Search destinations…"
                                className="flex-1 text-sm font-semibold text-slate-800 placeholder-slate-400 outline-none bg-transparent"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery("")}
                                    className="text-[10px] uppercase font-bold text-slate-500 hover:text-emerald-700 transition shrink-0 bg-slate-100 px-2 py-1 rounded-md">
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>

                    {/* States */}
                    {loading ? (
                        <div className="flex h-64 flex-col items-center justify-center gap-4">
                            <Loader2 className="h-9 w-9 animate-spin text-emerald-500" />
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Loading destinations…</p>
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="flex h-64 flex-col items-center justify-center gap-4 text-center">
                            <MapPin className="h-12 w-12 text-slate-200" />
                            <h4 className="text-lg font-black text-slate-700">No destinations found</h4>
                            <p className="text-sm text-slate-400">Try a different search term.</p>
                            <button onClick={() => setSearchQuery("")}
                                className="mt-2 px-6 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-bold text-emerald-700 hover:bg-emerald-100 transition">
                                Clear Search
                            </button>
                        </div>
                    ) : (
                        <>
                            {filtered.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filtered.map((dest, i) => (
                                        <Reveal key={dest.id} delay={(i % 3) * 80 + 100}>
                                            <Link
                                                href={`/destinations/${dest.slug || dest.id}`}
                                                className="group relative flex flex-col h-full overflow-hidden rounded-[14px] bg-white border border-slate-200/70 shadow-sm hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-700 hover:-translate-y-2 block"
                                            >
                                                {/* Image */}
                                                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[6/5] w-full overflow-hidden bg-slate-100">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={dest.image} alt={dest.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                        loading="lazy"
                                                        onError={e => { (e.target as HTMLImageElement).src = "https://placehold.co/700x500?text=Ceylon+Vidu+Tours"; }}
                                                    />
                                                </div>

                                                {/* Text content — Minimalist Centered style */}
                                                <div className="flex flex-col flex-1 p-6 sm:p-9 text-center items-center justify-center">
                                                    <h3 className="font-serif text-[32px] sm:text-[36px] font-normal tracking-tight text-slate-800 group-hover:text-emerald-600 mb-4 transition-colors duration-500">
                                                        {dest.name}
                                                    </h3>

                                                    <p className="text-[14.5px] sm:text-[15px] text-slate-500 leading-[1.8] font-medium line-clamp-3">
                                                        {dest.description}
                                                    </p>

                                                    <div className="mt-7 flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 transition-all duration-300 group-hover:text-emerald-600 group-hover:gap-3">
                                                        Read More <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </Reveal>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                BOTTOM CTA BAND — Blue Lanka style
            ══════════════════════════════════════════════════════════ */}
            <section className="bg-slate-950 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />

                <div className="relative max-w-3xl mx-auto px-6 space-y-7">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">
                        — Ready to Explore?
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                        Let Us Plan Your<br />Perfect Sri Lanka Journey
                    </h2>
                    <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
                        Our expert guides craft personalised itineraries tailored to your interests, budget and schedule.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                        <Link href="/contact"
                            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5">
                            Plan My Trip <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href="/tours"
                            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl border border-white/20 text-white text-sm font-bold hover:bg-white/5 transition-all duration-300">
                            View All Tours
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
