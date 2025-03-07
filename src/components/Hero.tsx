'use client';

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { portfolioData } from "@/data/portfolio";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShimmerButtonPlop } from "@/components/magicui/shimmer-button-plop";
import { Ripple } from "@/components/magicui/ripple";
import { SparklesCore } from "@/components/ui/sparkles";

export function Hero() {
  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden">
      <SparklesCore
        background="black"
        minSize={0.4}
        maxSize={1}
        particleDensity={70}
        className="w-full h-full absolute"
      />
      <Ripple className="absolute inset-0" />
      <div className="relative z-20 text-center">
        <div className="z-10 whitespace-pre-wrap">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-white font-bold mb-6"
          >
            {portfolioData.personal.firstName}{" "}
            <AuroraText>{portfolioData.personal.lastName}</AuroraText>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-4"
          >
            {portfolioData.personal.role}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            {portfolioData.personal.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <ScrollLink 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-50}
              className="cursor-pointer"
            >
              <ShimmerButtonPlop className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
                  View Projects
                </span>
              </ShimmerButtonPlop>
            </ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-50}
              className="cursor-pointer"
            >
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Contact Me
                </span>
              </ShimmerButton>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </div>
    </motion.section>
  );
} 