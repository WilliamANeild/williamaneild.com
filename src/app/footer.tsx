"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

// Dynamically import DotGrid to avoid SSR issues
const DotGrid = dynamic(() => import("./DotGrid"), { ssr: false });

export default function Footer() {
  return (
    <div className="relative w-full h-[250px] bg-black text-white overflow-hidden">
      {/* Background Grid */}
      <DotGrid
        className="absolute inset-0 z-0"
        dotSize={4}
        gap={20}
        baseColor="#0f0f0f"
        activeColor="#cfcfcf"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />

      {/* Footer Content: absolutely positioned over grid */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4">
        {/* Social Icons */}
        <nav className="flex space-x-8">
          <a
            href="mailto:williamaneild@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-white hover:text-gray-300 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/WilliamANeild"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-gray-300 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/william-neild/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-gray-300 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="tel:+19147711365"
            aria-label="Phone"
            className="text-white hover:text-gray-300 transition"
          >
            <Phone className="w-6 h-6" />
          </a>
        </nav>
        {/* Copyright */}
        <p className="text-sm font-mono tracking-wide text-gray-400">
          © {new Date().getFullYear()} William Aldredge Neild
        </p>
      </div>
    </div>
  );
}
