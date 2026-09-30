import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    try {
        const { slug } = await props.params;
        const post = await prisma.blogPost.findUnique({
            where: { slug },
            include: {
                category: true,
                tags: { include: { tag: true } }
            }
        });

        if (!post) {
            return {
                title: "Article Not Found | Ceylon Vidu Tours",
            };
        }

        const title = post.seoTitle || post.title;
        const description = post.seoDescription || post.excerpt || "Travel story by Ceylon Vidu Tours.";
        const publishedDate = post.publishedAt?.toISOString() || post.createdAt.toISOString();
        const updatedDate = post.updatedAt?.toISOString() || publishedDate;

        let keywords: string[] = post.seoKeywords ? post.seoKeywords.split(",").map((k: string) => k.trim()) : [];
        if (keywords.length === 0) {
            keywords = post.tags.map((t: any) => t.tag.name);
        }
        if (post.category) keywords.push(post.category.name);

        return {
            title: `${title} | Ceylon Vidu Journal`,
            description: description,
            keywords: keywords.length > 0 ? keywords : ["Sri Lanka", "Travel Blog", "Ceylon Vidu"],
            alternates: {
                canonical: `https://ceylonvidutours.com/blog/${post.slug}`,
            },
            openGraph: {
                title: title,
                description: description,
                url: `https://ceylonvidutours.com/blog/${post.slug}`,
                siteName: "Ceylon Vidu Tours",
                type: "article",
                publishedTime: publishedDate,
                modifiedTime: updatedDate,
                authors: [post.authorName],
                images: post.coverImage ? [
                    {
                        url: post.coverImage,
                        width: 1200,
                        height: 630,
                        alt: title,
                    }
                ] : [],
            },
            twitter: {
                card: "summary_large_image",
                title: title,
                description: description,
                images: post.coverImage ? [post.coverImage] : [],
            }
        };
    } catch (error) {
        return {
            title: "Ceylon Vidu Journal",
        };
    }
}

export default async function BlogPostLayout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({
        where: { slug },
        include: { category: true }
    });

    if (!post) return <>{children}</>;

    const publishedDate = post.publishedAt?.toISOString() || post.createdAt.toISOString();
    const updatedDate = post.updatedAt?.toISOString() || publishedDate;
    const siteUrl = "https://ceylonvidutours.com";

    // 1. Article Schema
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.seoTitle || post.title,
        "description": post.seoDescription || post.excerpt,
        "image": post.coverImage ? [post.coverImage] : [],
        "datePublished": publishedDate,
        "dateModified": updatedDate,
        "author": [{
            "@type": "Person",
            "name": post.authorName || "Ceylon Vidu Tours",
            "url": `${siteUrl}/about`
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Ceylon Vidu Tours",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteUrl}/blog/${post.slug}`
        }
    };

    // 2. BreadcrumbList Schema
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Travel Journal",
                "item": `${siteUrl}/blog`
            },
            ...(post.category ? [{
                "@type": "ListItem",
                "position": 3,
                "name": post.category.name,
                "item": `${siteUrl}/blog?category=${post.category.slug}`
            }] : []),
            {
                "@type": "ListItem",
                "position": post.category ? 4 : 3,
                "name": post.title,
                "item": `${siteUrl}/blog/${post.slug}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {children}
        </>
    );
}
