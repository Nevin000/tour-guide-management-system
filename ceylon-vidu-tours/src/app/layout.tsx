import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import AppProvider from "@/providers/app-provider";

// ─── Heading font: Manrope ────────────────────────────────────────────────────
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// ─── Body / UI font: Inter ────────────────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ceylon Vidu Tours",
  description: "Discover Sri Lanka with Ceylon Vidu Tours",
  icons: {
    icon: [
      { url: "/logo1.png", type: "image/png" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen font-inter">
        <AppProvider>
          {children}
          <Toaster richColors position="top-right" />
        </AppProvider>
      </body>
    </html>
  );
}