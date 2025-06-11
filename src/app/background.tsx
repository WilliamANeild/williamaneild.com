import React, { useState, useEffect } from 'react';

const images = [
  "/Users/liamneild/Desktop/PortfolioWebsiteImage1.png",
  "/Users/liamneild/Desktop/PortfolioWebsiteImage2.png",
  "/Users/liamneild/Desktop/p0jx6gm3.jpg"
];

const Background = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-container">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="background"
          className={`background-image ${i === index ? "active" : ""}`}
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
          z-index: -1;
        }

        .background-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
        }

        .background-image.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Background;
