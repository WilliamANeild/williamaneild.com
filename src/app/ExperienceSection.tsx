"use client";

import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    id: "algory",
    title: "Algory Capital",
    year: "2025",
    location: "Emory University, GA",
    role: "Portfolio Manager",
    bgSrc: "/emory.jpg",
    logoSrc: "/AlgoryLogo.jpg",
    alt: "Algory Logo over Emory",
  },
  {
    id: "deepfile",
    title: "DeepFile",
    year: "2025",
    location: "Berlin, Germany",
    role: "SWE",
    bgSrc: "/berlin.jpg",
    logoSrc: "/DeepfileLogo.jpg",
    alt: "DeepFile Logo over Berlin",
  },
  {
    id: "mccamish",
    title: "McCamish Group",
    year: "2025",
    location: "Atlanta, GA",
    role: "Investment Analyst",
    bgSrc: "/atl.jpg",
    logoSrc: "/McCamishLogo.png",
    alt: "McCamish Logo over Atlanta",
  },
];

const ExperienceCard = ({ id, title, year, location, role, bgSrc, logoSrc, alt }: any) => (
  <Link
    href={`/${id}`}
    className="bg-white text-black rounded-3xl overflow-hidden shadow-xl flex-none w-80 transform transition-transform duration-300 hover:scale-95 flex flex-col"
  >
    {/* Image Section */}
    <div className="relative w-full aspect-[3/4]">
      <Image src={bgSrc} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={logoSrc}
          alt={`${title} Logo`}
          width={100}
          height={100}
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
    {/* Info Section */}
    <div className="px-4 py-2 font-lora">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-xl font-bold leading-tight">{title}</h3>
        <span className="text-lg text-gray-500">{year}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray-700">{location}</span>
        <span className="text-sm text-gray-700">{role}</span>
      </div>
    </div>
  </Link>
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-lora font-bold tracking-wide text-center mb-8">
          Experience
        </h2>
        <div className="flex space-x-6 justify-center overflow-x-auto pb-4">
          {experiences.map(exp => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
