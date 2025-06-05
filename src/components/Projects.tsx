'use client';

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { SparklesCore } from "./ui/sparkles";
import { Meteors } from "./ui/meteors";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-black text-white overflow-hidden">
      <SparklesCore
        background="black"
        minSize={0.4}
        maxSize={1}
        particleDensity={70}
        className="absolute inset-0 w-full h-full"
      />
      <Meteors className="absolute inset-0" />
      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioData.projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="bg-zinc-900 border-zinc-800 overflow-hidden h-full flex flex-col"
                data-project={project.title}
                tabIndex={0}
                role="article"
                aria-label={`${project.title} - ${project.description}`}
              >
                {project.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader className="flex-grow">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.1 + techIndex * 0.05,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-zinc-800/50 text-zinc-100 border border-zinc-700/50 
                            backdrop-blur-sm hover:bg-zinc-700/50 transition-all duration-300
                            shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
                            px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
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
            <a href="/projects">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 