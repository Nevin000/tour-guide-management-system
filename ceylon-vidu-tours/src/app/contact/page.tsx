"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
    ArrowRight,
    ChevronRight,
    MessageCircle,
    Phone,
    Mail,
    Send,
    Loader2,
    CheckCircle2,
    User,
    AlertCircle,
    Compass
} from "lucide-react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { inquirySchema, InquiryInput } from "@/features/inquiries/validators/inquiry.schema";

// Custom hook to trigger entrance animations on scroll
function useScrollReveal() {
    const [revealed, setRevealed] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                }
            },
            { threshold: 0.1 }
        );

        const current = ref.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return [ref, revealed] as const;
}

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionData, setSubmissionData] = useState<InquiryInput | null>(null);

    // Scroll reveal hooks for form and map sections
    const [formSectionRef, formSectionRevealed] = useScrollReveal();
    const [mapSectionRef, mapSectionRevealed] = useScrollReveal();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<InquiryInput>({
        resolver: zodResolver(inquirySchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        }
    });

    const onSubmit = async (data: InquiryInput) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                toast.success(result.message || "Your message has been sent successfully!");
                setIsSubmitted(true);
                setSubmissionData(data);
                reset();
            } else {
                toast.error(result.message || "Failed to send message. Please check your inputs.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("A network error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 select-none">
            <Navbar />

            {/* ========================================================
                01. CONTACT HERO (IMMEDIATE ENTRANCE ANIMATION)
            ======================================================== */}
            <section className="relative flex min-h-[500px] items-center overflow-hidden bg-slate-950 py-24 text-white sm:min-h-[560px] lg:min-h-[600px]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 animate-slow-fade-in"
                    style={{
                        backgroundImage: "url('/Contact_background.png')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/65 to-slate-950" />

                {/* Green Glow */}
                <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#16A34A]/20 blur-[130px]" />

                {/* Blue Glow */}
                <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#0EA5E9]/20 blur-[130px]" />

                {/* Main Container */}
                <div className="relative mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">
                    <div className="mx-auto max-w-5xl text-center">
                        {/* Breadcrumb */}
                        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md opacity-0 animate-slide-up-fade">
                            <Link href="/" className="transition hover:text-white">
                                Home
                            </Link>
                            <ChevronRight className="h-3.5 w-3.5 text-[#16A34A]" />
                            <span className="text-[#16A34A]">Contact</span>
                        </div>

                        {/* Heading */}
                        <h1
                            className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl opacity-0 animate-slide-up-fade"
                            style={{ animationDelay: "150ms" }}
                        >
                            Let&apos;s Plan Your
                            <span className="block bg-gradient-to-r from-[#16A34A] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
                                Sri Lankan Journey
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className="mx-auto mt-7 max-w-3xl text-base font-medium leading-relaxed text-slate-300 sm:text-xl lg:text-2xl opacity-0 animate-slide-up-fade"
                            style={{ animationDelay: "350ms" }}
                        >
                            Have a question, need help choosing a tour,
                            or ready to start planning? We are here to
                            help you discover Sri Lanka your way.
                        </p>

                        {/* Buttons */}
                        <div
                            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0 animate-slide-up-fade"
                            style={{ animationDelay: "550ms" }}
                        >
                            {/* Start Inquiry */}
                            <a
                                href="#travel-inquiry"
                                className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-8 py-4 text-base font-bold text-white shadow-xl shadow-green-900/30 transition hover:-translate-y-1 hover:bg-[#15803D] active:scale-95"
                            >
                                Contact Us Now
                                <ArrowRight className="h-5 w-5" />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/94771234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/15 active:scale-95"
                            >
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================
                02. TRAVEL INQUIRY FORM SECTION (REVEALS ON SCROLL)
            ======================================================== */}
            <section
                id="travel-inquiry"
                ref={formSectionRef as any}
                className="relative scroll-mt-24 bg-slate-50 border-t border-slate-200/50 py-16 sm:py-24 overflow-hidden"
            >
                {/* Background Blobs for Visual Interest */}
                <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
                <div className="absolute left-10 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-green-100/30 blur-3xl pointer-events-none" />

                <div className="mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">
                    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

                        {/* LEFT COLUMN: GUIDELINES & AESTHETIC PANEL */}
                        <div className={`lg:col-span-5 flex flex-col justify-between transition-all duration-700 ${formSectionRevealed ? "animate-slide-right-fade" : "opacity-0"
                            }`}>
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-700">
                                    <Compass className="h-3.5 w-3.5" />
                                    Journey Blueprint
                                </span>
                                <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                                    Send Us a
                                    <span className="block text-[#16A34A]">Quick Message</span>
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-slate-600">
                                    Do you have any questions or want to customize your tour package? Send us a message and our support team will get in touch with you within a few hours to help out.
                                </p>

                                {/* Steps Timeline */}
                                <div className="mt-10 space-y-6">
                                    {/* Step 1 */}
                                    <div className="flex gap-4 group">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-extrabold text-white shadow-md transition-transform group-hover:scale-110 duration-300">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-slate-800 transition-colors group-hover:text-green-600">Submit Details</h4>
                                            <p className="mt-1 text-sm text-slate-500">Provide your basic contact name and message using the form.</p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-4 group">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9] font-extrabold text-white shadow-md transition-transform group-hover:scale-110 duration-300">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-slate-800 transition-colors group-hover:text-[#0EA5E9]">Quick Response</h4>
                                            <p className="mt-1 text-sm text-slate-500">Our customer support answers email or schedules a quick talk.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: ACTIVE FORM */}
                        <div className={`lg:col-span-7 transition-all duration-700 ${formSectionRevealed ? "animate-slide-left-fade" : "opacity-0"
                            }`}>
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 transition-all hover:shadow-2xl">
                                    <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-green-600" />
                                        Contact Form
                                    </h4>

                                    <div className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                                Your Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    id="name"
                                                    type="text"
                                                    {...register("name")}
                                                    placeholder="Enter full name"
                                                    className={`w-full rounded-xl border pl-12 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:scale-[1.01] focus:ring-4 ${errors.name
                                                        ? "border-red-300 bg-red-50/10 focus:border-red-500 focus:ring-red-100"
                                                        : "border-slate-200 bg-slate-50/50 focus:border-green-500 focus:ring-green-100 hover:border-slate-350"
                                                        }`}
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-500">
                                                    <AlertCircle className="h-3.5 w-3.5" />
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    id="email"
                                                    type="email"
                                                    {...register("email")}
                                                    placeholder="name@domain.com"
                                                    className={`w-full rounded-xl border pl-12 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:scale-[1.01] focus:ring-4 ${errors.email
                                                        ? "border-red-300 bg-red-50/10 focus:border-red-500 focus:ring-red-100"
                                                        : "border-slate-200 bg-slate-50/50 focus:border-green-500 focus:ring-green-100 hover:border-slate-350"
                                                        }`}
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-500">
                                                    <AlertCircle className="h-3.5 w-3.5" />
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                                Phone / WhatsApp (Optional)
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    {...register("phone")}
                                                    placeholder="+94 7X XXX XXXX"
                                                    className={`w-full rounded-xl border pl-12 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:scale-[1.01] focus:ring-4 ${errors.phone
                                                        ? "border-red-300 bg-red-50/10 focus:border-red-500 focus:ring-red-100"
                                                        : "border-slate-200 bg-slate-50/50 focus:border-green-500 focus:ring-green-100 hover:border-slate-350"
                                                        }`}
                                                />
                                            </div>
                                            {errors.phone && (
                                                <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-500">
                                                    <AlertCircle className="h-3.5 w-3.5" />
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                                Your Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                {...register("message")}
                                                placeholder="Write your questions or message details here..."
                                                className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:scale-[1.01] focus:ring-4 ${errors.message
                                                    ? "border-red-300 bg-red-50/10 focus:border-red-500 focus:ring-red-100"
                                                    : "border-slate-200 bg-slate-50/50 focus:border-green-500 focus:ring-green-100 hover:border-slate-350"
                                                    }`}
                                            />
                                            {errors.message && (
                                                <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-500">
                                                    <AlertCircle className="h-3.5 w-3.5" />
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-green-900/10 hover:bg-green-700 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-5 w-5 animate-spin" />
                                                    Sending Message...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-xl sm:p-10 text-center animate-slide-up-fade">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900">Message Sent!</h4>
                                    <p className="mt-4 text-slate-600 leading-relaxed max-w-md mx-auto">
                                        Thank you, <strong className="text-slate-800">{submissionData?.name}</strong>. We have logged your request! A representative from Ceylon Vidu Tours will contact you at <strong className="text-slate-800">{submissionData?.email}</strong> shortly.
                                    </p>

                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition active:scale-95 cursor-pointer"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================
                03. LOCATION MAP SECTION (REVEALS ON SCROLL & SPLIT COLUMNS)
            ======================================================== */}
            <section
                ref={mapSectionRef as any}
                className="relative bg-white py-16 sm:py-24 border-t border-slate-200/60 overflow-hidden"
            >
                <div className="mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20">

                    {/* Header */}
                    <div className={`mx-auto max-w-3xl text-center mb-12 sm:mb-16 transition-all duration-700 ${mapSectionRevealed ? "animate-slide-up-fade" : "opacity-0"
                        }`}>
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                            Our Office
                        </span>
                        <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Find Us in
                            <span className="block text-green-600">Sri Lanka</span>
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-505">
                            Drop by our headquarters or contact our representative office on Temple Road. Let&apos;s talk about your dream journey over a cup of Ceylon tea.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-12">
                        {/* Map Panel (8 cols - wider structure) */}
                        <div className={`lg:col-span-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md h-[400px] sm:h-[480px] lg:h-[520px] transition-all duration-700 ${mapSectionRevealed ? "animate-slide-right-fade" : "opacity-0"
                            }`}>
                            <iframe
                                src="https://maps.google.com/maps?q=No.%20142,%20Temple%20Road,%20Kandy,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale brightness-95 contrast-100 hover:grayscale-0 transition-all duration-700 ease-out"
                            />
                        </div>

                        {/* Details Panel (4 cols) */}
                        <div className={`lg:col-span-4 flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-md transition-all duration-700 ${mapSectionRevealed ? "animate-slide-left-fade" : "opacity-0"
                            }`}>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                    </span>
                                    Ceylon Vidu Tours HQ
                                </h4>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-800 text-sm">Office Address</h5>
                                            <p className="mt-1 text-sm text-slate-500 leading-relaxed">No. 142, Temple Road,<br />Kandy & Colombo, Sri Lanka</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 animate-pulse">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-800 text-sm">Working Hours</h5>
                                            <p className="mt-1 text-[#16A34A] text-sm font-semibold flex items-center gap-1.5">
                                                <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                                Open 24 Hours / 7 Days
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9]">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-800 text-sm">Direct Phone Call</h5>
                                            <a href="tel:+94771234567" className="mt-1 block text-sm text-[#0EA5E9] font-medium hover:underline">+94 77 123 4567</a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-800 text-sm">Email Inquiry</h5>
                                            <a href="mailto:info@ceylonvidutours.com" className="mt-1 block text-sm text-purple-600 font-medium hover:underline">info@ceylonvidutours.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-slate-200 pt-6">
                                <a
                                    href="https://wa.me/94771234567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] py-3 text-sm font-bold text-white shadow-md hover:bg-[#15803D] active:scale-[0.98] transition cursor-pointer"
                                >
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.387 9.805-9.782.002-2.614-1.013-5.073-2.859-6.921C16.373 2.053 13.91 1.037 11.29.01c-5.405 0-9.81 4.386-9.812 9.786-.001 1.702.461 3.351 1.341 4.799L1.874 20.77l6.59-1.616zm12.597-8.318c-.37-.185-2.185-1.077-2.523-1.2-.338-.123-.585-.185-.831.185-.246.37-.954 1.2-1.17 1.446-.215.246-.43.277-.8.092-.37-.185-1.562-.575-2.977-1.838-1.102-.983-1.846-2.197-2.062-2.568-.215-.37-.023-.57.162-.754.167-.166.37-.43.554-.646.185-.215.246-.37.37-.615.123-.246.062-.462-.03-.646-.093-.185-.83-2.001-1.139-2.74-.3-.722-.603-.624-.83-.636-.215-.011-.462-.014-.707-.014-.246 0-.646.092-1.015.37C6.01 4.606 5 5.56 5 7.53c0 1.97 1.43 3.877 1.63 4.154.2.277 2.816 4.299 6.822 6.03.953.41 1.696.656 2.277.84.958.305 1.83.262 2.518.159.767-.115 2.186-.893 2.493-1.755.307-.862.307-1.6.215-1.754-.092-.154-.338-.246-.708-.431z" />
                                    </svg>
                                    WhatsApp Travel Desk
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}