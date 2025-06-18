import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { SparklesCore } from "@/components/ui/sparkles";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yukash's Portfolio",
  description: "Software Developer | Tech Enthusiast Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        <div className="relative min-h-screen">
          <SparklesCore
            background="transparent"
            minSize={1}
            maxSize={2}
            particleDensity={100}
            className="fixed inset-0 z-0"
            particleColor="rgba(255, 255, 255, 0.8)"
          />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
