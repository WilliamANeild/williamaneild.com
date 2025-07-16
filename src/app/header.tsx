"use client";

import React, { useState, useEffect } from "react";

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

export default function Header() {
  const [opacity, setOpacity] = useState(0);

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

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 text-white transition-opacity duration-300 font-lora"
      style={{
        backgroundColor: '#1a1a1a',
        opacity,
        pointerEvents: opacity > 0.1 ? 'auto' : 'none',
      }}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3 font-lora">
        {/* Logo */}
        <button
          aria-label="Home"
          onClick={() => scrollTo("intro")}
          className="flex-shrink-0"
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
          >
            William Aldredge Neild
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-8 font-lora">
          <button onClick={() => scrollTo("intro")} className="hover:text-gray-300 font-lora">
            Home
          </button>

          {/* About dropdown with button scroll to first about subsection */}
          <div className="relative group">
            <button
              onClick={() => scrollTo("professional")}
              className="hover:text-gray-300 font-lora"
            >
              About Me
            </button>
            <ul className="absolute left-0 top-full mt-1 w-44 bg-black border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 font-lora">
              {sections.about.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-900 font-lora"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience dropdown with button scroll */}
          <div className="relative group">
            <button
              onClick={() => scrollTo("experience")}
              className="hover:text-gray-300 font-lora"
            >
              Experience
            </button>
            <ul className="absolute left-0 top-full mt-1 w-56 bg-black border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 font-lora">
              {sections.experience.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-900 truncate text-base font-lora"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <button onClick={() => scrollTo("contact")} className="hover:text-gray-300 font-lora">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
