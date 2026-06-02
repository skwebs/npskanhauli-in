import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://npskanhauli.in"),
  title: {
    default: "National Public School | Sinhpur, Kanhauli, Vaishali",
    template: "%s | National Public School",
  },
  description: "National Public School, Kanhauli - Learning Today, Leading Tomorrow. Modern education with a focus on discipline and excellence.",
  keywords: ["National Public School", "NPS Kanhauli", "School in Vaishali", "Education in Bihar", "Best school in Kanhauli"],
  authors: [{ name: "National Public School" }],
  creator: "National Public School",
  publisher: "National Public School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://npskanhauli.in",
    title: "National Public School | Sinhpur, Kanhauli, Vaishali",
    description: "National Public School, Kanhauli - Learning Today, Leading Tomorrow. Modern education with a focus on discipline and excellence.",
    siteName: "National Public School",
    images: [
      {
        url: "/images/school/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "National Public School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "National Public School | Sinhpur, Kanhauli, Vaishali",
    description: "National Public School, Kanhauli - Learning Today, Leading Tomorrow.",
    images: ["/images/school/og-image.jpg"],
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-text bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
