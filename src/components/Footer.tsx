'use client';

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub className="h-5 w-5" />,
      href: "https://github.com/YSPlop",
      label: "GitHub"
    },
    {
      icon: <FaLinkedinIn className="h-5 w-5 text-[#0A66C2]" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <FaXTwitter className="h-5 w-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: <MdEmail className="h-5 w-5 text-red-500" />,
      href: "mailto:your@email.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container px-4 mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-bold">Your Name</h3>
            <p className="text-zinc-400">
              Building digital experiences with modern web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#about" className="block text-zinc-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="block text-zinc-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-bold">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <p className="text-zinc-400">
              Have a project in mind? Let's talk about it.
            </p>
            <Button variant="default" asChild>
              <a href="mailto:your@email.com">Contact Me</a>
            </Button>
          </motion.div>
        </div>

        <Separator className="my-8 bg-zinc-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-sm"
          >
            © {currentYear} Your Name. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-sm"
          >
            Built with Next.js & Tailwind CSS
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 