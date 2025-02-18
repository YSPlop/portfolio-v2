"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextStatic } from "@/lib/about-text-static";

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const wordArray = words.split(" ");
  
  const getCharacterDelay = (wordIndex: number, charIndex: number) => {
    let totalChars = 0;
    for (let i = 0; i < wordIndex; i++) {
      totalChars += wordArray[i].length + 1;
    }
    return (totalChars + charIndex) * 0.03;
  };

  if (!mounted) {
    return <TextStatic words={words} />;
  }

  return (
    <AnimatePresence mode="wait">
      <div className="text-lg sm:text-xl md:text-2xl text-center text-gray-300">
        {wordArray.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: getCharacterDelay(wordIndex, charIndex),
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < wordArray.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </div>
    </AnimatePresence>
  );
}; 