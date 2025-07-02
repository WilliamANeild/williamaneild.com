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
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle outside click
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

  // Handle scroll opacity
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      const scrollY = window.scrollY;
      const opacity = Math.min(Math.max((scrollY - threshold + 100) / 200, 0), 1);
      setHeaderOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    setAboutOpen(false);
    setExperienceOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-3 transition-opacity duration-300"
      style={{ opacity: headerOpacity, pointerEvents: headerOpacity > 0.1 ? "auto" : "none" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <button
          aria-label="Scroll to top"
          onClick={() => scrollTo("intro")}
          className="flex items-center bg-transparent border-none cursor-pointer"
        >
          <img
            src="/LiamLogo.png"
            alt="Logo"
            className="w-8 h-8 rounded-full"
            draggable={false}
          />
        </button>

        {/* Centered Name */}
        <button
          className="text-xl font-mono font-bold cursor-pointer bg-transparent border-none tracking-wider uppercase"
          onClick={() => scrollTo("intro")}
          aria-label="Scroll to top"
        >
          William Aldredge Neild
        </button>

        {/* Hamburger Menu */}
        <div className="relative" ref={menuRef}>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col justify-between w-6 h-6 focus:outline-none"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 bg-white rounded transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <nav
              className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded shadow-lg font-sans text-white text-sm"
              role="menu"
            >
              {/* About Me */}
              <div>
                <button
                  onClick={() => setAboutOpen((v) => !v)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-900 flex justify-between items-center"
                  aria-expanded={aboutOpen}
                >
                  About Me
                  <span
                    className={`transform transition-transform ${aboutOpen ? "rotate-90" : ""}`}
                  >
                    ▶
                  </span>
                </button>
                {aboutOpen && (
                  <div className="pl-6">
                    {sections.about.map(({ id, label }) => (
                      <button
                        key={id}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-900"
                        onClick={() => scrollTo(id)}
                        role="menuitem"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience */}
              <div>
                <button
                  onClick={() => setExperienceOpen((v) => !v)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-900 flex justify-between items-center"
                  aria-expanded={experienceOpen}
                >
                  Experience
                  <span
                    className={`transform transition-transform ${experienceOpen ? "rotate-90" : ""}`}
                  >
                    ▶
                  </span>
                </button>
                {experienceOpen && (
                  <div className="pl-6">
                    {sections.experience.map(({ id, label }) => (
                      <button
                        key={id}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-900"
                        onClick={() => scrollTo(id)}
                        role="menuitem"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-left px-4 py-2 hover:bg-gray-900 border-t border-gray-700"
                role="menuitem"
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