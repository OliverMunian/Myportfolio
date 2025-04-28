"use client";
//Components
import AboutMe from "./components/AboutMe";
import HireMe from "./components/HireMe";
import Projects from "./components/Projects";
import ProjectsPart from "./components/ProjectPart";
import Contact from "./components/Contact";
//Assets
import Me from "../public/Moi.png";
import Header from "./components/Header";
import Background from "../public/background.png";
import Mountain from "../public/Mountain.png";
// import Myself from "./components/Myself";
//Extensions
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import DecodeEffect from "./components/DecodeEffect";
//Icons
import { PiQuotesFill } from "react-icons/pi";
import { TfiArrowTopRight } from "react-icons/tfi";
import { TbDrone } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  // const [activeHeader, setActiveHeader] = useState("Home");
  const [active, setActive] = useState("About me");
  const [selectedHeader, setSelectedHeader] = useState("Home");
  const [currentText, setCurrentText] = useState("Fullstack developer");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) =>
        prevText === "Fullstack developer" ? "FPV Pilot" : "Fullstack developer"
      );
    }, 5000); // Change every 6 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const icons = [
    {
      icon: <FaCode color="black" className="text-3xl max-lg:text-2xl" />,
    },
    {
      icon: <TbDrone color="black" className="text-3xl max-lg:text-2xl" />,
    },
    {
      icon: (
        <IoLogoGithub className="text-black text-3xl max-lg:text-2xl hover:text-white hover:scale-150 transition" />
      ),
      link: "https://github.com/OliverMunian",
    },
    {
      icon: (
        <FaLinkedinIn className="text-black text-2xl max-lg:text-2xl hover:text-white hover:scale-150 transition" />
      ),
      link: "https://www.linkedin.com/in/oliviermalahel/",
    },
  ];

  const buttons = [
    {
      title: "About me",
      link: "",
      icon: <TfiArrowTopRight color="'white" className="text-2xl ml-2" />,
    },
    { title: "Hire me", link: "" },
  ];

  const activeIndex = buttons.findIndex((btn) => btn.title === active);

  const iconsDisplay = icons.map((el, i) => {
    return (
      <div
        key={i}
        className="bg-purple-500 size-[50px] rounded-full flex items-center justify-center mt-5 max-lg:size-[40px]"
      >
        <a href={el.link} target="blank">
          {el.icon}
        </a>
      </div>
    );
  });

  const buttonsDisplay = buttons.map((button, i) => {
    return (
      <div key={i} className="w-[50%] z-10">
        <button
          className="flex justify-center items-center w-[100%]"
          onClick={() => setActive(button.title)}
        >
          <h1
            className={`font-inter font-light ${
              active === button.title ? "font-medium" : ""
            }`}
          >
            {button.title}
          </h1>
          {button.icon}
        </button>
      </div>
    );
  });

  return (
    <div className="w-full flex items-center justify-center flex-col bg-white">
      <div
        className={`relative w-full h-screen flex flex-col items-center justify-between max-lg:h-[100dvh] max-lg:justify-start bg-center bg-cover bg-no-repeat z-0`}
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <div
          className="absolute w-full h-full bottom-0 z-10 md:bg-contain max-md:bg-size-[10%]"
          style={{ backgroundImage: `url(${Mountain.src})`, backgroundRepeat:'no-repeat', backgroundPosition:'bottom'}}
        ></div>

        <Header className="z-30" onHeaderChange={setSelectedHeader}   selectedHeader={selectedHeader} />

        {selectedHeader == "Home" && (
          <div className="w-full h-full relative flex flex-col items-center justify-between z-30">
            {/* <div className="absolute">
              <h1 className="max-sm:block hidden text-red-500 text-4XL">SM</h1>
              <h1 className="max-md:block hidden text-red-500 text-4XL">MD</h1>
              <h1 className="max-lg:block hidden text-red-500 text-4XL">LG</h1>
              <h1 className="max-xl:block hidden text-red-500 text-4XL">XL</h1>
              <h1 className="max-2xl:block hidden text-red-500 text-4XL">2XL</h1>

          </div> */}
            <div className="w-full pt-2 max-sm:mt-[20%]">
              <h1 className="text-white text-8xl text-center font-inter font-medium max-lg:text-7xl max-sm:text-[54px] ">
                I'm <span className="text-purple-500">Olivier Malahel</span>,
                <br />
                <DecodeEffect duration={1} interval={5}/>
                {/* <Typewriter
                  options={{
                    strings: ["Fullstack developer", "FPV Pilot"],
                    autoStart: true,
                    pauseFor: 100,
                    loop: true,
                    cursor: "_",
                    color: "#ffffff",
                    deleteSpeed: "20",
                  }}
                /> */}
                {/* <DecryptedText
                  texts={["Fullstack Developer", "FPV Pilot"]} // Texte à alterner
                  speed={100} // Vitesse de l'animation
                  delay={5000} // Délai de 5 secondes avant de changer le texte
                  className="revealed text-white font-inter text-8xl"
                /> */}
              </h1>
            </div>

            <div className="relative flex justify-between w-[100%] max-lg:justify-center max-lg:hidden overflow-clip p-5">
              <div className="w-1/4 flex flex-col justify-center items-center p-4">
                <div className="w-full flex items-start justify-start">
                  <PiQuotesFill
                    color="white"
                    className="text-3xl scale-x-[-1] "
                  />
                </div>
                <p className="text-white font-inter font-normal text-2xl">
                  Hi, I'm here to bring your projects to
                  <span className="text-purple-500 font-bold"> LIFE</span> !
                </p>
                <div className="w-full flex items-start justify-start">
                  <PiQuotesFill color="white" className="text-3xl" />
                </div>
              </div>

              <div className="w-1/4 flex justify-center items-center flex-col">
                {iconsDisplay}
              </div>
            </div>

            <div className="top-0 z-20 absolute h-full w-1/2 flex items-end justify-center overflow-hidden max-lg:w-full">
              <div className="absolute w-[95%] aspect-square bg-purple-500 z-0 rounded-full top-[55%] max-sm:w-[95%]  max-sm:top-[65%]"></div>

              <Image
                src={Me}
                alt="Ma photo de profil"
                className="z-10 w-[85%] max-sm:w-[100%] max-md:w-[90%] max-[820px]:w-[80%] max-lg:w-[70%] max-xl:w-[85%]"
              />

              <div className="absolute flex justify-center items-center h-[100px] w-full z-20 -mt-5">
                <div
                  className="relative border-white border-[0.5px] w-[60%] h-[80%] rounded-full backdrop-blur-lg flex items-center justify-around p-4 
          max-md:w-[80%]"
                >
                  <motion.div
                    className="absolute w-[45%] h-[75%] bg-black rounded-full m-[2.5%]"
                    initial={false}
                    animate={{
                      left: `${activeIndex * 50}%`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  {buttonsDisplay}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedHeader == "Projects" && <Projects />}
        {selectedHeader == "Contact" && <Contact/>}
      </div>
      {active === "About me" && selectedHeader == "Home" ? <AboutMe onSelectMenu={setSelectedHeader} /> : <></>}
      {active === "Hire me" && selectedHeader == "Home" ? <HireMe /> : <></>}
      {selectedHeader == "Projects" ? <ProjectsPart /> : <></>}
    </div>
  );
}
