"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, Phone, Instagram } from "lucide-react";

type Mode = "row" | "icon";

const socials = [
  {
    id: "instagram",
    label: "Instagram: liam.neild",
    href: "https://www.instagram.com/liam.neild",
    labelColor: "#E1306C",
    logo: "/instagram-logo.png",
    Icon: Instagram,
  },
  {
    id: "linkedin",
    label: "LinkedIn: william-neild",
    href: "https://www.linkedin.com/in/william-neild",
    labelColor: "#0077B5",
    logo: "/linkedin-logo.png",
    Icon: Linkedin,
  },
  {
    id: "email",
    label: "Email: WilliamANeild@gmail.com",
    href: "mailto:WilliamANeild@gmail.com",
    labelColor: "#EA4335",
    logo: "/gmail-logo.png",
    Icon: Mail,
  },
  {
    id: "alt-email",
    label: "Alt Email: Liam.Neild@Emory.edu",
    href: "mailto:Liam.Neild@Emory.edu",
    labelColor: "#00A8E8",
    logo: "/emory-logo.png",
    Icon: Mail,
  },
  {
    id: "github",
    label: "GitHub: WilliamANeild",
    href: "https://github.com/WilliamANeild",
    Icon: Github,
  },
  {
    id: "phone",
    label: "+1 (914) 771-1365",
    href: "tel:+19147711365",
    Icon: Phone,
  },
];

export default function Socials({ mode = "row" }: { mode?: Mode }) {
  if (mode === "icon") {
    return (
      <nav className="flex space-x-8">
        {socials.map(
          ({ id, href, label, Icon }) =>
            Icon && (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-gray-300 transition"
              >
                <Icon className="w-6 h-6" />
              </a>
            )
        )}
      </nav>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative p-8">
      {/* Back button for full-page view */}
      <div className="absolute top-5 left-5">
        <Link href="/">
          <button className="text-white text-2xl">&larr;</button>
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {socials.map(({ id, logo, href, label, labelColor }) => (
          <SlideRow
            key={id}
            logo={logo}
            alt={label}
            label={label}
            labelColor={labelColor}
            href={href}
          />
        ))}
      </div>
    </div>
  );
}

function SlideRow({
  logo,
  alt,
  label,
  labelColor = "#fff",
  href = "#",
}: {
  logo?: string;
  alt?: string;
  label: string;
  labelColor?: string;
  href?: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ textDecoration: "none" }}
    >
      {logo && (
        <img
          src={logo}
          alt={alt}
          style={{
            width: "40px",
            height: "40px",
            transition: "transform 0.3s ease",
            transform: hover ? "translateX(-15px)" : "translateX(0)",
          }}
        />
      )}
      <span
        style={{
          marginLeft: "10px",
          color: labelColor,
          fontSize: "1.2rem",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: hover ? "translateX(0)" : "translateX(-10px)",
          opacity: hover ? 1 : 0,
        }}
      >
        {label}
      </span>
    </a>
  );
}
