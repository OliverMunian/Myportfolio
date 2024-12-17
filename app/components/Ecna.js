"use client";
import Iphone from "../../public/iphone.png";
import IphoneP from "../../public/Iphone_perspective.png";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import SVG from "./Svg";
//icons
import { IoClose } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";
import { easeIn } from "motion";

function Ecna() {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Réinitialiser au démontage
    };
  }, [active]);

  return (
    <div>
      <div
        className="relative flex justify-center items-center h-full overflow-hidden hover:scale-105 hover:cursor-pointer transition rounded-[28px]
        max-md:rounded-[22px]"
        onClick={() => setActive((prev) => !prev)}
      >
        <Image
          src={Iphone}
          className="h-full"
          alt="Iphone_contour"
          style={{ zIndex: 3, height: "100", width: "100%" }}
        />
        <MuxPlayer
          className="h-full absolute top-0"
          streamType="on-demand"
          playbackId="HNaomUlHcXVTr6nQmds1NoxjnJWmByWt2GIji5k9KTw"
          metadataViewerUserId="Placeholder (optional)"
          primaryColor="transparent"
          secondaryColor="transparent"
          autoPlay="muted"
          loop
          style={{
            "--controls": "none",
            width: "92%",
          }}
        />
      </div>

      {active && (
        <motion.div
          className="fixed flex flex-col bg-gradient-to-b from-blue-950 to-cyan-700 z-10 transition p-4 overflow-y-auto flex-grow max-md:pb-16"
          initial={{
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            width: 250,
            height: 250,
            borderRadius: "50%",
          }}
          animate={{
            scale: [6, 1],
            top: "0%",
            left: "0%",
            translateX: "0%",
            translateY: "0%",
            width: "100vw",
            height: "100vh",
            borderRadius: "0%",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-full flex justify-end items-start"
            initial={{
              display: "none",
            }}
            animate={{
              display: "flex",
            }}
            transition={{
              // duration: 1,
              delay: 0.8,
            }}
          >
            <button
              className="hover:cursor-pointer hover:scale-110 transition"
              onClick={() => {
                console.log("active: ", active);
                setActive(false);
              }}
            >
              <IoClose color="white" size={60} />
            </button>
          </motion.div>

          <motion.div
            className="w-full flex items-center justify-between max-md:flex-col-reverse max-md:justify-end"
            initial={{
              display: "none",
            }}
            animate={{
              display: "flex",
            }}
            transition={{
              // duration: 1,
              delay: 1,
            }}
          >
            <div
              className="h-full relative flex justify-center items-center rounded-[65px] overflow-hidden
              max-md:rounded-[60px] max-sm:rounded-[65px] max-md:mt-5"
              style={{ backgroundColor: "transparent" }}
            >
              <Image
                src={Iphone}
                alt="Iphone_contour"
                style={{ zIndex: 3, height: "100%", width: "100%" }}
              />
              <MuxPlayer
                className="h-full absolute top-0 w-[92%] "
                streamType="on-demand"
                playbackId="HNaomUlHcXVTr6nQmds1NoxjnJWmByWt2GIji5k9KTw"
                metadataViewerUserId="Placeholder (optional)"
                primaryColor="transparent"
                secondaryColor="transparent"
                autoPlay="muted"
                loop
                style={{
                  "--controls": "none",
                }}
              />
            </div>

            <div className="w-2/3 flex flex-col max-md:w-full max-md:items-center">
              <div className="relative w-full flex flex-col px-5 py-5">
                <div className="w-full flex items-center">
                  <SVG />
                  <h1 className="text-white font-Prompt font-bold text-6xl max-xl:text-4xl max-md:text-5xl max-sm:text-3xl">
                    ECNA -{" "}
                    <span className="italic font-light">
                      {" "}
                      Time is now yours
                    </span>
                  </h1>
                </div>

                <div className="w-3/4 mt-6 text-xl max-xl:text-sm max-md:w-full max-md:text-xs">
                  <p className="font-Prompt">
                    I worked in ambulance in France during many years, so I
                    decided to convert myself as a web developer to create my
                    own mobile application to help ambulances companies to have
                    a better organization at work and mainly save time during
                    the day to help more patients. <br /> <br />
                    I brought them new features where they can create and have
                    the access their own vehicle fleet and a part of the
                    activity about the company but also the activity of their
                    collaborators.
                    <br />
                    <br />
                  </p>
                  <div className="flex font-Prompt">
                    The app is still in progress...
                    <RiToolsFill color="white" size={25} />
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-white"></div>
                <div className="absolute bottom-0 left-0 h-6 w-6 border-t-2 border-r-2 border-white rotate-180"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Ecna;
