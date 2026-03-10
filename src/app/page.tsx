"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import IntroAnimation from "./IntroAnimation";
import AboutMe from "./about";
import Skills from "./Skills";
import ExperienceSection from "./ExperienceSection";
import Footer from "./footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Tab visibility logic
  useEffect(() => {
    const originalTitle = document.title;
    function onVisChange() {
      document.title = document.hidden ? "Come back!" : originalTitle;
    }
    document.addEventListener("visibilitychange", onVisChange);
    return () => document.removeEventListener("visibilitychange", onVisChange);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll logic
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    function onClick(e: Event) {
      e.preventDefault();
      const id = (e.currentTarget as HTMLAnchorElement).getAttribute("href")!;
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
    anchors.forEach((a) => a.addEventListener("click", onClick));
    return () => anchors.forEach((a) => a.removeEventListener("click", onClick));
  }, []);

  return (
    <div className="relative text-white">
      {/* 1. Full-screen Hero */}
      <IntroAnimation />

      {/* 2. Content + Dark-to-Black Ombre Gradient */}
      <div
        style={{
          background: "linear-gradient(to bottom, #2f2f2f 0%, #000000 100%)",
        }}
      >
        <AboutMe />
        <Skills />
        <ExperienceSection />
        <Footer />
      </div>

      {/* Back-to-top button */}
      {scrollY > 600 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
