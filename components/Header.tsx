"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Gallery", href: "#gallery" },
  { name: "Quotes", href: "#quotes" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-2xl font-bold tracking-widest text-yellow-400">
            DD
          </h1>

          <nav className="hidden md:flex gap-10 text-white font-medium">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-yellow-400 transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={30} />
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}

      <div
        className={`fixed inset-0 bg-black/95 z-50 transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">

          <button onClick={() => setOpen(false)}>
            <X size={35} className="text-white" />
          </button>

        </div>

        <div className="flex flex-col items-center gap-10 mt-20">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white text-2xl hover:text-yellow-400"
            >
              {item.name}
            </Link>
          ))}

        </div>

      </div>
    </>
  );
}