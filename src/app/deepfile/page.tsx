import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "DeepFile – Experience",
  description:
    "At DeepFile, I contributed to advancing AI-driven solutions for file selection and validation pipelines, enhancing the precision and relevance of financial data analysis.",
};

export default function DeepFilePage() {
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
            src="/DeepfileLogo.jpg"
            alt="DeepFile Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>

        <div>
          <h1 className="text-4xl font-mono font-bold mb-2">DeepFile</h1>
          <p className="text-gray-500 mb-6">2025</p>
          <p className="text-lg leading-relaxed">
            At DeepFile, I contributed to advancing AI-driven solutions for file
            selection and validation pipelines, enhancing the precision and
            relevance of financial data analysis.
          </p>
        </div>
      </div>
    </main>
  );
}