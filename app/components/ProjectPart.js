import MkBeautyLogo from "../../public/Mk_beauty/Logo.png";
import MKBeautyWall from "../../public/Mk_beauty/MK_beauty_wallpaper.png";
import OliviaBM from "../../public/oliviabmn/Website.png";
import OliviaBMLogo from "../../public/oliviabmn/Logo.png";
import NAL from "../../public/NAL/NAL.png";
import NALLogo from "../../public/NAL/Moose.png";
//Icons
import { TbDrone } from "react-icons/tb";
//Extensions
import Image from "next/image";
import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import Link from "next/link";

export default function ProjectsPart() {
  const [hover, setHover] = useState(false);
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
          Here you could take an appointment for your nails <br />
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
        className="w-[30%] h-[380px] border-white border-[0.75px] p-3 rounded-lg max-md:w-full max-md:my-5"
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
        <div className="flex items-center justify-around w-full mt-5">
          {displayProjects}
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
            <div className="w-full flex items-center justify-center">
              {player.map((video, i) => {
                return (
                  <div
                    key={i}
                    className="w-1/3 flex flex-col items-center justify-center overflow-hidden px-3"
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
                    <p className="text-black font-inter italic">{video.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-8">
              <h1 className="text-black text-xl font-bold">
                Some few options for your footage
              </h1>
              <div className="w-full flex">
                <div className="w-1/3 flex flex-col items-center mt-3">
                  <h1 className="font-inter text-black text-lg underline">Long range/Cinematic:</h1>
                  <p className="text-black text-center font-inter">
                    Provides the drone to go really far away and
                    capture landscape and cinematic view
                  </p>
                </div>
                <div className="w-1/3 flex flex-col items-center mt-3">
                  <h1 className="font-inter text-black text-lg underline">Mid-range/Freestyle:</h1>
                  <p className="text-black font-inter text-center ">
                   Tracking of person or vehicle, sport/dynamic video 
                  </p>
                </div>
                <div className="w-1/3 flex flex-col items-center mt-3">
                  <h1 className="font-inter text-black text-lg underline">Short-range/Cinematic:</h1>
                  <p className="text-black font-inter text-center ">
                   Tracking a person or vehicle, pass trough small gaps, and smooth cinematic 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
