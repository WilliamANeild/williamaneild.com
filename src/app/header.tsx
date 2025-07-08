"use client";

import React, { useState, useEffect } from "react";

const sections = {
  about: [
    { id: "professional", label: "Professional" },
    { id: "academic",     label: "Academic"     },
    { id: "personal",     label: "Personal"     },
  ],
  experience: [
    { id: "deepfile",    label: "DeepFile"       },
    { id: "algory",      label: "Algory Capital" },
    { id: "mccamish",    label: "McCamish Group" },
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-black text-white transition-opacity duration-300"
      style={{ opacity, pointerEvents: opacity > 0.1 ? "auto" : "none" }}
    >
      <div className="flex items-center justify-between w-full px-6 py-3">
        {/* Logo on far left */}
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

        {/* Name dead-center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollTo("intro")}
            className="text-lg font-lora font-semibold tracking-wide uppercase hover:text-gray-300"
          >
            William Aldredge Neild
          </button>
        </div>

        {/* Nav on far right */}
        <nav className="flex items-center space-x-8">
          <button
            onClick={() => scrollTo("intro")}
            className="font-lora hover:text-gray-300"
          >
            Home
          </button>

          {/* About dropdown */}
          <div className="relative group">
            <button className="font-lora hover:text-gray-300">About</button>
            <ul className="absolute left-0 top-full mt-1 w-44 bg-black border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
              {sections.about.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-900"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience dropdown */}
          <div className="relative group">
            <button className="font-lora hover:text-gray-300">Experience</button>
            <ul className="absolute left-0 top-full mt-1 w-44 bg-black border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
              {sections.experience.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-900"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="font-lora hover:text-gray-300"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
