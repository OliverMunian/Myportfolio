import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function DecryptedText({
  texts = ["Fullstack Developer", "FPV Pilot"],
  speed = 100, // Speed of text scrambling
  delay = 5000, // Delay before switching text
  className = "text-white text-8xl font-inter", // Default class for styling
  ...props
}) {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [displayText, setDisplayText] = useState("");
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [isScrambling, setIsScrambling] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  // Function to shuffle the text and create the scrambling effect
  const shuffleText = (text, revealedSet) => {
    const availableChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    return text
      .split("")
      .map((char, i) => {
        if (revealedSet.has(i)) return text[i];
        return availableChars[Math.floor(Math.random() * availableChars.length)];
      })
      .join("");
  };

  useEffect(() => {
    let interval;

    // Scramble effect logic
    const animateText = () => {
      let iteration = 0;
      const scrambleInterval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          const newRevealed = new Set(prevRevealed);
          newRevealed.add(iteration);
          return newRevealed;
        });
        iteration++;
        if (iteration >= currentText.length) {
          clearInterval(scrambleInterval);
          setDisplayText(currentText); // Once scrambling is done, show the full text
        }
      }, speed);
    };

    // Scrambling logic
    const switchText = () => {
      setIsScrambling(true);
      setRevealedIndices(new Set()); // Reset revealed indices for new text
      animateText();
    };

    if (!hasAnimated) {
      switchText();
      setHasAnimated(true);
    }

    const intervalId = setInterval(() => {
      setCurrentText((prevText) =>
        prevText === texts[0] ? texts[1] : texts[0]
      );
      setHasAnimated(false); // Reset animation state when text switches
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentText, texts, delay, speed, hasAnimated]);

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${className}`}
      {...props}
    >
      <span>
        {shuffleText(currentText, revealedIndices)
          .split("")
          .map((char, index) => (
            <span
              key={index}
              className={revealedIndices.has(index) ? "" : "text-transparent"}
            >
              {char}
            </span>
          ))}
      </span>
    </motion.span>
  );
}