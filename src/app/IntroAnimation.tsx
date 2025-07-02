"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const text = "William Aldredge Neild";
const words = [
  "Economics",
  "Mathematics",
  "Computer Science",
  "Quantitative",
  "Finance",
  "Excellence",
];

const IntroAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showBackground, setShowBackground] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    const bgTimer = setTimeout(() => setShowBackground(true), 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(bgTimer);
    };
  }, []);

  const scale = scrollY < 300 ? 1 - scrollY / 1000 : 0.7;
  const translateY = scrollY < 300 ? scrollY / 4 : 75;
  const isCompact = scrollY >= 300;

  return (
    <motion.div
      className="w-full sticky top-0 flex flex-col justify-center items-center z-40 overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        height: isCompact ? "100px" : "100vh",
        transition: "height 0.4s ease-in-out",
        position: "relative",
      }}
    >
      {/* Background Image */}
      {showBackground && !isCompact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-[-1]"
        >
          <Image
            src="/BackgroundNYC.jpg"
            alt="NYC Skyline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        </motion.div>
      )}

      {/* Animated Name */}
      <motion.div
        style={{
          display: "flex",
          gap: "0.25rem",
          transform: `translateY(-${translateY}px) scale(${scale})`,
          transition: "transform 0.3s ease",
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-6xl font-bold text-white font-mono whitespace-pre"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Typing Subheader */}
      {!isCompact && (
        <div
          style={{
            marginTop: "1rem",
            fontFamily: '"Fira Code", "Courier New", monospace',
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
            minHeight: "2rem",
            textAlign: "center",
          }}
        >
          <Typewriter
            words={words}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      )}
    </motion.div>
  );
};

export default IntroAnimation;