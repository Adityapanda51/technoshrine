import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import TelecomNetwork from "@/components/TelecomNetwork";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechnoShrine — Innovation Paradise Begins Here",
  description:
    "TechnoShrine Infosolutions Pvt Ltd: Leading IT company since 2011. Trusted for innovative solutions, software development, consultancy, telecom & software testing, and web design services.",
  keywords: [
    "TechnoShrine",
    "IT company Bhubaneswar",
    "telecom testing",
    "software testing",
    "software consultancy",
    "web design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${grotesk.variable}`}>
      <body className="bg-night-950 text-ink-100 antialiased">
        <TelecomNetwork />
        <Preloader />
        <ScrollProgress />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
