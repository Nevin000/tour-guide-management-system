import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sri Lanka Travel Stories & Journal | Ceylon Vidu Tours",
    description: "Discover hidden waterfalls, ancient ruins, culinary secrets, and adventure tales crafted by experts across Sri Lanka in our ultimate travel journal.",
    keywords: ["Sri Lanka travel", "travel blog", "Ceylon Vidu", "travel guides", "Sri Lanka destinations"],
    alternates: {
        canonical: "https://ceylonvidutours.com/blog",
    },
    openGraph: {
        title: "Sri Lanka Travel Stories & Journal | Ceylon Vidu Tours",
        description: "Discover hidden waterfalls, ancient ruins, culinary secrets, and adventure tales crafted by experts across Sri Lanka.",
        url: "https://ceylonvidutours.com/blog",
        siteName: "Ceylon Vidu Tours",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sri Lanka Travel Stories & Journal",
        description: "Discover hidden waterfalls, ancient ruins, culinary secrets, and adventure tales crafted by experts across Sri Lanka.",
    }
};

export default function BlogListLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
