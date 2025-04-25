import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function DecodeEffect({ duration, interval }) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const phrases = ["Fullstack developer", "FPV Pilot"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledText, setScrambledText] = useState("");

  const currentText = phrases[currentIndex];

  useEffect(() => {
    const scramble = () => {
      let obj = { progress: 0 };

      gsap.to(obj, {
        progress: 1,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          setScrambledText(() =>
            currentText
              .split("")
              .map((char) =>
                obj.progress < 1
                  ? chars[Math.floor(Math.random() * chars.length)]
                  : char
              )
              .join("")
          );
        },
        onComplete: () => {
          setScrambledText(currentText);
        },
      });
    };

    scramble();

    const switcher = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, interval * 1000);

    return () => clearInterval(switcher);
  }, [currentText, duration, interval]);

  return (
    <div>
      <h1 className="text-white text-8xl text-center font-inter font-medium max-lg:text-7xl max-sm:text-[54px] ">
        {scrambledText}
      </h1>
    </div>
  );
}
