"use client";

import Image from "next/image";

const experiences = [
  {
    id: "deepfile",
    title: "DeepFile - A.I Engineer",
    description: `Contributed to enhancing AI-driven file selection and validation pipelines, significantly improving accuracy and efficiency. My role involved integrating advanced machine learning techniques to streamline document classification and retrieval. This work reduced errors and boosted the relevance of search results across vast datasets. Collaborating closely with cross-functional teams, I helped translate complex data insights into actionable improvements for financial data analysis.`,
    dates: "June 2025 – August 2025",
    imageSrc: "/DeepfileLogo.jpg",
    imageAlt: "DeepFile Logo",
    textOnLeft: false,
  },
  {
    id: "mccamish",
    title: "The McCamish Group - Investment Analyst",
    description: `Supported early-stage research and asset evaluation to guide strategic investment decisions. I collaborated with senior analysts to analyze market trends and identify promising opportunities. My work helped refine internal investment frameworks for a private Atlanta-based firm. Through this experience, I gained valuable insight into portfolio management and asset allocation processes.`,
    dates: "August 2025 – November 2025",
    imageSrc: "/McCamishLogo.png",
    imageAlt: "McCamish Group Logo",
    textOnLeft: true,
  },
  {
    id: "algory",
    title: "Algory Capital - Portfolio Manager",
    description: `Progressed from quantitative analyst to portfolio manager, leading the development and testing of volatility-based equity and options strategies. I conducted deep research on cointegrated pair trading models, implementing them with Python and rigorously backtesting across over 100 securities. This role sharpened my skills in quantitative analysis and risk management within fast-moving markets. Collaborating with a dynamic team, I helped drive portfolio performance through data-driven decision-making.`,
    dates: "Janurary 2025 – Present",
    imageSrc: "/AlgoryLogo.jpg",
    imageAlt: "Algory Capital Logo",
    textOnLeft: false,
  },
];

const ExperienceItem = ({
  title,
  description,
  dates,
  imageSrc,
  imageAlt,
  textOnLeft,
}: {
  title: string;
  description: string;
  dates: string;
  imageSrc: string;
  imageAlt: string;
  textOnLeft: boolean;
}) => (
  <section
    className={`min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-12 ${
      textOnLeft ? "" : "md:flex-row-reverse"
    }`}
  >
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={400}   // slightly smaller width
        height={300}  // adjusted height for better aspect
        className="rounded shadow-lg object-contain"
      />
    </div>
    <div className="w-full md:w-1/2 text-center font-mono">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg leading-relaxed max-w-lg mx-auto mb-2">{description}</p>
      <p className="text-sm text-gray-400 max-w-lg mx-auto">{dates}</p>  {/* Smaller font for dates */}
    </div>
  </section>
);

export default function ExperienceSection() {
  return (
    <>
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} {...exp} />
      ))}
    </>
  );
}
