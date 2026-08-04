"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">

        <h1 className="text-2xl font-bold text-yellow-400">
          Deepak Dhatterwal
        </h1>

        <nav className="hidden md:flex gap-8 text-white">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/portfolio">Portfolio</Link>

          <Link href="/gallery">Gallery</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl">
          ☰
        </button>

      </div>
    </header>
  );
}