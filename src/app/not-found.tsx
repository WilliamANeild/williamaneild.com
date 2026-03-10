import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-lora gap-6">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-gray-400 text-xl">This page doesn&apos;t exist.</p>
      <Link href="/" className="text-white underline hover:text-gray-300">
        ← Back home
      </Link>
    </main>
  );
}
