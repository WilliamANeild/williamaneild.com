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

export default function ExperienceSection() {
  return (
    <div id="experience" className="min-h-screen bg-black text-white py-12 px-4">
      {/* Restored the heading here */}
      <h2 className="text-5xl font-mono font-bold text-center mb-12">Experience</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {experiences.map(({ id, title, year, imageSrc, imageAlt }) => (
          <Link
            href={`/${id}`}
            key={id}
            className="bg-white text-black rounded-2xl shadow-lg w-64 h-80 p-6 flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex-grow flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-mono font-bold">{title}</h3>
              <p className="text-sm text-gray-500">{year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}