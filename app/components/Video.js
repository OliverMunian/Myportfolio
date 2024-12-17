"use client";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import Olivier from "../../public/Moi.png";
import Header from "./Header";
import Ecna from "./Ecna";
import Slider from "./Slider";
import AboutMe from "./AboutMe";
//extensions
import { motion } from "motion/react";
import { useState, useEffect } from "react";
//icons
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaInbox } from "react-icons/fa";
import { FaS } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { PiEyesFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { PiDroneBold } from "react-icons/pi";

//Images
import drone from "../../public/drone.png";

function Video() {
  const titles = ["Fullstack", "Frontend", "Backend", "FPV Pilot"];
  const [video, setVideo] = useState(false);
  const [moved, setMoved] = useState(false);
  const [hover, setHover] = useState(false);
  const [slide, setSlide] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px = md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const titleDisplay = titles.map((data, index) => {
    return (
      <div key={index} className="-rotate-90 max-md:rotate-0">
        <p className="font-Prompt text-black">{data}</p>
      </div>
    );
  });

  function setAnimationCard(params) {
    setShowPortfolio(params);
  }
  return (
    <div className="relative flex items-center justify-center h-screen min-h-0 w-screen bg-zinc-300 p-8 max-sm:p-5 overflow-hidden">
      <div
        className="w-full h-full bg-white rounded-3xl flex items-end py-7 shadow-2xl border-2 border-zinc-200 
      max-md:flex-col max-md:items-center max-md:justify-center max-md:p-5 overflow-hidden max-md:h-[600px]"
      >
        <div className="flex justify-around md:flex-col-reverse md:h-4/6 max-md:w-full max-md:pb-5">
          {titleDisplay}
        </div>

        <div className="relative flex items-center h-full w-full overflow-hidden ">
          <AboutMe animation={setAnimationCard} show={showPortfolio} />

          <motion.div
            className="relative w-full h-full flex overflow-hidden max-md:absolute"
            initial={{
              x: isSmallScreen ? "100%" : "0%",
            }}
            animate={{
              x: isSmallScreen ? (showPortfolio ? "0%" : "100%") : "0%",
            }}
            transition={{
              duration: isSmallScreen ? (showPortfolio ? 0.8 : 0) : 0,
            }}
          >
            <motion.div
              className="w-full h-full flex flex-col"
              initial={{ x: "0%" }}
              animate={{ x: slide ? "-100%" : "0%" }}
              transition={{
                duration: 0.5,
                ease: "linear",
              }}
            >
              <div className="flex w-full h-full flex-col items-start justify-between px-6 max-md:px-0 bg-white">
                <div className="w-full flex items-center justify-center">
                  <div
                    className="md:hidden hover:cursor-pointer"
                    onClick={() => {
                      setShowPortfolio((prev) => !prev);
                    }}
                  >
                    <IoIosArrowDropleft color="black" size={25} />
                  </div>
                  <div className="w-full relative flex justify-start items-start max-md:items-center max-md:justify-center">
                    <h1
                      className="text-9xl font-bold text-black font-Prompt max-sm:text-5xl max-md:text-6xl max-lg:text-7xl max-xl:text-9xl tracking-[15px]
                    max-xl:tracking-[10px]  max-lg:tracking-[5px]"
                      // style={{ letterSpacing: "15px" }}
                    >
                      Portfolio
                    </h1>
                    <div className="absolute top-0 right-0 h-8 w-8 border-t-8 border-r-8 border-black max-md:border-t-4 max-md:border-r-4"></div>
                  </div>
                </div>

                <div className="flex justify-between w-full h-2/4 border-2 border-green-500">
                  <div
                    className={`flex overflow-hidden w-3/4 border-none transition
                    ${
                      video
                        ? "items-end justify-start fixed h-screen w-screen top-0 left-0 z-20 transition"
                        : "hover:scale-105 rounded-xl items-center justify-center cursor-pointer max-sm:w-[70%]"
                    }
                    `}
                    onClick={() => setVideo((prev) => !prev)}
                  >
                    <MuxPlayer
                      streamType="on-demand"
                      playbackId="mUvCLZfO8q00v00uDIcrFREa00lUFdZMyKvQKSUJSDOI400"
                      metadataViewerUserId="Placeholder (optional)"
                      primaryColor="transparent"
                      secondaryColor="transparent"
                      autoPlay
                      muted={true}
                      loop
                      className="object-cover h-full overflow-hidden transition"
                      style={{
                        "--controls": "none",
                        "--media-object-fit": "cover",
                      }}
                    />
                    {video && (
                      <div className="absolute flex items-center w-1/3 z-30  backdrop-blur-md overflow-hidden max-lg:w-1/2 max-sm:w-full max-sm:top-0">
                        <div className="relative p-4">
                          <h1 className="font-Prompt font-bold uppercase text-3xl text-white max-md:text-xl">
                            Albania from above
                          </h1>
                          <p className="text-sm text-white max-lg:text-xs">
                            Enjoy the stunning landscapes of Albania, captured
                            with precision and passion using an FPV drone. This
                            video takes you soaring over Ksamil, with its
                            turquoise waters and idyllic beaches, Gjirokastër,
                            the "City of Stone" steeped in history and charm,
                            and Dhërmi, a gem of the Albanian Riviera boasting
                            majestic mountains and pristine coves.
                          </p>
                          <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-white"></div>
                          <div className="absolute bottom-0 left-0 h-6 w-6 border-t-2 border-r-2 border-white rotate-180"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <Ecna />
                </div>

                <div className="flex w-full justify-between h-1/4 p-1">
                  <div className="relative flex flex-col items-center justify-center w-2/5 h-full bg-zinc-600 rounded-xl p-3 hover:scale-110 transition hover:cursor-pointer">
                    <a href="CV.pdf" download="CV.pdf">
                      <FaDownload className="text-5xl max-md:text-3xl" />
                    </a>
                    <p className="text-white font-Prompt mt-5 text-center max-md:mt-2">
                      Download CV
                    </p>
                    <div className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-white"></div>
                  </div>

                  <div className="relative w-2/4 flex h-full">
                    <div className=" relative w-2/4 h-full bg-black flex flex-col items-center justify-center rounded-tl-2xl rounded-bl-2xl">
                      <div
                        className="w-full h-full flex items-center justify-center border-zinc-300"
                        style={{ border: "0.75px solid" }}
                      >
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/oliviermalahel"
                        >
                          <FaLinkedinIn
                            className="opacity-75 hover:scale-125 hover:opacity-100 transition hover:cursor-pointer"
                            color="white"
                            size={30}
                          />
                        </a>
                      </div>
                      <div className="w-full h-full  flex items-center justify-center">
                        <a
                          target="_blank"
                          href="https://github.com/OliverMunian?tab=repositories"
                        >
                          <FaGithub
                            className="opacity-75 hover:scale-125 hover:opacity-100 transition hover:cursor-pointer"
                            color="white"
                            size={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className=" relative w-2/4 h-full bg-black flex flex-col items-center justify-center rounded-tr-2xl rounded-br-2xl hover:cursor-pointer"
                      onMouseOver={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      onClick={() => setSlide(true)}
                    >
                      <PiEyesFill
                        className={`${
                          hover ? "scale-125 opacity-100" : "opacity-75"
                        } transition`}
                        color="white"
                        size={30}
                      />
                      <h1
                        className={`font-Prompt max-sm:text-sm text-center ${
                          hover ? "text-white opacity-100" : "opacity-75"
                        }`}
                      >
                        Others projects
                      </h1>
                    </div>
                    <motion.div
                      className="absolute h-full backdrop-blur-lg flex items-center justify-center rounded-lg bg-orange-300 mr-5"
                      onClick={() => setMoved((prev) => !prev)}
                      style={{
                        left: "48%",
                        width: "55%",
                      }}
                      initial={{
                        x: "0%",
                      }}
                      animate={{
                        x: moved ? "-90%" : "0%", // Déplace vers la gauche ou la droite
                      }}
                      transition={{
                        duration: 0.5, // Ajoute une durée de transition
                        ease: "easeInOut", // Transition fluide
                      }}
                    >
                      {!moved && <FaRegFolderOpen size={30} color="white" />}
                      {moved && <IoShareSocial size={30} color="white" />}
                      <div className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-white"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute w-full h-full flex flex-col"
              initial={{ x: "100%" }} // Position de départ
              animate={{ x: slide ? "0%" : "100%" }} // Glisse vers le cadre visible
              transition={{
                duration: 0.5,
                ease: "linear",
              }}
            >
              <div className="flex flex-col items-center justify-around w-full h-full bg-black rounded-xl">
                <div className="flex justify-end w-full ">
                  <button
                    className="border-2 border-white rounded-full mr-3"
                    onClick={() => setSlide(false)}
                  >
                    <IoClose color="white" size={20} />
                  </button>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center mx-2">
                    <FaCode className="mx-3" color="white" size={35} />{" "}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="font-Prompt text-7xl text-white font-bold max-md:text-4xl">
                      Projects
                    </h1>
                    <p className="italic text-xs mt-2">Swipe left/right to see all projects</p>
                  </div>

                  <div className="flex items-center justify-center mx-2 h-[40px] w-[40px]">
                    {/* <PiDroneBold className="mx-3" color="white" size={35} /> */}
                    <Image src={drone} alt="drone_FPV" />
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-3/4">
                  <Slider />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Video;
