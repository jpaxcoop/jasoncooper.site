'use client';

import { useEffect, useState } from 'react';

type TypingTextProps = {
  fullText: string;
  speed?: number; // milliseconds per character
};

export function TypingText({ fullText, speed = 30 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let animationFrame: number;

    function typeNextChar() {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        animationFrame = window.setTimeout(typeNextChar, speed);
      }
    }

    typeNextChar();

    return () => clearTimeout(animationFrame); // cleanup on unmount
  }, [fullText, speed]);

  return <p className="whitespace-pre-line mb-4">{displayedText}</p>;
}
