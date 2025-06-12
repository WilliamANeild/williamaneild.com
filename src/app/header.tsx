"use client";
import React, { useState, useEffect, useRef } from "react";

const sections = {
  about: [
    { id: "professional", label: "Professional" },
    { id: "academic", label: "Academic" },
    { id: "personal", label: "Personal" },
  ],
  experience: [
    { id: "deepfile", label: "DeepFile" },
    { id: "algory", label: "Algory Capital" },
    { id: "mccamish", label: "McCamish Group" },
  ],
};

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setAboutOpen(false);
        setExperienceOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Show header after scrolling past half viewport height
  useEffect(() => {
    const onScroll = () => {
      setShowHeader(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showHeader) return null;

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setAboutOpen(false);
    setExperienceOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md px-6 py-3 select-none">
      <div className="flex justify-between items-center">
        {/* Logo on left */}
        <a href="#intro" className="flex items-center" onClick={() => scrollTo("intro")}>
          <img
            src="/LiamLogo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
            draggable={false}
          />
        </a>

        {/* Centered name button */}
        <button
          className="text-xl font-mono font-bold cursor-pointer bg-transparent border-none"
          onClick={() => scrollTo("intro")}
          aria-label="Scroll to top"
          type="button"
        >
          William Aldredge Neild
        </button>

        {/* Menu button right */}
        <div className="relative" ref={menuRef}>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col justify-between w-6 h-6 focus:outline-none"
          >
            <span
              className={`block h-0.5 bg-black rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-black rounded transition duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-black rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {menuOpen && (
            <nav className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg font-sans text-black select-text">
              {/* About Me toggle */}
              <div>
                <button
                  onClick={() => setAboutOpen((v) => !v)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                >
                  About Me
                  <span className={`transition-transform ${aboutOpen ? "rotate-90" : ""}`}>
                    ▶
                  </span>
                </button>
                {aboutOpen && (
                  <div className="pl-6">
                    {sections.about.map(({ id, label }) => (
                      <button
                        key={id}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => scrollTo(id)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience toggle */}
              <div>
                <button
                  onClick={() => setExperienceOpen((v) => !v)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                >
                  Experience
                  <span
                    className={`transition-transform ${experienceOpen ? "rotate-90" : ""}`}
                  >
                    ▶
                  </span>
                </button>
                {experienceOpen && (
                  <div className="pl-6">
                    {sections.experience.map(({ id, label }) => (
                      <button
                        key={id}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => scrollTo(id)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact direct button */}
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 border-t border-gray-300"
              >
                Contact
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
