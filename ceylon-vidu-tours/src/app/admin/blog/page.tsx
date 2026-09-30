"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import {
    PlusCircle,
    Edit2,
    Trash2,
    Eye,
    X,
    Search,
    FileText,
    TrendingUp,
    Image as ImageIcon,
    Loader2,
    RefreshCw,
    BookOpen,
    Globe,
    ChevronRight,
    ExternalLink,
    User as UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";

interface BlogCategory {
    id: string;
    name: string;
    slug: string;
}

interface BlogTag {
    id: string;
    name: string;
    slug: string;
}

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    coverImage: string | null;
    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    featured: boolean;
    views: number;
    authorName: string;
    categoryId: string | null;
    category: BlogCategory | null;
    tags: { tag: BlogTag }[];
    seoTitle: string | null;
    seoDescription: string | null;
    seoKeywords: string | null;
    publishedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

function StatusBadge({ status }: { status: BlogPost["status"] }) {
    const cfg = {
        PUBLISHED: "bg-[#ECFDF5] text-[#10B981]",
        DRAFT: "bg-[#FFFBEB] text-[#F59E0B]",
        ARCHIVED: "bg-[#F3F4F6] text-[#6B7280]",
    };
    return (
        <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${cfg[status] || cfg.DRAFT}`}
        >
            {status}
        </span>
    );
}

export default function AdminBlogPage() {
    const router = useRouter();
    const { accessToken, isAuthenticated } = useAuthStore();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [categories, setCategories] = useState<BlogCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("ALL");
    const [categoryFilter, setCategoryFilter] = useState<string>("all");

    const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
            return;
        }
        fetchData();
    }, [accessToken, isAuthenticated]);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [postsRes, catsRes] = await Promise.all([
                apiClient.get("/blog/posts?admin=true&limit=100"),
                apiClient.get("/blog/categories"),
            ]);
            if (postsRes.data?.success) setPosts(postsRes.data.data.posts || []);
            if (catsRes.data?.success) setCategories(catsRes.data.data || []);
        } catch {
            toast.error("Failed to load blog articles.");
        } finally {
            setLoading(false);
        }
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog post permanently?")) return;
        try {
            await apiClient.delete(`/blog/posts/${id}`);
            toast.success("Blog post deleted.");
            fetchData();
        } catch {
            toast.error("Failed to delete post.");
        }
    };

    const filtered = useMemo(() => {
        return posts.filter((p) => {
            const q = search.toLowerCase();
            const matchSearch =
                p.title.toLowerCase().includes(q) ||
                (p.excerpt && p.excerpt.toLowerCase().includes(q));
            const matchStatus = statusFilter === "ALL" || p.status === statusFilter;
            const matchCategory =
                categoryFilter === "all" || p.categoryId === categoryFilter;

            return matchSearch && matchStatus && matchCategory;
        });
    }, [posts, search, statusFilter, categoryFilter]);

    const stats = useMemo(() => {
        return {
            total: posts.length,
            published: posts.filter((p) => p.status === "PUBLISHED").length,
            draft: posts.filter((p) => p.status === "DRAFT").length,
            totalViews: posts.reduce((a, p) => a + (p.views || 0), 0),
        };
    }, [posts]);

    return (
        <div className="w-full">
            {/* Page Header & Breadcrumbs */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-[#111827] tracking-tight">
                    Blog Management
                </h1>

                <nav className="flex items-center gap-2 text-base text-[#6B7280]">
                    <Link href="/admin/dashboard" className="hover:text-[#465FFF] transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="h-4.5 w-4.5 text-[#9CA3AF]" />
                    <span className="text-[#111827] font-medium">Blog Posts</span>
                </nav>
            </div>

            {/* Metric Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
                            Total Articles
                        </p>
                        <h3 className="text-2xl font-bold text-[#111827]">{stats.total}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-[#EBF1FF] text-[#465FFF] flex items-center justify-center shrink-0">
                        <BookOpen className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
                            Published
                        </p>
                        <h3 className="text-2xl font-bold text-[#10B981]">{stats.published}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
                        <Globe className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
                            Drafts
                        </p>
                        <h3 className="text-2xl font-bold text-[#F59E0B]">{stats.draft}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center shrink-0">
                        <FileText className="h-6 w-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
                            Total Readers
                        </p>
                        <h3 className="text-2xl font-bold text-[#111827]">
                            {stats.totalViews.toLocaleString()}
                        </h3>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-[#EBF1FF] text-[#465FFF] flex items-center justify-center shrink-0">
                        <TrendingUp className="h-6 w-6" />
                    </div>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
                {/* Card Header */}
                <div className="px-7 py-6 border-b border-[#F2F4F7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-[#111827]">Blog Articles</h2>
                        <p className="text-sm text-[#6B7280] mt-1">
                            View, edit, filter, and publish travel articles and guides.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchData}
                            className="p-3 rounded-lg border border-[#E4E7EC] text-[#6B7280] hover:bg-[#F9FAFB] transition"
                            title="Refresh Posts"
                        >
                            <RefreshCw className="h-5 w-5" />
                        </button>

                        <button
                            onClick={() => router.push("/admin/blog/add")}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#465FFF] hover:bg-[#3441b8] text-white font-medium text-base rounded-lg shadow-sm transition"
                        >
                            <PlusCircle className="h-5 w-5" />
                            <span>New Article</span>
                        </button>
                    </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="px-7 py-5 border-b border-[#F2F4F7] space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                        {/* Search Input */}
                        <div className="flex-1 flex items-center gap-3 h-12 px-4 bg-transparent border border-[#E4E7EC] rounded-lg focus-within:border-[#465FFF] transition">
                            <Search className="h-5 w-5 text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search articles by title or excerpt..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent w-full text-base text-[#111827] placeholder:text-[#9CA3AF] outline-none font-medium"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="h-12 px-4 bg-transparent border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-medium focus:border-[#465FFF] outline-none cursor-pointer min-w-[180px]"
                        >
                            <option value="all">All Categories</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Status Pills Bar */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {["ALL", "PUBLISHED", "DRAFT", "ARCHIVED"].map((s) => (
                            <button
                                key={s}
                                onClick={() => setStatusFilter(s)}
                                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition ${statusFilter === s
                                    ? "bg-[#465FFF] text-white shadow-sm"
                                    : "bg-[#F9FAFB] text-[#6B7280] border border-[#E4E7EC] hover:bg-[#F2F4F7]"
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="h-64 flex flex-col items-center justify-center space-y-3">
                            <Loader2 className="h-10 w-10 animate-spin text-[#465FFF]" />
                            <span className="text-base font-medium text-[#6B7280]">
                                Loading blog articles...
                            </span>
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="h-64 flex flex-col items-center justify-center text-[#6B7280]">
                            <BookOpen className="h-12 w-12 mb-3 stroke-[1.5]" />
                            <p className="text-base font-medium">No blog posts found.</p>
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[#E4E7EC] bg-[#F9FAFB]">
                                    <th className="py-4 px-7 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                                        Article
                                    </th>
                                    <th className="py-4 px-5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="py-4 px-5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="py-4 px-5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                                        Views
                                    </th>
                                    <th className="py-4 px-5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                                        Published Date
                                    </th>
                                    <th className="py-4 px-7 text-xs font-semibold text-[#6B7280] uppercase tracking-wider text-right">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2F4F7]">
                                {filtered.map((post) => (
                                    <tr key={post.id} className="hover:bg-[#F9FAFB] transition">
                                        <td className="py-5 px-7">
                                            <div className="flex items-center gap-4">
                                                {post.coverImage ? (
                                                    /* eslint-disable-next-line @next/next/no-img-element */
                                                    <img
                                                        src={post.coverImage}
                                                        alt={post.title}
                                                        className="h-14 w-20 rounded-lg object-cover bg-[#F9FAFB] border border-[#E4E7EC] shrink-0"
                                                    />
                                                ) : (
                                                    <div className="h-14 w-20 rounded-lg bg-[#F9FAFB] border border-[#E4E7EC] flex items-center justify-center shrink-0 text-[#9CA3AF]">
                                                        <ImageIcon className="h-6 w-6" />
                                                    </div>
                                                )}
                                                <div className="space-y-1">
                                                    <p className="font-semibold text-[#111827] text-base truncate max-w-sm">
                                                        {post.title}
                                                    </p>
                                                    <p className="text-xs font-mono text-[#6B7280]">
                                                        /blog/{post.slug}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-5">
                                            {post.category ? (
                                                <span className="inline-block text-xs font-medium text-[#465FFF] bg-[#EBF1FF] px-2.5 py-1 rounded-full">
                                                    {post.category.name}
                                                </span>
                                            ) : (
                                                <span className="text-xs text-[#9CA3AF]">
                                                    Uncategorized
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-5 px-5">
                                            <StatusBadge status={post.status} />
                                        </td>
                                        <td className="py-5 px-5 font-semibold text-[#111827] text-base">
                                            {(post.views || 0).toLocaleString()}
                                        </td>
                                        <td className="py-5 px-5 text-sm text-[#6B7280]">
                                            {post.publishedAt
                                                ? new Date(post.publishedAt).toLocaleDateString(
                                                    "en-US",
                                                    { month: "short", day: "numeric", year: "numeric" }
                                                )
                                                : new Date(post.createdAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                        </td>
                                        <td className="py-5 px-7">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setPreviewPost(post)}
                                                    className="p-2.5 rounded-lg hover:bg-[#F2F4F7] text-[#6B7280] hover:text-[#465FFF] transition"
                                                    title="Preview Article"
                                                >
                                                    <Eye className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() => router.push(`/admin/blog/edit/${post.id}`)}
                                                    className="p-2.5 rounded-lg hover:bg-[#F2F4F7] text-[#6B7280] hover:text-[#465FFF] transition"
                                                    title="Edit Article"
                                                >
                                                    <Edit2 className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(post.id)}
                                                    className="p-2.5 rounded-lg hover:bg-[#FEF3F2] text-[#6B7280] hover:text-[#EF4444] transition"
                                                    title="Delete Post"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Footer Count Bar */}
                {!loading && filtered.length > 0 && (
                    <div className="px-7 py-5 border-t border-[#F2F4F7] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-base text-[#6B7280]">
                            Showing{" "}
                            <span className="font-medium text-[#111827]">{filtered.length}</span> of{" "}
                            <span className="font-medium text-[#111827]">{posts.length}</span>{" "}
                            articles
                        </span>

                        <div className="flex items-center gap-2">
                            <button className="h-10 px-4 rounded-lg border border-[#E4E7EC] text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB] transition">
                                Previous
                            </button>
                            <button className="h-10 w-10 rounded-lg bg-[#465FFF] text-white text-sm font-medium">
                                1
                            </button>
                            <button className="h-10 px-4 rounded-lg border border-[#E4E7EC] text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB] transition">
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Article Preview Modal Popup */}
            {previewPost && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111827]/60 backdrop-blur-xs"
                    onClick={() => setPreviewPost(null)}
                >
                    <div
                        className="w-full max-w-2xl bg-white rounded-2xl border border-[#E4E7EC] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Cover Banner */}
                        <div className="relative h-60 bg-[#F9FAFB] w-full overflow-hidden">
                            {previewPost.coverImage ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                    src={previewPost.coverImage}
                                    alt={previewPost.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-[#EBF1FF] text-[#465FFF]">
                                    <BookOpen className="h-16 w-16 opacity-50" />
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                            <button
                                onClick={() => setPreviewPost(null)}
                                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold bg-[#465FFF] text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                        {previewPost.category?.name || "General"}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-white tracking-tight">
                                    {previewPost.title}
                                </h2>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto space-y-5 text-sm">
                            {/* Meta Info Bar */}
                            <div className="grid grid-cols-3 gap-3 p-4 bg-[#F9FAFB] rounded-xl border border-[#E4E7EC]">
                                <div className="space-y-0.5">
                                    <span className="text-xs text-[#6B7280] font-medium block">Author</span>
                                    <span className="text-base font-bold text-[#111827] flex items-center gap-1.5">
                                        <UserIcon className="h-4 w-4 text-[#465FFF]" />
                                        {previewPost.authorName || "Ceylon Vidu Tours"}
                                    </span>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-xs text-[#6B7280] font-medium block">Total Views</span>
                                    <span className="text-base font-bold text-[#111827]">
                                        {(previewPost.views || 0).toLocaleString()}
                                    </span>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-xs text-[#6B7280] font-medium block">Status</span>
                                    <StatusBadge status={previewPost.status} />
                                </div>
                            </div>

                            {/* Excerpt */}
                            {previewPost.excerpt && (
                                <div className="space-y-1">
                                    <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                                        Summary Excerpt
                                    </h4>
                                    <p className="text-sm font-medium text-[#111827] italic">
                                        &ldquo;{previewPost.excerpt}&rdquo;
                                    </p>
                                </div>
                            )}

                            {/* Content Body Preview */}
                            <div className="space-y-1.5">
                                <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                                    Article Content
                                </h4>
                                <div
                                    className="text-sm text-[#374151] leading-relaxed space-y-3 prose max-w-none font-sans"
                                    dangerouslySetInnerHTML={{ __html: previewPost.content }}
                                />
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-[#E4E7EC] bg-[#F9FAFB] flex items-center justify-between">
                            <button
                                onClick={() => setPreviewPost(null)}
                                className="px-5 py-2.5 rounded-lg border border-[#E4E7EC] text-sm font-medium text-[#374151] hover:bg-white transition"
                            >
                                Close Preview
                            </button>

                            <button
                                onClick={() => window.open(`/blog/${previewPost.slug}`, "_blank")}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#465FFF] hover:bg-[#3441b8] text-white text-sm font-medium rounded-lg shadow-sm transition"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Open Public Article Page
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
