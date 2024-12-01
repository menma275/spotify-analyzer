import type { Metadata } from "next";
import { Providers } from "../app/components/Providers";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const siteName = "Spotify Analyzer";
const description = "Analize Your Listeing Experience on Spotify";
const url = "https://sptf-anlz.vercel.app/";

import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Analizer",
  description: description,
  openGraph: {
    title: "Spotify Analyzer",
    description,
    url,
    siteName,
    locale: "en",
    type: "website",
    images: [
      {
        url: `${url}opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@menma275",
    creator: "@menma275",
    images: {
      url: `${url}opengraph-image.jpg`,
      width: 1200,
      height: 630,
      alt: siteName,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${inter} ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
