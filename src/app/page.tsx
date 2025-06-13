"use client";

import { useEffect } from "react";
import IntroAnimation from "./IntroAnimation";
import Header from "./header";
import ExperienceSection from "./ExperienceSection";
import Footer from "./footer";
import AboutMe from "./about"; 

export default function Home() {
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

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "white" }}>
      {/* INTRO */}
      <IntroAnimation />

      {/* HEADER */}
      <Header />

      {/* ABOUT */}
      <AboutMe />

      {/* EXPERIENCE */}
      <ExperienceSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}