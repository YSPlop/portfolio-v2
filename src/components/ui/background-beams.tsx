"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full",
          "bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20",
          "blur-3xl opacity-50",
          "animate-pulse"
        )}
      />
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="h-full w-full">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-0 w-px h-full bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 