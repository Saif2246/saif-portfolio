
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saif-portfolio-gamma.vercel.app"),

  title: {
    default: "Saif Ali | Cloud Security & GRC",
    template: "%s | Saif Ali",
  },

  description:
    "Saif Ali is a BS Information Technology student focused on Cloud Security, GRC, Security Operations, security automation, and AI-assisted security analysis.",

  keywords: [
    "Saif Ali",
    "Cloud Security",
    "GRC",
    "Cybersecurity",
    "Security Engineering",
    "Security Operations",
    "Security Automation",
    "AI Security",
    "RAG",
    "Information Technology",
    "Python",
  ],

  authors: [
    {
      name: "Saif Ali",
    },
  ],

  creator: "Saif Ali",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Saif Ali | Cloud Security & GRC",
    description:
      "Portfolio of Saif Ali — BS Information Technology student focused on Cloud Security, GRC, Security Engineering, and practical security systems.",
    siteName: "Saif Ali",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saif Ali — Cloud Security and GRC Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saif Ali | Cloud Security & GRC",
    description:
      "BS Information Technology student focused on Cloud Security, GRC, Security Operations, and AI-assisted security analysis.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
