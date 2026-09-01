import type { Metadata } from "next";
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
  metadataBase: new URL("https://saifali.dev"),

  title: {
    default: "Saif Ali | Cloud Security & GRC",
    template: "%s | Saif Ali",
  },

  description:
    "Saif Ali is a BS Information Technology student building practical systems across Cloud Security, GRC, Security Operations, automation, and AI-assisted security analysis.",

  keywords: [
    "Saif Ali",
    "Cloud Security",
    "GRC",
    "Security Engineering",
    "Security Operations",
    "Cybersecurity",
    "Information Technology",
    "Python",
    "AI Security",
    "RAG",
  ],

  authors: [
    {
      name: "Saif Ali",
    },
  ],

  creator: "Saif Ali",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Saif Ali | Cloud Security & GRC",
    description:
      "Portfolio of Saif Ali — BS Information Technology student focused on Cloud Security, GRC, Security Engineering, and practical security systems.",
    siteName: "Saif Ali",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saif Ali | Cloud Security & GRC",
    description:
      "BS Information Technology student building practical security systems across Cloud Security, GRC, Security Operations, and AI Security.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}