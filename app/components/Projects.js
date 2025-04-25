"use client";
//Assets
//Extensions
import { useEffect, useState, useRef } from 'react'
import Image from "next/image";
import { motion } from 'framer-motion'
import DecryptedText from "./DecryptedText";

export default function Projects() {
  return (
    <div className="relative size-full flex flex-col items-center justify-start overflow-hidden z-0 max-lg:mt-32 max-md:mt-16 max-sm:mt-5 -mt-10">
      <h1 className="text-white font-extrabold text-[220px] max-xl:text-[200px] max-lg:text-[135px] max-md:text-[85px] max-sm:text-[85px]">
        PROJECTS
      </h1>
    </div>
  );
}
