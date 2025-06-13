"use client";

import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-20 flex flex-col items-center space-y-6">
      <div className="flex space-x-6">
        <a href="mailto:williamaneild@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="https://github.com/WilliamANeild" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="https://www.linkedin.com/in/william-neild/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="tel:+19147711365">
          <Phone className="w-6 h-6 hover:text-blue-400" />
        </a>
      </div>
      <p className="text-sm text-gray-400 font-mono">Liam Neild 2022 ©</p>
    </footer>
  );
}