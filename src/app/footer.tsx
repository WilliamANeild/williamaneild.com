"use client";

import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center space-y-8">
        {/* Social Links */}
        <nav aria-label="Social media" className="flex space-x-8">
          <a
            href="mailto:williamaneild@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            aria-label="Email William Aldredge Neild"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/WilliamANeild"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            aria-label="GitHub profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/william-neild/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="tel:+19147711365"
            className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            aria-label="Call William Aldredge Neild"
          >
            <Phone className="w-6 h-6" />
          </a>
        </nav>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500 font-mono tracking-wide">
          © {new Date().getFullYear()} William Aldredge Neild
        </p>
      </div>
    </footer>
  );
}
