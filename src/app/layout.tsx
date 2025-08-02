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
  title: "William Aldredge Neild | Liam Neild | William A. Neild | William Liam Neild | Wiliam Neild",
  description:
    "Official personal website of William Aldredge Neild (aka Liam Neild).",
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
        {/* Character Set */}
        <meta charSet="utf-8" />

        {/* Favicon */}
        <link rel="icon" href="/LiamLogo.png" type="image/png" sizes="32x32" />

        {/* Responsive & Theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="robots" content="index, follow" />

        {/* Basic SEO */}
        <meta name="author" content="William Aldredge Neild" />
        <meta
          name="description"
          content="Official personal website of William Aldredge Neild (aka Liam Neild)."
        />
        <meta
          name="keywords"
          content="William Neild, Liam Neild, William A. Neild, William Liam Neild, Wiliam Neild"
        />
        <link rel="canonical" href="https://williamaneild.com/" />
        <link rel="alternate" hrefLang="en" href="https://williamaneild.com/" />
        {/* sitemap.xml is available at /sitemap.xml */}

        {/* Open Graph for Social Media Preview */}
        <meta
          property="og:title"
          content="William Aldredge Neild | Liam Neild | Investment Analyst & Developer"
        />
        <meta
          property="og:description"
          content="Official personal website of William Aldredge Neild (aka Liam Neild)." 
        />
        <meta property="og:image" content="/PortfolioWebsiteImage1.png" />
        <meta property="og:url" content="https://williamaneild.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="William Neild Portfolio" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "William Aldredge Neild",
              alternateName: [
                "Liam Neild",
                "William A. Neild",
                "William Liam Neild",
                "Wiliam Neild"
              ],
              url: "https://williamaneild.com",
              jobTitle: "Investment Analyst & Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Emory University"
              },
              sameAs: [
                "https://linkedin.com/in/william-neild",
                "https://github.com/WilliamANeild"
              ],
              description:
                "Official portfolio site of William Aldredge Neild (aka Liam Neild).",
            }),
          }}
        />
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