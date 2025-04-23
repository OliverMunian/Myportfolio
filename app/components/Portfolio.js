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
import { useState } from "react";
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
          Looking for a specific truck for your business? <br />
          <span className="italic">
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
      //   return (
      //     <div
      //       key={i}
      //       className="flex flex-col justify-between w-[30%] border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5"
      //     >
      //       <div className="flex items-center justify-center relative w-full rounded-xl overflow-hidden drop-shadow-xl shadow-xl">
      //         <Image src={project.src} alt={project.alt}  className="h-[100%]"/>
      //         <div
      //           className={`flex items-center justify-center size-full backdrop-blur-lg absolute p-10 transition-opacity duration-300 ${
      //             hover === i ? "opacity-0 cursor-pointer" : "opacity-100"
      //           }`}
      //           onMouseOver={() => setHover(i)}
      //           onMouseLeave={() => setHover(false)}
      //           onClick={() => setFullScreen(true)}
      //         >
      //           <Image src={project.layout} alt={project.alt_layout} />
      //         </div>
      //       </div>
      //       <div className="flex items-center justify-center mt-4">
      //         {project.description}
      //       </div>
      //     </div>
      //   );
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
              className={`absolute inset-0 backdrop-blur-lg flex items-center justify-center transition-opacity duration-300 z-10 ${
                hover === i ? "opacity-0 cursor-pointer" : "opacity-100"
              }`}
              onMouseOver={() => setHover(i)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setFullScreen(true)}
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
                    className="max-sm:w-[50%]"
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
                  className="max-sm:w-[50%]"
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
        <motion.div
          className="fixed bg-gradient-to-b from-blue-950 to-cyan-700 z-30"
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
            width: ["250px", "100%"],
            height: ["250px", "100vh"],
            borderRadius: ["50%", "0%"],
            top: ["50%", "0%"],
            left: ["50%", "0%"],
            translateX: ["-50%", "0%"],
            translateY: ["-50%", "0%"],
          }}
          transition={{
            duration: 1, // Temps total de l'animation
            ease: "easeInOut", // Transition plus naturelle
          }}
        >
          <motion.div
            className="flex flex-col border-red-500 border-2 size-full"
            initial={{
              opacity: 0,
              display: "none",
              padding: 10,
            }}
            animate={{
              display: "flex",
              padding: 5,
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <div className="w-full flex justify-end">
              <IoMdCloseCircle
                color="white"
                onClick={() => setFullScreen(false)}
                className="text-5xl hover:cursor-pointer"
              />
            </div>
            <div className="w-full flex items-start justify-between p-10">
              <div className="relative flex items-center justify-center w-[20%]">
                <Image
                  src={Iphone}
                  alt="iphone_frame"
                  className="top-0 z-10 border-2 border-green-400 absolute overflow-hidden "
                />
                <div
                  className="h-full top-0 object-cover z-0 w-[90%] overflow-hidden rounded-[30px] ml-2"
                  style={{
                    // perspectiveOrigin: '300% 200%',
                    // perspective:'90%',
                    transform: "rotateY(41deg) rotateX(21deg) rotateZ(14deg)",
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
                    }}
                  />
                </div>
              </div>
              <div className="relative flex flex-col w-[70%] p-5">
                <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white size-[50px]"></div>
                <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white size-[50px]"></div>
                <h1 className="font-inter text-6xl">
                  <span className="font-bold text-8xl">ECNA </span> -{" "}
                  <span className="italic">Time is now your</span>
                </h1>
                <p className="font-inter font-light text-2xl mt-5">
                  I worked in ambulance in France during many years, so I
                  decided to convert myself as a web developer to create my own
                  mobile application to help ambulances companies to have a
                  better organization at work and mainly save time during the
                  day to help more patients.
                  <br />
                  <br />
                  I brought them new features where they can create and have the
                  access their own vehicle fleet and a part of the activity
                  about the company but also the activity of their
                  collaborators.
                  <br />
                  <br />
                  The application is still in progress...
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
