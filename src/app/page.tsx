"use client";

import { useEffect } from "react";
import IntroAnimation from "./IntroAnimation";
import Header from "./header";
import AboutMe from "./about";
import ExperienceSection from "./ExperienceSection";
import Footer from "./footer";

export default function Home() {
  // Tab visibility logic
  useEffect(() => {
    const originalTitle = document.title;
    function onVisChange() {
      document.title = document.hidden ? "Come back soon!" : originalTitle;
    }
    document.addEventListener("visibilitychange", onVisChange);
    return () => document.removeEventListener("visibilitychange", onVisChange);
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
      {/* 1. Full-screen NYC Hero */}
      <Header />
      <IntroAnimation />

      {/* 2. Content + Dark-to-Black Ombre Gradient */}
      <div
        style={{
          background: "linear-gradient(to bottom, #2f2f2f 0%, #000000 100%)",
        }}
      >
        <AboutMe />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
}
