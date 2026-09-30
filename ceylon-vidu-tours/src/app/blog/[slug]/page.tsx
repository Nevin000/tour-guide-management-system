import { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BlogDetailClient from "./blog-detail-client";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// 1. Dynamic SEO Metadata Generation (fully compliant with Google Developers and Next.js App Router)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const post = await prisma.blogPost.findFirst({
        where: { slug }
    });

    if (!post) return {};

    const title = `${post.seoTitle || post.title} | Ceylon Vidu Tours`;
    const desc = post.seoDescription || post.excerpt || "Discover beautiful Sri Lanka itineraries and travel journals.";
    const canonicalUrl = `https://www.ceylonvidutours.com/blog/${post.slug}`;
    const ogImage = post.coverImage
        ? (post.coverImage.startsWith("http") ? post.coverImage : `https://www.ceylonvidutours.com${post.coverImage}`)
        : "https://www.ceylonvidutours.com/nine-arch-bridge-5657721_1280.jpg";

    return {
        title,
        description: desc,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description: desc,
            url: canonicalUrl,
            type: "article",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: desc,
            images: [ogImage],
        }
    };
}

// 2. Server Entry Component for Blog Detail Pages
export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    // Fetch the target blog post with location references, category info, tags, and places mentioned
    const post = await prisma.blogPost.findFirst({
        where: { slug },
        include: {
            category: true,
            tags: { include: { tag: true } },
            placesMentioned: true,
            destination: true,
        }
    });

    if (!post) {
        return notFound();
    }

    // 3. Related Articles Curation Algorithm (Priority matches: 1. same destination, 2. same category, 3. recent published)
    let relatedPostsList: any[] = [];

    // Prioritize search within same destination first
    if (post.destinationId) {
        relatedPostsList = await prisma.blogPost.findMany({
            where: {
                destinationId: post.destinationId,
                id: { not: post.id },
                status: "PUBLISHED"
            },
            include: { category: true },
            orderBy: { publishedAt: "desc" },
            take: 3
        });
    }

    // Fallback/merge search with posts sharing the same category
    if (relatedPostsList.length < 3 && post.categoryId) {
        const categoryPosts = await prisma.blogPost.findMany({
            where: {
                categoryId: post.categoryId,
                id: { not: post.id },
                status: "PUBLISHED",
                NOT: { id: { in: relatedPostsList.map(r => r.id) } }
            },
            include: { category: true },
            orderBy: { publishedAt: "desc" },
            take: 3 - relatedPostsList.length
        });
        relatedPostsList = [...relatedPostsList, ...categoryPosts];
    }

    // Fallback/merge search to recent travel stories
    if (relatedPostsList.length < 3) {
        const recentPosts = await prisma.blogPost.findMany({
            where: {
                id: { not: post.id },
                status: "PUBLISHED",
                NOT: { id: { in: relatedPostsList.map(r => r.id) } }
            },
            include: { category: true },
            orderBy: { publishedAt: "desc" },
            take: 3 - relatedPostsList.length
        });
        relatedPostsList = [...relatedPostsList, ...recentPosts];
    }

    // Serialize database models safely to plain objects for client hydration
    const plainPost = {
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
        publishedAt: post.publishedAt ? post.publishedAt.toISOString() : null,
        placesMentioned: post.placesMentioned.map((pm) => ({
            ...pm,
        })),
        tags: post.tags.map((pt) => ({
            ...pt,
            tag: {
                ...pt.tag,
            }
        })),
    };

    const plainRelated = relatedPostsList.map((rel) => ({
        ...rel,
        createdAt: rel.createdAt.toISOString(),
        updatedAt: rel.updatedAt.toISOString(),
        publishedAt: rel.publishedAt ? rel.publishedAt.toISOString() : null,
    }));

    // Fetch popular posts ordered by views
    let popularPostsList = await prisma.blogPost.findMany({
        where: {
            status: "PUBLISHED",
            id: { not: post.id }
        },
        include: { category: true },
        orderBy: { views: "desc" },
        take: 5
    });

    if (popularPostsList.length === 0) {
        popularPostsList = await prisma.blogPost.findMany({
            where: {
                id: { not: post.id }
            },
            include: { category: true },
            orderBy: { createdAt: "desc" },
            take: 5
        });
    }

    if (popularPostsList.length === 0) {
        popularPostsList = await prisma.blogPost.findMany({
            include: { category: true },
            orderBy: { views: "desc" },
            take: 5
        });
    }

    const plainPopular = popularPostsList.map((pop) => ({
        ...pop,
        createdAt: pop.createdAt.toISOString(),
        updatedAt: pop.updatedAt.toISOString(),
        publishedAt: pop.publishedAt ? pop.publishedAt.toISOString() : null,
    }));

    // 4. Generate Google-friendly JSON-LD Structure Scripts (BreadcrumbList & Article Schemas)
    const canonicalUrl = `https://www.ceylonvidutours.com/blog/${post.slug}`;
    const publisherLogo = "https://www.ceylonvidutours.com/logo.png";
    const ogImage = post.coverImage
        ? (post.coverImage.startsWith("http") ? post.coverImage : `https://www.ceylonvidutours.com${post.coverImage}`)
        : "https://www.ceylonvidutours.com/nine-arch-bridge-5657721_1280.jpg";

    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "headline": post.title,
        "description": post.seoDescription || post.excerpt || "",
        "image": [ogImage],
        "datePublished": post.publishedAt ? post.publishedAt.toISOString() : post.createdAt.toISOString(),
        "dateModified": post.updatedAt.toISOString(),
        "author": {
            "@type": "Person",
            "name": post.authorName || "Ceylon Vidu Tours",
            "url": "https://www.ceylonvidutours.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Ceylon Vidu Tours",
            "logo": {
                "@type": "ImageObject",
                "url": publisherLogo
            }
        }
    };

    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ceylonvidutours.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.ceylonvidutours.com/blog"
            },
            ...(post.category ? [
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": post.category.name,
                    "item": `https://www.ceylonvidutours.com/blog?category=${post.category.slug}`
                }
            ] : []),
            {
                "@type": "ListItem",
                "position": post.category ? 4 : 3,
                "name": post.title,
                "item": canonicalUrl
            }
        ]
    };

    return (
        <>
            {/* Embed Structured Data Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
            />

            {/* Hydrate dynamic states on Client side */}
            <BlogDetailClient post={plainPost as any} related={plainRelated as any} popular={plainPopular as any} />
        </>
    );
}