//Icons
import { IoLanguageSharp } from "react-icons/io5";
import { PiQuotesFill } from "react-icons/pi";
//Assets
import France from "../../public/Flag/France.png";
import Spain from "../../public/Flag/Spain.png";
import Sweden from "../../public/Flag/Sweden.png";
import UnitedKingdom from "../../public/Flag/United_Kingdom.png";
//Extension
import Image from "next/image";

export default function Languages() {
  const flags = [
    { country: France, percent: "100%", alt: "France flag" },
    { country: UnitedKingdom, percent: "85%", alt: "UK flag" },
    { country: Sweden, percent: "15%", alt: "Sweden flag" },
    { country: Spain, percent: "10%", alt: "Spain flag" },
  ];

  const maxDashOffset = 377; // Longueur totale de l'arc pour un rayon de 70

  const languageDisplay = flags.map((flag, i) => {
    // Calculer l'offset du dash en fonction du pourcentage
    const dashOffset = maxDashOffset * (1 - parseInt(flag.percent) / 100);

    return (
      <div
        className="relative flex items-center justify-center size-[150px]"
        key={i}
      >
        <div className="relative w-[130px] h-[130px] rounded-full flex items-center justify-center">
          <Image src={flag.country} className="size-full" alt={flag.alt} />
          <div className="absolute flex items-center justify-center font-inter font-medium cursor-pointer
           opacity-50 bg-black rounded-full size-full">
            <h1 className="text-white">{flag.percent}</h1>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   width="160px"
          //   height="160px"
          className="absolute top-0 left-0 border-red-500 border-red-2 size-full"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="30%" stopColor="#9d59ef" />
              <stop offset="80%" stopColor="#5a1da4" />
            </linearGradient>
          </defs>
          <circle
            cx="75"
            cy="75"
            r="60"
            stroke="url(#GradientColor)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            className="fill-none absolute top-0 left-0"
            style={{
              strokeDasharray: maxDashOffset,
              strokeDashoffset: dashOffset,
            }}
          />
        </svg>
      </div>
    );
  });
  return (
    <div className="flex flex-col bg-[#171717] w-full rounded-t-xl p-10">
      <div className="flex items-start">
        <PiQuotesFill color="white" className="text-xl scale-x-[-1] mr-2" />
        <div className="flex flex-col">
          <h1 className="text-white text-5xl font-inter font-medium">
            {" "}
            Bonjour, Hello, Hej, Holà <br />
          </h1>
          <div className="flex items-end">
            <h1 className="text-5xl font-inter font-medium text-purple-500">
              My languages
            </h1>
            <IoLanguageSharp className="text-purple-500 text-5xl mx-2 max-sm:mx-0" />
          </div>
        </div>
        <PiQuotesFill color="white" className="text-xl ml-2" />
      </div>
      <div className="w-full flex justify-around pt-10 max-md:flex-wrap">{languageDisplay}</div>
    </div>
  );
}
