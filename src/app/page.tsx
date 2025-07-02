"use client";

import { useEffect } from "react";
import IntroAnimation from "./IntroAnimation";
import Header from "./header";
import ExperienceSection from "./ExperienceSection";
import Footer from "./footer";
import AboutMe from "./about";

export default function Home() {
  // Handle tab visibility change
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "👋 Come back soon!";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Optional: Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main>
        {/* INTRO ANIMATION */}
        <IntroAnimation />

        {/* ABOUT ME */}
        <AboutMe />

        {/* EXPERIENCE SECTION */}
        <ExperienceSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}