"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import ImagePickerModal from "@/components/admin/image-picker-modal";
import {
    Save,
    Loader2,
    Plus,
    Trash2,
    Image as ImageIcon,
    ArrowLeft,
    MapPin,
    Calendar,
    Sparkles,
    Car,
    ShieldCheck,
    Globe,
    Film,
    FileText,
} from "lucide-react";
import { useAuthStore } from "@/stores/auth.store";

interface CoveredDestination {
    name: string;
    description: string;
    image: string;
    nights: number;
}

interface ItineraryDay {
    dayNumber: number;
    title: string;
    location: string;
    route: string;
    description: string;
    image: string;
    activities: string[];
    attractions: string[];
    travelTime: string;
    distance: string;
    optionalActivities: string[];
    meals: { breakfast: boolean; lunch: boolean; dinner: boolean };
    accommodation: string;
}

interface VehicleOption {
    id: string;
    type: string;
    image: string;
    minPax: number;
    maxPax: number;
    priceSupplement: string;
    features: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

const CATEGORIES = [
    { label: "Cultural Tours", value: "cultural & heritage tour" },
    { label: "Wildlife & Safari", value: "wildlife & safari tour" },
    { label: "Beach & Coastal", value: "beach tour" },
    { label: "Hill Country & Nature", value: "hill country tour" },
    { label: "Round Tours", value: "round tour" },
    { label: "One Day Tours", value: "one day tour" },
    { label: "Custom Tours", value: "custom tour" },
];

export default function AdminEditTourPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const tourId = resolvedParams.id;
    const router = useRouter();
    const { accessToken, isAuthenticated } = useAuthStore();

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Image Picker State
    const [imagePickerOpen, setImagePickerOpen] = useState(false);
    const [imagePickerTarget, setImagePickerTarget] = useState<string>("cover");
    const [pickerCallback, setPickerCallback] = useState<((url: string) => void) | null>(null);

    // Form State
    const [form, setForm] = useState({
        title: "",
        slug: "",
        category: "cultural & heritage tour",
        daysCount: 1,
        nightsCount: 0,
        price: 100,
        currency: "USD",
        shortDescription: "",
        overview: "",
        image: "",
        published: true,
        popular: false,

        startLocation: "Colombo",
        endLocation: "Kandy",
        travelDistance: "150 km",
        estimatedTravelTime: "4 hours",
        googleMapLocation: "",
        routeText: "",

        bestTime: "November to April",
        whatToBring: "",
        importantInfo: "",
        safetyInfo: "",
        accessibility: "",

        videoUrl: "",
        seoTitle: "",
        seoDescription: "",
        ogImage: "",
        canonicalUrl: "",
    });

    const [destinationsList, setDestinationsList] = useState<CoveredDestination[]>([]);
    const [activeDayIdx, setActiveDayIdx] = useState(0);
    const [itineraryDays, setItineraryDays] = useState<ItineraryDay[]>([]);
    const [highlights, setHighlights] = useState<string[]>([]);
    const [includedActivities, setIncludedActivities] = useState<string[]>([]);
    const [excludedActivities, setExcludedActivities] = useState<string[]>([]);
    const [vehicles, setVehicles] = useState<VehicleOption[]>([]);
    const [inclusions, setInclusions] = useState<string[]>([]);
    const [exclusions, setExclusions] = useState<string[]>([]);
    const [gallery, setGallery] = useState<string[]>([]);
    const [faqs, setFaqs] = useState<FAQItem[]>([]);

    const [newHighlight, setNewHighlight] = useState("");

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
            return;
        }

        const fetchTour = async () => {
            try {
                setLoading(true);
                const res = await apiClient.get(`/tours/${tourId}`);
                if (res.data?.success && res.data?.data) {
                    const tour = res.data.data;
                    setForm({
                        title: tour.title || "",
                        slug: tour.slug || "",
                        category: tour.category || "cultural & heritage tour",
                        daysCount: tour.daysCount || 1,
                        nightsCount: tour.nightsCount || 0,
                        price: tour.price || 0,
                        currency: tour.currency || "USD",
                        shortDescription: tour.shortDescription || "",
                        overview: tour.overview || "",
                        image: tour.image || "",
                        published: tour.published !== false,
                        popular: Boolean(tour.popular),

                        startLocation: tour.startLocation || "",
                        endLocation: tour.endLocation || "",
                        travelDistance: tour.travelDistance || "",
                        estimatedTravelTime: tour.estimatedTravelTime || "",
                        googleMapLocation: tour.googleMapLocation || "",
                        routeText: tour.routeText || "",

                        bestTime: tour.bestTime || "",
                        whatToBring: tour.whatToBring || "",
                        importantInfo: tour.importantInfo || "",
                        safetyInfo: tour.safetyInfo || "",
                        accessibility: tour.accessibility || "",

                        videoUrl: tour.videoUrl || "",
                        seoTitle: tour.seoTitle || "",
                        seoDescription: tour.seoDescription || "",
                        ogImage: tour.ogImage || "",
                        canonicalUrl: tour.canonicalUrl || "",
                    });

                    if (Array.isArray(tour.destinations)) setDestinationsList(tour.destinations);
                    if (Array.isArray(tour.itinerary)) setItineraryDays(tour.itinerary);
                    if (Array.isArray(tour.highlights)) setHighlights(tour.highlights);
                    if (Array.isArray(tour.vehicleOptions)) setVehicles(tour.vehicleOptions);
                    if (Array.isArray(tour.included)) setInclusions(tour.included);
                    if (Array.isArray(tour.excluded)) setExclusions(tour.excluded);
                    if (Array.isArray(tour.gallery)) setGallery(tour.gallery);
                    if (Array.isArray(tour.faqs)) setFaqs(tour.faqs);
                }
            } catch (err: any) {
                console.error(err);
                toast.error("Failed to load tour details.");
            } finally {
                setLoading(false);
            }
        };

        fetchTour();
    }, [tourId, accessToken, isAuthenticated, router]);

    const triggerImagePicker = (target: string, cb?: (url: string) => void) => {
        setImagePickerTarget(target);
        if (cb) setPickerCallback(() => cb);
        else setPickerCallback(null);
        setImagePickerOpen(true);
    };

    const handleSelectImage = (url: string) => {
        if (pickerCallback) {
            pickerCallback(url);
        } else if (imagePickerTarget === "cover") {
            setForm((prev) => ({ ...prev, image: url }));
        } else if (imagePickerTarget === "gallery") {
            setGallery((prev) => [...prev, url]);
        }
        setImagePickerOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.title || !form.price || !form.image) {
            toast.error("Please fill required fields (Title, Price, Cover Image).");
            return;
        }

        setSubmitting(true);
        try {
            const durationStr = `${form.daysCount} Days / ${form.nightsCount} Nights`;

            const payload = {
                ...form,
                duration: durationStr,
                destinations: destinationsList,
                itinerary: itineraryDays,
                highlights,
                includedActivities,
                excludedActivities,
                vehicleOptions: vehicles,
                included: inclusions,
                excluded: exclusions,
                gallery,
                faqs,
                overview: form.overview || form.shortDescription || form.title,
            };

            const res = await apiClient.put(`/tours/${tourId}`, payload);

            if (res.data?.success) {
                toast.success("Tour package updated successfully!");
                router.push("/admin/tours");
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to update tour package.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
                <Loader2 className="h-8 w-8 text-[#465FFF] animate-spin" />
                <p className="text-[#6B7280] font-medium text-base">Loading tour details...</p>
            </div>
        );
    }

    const currentDay = itineraryDays[activeDayIdx] || {
        dayNumber: 1,
        title: "Day Details",
        location: "",
        route: "",
        description: "",
        image: "",
        activities: [],
        attractions: [],
        travelTime: "",
        distance: "",
        optionalActivities: [],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "",
    };

    return (
        <form onSubmit={handleSubmit} className="w-full pb-28 space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E7EC] pb-5">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/tours"
                        className="p-2.5 rounded-lg border border-[#E4E7EC] bg-white text-[#6B7280] hover:text-[#111827] transition"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-[#111827] tracking-tight">Edit Tour Package</h1>
                        <p className="text-sm text-[#6B7280] mt-0.5">Tour Management &gt; Edit &gt; {form.title}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/tours"
                        className="px-5 py-2.5 border border-[#E4E7EC] bg-white text-[#374151] font-semibold text-sm rounded-lg hover:bg-[#F9FAFB] transition"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#465FFF] hover:bg-[#3441b8] text-white font-semibold text-sm rounded-lg shadow-sm transition disabled:opacity-60"
                    >
                        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        <span>{submitting ? "Updating..." : "Update Tour"}</span>
                    </button>
                </div>
            </div>

            {/* SECTION 01: BASIC DETAILS */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                    <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                        <FileText className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#111827]">01. Basic Details</h2>
                        <p className="text-xs text-[#6B7280]">Update core details and pricing.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <label className="block text-sm font-medium text-[#111827] mb-2">Tour Title</label>
                        <input
                            type="text"
                            required
                            value={form.title}
                            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                            className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">Slug</label>
                        <input
                            type="text"
                            value={form.slug}
                            onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                            className="w-full h-12 px-4 bg-[#F9FAFB] border border-[#E4E7EC] rounded-lg text-sm font-mono outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">Tour Category</label>
                        <select
                            value={form.category}
                            onChange={(e) => {
                                const selected = e.target.value;
                                const isOneDay = selected.toLowerCase().includes("one day");
                                setForm((p) => ({
                                    ...p,
                                    category: selected,
                                    ...(isOneDay ? { daysCount: 1, nightsCount: 0 } : {}),
                                }));
                            }}
                            className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none cursor-pointer"
                        >
                            {CATEGORIES.map((c) => (
                                <option key={c.value} value={c.value}>
                                    {c.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                Days <span className="text-[#EF4444]">*</span>
                            </label>
                            <input
                                type="number"
                                required
                                disabled={form.category.toLowerCase().includes("one day")}
                                value={form.daysCount}
                                onChange={(e) => setForm((p) => ({ ...p, daysCount: parseInt(e.target.value) || 1 }))}
                                className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base disabled:bg-[#F3F4F6] disabled:cursor-not-allowed disabled:text-[#6B7280]"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                Nights <span className="text-[#EF4444]">*</span>
                            </label>
                            <input
                                type="number"
                                required
                                disabled={form.category.toLowerCase().includes("one day")}
                                value={form.nightsCount}
                                onChange={(e) => setForm((p) => ({ ...p, nightsCount: parseInt(e.target.value) || 0 }))}
                                className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base disabled:bg-[#F3F4F6] disabled:cursor-not-allowed disabled:text-[#6B7280]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Price (USD) <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            required
                            value={form.price}
                            onChange={(e) => setForm((p) => ({ ...p, price: parseFloat(e.target.value) || 0 }))}
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base"
                        />
                    </div>

                    <div className="lg:col-span-3">
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Full Overview <span className="text-[#EF4444]">*</span>
                        </label>
                        <textarea
                            rows={5}
                            required
                            value={form.overview}
                            onChange={(e) => setForm((p) => ({ ...p, overview: e.target.value }))}
                            className="w-full p-4 border border-[#E4E7EC] rounded-lg text-base"
                        />
                    </div>

                    <div className="lg:col-span-3">
                        <label className="block text-sm font-medium text-[#111827] mb-2">Cover Image</label>
                        <div
                            onClick={() => triggerImagePicker("cover")}
                            className="border-2 border-dashed border-[#E4E7EC] rounded-xl p-4 bg-[#F9FAFB] flex flex-col items-center justify-center cursor-pointer hover:border-[#465FFF] max-w-md"
                        >
                            {form.image ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={form.image} alt="Cover" className="h-44 w-full object-cover rounded-lg" />
                            ) : (
                                <ImageIcon className="h-8 w-8 text-[#465FFF]" />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 02: DESTINATIONS & ROUTE */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                    <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#111827]">02. Destinations & Route</h2>
                        <p className="text-xs text-[#6B7280]">Pickup/drop-off locations and covered stops.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Start Location <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={form.startLocation}
                            onChange={(e) => setForm((p) => ({ ...p, startLocation: e.target.value }))}
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            End Location <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={form.endLocation}
                            onChange={(e) => setForm((p) => ({ ...p, endLocation: e.target.value }))}
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 03: ITINERARY */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                    <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                        <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#111827]">03. Itinerary</h2>
                        <p className="text-xs text-[#6B7280]">Day by day tour schedule.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {itineraryDays.map((day, idx) => (
                        <div key={idx} className="p-4 border border-[#E4E7EC] rounded-xl bg-[#F9FAFB] space-y-2">
                            <h4 className="font-bold text-sm text-[#111827]">Day {day.dayNumber}: {day.title}</h4>
                            <p className="text-xs text-[#6B7280]">{day.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 04: HIGHLIGHTS & EXPERIENCES */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                    <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#111827]">04. Highlights & Experiences</h2>
                        <p className="text-xs text-[#6B7280]">Key experiences list.</p>
                    </div>
                </div>

                <div className="space-y-2">
                    {highlights.map((h, i) => (
                        <div key={i} className="p-3 border rounded-lg bg-[#F9FAFB] text-sm font-medium text-[#111827]">
                            {h}
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 05: VEHICLE OPTIONS */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                    <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                        <Car className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#111827]">05. Vehicle Options</h2>
                        <p className="text-xs text-[#6B7280]">Available transport options.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {vehicles.map((v) => (
                        <div key={v.id} className="p-4 border rounded-xl bg-[#F9FAFB] space-y-1">
                            <p className="font-bold text-sm">{v.type}</p>
                            <p className="text-xs text-[#6B7280]">{v.minPax}-{v.maxPax} Pax | {v.priceSupplement}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Sticky Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E4E7EC] p-4 shadow-lg flex items-center justify-end gap-4 z-40">
                <Link
                    href="/admin/tours"
                    className="px-6 py-2.5 border border-[#E4E7EC] bg-white text-[#374151] font-semibold text-sm rounded-lg hover:bg-[#F9FAFB] transition"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-8 py-2.5 bg-[#465FFF] hover:bg-[#3441b8] text-white font-bold text-sm rounded-lg shadow-sm transition disabled:opacity-60"
                >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                    <span>{submitting ? "Updating..." : "Update Tour"}</span>
                </button>
            </div>

            {/* Image Picker Modal */}
            <ImagePickerModal
                isOpen={imagePickerOpen}
                onClose={() => setImagePickerOpen(false)}
                onSelectImage={handleSelectImage}
                title="Select Image"
            />
        </form>
    );
}
