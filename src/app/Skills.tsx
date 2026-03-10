"use client";

import { useRef, useState, useEffect } from "react";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript"],
  },
  {
    label: "Frameworks",
    skills: ["Next.js", "React", "FastAPI"],
  },
  {
    label: "Quant / Finance",
    skills: ["Options Strategies", "Pair Trading", "Volatility Modeling", "Cointegration Analysis"],
  },
  {
    label: "Tools & Infra",
    skills: ["AWS S3", "Azure SharePoint", "Semantic Search", "Fernet Encryption", "Git"],
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

import React from "react";

export default function Skills() {
  return (
    <section className="font-lora text-white py-16 px-3 md:px-10">
      <h2 className="text-5xl font-lora font-bold tracking-wide text-center mb-16">
        Skills
      </h2>
      <div className="w-4/5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
          {skillCategories.map(({ label, skills }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-lora">{label}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-gray-600 text-sm text-gray-200 hover:border-gray-400 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
