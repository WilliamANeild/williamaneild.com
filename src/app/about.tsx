"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const aboutSections = [
  {
    id: "professional",
    title: "Professionally",
    typedWords: ["Professionally"],
    text: `I am an aspiring investment professional specializing in valuation modeling and quantitative strategy research. At DeepFile, I contributed to advancing AI-driven solutions for file selection and validation pipelines, enhancing the precision and relevance of financial data analysis. Additionally, I supported early-stage research and asset evaluation at The McCamish Group, assisting in the development of strategic investment frameworks within a private firm environment. My focus lies at the intersection of analytical rigor and market insight, striving to inform high-impact financial decisions.`,
    imageSrc: "/AboutMeImage.webp",
    imageAlt: "Professional Headshot",
    textOnLeft: true,
  },
  {
    id: "academic",
    title: "Academically",
    typedWords: ["Academically"],
    text: `I am pursuing a B.S. in Computer Science and a joint B.A. in Economics and Mathematics at Emory University. At Algory Capital, I progressed from quantitative researcher to portfolio manager, leading volatility-based equity and options strategies and developing cointegrated pair trading models. I serve as a Team Lead at the Emory Economics Investment Forum, directing research on public equities in healthcare and biotech. Additionally, I actively contribute to RISE, where I help build financial models and support stock pitch evaluations. My academic journey is focused on applying quantitative methods and interdisciplinary collaboration to solve real-world financial problems.`,
    imageSrc: "/LiamNeildAlgoryPMheadshot.png",
    imageAlt: "Academic Image",
    textOnLeft: false,
  },
  {
    id: "personal",
    title: "Personally",
    typedWords: ["Personally"],
    text: `Away from academics and finance I serve as Social Chair for the SAE fraternity where I enjoy organizing events and building connections with others. I am a big fan of the New York Knicks and try to catch their games whenever I can. When I am not watching basketball I spend time playing tennis and squash which are two sports I really enjoy because they keep me active and allow me to compete in a fun way. Golf and Texas Hold’em are activities I use to relax and unwind after busy days. Grilling is something I am really passionate about — it gives me the chance to bring friends together, enjoy good food, and have a great time.`,
    imageSrc: "/PersonallyImage.JPG",
    imageAlt: "Personal Image",
    textOnLeft: true,
  },
];

// Fade-in paragraph component
const FadeInParagraph = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`text-lg leading-relaxed opacity-0 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : ""
      }`}
    >
      {children}
    </p>
  );
};

// Individual About Section
const AboutSection = ({
  id,
  title,
  typedWords,
  text,
  imageSrc,
  imageAlt,
  textOnLeft,
}: {
  id: string;
  title: string;
  typedWords: string[];
  text: string;
  imageSrc: string;
  imageAlt: string;
  textOnLeft: boolean;
}) => {
  const [hasTyped, setHasTyped] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`w-full flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-12 max-w-6xl mx-auto ${
        !textOnLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-6">
          {isVisible && !hasTyped ? (
            <Typewriter
              words={typedWords}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
              onLoopDone={() => setHasTyped(true)}
            />
          ) : (
            <span>{title}</span>
          )}
        </h2>
        {isVisible && <FadeInParagraph>{text}</FadeInParagraph>}
      </div>
    </section>
  );
};

// Main About Component
export default function About() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl font-mono font-bold tracking-wide mb-12">Get to know me...</h1>
        {aboutSections.map((section) => (
          <AboutSection key={section.id} {...section} />
        ))}
      </div>
    </section>
  );
}