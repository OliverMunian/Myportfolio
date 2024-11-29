import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import Olivier from "../../public/Olivier.png";
import Header from "./Header";
//extensions
import { motion } from "motion/react";

function Video() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute h-full w-full -z-20">
        <MuxPlayer
          streamType="on-demand"
          playbackId="mUvCLZfO8q00v00uDIcrFREa00lUFdZMyKvQKSUJSDOI400"
          metadataViewerUserId="Placeholder (optional)"
          primaryColor="transparent"
          secondaryColor="transparent"
          autoPlay="muted"
          loop
          className="object-cover h-full overflow-hidden"
          style={{
            "--controls": "none",
            "--media-object-fit": "cover",
          }}
        />
      </div>
      <div className="absolute h-screen w-full backdrop-blur-sm -z-10"></div>
      <Header />
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <div className="h-52 w-52 -mt-5">
          <Image
            src={Olivier}
            className="h-full w-full"
            alt="Profile_picture"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <p className="text-xl italic font-semibold text-center">
            Developer FullStack / FPV Pilot
          </p>
          <h1 className="font-bold uppercase text-6xl text-center max-sm:text-4xl">
            Olivier Malahel
          </h1>
          <p className="italic text-center">
            I am available now to support you in your projects
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
