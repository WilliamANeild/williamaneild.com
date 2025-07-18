"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, CSSProperties } from "react";

const experiences = [
  { id: "algory", title: "Algory Capital", year: "2025", location: "Emory University, GA", role: "Portfolio Manager", bgSrc: "/Em.avif", logoSrc: "/AlgoryLogo.jpg", alt: "Algory Logo over Emory" },
  { id: "deepfile", title: "DeepFile", year: "2025", location: "Berlin, Germany", role: "SWE", bgSrc: "/Ber.avif", logoSrc: "/DeepfileLogo.jpg", alt: "DeepFile Logo over Berlin" },
  { id: "mccamish", title: "McCamish Group", year: "2025", location: "Atlanta, GA", role: "Investment Analyst", bgSrc: "/ATL.avif", logoSrc: "/McCamish2.png", alt: "McCamish Logo over Atlanta" },
];

interface ExperienceCardProps {
  id: string;
  title: string;
  year: string;
  location: string;
  role: string;
  bgSrc: string;
  logoSrc: string;
  alt: string;
}

const ExperienceCard = ({ id, title, year, location, role, bgSrc, logoSrc, alt }: ExperienceCardProps) => (
  <Link
    href={`/${id}`}
    className="bg-[#181818] text-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-500 flex-none w-80 flex-shrink-0 font-lora transform transition-transform duration-300 hover:scale-105 hover:z-20"
  >
    <div className="relative w-full aspect-[3/4]">
      <Image src={bgSrc} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={logoSrc} alt={`${title} Logo`} width={100} height={100} className="rounded-full shadow-lg" />
      </div>
    </div>
    <div className="px-4 py-2">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-xl font-bold leading-tight text-gray-100">{title}</h3>
        <span className="text-lg text-gray-300">{year}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray-400">{location}</span>
        <span className="text-sm text-gray-400">{role}</span>
      </div>
    </div>
  </Link>
);

export default function ExperienceSection() {
  const count = experiences.length;
  const [index, setIndex] = useState(count);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // Triplicated items for infinite loop
  const items = [...experiences, ...experiences, ...experiences];

  const prev = () => {
    setIndex(i => i - 1);
    setTransitioning(true);
  };
  const next = () => {
    setIndex(i => i + 1);
    setTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (index < count) {
      setTransitioning(false);
      setIndex(index + count);
    } else if (index >= count * 2) {
      setTransitioning(false);
      setIndex(index - count);
    }
  };

  const cardWidth = 320;
  const gap = 24;
  const visibleCount = 3;
  const containerWidth = visibleCount * cardWidth + (visibleCount - 1) * gap;

  const trackStyle: CSSProperties = {
    display: 'flex',
    gap: `${gap}px`,
    transform: `translateX(-${index * (cardWidth + gap)}px)`,
    transition: transitioning ? 'transform 0.5s ease' : 'none',
  };

  return (
    <section id="experience" className="font-lora text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-5xl font-bold tracking-wide text-center mb-8 text-gray-100">Experience</h2>
        <div className="flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#181818] text-white rounded-full hover:bg-gray-500 transition z-30 flex items-center justify-center text-2xl"
            aria-label="Previous"
          >
            &#8249;
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-4" style={{ width: `${containerWidth}px` }}>
            <div ref={trackRef} style={trackStyle} onTransitionEnd={handleTransitionEnd}>
              {items.map((exp, idx) => (
                <ExperienceCard key={`${exp.id}-${idx}`} {...exp} />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#181818] text-white rounded-full hover:bg-gray-500 transition z-30 flex items-center justify-center text-2xl"
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
