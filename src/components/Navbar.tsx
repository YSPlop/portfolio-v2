'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import { AuroraText } from './magicui/aurora-text';

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const router = useRouter();
  const pathname = usePathname();

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

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <NavLink href="#about" onClick={(e) => handleScroll(e, '#about')}>About</NavLink>
                <NavLink href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</NavLink>
                <NavLink href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</NavLink>
              </div>
            </div>
          </div>
        </div>

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