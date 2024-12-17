"use client";
import { motion } from "motion/react";
import Olivier from "../../public/Moi.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Tools from "./Tools";
//icons
import { FaInbox } from "react-icons/fa";

function AboutMe(props) {
  const [isflipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsBigScreen(window.innerWidth > 768); // 768px = md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isflipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className=" w-2/4 h-full max-md:w-full max-lg:w-1/2">
      <div className="flip-card h-full flex-grow w-full overflow-hidden ">
        <motion.div
          className="flip-card-inner h-full w-full flex"
          initial={{x:0}}
          animate={{
            rotateY: isflipped ? 180 : 0,
            x: props.show && !isBigScreen ? "-100%" : 0,
          }}
          transition={{
            duration: props.show ? isBigScreen ? 0 : 0.8 : 0.8,
            animationDirection: "normal",
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="relative flip-card-front h-full w-full flex flex-col rounded-xl justify-start overflow-hidden">
            <div className="h-[10%] flex w-full items-center justify-between bg-white">
              <div className="flex items-center max-md:hidden">
                <div className="flex justify-center items-center h-10 w-10 rotate-45">
                  <div>
                    <div
                      className="h-2 w-2 rounded-sm m-1"
                      style={{ margin: "1px", border: "1.5px solid black" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-sm m-1"
                      style={{ margin: "1px", border: "1.5px solid black" }}
                    ></div>
                  </div>
                  <div>
                    <div
                      className="h-2 w-2 rounded-sm"
                      style={{ margin: "1px", border: "1.5px solid black" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-sm"
                      style={{ margin: "1px", border: "1.5px solid black" }}
                    ></div>
                  </div>
                </div>
                <h2 className="text-black font-Prompt max-md:hidden">
                  About Me
                </h2>
                <h2 className="text-black font-Prompt md:hidden">Portfolio</h2>
              </div>






              <div
                className="flex items-center md:hidden hover:cursor-pointer"
                onClick={() => props.animation(true)}
              >
                <div className="flex justify-center items-center h-10 w-10 rotate-45">
                  <div>
                    <div
                      className="h-2 w-2 rounded-sm m-1"
                      style={{ margin: "1px", border: "1.5px solid black" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-sm m-1"
                      style={{ margin: "1px", border: "1.5px solid black" }}
                    ></div>
                  </div>
                  <div>
                    <div
                      className="h-2 w-2 rounded-sm"
                      style={{ margin: "1px", border: "1.5px solid black" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-sm"
                      style={{ margin: "1px", border: "1.5px solid black" }}
                    ></div>
                  </div>
                </div>
                <h2 className="text-black font-Prompt">Portfolio</h2>
              </div>

              <div
                className="bg-[#8284cd] w-[60%] h-full"
                style={{
                  clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              ></div>
            </div>

            <div className="flex flex-col h-full rounded-tl-2xl rounded-bl-2xl rounded-br-2xl bg-[#8284cd] p-2">
              <div className="flex justify-end w-full">
                <div
                  className="relative flex items-center justify-center h-80 w-80 border-4 border-white rounded-full
              max-md:w-72 max-md:h-72 max-lg:w-60 max-lg:h-60"
                >
                  <div className="w-64 h-64 rounded-full max-sm:w-60 max-sm:h-60 max-md:w-52 max-md:h-52 max-lg:h-44 max-lg:w-44 bg-[#e5b1fa]"></div>
                  <div className="absolute w-96 h-96 flex items-end justify-end overflow-hidden rounded-full max-lg:w-80 max-lg:h-80">
                    <Image
                      className="mt-10"
                      src={Olivier}
                      alt="Profile_picture"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between flex-grow">
                <div className="flex flex-col justify-end h-full">
                  <h1 className="font-Prompt font-semibold text-5xl">
                    <span className="font-light">I am,</span> <br />
                    Olivier <br />
                    Malahel
                  </h1>
                  <div className="flex items-center border-b-2 border-white border-dotted">
                    <p className="font-Prompt max-sm:text-xs">
                      omalahel@gmail.com
                    </p>
                    <FaInbox color="white" className="ml-3" size={15} />
                  </div>
                </div>

                <div className="relative flex items-center justify-center h-24 w-24 bg-black rounded-full max-sm:h-20 max-sm:w-20 max-lg:h-14 max-lg:w-14 max-xl:w-16 max-xl:h-16">
                  <div className="absolute h-1/6 w-1/6 bg-white rounded-full"></div>
                  <motion.svg
                    onClick={() => handleFlip()}
                    className="absolute h-full w-full hover:cursor-pointer"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="transparent"
                    />
                    <text fill="white" fontSize="13" textAnchor="middle">
                      <textPath href="#circlePath" startOffset="50%">
                        Press me to learn more about me
                      </textPath>
                    </text>
                  </motion.svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flip-card-back h-full w-full bg-sunsetparis-wallpaper bg-cover rounded-xl overflow-hidden max-sm:bg-left "
            style={{ backgroundPosition: "30%" }}
          >
            <div className="backdrop-blur-sm flex flex-col h-full">
              <div className="h-[10%] bg-transparent w-full flex items-center justify-end rounded-">
                <div
                  className="w-[60%] bg-white z-40 h-full flex items-end justify-end"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)",
                  }}
                >
                  <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={() => handleFlip()}
                  >
                    <div className="flex justify-center items-center h-10 w-10 rotate-45">
                      <div>
                        <div
                          className="h-2 w-2 rounded-sm m-1"
                          style={{ margin: "1px", border: "1.5px solid black" }}
                        ></div>
                        <div
                          className="h-2 w-2 rounded-sm m-1"
                          style={{ margin: "1px", border: "1.5px solid black" }}
                        ></div>
                      </div>
                      <div>
                        <div
                          className="h-2 w-2 rounded-sm"
                          style={{ margin: "1px", border: "1.5px solid black" }}
                        ></div>
                        <div
                          className="h-2 w-2 rounded-sm"
                          style={{ margin: "1px", border: "1.5px solid black" }}
                        ></div>
                      </div>
                    </div>
                    <h2 className="text-black font-Prompt ">Card</h2>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pl-4 border-b-white border-b-[0.75px] rounded-tr-lg">
                <h1 className="font-Prompt font-bold text-black text-5xl max-sm:text-4xl max-lg:text-3xl">
                  About Me
                </h1>
              </div>
              <div className="p-4">
                <p className="text-black text-xs font-Prompt">
                  Raised and born in Paris, I had worked in ambulance for many
                  years then i decided to convert myself as fullstack developper
                  to reach my main goal: build my own application to offer a new
                  future to ambulance companies in France. <br />
                  Then I integrated an intensive bootcamp in Paris at La Capsule
                  to gain knowledge about code and process I recently decided to
                  move in Sweden to tackle new challenges and bring a new fresh
                  perspective
                </p>
              </div>
              <Tools position={isflipped} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
