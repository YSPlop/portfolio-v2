"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<{
    top: string;
    left: string;
    animationDelay: string;
    size: string;
  }>>([]);

  useEffect(() => {
    const styles = [...Array(number)].map(() => ({
      top: Math.floor(Math.random() * -100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * 2 + "s",
      size: Math.random() * 2 + 1 + "px",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="absolute inline-flex h-1 w-1"
          style={{
            top: style.top,
            left: style.left,
            animationDelay: style.animationDelay,
          }}
        >
          <span
            className="absolute inline-flex h-full w-full animate-meteor rounded-full bg-gradient-to-b from-zinc-400 to-zinc-700 opacity-50"
            style={{
              width: `${parseInt(style.size) * 100}px`,
            }}
          >
            <span className="absolute h-[1px] w-full animate-meteor-trail bg-gradient-to-r from-zinc-500 to-transparent" />
          </span>
        </span>
      ))}
    </div>
  );
}; 