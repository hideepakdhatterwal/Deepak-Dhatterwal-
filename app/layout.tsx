import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deepak Dhatterwal | Official Website",
  description:
    "Official website of Indian Actor Deepak Dhatterwal. Portfolio, Gallery, Showreel and Contact.",
  keywords: [
    "Deepak Dhatterwal",
    "Indian Actor",
    "Actor Portfolio",
    "Official Website",
  ],
  authors: [{ name: "Deepak Dhatterwal" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}