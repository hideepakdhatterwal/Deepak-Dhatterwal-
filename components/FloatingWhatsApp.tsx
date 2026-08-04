"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918607326295"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition"
    >
      <FaWhatsapp size={32} color="white" />
    </a>
  );
}