'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon, X } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';

interface SocialShareProps {
  title: string;
}

export function SocialShare({ title }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    }
  ];
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
    });
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute right-0 mt-2 p-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg z-50"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-2 py-1">
                <span className="text-sm text-gray-400">Share via</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="flex gap-2">
                {shareLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 "
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={copyToClipboard}
                >
                  <LinkIcon className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 