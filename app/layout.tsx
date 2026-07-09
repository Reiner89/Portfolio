import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Reiner Alayo Laury | Portafolio",
  description: "Portafolio profesional de desarrollador Full Stack.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
