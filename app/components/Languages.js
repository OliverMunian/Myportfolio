"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
// Icons
import { IoLanguageSharp } from "react-icons/io5";
import { PiQuotesFill } from "react-icons/pi";
// Assets
import France from "../../public/Flag/France.png";
import Spain from "../../public/Flag/Spain.png";
import Sweden from "../../public/Flag/Sweden.png";
import UnitedKingdom from "../../public/Flag/United_Kingdom.png";
import Image from "next/image";

export default function Languages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const flags = [
    { country: France, percent: "100%", alt: "France flag" },
    { country: UnitedKingdom, percent: "85%", alt: "UK flag" },
    { country: Sweden, percent: "25%", alt: "Sweden flag" },
    { country: Spain, percent: "15%", alt: "Spain flag" },
  ];

  const [showPercent, setShowPercent] = useState(true);

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      setShowPercent(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [inView]);

  const maxDashOffset = 377;

  const languageDisplay = inView
    ? flags.map((flag, i) => {
        const percentValue = parseInt(flag.percent);
        const dashOffset = maxDashOffset * (1 - percentValue / 100);

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-center justify-center size-[150px]"
          >
            <div className="relative w-[130px] h-[130px] rounded-full flex items-center justify-center">
              <Image src={flag.country} className="size-full" alt={flag.alt} />

              <AnimatePresence>
                {showPercent && (
                  <motion.div
                    className="absolute flex items-center justify-center font-inter font-medium cursor-pointer opacity-50 bg-black rounded-full size-full"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="text-white">{flag.percent}</h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <svg className="absolute top-0 left-0 size-full">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="30%" stopColor="#9d59ef" />
                  <stop offset="80%" stopColor="#5a1da4" />
                </linearGradient>
              </defs>

              <motion.circle
                cx="75"
                cy="75"
                r="60"
                stroke="url(#GradientColor)"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={maxDashOffset}
                initial={{ strokeDashoffset: maxDashOffset }}
                animate={{ strokeDashoffset: dashOffset }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            </svg>
          </motion.div>
        );
      })
    : null;

  return (
    <div
      ref={ref}
      className="flex flex-col bg-[#171717] w-full rounded-t-xl p-10"
    >
      <div className="flex items-start">
        <PiQuotesFill color="white" className="text-xl scale-x-[-1] mr-2" />
        <div className="flex flex-col">
          <h1 className="text-white text-5xl font-inter font-medium">
            Bonjour, Hello, Hej, Holà <br />
          </h1>
          <div className="flex items-end">
            <h1 className="text-5xl font-inter font-medium text-purple-500">
              My languages
            </h1>
            <IoLanguageSharp className="text-purple-500 text-5xl mx-2 max-sm:mx-0" />
          </div>
        </div>
        <PiQuotesFill color="white" className="text-xl ml-2" />
      </div>

      <div className="w-full flex justify-around pt-10 max-md:flex-wrap">
        {languageDisplay}
      </div>
    </div>
  );
}
