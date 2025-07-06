"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function About() {
  return (
    <div className="text-white min-h-screen font-lora pt-12">
      {/* Page Header */}
      <h1 className="text-5xl font-mono font-bold tracking-wide text-center mb-12">
        About Me
      </h1>

      <div className="px-6">
        {/* Professionally Section */}
        <Section id="professional">
          <SectionTitle>Professionally</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ImageSlideIn direction="left" delay={0.2}>
              <Image src="/AboutMeImage.webp" alt="Professional Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                I am an aspiring investment professional specializing in valuation modeling and quantitative strategy research. At DeepFile, I contributed to advancing AI-driven solutions for file selection and validation pipelines, enhancing the precision and relevance of financial data analysis. Additionally, I supported early-stage research and asset evaluation at The McCamish Group, assisting in the development of strategic investment frameworks within a private firm environment. My focus lies at the intersection of analytical rigor and market insight, striving to inform high-impact financial decisions.
              </Paragraph>
            </TextFadeUp>
          </div>
        </Section>

        {/* Academically Section */}
        <Section id="academic">
          <SectionTitle>Academically</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ImageSlideIn direction="left" delay={0.2}>
              <Image src="/LiamNeildAlgoryPMheadshot.png" alt="Academic Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                I am pursuing a B.S. in Computer Science and a joint B.A. in Economics and Mathematics at Emory University. At Algory Capital, I progressed from quantitative researcher to portfolio manager, leading volatility-based equity and options strategies and developing cointegrated pair trading models. I serve as a Team Lead at the Emory Economics Investment Forum, directing research on public equities in healthcare and biotech. Additionally, I actively contribute to RISE, where I help build financial models and support stock pitch evaluations. My academic journey is focused on applying quantitative methods and interdisciplinary collaboration to solve real-world financial problems.
              </Paragraph>
            </TextFadeUp>
          </div>
        </Section>

        {/* Personally Section */}
        <Section id="personal">
          <SectionTitle>Personally</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ImageSlideIn direction="left" delay={0.2}>
              <Image src="/PersonallyImage.JPG" alt="Personal Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                Away from academics and finance I serve as Social Chair for the SAE fraternity where I enjoy organizing events and building connections with others. I am a big fan of the New York Knicks and try to catch their games whenever I can. When I am not watching basketball I spend time playing tennis and squash which are two sports I really enjoy because they keep me active and allow me to compete in a fun way. Golf and Texas Hold’em are activities I use to relax and unwind after busy days. Grilling is something I am really passionate about — it gives me the chance to bring friends together, enjoy good food, and have a great time.
              </Paragraph>
            </TextFadeUp>
          </div>
        </Section>
      </div>
    </div>
  );
}

// Reusable Section Component (with scroll animation)
function Section({ id, children }: { id: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 px-6 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </section>
  );
}

// Animated Section Title with Line Draw Effect
function SectionTitle({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`text-4xl font-bold mb-8 relative inline-block tracking-wide opacity-0 transition-all duration-700 ${
        isDrawn ? 'opacity-100 translate-y-0' : 'translate-y-2'
      }`}
    >
      {children}
      <svg
        className="absolute -bottom-3 left-0 w-full max-w-xl h-1.5 overflow-visible"
        viewBox="0 0 100 5"
        preserveAspectRatio="none"
      >
        <path
          d="M0,2.5 H100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={isDrawn ? 0 : 100}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
    </h2>
  );
}

// Reusable Image Component (normal portrait sizing)
function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full md:w-64 h-80 rounded-lg overflow-hidden shadow-lg">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
}

// Slide-In Animation Wrapper
function ImageSlideIn({ children, direction = "left", delay = 0 }: { children: ReactNode; direction?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateClass = direction === "left" ? '-translate-x-10' : 'translate-x-10';

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-x-0 opacity-100' : `${translateClass} opacity-0`
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

// Fade-Up Animation Wrapper
function TextFadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className={`opacity-0 transition-all duration-700 translate-y-4 ${
        isVisible ? 'opacity-100 translate-y-0' : ''
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

// Animated Paragraph Component
function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-lg font-medium leading-relaxed text-gray-300">{children}</p>;
}
