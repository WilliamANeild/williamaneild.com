import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William(Liam) A. Neild",
  description: "Personal site for William Neild",
  icons: {
    icon: "/LiamLogo.png",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/LiamLogo.png" type="image/png" sizes="32x32" />
        <meta name="theme-color" content="#0a0a0a" />

        {/* Meta tags for SEO and mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="William Aldredge Neild" />
        <meta property="og:title" content="William A. Neild" />
        <meta property="og:description" content="Personal site for William(Liam) Neild" />
        <meta property="og:image" content="/PortfolioWebsiteImage1.png" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}