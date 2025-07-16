"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const words = [
  'blank',
  'Economics',
  'Mathematics',
  'Computer Science',
  'Quantitative Finance',
  'Excellence',
];

export default function IntroAnimation() {
  const [showCursor, setShowCursor] = useState(true);
  const [introDone, setIntroDone] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Trigger reflection after name reveal (2s total)
  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Normalized scroll progress
  const progress = typeof window !== 'undefined' ? Math.min(scrollY / window.innerHeight, 1) : 0;
  const reflectionTranslate = 200 + scrollY * 2.2;

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tard.avif"
          alt="Background"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 12%' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-4 z-10 px-4 text-center">
        <div className="reveal-container relative inline-block overflow-hidden">
          {/* Animated Line */}
          <div
            className="line absolute top-full left-1/2 h-[2px] bg-white origin-center"
            style={{
              transform: 'translateX(-50%) translateY(0)',
              animation:
                'fadeInLine 0.6s ease-in-out 0s forwards, ' +
                'sitDelay 0.4s ease-in-out 0.6s forwards, ' +
                'moveUpLine 0.8s ease-out 1s forwards, ' +
                'collapseLine 0.4s ease-out 1.8s forwards',
            }}
          />

          {/* Name Reveal */}
          <h1
            className="name text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase whitespace-nowrap"
            style={{
              clipPath: 'inset(100% 0 0 0)',
              animation: 'revealName 1s ease-out 1s forwards',
            }}
          >
            William Aldredge Neild
          </h1>
        </div>

        {/* Typewriter Subheader */}
        <div
        className="typewriter text-white font-bold text-base sm:text-lg md:text-xl opacity-0"
        style={{ fontFamily: 'Lora, serif', animation: 'fadeInTypewriter 0.6s ease-out 2.2s forwards' }}
      >
        <Typewriter
          words={words}
          loop={1}
          cursor={showCursor}
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
          onLoopDone={() => setShowCursor(false)}
        />
      </div>
      </div>

      {/* Reflection of Name */}
      {introDone && (
        <div
          className="absolute left-1/2 z-10 flex items-center justify-center"
          style={{
            transform: `translate(-50%, ${reflectionTranslate}px) scaleY(-1.1) scaleX(.99)`,
            animation: 'fadeInReflectionLong 2s ease-in-out forwards',
            opacity: 0.6 * (1 - progress),
            filter: `blur(${progress * 62}px)`,
            maskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0))',
            width: '100%',
          }}
        >
          <h1 className="name text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase whitespace-nowrap tracking-wide">
            William Aldredge Neild
          </h1>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Fira+Code&display=swap');

        .reveal-container { width: max-content; height: 4rem; overflow: hidden; position: relative; }
        .line { width: 0; }
        @keyframes fadeInLine { from { opacity: 0; width: 0; } to { opacity: 1; width: 100%; } }
        @keyframes sitDelay { to { opacity: 1; } }
        @keyframes moveUpLine { from { transform: translateX(-50%) translateY(0); } to { transform: translateX(-50%) translateY(calc(-4rem + 2px)); } }
        @keyframes collapseLine { from { width: 100%; opacity: 1; } to { width: 0; opacity: 0; } }
        .name { font-family: 'Lora', serif; }
        @keyframes revealName { from { clip-path: inset(100% 0 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes fadeInTypewriter { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInReflectionLong { from { opacity: 0; } to { opacity: 0.6; } }
      `}</style>
    </div>
  );
}
