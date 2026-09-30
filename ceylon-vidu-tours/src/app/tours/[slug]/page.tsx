"use client";

import { useEffect, useState, use } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import {
    MapPin,
    Clock,
    Star,
    CheckCircle2,
    XCircle,
    ShieldCheck,
    Calendar,
    Users,
    ChevronRight,
    ArrowLeft,
    Send,
    Loader2,
    Sparkles,
    Check,
    Compass,
    Share2,
    Info,
    HelpCircle,
    Sun,
    Tag,
    BookOpen,
    Coffee,
    Utensils,
    Car,
    Train,
    Sunset,
    Maximize2,
    ChevronDown,
    ChevronUp,
    MessageSquare,
    Award,
    Layers,
    Camera
} from "lucide-react";

interface ItineraryItem {
    day?: number;
    time?: string;
    title: string;
    description: string;
    location?: string;
    image?: string;
    meal?: string;
    activityType?: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

interface DestinationRef {
    id: string;
    name: string;
    slug: string;
    image: string;
    shortDescription?: string;
}

interface BlogPostRef {
    id: string;
    title: string;
    slug: string;
    coverImage: string;
    excerpt?: string;
    publishedAt?: string;
}

interface TourPackage {
    id: string;
    title: string;
    slug: string;
    category: string;
    travelStyle?: string | null;
    theme?: string | null;
    duration: string;
    daysCount: number;
    nightsCount: number;
    price: number;
    discountPrice?: number | null;
    currency?: string;
    rating: number;
    reviewsCount: number;
    image: string;
    gallery?: string[];
    shortDescription?: string | null;
    overview: string;
    destinations: any[];
    highlights: string[];
    itinerary: ItineraryItem[];
    included: string[];
    excluded: string[];
    faqs?: FAQItem[];
    bestTime?: string | null;
    featuredTag?: string | null;
    maxGroupSize?: number;
    difficulty?: string;
    startLocation?: string;
    endLocation?: string;
    destination?: DestinationRef | null;
    blogPosts?: BlogPostRef[];
}

function cleanUrl(url?: string): string {
    if (!url) return '/images/placeholder.jpg';
    return url
        .replace(/&#x2F;/gi, '/')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}

// Generate realistic fallback activity times if time field is not explicitly specified
function getFormattedActivityTime(item: ItineraryItem, index: number, isDayTour: boolean): string {
    if (item.time && item.time.trim() !== "") {
        return item.time.trim();
    }

    if (isDayTour) {
        const defaultTimes = [
            "08:00 AM - Morning Pickup",
            "10:30 AM - Sightseeing & Exploration",
            "01:00 PM - Authentic Ceylon Lunch",
            "03:30 PM - Afternoon Expedition",
            "06:00 PM - Sunset Viewpoint & Tea",
            "08:00 PM - Hotel Drop-off & Departure"
        ];
        return defaultTimes[index % defaultTimes.length];
    }

    // For multi-day tours
    const multiDayTimes = [
        "08:30 AM - Departure & Scenic Drive",
        "10:45 AM - Key Heritage Landmark Visit",
        "01:15 PM - Local Lunch & Refreshments",
        "03:45 PM - Adventure & Guided Trail",
        "06:30 PM - Evening Hotel Check-in & Dinner"
    ];
    return multiDayTimes[index % multiDayTimes.length];
}

export default function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    const [tour, setTour] = useState<TourPackage | null>(null);
    const [relatedTours, setRelatedTours] = useState<TourPackage[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "inclusions" | "faqs">("overview");

    // Lightbox modal state
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    // Collapsible itinerary days/stops state
    const [expandedItinerary, setExpandedItinerary] = useState<Record<number, boolean>>({});

    // Booking Widget Form State
    const [travelersCount, setTravelersCount] = useState(2);
    const [bookingForm, setBookingForm] = useState({
        name: "",
        email: "",
        phone: "",
        travelDate: "",
        message: "",
        website: "" // Anti-bot honeypot
    });

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await apiClient.get(`/tours/${slug}`);
                if (res.data?.success) {
                    const fetchedTour = res.data.data;
                    setTour(fetchedTour);

                    // Expand all itinerary items by default
                    if (Array.isArray(fetchedTour.itinerary)) {
                        const initialExpand: Record<number, boolean> = {};
                        fetchedTour.itinerary.forEach((_: any, idx: number) => {
                            initialExpand[idx] = true;
                        });
                        setExpandedItinerary(initialExpand);
                    }

                    // Fetch related tours
                    try {
                        const allRes = await apiClient.get('/tours?limit=6');
                        if (allRes.data?.success) {
                            const filtered = (allRes.data.data || []).filter((t: any) => t.slug !== slug).slice(0, 3);
                            setRelatedTours(filtered);
                        }
                    } catch (e) {
                        console.error("Related tours fetch error:", e);
                    }

                } else {
                    toast.error("Tour package not found.");
                }
            } catch (err) {
                console.error("Error fetching tour detail:", err);
                toast.error("Failed to load tour details.");
            } finally {
                setLoading(false);
            }
        })();
    }, [slug]);

    // Booking & Online Payment Modal State
    const [submitting, setSubmitting] = useState(false);
    const [createdBooking, setCreatedBooking] = useState<any | null>(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("Credit Card (Stripe)");
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState<any | null>(null);

    const toggleItineraryItem = (index: number) => {
        setExpandedItinerary(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleBookingSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (bookingForm.website) {
            toast.success("Booking request created!");
            return;
        }

        if (!bookingForm.name || !bookingForm.email || !bookingForm.phone || !bookingForm.travelDate) {
            return toast.error("Please provide your name, email, phone number, and travel date.");
        }

        try {
            setSubmitting(true);
            const payload = {
                tourPackageId: tour?.id,
                customerName: bookingForm.name,
                customerEmail: bookingForm.email,
                customerPhone: bookingForm.phone,
                travelDate: bookingForm.travelDate,
                numberOfAdults: travelersCount,
                numberOfChildren: 0,
                pickupLocation: tour?.startLocation || "Colombo BIA Airport / Hotel Pickup",
                specialRequests: bookingForm.message,
            };

            const res = await apiClient.post("/bookings", payload);
            if (res.data?.success) {
                setCreatedBooking(res.data.data);
                setIsPaymentModalOpen(true);
                toast.success("Booking request created! You can now proceed to secure payment.");
            } else {
                toast.error(res.data?.message || "Booking failed.");
            }
        } catch (err: any) {
            console.error("Booking error:", err);
            toast.error(err.response?.data?.message || "Failed to submit booking request.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleProcessOnlinePayment = async () => {
        if (!createdBooking) return;
        try {
            setProcessingPayment(true);
            const res = await apiClient.post("/payments", {
                bookingId: createdBooking.id,
                paymentMethod,
                amount: createdBooking.totalAmount,
                currency: createdBooking.currency || "USD",
            });

            if (res.data?.success) {
                setPaymentSuccess(res.data.data);
                toast.success("Payment completed successfully! Booking is confirmed.");
            } else {
                toast.error(res.data?.message || "Payment failed.");
            }
        } catch (err: any) {
            console.error("Payment error:", err);
            toast.error(err.response?.data?.message || "Payment processing failed.");
        } finally {
            setProcessingPayment(false);
        }
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
                <Loader2 className="h-10 w-10 animate-spin text-emerald-400 mb-3" />
                <p className="text-xs uppercase font-black tracking-widest text-slate-400">Loading Ceylon Expedition Details...</p>
            </main>
        );
    }

    if (!tour) {
        return (
            <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
                <Compass className="h-16 w-16 text-emerald-400 mb-4 animate-bounce" />
                <h1 className="text-3xl font-black text-white">Tour Package Not Found</h1>
                <p className="text-sm text-slate-400 mt-2 max-w-sm">The itinerary you are looking for may have been updated or moved.</p>
                <Link href="/tours" className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-emerald-500 transition shadow-lg shadow-emerald-600/30">
                    Browse All Ceylon Tours
                </Link>
            </main>
        );
    }

    const isDayTour = tour.category?.toLowerCase().includes("day") || tour.daysCount === 1;
    const totalPrice = (tour.discountPrice || tour.price) * travelersCount;

    const whatsappMessage = encodeURIComponent(
        `Hello Ceylon Vidu Tours! I'm interested in booking the "${tour.title}" (${tour.duration}). Could you please send me more information or a customized quote?`
    );

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}>
            <Navbar alwaysSolid={true} />

            {/* ══════════════════════════════════════════════════════════
                HERO BANNER — Premium Luxury Editorial Banner
            ══════════════════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 w-full bg-slate-950 text-white overflow-hidden border-b border-white/10">
                {/* Background Image with Dark Masking */}
                <div className="absolute inset-0">
                    <Image
                        src={cleanUrl(tour.image)}
                        alt={tour.title}
                        fill
                        priority
                        className="object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/80" />
                </div>

                {/* Soft Glowing Lights */}
                <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-sky-500/15 blur-[140px] pointer-events-none" />

                <div className="relative max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
                    {/* Back Link & Quick Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <Link
                            href="/tours"
                            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-200 hover:text-emerald-400 transition bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Tour Collection
                        </Link>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({ title: tour.title, url: window.location.href });
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        toast.success("Tour link copied to clipboard!");
                                    }
                                }}
                                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-md border border-white/10 transition flex items-center gap-2"
                                title="Share Tour"
                            >
                                <Share2 className="h-4 w-4" />
                                <span className="hidden sm:inline">Share</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                        <div className="lg:col-span-2 space-y-4">
                            {/* Badges Bar */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="uppercase text-[11px] font-black tracking-widest bg-emerald-600 text-white px-4 py-1.5 rounded-full shadow-lg">
                                    {tour.category}
                                </span>
                                {tour.featuredTag && (
                                    <span className="uppercase text-[11px] font-black tracking-widest bg-amber-500 text-white px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                        <Sparkles className="h-3.5 w-3.5 fill-white" /> {tour.featuredTag}
                                    </span>
                                )}
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                                    <Clock className="h-3.5 w-3.5 text-sky-400" /> {tour.duration}
                                </span>
                                {tour.difficulty && (
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                                        <Award className="h-3.5 w-3.5 text-emerald-400" /> {tour.difficulty} Level
                                    </span>
                                )}
                            </div>

                            {/* Main Title */}
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08]">
                                {tour.title}
                            </h1>

                            {/* Destinations & Location Bar */}
                            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-300 pt-2">
                                <div className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-2 rounded-2xl border border-white/10 backdrop-blur-md">
                                    <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                                    <span className="truncate max-w-md">
                                        {Array.isArray(tour.destinations)
                                            ? tour.destinations.map((d: any) => (typeof d === "string" ? d : d.name || d.title)).filter(Boolean).join(" • ")
                                            : (typeof tour.destinations === "string" ? tour.destinations : "")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Price Badge Card */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl space-y-3 shadow-2xl">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Package Starting From</span>
                                <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-md">
                                    All-Inclusive
                                </span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl sm:text-5xl font-black text-white">${tour.discountPrice || tour.price}</span>
                                <span className="text-xs text-slate-300 font-bold">/ person</span>
                            </div>
                            {tour.discountPrice && (
                                <p className="text-xs text-emerald-400 font-bold">
                                    Special Offer: Save ${tour.price - tour.discountPrice} per guest
                                </p>
                            )}
                            <div className="pt-2 flex items-center gap-2">
                                <a
                                    href={`https://wa.me/94777123456?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/30"
                                >
                                    <MessageSquare className="h-4 w-4" />
                                    <span>WhatsApp Expert</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                MAIN LAYOUT GRID (Content + Booking Card)
            ══════════════════════════════════════════════════════════ */}
            <section className="py-12 sm:py-16">
                <div className="max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* LEFT COLUMN: Tabs & Detail Sections */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Tab Switcher */}
                            <div className="flex border-b border-slate-200 gap-6 overflow-x-auto pb-1 scrollbar-none">
                                <button
                                    onClick={() => setActiveTab("overview")}
                                    className={`pb-4 text-sm font-black border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${activeTab === "overview"
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-transparent text-slate-500 hover:text-slate-900"
                                        }`}
                                >
                                    <Compass className="h-4 w-4" />
                                    <span>Overview &amp; Highlights</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("itinerary")}
                                    className={`pb-4 text-sm font-black border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${activeTab === "itinerary"
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-transparent text-slate-500 hover:text-slate-900"
                                        }`}
                                >
                                    <Clock className="h-4 w-4" />
                                    <span>Activity Times &amp; Schedule</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("inclusions")}
                                    className={`pb-4 text-sm font-black border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${activeTab === "inclusions"
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-transparent text-slate-500 hover:text-slate-900"
                                        }`}
                                >
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span>What&apos;s Included</span>
                                </button>
                                {tour.faqs && tour.faqs.length > 0 && (
                                    <button
                                        onClick={() => setActiveTab("faqs")}
                                        className={`pb-4 text-sm font-black border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${activeTab === "faqs"
                                            ? "border-emerald-600 text-emerald-600"
                                            : "border-transparent text-slate-500 hover:text-slate-900"
                                            }`}
                                    >
                                        <HelpCircle className="h-4 w-4" />
                                        <span>FAQs &amp; Travel Info</span>
                                    </button>
                                )}
                            </div>

                            {/* TAB 1: OVERVIEW */}
                            {activeTab === "overview" && (
                                <div className="space-y-8 animate-in fade-in duration-300">
                                    {/* Key Attributes Grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white border border-slate-200/90 rounded-3xl shadow-sm">
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Duration</span>
                                            <span className="text-sm font-black text-slate-800 flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5 text-emerald-600" />
                                                {isDayTour ? "1 Day (Day Trip)" : tour.duration}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Category</span>
                                            <span className="text-sm font-black text-emerald-700 capitalize">{tour.category}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Best Season</span>
                                            <span className="text-sm font-black text-slate-800 flex items-center gap-1">
                                                <Sun className="h-3.5 w-3.5 text-amber-500" />
                                                {tour.bestTime || "Year Round"}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Start / Pickup</span>
                                            <span className="text-sm font-black text-slate-800 flex items-center gap-1 truncate">
                                                <MapPin className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                                                {tour.startLocation || "Colombo BIA Airport"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Tour Narrative Description */}
                                    <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-black text-slate-900">Tour Experience Overview</h3>
                                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                                                Private Chauffeur Tour
                                            </span>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium whitespace-pre-line">
                                            {tour.overview}
                                        </p>
                                    </div>

                                    {/* Key Expedition Highlights */}
                                    {Array.isArray(tour.highlights) && tour.highlights.length > 0 && (
                                        <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
                                            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                                <Sparkles className="h-5 w-5 text-emerald-600" />
                                                Key Expedition Highlights
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {tour.highlights.map((item, i) => (
                                                    <div key={i} className="flex items-start gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition">
                                                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                                                        <span className="text-sm font-bold text-slate-800">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Destinations Covered Section (Large High-Impact Editorial Layout) */}
                                    {Array.isArray(tour.destinations) && tour.destinations.length > 0 && (
                                        <div className="bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-8">
                                            {/* Header */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                                                <div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block mb-1">
                                                        Expedition Highlights &amp; Locations
                                                    </span>
                                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2.5">
                                                        <MapPin className="h-7 w-7 text-emerald-600 shrink-0" />
                                                        Destinations Covered
                                                    </h3>
                                                </div>
                                                <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200/80 shrink-0 self-start sm:self-auto">
                                                    {tour.destinations.length} Key Destination{tour.destinations.length > 1 ? "s" : ""}
                                                </span>
                                            </div>

                                            {/* Large 2-Column Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                                {tour.destinations.map((dest: any, idx: number) => {
                                                    const name = typeof dest === "string" ? dest : dest?.name || dest?.title || "";
                                                    const description = typeof dest === "object" ? dest?.description : null;
                                                    const image = typeof dest === "object" ? dest?.image : null;

                                                    if (!name) return null;

                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="group bg-slate-50/70 border border-slate-200/90 rounded-3xl overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                                        >
                                                            {/* Large Hero Image Container */}
                                                            {image ? (
                                                                <div
                                                                    onClick={() => setLightboxImage(cleanUrl(image))}
                                                                    className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-200 cursor-pointer"
                                                                >
                                                                    <Image
                                                                        src={cleanUrl(image)}
                                                                        alt={name}
                                                                        fill
                                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                    />
                                                                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-2 border border-white/20 shadow-md">
                                                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                                                        STOP {String(idx + 1).padStart(2, "0")}
                                                                    </div>
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                                                    <div className="absolute bottom-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-xl text-white opacity-0 group-hover:opacity-100 transition shadow-lg">
                                                                        <Maximize2 className="h-4 w-4" />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="relative h-36 w-full bg-gradient-to-br from-emerald-900 to-slate-900 p-6 flex items-center justify-between">
                                                                    <div className="bg-white/10 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-2 border border-white/20">
                                                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                                                        STOP {String(idx + 1).padStart(2, "0")}
                                                                    </div>
                                                                    <MapPin className="h-8 w-8 text-emerald-400/40" />
                                                                </div>
                                                            )}

                                                            {/* Large Content Area */}
                                                            <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                                                                <div className="space-y-2">
                                                                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-2.5">
                                                                        <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                                                                        {name}
                                                                    </h4>
                                                                    {description && (
                                                                        <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                                                                            {description}
                                                                        </p>
                                                                    )}
                                                                </div>

                                                                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                                                                    <span className="text-xs font-extrabold text-emerald-700 flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200/60">
                                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                                        Featured Route Stop #{idx + 1}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Primary Destination Link Card (if linked) */}
                                    {tour.destination && (
                                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-7 sm:p-9 rounded-3xl border border-slate-800 space-y-4 relative overflow-hidden shadow-xl">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block">
                                                        Featured Destination Hub
                                                    </span>
                                                    <h4 className="text-2xl font-black text-white">{tour.destination.name}</h4>
                                                    {tour.destination.shortDescription && (
                                                        <p className="text-xs text-slate-300 font-medium line-clamp-2 max-w-xl">
                                                            {tour.destination.shortDescription}
                                                        </p>
                                                    )}
                                                </div>
                                                <Link
                                                    href={`/destinations/${tour.destination.slug}`}
                                                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition shrink-0 flex items-center gap-2 shadow-md"
                                                >
                                                    <span>Destination Guide</span>
                                                    <ChevronRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* TAB 2: DETAILED TIMED ITINERARY */}
                            {activeTab === "itinerary" && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block">
                                                — Time-Stamped Expedition Route
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                                                {isDayTour ? "One Day Activity Times & Schedule" : `Day-by-Day Timed Itinerary (${tour.itinerary?.length || tour.daysCount} Days)`}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                                                ⏰ Activity Times Included
                                            </span>
                                        </div>
                                    </div>

                                    {/* TIMELINE LIST */}
                                    <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
                                        {Array.isArray(tour.itinerary) && tour.itinerary.map((item: ItineraryItem, idx: number) => {
                                            const timeString = getFormattedActivityTime(item, idx, isDayTour);
                                            const isExpanded = expandedItinerary[idx] !== false;

                                            return (
                                                <div key={idx} className="relative group">
                                                    {/* Timeline Bullet */}
                                                    <div className="absolute -left-[35px] sm:-left-[43px] top-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-emerald-600 text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-lg shadow-emerald-600/30 border-2 border-white">
                                                        {item.day || idx + 1}
                                                    </div>

                                                    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden transition-all hover:border-emerald-400 hover:shadow-md">
                                                        {/* Header Bar */}
                                                        <div
                                                            onClick={() => toggleItineraryItem(idx)}
                                                            className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                                                        >
                                                            <div className="space-y-1.5 flex-1">
                                                                {/* Time Pill Badge */}
                                                                <div className="flex flex-wrap items-center gap-2">
                                                                    <span className="inline-flex items-center gap-1.5 text-xs font-black bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3.5 py-1 rounded-full shadow-sm">
                                                                        <Clock className="h-3.5 w-3.5" />
                                                                        {timeString}
                                                                    </span>

                                                                    {item.location && (
                                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                                                            <MapPin className="h-3 w-3 text-emerald-600" />
                                                                            {item.location}
                                                                        </span>
                                                                    )}

                                                                    {item.meal && (
                                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                                                                            <Utensils className="h-3 w-3 text-amber-600" />
                                                                            {item.meal}
                                                                        </span>
                                                                    )}
                                                                </div>

                                                                <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-700 transition">
                                                                    {isDayTour ? `Stop ${idx + 1}: ${item.title}` : `Day ${item.day || idx + 1}: ${item.title}`}
                                                                </h4>
                                                            </div>

                                                            <div className="flex items-center gap-2 shrink-0">
                                                                <button
                                                                    type="button"
                                                                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
                                                                >
                                                                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* Expandable Body */}
                                                        {isExpanded && (
                                                            <div className="px-5 pb-6 sm:px-6 sm:pb-6 border-t border-slate-100 pt-4 space-y-4">
                                                                {item.image && (
                                                                    <div
                                                                        onClick={() => setLightboxImage(cleanUrl(item.image))}
                                                                        className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group/img"
                                                                    >
                                                                        <Image src={cleanUrl(item.image)} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover/img:scale-105" />
                                                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition flex items-center justify-center">
                                                                            <Maximize2 className="h-6 w-6 text-white" />
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                <p className="text-slate-600 text-sm leading-relaxed font-medium whitespace-pre-line">
                                                                    {item.description}
                                                                </p>

                                                                {/* Summary tags */}
                                                                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-500">
                                                                    <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                                                                        <Car className="h-3.5 w-3.5 text-emerald-600" /> Private AC Vehicle Transfer
                                                                    </span>
                                                                    <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                                                                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Dedicated Chauffeur Guide
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* TAB 3: INCLUSIONS & EXCLUSIONS */}
                            {activeTab === "inclusions" && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in duration-300">
                                    {/* Included Card */}
                                    <div className="bg-white p-7 sm:p-8 rounded-3xl border border-emerald-200 shadow-sm space-y-4">
                                        <h3 className="text-lg font-black text-emerald-800 flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                                            What&apos;s Included
                                        </h3>
                                        <ul className="space-y-3">
                                            {tour.included.map((inc, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                                                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                                    <span>{inc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Excluded Card */}
                                    <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                                        <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                                            <XCircle className="h-5 w-5 text-slate-400" />
                                            What&apos;s Excluded
                                        </h3>
                                        <ul className="space-y-3">
                                            {tour.excluded.map((exc, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-500">
                                                    <XCircle className="h-4 w-4 text-slate-300 shrink-0 mt-0.5" />
                                                    <span>{exc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* TAB 4: FAQS */}
                            {activeTab === "faqs" && tour.faqs && tour.faqs.length > 0 && (
                                <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 animate-in fade-in duration-300">
                                    <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                        <HelpCircle className="h-5 w-5 text-emerald-600" />
                                        Frequently Asked Questions
                                    </h3>
                                    <div className="space-y-4">
                                        {tour.faqs.map((faq, i) => (
                                            <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                                                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                                                    <Info className="h-4 w-4 text-emerald-600 shrink-0" />
                                                    {faq.question}
                                                </h4>
                                                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pl-6">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* RIGHT COLUMN: Sticky Luxury Booking Widget */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-7 space-y-6">

                                <div className="border-b border-slate-100 pb-5 space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block">
                                        Instant Booking &amp; Custom Quote
                                    </span>
                                    <div className="flex items-baseline justify-between mt-1">
                                        <span className="text-3xl font-black text-slate-900">${tour.discountPrice || tour.price}</span>
                                        <span className="text-xs text-slate-500 font-semibold">per person</span>
                                    </div>
                                </div>

                                {/* Dynamic Price Calculator Form */}
                                <form onSubmit={handleBookingSubmit} className="space-y-4">

                                    {/* Honeypot field (hidden) */}
                                    <div className="hidden" aria-hidden="true">
                                        <input
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            value={bookingForm.website}
                                            onChange={(e) => setBookingForm({ ...bookingForm, website: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-extrabold text-slate-700 mb-1">Number of Guests</label>
                                        <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-200">
                                            <button
                                                type="button"
                                                onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                                                className="h-9 w-9 rounded-xl bg-white border border-slate-200 font-black text-slate-700 flex items-center justify-center hover:bg-slate-100"
                                            >
                                                -
                                            </button>
                                            <span className="flex-1 text-center font-black text-sm text-slate-800">
                                                {travelersCount} Traveler{travelersCount > 1 ? "s" : ""}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => setTravelersCount(travelersCount + 1)}
                                                className="h-9 w-9 rounded-xl bg-white border border-slate-200 font-black text-slate-700 flex items-center justify-center hover:bg-slate-100"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-extrabold text-slate-700 mb-1">Your Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Jane Smith"
                                            value={bookingForm.name}
                                            onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                                            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-extrabold text-slate-700 mb-1">Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="jane@example.com"
                                            value={bookingForm.email}
                                            onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                                            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-extrabold text-slate-700 mb-1">Phone / WhatsApp *</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="+1 234 567 890"
                                            value={bookingForm.phone}
                                            onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                                            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-extrabold text-slate-700 mb-1">Target Departure Date *</label>
                                        <input
                                            type="date"
                                            required
                                            value={bookingForm.travelDate}
                                            onChange={(e) => setBookingForm({ ...bookingForm, travelDate: e.target.value })}
                                            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                                        />
                                    </div>

                                    {/* Estimated Total Calculation */}
                                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                                        <span className="text-xs font-extrabold text-emerald-900">Estimated Total:</span>
                                        <span className="text-xl font-black text-emerald-700">${totalPrice} USD</span>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full h-13 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl transition shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                    >
                                        {submitting ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin text-white" />
                                                <span>Submitting Request...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4" />
                                                <span>Book This Expedition</span>
                                            </>
                                        )}
                                    </button>

                                    {/* WhatsApp Direct Chat Option */}
                                    <a
                                        href={`https://wa.me/94777123456?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 border border-slate-800"
                                    >
                                        <MessageSquare className="h-4 w-4 text-emerald-400" />
                                        <span>Instant WhatsApp Chat</span>
                                    </a>

                                    <p className="text-[11px] text-center text-slate-400 font-bold flex items-center justify-center gap-1 pt-1">
                                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Guaranteed 100% Tailor-Made &amp; Secure
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                SIMILAR / RECOMMENDED TOURS SECTION
            ══════════════════════════════════════════════════════════ */}
            {relatedTours.length > 0 && (
                <section className="py-16 bg-white border-t border-slate-200">
                    <div className="max-w-[2100px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <span className="text-xs font-black uppercase tracking-widest text-emerald-600 block">
                                    — Discover More Island Journeys
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                                    You Might Also Like
                                </h2>
                            </div>
                            <Link
                                href="/tours"
                                className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-600 hover:text-emerald-700"
                            >
                                <span>Browse All Ceylon Expeditions</span>
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedTours.map((relTour) => (
                                <div key={relTour.id} className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-300 flex flex-col justify-between">
                                    <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                                        <Image src={cleanUrl(relTour.image)} alt={relTour.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                        <div className="absolute top-4 left-4 z-10 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider">
                                            {relTour.category}
                                        </div>
                                        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                                            <Clock className="h-3.5 w-3.5 text-sky-400" />
                                            <span>{relTour.duration}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                                        <div>
                                            <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition leading-snug">
                                                {relTour.title}
                                            </h3>
                                            {relTour.shortDescription && (
                                                <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-1">
                                                    {relTour.shortDescription}
                                                </p>
                                            )}
                                        </div>
                                        <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                                            <div>
                                                <span className="text-[9px] font-bold uppercase text-slate-400 block">Starting From</span>
                                                <span className="text-xl font-black text-slate-900">${relTour.price}</span>
                                            </div>
                                            <Link
                                                href={`/tours/${relTour.slug}`}
                                                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1"
                                            >
                                                <span>Explore</span>
                                                <ChevronRight className="h-3.5 w-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ══════════════════════════════════════════════════════════
                LIGHTBOX IMAGE MODAL
            ══════════════════════════════════════════════════════════ */}
            {lightboxImage && (
                <div
                    onClick={() => setLightboxImage(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-pointer animate-in fade-in"
                >
                    <div className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden">
                        <Image src={lightboxImage} alt="Expanded View" fill className="object-contain" />
                    </div>
                    <button
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                    >
                        <XCircle className="h-6 w-6" />
                    </button>
                </div>
            )}

            {/* ══════════════════════════════════════════════════════════
                PAYMENT CHECKOUT MODAL
            ══════════════════════════════════════════════════════════ */}
            {isPaymentModalOpen && createdBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                    <div className="w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest block">Booking Confirmation</span>
                                <h3 className="text-lg font-black text-white">Ref: {createdBooking.bookingNumber}</h3>
                            </div>
                            <button
                                onClick={() => setIsPaymentModalOpen(false)}
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                            >
                                <XCircle className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6 text-slate-800">
                            {paymentSuccess ? (
                                <div className="text-center py-6 space-y-4">
                                    <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="h-10 w-10" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900">Payment Successful!</h4>
                                        <p className="text-xs font-semibold text-slate-500 mt-1">
                                            Invoice <span className="font-mono font-bold text-emerald-700">{paymentSuccess.invoiceNumber}</span> generated.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl text-xs font-semibold text-slate-600 border border-slate-200">
                                        A confirmation email with your itinerary and receipt has been sent to <span className="font-bold text-slate-800">{createdBooking.customerEmail}</span>.
                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsPaymentModalOpen(false);
                                            setPaymentSuccess(null);
                                            setCreatedBooking(null);
                                        }}
                                        className="w-full py-3 bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-700"
                                    >
                                        Close Window
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200 flex items-center justify-between text-xs">
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-500 uppercase">Tour Experience</span>
                                            <div className="font-extrabold text-slate-900 text-sm">{tour.title}</div>
                                            <span className="text-slate-500 font-medium">{createdBooking.numberOfAdults} Guests • {new Date(createdBooking.travelDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase">Total Amount</span>
                                            <div className="text-xl font-black text-emerald-700">${createdBooking.totalAmount} USD</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="block text-xs font-bold text-slate-700">Select Secure Payment Gateway</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {["Credit Card (Stripe)", "PayPal", "Bank Transfer"].map((method) => (
                                                <button
                                                    key={method}
                                                    type="button"
                                                    onClick={() => setPaymentMethod(method)}
                                                    className={`p-3 rounded-2xl border text-xs font-bold transition flex items-center gap-2 cursor-pointer ${paymentMethod === method
                                                        ? "bg-slate-900 text-white border-slate-900 shadow-md"
                                                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                                                        }`}
                                                >
                                                    <Check className={`h-4 w-4 ${paymentMethod === method ? "opacity-100" : "opacity-0"}`} />
                                                    <span>{method}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-100 pt-4 flex items-center justify-end gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setIsPaymentModalOpen(false)}
                                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs"
                                        >
                                            Pay Later
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleProcessOnlinePayment}
                                            disabled={processingPayment}
                                            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                                        >
                                            {processingPayment ? <Loader2 className="h-4 w-4 animate-spin text-white" /> : null}
                                            <span>Pay ${createdBooking.totalAmount} Now</span>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
