"use client";

import { useEffect, useState, useRef, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import {
    Search,
    MapPin,
    Clock,
    Star,
    ArrowRight,
    Loader2,
    Compass,
    Sparkles,
    ShieldCheck,
    CheckCircle2,
    Filter,
    X,
    Calendar,
    Users,
    ChevronRight,
    SlidersHorizontal,
    Send,
    DollarSign,
    Layers,
    Award,
    Grid,
    List,
    RefreshCw
} from "lucide-react";

interface TourPackage {
    id: string;
    title: string;
    slug: string;
    category: string;
    duration: string;
    daysCount: number;
    nightsCount: number;
    price: number;
    currency?: string;
    discountPrice?: number | null;
    rating: number;
    reviewsCount: number;
    image: string;
    shortDescription?: string | null;
    overview: string;
    destinations: any;
    highlights: string[];
    itinerary?: any[];
    featuredTag?: string | null;
    featured: boolean;
    published: boolean;
    maxGroupSize?: number;
    difficulty?: string;
    startLocation?: string;
    endLocation?: string;
}

function Reveal({
    children,
    delay = 0,
    className = ""
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
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
            className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
                } ${className}`}
        >
            {children}
        </div>
    );
}

const CATEGORY_TABS = [
    { id: "all", label: "All Packages", icon: Compass },
    { id: "one day tour", label: "One Day Tours", icon: Clock },
    { id: "round tour", label: "Round Tours", icon: Layers },
    { id: "wildlife & safari tour", label: "Wildlife & Safari", icon: Sparkles },
    { id: "cultural & heritage tour", label: "Cultural & Heritage", icon: Award },
    { id: "beach tour", label: "Beach Retreats", icon: MapPin },
    { id: "hill country tour", label: "Misty Highlands", icon: SlidersHorizontal },
];

function ToursContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [tours, setTours] = useState<TourPackage[]>([]);
    const [loading, setLoading] = useState(true);

    // Filter States
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [durationFilter, setDurationFilter] = useState("all");
    const [maxPriceFilter, setMaxPriceFilter] = useState<number | "">("");
    const [sortOption, setSortOption] = useState("recommended");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    // Quick Inquiry / Booking Modal State
    const [selectedTourForInquiry, setSelectedTourForInquiry] = useState<TourPackage | null>(null);
    const [inquirySubmitting, setInquirySubmitting] = useState(false);
    const [inquiryForm, setInquiryForm] = useState({
        name: "",
        email: "",
        phone: "",
        travelDate: "",
        travelersCount: 2,
        message: "",
        website: "" // Anti-bot honeypot
    });

    // Sync category filter with URL query params
    useEffect(() => {
        const catParam = searchParams.get("category");
        if (catParam) {
            setSelectedCategory(catParam);
        } else {
            setSelectedCategory("all");
        }
    }, [searchParams]);

    const handleCategoryChange = (catId: string) => {
        setSelectedCategory(catId);
        const params = new URLSearchParams(searchParams.toString());
        if (catId === "all") {
            params.delete("category");
        } else {
            params.set("category", catId);
        }
        const query = params.toString();
        router.push(`/tours${query ? `?${query}` : ""}`, { scroll: false });
    };

    const fetchTours = async () => {
        try {
            setLoading(true);
            const res = await apiClient.get("/tours?limit=100");
            if (res.data?.success) {
                setTours(res.data.data || []);
            }
        } catch (err) {
            console.error("Error fetching public tours:", err);
            toast.error("Failed to load tour packages.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    // Filtered & Sorted Tours Logic
    const filteredTours = useMemo(() => {
        let result = tours.filter((t) => {
            // Category Match
            let matchesCategory = selectedCategory === "all";
            if (!matchesCategory) {
                const sel = selectedCategory.toLowerCase().trim();
                const cat = (t.category || "").toLowerCase().trim();

                if (cat === sel || cat.includes(sel) || sel.includes(cat)) {
                    matchesCategory = true;
                } else if (sel.includes("safari") && (cat.includes("safari") || cat.includes("wildlife"))) {
                    matchesCategory = true;
                } else if (sel.includes("cultural") && (cat.includes("cultural") || cat.includes("heritage"))) {
                    matchesCategory = true;
                } else if (sel.includes("hill") && (cat.includes("hill") || cat.includes("mountain") || cat.includes("highland") || cat.includes("tea"))) {
                    matchesCategory = true;
                } else if (sel.includes("beach") && (cat.includes("beach") || cat.includes("coast"))) {
                    matchesCategory = true;
                } else if (sel.includes("one day") && (cat.includes("day") || t.daysCount === 1)) {
                    matchesCategory = true;
                } else if (sel.includes("round") && (cat.includes("round") || t.daysCount > 1)) {
                    matchesCategory = true;
                }
            }

            // Search Query Match (Title, Overview, Destinations)
            const query = searchQuery.toLowerCase().trim();
            const destText = Array.isArray(t.destinations)
                ? t.destinations
                    .map((d: any) => (typeof d === "string" ? d : d?.name || d?.title || ""))
                    .filter(Boolean)
                    .join(" ")
                : String(t.destinations || "");

            const matchesSearch =
                !query ||
                t.title?.toLowerCase().includes(query) ||
                t.overview?.toLowerCase().includes(query) ||
                destText.toLowerCase().includes(query) ||
                (t.startLocation && t.startLocation.toLowerCase().includes(query));

            // Duration Match
            let matchesDuration = true;
            if (durationFilter === "oneday") matchesDuration = t.daysCount === 1 || t.category?.toLowerCase().includes("day");
            if (durationFilter === "short") matchesDuration = t.daysCount >= 2 && t.daysCount <= 5;
            if (durationFilter === "medium") matchesDuration = t.daysCount >= 6 && t.daysCount <= 8;
            if (durationFilter === "long") matchesDuration = t.daysCount >= 9;

            // Price Match
            let matchesPrice = true;
            if (maxPriceFilter !== "") {
                matchesPrice = Number(t.price) <= Number(maxPriceFilter);
            }

            return matchesCategory && matchesSearch && matchesDuration && matchesPrice;
        });

        // Sorting
        if (sortOption === "price_asc") {
            result.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (sortOption === "price_desc") {
            result.sort((a, b) => Number(b.price) - Number(a.price));
        } else if (sortOption === "rating") {
            result.sort((a, b) => (b.rating || 5) - (a.rating || 5));
        }

        return result;
    }, [tours, selectedCategory, searchQuery, durationFilter, maxPriceFilter, sortOption]);

    const handleInquirySubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (inquiryForm.website) {
            toast.success("Inquiry received!");
            setSelectedTourForInquiry(null);
            return;
        }

        if (!inquiryForm.name.trim() || !inquiryForm.email.trim() || !inquiryForm.phone.trim()) {
            return toast.error("Please provide your Name, Email, and Phone / WhatsApp number.");
        }

        try {
            setInquirySubmitting(true);
            const payload = {
                tourId: selectedTourForInquiry?.id,
                tourTitle: selectedTourForInquiry?.title,
                name: inquiryForm.name.trim(),
                email: inquiryForm.email.trim(),
                phone: inquiryForm.phone.trim(),
                travelDate: inquiryForm.travelDate,
                guestsCount: inquiryForm.travelersCount,
                specialRequests: inquiryForm.message.trim(),
            };

            const res = await apiClient.post("/bookings", payload);

            if (res.data?.success) {
                toast.success(res.data.message || "Your tour inquiry has been submitted! We will reach out shortly.");
                setSelectedTourForInquiry(null);
                setInquiryForm({
                    name: "",
                    email: "",
                    phone: "",
                    travelDate: "",
                    travelersCount: 2,
                    message: "",
                    website: ""
                });
            } else {
                toast.error(res.data?.message || "Failed to submit inquiry.");
            }
        } catch (err: any) {
            console.error("Inquiry submission error:", err);
            toast.error(err.response?.data?.message || "Failed to submit inquiry. Please try again.");
        } finally {
            setInquirySubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            <Navbar alwaysSolid={true} />

            {/* ══════════════════════════════════════════════════════════
                HERO SECTION — High-End Luxury Dark Aesthetics
            ══════════════════════════════════════════════════════════ */}
            <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 w-full overflow-hidden bg-slate-950 text-white">
                {/* Background Image with Dark Masking */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />

                {/* Soft Glowing Ambient Lights */}
                <div className="absolute top-1/4 left-1/4 h-[420px] w-[420px] rounded-full bg-emerald-500/15 blur-[140px] pointer-events-none" />
                <div className="absolute bottom-10 right-1/4 h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-[150px] pointer-events-none" />

                <div className="relative max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center space-y-6">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2 text-xs sm:text-sm font-black tracking-widest text-emerald-400 uppercase backdrop-blur-md shadow-xl shadow-emerald-500/10">
                        <Compass className="h-4 w-4 text-emerald-400 animate-spin-slow" />
                        <span>Curated Ceylon Expeditions & Private Tours</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] max-w-5xl">
                        Handcrafted Sri Lanka <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent drop-shadow-md">
                            Tour Packages & Journeys
                        </span>
                    </h1>

                    <p className="text-base sm:text-xl text-slate-300 max-w-3xl font-medium leading-relaxed">
                        Experience private chauffeur-driven itineraries, UNESCO World Heritage trails, wild leopard safaris, and tranquil misty highland tea retreats.
                    </p>

                    {/* Quick Search & Filter Card Bar */}
                    <div className="w-full max-w-5xl mt-6 p-3 bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl flex flex-col sm:flex-row gap-3 items-center">
                        <div className="flex-1 flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3.5 w-full border border-white/10 focus-within:border-emerald-400 transition">
                            <Search className="h-5 w-5 text-emerald-400 shrink-0" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search destination (e.g. Galle, Sigiriya, Kandy)..."
                                className="w-full bg-transparent text-white text-sm font-bold placeholder-slate-400 outline-none"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery("")} className="text-xs text-slate-400 hover:text-white">
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-2.5 w-full sm:w-auto">
                            <select
                                value={durationFilter}
                                onChange={(e) => setDurationFilter(e.target.value)}
                                className="bg-slate-900/90 text-white text-xs font-bold rounded-2xl px-4 py-3.5 border border-white/15 focus:outline-none focus:border-emerald-400 cursor-pointer flex-1 sm:flex-initial"
                            >
                                <option value="all">All Durations</option>
                                <option value="oneday">1 Day (Day Trip)</option>
                                <option value="short">2 - 5 Days</option>
                                <option value="medium">6 - 8 Days</option>
                                <option value="long">9+ Days</option>
                            </select>

                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="bg-slate-900/90 text-white text-xs font-bold rounded-2xl px-4 py-3.5 border border-white/15 focus:outline-none focus:border-emerald-400 cursor-pointer flex-1 sm:flex-initial"
                            >
                                <option value="recommended">Recommended</option>
                                <option value="price_asc">Price: Low to High</option>
                                <option value="price_desc">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                MAIN CATALOG SECTION — Light Theme Page Background
            ══════════════════════════════════════════════════════════ */}
            <section className="bg-slate-50 text-slate-900 py-12 sm:py-16">
                <div className="max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">

                    {/* Category Filter Pills */}
                    <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 scrollbar-none">
                        {CATEGORY_TABS.map((tab) => {
                            const Icon = tab.icon;
                            const isSelected = selectedCategory === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => handleCategoryChange(tab.id)}
                                    className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${isSelected
                                        ? "bg-emerald-600 text-white shadow-xl shadow-emerald-600/25 scale-105"
                                        : "bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50"
                                        }`}
                                >
                                    <Icon className={`h-4 w-4 ${isSelected ? "text-white" : "text-emerald-600"}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Status & Results Header Bar */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
                        <div>
                            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 block">
                                — Available Expeditions
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                                {loading ? "Loading Tours..." : `${filteredTours.length} Tour Package(s) Found`}
                            </h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
                                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                <span>100% Tailor-Made & Private</span>
                            </div>

                            {/* View Mode Toggle */}
                            <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-lg transition ${viewMode === "grid" ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"}`}
                                    title="Grid View"
                                >
                                    <Grid className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-lg transition ${viewMode === "list" ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"}`}
                                    title="List View"
                                >
                                    <List className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="flex h-80 flex-col items-center justify-center gap-4">
                            <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                Loading Verified Ceylon Itineraries...
                            </p>
                        </div>
                    ) : filteredTours.length === 0 ? (
                        /* Empty State */
                        <div className="flex h-80 flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border border-slate-200 mt-8 space-y-4">
                            <Compass className="h-12 w-12 text-slate-300" />
                            <div>
                                <h3 className="text-lg font-black text-slate-800">No matching tours found</h3>
                                <p className="text-sm text-slate-500 mt-1 max-w-sm">
                                    Try adjusting your search criteria or resetting category filters.
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    handleCategoryChange("all");
                                    setSearchQuery("");
                                    setDurationFilter("all");
                                    setMaxPriceFilter("");
                                }}
                                className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    ) : (
                        /* Tour Grid / List */
                        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
                            {filteredTours.map((pkg, idx) => {
                                const isDayTour = pkg.category?.toLowerCase().includes("day") || pkg.daysCount === 1;
                                const durationBadge = isDayTour ? "1 Day (Day Trip)" : pkg.duration || `${pkg.daysCount} Days / ${pkg.nightsCount} Nights`;

                                return (
                                    <Reveal key={pkg.id} delay={(idx % 3) * 80}>
                                        <div
                                            className={`group relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-600/15 hover:border-emerald-500/50 ${viewMode === "list" ? "flex flex-col md:flex-row" : "flex flex-col justify-between h-full min-h-[520px]"
                                                }`}
                                        >
                                            {/* Cover Image Container */}
                                            <div
                                                className={`relative overflow-hidden bg-slate-900 ${viewMode === "list" ? "w-full md:w-80 h-64 md:h-auto shrink-0" : "h-72 sm:h-80 w-full"
                                                    }`}
                                            >
                                                <Image
                                                    src={pkg.image}
                                                    alt={pkg.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                                                {/* Category Badge */}
                                                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3.5 py-1 text-[11px] font-black text-white shadow-md uppercase tracking-wider">
                                                    <span>{pkg.category}</span>
                                                </div>

                                                {/* Duration Badge */}
                                                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                                                    <Clock className="h-3.5 w-3.5 text-sky-400" />
                                                    <span>{durationBadge}</span>
                                                </div>

                                                {/* Verified Pill */}
                                                <div className="absolute bottom-4 right-4 z-10">
                                                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-950/85 border border-emerald-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                                                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                                                        <span>Verified</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Card Body */}
                                            <div className="flex flex-col justify-between flex-1 p-7 sm:p-8">
                                                <div>
                                                    {/* Destinations Tags */}
                                                    <div className="flex flex-wrap items-center gap-1.5">
                                                        {Array.isArray(pkg.destinations) &&
                                                            pkg.destinations.slice(0, 4).map((dest: any, i: number) => {
                                                                const name = typeof dest === "string" ? dest : dest?.name || dest?.title || "";
                                                                if (!name) return null;
                                                                return (
                                                                    <span
                                                                        key={i}
                                                                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                                                                    >
                                                                        <MapPin className="h-3 w-3 text-sky-500" />
                                                                        {name}
                                                                    </span>
                                                                );
                                                            })}
                                                        {Array.isArray(pkg.destinations) && pkg.destinations.length > 4 && (
                                                            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                                                                +{pkg.destinations.length - 4} more
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Title */}
                                                    <Link href={`/tours/${pkg.slug}`}>
                                                        <h3 className="mt-3.5 text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 leading-snug">
                                                            {pkg.title}
                                                        </h3>
                                                    </Link>

                                                    {/* Short Description */}
                                                    {pkg.shortDescription && (
                                                        <p className="mt-2 text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed">
                                                            {pkg.shortDescription}
                                                        </p>
                                                    )}

                                                    {/* Highlights List */}
                                                    {Array.isArray(pkg.highlights) && pkg.highlights.length > 0 && (
                                                        <ul className="mt-4 space-y-1.5 text-xs text-slate-600 font-medium">
                                                            {pkg.highlights.slice(0, 3).map((item, idx) => (
                                                                <li key={idx} className="flex items-center gap-2">
                                                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                                                    <span className="truncate">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>

                                                {/* Footer & Pricing */}
                                                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                                                    <div>
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                                            Starting From
                                                        </span>
                                                        <div className="flex items-baseline gap-1">
                                                            <span className="text-2xl sm:text-3xl font-black text-slate-900">
                                                                {pkg.currency || "USD"} ${pkg.price}
                                                            </span>
                                                            <span className="text-xs font-medium text-slate-500">/ person</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => setSelectedTourForInquiry(pkg)}
                                                            className="px-4 py-2.5 rounded-2xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-extrabold text-xs transition border border-emerald-200 cursor-pointer"
                                                        >
                                                            Inquire Now
                                                        </button>
                                                        <Link
                                                            href={`/tours/${pkg.slug}`}
                                                            className="p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-md shadow-emerald-600/20"
                                                        >
                                                            <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                FEATURED TRAVEL THEMES SHOWCASE
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 bg-white border-t border-slate-200 text-slate-900">
                <div className="max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
                    <div className="text-center space-y-2 max-w-2xl mx-auto">
                        <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
                            — Curated Ceylon Themes
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                            Explore Journeys By Style
                        </h2>
                        <p className="text-slate-600 text-sm font-medium">
                            Select a travel theme to discover specialized itineraries crafted around your passion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                categoryId: "cultural & heritage tour",
                                title: "Heritage & Culture",
                                count: "Ancient UNESCO Trails",
                                img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800",
                                desc: "Sigiriya Rock, Temple of the Tooth & Polonnaruwa ruins"
                            },
                            {
                                categoryId: "wildlife & safari tour",
                                title: "Wildlife & Safaris",
                                count: "Leopard & Elephant Safaris",
                                img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
                                desc: "Yala National Park, Udawalawe & Wilpattu wilderness"
                            },
                            {
                                categoryId: "hill country tour",
                                title: "Misty Highlands",
                                count: "Tea Country Trails",
                                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
                                desc: "Ella Nine Arch Bridge, Nuwara Eliya & waterfalls"
                            },
                            {
                                categoryId: "beach tour",
                                title: "Coastal Retreats",
                                count: "Tropical Ocean Escapes",
                                img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
                                desc: "Mirissa whale watching, Bentota beaches & Galle Fort"
                            },
                        ].map((theme, i) => (
                            <div
                                key={i}
                                onClick={() => handleCategoryChange(theme.categoryId)}
                                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-transform hover:-translate-y-2 border border-slate-200"
                            >
                                <Image
                                    src={theme.img}
                                    alt={theme.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 space-y-1.5 text-white">
                                    <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest block">
                                        {theme.count}
                                    </span>
                                    <h3 className="text-xl font-black">{theme.title}</h3>
                                    <p className="text-xs text-slate-300 font-medium line-clamp-2">{theme.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                TAILOR-MADE CUSTOM TOUR CTA BANNER
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />

                <div className="relative max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full inline-block">
                            100% Bespoke Private Travel
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white">
                            Looking for a Customized <br />
                            <span className="text-emerald-400">Sri Lanka Itinerary?</span>
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                            Have specific dates, luxury boutique hotel preferences, or special family travel requirements? Our destination experts craft personalized travel programs tailored to your exact pace and budget.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                        <a
                            href="https://wa.me/94777123456?text=Hello!%20I%20would%20like%20to%20plan%20a%20custom%20tour%20to%20Sri%20Lanka."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-2xl transition shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2"
                        >
                            <span>WhatsApp Destination Expert</span>
                            <ChevronRight className="h-4 w-4" />
                        </a>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm rounded-2xl backdrop-blur-md border border-white/15 transition text-center"
                        >
                            Request Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                QUICK INQUIRY / BOOKING MODAL
            ══════════════════════════════════════════════════════════ */}
            {selectedTourForInquiry && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="relative w-full max-w-xl bg-white text-slate-900 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                        {/* Header */}
                        <div className="bg-slate-900 text-white p-6 sm:p-7 relative">
                            <button
                                onClick={() => setSelectedTourForInquiry(null)}
                                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1">
                                Tour Inquiry & Booking Request
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                                {selectedTourForInquiry.title}
                            </h3>
                            <p className="text-xs text-slate-300 mt-1 flex items-center gap-3">
                                <span>{selectedTourForInquiry.duration}</span>
                                <span>•</span>
                                <span className="text-emerald-400 font-bold">
                                    {selectedTourForInquiry.currency || "USD"} ${selectedTourForInquiry.price} / person
                                </span>
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleInquirySubmit} className="p-6 sm:p-7 space-y-4">
                            {/* Anti-Bot Honeypot */}
                            <div className="hidden" aria-hidden="true">
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={inquiryForm.website}
                                    onChange={(e) => setInquiryForm({ ...inquiryForm, website: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        value={inquiryForm.name}
                                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                                        className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        value={inquiryForm.email}
                                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                                        className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+1 234 567 890"
                                        value={inquiryForm.phone}
                                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                                        className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Travel Date</label>
                                    <input
                                        type="date"
                                        value={inquiryForm.travelDate}
                                        onChange={(e) => setInquiryForm({ ...inquiryForm, travelDate: e.target.value })}
                                        className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Number of Travelers</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="50"
                                    value={inquiryForm.travelersCount}
                                    onChange={(e) => setInquiryForm({ ...inquiryForm, travelersCount: parseInt(e.target.value, 10) || 1 })}
                                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Special Requirements</label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us about hotel category, specific destinations, or custom requests..."
                                    value={inquiryForm.message}
                                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={inquirySubmitting}
                                className="w-full h-13 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                                {inquirySubmitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                                        <span>Submitting Request...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" />
                                        <span>Submit Tour Inquiry</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}

export default function ToursPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
            </div>
        }>
            <ToursContent />
        </Suspense>
    );
}
