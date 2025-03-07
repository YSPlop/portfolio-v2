'use client';

import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import { AuroraText } from './magicui/aurora-text';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = async (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // If we're not on the home page, first navigate to home
    if (pathname !== '/') {
      await router.push('/');
      // Wait for navigation to complete
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 1000);
    } else {
      // If we're already on home page, just scroll
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="relative bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={(e) => handleScroll(e, '#hero')} className="text-white font-bold text-xl">
                {portfolioData.personal.firstName}{" "}
                <AuroraText>{portfolioData.personal.lastName}</AuroraText>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <NavLink href="#about" onClick={(e) => handleScroll(e, '#about')}>About</NavLink>
                <NavLink href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</NavLink>
                <NavLink href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed left-0 top-16 w-full bg-black/80 backdrop-blur-sm border-b border-white/10 md:hidden"
            >
              <div className="flex flex-col items-center justify-start p-6 space-y-6">
                <MobileNavLink href="#about" onClick={(e) => { handleScroll(e, '#about'); setIsOpen(false); }}>
                  About
                </MobileNavLink>
                <MobileNavLink href="#projects" onClick={(e) => { handleScroll(e, '#projects'); setIsOpen(false); }}>
                  Projects
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={(e) => { handleScroll(e, '#contact'); setIsOpen(false); }}>
                  Contact
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-white origin-[0%]"
          style={{ scaleX }}
        />
      </nav>
    </header>
  );
};

const NavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-white text-base md:text-lg font-medium hover:text-white/70 transition-colors duration-200 w-full px-2 py-1"
  >
    {children}
  </Link>
); 