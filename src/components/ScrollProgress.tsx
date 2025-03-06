'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for the number
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Update percentage when scroll progress changes
  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [smoothProgress]);

  return (
    <div className="fixed z-50 flex justify-end
                    md:right-8 md:top-1/2 md:-translate-y-1/2
                    top-4 left-1/2 -translate-x-1/2 md:translate-x-0">
      <div className="relative w-16 h-16">
        {/* Background circle */}
        <motion.div
          className="w-full h-full rounded-full border-2 border-white/20"
        />
        
        {/* Progress circle */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            rotate: -90
          }}
        >
          <motion.svg
            className="w-full h-full"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              strokeWidth="2"
              stroke="white"
              strokeDasharray="301.59"
              style={{
                pathLength: smoothProgress
              }}
              className="origin-center"
            />
          </motion.svg>
        </motion.div>
        
        {/* Percentage text */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-white font-medium text-sm"
        >
          {scrollPercentage}
        </motion.div>
      </div>
    </div>
  );
}; 