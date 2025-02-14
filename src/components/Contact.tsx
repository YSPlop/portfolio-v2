'use client';

import { motion } from "framer-motion";
import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ChevronDown } from "lucide-react";
import { sendEmail } from '@/lib/actions';
import styles from '@/styles/contact.module.css';

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

export function Contact() {
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
    try {
      await sendEmail(formData);
      console.log('Email sent successfully');
      // Reset form or show success message
    } catch (error) {
      console.error('Failed to send email:', error);
      // Show error message to user
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
    <section id="contact" className="py-20 bg-black text-gray-100">
      <div className="container px-4 mx-auto">
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

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">What services do you need?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(formData.services).map(([service, checked]) => (
                      <div key={service} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleServiceChange(service as keyof typeof formData.services)}
                          className="rounded border-zinc-600"
                        />
                        <label className="text-sm text-gray-400">
                          {service === 'websiteDevelopment' ? 'Website Development' :
                           service === 'appDevelopment' ? 'App Development' :
                           service === 'designSystem' ? 'Design System' :
                           service === 'websiteMigration' ? 'Website Migration' :
                           service === 'ecommerceSite' ? 'E-commerce Site' :
                           service === 'performanceEvaluation' ? 'Performance Evaluation' :
                           service}
                        </label>
                      </div>
                    ))}
                  </div>
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

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 