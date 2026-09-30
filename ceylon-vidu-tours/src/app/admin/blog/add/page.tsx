"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import {
    ArrowLeft,
    Save,
    Loader2,
    Plus,
    Trash2,
    ChevronRight,
    Upload,
    Image as ImageIcon,
    FileText,
    Globe,
    Tag,
    BookOpen,
    AlignLeft,
    Check,
} from "lucide-react";
import { useAuthStore } from "@/stores/auth.store";

interface BlogCategory {
    id: string;
    name: string;
    slug: string;
}

export default function AdminAddBlogPage() {
    const router = useRouter();
    const { accessToken, isAuthenticated } = useAuthStore();

    const [submitting, setSubmitting] = useState(false);
    const [categories, setCategories] = useState<BlogCategory[]>([]);
    const [catInput, setCatInput] = useState("");
    const [addingCat, setAddingCat] = useState(false);

    const [form, setForm] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        authorName: "Ceylon Vidu Tours",
        categoryId: "",
        status: "DRAFT" as "DRAFT" | "PUBLISHED" | "ARCHIVED",
        featured: false,
        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        tags: [] as string[],
    });

    const [tagInput, setTagInput] = useState("");
    const [coverFile, setCoverFile] = useState<File | null>(null);
    const [coverPreview, setCoverPreview] = useState<string>("");
    const [uploadingInline, setUploadingInline] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const inlineImageInputRef = useRef<HTMLInputElement>(null);
    const contentTextareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!accessToken && !isAuthenticated) {
            router.push("/admin/login");
            return;
        }

        // Fetch categories
        apiClient
            .get("/blog/categories")
            .then((res) => {
                if (res.data?.success) {
                    setCategories(res.data.data || []);
                }
            })
            .catch(() => {
                toast.error("Failed to load blog categories");
            });
    }, [accessToken, isAuthenticated, router]);

    const handleTitleChange = (val: string) => {
        const generatedSlug = val
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");
        setForm((prev) => ({ ...prev, title: val, slug: generatedSlug }));
    };

    const handleCoverFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setCoverFile(file);
            setCoverPreview(URL.createObjectURL(file));
        }
    };

    const handleInlineImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadingInline(true);
        const loadingToast = toast.loading("Uploading image...");
        try {
            const formData = new FormData();
            formData.append("image", file);

            const res = await apiClient.post("/blog/upload-image", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const imgUrl = res.data.data.url;
            const imgMarkdown = `\n<img src="${imgUrl}" alt="Inline post media" className="w-full rounded-2xl my-6 shadow-sm object-cover" />\n`;

            if (contentTextareaRef.current) {
                const start = contentTextareaRef.current.selectionStart;
                const end = contentTextareaRef.current.selectionEnd;
                const currentContent = form.content;

                const newContent =
                    currentContent.substring(0, start) +
                    imgMarkdown +
                    currentContent.substring(end);
                setForm((f) => ({ ...f, content: newContent }));

                setTimeout(() => {
                    if (contentTextareaRef.current) {
                        contentTextareaRef.current.focus();
                        contentTextareaRef.current.setSelectionRange(
                            start + imgMarkdown.length,
                            start + imgMarkdown.length
                        );
                    }
                }, 50);
            } else {
                setForm((f) => ({ ...f, content: f.content + imgMarkdown }));
            }

            toast.success("Image inserted into content.", { id: loadingToast });
        } catch (error) {
            console.error(error);
            toast.error("Failed to upload image", { id: loadingToast });
        } finally {
            setUploadingInline(false);
            if (inlineImageInputRef.current) inlineImageInputRef.current.value = "";
        }
    };

    const handleAddTag = () => {
        const t = tagInput.trim();
        if (t && !form.tags.includes(t)) {
            setForm((prev) => ({ ...prev, tags: [...prev.tags, t] }));
            setTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setForm((prev) => ({
            ...prev,
            tags: prev.tags.filter((t) => t !== tagToRemove),
        }));
    };

    const handleAddCategory = async () => {
        if (!catInput.trim()) return;
        setAddingCat(true);
        try {
            const res = await apiClient.post("/blog/categories", { name: catInput.trim() });
            if (res.data?.success) {
                toast.success("Category added!");
                setCatInput("");
                const catsRes = await apiClient.get("/blog/categories");
                if (catsRes.data?.success) setCategories(catsRes.data.data || []);
            }
        } catch {
            toast.error("Failed to add category.");
        } finally {
            setAddingCat(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.title || !form.content) {
            toast.error("Please fill in article Title and Content.");
            return;
        }

        setSubmitting(true);
        try {
            const fd = new FormData();
            Object.entries(form).forEach(([k, v]) => {
                if (k === "tags") fd.append(k, JSON.stringify(v));
                else if (k === "featured") fd.append(k, String(v));
                else fd.append(k, String(v ?? ""));
            });

            if (coverFile) {
                fd.append("coverImage", coverFile);
            }

            const res = await apiClient.post("/blog/posts", fd, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (res.data?.success) {
                toast.success("Blog article published successfully!");
                router.push("/admin/blog");
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to publish article.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full pb-16">
            {/* Header & Breadcrumbs */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/blog"
                        className="p-2.5 rounded-lg border border-[#E4E7EC] bg-white text-[#6B7280] hover:text-[#111827] hover:bg-[#F9FAFB] transition"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-[#111827] tracking-tight">
                            Add New Article
                        </h1>
                        <p className="text-sm text-[#6B7280] mt-0.5">
                            Create and publish a new blog post or travel guide.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <nav className="hidden md:flex items-center gap-2 text-base text-[#6B7280]">
                        <Link href="/admin/dashboard" className="hover:text-[#465FFF]">
                            Home
                        </Link>
                        <ChevronRight className="h-4.5 w-4.5 text-[#9CA3AF]" />
                        <Link href="/admin/blog" className="hover:text-[#465FFF]">
                            Blog
                        </Link>
                        <ChevronRight className="h-4.5 w-4.5 text-[#9CA3AF]" />
                        <span className="text-[#111827] font-medium">Add Article</span>
                    </nav>

                    <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#465FFF] hover:bg-[#3441b8] text-white font-medium text-base rounded-lg shadow-sm transition disabled:opacity-60"
                    >
                        {submitting ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <Save className="h-5 w-5" />
                        )}
                        <span>{submitting ? "Publishing..." : "Publish Article"}</span>
                    </button>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Main Content) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Basic Info */}
                    <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                        <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                            <BookOpen className="h-6 w-6 text-[#465FFF]" />
                            <h2 className="text-lg font-bold text-[#111827]">Basic Article Information</h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Article Title <span className="text-[#EF4444]">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.title}
                                    onChange={(e) => handleTitleChange(e.target.value)}
                                    placeholder="e.g. 10 Must-Visit Places in Sigiriya & Dambulla"
                                    className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none focus:border-[#465FFF] transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    URL Slug
                                </label>
                                <input
                                    type="text"
                                    value={form.slug}
                                    onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                                    placeholder="must-visit-places-sigiriya"
                                    className="w-full h-12 px-4 bg-[#F9FAFB] border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-mono outline-none focus:border-[#465FFF] transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Excerpt / Summary
                                </label>
                                <textarea
                                    rows={3}
                                    value={form.excerpt}
                                    onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
                                    placeholder="A brief catchy summary of the article..."
                                    className="w-full p-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none focus:border-[#465FFF] transition resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
                            <div className="flex items-center gap-3">
                                <AlignLeft className="h-6 w-6 text-[#465FFF]" />
                                <h2 className="text-lg font-bold text-[#111827]">Article Body Content</h2>
                            </div>

                            <button
                                type="button"
                                onClick={() => inlineImageInputRef.current?.click()}
                                disabled={uploadingInline}
                                className="text-xs font-semibold text-[#465FFF] hover:underline flex items-center gap-1 bg-[#EBF1FF] px-3 py-1.5 rounded-lg"
                            >
                                {uploadingInline ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <ImageIcon className="h-4 w-4" />
                                )}
                                Insert Inline Media
                            </button>
                            <input
                                ref={inlineImageInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleInlineImageUpload}
                            />
                        </div>

                        <div>
                            <textarea
                                ref={contentTextareaRef}
                                required
                                rows={16}
                                value={form.content}
                                onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
                                placeholder="Write full article content using markdown or HTML formatting..."
                                className="w-full p-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-mono leading-relaxed outline-none focus:border-[#465FFF] transition"
                            />
                        </div>
                    </div>

                    {/* SEO Settings */}
                    <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                        <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                            <Globe className="h-6 w-6 text-[#465FFF]" />
                            <h2 className="text-lg font-bold text-[#111827]">Search Engine Optimization (SEO)</h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    SEO Title
                                </label>
                                <input
                                    type="text"
                                    value={form.seoTitle}
                                    onChange={(e) => setForm((prev) => ({ ...prev, seoTitle: e.target.value }))}
                                    placeholder="Title for Google search results..."
                                    className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none focus:border-[#465FFF] transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Meta Description
                                </label>
                                <textarea
                                    rows={3}
                                    value={form.seoDescription}
                                    onChange={(e) => setForm((prev) => ({ ...prev, seoDescription: e.target.value }))}
                                    placeholder="Short snippet displayed in search results..."
                                    className="w-full p-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none focus:border-[#465FFF] transition resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Keywords
                                </label>
                                <input
                                    type="text"
                                    value={form.seoKeywords}
                                    onChange={(e) => setForm((prev) => ({ ...prev, seoKeywords: e.target.value }))}
                                    placeholder="sri lanka travel, sigiriya, tour guides..."
                                    className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none focus:border-[#465FFF] transition"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Sidebar Settings & Media) */}
                <div className="space-y-8">
                    {/* Cover Image Upload */}
                    <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                        <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                            <ImageIcon className="h-6 w-6 text-[#465FFF]" />
                            <h2 className="text-lg font-bold text-[#111827]">Cover Image</h2>
                        </div>

                        <div>
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#E4E7EC] bg-[#F9FAFB] cursor-pointer hover:border-[#465FFF] transition overflow-hidden p-6 text-center"
                            >
                                {coverPreview ? (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        src={coverPreview}
                                        alt="Cover preview"
                                        className="w-full h-44 object-cover rounded-lg"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-2 text-[#6B7280]">
                                        <Upload className="h-8 w-8 text-[#465FFF]" />
                                        <span className="text-base font-medium text-[#111827]">
                                            Click to upload cover image
                                        </span>
                                        <span className="text-xs text-[#9CA3AF]">
                                            PNG, JPG, WEBP up to 5MB
                                        </span>
                                    </div>
                                )}
                            </div>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleCoverFileChange}
                            />
                        </div>
                    </div>

                    {/* Publish & Status */}
                    <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm p-7 space-y-6">
                        <div className="flex items-center gap-3 border-b border-[#F2F4F7] pb-4">
                            <Tag className="h-6 w-6 text-[#465FFF]" />
                            <h2 className="text-lg font-bold text-[#111827]">Publishing Settings</h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Publication Status
                                </label>
                                <select
                                    value={form.status}
                                    onChange={(e) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            status: e.target.value as any,
                                        }))
                                    }
                                    className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-semibold outline-none focus:border-[#465FFF] cursor-pointer"
                                >
                                    <option value="DRAFT">DRAFT</option>
                                    <option value="PUBLISHED">PUBLISHED</option>
                                    <option value="ARCHIVED">ARCHIVED</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Category
                                </label>
                                <select
                                    value={form.categoryId}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, categoryId: e.target.value }))
                                    }
                                    className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] font-medium outline-none focus:border-[#465FFF] cursor-pointer"
                                >
                                    <option value="">— Select Category —</option>
                                    {categories.map((c) => (
                                        <option key={c.id} value={c.id}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>

                                {/* Inline Category Add */}
                                <div className="mt-3 flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="New category..."
                                        value={catInput}
                                        onChange={(e) => setCatInput(e.target.value)}
                                        className="flex-1 h-10 px-3 bg-[#F9FAFB] border border-[#E4E7EC] rounded-lg text-sm text-[#111827] outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddCategory}
                                        disabled={addingCat}
                                        className="h-10 px-4 bg-[#EBF1FF] text-[#465FFF] text-sm font-semibold rounded-lg hover:bg-[#dbe7ff] transition"
                                    >
                                        {addingCat ? "..." : "+ Add"}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Author Name
                                </label>
                                <input
                                    type="text"
                                    value={form.authorName}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, authorName: e.target.value }))
                                    }
                                    className="w-full h-12 px-4 bg-white border border-[#E4E7EC] rounded-lg text-base text-[#111827] outline-none focus:border-[#465FFF]"
                                />
                            </div>

                            {/* Tags Input */}
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-2">
                                    Tags
                                </label>
                                <div className="flex gap-2 mb-2">
                                    <input
                                        type="text"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                handleAddTag();
                                            }
                                        }}
                                        placeholder="Add tag and press Enter..."
                                        className="flex-1 h-10 px-3 bg-white border border-[#E4E7EC] rounded-lg text-sm text-[#111827] outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddTag}
                                        className="h-10 px-4 bg-[#F2F4F7] text-[#111827] text-sm font-medium rounded-lg hover:bg-[#E4E7EC] transition"
                                    >
                                        Add
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {form.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2F4F7] text-[#111827] text-xs font-semibold rounded-full"
                                        >
                                            #{tag}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveTag(tag)}
                                                className="text-[#9CA3AF] hover:text-[#EF4444]"
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
