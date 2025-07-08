import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Algory Capital – Experience",
  description:
    "At Algory Capital, I led volatility-based equity and options strategies and developed cointegrated pair trading models, applying quantitative methods to real-world markets.",
};

export default function AlgoryPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-gray-900 to-black text-white">
      <Link
        href="/#experience"
        className="block mb-6 text-gray-400 hover:text-white"
      >
        ← Back to Experience
      </Link>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 relative">
          <Image
            src="/AlgoryLogo.jpg"
            alt="Algory Capital Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>

        <div>
          <h1 className="text-4xl font-mono font-bold mb-2">Algory Capital</h1>
          <p className="text-gray-500 mb-6">2025</p>
          <p className="text-lg leading-relaxed">
            I progressed from quantitative researcher to portfolio manager at Algory Capital, where I led volatility-based equity and options strategies and developed cointegrated pair trading models to capture market inefficiencies.
          </p>
        </div>
      </div>
    </main>
  );
}
