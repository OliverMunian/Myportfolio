"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header({ onHeaderChange, selectedHeader }) {
  const [activeHeader, setActiveHeader] = useState("Home");

  const handleHeaderClick = (title) => {
    onHeaderChange(title);
  };

  const buttons = [
    { title: "Home", link: "" },
    { title: "Projects", link: "" },
    { title: "Contact", link: "" },
  ];

  // Trouver l'index du bouton actif pour positionner le carré
  const activeIndex = buttons.findIndex((btn) => btn.title === selectedHeader);

  return (
    <div className="w-full flex items-center justify-center px-[5%]">
      <div className="w-full relative flex justify-around items-center overflow-hidden m-3 p-2">
        {/* Fond animé */}
        <motion.div
          className="absolute w-1/3 h-[85%] bg-white rounded-[50px] left-0 "
          initial={false}
          animate={{
            x: `${activeIndex * 100}%`, // Déplacer avec `x` plutôt que `left`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {buttons.map((button, i) => (
          <button
            key={i}
            className="w-1/3 z-10 flex items-center justify-center p-4"
            onClick={() => handleHeaderClick(button.title)}
          >
            <h1
              className={`text-3xl font-inter transition-all duration-300 max-md:text-lg ${
                selectedHeader === button.title
                  ? "text-black font-semibold"
                  : "text-white font-normal"
              }`}
            >
              {button.title}
            </h1>
          </button>
        ))}
      </div>
    </div>
  );
}
