"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function McCamishContent() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-gray-900 to-black text-white space-y-12">
      {/* Back Link */}
      <Link href="/#experience" className="block mb-6 text-gray-400 hover:text-white">
        ← Back
      </Link>

      {/* Header & Intro */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative flex-shrink-0">
          <Image src="/McCamishLogo.png" alt="McCamish Group Logo" fill className="object-contain" />
        </div>
        <div className="md:ml-6 lg:ml-8 flex-1">
          <h1 className="text-4xl font-bold">The McCamish Group</h1>
          <p className="text-gray-500 mt-1 mb-4">2025</p>
          <div className="text-lg leading-relaxed">
            At The McCamish Group, I work as an Investment Analyst focused on public and private market opportunities across asset classes.
            My role involves sourcing investment ideas, conducting financial and operational diligence, and building models to support long-term capital allocation decisions.
            I contribute to portfolio monitoring and help evaluate fund managers, direct deals, and market themes through structured memos and deep research.
            The environment is lean and entrepreneurial, which has pushed me to work independently, think critically, and communicate clearly with senior stakeholders.
            This experience has deepened my understanding of how capital is deployed at the family office level and strengthened my ability to balance conviction with discipline.
          </div>
        </div>
      </div>

      {/* Role Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Investment Analyst (Aug 2025 – Nov 2025)</h2>
      </section>
    </main>
  );
}
