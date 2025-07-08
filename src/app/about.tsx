import { useEffect, useRef, useState, type ReactNode } from "react";

export default function About() {
  return (
    <div className="text-white min-h-screen font-lora pt-16 px-8">
      {/* Page Header */}
      <h1 className="text-6xl font-lora font-bold tracking-wide text-center mb-10">
        About Me
      </h1>

      <div>
        {/* Professionally Section */}
        <Section id="professional">
          <SectionTitle>Professionally</SectionTitle>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <ImageSlideIn direction="left" delay={0.2}>
              <Image src="/AboutMeImage.webp" alt="Professional Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                I’m drawn to environments where pace, precision, and intellectual pressure are constant. I thrive when the work is quantitative, high-stakes, and demands both clarity of thought and flawless execution. My professional focus lies at the intersection of financial markets and advanced technology, where I’ve pursued roles that challenge my ability to reason under pressure, work with large-scale data, and deliver clean, effective solutions. I’m especially interested in quantitative finance, where performance is grounded in rigorous modeling, statistical edge, and scalable infrastructure. I’m motivated by firms that prioritize depth of thinking, efficient systems, and measurable outcomes. I care about making decisions that hold up under scrutiny and contribute directly to performance. Whether I’m analyzing signals, refining tools, or debugging systems, I bring a structured approach, a high level of accountability, and a mindset geared toward constant iteration. I value environments where smart people move fast, standards are uncompromising, and the goal is not just to be right, but to be repeatably right at scale.
              </Paragraph>
            </TextFadeUp>
          </div>
        </Section>

        {/* Academically Section */}
        <Section id="academic">
          <SectionTitle>Academically</SectionTitle>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <ImageSlideIn direction="left" delay={0.2}>
              <Image src="/LiamNeildAlgoryPMheadshot.png" alt="Academic Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                I’m pursuing a B.S. in Computer Science and a joint B.A. in Economics and Mathematics at Emory University. My academic work is centered on quantitative methods, systems thinking, and the practical application of theory to financial markets. I approach my coursework with an analytical mindset, whether I’m studying algorithms, probability theory, or macroeconomic models. I’ve chosen a curriculum that pushes me to work across disciplines, combining technical fluency with economic intuition and mathematical structure. Outside the classroom, I’ve sought out environments that reinforce these skills through applied research and team-driven problem solving. At Algory Capital, I progressed from quantitative researcher to portfolio manager, where I led volatility-based equity and options strategies and built cointegration-driven pair trading models using historical relationships between assets. On campus, I serve as a Team Lead at the Emory Economics Investment Forum, where I guide public equity research in the healthcare and biotech sectors. I also contribute to RISE by evaluating stock pitches and supporting the financial modeling process. These experiences have taught me how to turn data into insight, theory into structure, and ideas into disciplined outcomes, all within a framework of collaboration, intellectual rigor, and continuous learning.
              </Paragraph>
            </TextFadeUp>
          </div>
        </Section>

        {/* Personally Section */}
        <Section id="personal">
          <SectionTitle>Personally</SectionTitle>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <ImageSlideIn direction="left" delay={0.2}>
              <Image src="/PersonallyImage.JPG" alt="Personal Headshot" />
            </ImageSlideIn>
            <TextFadeUp delay={0.4}>
              <Paragraph>
                Outside academics and finance, I serve as Social Chair for the SAE fraternity, where I lead event planning and focus on creating a culture that values connection, energy, and respect. I enjoy bringing people together in ways that feel intentional, whether it’s organizing formal events or building the kind of day-to-day atmosphere that makes a team stronger. I’ve found that strong communities don’t happen by accident—they’re built through consistency, effort, and small details that make people feel welcome. Staying active is also a big part of my routine. I play tennis and squash regularly and appreciate the focus and competitiveness both sports demand. Golf and Texas Hold’em are two activities I turn to when I want to slow down and think more strategically, while still staying engaged and social. I’m also passionate about grilling, which for me is as much about hosting as it is about the food. It gives me the chance to set the tone, create a space where people feel comfortable, and make time with friends more personal. Whether I’m competing, relaxing, or bringing people together, I care about doing things with purpose and surrounding myself with people who think the same way.
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
      className={`py-16 px-0 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
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
      className={`text-5xl font-lora font-bold mb-6 inline-block tracking-wide opacity-0 transition-all duration-700 ${
        isDrawn ? 'opacity-100 translate-y-0' : 'translate-y-1'
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

// Reusable Image Component (portrait sizing)
function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full md:w-80 h-[30rem] rounded-lg overflow-hidden shadow-lg">
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

  const translateClass = direction === "left" ? '-translate-x-8' : 'translate-x-8';

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
      className={`opacity-0 transition-all duration-700 translate-y-2 ${
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
  return <p className="text-2xl font-lora font-medium leading-snug text-gray-300 mb-4">{children}</p>;
}
