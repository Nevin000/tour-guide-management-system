"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import axios from "axios";
import { Search, ArrowRight, Clock, Star, BookOpen, ChevronRight, Compass } from "lucide-react";

interface BlogTag { id: string; name: string; slug: string; }
interface BlogCategory { id: string; name: string; slug: string; _count?: { posts: number }; }
interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    coverImage: string | null;
    authorName: string;
    views: number;
    featured: boolean;
    status: string;
    category: BlogCategory | null;
    tags: { tag: BlogTag }[];
    publishedAt: string | null;
    createdAt: string;
    content: string;
}

function readingTime(content: string) {
    const words = content ? content.replace(/<[^>]+>/g, "").split(/\s+/).length : 0;
    return Math.max(1, Math.ceil(words / 200));
}

// Clean Reveal Component (Fast 500ms entrance)
function Reveal({ children, className = "", delay = 0, yOffset = 20 }: {
    children: React.ReactNode; className?: string; delay?: number; yOffset?: number;
}) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
        );
        const el = ref.current;
        if (el) obs.observe(el);
        return () => { if (el) obs.unobserve(el); };
    }, []);

    return (
        <div ref={ref} style={{
            transitionDelay: `${delay}ms`,
            transform: visible ? "translateY(0)" : `translateY(${yOffset}px)`,
            opacity: visible ? 1 : 0
        }}
            className={`transition-all duration-500 ease-out ${className}`}>
            {children}
        </div>
    );
}

// Standard Travel Guide Card (3 Cards Per Row Grid)
function StoryCard({ post }: { post: BlogPost }) {
    const rt = readingTime(post.content);
    const date = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
        : new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    return (
        <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-[1.8rem] overflow-hidden border border-slate-200 hover:border-emerald-300 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {post.coverImage ? (
                    <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-200">
                        <BookOpen className="h-12 w-12" />
                    </div>
                )}
                {post.category && (
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-900 shadow-sm">
                        {post.category.name}
                    </span>
                )}
            </div>

            <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    <span className="text-[#B47225] flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{rt} Min Read</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{date}</span>
                </div>

                <h3 className="font-serif text-[20px] font-medium leading-[1.3] text-slate-900 group-hover:text-emerald-700 transition-colors mb-3 line-clamp-2">
                    {post.title}
                </h3>

                {post.excerpt && (
                    <p className="text-[14px] leading-relaxed text-slate-500 line-clamp-2 flex-1 mb-6 font-light">{post.excerpt}</p>
                )}

                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <Compass className="h-3.5 w-3.5 text-emerald-600" />
                        </div>
                        <span className="text-[12px] font-bold text-slate-700">{post.authorName || "Ceylon Vidu"}</span>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 opacity-70 group-hover:opacity-100 transition-all flex items-center gap-1">
                        Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page: String(page), limit: "9" });
            if (search) params.set("search", search);
            if (activeCategory) params.set("category", activeCategory);
            const res = await axios.get(`/api/blog/posts?${params}`);
            if (res.data?.success) {
                setPosts(res.data.data.posts);
                setTotalPages(res.data.data.pagination.totalPages);
                setTotal(res.data.data.pagination.total);
            }
        } catch { }
        finally { setLoading(false); }
    }, [page, search, activeCategory]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchPosts();
        }, 400);
        return () => clearTimeout(timer);
    }, [search, activeCategory, page, fetchPosts]);

    useEffect(() => { setPage(1); }, [search, activeCategory]);

    const mainCategories = [
        { name: "All guides", slug: "" },
        { name: "Destinations", slug: "destinations" },
        { name: "Food & Culture", slug: "food-culture" },
        { name: "Travel Guides", slug: "travel-guides" },
        { name: "Travel News & Updates", slug: "travel-news-updates" },
        { name: "Travel Tips", slug: "travel-tips" },
        { name: "Wildlife & Nature", slug: "wildlife-nature" },
        { name: "Beaches", slug: "beaches" }
    ];

    return (
        <main className="min-h-screen bg-[#fafafa] font-sans selection:bg-emerald-500 selection:text-white">
            <Navbar />

            {/* Editorial Hero Header */}
            <section className="relative overflow-hidden bg-slate-950 pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-32 border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/nine-arch-bridge-5657721_1280.jpg"
                        alt="Nine Arch Bridge Sri Lanka"
                        fill
                        priority
                        className="object-cover opacity-25 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
                </div>

                <div className="relative z-10 mx-auto flex w-full max-w-[2100px] flex-col items-center px-6 sm:px-10 lg:px-16 text-center">
                    {/* Breadcrumbs */}
                    <Reveal delay={0}>
                        <div className="flex items-center gap-2 text-[12px] font-bold text-white/50 mb-6 uppercase tracking-widest">
                            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white/90">Sri Lanka Travel Blog</span>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.1] tracking-tight text-white mb-5">
                            Sri Lanka Travel Blog
                        </h1>
                    </Reveal>

                    <Reveal delay={150}>
                        <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-emerald-300 font-normal italic mb-6">
                            Travel Better With Local Sri Lanka Knowledge
                        </h2>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="mx-auto max-w-3xl text-[15px] sm:text-[17px] leading-relaxed text-white/70 font-light mb-10">
                            Explore destination guides, seasonal advice and practical planning notes from the Ceylon Vidu team. Use these stories to choose the places, experiences and travel pace that fit your journey.
                        </p>
                    </Reveal>

                    {/* Counter Badge */}
                    <Reveal delay={250}>
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white/90">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{total || posts.length} published guides in this view</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="relative z-10 py-12 sm:py-16 lg:py-20">
                <div className="mx-auto w-full max-w-[2100px] px-6 sm:px-10 lg:px-16 2xl:px-20">

                    {/* Search & Category Filter Navigation */}
                    <div id="blog-search" className="max-w-4xl mx-auto -mt-20 sm:-mt-24 relative z-25 mb-14">
                        <Reveal delay={0}>
                            <div className="relative group mb-8">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-[#B47225] rounded-[1.6rem] blur opacity-20 group-hover:opacity-35 transition duration-1000" />
                                <div className="relative flex w-full h-[62px] rounded-[1.5rem] shadow-xl border border-slate-200 overflow-hidden bg-white hover:border-emerald-300 transition-all duration-300 z-10">
                                    <div className="pl-6 flex items-center shrink-0">
                                        <Search className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="🔍 Search Sri Lanka travel guides, itineraries, tips..."
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                        className="flex-1 bg-transparent px-4 text-[15px] font-medium text-slate-800 outline-none placeholder:text-slate-400 placeholder:font-light"
                                    />
                                    {search && (
                                        <button onClick={() => setSearch("")} className="px-5 text-xs font-bold text-slate-500 hover:text-slate-700 transition">
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Category Filter Pills */}
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                {mainCategories.map((cat) => {
                                    const isActive = activeCategory === cat.slug;
                                    return (
                                        <button
                                            key={cat.name}
                                            onClick={() => setActiveCategory(cat.slug)}
                                            className={`px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xs ${isActive
                                                ? "bg-slate-900 border border-slate-900 text-white shadow-md scale-102"
                                                : "bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200"
                                                }`}
                                        >
                                            {cat.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </Reveal>
                    </div>

                    {loading ? (
                        <div className="flex h-[40vh] items-center justify-center flex-col gap-4 mt-12">
                            <div className="relative">
                                <div className="h-16 w-16 rounded-full border-4 border-slate-100" />
                                <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
                            </div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Loading Travel Guides...</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <Reveal className="mt-12">
                            <div className="flex flex-col items-center justify-center h-96 gap-6 bg-white rounded-[3rem] border border-slate-200 shadow-sm text-center p-10">
                                <div className="h-20 w-20 rounded-full bg-emerald-50 flex items-center justify-center">
                                    <BookOpen className="h-9 w-9 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-3xl font-medium text-slate-900 mb-2">No guides found</h3>
                                    <p className="text-slate-500 max-w-md mx-auto leading-relaxed font-light">Try adjusting your category filter or search query.</p>
                                </div>
                                {search && (
                                    <button onClick={() => setSearch("")} className="mt-2 bg-slate-900 text-white font-bold uppercase tracking-wider text-xs px-7 py-3 rounded-full hover:bg-slate-800 transition">
                                        Clear Search
                                    </button>
                                )}
                            </div>
                        </Reveal>
                    ) : (
                        <div className="flex flex-col gap-12">

                            {/* Clean 3-Column Blog Cards Grid (3 cards per row) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post, i) => (
                                    <Reveal key={post.id} delay={(i % 3) * 100}>
                                        <StoryCard post={post} />
                                    </Reveal>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <Reveal delay={100} className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Page {page} of {totalPages}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => { window.scrollTo({ top: 400, behavior: 'smooth' }); setTimeout(() => setPage(p => Math.max(1, p - 1)), 300); }}
                                            disabled={page === 1}
                                            className="px-5 py-3 rounded-full border border-slate-200 bg-white text-[11px] font-black uppercase tracking-widest text-slate-800 hover:border-slate-800 hover:bg-slate-50 disabled:opacity-30 transition-all flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed">
                                            <ChevronRight className="h-4 w-4 rotate-180" /> Prev
                                        </button>

                                        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pNum) => {
                                            const isSelected = pNum === page;
                                            return (
                                                <button
                                                    key={pNum}
                                                    onClick={() => { window.scrollTo({ top: 400, behavior: 'smooth' }); setTimeout(() => setPage(pNum), 300); }}
                                                    className={`h-11 w-11 rounded-full text-xs font-black transition-all ${isSelected
                                                        ? "bg-slate-900 border border-slate-900 text-white shadow-md"
                                                        : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                                                        } cursor-pointer`}
                                                >
                                                    {pNum}
                                                </button>
                                            );
                                        })}

                                        <button
                                            onClick={() => { window.scrollTo({ top: 400, behavior: 'smooth' }); setTimeout(() => setPage(p => Math.min(totalPages, p + 1)), 300); }}
                                            disabled={page === totalPages}
                                            className="px-5 py-3 rounded-full border border-slate-200 bg-white text-[11px] font-black uppercase tracking-widest text-slate-800 hover:border-slate-800 hover:bg-slate-50 disabled:opacity-30 transition-all flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed font-medium">
                                            Next <ChevronRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </Reveal>
                            )}

                        </div>
                    )}
                </div>
            </section>

            {/* Site Footer */}
            <Footer />
        </main>
    );
}
