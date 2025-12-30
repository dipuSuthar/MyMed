import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Company Name | High-Quality Chemical Solutions",
  description:
    "Company Name provides innovative chemical solutions tailored for industry standards. Explore our products, work, and gallery.",
  metadataBase: new URL("https://www.company.com"), //for production
  keywords: [
    "chemicals",
    "industrial solutions",
    "products",
    "company name",
    "manufacturing",
  ],
  openGraph: {
    title: "Company Name",
    description: "Discover our high-quality chemical products and services.",
    url: "https://www.company.com",
    siteName: "Company Name",
    images: [
      {
        url: "/assets/hero/banner.png",
        width: 1200,
        height: 630,
        alt: "Company Hero Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Name",
    description: "Innovative chemical solutions for industries worldwide.",
    images: ["/assets/hero/banner.png"],
  },
  icons: {
    icon: "/assets/icons/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
