"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const words = [
  '',
  'Economics',
  'Mathematics',
  'Computer Science',
  'Quantitative Finance',
  'Excellence',
];

export default function IntroAnimation() {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/BackgroundNYC.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Reveal Container + Typewriter */}
      <div className="flex flex-col items-center space-y-4 z-10">
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

          {/* Name Element */}
          <h1
            className="name text-white text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase whitespace-nowrap"
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
          className="typewriter text-white font-mono text-xl font-bold opacity-0"
          style={{ animation: 'fadeInTypewriter 0.6s ease-out 2.2s forwards' }}
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

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Fira+Code&display=swap');

        .reveal-container {
          width: max-content;
          height: 4rem;
          overflow: hidden;
          position: relative;
        }

        /* Line Animations */
        .line {
          width: 0;
        }
        @keyframes fadeInLine {
          from { opacity: 0; width: 0; }
          to   { opacity: 1; width: 100%; }
        }
        @keyframes sitDelay {
          to { opacity: 1; }
        }
        @keyframes moveUpLine {
          from { transform: translateX(-50%) translateY(0); }
          to   { transform: translateX(-50%) translateY(calc(-4rem + 2px)); }
        }
        @keyframes collapseLine {
          from { width: 100%; opacity: 1; }
          to   { width: 0; opacity: 0; }
        }

        /* Name Reveal */
        .name {
          font-family: 'Lora', serif;
        }
        @keyframes revealName {
          from { clip-path: inset(100% 0 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }

        /* Typewriter Fade-in */
        @keyframes fadeInTypewriter {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
