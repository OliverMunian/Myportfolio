//Icones
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { PiQuotesFill } from "react-icons/pi";

export default function Skills() {
  const languagesTools = [
    {
      title: "HTML",
      icons: <FaHtml5 className="text-6xl text-purple-500 max-lg:text-4xl" />,
    },
    {
      title: "CSS",
      icons: <FaCss3Alt className="text-6xl text-purple-500 max-lg:text-4xl" />,
    },
    {
      title: "Javascript",
      icons: (
        <IoLogoJavascript className="text-6xl text-purple-500 max-lg:text-4xl max-sm:text-4xl" />
      ),
    },
    {
      title: "Express",
      icons: <SiExpress className="text-6xl text-purple-500 max-lg:text-4xl" />,
    },
    {
      title: "NodeJS",
      icons: <FaNodeJs className="text-6xl text-purple-500 max-lg:text-4xl" />,
    },
    {
      title: "React",
      icons: <FaReact className="text-6xl text-purple-500 max-lg:text-4xl" />,
    },
    {
      title: "React Native",
      icons: <FaReact className="text-6xl text-purple-500 max-lg:text-4xl" />,
    },
    {
      title: "NextJs",
      icons: <RiNextjsLine className="text-6xl text-purple-500 max-lg:text-3xl" />,
    },
  ];

  const languagesToolsDisplay = languagesTools.map((language, i) => {
    return (
      <div
        key={i}
        className="flex flex-col items-center justify-start w-[10%] border-red-500"
      >
        <div>{language.icons}</div>
        <h1 className="text-black font-inter font-normal text-center max-lg:text-xs max-sm:text-[9px]">
          {language.title}
        </h1>
      </div>
    );
  });
  return (
    <div className="bg-white w-full p-10 flex flex-col">
      <div className="w-full flex flex-col items-end">
        <div className="w-full flex items-start justify-end">
          <PiQuotesFill color="black" className="text-xl scale-x-[-1] mr-2" />
          <h1 className="text-black text-5xl text-right font-inter font-medium">
            You're good at it ? <br />
            <span className="text-purple-500">My skills </span>
          </h1>
          <PiQuotesFill color="black" className="text-xl ml-2" />
        </div>
        <h3 className="text-black text-right font-medium text-xl mt-3 max-xl:text-base">
          I use different type of languages and frameworks to bring a fresh
          perspective and give life to all of your projects
        </h3>
      </div>
      <div className="flex justify-between mt-7">{languagesToolsDisplay}</div>
    </div>
  );
}
