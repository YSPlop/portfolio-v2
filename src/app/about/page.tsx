'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Meteors } from "@/components/ui/meteors";
import { aboutData } from "@/data/about";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="relative">
        <SparklesCore
          background="black"
          minSize={0.4}
          maxSize={1}
          particleDensity={70}
          className="absolute inset-0 w-full h-full"
        />
        <Meteors className="absolute inset-0" />

        <div className="container relative z-10 px-4 mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" size="sm" asChild>
              <Link href="/#about">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          <TracingBeam className="max-w-4xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-4xl font-bold mb-4 text-zinc-100">{aboutData.personal.name}</h1>
              <p className="text-xl text-gray-400 mb-6">{aboutData.summary}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge 
                  variant="secondary" 
                  className="flex text-white items-center gap-2 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] px-4 py-2"
                >
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${aboutData.personal.phone}`} className="hover:text-white transition-colors">
                    {aboutData.personal.phone}
                  </a>
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="flex text-white items-center gap-2 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] px-4 py-2"
                >
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${aboutData.personal.email}`} className="hover:text-white transition-colors">
                    {aboutData.personal.email}
                  </a>
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="flex text-white items-center gap-2 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] px-4 py-2"
                >
                  <MapPin className="w-4 h-4" />
                  {aboutData.personal.location}
                </Badge>
              </div>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="bg-gradient-to-r hover:text-white from-zinc-900 to-zinc-800 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/70 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                <a 
                  href="/yukash-resume.pdf" 
                  download
                  className="inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <Separator className="my-8 bg-zinc-800" />

            {/* Experience Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-zinc-100">Work Experience</h2>
              <div className="space-y-6">
                {aboutData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                      <CardHeader>
                        <CardTitle>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                              <p className="text-gray-400">{exp.company}</p>
                            </div>
                            <Badge>{exp.period}</Badge>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300">{achievement}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-zinc-100">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aboutData.technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] h-full">
                      <CardHeader>
                        <CardTitle className="text-lg text-white">{skill.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-zinc-100">Education</h2>
              <div className="space-y-4">
                {aboutData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                      <CardHeader>
                        <CardTitle>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg text-white font-bold">{edu.degree}</h3>
                              <p className="text-gray-400">{edu.institution}</p>
                            </div>
                            <Badge>{edu.period}</Badge>
                          </div>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Voluntary Experience Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-zinc-100">Voluntary Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aboutData.voluntary.map((vol, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] h-full">
                      <CardHeader>
                        <CardTitle>
                          <h3 className="text-lg font-bold text-white">{vol.role}</h3>
                          <p className="text-sm text-gray-400">{vol.organization}</p>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </TracingBeam>
        </div>
      </div>
    </main>
  );
}
