"use client";
import Image from "next/image";
//Assets
import Sodermalm_logo from "../../public/Logo_rectangle.png";
import Sodermalm_barbershop from "../../public/Sodermalm_barbershop.png";
import Ecna from "../../public/Ecna.jpg";
import Ecna_logo from "../../public/Ecna_logo.png";
import Ldistri from "../../public/Ldistri.png";
import Ldistri_logo from "../../public/Ldistri_logo.png";
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
  const [isMobile, setIsMobile] = useState(false);
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // max-md (768px)
    };

    handleResize(); // call once
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!fullScreen) return;

    const scrollY = window.scrollY;

    const html = document.documentElement;
    const prev = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyPosition: document.body.style.position,
      bodyTop: document.body.style.top,
      bodyWidth: document.body.style.width,
      bodyOverflow: document.body.style.overflow,
    };

    // Bloque le scroll partout (html + body), iOS-friendly
    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none"; // évite le “bounce”
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      // Restaure
      html.style.overflow = prev.htmlOverflow;
      html.style.overscrollBehavior = prev.htmlOverscroll;
      document.body.style.position = prev.bodyPosition;
      document.body.style.top = prev.bodyTop;
      document.body.style.width = prev.bodyWidth;
      document.body.style.overflow = prev.bodyOverflow;

      // Revenir exactement où on était
      window.scrollTo(0, scrollY);
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
          className="flex flex-col justify-between border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5 min-h-[380px] h-full"
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
        className="flex flex-col justify-between border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5 min-h-[380px] h-full"
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
            className="fixed inset-0 z-30 pointer-events-none  bg-gradient-to-b from-[#1B2C61] from-0% via-[#1B2C61] via-65% to-cyan-700 to-85%
            max-sm:from-[#192756] max-sm:via-[#192756] max-sm:to-cyan-700
            max-lg:bg-gradient-to-b max-lg:from-[#192756] max-lg:from-0% max-lg:via-[#192756] max-lg:via-70% max-lg:to-cyan-700 max-lg:to-95%"
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
            className="fixed inset-0 z-40 flex flex-col
            max-h-[100dvh] overflow-y-auto overscroll-contain touch-pan-y
            pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="w-full flex items-center justify-end py-3 pr-5 max-md:py-3">
              <IoMdCloseCircle
                color="white"
                onClick={() => setFullScreen(false)}
                className="text-3xl hover:cursor-pointer"
              />
            </div>

            <div className="w-full flex flex-1 items-start justify-between pb-5 max-lg:flex-col">
              {/* <div className="w-1/2 flex items-center justify-center border-green-500 border-2 max-lg:w-full xl:hidden">
                <MuxPlayer
                  className="w-[100%]"
                  streamType="on-demand"
                  playbackId="FUOkW14z3CTNX9lA5Latj00xmOeI01mwp9E440100R64xZE"
                  metadataViewerUserId="Placeholder (optional)"
                  primaryColor="transparent"
                  secondaryColor="transparent"
                  autoPlay="muted"
                  loop
                  style={{
                    "--controls": "none",
                  }}
                />
              </div> */}
              <div className="flex items-center justify-center  xl:w-3/6">
                <MuxPlayer
                  className="w-[100%]"
                  streamType="on-demand"
                  playbackId="UfebJcy6BguZxfRJOzXpLN9oPpZX01VQbWOPg9pp6138"
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
              <div className="w-3/5 relative flex flex-col px-8 py-3 max-lg:w-full">
                <div className="absolute top-0 right-3 border-t-4 border-r-4 border-white size-[50px]"></div>
                <div className="absolute bottom-0 left-3 border-b-4 border-l-4 border-white size-[50px]"></div>
                <h1 className="font-inter text-6xl max-xl:text-2xl max-lg:text-center">
                  <span className="font-bold text-8xl max-md:text-3xl max-lg:text-5xl">
                    ECNA
                  </span>
                  -<span className="italic">Time is now yours</span>
                </h1>
                <p className="font-inter font-light text-2xl mt-5 max-lg:text-base max-sm:text-sm">
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
                  <a href="https://ecnatimeisnowyours.com" target="_blank">
                    <span className="underline underline-offset-3 font-bold">
                      Here is my landing page
                    </span>
                  </a>
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
