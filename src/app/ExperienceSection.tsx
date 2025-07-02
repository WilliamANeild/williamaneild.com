"use client";

import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    id: "deepfile",
    title: "DeepFile",
    year: "2025",
    imageSrc: "/DeepfileLogo.jpg",
    imageAlt: "DeepFile Logo",
  },
  {
    id: "mccamish",
    title: "McCamish Group",
    year: "2025",
    imageSrc: "/McCamishLogo.png",
    imageAlt: "McCamish Group Logo",
  },
  {
    id: "algory",
    title: "Algory Capital",
    year: "2025",
    imageSrc: "/AlgoryLogo.jpg",
    imageAlt: "Algory Capital Logo",
  },
];

// Experience Card Component
const ExperienceCard = ({ id, title, year, imageSrc, imageAlt }: any) => {
  return (
    <Link
      href={`/${id}`}
      key={id}
      className="bg-white text-black rounded-2xl shadow-lg w-full md:w-64 h-80 p-6 flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105"
    >
      {/* Logo */}
      <div className="flex-grow flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-mono font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </Link>
  );
};

// Main Experience Section
export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="text-5xl font-mono font-bold tracking-wide text-center mb-12">Experience</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}