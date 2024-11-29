"use client";
import Head from "next/head";
import {
  FaLinkedinIn,
  FaGithub,
  FaFileDownload,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { useState } from "react";

function Header() {
  const [hover, setHover] = useState(null);
  return (
    <div className="h-32 w-full flex items-center justify-around">
      <div className=" w-10/12 ml-4">
        <button
          className=" bg-white border-2 border-black p-4 w-32 flex items-center justify-center rounded-full "
          style={{ border: "0.85px solid" }}
        >
          <a href="CV.pdf" download="CV.pdf" className="text-black font-semibold flex">
            CV <FaDownload color={"black"} className="ml-2"/>
          </a>
        </button>
      </div>

      <div className="flex items-center mr-4 w-10/12 justify-end">
        <a href="https://www.linkedin.com/in/oliviermalahel/">
          <FaLinkedinIn
            size={40}
            className={`m-2 ${
              hover === "Linkedin" ? "opacity-100" : "opacity-50"
            } ${hover === "Linkedin" ? "scale-125" : ""} transition`}
            onMouseLeave={() => setHover(null)}
            onMouseEnter={() => setHover("Linkedin")}
          />
        </a>
        <a href="https://github.com/OliverMunian?tab=repositories">
          <FaGithub
            size={40}
            className={`m-2 ${
              hover === "Github" ? "opacity-100" : "opacity-50"
            } ${hover === "Github" ? "scale-125" : ""} transition`}
            onMouseLeave={() => setHover(null)}
            onMouseEnter={() => setHover("Github")}
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
