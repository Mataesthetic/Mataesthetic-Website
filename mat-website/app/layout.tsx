import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matinteriorbd.com"),
  title: {
    default: "MAT Interior & Exterior Solution | Design & Fabrication in Bangladesh",
    template: "%s | MAT Interior & Exterior Solution",
  },
  description:
    "End-to-end interior & exterior design, aluminium glass fabrication, and MS/SS works for homes and businesses across Bangladesh. 5+ years of trusted craftsmanship.",
  keywords: [
    "interior design Bangladesh",
    "exterior design Dhaka",
    "aluminium fabrication",
    "glass fabrication Bangladesh",
    "MS SS works",
    "mild steel stainless steel",
    "home improvement Bangladesh",
    "commercial fit-out Dhaka",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MAT Interior & Exterior Solution",
    title: "MAT Interior & Exterior Solution | Design & Fabrication in Bangladesh",
    description:
      "End-to-end interior & exterior design, aluminium glass fabrication, and MS/SS works for homes and businesses across Bangladesh.",
    images: [{ url: "/images/projects/hero-storefront.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-charcoal-950 text-charcoal-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
