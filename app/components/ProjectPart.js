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
import Apex5 from "../../public/Drone/Drone_Apex5(1).png";
import CineonC35 from "../../public/Drone/Cineon_c35(copie).png";
import Manta6 from "../../public/Drone/Manta6(1).png";
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
          <h1 className="font-inter text-white text-lg underline  max-sm:text-[12px]">
            Mid-range/Freestyle:
          </h1>
          <p className="text-white font-inter text-center max-sm:text-[12px] ">
            Tracking of person or vehicle, sport/dynamic video
          </p>
        </>
      ),
      title: "Apex 5",
    },
    {
      src: CineonC35,
      alt: "Cineon c35",
      description: (
        <>
          <h1 className="font-inter text-white text-lg underline max-sm:text-[12px]">
            Short-range/Cinematic:
          </h1>
          <p className="text-white font-inter text-center max-sm:text-[12px] ">
            Slow tracking person or vehicle, pass trough small gaps, and smooth
            cinematic.Perfect for your events
          </p>
        </>
      ),
      title: "Cineon c35",
    },
    {
      src: Manta6,
      alt: "Manta6",
      description: (
        <>
          <h1 className="font-inter text-white text-lg underline  max-sm:text-[12px]">
            Long-range/Cinematic:
          </h1>
          <p className="text-white font-inter text-center  max-sm:text-[12px]">
            Provides the drone to go really far away and capture landscape and
            cinematic view
          </p>
        </>
      ),
      title: "Manta 6",
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
          <h1 className="font-inter text-3xl font-bold max-sm:text-xl mb-3">
            {service.title}
          </h1>
          {service.description}
        </div>
        <Image
          src={service.src}
          alt={service.alt}
          className="w-1/3 max-sm:w-1/2"
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
      description: "Training in tight spaces",
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
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
            }}
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
        className="w-full border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5 min-h-[270px]"
      >
        <div className="flex items-center justify-center relative w-full rounded-xl overflow-hidden drop-shadow-xl shadow-xl">
          <Image src={project.src} alt={project.alt} className="h-[100%]" />
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
      <div className="flex flex-col w-full p-10 bg-[#171717] rounded-b-3xl max-sm:p-6">
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
      <div className="flex flex-col w-full p-10 bg-white rounded-t-xl max-sm:p-6">
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
            </div>
          </div>
        </div>
      </div>

      {infoDrone && (
        <div className="fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center backdrop-blur-xl overflow-hidden transition-opacity duration-300">
          <div className="absolute bg-black opacity-45 w-full h-full z-10"></div>
          <div className="flex flex-col justify-center items-start h-full w-full z-30">
            <div className="flex justify-end w-full py-5 px-6">
              <RxCrossCircled
                onClick={() => setInfoDrone(false)}
                className="text-white text-5xl hover:cursor-pointer z-40"
              />
            </div>
            <div className="h-full pb-12 overflow-y-auto w-full px-4">
              {/* Zone scrollable */}
              <div className="flex flex-col items-center justify-start">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">
                  Drone Fleet
                </h1>
                {droneServiceDisplay}
              </div>
              <div className="p-4 sm:p-6 max-w-7xl mx-auto z-30">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">
                  Drone Service Pricing
                </h1>

                {/* Scroll horizontal en mobile */}
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-sm text-left bg-white text-black">
                    <thead className="bg-gray-100 text-xs sm:text-sm">
                      <tr>
                        <th className="p-2 sm:p-3 border">Drone Type</th>
                        <th className="p-2 sm:p-3 border">Service</th>
                        <th className="p-2 sm:p-3 border">
                          Estimated Duration
                        </th>
                        <th className="p-2 sm:p-3 border">Price (excl. tax)</th>
                        <th className="p-2 sm:p-3 border">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Freestyle */}
                      <tr>
                        <td className="p-2 sm:p-3 border">Freestyle</td>
                        <td className="p-2 sm:p-3 border">
                          Showreel / Clip / Sport Session
                        </td>
                        <td className="p-2 sm:p-3 border">1–2 hours</td>
                        <td className="p-2 sm:p-3 border">€250 – €400</td>
                        <td className="p-2 sm:p-3 border">
                          Dynamic and stylish shots
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 border"></td>
                        <td className="p-2 sm:p-3 border">Half-day package</td>
                        <td className="p-2 sm:p-3 border">~4 hours</td>
                        <td className="p-2 sm:p-3 border">€600</td>
                        <td className="p-2 sm:p-3 border">
                          Multiple locations or sequences
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 border"></td>
                        <td className="p-2 sm:p-3 border">Full-day package</td>
                        <td className="p-2 sm:p-3 border">~8 hours</td>
                        <td className="p-2 sm:p-3 border">€900 – €1200</td>
                        <td className="p-2 sm:p-3 border">
                          Shooting + footage review possible
                        </td>
                      </tr>

                      {/* Cinewhoop */}
                      <tr>
                        <td className="p-2 sm:p-3 border">Cinewhoop</td>
                        <td className="p-2 sm:p-3 border">
                          Indoor FPV (real estate, showroom)
                        </td>
                        <td className="p-2 sm:p-3 border">1–2 hours</td>
                        <td className="p-2 sm:p-3 border">€300 – €450</td>
                        <td className="p-2 sm:p-3 border">
                          Smooth and precise indoor shots
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 border"></td>
                        <td className="p-2 sm:p-3 border">Half-day package</td>
                        <td className="p-2 sm:p-3 border">~4 hours</td>
                        <td className="p-2 sm:p-3 border">€650</td>
                        <td className="p-2 sm:p-3 border">
                          Prep + flying + review
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 border"></td>
                        <td className="p-2 sm:p-3 border">Full-day package</td>
                        <td className="p-2 sm:p-3 border">~8 hours</td>
                        <td className="p-2 sm:p-3 border">€950 – €1300</td>
                        <td className="p-2 sm:p-3 border">
                          Includes multiple sequences
                        </td>
                      </tr>

                      {/* Long Range */}
                      <tr>
                        <td className="p-2 sm:p-3 border">Long Range (6")</td>
                        <td className="p-2 sm:p-3 border">
                          Nature / vehicle tracking
                        </td>
                        <td className="p-2 sm:p-3 border">2–3 hours</td>
                        <td className="p-2 sm:p-3 border">€400 – €600</td>
                        <td className="p-2 sm:p-3 border">
                          Includes local travel
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 border"></td>
                        <td className="p-2 sm:p-3 border">Half-day package</td>
                        <td className="p-2 sm:p-3 border">~4 hours</td>
                        <td className="p-2 sm:p-3 border">€700</td>
                        <td className="p-2 sm:p-3 border">
                          Ideal for remote locations
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 border"></td>
                        <td className="p-2 sm:p-3 border">Full-day package</td>
                        <td className="p-2 sm:p-3 border">~8 hours</td>
                        <td className="p-2 sm:p-3 border">€1000 – €1400</td>
                        <td className="p-2 sm:p-3 border">
                          May include location scouting
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Add-ons */}
                <div className="mt-6 text-sm text-white px-2 sm:px-0">
                  <h2 className="text-base sm:text-lg font-semibold mb-2">
                    Add-ons
                  </h2>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                    <li>Basic video editing: +€150 – €300</li>
                    <li>Color grading: +€100</li>
                    <li>Express delivery (&lt;24h): +20%</li>
                    <li>Out-of-zone travel: billed per km or fixed fee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
