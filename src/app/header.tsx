"use client";

import React, { useState, useEffect, useRef } from "react";

const sections = {
  about: [
    { id: "professional", label: "Professional" },
    { id: "academic", label: "Academic" },
    { id: "personal", label: "Personal" },
  ],
  experience: [
    { id: "algory", label: "Algory Capital" },
    { id: "deepfile", label: "DeepFile" },
    { id: "mccamish", label: "The McCamish Group" },
  ],
};

// Highlight colors for each section id (customize as needed)
const highlightColors: Record<string, string> = {
  intro: "rgba(255,255,255,0.4)",
  professional: "rgba(255,200,200,0.4)",
  academic: "rgba(200,255,200,0.4)",
  personal: "rgba(200,200,255,0.4)",
  experience: "rgba(255,255,200,0.4)",
  algory: "rgba(255,200,255,0.4)",
  deepfile: "rgba(200,255,255,0.4)",
  mccamish: "rgba(220,220,220,0.4)",
  contact: "rgba(255,255,255,0.4)",
};

export default function Header() {
  const [opacity, setOpacity] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0, backgroundColor: "rgba(255,255,255,0.2)" });

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.8;
      const y = window.scrollY;
      setOpacity(Math.min(Math.max((y - threshold + 100) / 200, 0), 1));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "intro") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleMouseEnter = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (navRef.current) {
      const containerRect = navRef.current.getBoundingClientRect();
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const left = rect.left - containerRect.left;
      const width = rect.width;
      const backgroundColor = highlightColors[id] || "rgba(255,255,255,0.2)";
      setHighlightStyle({ left, width, backgroundColor });
    }
  };

  const handleMouseLeave = () => {
    // Optionally reset highlight or keep last hovered
    setHighlightStyle(prev => ({ ...prev, width: 0 }));
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 text-white transition-opacity duration-300 font-lora"
      style={{
        backgroundColor: "#1a1a1a",
        opacity,
        pointerEvents: opacity > 0.1 ? "auto" : "none",
      }}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3 font-lora">
        {/* Logo */}
        <button
          aria-label="Home"
          onClick={() => scrollTo("intro")}
          className="flex-shrink-0"
          onMouseEnter={e => handleMouseEnter("intro", e)}
        >
          <img
            src="/LiamLogo.png"
            alt="Logo"
            className="w-8 h-8 rounded-full"
            draggable={false}
          />
        </button>

        {/* Center Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <button
            onClick={() => scrollTo("intro")}
            className="text-base sm:text-lg font-semibold tracking-wide uppercase hover:text-gray-300 font-lora"
            onMouseEnter={e => handleMouseEnter("intro", e)}
          >
            William Aldredge Neild
          </button>
        </div>

        {/* Navigation */}
        <nav
          ref={navRef}
          className="hidden sm:flex items-center space-x-4 sm:space-x-8 relative font-lora"
          onMouseLeave={handleMouseLeave}
        >
          {/* Highlight box */}
          <div
            className="absolute top-0 h-full rounded-lg pointer-events-none transition-all duration-300"
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
              backgroundColor: highlightStyle.backgroundColor,
            }}
          />

          <button
            onClick={() => scrollTo("intro")}
            className="px-2 py-1 hover:text-gray-300 font-lora"
            onMouseEnter={e => handleMouseEnter("intro", e)}
          >
            Home
          </button>

          {/* About dropdown */}
          <div className="relative group">
            <button
              onClick={() => scrollTo("professional")}
              className="px-2 py-1 hover:text-gray-300 font-lora"
              onMouseEnter={e => handleMouseEnter("about", e)}
            >
              About Me
            </button>
            <ul className="absolute left-0 top-full mt-1 w-44 bg-black border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 font-lora">
              {sections.about.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-900 font-lora"
                    onMouseEnter={e => handleMouseEnter(id, e)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience dropdown */}
          <div className="relative group">
            <button
              onClick={() => scrollTo("experience")}
              className="px-2 py-1 hover:text-gray-300 font-lora"
              onMouseEnter={e => handleMouseEnter("experience", e)}
            >
              Experience
            </button>
            <ul className="absolute left-0 top-full mt-1 w-56 bg-black border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 font-lora">
              {sections.experience.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-900 truncate text-base font-lora"
                    onMouseEnter={e => handleMouseEnter(id, e)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <button
            onClick={() => scrollTo("contact")}
            className="px-2 py-1 hover:text-gray-300 font-lora"
            onMouseEnter={e => handleMouseEnter("contact", e)}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
