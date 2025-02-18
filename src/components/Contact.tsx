'use client';

import { motion } from "framer-motion";
import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { sendEmail } from '@/lib/actions';
import styles from '@/styles/contact.module.css';
import { Badge } from "./ui/badge";
import { SparklesCore } from '@/components/ui/sparkles';
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "./ui/toaster"

export interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  location: string
  services: {
    websiteDevelopment: boolean
    appDevelopment: boolean
    designSystem: boolean
    websiteMigration: boolean
    ecommerceSite: boolean
    performanceEvaluation: boolean
  }
  budget: string
  description: string
}

const serviceCards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const serviceCard = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    location: 'VIC',
    services: {
      websiteDevelopment: false,
      appDevelopment: false,
      designSystem: false,
      websiteMigration: false,
      ecommerceSite: false,
      performanceEvaluation: false
    },
    budget: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      toast({
        className: "bg-zinc-800 border-zinc-700 text-white",
        description: (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Message sent successfully!</span>
            </div>
            <p className="text-gray-300">
              Thank you for reaching out. Yukash will get back to you within 24-48 hours.
            </p>
          </motion.div>
        ),
        duration: 5000,
      });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        location: 'VIC',
        services: {
          websiteDevelopment: false,
          appDevelopment: false,
          designSystem: false,
          websiteMigration: false,
          ecommerceSite: false,
          performanceEvaluation: false
        },
        budget: '',
        description: ''
      });
    } catch (error: unknown) {
      console.error('Failed to send email:', error);
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceChange = (service: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }));
  };

  return (
    <section id="contact" className="relative py-20 bg-black text-gray-100">
      <SparklesCore
        background="transparent"
        minSize={1}
        maxSize={2}
        particleDensity={100}
        className="absolute inset-0"
        particleColor="rgba(255, 255, 255, 0.3)"
      />
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Get In Touch</h2>
          
          <Card className="bg-zinc-900 border-zinc-700">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-6">
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={styles.input}
                      placeholder=" "
                    />
                    <label className={styles.label}>
                      First Name
                    </label>
                  </div>

                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={styles.input}
                      placeholder=" "
                    />
                    <label className={styles.label}>
                      Last Name
                    </label>
                  </div>

                  <div className={styles.inputContainer}>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.input}
                      placeholder=" "
                    />
                    <label className={styles.label}>
                      Email
                    </label>
                  </div>

                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={styles.input}
                      placeholder=" "
                    />
                    <label className={styles.label}>
                      Company
                    </label>
                  </div>

                  <div className={styles.inputContainer}>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={styles.input}
                      placeholder=" "
                    />
                    <label className={styles.label}>
                      Phone
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-200">Location</label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                    >
                      <SelectTrigger className="w-full bg-transparent border-zinc-600 text-gray-400">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-600 text-gray-400">
                        <SelectItem value="VIC">VIC</SelectItem>
                        <SelectItem value="NSW">NSW</SelectItem>
                        <SelectItem value="QLD">QLD</SelectItem>
                        <SelectItem value="WA">WA</SelectItem>
                        <SelectItem value="SA">SA</SelectItem>
                        <SelectItem value="TAS">TAS</SelectItem>
                        <SelectItem value="NT">NT</SelectItem>
                        <SelectItem value="ACT">ACT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">What services do you need?</h3>
                  <motion.div 
                    variants={serviceCards}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {Object.entries(formData.services).map(([service, checked]) => {
                      const serviceLabel = {
                        websiteDevelopment: 'Website Development',
                        appDevelopment: 'App Development',
                        designSystem: 'Design System',
                        websiteMigration: 'Website Migration',
                        ecommerceSite: 'E-commerce Site',
                        performanceEvaluation: 'Performance Evaluation'
                      }[service];

                      return (
                        <motion.div
                          key={service}
                          variants={serviceCard}
                          className="relative"
                        >
                          <Card
                            className={`p-4 cursor-pointer transition-all duration-300 ${
                              checked 
                                ? 'bg-blue-600/20 border-blue-500' 
                                : 'bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800'
                            }`}
                            onClick={() => handleServiceChange(service as keyof typeof formData.services)}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-1">
                                <h4 className="font-medium text-white mb-1">{serviceLabel}</h4>
                                {checked && (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                                      Selected
                                    </Badge>
                                  </motion.div>
                                )}
                              </div>
                              <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                                checked 
                                  ? 'border-blue-500 bg-blue-500' 
                                  : 'border-zinc-600'
                              }`}>
                                {checked && (
                                  <motion.svg
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full h-full text-white p-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={3}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </motion.svg>
                                )}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                <div className={styles.inputContainer}>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={styles.textarea}
                    placeholder=" "
                  />
                  <label className={styles.textareaLabel}>
                    Tell me about your project
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-600 disabled:cursor-not-allowed transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                            fill="none"
                          />
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      </motion.div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Toaster />
    </section>
  );
} 