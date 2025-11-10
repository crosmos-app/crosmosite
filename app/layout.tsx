import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crosmos - Think Better, Not Twice",
  description:
    "Fast. Local. Agentic AF. The knowledge base that thinks with you.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://crosmos.app"),
  openGraph: {
    title: "Crosmos - Think Better, Not Twice",
    description:
      "Fast. Local. Agentic AF. The knowledge base that thinks with you.",
    url: "https://crosmos.app",
    siteName: "Crosmos",
    images: [
      {
        url: "/crosmoswebimage.png",
        alt: "Crosmos - Think Better, Not Twice",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crosmos - Think Better, Not Twice",
    description:
      "Fast. Local. Agentic AF. The knowledge base that thinks with you.",
    images: ["/crosmoswebimage.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
