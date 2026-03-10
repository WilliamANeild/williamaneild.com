import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="text-white min-h-screen font-lora py-32 px-3 md:px-10">
      {/* Page Header */}
      <h1 className="text-5xl font-lora font-bold tracking-wide text-center mb-16">
        About Me
      </h1>

      <div className="w-4/5 mx-auto space-y-12">
        {/* Professionally Section */}
        <Section id="professional">
          <SectionTitle>Professionally</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <ImageSlideIn direction="left" delay={0.2}>
              <ImageStyled src="/AboutMeImage.webp" alt="Professional Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                I’m drawn to environments where pace, precision, and intellectual pressure are constant. I thrive when the work is quantitative, high-stakes, and demands clarity of thought and execution. My focus lies at the intersection of financial markets and advanced technology, where I take on roles that require reasoning under pressure, working with large data, and building clean, scalable solutions. I’m especially interested in quantitative finance, where edge comes from rigorous modeling, statistical insight, and strong infrastructure. I value depth of thinking, efficient systems, and making decisions that drive performance and hold up under scrutiny. I take a structured, iterative approach to solving problems, and I’m motivated by environments where standards are high and outcomes are measurable. Whether I’m debugging systems or refining models, I prioritize speed, clarity, and results.
              </Paragraph>
            </TextFadeUp>
          </div>
        </Section>

        {/* Academically Section */}
        <Section id="academic">
          <SectionTitle>Academically</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <ImageSlideIn direction="left" delay={0.2}>
              <ImageStyled src="/aca.jpg" alt="Academic Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                I’m pursuing a B.S. in Computer Science and a joint B.A. in Economics and Mathematics at Emory University, with a focus on quantitative methods and systems thinking. My coursework spans algorithms, probability, and macroeconomic theory, all approached through an analytical lens. I’ve built a curriculum that blends technical depth with economic reasoning and mathematical structure. Outside the classroom, I apply these skills through research and team-driven projects. At Algory Capital, I advanced from quant researcher to portfolio manager, leading volatility-based strategies and developing cointegration-driven pair trades. I also lead equity research in healthcare and biotech at the Emory Economics Investment Forum and support financial modeling at RISE. These experiences have sharpened my ability to turn theory into structure and data into actionable insights.
              </Paragraph>
            </TextFadeUp>
          </div>
        </Section>

        {/* Personally Section */}
        <Section id="personal">
          <SectionTitle>Personally</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <ImageSlideIn direction="left" delay={0.2}>
              <ImageStyled src="/shi.jpg" alt="Personal Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                Outside the professional and academic track, I care about how people come together, how energy is set in a room, and how shared experiences build stronger teams. I think culture is something you design, not something that just happens. Outside academics and finance, I serve as Social Chair for the SAE fraternity, where I lead event planning and focus on building a culture of connection, energy, and respect. I enjoy creating environments that feel intentional, whether through formal events or everyday moments that strengthen teams and friendships. I believe strong communities come from consistency and attention to detail. I stay active through tennis and squash, both of which keep me sharp and competitive. When I want to slow down, I turn to golf or Texas Hold’em for strategic focus and social connection. I also love grilling, not just for the food but for the opportunity to host and make time with friends more personal and deliberate.
              </Paragraph>
            </TextFadeUp>
          </div>
        </Section>
      </div>
    </div>
  );
}

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
      className={`py-12 px-0 transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </section>
  );
}

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
      className={`relative text-3xl font-lora font-bold mb-4 inline-block tracking-wide opacity-0 transition-all duration-700 ${
        isDrawn ? "opacity-100 translate-y-0" : "translate-y-1"
      }`}
    >
      {children}
      <svg
        className="absolute -bottom-2 left-0 w-full max-w-xl h-1 overflow-visible"
        viewBox="0 0 100 3"
        preserveAspectRatio="none"
      >
        <path
          d="M0,1.5 H100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.5"
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

  const translateClass = direction === "left" ? "-translate-x-8" : "translate-x-8";

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : `${translateClass} opacity-0`
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

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
      className={`opacity-0 transition-all duration-700 translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.2rem] font-lora font-medium leading-snug text-gray-300 mb-4">
      {children}
    </p>
  );
}

function ImageStyled({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full md:w-72 h-[22rem] rounded-lg overflow-hidden transition-opacity duration-700 ease-in shadow-[0_4px_20px_rgba(255,255,255,0.1)] border border-gray-500 border-opacity-30">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
