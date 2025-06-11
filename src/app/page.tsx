"use client";  // <-- Add this line at the very top

import { useState, useEffect } from "react";
import Image from "next/image";
// import { Banner } from "./Banner";
import IntroAnimation from "./IntroAnimation"; // Correct path

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowAnimation(false), 2500); // Adjust duration if needed
  }, []);

  return (
    <div>
      {/* Show animation at the start */}
      {showAnimation && <IntroAnimation />}

      {/* Main Content */}
      <main className={`transition-opacity ${showAnimation ? "opacity-0" : "opacity-100"}`}>
        {/* Uncomment if you want to use the Banner component */}
        {/* <Banner /> */}

        {/* Example of using Image from Next.js */}
        <Image 
          src="/your-image.jpg" // Replace with your actual image path
          alt="Example Image"
          width={500}
          height={300}
        />
      </main>
    </div>
  );
}
