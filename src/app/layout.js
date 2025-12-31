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
  title: "MyMed | High-Quality Chemical Solutions",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum sapiente architecto amet.",
  metadataBase: new URL("https://www.company.com"),
  keywords: [
    "chemicals",
    "industrial solutions",
    "products",
    "company name",
    "manufacturing",
  ],
  openGraph: {
    title: "Company Name",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    url: "https://www.company.com",
    siteName: "MyMed",
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
    description:
      "Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
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
