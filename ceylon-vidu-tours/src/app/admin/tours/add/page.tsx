"use client";

import { useState, useEffect } from "react";
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
    HelpCircle,
    Search,
    Check,
} from "lucide-react";
import { useAuthStore } from "@/stores/auth.store";

// ============================================
// Types
// ============================================
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

export default function AdminAddTourPage() {
    const router = useRouter();
    const { accessToken, isAuthenticated } = useAuthStore();

    const [submitting, setSubmitting] = useState(false);

    // Image Picker State
    const [imagePickerOpen, setImagePickerOpen] = useState(false);
    const [imagePickerTarget, setImagePickerTarget] = useState<string>("cover");
    const [pickerCallback, setPickerCallback] = useState<((url: string) => void) | null>(null);

    // Form State
    const [form, setForm] = useState({
        // 01 Basic Details
        title: "",
        slug: "",
        category: "cultural & heritage tour",
        daysCount: 3,
        nightsCount: 2,
        price: 250,
        currency: "USD",
        shortDescription: "",
        overview: "",
        image: "",
        published: true,

        // 02 Destinations & Route
        startLocation: "Colombo",
        endLocation: "Kandy",
        travelDistance: "150 km",
        estimatedTravelTime: "4 hours",
        googleMapLocation: "",
        routeText: "",

        // 06 Inclusions & Practical Info
        bestTime: "November to April",
        whatToBring: "",
        importantInfo: "",
        safetyInfo: "",
        accessibility: "",

        // 07 Media
        videoUrl: "",

        // 08 SEO
        seoTitle: "",
        seoDescription: "",
        ogImage: "",
        canonicalUrl: "",
    });

    // 02 Destinations List
    const [destinationsList, setDestinationsList] = useState<CoveredDestination[]>([
        {
            name: "Sigiriya",
            description: "Ancient rock fortress and UNESCO heritage site.",
            image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800",
            nights: 1,
        },
        {
            name: "Kandy",
            description: "Cultural capital of Sri Lanka.",
            image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800",
            nights: 1,
        },
    ]);

    // 03 Itinerary Days List
    const [activeDayIdx, setActiveDayIdx] = useState(0);
    const [itineraryDays, setItineraryDays] = useState<ItineraryDay[]>([
        {
            dayNumber: 1,
            title: "Colombo to Sigiriya",
            location: "Sigiriya",
            route: "Colombo -> Dambulla -> Sigiriya",
            description:
                "Pick up from Colombo and drive to Sigiriya. Visit the Sigiriya Rock Fortress in the evening and enjoy scenic views.",
            image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800",
            activities: ["Sigiriya Rock Fortress Visit", "Village Tour"],
            attractions: ["Sigiriya", "Dambulla Cave Temple"],
            travelTime: "4 hours",
            distance: "150 km",
            optionalActivities: ["Hot Air Balloon", "Jeep Safari"],
            meals: { breakfast: true, lunch: true, dinner: true },
            accommodation: "No Accommodation",
        },
        {
            dayNumber: 2,
            title: "Sigiriya to Kandy",
            location: "Kandy",
            route: "Sigiriya -> Spice Garden -> Kandy",
            description: "Explore Spice Gardens and proceed to Kandy for Tooth Relic ceremony.",
            image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800",
            activities: ["Temple of the Tooth Visit", "Cultural Dance Show"],
            attractions: ["Temple of Tooth", "Kandy Lake"],
            travelTime: "3 hours",
            distance: "90 km",
            optionalActivities: ["Botanical Garden Walk"],
            meals: { breakfast: true, lunch: false, dinner: true },
            accommodation: "3-Star Hotel",
        },
    ]);

    // 04 Highlights & Experiences
    const [highlights, setHighlights] = useState<string[]>([
        "Explore the ancient Sigiriya Rock Fortress",
        "Visit Dambulla Cave Temple",
        "Discover the Temple of the Tooth in Kandy",
        "Experience local village life",
        "Enjoy scenic landscapes and cultural sites",
    ]);
    const [includedActivities, setIncludedActivities] = useState<string[]>([
        "Guided tour at Sigiriya",
        "Dambulla Cave Temple visit",
        "Kandy city tour",
    ]);
    const [excludedActivities, setExcludedActivities] = useState<string[]>([
        "Entrance fees",
        "Personal expenses",
        "Optional activities",
    ]);

    // 05 Vehicle Options
    const [vehicles, setVehicles] = useState<VehicleOption[]>([
        {
            id: "1",
            type: "Standard Car",
            image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600",
            minPax: 1,
            maxPax: 3,
            priceSupplement: "Included",
            features: "Air Conditioned, Comfortable for small groups",
        },
        {
            id: "2",
            type: "SUV",
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600",
            minPax: 3,
            maxPax: 4,
            priceSupplement: "+ $40",
            features: "Air Conditioned, Ideal for families",
        },
        {
            id: "3",
            type: "Van",
            image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600",
            minPax: 5,
            maxPax: 8,
            priceSupplement: "+ $75",
            features: "Spacious and comfortable",
        },
    ]);

    // 06 Inclusions & Exclusions
    const [inclusions, setInclusions] = useState<string[]>([
        "Private air-conditioned vehicle with driver-guide",
        "All driver charges, tolls and parking fees",
        "Hotel pickups & airport transfers",
        "Bottled water during tour",
    ]);
    const [exclusions, setExclusions] = useState<string[]>([
        "International airfare & visas",
        "Monument & attraction entry tickets",
        "Personal expenditure & tips",
    ]);

    // 07 Media & FAQ
    const [gallery, setGallery] = useState<string[]>([
        "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
        "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800",
    ]);

    const [faqs, setFaqs] = useState<FAQItem[]>([
        { question: "Is this a private tour?", answer: "Yes, all our tours are 100% private." },
        { question: "What is included in the price?", answer: "Private transport, driver-guide, fuel & tolls." },
        { question: "Can the itinerary be customized?", answer: "Yes, we can tailor the itinerary to your needs." },
    ]);

    // Tag Inputs
    const [newHighlight, setNewHighlight] = useState("");
    const [newIncAct, setNewIncAct] = useState("");
    const [newExcAct, setNewExcAct] = useState("");
    const [actInput, setActInput] = useState("");
    const [faqQ, setFaqQ] = useState("");
    const [faqA, setFaqA] = useState("");

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
        }
    }, [accessToken, isAuthenticated, router]);

    const handleTitleChange = (val: string) => {
        const generatedSlug = val
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");
        setForm((prev) => ({ ...prev, title: val, slug: generatedSlug }));
    };

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

            const res = await apiClient.post("/tours", payload);

            if (res.data?.success) {
                toast.success("Tour package created successfully!");
                router.push("/admin/tours");
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to create tour package.");
        } finally {
            setSubmitting(false);
        }
    };

    const currentDay = itineraryDays[activeDayIdx] || itineraryDays[0];

    return (
        <form onSubmit={handleSubmit} className="w-full pb-28 space-y-8">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E7EC] pb-5">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/tours"
                        className="p-2.5 rounded-lg border border-[#E4E7EC] bg-white text-[#6B7280] hover:text-[#111827] transition"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-[#111827] tracking-tight">Add Tour Package</h1>
                        <p className="text-sm text-[#6B7280] mt-0.5">Tour Management &gt; Create New Tour</p>
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
                        <span>{submitting ? "Saving..." : "Save Tour Package"}</span>
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
                        <p className="text-xs text-[#6B7280]">General information and pricing structure.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Tour Title <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={form.title}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            placeholder="Sigiriya & Kandy Cultural Tour"
                            className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none focus:border-[#465FFF]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">URL Slug</label>
                        <input
                            type="text"
                            value={form.slug}
                            onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                            placeholder="sigiriya-kandy-cultural-tour"
                            className="w-full h-12 px-4 bg-[#F9FAFB] border border-[#E4E7EC] rounded-lg text-sm text-[#111827] font-mono outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Tour Category <span className="text-[#EF4444]">*</span>
                        </label>
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
                                min={1}
                                required
                                disabled={form.category.toLowerCase().includes("one day")}
                                value={form.daysCount}
                                onChange={(e) => setForm((p) => ({ ...p, daysCount: parseInt(e.target.value) || 1 }))}
                                className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none disabled:bg-[#F3F4F6] disabled:cursor-not-allowed disabled:text-[#6B7280]"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                Nights <span className="text-[#EF4444]">*</span>
                            </label>
                            <input
                                type="number"
                                min={0}
                                required
                                disabled={form.category.toLowerCase().includes("one day")}
                                value={form.nightsCount}
                                onChange={(e) => setForm((p) => ({ ...p, nightsCount: parseInt(e.target.value) || 0 }))}
                                className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none disabled:bg-[#F3F4F6] disabled:cursor-not-allowed disabled:text-[#6B7280]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">Starting Price (USD) <span className="text-[#EF4444]">*</span></label>
                        <input
                            type="number"
                            step="0.01"
                            required
                            value={form.price}
                            onChange={(e) => setForm((p) => ({ ...p, price: parseFloat(e.target.value) || 0 }))}
                            className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none"
                        />
                    </div>

                    <div className="lg:col-span-3">
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Short Description <span className="text-[#EF4444]">*</span>
                        </label>
                        <textarea
                            rows={2}
                            required
                            value={form.shortDescription}
                            onChange={(e) => setForm((p) => ({ ...p, shortDescription: e.target.value }))}
                            placeholder="Brief summary displayed on tour cards..."
                            className="w-full p-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none"
                        />
                    </div>

                    <div className="lg:col-span-3">
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Full Overview / Description <span className="text-[#EF4444]">*</span>
                        </label>
                        <textarea
                            rows={5}
                            required
                            value={form.overview}
                            onChange={(e) => setForm((p) => ({ ...p, overview: e.target.value }))}
                            placeholder="Complete overview of the tour package experience..."
                            className="w-full p-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none"
                        />
                    </div>

                    <div className="lg:col-span-3">
                        <label className="block text-sm font-medium text-[#111827] mb-2">Cover Image <span className="text-[#EF4444]">*</span></label>
                        <div
                            onClick={() => triggerImagePicker("cover")}
                            className="border-2 border-dashed border-[#E4E7EC] rounded-xl p-5 bg-[#F9FAFB] flex flex-col items-center justify-center cursor-pointer hover:border-[#465FFF] transition max-w-md"
                        >
                            {form.image ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={form.image} alt="Cover" className="h-44 w-full object-cover rounded-lg" />
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-[#6B7280]">
                                    <ImageIcon className="h-8 w-8 text-[#465FFF]" />
                                    <span className="text-sm font-semibold text-[#111827]">Select Cover Image</span>
                                </div>
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
                        <p className="text-xs text-[#6B7280]">Pickup/drop-off locations, covered stops, and distance details.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Start Location (Pickup) <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={form.startLocation}
                            onChange={(e) => setForm((p) => ({ ...p, startLocation: e.target.value }))}
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            End Location (Drop-off) <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={form.endLocation}
                            onChange={(e) => setForm((p) => ({ ...p, endLocation: e.target.value }))}
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Total Distance <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={form.travelDistance}
                            onChange={(e) => setForm((p) => ({ ...p, travelDistance: e.target.value }))}
                            placeholder="e.g. 150 km"
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                            Estimated Travel Time <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={form.estimatedTravelTime}
                            onChange={(e) => setForm((p) => ({ ...p, estimatedTravelTime: e.target.value }))}
                            placeholder="e.g. 4 hours"
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#111827] mb-2">Google Maps Link</label>
                        <input
                            type="text"
                            value={form.googleMapLocation}
                            onChange={(e) => setForm((p) => ({ ...p, googleMapLocation: e.target.value }))}
                            placeholder="https://maps.google.com/..."
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-sm font-mono outline-none"
                        />
                    </div>
                </div>

                <div className="border-t border-[#F2F4F7] pt-6 space-y-4">
                    <h3 className="text-base font-bold text-[#111827]">Destinations Covered</h3>

                    <div className="space-y-4">
                        {destinationsList.map((dest, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-[#E4E7EC] rounded-xl bg-[#F9FAFB]">
                                {dest.image ? (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img src={dest.image} alt={dest.name} className="h-16 w-24 rounded-lg object-cover" />
                                ) : (
                                    <div className="h-16 w-24 bg-[#EBF1FF] rounded-lg flex items-center justify-center text-[#465FFF]">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                )}
                                <div className="flex-1 space-y-1.5 w-full">
                                    <input
                                        type="text"
                                        value={dest.name}
                                        onChange={(e) => {
                                            const updated = [...destinationsList];
                                            updated[idx].name = e.target.value;
                                            setDestinationsList(updated);
                                        }}
                                        placeholder="Destination Name"
                                        className="font-bold text-base text-[#111827] bg-transparent outline-none border-b border-dashed border-[#9CA3AF] w-full"
                                    />
                                    <input
                                        type="text"
                                        value={dest.description}
                                        onChange={(e) => {
                                            const updated = [...destinationsList];
                                            updated[idx].description = e.target.value;
                                            setDestinationsList(updated);
                                        }}
                                        placeholder="Short description..."
                                        className="text-xs text-[#6B7280] bg-transparent outline-none w-full"
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-semibold text-[#6B7280]">Nights:</span>
                                    <input
                                        type="number"
                                        min={0}
                                        value={dest.nights}
                                        onChange={(e) => {
                                            const updated = [...destinationsList];
                                            updated[idx].nights = parseInt(e.target.value) || 0;
                                            setDestinationsList(updated);
                                        }}
                                        className="w-14 h-9 px-2 border border-[#E4E7EC] rounded-lg text-center font-bold"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setDestinationsList(destinationsList.filter((_, i) => i !== idx))}
                                        className="p-2 text-[#EF4444] hover:bg-[#FEF3F2] rounded-lg"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setDestinationsList([
                                ...destinationsList,
                                { name: "New Stop", description: "Landmark visit", image: "", nights: 1 },
                            ])
                        }
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#EBF1FF] text-[#465FFF] text-sm font-semibold rounded-lg hover:bg-[#dbe7ff] transition"
                    >
                        <Plus className="h-4 w-4" />
                        <span>Add Destination</span>
                    </button>
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
                        <p className="text-xs text-[#6B7280]">Day by day breakdown of activities and schedule.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Days List Side */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-[#111827]">Itinerary Days</h3>
                        <div className="space-y-2">
                            {itineraryDays.map((day, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveDayIdx(idx)}
                                    className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between ${activeDayIdx === idx
                                        ? "border-[#465FFF] bg-[#EBF1FF] text-[#465FFF]"
                                        : "border-[#E4E7EC] hover:bg-[#F9FAFB] text-[#111827]"
                                        }`}
                                >
                                    <div>
                                        <p className="font-bold text-sm">Day {String(idx + 1).padStart(2, "0")}</p>
                                        <p className="text-xs truncate max-w-[160px]">{day.title}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (itineraryDays.length > 1) {
                                                setItineraryDays(itineraryDays.filter((_, i) => i !== idx));
                                                setActiveDayIdx(0);
                                            }
                                        }}
                                        className="p-1 text-[#EF4444] hover:bg-[#FEF3F2] rounded"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                const newNum = itineraryDays.length + 1;
                                setItineraryDays([
                                    ...itineraryDays,
                                    {
                                        dayNumber: newNum,
                                        title: `Day ${newNum} Schedule`,
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
                                    },
                                ]);
                                setActiveDayIdx(itineraryDays.length);
                            }}
                            className="w-full py-2.5 bg-[#465FFF] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2"
                        >
                            <Plus className="h-4 w-4" />
                            <span>Add Day</span>
                        </button>
                    </div>

                    {/* Day Details Side */}
                    <div className="lg:col-span-2 border border-[#E4E7EC] rounded-xl p-6 bg-[#F9FAFB] space-y-4">
                        <h4 className="font-bold text-base text-[#111827]">Editing Day {currentDay.dayNumber} Details</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-[#111827] mb-1">Title</label>
                                <input
                                    type="text"
                                    value={currentDay.title}
                                    onChange={(e) => {
                                        const updated = [...itineraryDays];
                                        updated[activeDayIdx].title = e.target.value;
                                        setItineraryDays(updated);
                                    }}
                                    className="w-full h-10 px-3 bg-white border border-[#E4E7EC] rounded-lg text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#111827] mb-1">Location</label>
                                <input
                                    type="text"
                                    value={currentDay.location}
                                    onChange={(e) => {
                                        const updated = [...itineraryDays];
                                        updated[activeDayIdx].location = e.target.value;
                                        setItineraryDays(updated);
                                    }}
                                    className="w-full h-10 px-3 bg-white border border-[#E4E7EC] rounded-lg text-sm"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold text-[#111827] mb-1">Description</label>
                                <textarea
                                    rows={3}
                                    value={currentDay.description}
                                    onChange={(e) => {
                                        const updated = [...itineraryDays];
                                        updated[activeDayIdx].description = e.target.value;
                                        setItineraryDays(updated);
                                    }}
                                    className="w-full p-3 bg-white border border-[#E4E7EC] rounded-lg text-sm"
                                />
                            </div>
                        </div>
                    </div>
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
                        <p className="text-xs text-[#6B7280]">Key experiences and attraction highlights.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newHighlight}
                            onChange={(e) => setNewHighlight(e.target.value)}
                            placeholder="Add key tour highlight..."
                            className="flex-1 h-11 px-4 border border-[#E4E7EC] rounded-lg text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => {
                                if (newHighlight.trim()) {
                                    setHighlights([...highlights, newHighlight.trim()]);
                                    setNewHighlight("");
                                }
                            }}
                            className="px-5 h-11 bg-[#465FFF] text-white font-semibold text-sm rounded-lg"
                        >
                            + Add Highlight
                        </button>
                    </div>
                    <div className="space-y-2">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-center justify-between p-3 border rounded-lg bg-[#F9FAFB]">
                                <span className="text-sm font-medium text-[#111827]">{h}</span>
                                <button type="button" onClick={() => setHighlights(highlights.filter((_, idx) => idx !== i))}>
                                    <Trash2 className="h-4 w-4 text-[#EF4444]" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 05: VEHICLE OPTIONS */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                            <Car className="h-5 w-5" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-[#111827]">05. Vehicle Options</h2>
                            <p className="text-xs text-[#6B7280]">Vehicle categories offered for this tour package.</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() =>
                            setVehicles([
                                ...vehicles,
                                {
                                    id: String(Date.now()),
                                    type: "Luxury SUV",
                                    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600",
                                    minPax: 1,
                                    maxPax: 4,
                                    priceSupplement: "Included",
                                    features: "Air Conditioned",
                                },
                            ])
                        }
                        className="px-4 py-2 bg-[#465FFF] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                    >
                        <Plus className="h-4 w-4" />
                        <span>Add Vehicle Option</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {vehicles.map((v) => (
                        <div key={v.id} className="border border-[#E4E7EC] rounded-xl p-4 bg-[#F9FAFB] space-y-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={v.image} alt={v.type} className="h-28 w-full object-cover rounded-lg" />
                            <h4 className="font-bold text-sm text-[#111827]">{v.type}</h4>
                            <p className="text-xs text-[#6B7280]">
                                {v.minPax}-{v.maxPax} Pax | {v.priceSupplement}
                            </p>
                            <button
                                type="button"
                                onClick={() => setVehicles(vehicles.filter((item) => item.id !== v.id))}
                                className="text-xs text-[#EF4444] font-semibold hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 06: INCLUSIONS & PRACTICAL INFO */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                    <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#111827]">06. Inclusions & Practical Info</h2>
                        <p className="text-xs text-[#6B7280]">What is included, excluded, and travel tips.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">Inclusions (one per line)</label>
                        <textarea
                            rows={4}
                            value={inclusions.join("\n")}
                            onChange={(e) => setInclusions(e.target.value.split("\n"))}
                            className="w-full p-4 border border-[#E4E7EC] rounded-lg text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">Exclusions (one per line)</label>
                        <textarea
                            rows={4}
                            value={exclusions.join("\n")}
                            onChange={(e) => setExclusions(e.target.value.split("\n"))}
                            className="w-full p-4 border border-[#E4E7EC] rounded-lg text-sm"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 07: MEDIA & FAQ */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                    <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                        <Film className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#111827]">07. Media & FAQ</h2>
                        <p className="text-xs text-[#6B7280]">Photos gallery and frequently asked questions.</p>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">Gallery Images</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {gallery.map((url, i) => (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img key={i} src={url} alt="Gallery" className="h-24 w-full object-cover rounded-lg border" />
                        ))}
                        <button
                            type="button"
                            onClick={() => triggerImagePicker("gallery")}
                            className="h-24 border-2 border-dashed border-[#E4E7EC] rounded-lg flex items-center justify-center text-[#465FFF] font-semibold text-xs hover:border-[#465FFF]"
                        >
                            + Add Image
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION 08: SEO & PUBLISHING */}
            <section className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                    <div className="p-2 bg-[#EBF1FF] text-[#465FFF] rounded-lg">
                        <Globe className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#111827]">08. SEO & Publishing</h2>
                        <p className="text-xs text-[#6B7280]">Search engine optimization settings.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">SEO Title</label>
                        <input
                            type="text"
                            value={form.seoTitle}
                            onChange={(e) => setForm((p) => ({ ...p, seoTitle: e.target.value }))}
                            placeholder={form.title}
                            className="w-full h-12 px-4 border border-[#E4E7EC] rounded-lg text-base"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">Meta Description</label>
                        <textarea
                            rows={3}
                            value={form.seoDescription}
                            onChange={(e) => setForm((p) => ({ ...p, seoDescription: e.target.value }))}
                            placeholder="SEO description for search engines..."
                            className="w-full p-4 border border-[#E4E7EC] rounded-lg text-base"
                        />
                    </div>
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
                    <span>{submitting ? "Saving..." : "Save Tour Package"}</span>
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
