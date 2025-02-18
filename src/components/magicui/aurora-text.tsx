"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AuroraTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  return (
    <Component
      className={cn(
        "relative inline-flex bg-[linear-gradient(110deg,hsl(var(--color-1)),hsl(var(--color-2)),hsl(var(--color-3)))] bg-clip-text text-transparent transition-colors duration-[2000ms]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
