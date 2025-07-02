"use client";

import { useState, useEffect } from "react";

const Background = () => {
  // Use relative paths (assumes images are in /public folder)
  const images = [
    "/PortfolioWebsiteImage1.png",
    "/PortfolioWebsiteImage2.png",
    "/p0jx6gm3.jpg"
  ];

  const [index, setIndex] = useState(0);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-container">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Background visual"
          className={`background-image ${i === index ? "active" : ""}`}
          loading="lazy"
        />
      ))}

      <style jsx>{`
        .background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: -10;
        }

        .background-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          pointer-events: none;
        }

        .background-image.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Background;