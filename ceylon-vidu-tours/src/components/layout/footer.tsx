"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-[#1E293B] text-white select-none">
            {/* Top Ambient Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute -top-40 left-1/4 h-125 w-125 rounded-full bg-[#16A34A]/20 blur-[150px]" />
                <div className="absolute top-1/2 -right-40 h-137.5 w-137.5 rounded-full bg-[#0EA5E9]/20 blur-[160px]" />
            </div>

            {/* Subtle Dark Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

            {/* Main Footer Links */}
            <div className="relative mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-14">
                    {/* Brand Column (Span 2) */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-4 group">
                            <div className="relative transition-transform duration-300 group-hover:scale-105 shrink-0">
                                <Image
                                    src="/logo1.png"
                                    alt="Ceylon Vidu Tours"
                                    width={320}
                                    height={320}
                                    className="h-28 sm:h-32 w-auto object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                                    Ceylon Vidu
                                </span>
                                <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#38BDF8] uppercase">
                                    Tours
                                </span>
                            </div>
                        </Link>

                        <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed text-slate-300 max-w-xl">
                            Sri Lanka&apos;s premier travel agency & luxury tour guide service. Dedicated to curating unforgettable island journeys, private chauffeur tours, and authentic heritage experiences across Ceylon.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-extrabold text-white tracking-wider uppercase border-b border-slate-800 pb-3">
                            Quick Links
                        </h4>
                        <ul className="mt-6 space-y-3.5 text-sm sm:text-base font-medium text-slate-400">
                            <li>
                                <Link href="/" className="transition-colors hover:text-[#16A34A] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#16A34A]" />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tours" className="transition-colors hover:text-[#16A34A] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#16A34A]" />
                                    <span>Tour Packages</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/destinations" className="transition-colors hover:text-[#16A34A] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#16A34A]" />
                                    <span>Destinations</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews" className="transition-colors hover:text-[#16A34A] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#16A34A]" />
                                    <span>Traveler Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="transition-colors hover:text-[#16A34A] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#16A34A]" />
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="transition-colors hover:text-[#16A34A] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#16A34A]" />
                                    <span>Contact & Quote</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Featured Tours */}
                    <div>
                        <h4 className="text-lg font-extrabold text-white tracking-wider uppercase border-b border-slate-800 pb-3">
                            Top Experiences
                        </h4>
                        <ul className="mt-6 space-y-3.5 text-sm sm:text-base font-medium text-slate-400">
                            <li>
                                <Link href="/tours/royal-heritage" className="transition-colors hover:text-[#38BDF8] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#38BDF8]" />
                                    <span>Cultural Heritage Circuit</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tours/yala-safari" className="transition-colors hover:text-[#38BDF8] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#38BDF8]" />
                                    <span>Wild Leopard Safari</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tours/scenic-train" className="transition-colors hover:text-[#38BDF8] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#38BDF8]" />
                                    <span>Kandy to Ella Blue Train</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tours/coastal-escape" className="transition-colors hover:text-[#38BDF8] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#38BDF8]" />
                                    <span>Southern Beach Escape</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tours/luxury-honeymoon" className="transition-colors hover:text-[#38BDF8] flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-[#38BDF8]" />
                                    <span>Luxury Honeymoon Special</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Address */}
                    <div>
                        <h4 className="text-lg font-extrabold text-white tracking-wider uppercase border-b border-slate-800 pb-3">
                            Contact Us
                        </h4>
                        <ul className="mt-6 space-y-4 text-sm sm:text-base font-medium text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
                                <span>No. 142, Temple Road, Kandy & Colombo, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#0EA5E9] shrink-0" />
                                <a href="tel:+94771234567" className="hover:text-white transition-colors">
                                    +94 77 123 4567
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[#38BDF8] shrink-0" />
                                <a href="mailto:info@ceylonvidutours.com" className="hover:text-white transition-colors">
                                    info@ceylonvidutours.com
                                </a>
                            </li>
                            <li className="pt-2">
                                <a
                                    href="https://wa.me/94771234567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 px-5 py-2.5 text-xs font-bold text-[#16A34A] transition-all hover:bg-[#16A34A] hover:text-white"
                                >
                                    <span>WhatsApp Direct Chat</span>
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright & Legal */}
            <div className="relative border-t border-slate-900 bg-slate-950 py-8 text-center sm:text-left">
                <div className="mx-auto max-w-[2100px] px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-500">
                    <p>© 2026 Ceylon Vidu Tours. All rights reserved.</p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">
                            Terms & Conditions
                        </Link>
                        <span>•</span>
                        <Link href="/sitemap" className="hover:text-slate-300 transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}



function ChevronRight({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    );
}
