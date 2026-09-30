"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import {
    BookOpen, Clock, Calendar, User, ArrowRight, MapPin,
    Compass, Sparkles, Maximize2, X, ChevronRight, Link2,
    List, Eye, Tag, TrendingUp, Search,
} from "lucide-react";

// ─── Social SVG Icons ──────────────────────────────────────────────────────
const WhatsApp = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.996 0C5.378 0 0 5.378 0 11.996c0 2.21.6 4.29 1.66 6.06L.43 24l6.1-1.6c1.7.98 3.65 1.51 5.46 1.51 6.621 0 11.996-5.379 11.996-12.001 0-6.618-5.375-11.995-12-11.995zM12 21.94c-1.85 0-3.66-.5-5.26-1.45l-.38-.22-3.9.1.1-3.8-.24-.38C1.35 14.59.85 12.82.85 11.99.85 5.85 5.85.85 11.99.85c6.15 0 11.15 5 11.15 11.14 0 6.13-5 11.13-11.14 11.14zm6.05-8.2c-.33-.17-1.96-1-2.27-1.11-.3-.11-.53-.17-.75.17-.22.33-.86 1.11-1.05 1.33-.2.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-.98-.88-1.64-1.96-1.83-2.3-.2-.33-.02-.51.15-.67.15-.15.33-.39.5-.58.17-.2.22-.33.33-.56.11-.22.06-.41-.03-.58-.1-.17-.75-1.81-1.03-2.47-.27-.65-.54-.56-.75-.57h-.64c-.22 0-.58.08-.88.42-.3.33-1.16 1.14-1.16 2.78 0 1.64 1.19 3.22 1.36 3.44.17.22 2.33 3.61 5.67 5.06 2.24.97 3.06 1.05 4.19.88 1.14-.17 3.39-1.39 3.86-2.73.47-1.33.47-2.47.33-2.72-.14-.25-.5-.39-.83-.56z" />
    </svg>
);
const Twitter = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
);
const Facebook = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

// ─── Types ─────────────────────────────────────────────────────────────────
interface BlogTag { id: string; name: string; slug: string; }
interface BlogCategory { id: string; name: string; slug: string; }
interface PlaceMentioned { id: string; name: string; url: string | null; latitude: number | null; longitude: number | null; }
interface Destination { id: string; name: string; slug: string; }
interface BlogPost {
    id: string; title: string; slug: string; excerpt: string | null; content: string;
    coverImage: string | null; authorName: string; views: number;
    category: BlogCategory | null; tags: { tag: BlogTag }[];
    publishedAt: string | null; createdAt: string; updatedAt?: string;
    location: string | null; timeNeeded: string | null; bestTime: string | null;
    latitude: number | null; longitude: number | null; articleType: string | null;
    coverImageAlt?: string | null; coverImageCaption?: string | null;
    authorImage?: string | null; placesMentioned?: PlaceMentioned[];
    destination?: Destination | null;
}
interface TocItem { id: string; text: string; level: number; }

// ─── Categories (static) ──────────────────────────────────────────────────
const CATEGORIES = [
    { name: "Destinations", slug: "destinations", count: 5 },
    { name: "Food & Culture", slug: "food-culture", count: 2 },
    { name: "Restaurants & Dining", slug: "restaurants-dining", count: 4 },
    { name: "Tips & Planning", slug: "tips-planning", count: 2 },
    { name: "Travel Guides", slug: "travel-guides", count: 30 },
    { name: "Travel News & Updates", slug: "travel-news-updates", count: 5 },
    { name: "Travel Tips", slug: "travel-tips", count: 16 },
    { name: "Wildlife & Nature", slug: "wildlife-nature", count: 4 },
];



// ─── Main Component ────────────────────────────────────────────────────────
export default function BlogDetailClient({ post, related, popular }: {
    post: BlogPost; related: BlogPost[]; popular: BlogPost[];
}) {
    const [readProgress, setReadProgress] = useState(0);
    const [tocItems, setTocItems] = useState<TocItem[]>([]);
    const [activeToc, setActiveToc] = useState("");
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);
    const [copied, setCopied] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showFloatShare, setShowFloatShare] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    // ── Clean content ─────────────────────────────────────────────────────
    const getCleanedContent = (content: string, titleText: string) => {
        if (!content) return "";
        let cleaned = content.trim();
        const headingRe = /^<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/i;
        const match = cleaned.match(headingRe);
        if (match) {
            const inner = match[2].replace(/<[^>]+>/g, "").trim().toLowerCase();
            const title = titleText.trim().toLowerCase();
            if (title.includes(inner) || inner.includes(title) || Math.abs(title.length - inner.length) < 5)
                cleaned = cleaned.substring(match[0].length).trim();
        }
        cleaned = cleaned.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/gi, "<h2$1>$2</h2>");
        return cleaned;
    };

    const cleanedHtml = getCleanedContent(post.content, post.title);
    const words = post.content ? post.content.replace(/<[^>]+>/g, "").split(/\s+/).length : 0;
    const rt = Math.max(1, Math.ceil(words / 200));
    const publishDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const hasGuide = !!(post.location || post.timeNeeded || post.bestTime || post.articleType);

    // ── Extract TOC from headings ────────────────────────────────────────
    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(cleanedHtml, "text/html");
        const headings = Array.from(doc.querySelectorAll("h2, h3"));
        const items: TocItem[] = headings.map((h, i) => {
            const id = `heading-${i}`;
            h.id = id;
            return { id, text: h.textContent || "", level: parseInt(h.tagName[1]) };
        });
        setTocItems(items);
    }, [cleanedHtml]);

    // ── Assign IDs to rendered headings ─────────────────────────────────
    useEffect(() => {
        if (!contentRef.current) return;
        const headings = contentRef.current.querySelectorAll("h2, h3");
        headings.forEach((h, i) => { h.id = `heading-${i}`; });
    }, [cleanedHtml]);

    // ── Active TOC on scroll ─────────────────────────────────────────────
    useEffect(() => {
        const handler = () => {
            if (!contentRef.current) return;
            const headings = contentRef.current.querySelectorAll("h2[id], h3[id]");
            let active = "";
            headings.forEach((h) => {
                const top = (h as HTMLElement).getBoundingClientRect().top;
                if (top <= 140) active = h.id;
            });
            setActiveToc(active);
        };
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, [cleanedHtml]);

    // ── Image click → lightbox ───────────────────────────────────────────
    useEffect(() => {
        if (!contentRef.current) return;
        const imgs = contentRef.current.querySelectorAll("img");
        const onClick = (e: MouseEvent) => {
            const t = e.currentTarget as HTMLImageElement;
            if (t?.src) setLightboxImage({ src: t.src, alt: t.alt || post.title, caption: t.getAttribute("title") || t.alt || undefined });
        };
        imgs.forEach(img => img.addEventListener("click", onClick));
        return () => imgs.forEach(img => img.removeEventListener("click", onClick));
    }, [cleanedHtml, post.title]);

    // ── Lightbox keyboard & scroll lock ─────────────────────────────────
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxImage(null); };
        if (lightboxImage) { window.addEventListener("keydown", onKey); document.body.style.overflow = "hidden"; }
        else document.body.style.overflow = "";
        return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
    }, [lightboxImage]);

    // ── Reading progress ─────────────────────────────────────────────────
    useEffect(() => {
        const onScroll = () => {
            if (!contentRef.current) return;
            const el = contentRef.current;
            const scrollY = window.scrollY;
            const top = el.offsetTop;
            const h = el.scrollHeight;
            const vh = window.innerHeight;
            if (scrollY < top) setReadProgress(0);
            else if (scrollY > top + h - vh) setReadProgress(100);
            else setReadProgress(((scrollY - top) / (h - vh)) * 100);
            setShowFloatShare(scrollY > 400);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [post]);

    // ── Scroll reveal ───────────────────────────────────────────────────
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("reveal-visible"); }),
            { threshold: 0.04, rootMargin: "0px 0px -40px 0px" }
        );
        document.querySelectorAll(".scroll-reveal, .scroll-reveal-img, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale")
            .forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, [cleanedHtml]);

    // ── Share ─────────────────────────────────────────────────────────────
    const handleShare = useCallback((platform: string) => {
        const url = typeof window !== "undefined" ? window.location.href : "";
        const text = post.title;
        if (platform === "whatsapp") window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + " - " + url)}`, "_blank");
        if (platform === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        if (platform === "twitter") window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
        if (platform === "copy") {
            navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }, [post.title]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) window.location.href = `/blog?search=${encodeURIComponent(searchQuery.trim())}`;
    };

    const circumference = 2 * Math.PI * 16; // r=16 svg circle

    // ─────────────────────────────────────────────────────────────────────
    return (
        <main className="min-h-screen bg-[#f6f8f9] font-sans selection:bg-emerald-500 selection:text-white">
            <Navbar alwaysSolid={false} />

            {/* ── Reading Progress bar (top) ─────────────────────────────── */}
            <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-100 z-[300]">
                <div
                    className="h-full transition-all duration-150 ease-out"
                    style={{ width: `${readProgress}%`, background: "linear-gradient(90deg,#059669,#10b981,#34d399)" }}
                />
            </div>

            {/* ── Floating Share Bar (left, desktop) ────────────────────── */}
            <div className={`fixed left-5 top-1/2 -translate-y-1/2 z-[200] hidden xl:flex flex-col items-center gap-3 transition-all duration-500 ${showFloatShare ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"}`}>
                <div className="w-px h-10 bg-slate-300/60" />
                {[
                    { platform: "whatsapp", color: "#25D366", icon: <WhatsApp className="w-4 h-4" /> },
                    { platform: "facebook", color: "#1877F2", icon: <Facebook className="w-4 h-4" /> },
                    { platform: "twitter", color: "#000", icon: <Twitter className="w-4 h-4" /> },
                ].map(({ platform, color, icon }) => (
                    <button key={platform} onClick={() => handleShare(platform)}
                        className="share-fab w-9 h-9 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center cursor-pointer"
                        style={{ color }}
                        aria-label={`Share on ${platform}`}
                    >{icon}</button>
                ))}
                <button onClick={() => handleShare("copy")}
                    className="share-fab w-9 h-9 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center cursor-pointer text-slate-600"
                    aria-label="Copy link"
                >
                    {copied ? <span className="text-[8px] font-black text-emerald-600">✓</span> : <Link2 className="w-3.5 h-3.5" />}
                </button>
                <div className="w-px h-10 bg-slate-300/60" />
                {/* Reading progress ring */}
                <div className="relative w-9 h-9 flex items-center justify-center">
                    <svg width="36" height="36" className="absolute top-0 left-0">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
                        <circle
                            cx="18" cy="18" r="16" fill="none"
                            stroke="#059669" strokeWidth="2.5"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - (readProgress / 100) * circumference}
                            className="progress-ring__circle"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="text-[8px] font-black text-slate-600 z-10">{Math.round(readProgress)}%</span>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* HERO                                                        */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <div ref={heroRef} className="relative w-full bg-[#071E20] text-white pt-36 sm:pt-44 lg:pt-52 pb-16 overflow-hidden">
                {/* Background cover image */}
                {post.coverImage && (
                    <div className="absolute inset-0 z-0">
                        <Image src={post.coverImage} alt={post.title} fill priority
                            className="object-cover scale-105 opacity-25 blur-[2px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#071E20]/90 via-[#0D3B3E]/80 to-[#071E20]" />
                    </div>
                )}

                {/* Decorative animated orbs */}
                <div className="absolute top-24 right-[8%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none animate-float-orb" />
                <div className="absolute bottom-8 left-[5%] w-48 h-48 bg-teal-400/8 rounded-full blur-[60px] pointer-events-none animate-float-orb" style={{ animationDelay: "2.5s" }} />
                <div className="absolute top-40 left-[20%] w-32 h-32 bg-yellow-400/6 rounded-full blur-[50px] pointer-events-none animate-float-orb" style={{ animationDelay: "1.2s" }} />

                <div className="relative z-10 mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 2xl:px-20">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400/80 mb-7 overflow-x-auto no-scrollbar whitespace-nowrap animate-fade-in-up">
                        <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                        <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
                        {post.category && (<>
                            <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                            <Link href={`/blog?category=${post.category.slug}`} className="hover:text-emerald-400 transition-colors">{post.category.name}</Link>
                        </>)}
                        <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                        <span className="text-slate-300 truncate max-w-[160px]">{post.title}</span>
                    </nav>

                    {/* Category pill */}
                    {post.category && (
                        <div className="mb-5 animate-fade-in-up delay-100">
                            <Link href={`/blog?category=${post.category.slug}`}
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/12 text-emerald-300 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500/20 transition-all"
                            >
                                <Sparkles className="w-3 h-3" />{post.category.name}
                            </Link>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] text-white tracking-tight max-w-5xl mb-5 animate-fade-in-up delay-200">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="text-base sm:text-lg leading-relaxed text-slate-300/85 font-light max-w-3xl mb-7 animate-fade-in-up delay-300">
                            {post.excerpt}
                        </p>
                    )}

                    {/* Author + meta row */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-in-up delay-400">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full overflow-hidden bg-emerald-800 border-2 border-emerald-500/40 relative shrink-0">
                                {post.authorImage
                                    ? <Image src={post.authorImage} alt={post.authorName} fill className="object-cover" />
                                    : <User className="w-4 h-4 text-emerald-300 absolute inset-0 m-auto" />}
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Author</p>
                                <p className="text-[13px] font-bold text-white">{post.authorName || "Ceylon Vidu Team"}</p>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-white/10 hidden sm:block" />
                        <div className="flex items-center gap-1.5 text-slate-300">
                            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[12px] font-medium">{publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-300">
                            <Clock className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[12px] font-medium">{rt} min read</span>
                        </div>
                        {post.views > 0 && (
                            <div className="flex items-center gap-1.5 text-slate-300">
                                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-[12px] font-medium">{post.views.toLocaleString()} views</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* MAIN CONTENT AREA (70 / 30)                                */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <div className="mx-auto w-full max-w-[2100px] px-4 sm:px-8 lg:px-14 2xl:px-20 pt-10 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10 items-start w-full">

                    {/* ════════════════════════════════════════════════════ */}
                    {/* LEFT — Article (70%)                                 */}
                    {/* ════════════════════════════════════════════════════ */}
                    <div className="w-full min-w-0">

                        {/* Cover Image */}
                        {post.coverImage && (
                            <div className="mb-0 overflow-hidden rounded-[1.75rem] border border-slate-200/60 shadow-2xl w-full group relative bg-slate-900 scroll-reveal-scale">
                                <div
                                    onClick={() => setLightboxImage({ src: post.coverImage!, alt: post.coverImageAlt || post.title, caption: post.coverImageCaption || undefined })}
                                    className="relative w-full aspect-[16/9] sm:aspect-[21/9] cursor-zoom-in overflow-hidden"
                                >
                                    <Image src={post.coverImage} alt={post.coverImageAlt || post.title} fill priority
                                        sizes="(max-width: 1024px) 100vw, 1200px"
                                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                    <div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-500" />
                                    <div className="absolute top-4 right-4 bg-black/45 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-400 border border-white/15">
                                        <Maximize2 className="w-3 h-3" />View Full
                                    </div>
                                    {post.coverImageCaption && (
                                        <p className="absolute bottom-0 left-0 right-0 text-[12px] text-white/90 pb-4 px-6 pt-8 font-medium italic bg-gradient-to-t from-black/60 to-transparent">
                                            📸 {post.coverImageCaption}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Article Body Card */}
                        <div ref={contentRef}
                            className="bg-white rounded-b-[1.75rem] border border-t-0 border-slate-200/70 px-6 sm:px-10 lg:px-14 xl:px-16 pt-10 pb-14 shadow-sm relative overflow-hidden scroll-reveal delay-200"
                        >
                            {/* Top editorial bar */}
                            <div className="flex items-center justify-between pb-7 mb-8 border-b border-slate-100">
                                <div className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-emerald-500 to-teal-600" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0D3B3E]">Sri Lanka Travel Story</span>
                                    <span className="hidden sm:inline text-slate-200 mx-1">·</span>
                                    <span className="hidden sm:inline text-[10px] font-bold text-slate-400 uppercase tracking-widest">{rt} min read</span>
                                </div>
                                {/* Inline share buttons */}
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mr-1 hidden sm:flex">Share</span>
                                    {[
                                        { p: "whatsapp", col: "#25D366", icon: <WhatsApp className="w-3.5 h-3.5" /> },
                                        { p: "facebook", col: "#1877F2", icon: <Facebook className="w-3.5 h-3.5" /> },
                                        { p: "twitter", col: "#111", icon: <Twitter className="w-3.5 h-3.5" /> },
                                        { p: "copy", col: "#6b7280", icon: copied ? <span className="text-[9px] font-black text-emerald-600">✓</span> : <Link2 className="w-3.5 h-3.5" /> },
                                    ].map(({ p, col, icon }) => (
                                        <button key={p} onClick={() => handleShare(p)}
                                            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                                            style={{ color: col }}
                                            aria-label={`Share on ${p}`}
                                        >{icon}</button>
                                    ))}
                                </div>
                            </div>

                            {/* Article prose content */}
                            <article
                                className="prose prose-slate prose-lg max-w-none w-full"
                                dangerouslySetInnerHTML={{ __html: cleanedHtml }}
                            />

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="mt-10 pt-8 border-t border-slate-100">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Tag className="w-3.5 h-3.5 text-slate-400" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Connected Topics</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(t => (
                                            <Link key={t.tag.id} href={`/blog?tag=${t.tag.slug}`}
                                                className="tag-chip px-4 py-2 rounded-full bg-white border border-slate-200 text-[12px] font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 shadow-sm"
                                            >#{t.tag.name}</Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Route Map */}
                            {post.latitude && post.longitude && (
                                <div className="mt-10 border-t border-slate-100 pt-8 scroll-reveal">
                                    <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-5 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#B47225]" />Location & Route Map
                                    </h2>
                                    <div className="w-full h-[360px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${post.latitude},${post.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                            width="100%" height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={false}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Places Mentioned */}
                        {post.placesMentioned && post.placesMentioned.length > 0 && (
                            <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm scroll-reveal">
                                <h3 className="text-[13px] font-black uppercase tracking-widest text-slate-700 mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-emerald-600" />Places Covered in This Guide
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.placesMentioned.map(place => (
                                        <a key={place.id}
                                            href={place.url || `https://maps.google.com/?q=${place.name}`}
                                            target="_blank" rel="noopener noreferrer"
                                            className="tag-chip flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[12px] font-bold text-emerald-800 hover:bg-emerald-100 hover:border-emerald-400 transition-all cursor-pointer"
                                        >
                                            <MapPin className="w-3 h-3 shrink-0" />{place.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Continue Planning — Related Articles */}
                        {related.length > 0 && (
                            <div className="mt-12 scroll-reveal">
                                <div className="flex items-center justify-between mb-7">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Keep Exploring</p>
                                        <h2 className="font-heading text-2xl font-extrabold text-[#0D3B3E]">Continue Planning</h2>
                                    </div>
                                    <Link href="/blog" className="flex items-center gap-1 text-[12px] font-bold text-emerald-600 hover:text-emerald-800 transition-colors">
                                        All Articles <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                    {related.map((relPost, i) => (
                                        <Link key={relPost.id} href={`/blog/${relPost.slug}`}
                                            className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-400 scroll-reveal cursor-pointer"
                                            style={{ transitionDelay: `${i * 80}ms` }}
                                        >
                                            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                                                {relPost.coverImage
                                                    ? <Image src={relPost.coverImage} alt={relPost.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                                                    : <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-200"><BookOpen className="h-10 w-10" /></div>
                                                }
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                                                {relPost.category && (
                                                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] font-black text-emerald-700 uppercase tracking-widest px-2.5 py-1 rounded-full border border-emerald-100">
                                                        {relPost.category.name}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-col flex-1 p-5">
                                                <h3 className="font-heading text-[14px] font-bold leading-[1.4] text-[#0D3B3E] group-hover:text-emerald-700 transition-colors mb-2 line-clamp-3">{relPost.title}</h3>
                                                <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 mt-auto pt-3 border-t border-slate-50">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(relPost.publishedAt || relPost.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ════════════════════════════════════════════════════ */}
                    {/* RIGHT — Sidebar (30%)                                */}
                    {/* ════════════════════════════════════════════════════ */}
                    <aside className="w-full space-y-5 lg:sticky lg:top-28 lg:h-max">

                        {/* 1. Search Widget */}
                        <div className="sidebar-widget bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                                <Search className="w-3.5 h-3.5 text-[#12A0C2]" />Search Travel Guides
                            </h3>
                            <form onSubmit={handleSearch} className="relative flex w-full">
                                <input
                                    type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="Search articles..."
                                    className="w-full text-[13px] border border-slate-200 rounded-l-xl px-4 py-2.5 outline-none focus:border-[#12A0C2] font-medium bg-slate-50 placeholder:text-slate-400"
                                />
                                <button type="submit" aria-label="Search"
                                    className="bg-[#12A0C2] hover:bg-[#1089a6] text-white rounded-r-xl px-4 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* 2. Most Popular (Top 5 views - Real Database Posts Only) */}
                        {(() => {
                            const realPosts = [
                                ...(popular || []),
                                ...(related || []),
                            ].filter((item, index, self) =>
                                index === self.findIndex((t) => t.id === item.id || t.slug === item.slug)
                            ).slice(0, 5);

                            if (realPosts.length === 0) return null;

                            return (
                                <div className="sidebar-widget bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                                        <TrendingUp className="w-3.5 h-3.5 text-[#B47225]" />Most Popular
                                    </h3>
                                    <div className="space-y-4">
                                        {realPosts.map((p, i) => (
                                            <Link key={p.id} href={`/blog/${p.slug}`} className="group flex items-start gap-3">
                                                <div className="relative w-[68px] h-[50px] rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                                                    {p.coverImage
                                                        ? <Image src={p.coverImage} alt={p.title} fill className="object-cover transition-transform group-hover:scale-110" sizes="68px" />
                                                        : <div className="w-full h-full flex items-center justify-center text-emerald-200 bg-emerald-50"><BookOpen className="w-4 h-4" /></div>
                                                    }
                                                    <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-[#0D3B3E]/80 text-white text-[8px] font-black flex items-center justify-center">{i + 1}</div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-[12px] font-bold leading-[1.4] text-slate-800 group-hover:text-emerald-600 transition-colors line-clamp-2">{p.title}</h4>
                                                    <p className="text-[10px] text-slate-400 font-medium mt-1">
                                                        {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })()}

                        {/* 3. Table of Contents */}
                        {tocItems.length > 2 && (
                            <div className="sidebar-widget bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                                <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                                    <List className="w-3.5 h-3.5 text-emerald-600" />In This Article
                                </h3>
                                <nav className="space-y-0.5 max-h-64 overflow-y-auto no-scrollbar">
                                    {tocItems.map(item => (
                                        <a key={item.id} href={`#${item.id}`}
                                            className={`block text-[12px] py-1.5 px-3 rounded-lg transition-all duration-200 leading-snug border-l-2 ${activeToc === item.id ? "toc-active bg-emerald-50/60" : "border-transparent text-slate-500 font-medium hover:bg-slate-50 hover:text-emerald-700 hover:border-emerald-300"} ${item.level === 3 ? "ml-3 text-[11px]" : ""}`}
                                        >{item.text}</a>
                                    ))}
                                </nav>
                            </div>
                        )}

                        {/* 4. Quick Island Guide */}
                        {hasGuide && (
                            <div className="sidebar-widget bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                                <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                                    <Compass className="w-3.5 h-3.5 text-[#0D3B3E]" />Quick Island Guide
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { emoji: "📍", label: "Location", value: post.location },
                                        { emoji: "⏱", label: "Duration", value: post.timeNeeded },
                                        { emoji: "☀️", label: "Best Time", value: post.bestTime },
                                        { emoji: "❤️", label: "Best For", value: post.articleType },
                                    ].filter(r => r.value).map(row => (
                                        <div key={row.label} className="flex items-start gap-3">
                                            <span className="text-base mt-0.5 shrink-0">{row.emoji}</span>
                                            <div>
                                                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">{row.label}</p>
                                                <p className="text-[13px] font-bold text-slate-800 mt-0.5">{row.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 5. Browse by Topic */}
                        <div className="sidebar-widget bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                                <Tag className="w-3.5 h-3.5 text-[#0D3B3E]" />Browse by Topic
                            </h3>
                            <ul className="space-y-0.5">
                                {CATEGORIES.map(cat => {
                                    const isActive = post.category?.slug === cat.slug;
                                    return (
                                        <li key={cat.slug}>
                                            <Link href={`/blog?category=${cat.slug}`}
                                                className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all text-[12px] font-medium group ${isActive ? "bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/60" : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"}`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-500" : "bg-slate-300 group-hover:bg-emerald-400"} transition-colors`} />
                                                    {cat.name}
                                                </span>
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600"} transition-colors`}>
                                                    {cat.count}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* 6. Destination Guide */}
                        {post.destination && (
                            <div className="sidebar-widget bg-gradient-to-br from-[#0D3B3E] to-[#0a2e30] text-white rounded-2xl p-5 shadow-lg">
                                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 block mb-1.5">Explore Region</span>
                                <h3 className="text-[15px] font-black text-white mb-1.5">{post.destination.name} Guide</h3>
                                <p className="text-[11px] text-white/65 font-light leading-relaxed mb-4">
                                    Discover hotels, itineraries, and activities in {post.destination.name}.
                                </p>
                                <Link href={`/destinations/${post.destination.slug}`}
                                    className="inline-flex items-center justify-center gap-1.5 w-full h-10 rounded-xl bg-[#B47225] hover:bg-[#955a1a] text-white text-[11px] font-black uppercase tracking-widest transition-all animate-pulse-glow"
                                >
                                    View Destination <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        )}

                        {/* 7. Plan With Catch Ceylon CTA */}
                        <div className="sidebar-widget rounded-2xl overflow-hidden shadow-xl relative">
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#071E20] via-[#0D3B3E] to-[#0a4a4d] animate-gradient-shift" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400/10 rounded-full blur-xl -ml-6 -mb-6 pointer-events-none" />

                            <div className="relative z-10 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                                        <Compass className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Plan With Catch Ceylon</span>
                                </div>
                                <h3 className="font-heading text-[17px] font-extrabold text-white leading-[1.25] mb-2 tracking-tight">
                                    Turn this guide into your Sri Lanka route
                                </h3>
                                <p className="text-[11px] text-white/70 font-light leading-[1.65] mb-5">
                                    Send your dates, group size and the places you want to visit.
                                </p>

                                <div className="space-y-2.5 mb-4">
                                    <Link href="/register"
                                        className="flex items-center justify-center gap-2 w-full h-[42px] rounded-xl text-slate-900 text-[12px] font-black tracking-wide transition-all cursor-pointer shadow-lg"
                                        style={{ background: "linear-gradient(135deg,#F5B445,#F2A320)" }}
                                    >
                                        Plan Your Trip <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <button onClick={() => handleShare("whatsapp")}
                                        className="flex items-center justify-center gap-2 w-full h-[42px] rounded-xl bg-white/8 border border-white/15 hover:bg-white/15 text-white text-[12px] font-bold tracking-wide transition-all cursor-pointer backdrop-blur-sm"
                                    >
                                        <WhatsApp className="w-3.5 h-3.5" />Ask on WhatsApp
                                    </button>
                                </div>

                                <div className="grid grid-cols-3 border-t border-white/10 pt-3.5 mt-1">
                                    {["Local planning", "No payment", "Fast reply"].map((label, i) => (
                                        <div key={label} className={`text-center ${i < 2 ? "border-r border-white/10" : ""}`}>
                                            <p className="text-[9px] font-bold text-white/50 uppercase tracking-wide leading-snug">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>

            {/* ── Lightbox Modal ─────────────────────────────────────────── */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[500] bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 animate-fade-in"
                    onClick={() => setLightboxImage(null)}
                >
                    <button onClick={() => setLightboxImage(null)}
                        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer z-[510] border border-white/15"
                        aria-label="Close"
                    ><X className="w-5 h-5" /></button>
                    <div className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
                        <div className="relative w-full max-h-[80vh] flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={lightboxImage.src} alt={lightboxImage.alt}
                                className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                            />
                        </div>
                        {lightboxImage.caption && (
                            <p className="text-white/80 text-xs sm:text-sm italic mt-4 text-center max-w-xl bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                                {lightboxImage.caption}
                            </p>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}