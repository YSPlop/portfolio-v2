export const TextStatic = ({ words }: { words: string }) => {
    return (
      <div className="text-lg sm:text-xl md:text-2xl text-center text-gray-300">
        {words.split(" ").map((word, wordIndex, array) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <span key={`${wordIndex}-${charIndex}`} className="inline-block opacity-0">
                {char}
              </span>
            ))}
            {wordIndex < array.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </div>
    );
  };