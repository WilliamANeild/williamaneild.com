"use client";

import React from 'react';

interface BackgroundProps {
  variant?: 'default' | 'ombre';
}

const Background: React.FC<BackgroundProps> = ({ variant = 'default' }) => {
  return (
    <div className="background-wrapper">
      {/* Top NYC Image */}
      <div className="nyc-image" />

      {/* Optional Ombre gradient layer below the image */}
      {variant === 'ombre' && <div className="ombre-gradient" />}

      <style jsx>{`
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -10;
          overflow: hidden;
        }

        .nyc-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-image: url("/PortfolioWebsiteImage1.png");
          background-size: cover;
          background-position: center;
        }

        .ombre-gradient {
          position: absolute;
          top: 100vh;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, #f5f5f5 0%, #1a1a1a 100%);
        }
      `}</style>
    </div>
  );
};

export default Background;
