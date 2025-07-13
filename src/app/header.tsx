"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-black text-white transition-opacity duration-300 font-lora"
      style={{ opacity, pointerEvents: opacity > 0.1 ? "auto" : "none" }}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3">
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
        <div className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <button
            onClick={() => scrollTo("intro")}
            className="text-base sm:text-lg font-semibold tracking-wide uppercase hover:text-gray-300"
          >
            William Aldredge Neild
          </button>
        </div>

        {/* Nav on far right (hidden on small screens) */}
        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-8">
          <button
            onClick={() => scrollTo("intro")}
            className="hover:text-gray-300"
          >
            Home
          </button>

          {/* About dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-300">About</button>
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
            <button className="hover:text-gray-300">Experience</button>
            <ul className="absolute left-0 top-full mt-1 w-56 bg-black border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
              {sections.experience.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-900 truncate text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-gray-300"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
