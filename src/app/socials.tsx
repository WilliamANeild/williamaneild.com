"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SocialRowProps {
  logo: string;
  alt: string;
  label: string;
  labelColor: string;
  href?: string;
}

const SocialRow: React.FC<SocialRowProps> = ({ logo, alt, label, labelColor, href }) => {
  const [hover, setHover] = useState(false);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };

  const logoStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    transition: "transform 0.3s ease",
    transform: hover ? "translateX(-15px)" : "translateX(0)",
  };

  const textStyle: React.CSSProperties = {
    marginLeft: "10px",
    color: labelColor,
    fontSize: "1.2rem",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: hover ? "translateX(0)" : "translateX(-10px)",
    opacity: hover ? 1 : 0,
  };

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={containerStyle}>
        <img src={logo} alt={alt} style={logoStyle} />
        <span style={textStyle}>{label}</span>
      </div>
    </a>
  );
};

export default function Socials() {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "2rem",
      }}
    >
      {/* Back Button */}
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <Link href="/">
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            aria-label="Go back to main screen"
          >
            ←
          </button>
        </Link>
      </div>

      {/* Social Links Container */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {/* Instagram */}
        <SocialRow
          logo="/instagram-logo.png"
          alt="Instagram Logo"
          label="Instagram: liam.neild"
          labelColor="#E1306C"
          href="https://www.instagram.com/liam.neild "
        />

        {/* LinkedIn */}
        <SocialRow
          logo="/linkedin-logo.png"
          alt="LinkedIn Logo"
          label="LinkedIn: william-neild"
          labelColor="#0077B5"
          href="https://www.linkedin.com/in/william-neild "
        />

        {/* Primary Email */}
        <SocialRow
          logo="/gmail-logo.png"
          alt="Email Logo"
          label="Email: WilliamANeild@gmail.com"
          labelColor="#EA4335"
          href="mailto:WilliamANeild@gmail.com"
        />

        {/* Alternate Email */}
        <SocialRow
          logo="/emory-logo.png"
          alt="Alternate Email Logo"
          label="Alternate Email: Liam.Neild@Emory.edu"
          labelColor="#00A8E8"
          href="mailto:Liam.Neild@Emory.edu"
        />
      </div>
    </div>
  );
}