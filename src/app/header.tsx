"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [opacity, setOpacity] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("intro");
  const navRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  // Scroll handler: fade in header & update active section
  useEffect(() => {
    const onScroll = () => {
      // fade in
      const fadeStart = window.innerHeight * 0.8;
      const scrollY = window.scrollY;
      setOpacity(Math.min(Math.max((scrollY - fadeStart + 100) / 200, 0), 1));

      // midpoint detection
      const mid = scrollY + window.innerHeight / 2;
      const introTop = 0;
      // Use wrapper ID "about" or fall back to first about subsection
      // Compute top of About section as earliest among its subsections
      const aboutIds = ["professional", "academic", "personal"];
      const aboutOffsets = aboutIds
        .map(id => document.getElementById(id)?.offsetTop)
        .filter((x): x is number => typeof x === 'number');
      const aboutTop = aboutOffsets.length > 0 ? Math.min(...aboutOffsets) : Infinity;
      const expTop = document.getElementById("experience")?.offsetTop ?? Infinity;
      const contactTop = document.getElementById("contact")?.offsetTop ?? Infinity;

      let next = "intro";
      // if at bottom of page, set contact
      const scrollBottom = scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;
      if (scrollBottom >= pageBottom - 10) {
        next = "contact";
      } else if (mid >= contactTop) {
        next = "contact";
      } else if (mid >= expTop) {
        next = "experience";
      } else if (mid >= aboutTop) {
        next = "about";
      }
      setActiveSection(next);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight position
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const btn = nav.querySelector<HTMLButtonElement>(`button[data-id="${activeSection}"]`);
    if (btn) {
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setHighlightStyle({ left: btnRect.left - navRect.left, width: btnRect.width });
    }
  }, [activeSection]);

  // Smooth scroll
  const scrollTo = (id: string) => {
    if (id === "intro") window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const top = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  // Button class
  const btnClass = (id: string) =>
    `relative px-2 py-1 z-10 font-lora font-medium text-sm transition-colors ${
      activeSection === id ? "text-black" : "text-white"
    }`;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 font-lora transition-opacity duration-300"
      style={{ backgroundColor: "#1a1a1a", opacity, pointerEvents: opacity > 0.1 ? "auto" : "none" }}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3">
        {/* Left: Logo */}
        <button
          onClick={() => scrollTo("intro")}
          className="flex-shrink-0"
          aria-label="Home"
        >
          <img src="/LiamLogo.png" alt="Logo" className="w-8 h-8 rounded-full" draggable={false} />
        </button>

        {/* Center: Name */}
        <button
          onClick={() => scrollTo("intro")}
          className="absolute left-1/2 transform -translate-x-1/2 text-white font-lora font-semibold uppercase tracking-wide"
        >
          William Aldredge Neild
        </button>

        {/* Right: Navigation */}
        <nav ref={navRef} className="hidden sm:flex items-center space-x-6 relative">
          {/* Highlight box */}
          <div
            className="absolute top-0 h-full bg-white rounded-lg pointer-events-none transition-all duration-300"
            style={{ left: highlightStyle.left, width: highlightStyle.width }}
          />
          <button onClick={() => scrollTo("intro")} data-id="intro" className={btnClass("intro")}>Home</button>
          <button onClick={() => scrollTo("about")} data-id="about" className={btnClass("about")}>About Me</button>
          <button onClick={() => scrollTo("experience")} data-id="experience" className={btnClass("experience")}>Experience</button>
          <button onClick={() => scrollTo("contact")} data-id="contact" className={btnClass("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
