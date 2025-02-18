'use client';

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";
import { portfolioData } from "@/data/portfolio";
import { AuroraText } from "./magicui/aurora-text";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function About() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <SparklesCore
        background="black"
        minSize={0.4}
        maxSize={1}
        particleDensity={70}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">
            About <AuroraText>Me</AuroraText>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            {portfolioData.personal.about}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="group relative overflow-hidden bg-gradient-to-br from-zinc-900/80 to-zinc-950/90 border-zinc-800/50 backdrop-blur-sm p-6 hover:border-zinc-700/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -right-12 -top-12 h-40 w-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-300"
                />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-medium text-lg">{skill.name}</h3>
                    <Badge 
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-zinc-700/50 px-3"
                    >
                      {skill.level}%
                    </Badge>
                  </div>
                  
                  <div className="relative w-full bg-zinc-800/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className="absolute h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className="absolute h-full w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="bg-white text-black hover:bg-black hover:text-white transition-colors"
          >
            <a href="/about">
              Learn More About Me
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 