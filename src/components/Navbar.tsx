'use client';

import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
            {/* Profile Section */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Link href="/" onClick={(e) => handleScroll(e, '#hero')} className="flex items-center space-x-3">
                {/* Profile Image */}
                <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={portfolioData.personal.profileImage}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Name and Status */}
                <div className="flex flex-col">
                  <div className="text-white font-bold text-lg">
                    {portfolioData.personal.firstName}{" "}
                    <AuroraText>{portfolioData.personal.lastName}</AuroraText>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className={`h-2 w-2 rounded-full mr-2 ${portfolioData.personal.isAvailableForHire ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-gray-300">
                      {portfolioData.personal.isAvailableForHire ? 'Available for hire' : 'Currently employed'}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <NavLink href="#about" onClick={(e) => handleScroll(e, '#about')}>About</NavLink>
                <NavLink href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</NavLink>
                <NavLink href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</NavLink>
                <NavLink href="/blogs" onClick={(e) => handleScroll(e, '#blogs')}>Blogs</NavLink>
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
                {/* Mobile Search */}
                <MobileNavLink href="#about" onClick={(e) => { handleScroll(e, '#about'); setIsOpen(false); }}>
                  About
                </MobileNavLink>
                <MobileNavLink href="#projects" onClick={(e) => { handleScroll(e, '#projects'); setIsOpen(false); }}>
                  Projects
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={(e) => { handleScroll(e, '#contact'); setIsOpen(false); }}>
                  Contact
                </MobileNavLink>
                <MobileNavLink href="/blogs" onClick={(e) => { handleScroll(e, '#blogs'); setIsOpen(false); }}>
                  Blogs
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