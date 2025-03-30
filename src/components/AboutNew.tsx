'use client';

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";
import { Meteors } from "./ui/meteors";
import { aboutData } from "@/data/about";
import { personalData } from "@/data/personal";
import { TracingBeam } from "./ui/tracing-beam";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "@/components/ui/progress";
import { PokemonCard } from "@/components/ui/pokemon-card";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import React from "react";


export function AboutNew() {
  const [expandedCard, setExpandedCard] = React.useState<string | null>(null);

  return (
    <section id="about" className="relative py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <SparklesCore
          background="black"
          minSize={0.4}
          maxSize={1}
          particleDensity={70}
          className="w-full h-full"
        />
        <Meteors />

      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <TracingBeam className="max-w-4xl mx-auto">
          {/* Summary Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <TextGenerateEffect words={aboutData.summary} />
          </motion.div>

          {/* Fun Facts Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {personalData.funFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer group"
                  onClick={() => setExpandedCard(expandedCard === fact.title ? null : fact.title)}
                  onMouseEnter={() => window.innerWidth >= 768 && setExpandedCard(fact.title)}
                  onMouseLeave={() => window.innerWidth >= 768 && setExpandedCard(null)}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{fact.icon}</span>
                      <span className="text-gray-200">{fact.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{fact.description}</p>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedCard === fact.title ? "auto" : 0,
                        opacity: expandedCard === fact.title ? 1 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden mt-4"
                    >
                      {fact.title === "Gym Enthusiast" && (
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-gray-400">Squat PR</p>
                            <Progress value={87.5} className="h-2" />
                            <p className="text-right text-white text-sm">{fact.stats?.squatPR}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Deadlift PR</p>
                            <Progress value={100} className="h-2" />
                            <p className="text-right text-white text-sm">{fact.stats?.deadliftPR}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Bench PR</p>
                            <Progress value={62.5} className="h-2" />
                            <p className="text-right text-white text-sm">{fact.stats?.benchPR}</p>
                          </div>
                        </div>
                      )}
                      {fact.title === "Pokemon Master" && (
                        <PokemonCard
                          name={fact.favorites?.pokemon || ''}
                          generation={fact.favorites?.generation || ''}
                          favoriteGame={fact.favorites?.game || ''}
                        />
                      )}
                      {fact.title === "Code Lover" && (
                        <div className="space-y-2">
                          <p className="text-sm text-gray-400">
                            <span className="text-gray-400 font-semibold">Years of Coding:</span> {fact.stats?.yearsOfCoding}
                          </p>
                          <p className="text-sm text-gray-400">
                            <span className="text-gray-400 font-semibold">Languages Known:</span> {fact.stats?.languagesKnown}
                          </p>
                          <p className="text-sm text-gray-400">
                            <span className="text-gray-400 font-semibold">Coffee/Day:</span> {fact.stats?.coffeePerDay} ☕
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card 
              className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              onMouseEnter={() => window.innerWidth >= 768 && setExpandedCard('professional')}
              onMouseLeave={() => window.innerWidth >= 768 && setExpandedCard(null)}
            >
              <CardHeader>
                <CardTitle className="text-gray-200 font-semibold text-xl">Professional Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aboutData.experience.slice(0, 2).map((exp) => (
                    <div 
                      key={`${exp.company}-${exp.role}`} 
                      className="space-y-2 p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-300 group"
                    >
                      <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{exp.company}</p>
                      <Badge className="bg-zinc-700 hover:bg-zinc-600 transition-colors">{exp.period}</Badge>
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedCard === 'professional' ? "auto" : 0,
                    opacity: expandedCard === 'professional' ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="space-y-4 p-4 rounded-lg bg-zinc-800/50">
                    <div className="grid grid-cols-1 gap-3">
                      {aboutData.experience.map((exp) => (
                        <div 
                          key={`${exp.company}-${exp.role}`}
                          className="flex items-start justify-between p-2 rounded-md bg-zinc-800/70 hover:bg-zinc-700/70 transition-colors"
                        >
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{exp.role}</h4>
                            <p className="text-sm text-gray-400">{exp.company}</p>
                          </div>
                          <p className="text-sm text-gray-400">{exp.period}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-zinc-900/50 rounded-lg">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Companies</p>
                          <p className="text-white font-medium">
                            {new Set(aboutData.experience.map(exp => exp.company)).size}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Roles</p>
                          <p className="text-white font-medium">
                            {aboutData.experience.length}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Industries</p>
                          <p className="text-white font-medium">
                            {new Set(aboutData.experience.map(exp => exp.company || 'Other')).size}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Total Duration</p>
                          <p className="text-white font-medium">
                            2
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Button */}
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
              className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-zinc-700 hover:border-zinc-500 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <a href="/about">
                Learn More About Me
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </TracingBeam>
      </div>
    </section>
  );
}