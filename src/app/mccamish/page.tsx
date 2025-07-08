import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "McCamish Group – Experience",
  description:
    "At The McCamish Group, I supported early-stage research and asset evaluation, assisting in strategic investment framework development within a private firm environment.",
};

export default function McCamishPage() {
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
            src="/McCamishLogo.png"
            alt="McCamish Group Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>

        <div>
          <h1 className="text-4xl font-mono font-bold mb-2">McCamish Group</h1>
          <p className="text-gray-500 mb-6">2025</p>
          <p className="text-lg leading-relaxed">
            At The McCamish Group, I supported early-stage research and asset evaluation, assisting in the development of strategic investment frameworks within a private firm environment, enhancing analytical rigor in decision-making.
          </p>
        </div>
      </div>
    </main>
  );
}