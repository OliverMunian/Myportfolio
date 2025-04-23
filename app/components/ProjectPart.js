import MkBeautyLogo from "../../public/Mk_beauty/Logo.png";
import MKBeautyWall from "../../public/Mk_beauty/MK_beauty_wallpaper.png";
import OliviaBM from "../../public/oliviabmn/Website.png";
import OliviaBMLogo from "../../public/oliviabmn/Logo.png";
import NAL from "../../public/NAL/NAL.png";
import NALLogo from "../../public/NAL/Moose.png";
//Icons
import { TbDrone } from "react-icons/tb";
import { RxCrossCircled } from "react-icons/rx";
//Images
import Apex5 from "../../public/Drone/Drone_Apex5.png";
//Extensions
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MuxPlayer from "@mux/mux-player-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsPart() {
  const [hover, setHover] = useState(false);
  const [price, setPrice] = useState(false);
  const [infoDrone, setInfoDrone] = useState(false);
  const myProject = [
    {
      title: "MK Beauty",
      src: MKBeautyWall,
      alt: "MKBeauty_wallpaper",
      link: "https://mk-beauty.vercel.app/",
      description: (
        <h1 className="text-base font-inter font-normal text-center">
          Need a fresh manucure with some nail art ?
          <br />
          Here you could take an Price for your nails <br />
        </h1>
      ),
      layout: MkBeautyLogo,
      alt_layout: "MkBeauty_logo",
    },
    {
      title: "Olivia Bohman",
      src: OliviaBM,
      alt: "Olivia Bohman stylist website",
      link: "https://olivia-bmn.vercel.app/",
      description: (
        <h1 className="text-base font-inter font-normal text-center">
          Need a stylist ?
          <br />
          Here you can take a look about her work <br />
        </h1>
      ),
      layout: OliviaBMLogo,
      alt_layout: "OliviaBMN",
    },
    {
      title: "Nordic Ambient Lightning",
      src: NAL,
      alt: "Nordic ambient Lightning website",
      link: "https://nordic-ambient-lightning.vercel.app/",
      description: (
        <h1 className="text-base font-inter font-normal text-center">
          I decide to create my own lamp brand entirely design by me
          <br />
          Let's have a look !<br />
        </h1>
      ),
      layout: NALLogo,
      alt_layout: "Nordic ambient Lightning logo",
    },
  ];
  const droneService = [
    {
      src: Apex5,
      alt: "Drone Apex 5",
      description: (
        <>
          <h1 className="font-inter text-white text-lg underline">
            Mid-range/Freestyle:
          </h1>
          <p className="text-white font-inter text-center ">
            Tracking of person or vehicle, sport/dynamic video
          </p>
        </>
      ),
      title: "Apex 5",
    },
    {
      src: Apex5,
      alt: "Cineon c35",
      description: (
        <>
          <h1 className="font-inter text-white text-lg underline">
            Short-range/Cinematic:
          </h1>
          <p className="text-white font-inter text-center ">
            Slow tracking person or vehicle, pass trough small gaps, and smooth
            cinematic.Perfect for your events
          </p>
        </>
      ),
      title: "Cineon c35",
    },
  ];

  useEffect(() => {
    if (infoDrone) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // <-- important pour Safari & autres
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [infoDrone]);

  const droneServiceDisplay = droneService.map((service, i) => {
    return (
      <div
        key={i}
        className={`w-full flex items-center justify-around z-40 my-4 px-5 ${
          i % 2 == 0 ? "flex-row-reverse justify-center" : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-inter text-3xl font-bold ">{service.title}</h1>
          <br />
          {service.description}
        </div>
        <Image
          src={service.src}
          alt={service.alt}
          className="w-1/3 border-white border-[1px] rounded-xl"
        />
      </div>
    );
  });

  const player = [
    {
      playbackId: "HFTH3FGej902oleWW3c7ycJOU7UYAYuBIP1Lv027nQcls",
      description: "Fly over the town - Albania, Dhërmi",
    },
    {
      playbackId: "2QP1XWNxO01gFCF1425QPTJzd4mUDtXBBhRfjNM7koz00",
      description: "At the beach - Albania, Dhërmi",
    },
    {
      playbackId: "ksvTIzfSe9I02bR01CHxLYvARD8pH4bKwR00bl5KKUqRrY",
      description: "Beginning freestyle training",
    },
  ];
  const displayProjects = myProject.map((project, i) => {
    return (
      <div
        key={i}
        className="w-[30%] h-[350px] border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5 max-lg:h-[300px]"
      >
        <div className="flex items-center justify-center relative w-full rounded-xl overflow-hidden drop-shadow-xl shadow-xl">
          <Image src={project.src} alt={project.alt} />
          <div
            className={`flex items-center justify-center w-full h-full backdrop-blur-lg absolute p-10 transition-opacity duration-300 ${
              hover === i ? "opacity-0 cursor-pointer" : "opacity-100"
            }`}
            onMouseOver={() => setHover(i)}
            onMouseLeave={() => setHover(false)}
          >
            <Link href={project.link} target="_blank">
              <Image src={project.layout} alt={project.alt_layout} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          {project.description}
        </div>
      </div>
    );
  });

  const displayProjectsSwiper = myProject.map((project, i) => {
    return (
      <SwiperSlide
        key={i}
        className="w-full border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5"
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
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center justify-center"
            >
              <Image
                src={project.layout}
                alt={project.alt_layout}
                className="w-8/12"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          {project.description}
        </div>
      </SwiperSlide>
    );
  });

  const displayVideoSwiper = player.map((video, i) => {
    return (
      <SwiperSlide
        key={i}
        className="w-1/3 flex flex-col items-center justify-center overflow-hidden rounded-lg p-3 border-black border-[0.75px]"
      >
        <MuxPlayer
          className="rounded-xl overflow-hidden"
          streamType="on-demand"
          playbackId={video.playbackId}
          metadataViewerUserId="Placeholder (optional)"
          primaryColor="transparent"
          secondaryColor="transparent"
          autoPlay="muted"
          loop
          style={{
            "--controls": "none", // Essaie une autre couleur ou supprime cette ligne
          }}
        />
        <p className="text-black text-center font-inter italic">
          {video.description}
        </p>
      </SwiperSlide>
    );
  });

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full p-10 bg-[#171717] rounded-b-3xl">
        <div>
          {" "}
          <h1 className="text-5xl font-inter font-medium">
            Still in progress... <br />
            <span className="text-purple-500">My projects</span>{" "}
          </h1>
        </div>
        <div className="flex items-center justify-around w-full mt-5 max-md:hidden">
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
      </div>
      <div className="flex flex-col w-full p-10 bg-white rounded-t-xl">
        <div>
          {" "}
          <h1 className="text-5xl text-black font-inter font-medium">
            View from the sky as a <br />
            <span className="text-purple-500">FPV Pilot</span>{" "}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-around w-full mt-5">
          <div className="w-full flex items-center">
            <div className="w-full border-b-purple-500 border-[1px]"></div>
            <TbDrone className="text-purple-500 text-4xl" />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-center max-md:hidden">
              {player.map((video, i) => {
                return (
                  <div
                    key={i}
                    className="w-1/3 flex flex-col items-center justify-center overflow-hidden rounded-lg p-3 m-3 border-black border-[0.75px]"
                  >
                    <MuxPlayer
                      className="rounded-xl overflow-hidden"
                      streamType="on-demand"
                      playbackId={video.playbackId}
                      metadataViewerUserId="Placeholder (optional)"
                      primaryColor="transparent"
                      secondaryColor="transparent"
                      autoPlay="muted"
                      loop
                      style={{
                        "--controls": "none", // Essaie une autre couleur ou supprime cette ligne
                      }}
                    />
                    <p className="text-black text-center font-inter italic">
                      {video.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-start justify-start w-full md:hidden">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper !pb-10 h-full"
                centeredSlides={true}
                slidesPerView={1}
              >
                {displayVideoSwiper}
              </Swiper>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-8">
              <div
                className="flex items-center justify-between p-4 bg-white border-purple-500 border-[0.75px] rounded-2xl hover:cursor-pointer overflow-clip max-lg:mt-4"
                onMouseOver={() => setPrice(true)}
                onMouseLeave={() => setPrice(false)}
                onClick={() => setInfoDrone(true)}
              >
                <motion.div
                  className="size-[10px] rounded-full bg-purple-500 mr-1"
                  animate={{
                    scale: price ? 80 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                ></motion.div>
                <motion.div className="z-10 ml-1">
                  <h1
                    className={`font-inter font-semibold text-2xl ${
                      price ? "text-white" : "text-purple-500"
                    } max-lg:text-lg`}
                  >
                    See more informations
                  </h1>
                </motion.div>
              </div>
              {/* <h1 className="text-black text-xl font-bold">
                Some few options for your footage
              </h1> */}
              {/* <div className="w-full flex">
                <div className="w-1/3 flex flex-col items-center mt-3">
                  <h1 className="font-inter text-black text-lg underline">
                    Long range/Cinematic:
                  </h1>
                  <p className="text-black text-center font-inter">
                    Provides the drone to go really far away and capture
                    landscape and cinematic view
                  </p>
                </div>
                <div className="w-1/3 flex flex-col items-center mt-3">
                  <h1 className="font-inter text-black text-lg underline">
                    Mid-range/Freestyle:
                  </h1>
                  <p className="text-black font-inter text-center ">
                    Tracking of person or vehicle, sport/dynamic video
                  </p>
                </div>
                <div className="w-1/3 flex flex-col items-center mt-3">
                  <h1 className="font-inter text-black text-lg underline">
                    Short-range/Cinematic:
                  </h1>
                  <p className="text-black font-inter text-center ">
                    Tracking a person or vehicle, pass trough small gaps, and
                    smooth cinematic
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {infoDrone && (
        <div className="fixed justify-center items-center top-0 w-full h-full backdrop-blur-xl z-30 transition">
          <div className="absolute bg-black opacity-45 w-full h-full z-20"></div>
          <div className="flex justify-end w-full py-5 px-6">
            <RxCrossCircled
              onClick={() => setInfoDrone(false)}
              className="text-white text-5xl hover:cursor-pointer z-40"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            {droneServiceDisplay}
          </div>
        </div>
      )}
    </div>
  );
}
