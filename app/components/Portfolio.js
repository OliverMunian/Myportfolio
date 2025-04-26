"use client";
import Image from "next/image";
//Assets
import Sodermalm_logo from "../../public/Logo_rectangle.png";
import Sodermalm_barbershop from "../../public/Sodermalm_barbershop.png";
import Ecna from "../../public/Ecna.jpg";
import Ecna_logo from "../../public/Ecna_logo.png";
import Iphone from "../../public/Iphone_perspective.png";
import AlbaniaFlag from "../../public/Albania_flag.png";
import Ldistri from "../../public/Ldistri.png";
import Ldistri_logo from "../../public/Ldistri_logo.png";
import MkBeautyLogo from "../../public/Mk_beauty/Logo.png";
import MKBeautyWall from "../../public/Mk_beauty/MK_beauty_wallpaper.png";
//Icons
import { IoMdCloseCircle } from "react-icons/io";
//Extensions
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Portfolio() {
  const [hover, setHover] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const projects = [
    {
      title: "Sodermalm_barbershop",
      src: Sodermalm_barbershop,
      alt: "Sodermalm_website",
      description: (
        <h1 className="text-base font-inter font-normal text-center">
          Need a fresh haircut ? <br /> Let's take an appointment
        </h1>
      ),
      link: "https://sodermalm-barber-frontend.vercel.app/",
      layout: Sodermalm_logo,
      alt_layout: "logo_sodermalm_barbershop",
    },
    {
      title: "ECNA",
      src: Ecna,
      alt: "Ecna_wallpaper",
      description: (
        <h1 className="text-base font-inter font-normal text-center">
          Here's the future for ambulances in France !
          <br />
          Click to access more details
        </h1>
      ),
      layout: Ecna_logo,
      alt_layout: "Ecna_logo",
    },
    {
      title: "Ldsitri",
      src: Ldistri,
      alt: "Ldistri website",
      description: (
        <h1 className="text-base font-inter font-normal text-center">
          L.Distri contacted me to build a website for selling trucks
          <br />
          <span className="italic text-[11px]">
            "At L.Distri, we don’t just sell trucks, we equip those who move
            forward."
          </span>
          <br />
        </h1>
      ),
      link: "https://ldistri.fr",
      layout: Ldistri_logo,
      alt_layout: "Ldistri logo",
    },
  ];

  useEffect(() => {
    if (fullScreen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [fullScreen]);

  const displayProjects = projects.map((project, i) => {
    if (project.title == "ECNA") {
      return (
        <div
          key={i}
          className="w-[30%] border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5"
        >
          <div className="flex items-center justify-center relative w-full rounded-xl overflow-hidden drop-shadow-xl shadow-xl">
            <Image src={project.src} alt={project.alt} className="h-[100%]" />
            <div
              className={`flex items-center justify-center w-full h-full backdrop-blur-lg absolute p-10 transition-opacity duration-300 ${
                hover === i ? "opacity-0 cursor-pointer" : "opacity-100"
              }`}
              onMouseOver={() => setHover(i)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setFullScreen(true)}
              style={{
                background:
                  "radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
              }}
            >
              <a
                href={project.link}
                target="_blank"
                className="w-full flex items-center justify-center"
              >
                <Image
                  src={project.layout}
                  alt={project.alt_layout}
                  className="w-9/12"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            {project.description}
          </div>
        </div>
      );
    }
    return (
      <div
        key={i}
        className="w-[30%] border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5"
      >
        <div className="flex items-center justify-center relative w-full rounded-xl overflow-hidden drop-shadow-xl shadow-xl">
          <Image src={project.src} alt={project.alt} className="h-[100%]" />
          <div
            className={`flex items-center justify-center w-full h-full backdrop-blur-lg absolute p-10 transition-opacity duration-300 ${
              hover === i ? "opacity-0 cursor-pointer" : "opacity-100"
            }`}
            onMouseOver={() => setHover(i)}
            onMouseLeave={() => setHover(false)}
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
            }}
          >
            <a
              href={project.link}
              target="_blank"
              className="w-full flex items-center justify-center"
            >
              <Image
                src={project.layout}
                alt={project.alt_layout}
                className="w-9/12"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          {project.description}
        </div>
      </div>
    );
  });

  //   onClick={() => setFullScreen(true)}

  const displayProjectsSwiper = projects.map((project, i) => {
    if (project.title == "ECNA") {
      return (
        <SwiperSlide
          key={i}
          className="flex flex-col justify-between border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5 min-h-[350px] h-full"
        >
          <div className="flex-1 flex items-center justify-center relative w-full rounded-xl overflow-hidden drop-shadow-xl shadow-xl">
            <Image
              src={project.src}
              alt={project.alt}
              className="object-cover w-full h-full"
            />
            <div
              className={`absolute w-full h-full inset-0 backdrop-blur-lg flex items-center justify-center transition-opacity duration-300 z-10 ${
                hover === i ? "opacity-0 cursor-pointer" : "opacity-100"
              }`}
              onMouseOver={() => setHover(i)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setFullScreen(true)}
              style={{
                background:
                  "radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
              }}
            >
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={project.layout}
                    alt={project.alt_layout}
                    className="max-lg:w-[50%]"
                  />
                </Link>
              ) : (
                <Image
                  src={project.layout}
                  alt={project.alt_layout}
                  className="max-lg:w-[50%]"
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 min-h-[40px] text-center">
            {project.description}
          </div>
        </SwiperSlide>
      );
    }
    return (
      <SwiperSlide
        key={i}
        className="flex flex-col justify-between border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5 min-h-[350px] h-full"
      >
        <div className="flex-1 flex items-center justify-center relative w-full rounded-xl overflow-hidden drop-shadow-xl shadow-xl">
          <Image
            src={project.src}
            alt={project.alt}
            className="object-cover w-full h-full"
          />
          <div
            className={`absolute inset-0 backdrop-blur-lg flex items-center justify-center transition-opacity duration-300 z-10 ${
              hover === i ? "opacity-0 cursor-pointer" : "opacity-100"
            }`}
            onMouseOver={() => setHover(i)}
            onMouseLeave={() => setHover(false)}
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
            }}
          >
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center justify-center"
              >
                <Image
                  src={project.layout}
                  alt={project.alt_layout}
                  className="max-lg:w-[50%]"
                />
              </Link>
            ) : (
              <Image
                src={project.layout}
                alt={project.alt_layout}
                className="max-sm:w-[50%]"
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-center mt-4 min-h-[40px] text-center">
          {project.description}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="flex flex-col bg-[#171717] w-full rounded-xl p-10 max-sm:p-6">
      <h1 className="font-inter font-medium text-5xl mt-5 mb-5">
        Let's have a look at <br />
        <span className="text-purple-500"> my Portfolio</span>
      </h1>
      <div className="flex justify-between items-stretch w-full max-md:hidden">
        {displayProjects}
      </div>
      <div className="flex items-start justify-start w-full md:hidden">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper !pb-10 h-full"
          centeredSlides={true}
          slidesPerView={1}
        >
          {displayProjectsSwiper}
        </Swiper>
      </div>
      {fullScreen && (
        <div className="flex items-center justify-start">
          <motion.div
            className="fixed bg-gradient-to-b from-blue-950 to-cyan-700 z-30"
            initial={{
              width: 250,
              height: 250,
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
              borderRadius: "50%",
            }}
            animate={{
              width: "100vmax",
              height: "100vmax",
              borderRadius: "0%",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-around px-10 max-lg:px-6 max-lg:py-5 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="w-full flex items-center justify-end">
              <IoMdCloseCircle
                color="white"
                onClick={() => setFullScreen(false)}
                className="text-5xl hover:cursor-pointer"
              />
            </div>
            <div className="w-full flex items-start justify-between max-lg:flex-col max-xl:items-center">
              <div className="relative w-[280px] h-auto flex items-center justify-center max-md:w-[200px]">
                <Image
                  src={Iphone}
                  alt="iphone_frame"
                  className="top-0 z-10 absolute overflow-hidden"
                />
                <div
                  className="h-full top-0 object-cover z-0 w-[85%] overflow-hidden rounded-[30px] ml-2"
                  style={{
                    // top: "2.5%", // aligne verticalement
                    // left: "5.5%",
                    perspectiveOrigin: '100% 200%',
                    perspective: "800px",
                    // transform: "rotateY(38deg) rotateX(21deg) rotateZ(14deg)",
                  }}
                >
                  <MuxPlayer
                    className="w-[100%]"
                    streamType="on-demand"
                    playbackId="HNaomUlHcXVTr6nQmds1NoxjnJWmByWt2GIji5k9KTw"
                    metadataViewerUserId="Placeholder (optional)"
                    primaryColor="transparent"
                    secondaryColor="transparent"
                    autoPlay="muted"
                    loop
                    style={{
                      "--controls": "none",
                      perspectiveOrigin: '100% 200%',
                      perspective: "800px",
                    }}
                  />
                </div>
              </div>
              <div className="relative flex flex-col w-[70%] p-8 max-lg:w-full max-md:mt-5 ">
                <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white size-[50px]"></div>
                <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white size-[50px]"></div>
                <h1 className="font-inter text-6xl max-xl:text-2xl max-lg:text-center">
                  <span className="font-bold text-8xl max-md:text-5xl">
                    ECNA
                  </span>
                  -<span className="italic">Time is now your</span>
                </h1>
                <p className="font-inter font-light text-2xl mt-5 max-lg:text-base">
                  I worked for many years in the ambulance sector in France, and
                  later transitioned into web development to create a mobile
                  application designed specifically for ambulance companies.
                  <br />
                  <br />
                  I introduced features allowing companies to manage their
                  vehicle fleet and monitor both company-wide activity and that
                  of individual collaborators.
                  <br />
                  <br />
                  The application is currently still under development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
