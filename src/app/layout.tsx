import type { Metadata } from "next";
import "./globals.css";
import { SparklesCore } from "@/components/ui/sparkles";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
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
