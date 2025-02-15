"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div ref={ref} className={`relative ${className}`}>
      <div className="absolute -left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              "0 0px 60px -15px rgba(0, 0, 0, 0.3)",
          }}
          className="relative"
        >
          <svg
            width="20"
            height={svgHeight}
            viewBox={`0 0 20 ${svgHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L10 ${svgHeight}"
              stroke="url(#gradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="10"
                y1={0}
                x2="10"
                y2={svgHeight}
              >
                <stop stopColor="#18181B" />
                <stop offset={y1.get() / svgHeight} stopColor="#18181B" />
                <stop offset={y1.get() / svgHeight} stopColor="#18181B00" />
              </linearGradient>
            </defs>
          </svg>
          <div className="h-2 w-2 rounded-full bg-neutral-200 absolute -top-1 left-[9px]" />
        </motion.div>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}; 