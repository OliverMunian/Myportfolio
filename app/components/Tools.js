"use client";
import { motion } from "motion/react";
//Images
import expressicons from "../../public/expressjs_icon.svg";
import git from "../../public/Git_logo.png";
import githubicons from "../../public/github-icons.png";
import mongodbicons from "../../public/mongodb-icon.svg";
import html from "../../public/html.png";
import css from "../../public/css.png";
import nodejsicons from "../../public/nodejs_icon.svg";
import reactjsicons from "../../public/reactjs-icon.svg";
import javascripticons from "../../public/javascript_logopng.png";
import nextjsicons from "../../public/nextjs_icon.png";
import redux from "../../public/redux.svg";
import reactnative from "../../public/reactnative_icon.png";
import Typescript from "../../public/typescript.png";
import France from "../../public/Flag/France.png";
import Spain from "../../public/Flag/Spain.png";
import Sweden from "../../public/Flag/Sweden.png";
import UnitedKingdom from "../../public/Flag/United_Kingdom.png";
import Image from "next/image";

//icons
import { IoLanguage } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";

function Tools(props) {
  const pictures = [
    { src: expressicons, name: "ExpressJs", alt: "Logo_expressJs" },
    // { src: git, name: "Git", alt: "Logo_Github" },
    { src: mongodbicons, name: "MongoDb", alt: "Logo_MongoDb" },
    { src: nodejsicons, name: "NodeJS", alt: "Logo_NodeJS" },
    { src: reactjsicons, name: "React", alt: "Logo_React" },
    { src: javascripticons, name: "Javascript", alt: "Logo_Javascript" },
    { src: nextjsicons, name: "NextJS", alt: "Logo_NextJS" },
    { src: reactnative, name: "React Native", alt: "Logo_React_Native" },
    { src: githubicons, name: "Github", alt: "Logo_Git" },
    { src: html, name: "HTML", alt: "Logo_HTML" },
    { src: css, name: "CSS", alt: "Logo_CSS" },
    { src: Typescript, name: "Typescript", alt: "Logo_TS" },
  ];

  const flags = [
    { country: France, percent: 100, alt: "Flag_France" },
    { country: UnitedKingdom, percent: 85, alt: "Flag_United_kingdom" },
    { country: Sweden, percent: 20, alt: "Flag_Sweden" },
    { country: Spain, percent: 10, alt: "Spain" },
  ];

  const radius = 60; // Fixed radius
  const circumference = 2 * Math.PI * radius;

  const displayFlags = flags.map((flag, i) => {
    const offset = circumference * (1 - flag.percent / 100);
    return (
      <div
        className="relative flex justify-center items-center w-[70px] h-[70px] rounded-full mx-2
        max-xl:w-[50px] max-xl:h-[50px] max-md:w-[35px] max-md:h-[35px]"
        key={i}
      >
        <motion.svg viewBox="0 -15 120 150" className="absolute w-full h-full">
          <defs>
            <linearGradient id="GradientColor" gradientTransform="rotate(80)">
              <stop offset="50%" stopColor="#8c6487" />
              <stop offset="100%" stopColor="#dc8c96" />
            </linearGradient>
          </defs>
          <motion.circle
            initial={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
              cx: "60",
              cy: "60",
              r: "60", // Radius
              stroke: "url(#GradientColor)",
              strokeWidth: "12",
              strokeLinecap: "round",
              fill: "none",
            }}
            animate={{
              strokeDashoffset: props.position ? offset : 0,
            }}
            transition={{
              duration: props.position ? 2 : 0, // Animation duration
              ease: "linear",
            }}
          ></motion.circle>
        </motion.svg>
        <Image src={flag.country} alt={flag.alt} className="w-[75%] h-[75%]" />
      </div>
    );
  });

  const allImg = pictures.map((data, i) => {
    return (
      <div key={i} className="w-[30px] h-[30px] m-4 flex flex-col items-center">
        <Image src={data.src} className="w-full h-full" alt={data.alt} />
        <p className="font-Prompt text-xs">{data.name}</p>
      </div>
    );
  });
  return (
    <div className="flex-grow">
      <div className="flex items-center px-4">
        <h1 className="font-Prompt text-2xl mr-2 text-black">My languages</h1>
        <IoLanguage size={25} color="black" />
      </div>
      <div className="flex w-full px-2 max-sm:w-full ">{displayFlags}</div>

      <div className="w-full h-full flex flex-col items-center">
        <div className="flex items-center w-full px-4">
          <h1 className="font-Prompt text-2xl mr-2 text-black">My tools</h1>
          <RiToolsFill size={25} color="black" />
        </div>
        <div className="flex w-full">
          <motion.div
            className="flex items-center w-max px-1 pb-4"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration:10 ,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {allImg}
          </motion.div>
          <motion.div
            className="flex items-center px-1 w-max pb-4"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {allImg}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
