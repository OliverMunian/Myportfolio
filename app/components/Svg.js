import { easeInOut } from "motion";
import { motion } from "motion/react";

function SVG() {
  const circles = [
    { cx: "176.5", cy: "351.5", r: "28.5", fill: "#38A8D8", delay: 0.53 },
    {
      cx: "309.5",
      cy: "421.5",
      r: "28.5",
      fill: "url(#paint0_linear_12_143)",
      delay: 0.8,
    },
    {
      cx: "442",
      cy: "303",
      r: "28",
      fill: "url(#paint1_linear_12_143)",
      delay: 0.4,
    },
    { cx: "459", cy: "242", r: "20", fill: "#9C4891", delay: 0.88 },
    { cx: "256.5", cy: "465.5", r: "7.5", fill: "#5796D3", delay: 0.32 },
    { cx: "252", cy: "553", r: "10", fill: "#5896C8", delay: 0.78 },
    { cx: "289.5", cy: "292.5", r: "8.5", fill: "#5A8FC4", delay: 0.47 },
    { cx: "256.5", cy: "234.5", r: "12.5", fill: "#5893CD", delay: 0.64 },
    {
      cx: "430.5",
      cy: "393.5",
      r: "7.5",
      fill: "url(#paint2_linear_12_143)",
      delay: 0.9,
    },
    {
      cx: "375.5",
      cy: "290",
      rx: "26.5",
      ry: "26",
      fill: "#6C6AAD",
      delay: 0.75,
    },
    {
      cx: "501.5",
      cy: "427",
      rx: "26.5",
      ry: "26",
      fill: "url(#paint3_linear_12_143)",
      delay: 0.55,
    },
    { cx: "237", cy: "275", r: "25", fill: "#5597CE", delay: 0.41 },
    {
      cx: "298",
      cy: "251",
      r: "24",
      fill: "url(#paint4_linear_12_143)",
      delay: 0.6,
    },
    {
      cx: "257",
      cy: "384",
      r: "24",
      fill: "url(#paint5_linear_12_143)",
      delay: 0.75,
    },
    { cx: "191", cy: "411", r: "22", fill: "#40AADD", delay: 0.38 },
    {
      cx: "312.5",
      cy: "342.5",
      r: "32.5",
      fill: "url(#paint6_linear_12_143)",
      delay: 0.85,
    },
    { cx: "377", cy: "387", r: "31", fill: "#736DB1", delay: 0.49 },
    { cx: "557.5", cy: "341.5", r: "32.5", fill: "#BB3E8B", delay: 0.76 },
    {
      cx: "436",
      cy: "428",
      r: "21",
      fill: "url(#paint7_linear_12_143)",
      delay: 0.8,
    },
    {
      cx: "258",
      cy: "435",
      r: "20",
      fill: "url(#paint8_linear_12_143)",
      delay: 0.9,
    },
    { cx: "273.5", cy: "526.5", r: "16.5", fill: "#588BC6", delay: 0.34 },
    {
      cx: "352.5",
      cy: "451.5",
      r: "17.5",
      fill: "url(#paint9_linear_12_143)",
      delay: 0.45,
    },
    { cx: "226.5", cy: "324.5", r: "15.5", fill: "#4D9CCF", delay: 0.55 },
    { cx: "196", cy: "303", r: "15", fill: "#48A7DB", delay: 0.3 },
    { cx: "258", cy: "493", r: "15", fill: "#5493CB", delay: 0.35 },
    { cx: "229", cy: "417", r: "10", fill: "#5398CF", delay: 0.8 },
    { cx: "217.5", cy: "373.5", r: "11.5", fill: "#50A2D7", delay: 0.6 },
    { cx: "261.5", cy: "324.5", r: "11.5", fill: "#5A91C9", delay: 0.7 },
    { cx: "393.5", cy: "441.5", r: "12.5", fill: "#7569AE", delay: 0.9 },
    { cx: "479", cy: "338", r: "13", fill: "#B7418D", delay: 0.35 },
    { cx: "331", cy: "215", r: "15", fill: "#6485BB", delay: 0.25 },
    { cx: "516", cy: "379", r: "15", fill: "#B7418D", delay: 0.5 },
    { cx: "344", cy: "259", r: "10", fill: "#6379BA", delay: 0.6 },
    { cx: "321", cy: "294", r: "10", fill: "#6281BF", delay: 0.7 },
    { cx: "418", cy: "255", r: "10", fill: "#8263AC", delay: 0.55 },
    { cx: "479", cy: "281", r: "10", fill: "#B7418D", delay: 0.4 },
    {
      cx: "429.5",
      cy: "354.5",
      r: "10.5",
      fill: "url(#paint10_linear_12_143)",
      delay: 0.65,
    },
    { cx: "360", cy: "334", r: "10", fill: "#6577B7", delay: 0.35 },
    { cx: "495", cy: "363", r: "9", fill: "#BF3D87", delay: 0.55 },
    { cx: "548", cy: "291", r: "9", fill: "#BB3E8B", delay: 0.85 },
    { cx: "391", cy: "333", r: "15", fill: "#756AB0", delay: 0.9 },
    { cx: "553", cy: "399", r: "20", fill: "#BB3E8B", delay: 0.6 },
    { cx: "303", cy: "483", r: "24", fill: "#6180BE", delay: 0.45 },
    { cx: "416.5", cy: "217.5", r: "16.5", fill: "#7E61AC", delay: 0.67 },
    { cx: "512", cy: "269", r: "19", fill: "#B7418D", delay: 0.28 },
    { cx: "504", cy: "310", r: "19", fill: "#B7418D", delay: 0.36 },
    {
      cx: "460",
      cy: "375",
      r: "19",
      fill: "url(#paint11_linear_12_143)",
      delay: 0.72,
    },
    { cx: "372.5", cy: "232.5", r: "20.5", fill: "#6A6CAF", delay: 0.53 },
  ];

  const lines = [
    {
      x1: "204.901",
      y1: "348.337",
      x2: "281.018",
      y2: "345.666",
      stroke: "url(#paint12_linear_12_143)",
      strokeWidth: "4",
      delay: 1.23,
    },
    {
      x1: "210.84",
      y1: "402.352",
      x2: "236.388",
      y2: "389.733",
      stroke: "url(#paint13_linear_12_143)",
      strokeWidth: "4",
      delay: 1.37,
    },
    {
      x1: "336.702",
      y1: "321.686",
      x2: "355.702",
      y2: "305.478",
      stroke: "url(#paint14_linear_12_143)",
      strokeWidth: "4",
      delay: 1.42,
    },
    {
      x1: "393.42",
      y1: "365.981",
      x2: "425.42",
      y2: "324.773",
      stroke: "url(#paint15_linear_12_143)",
      strokeWidth: "4",
      delay: 1.15,
    },
    {
      x1: "405.779",
      y1: "381.012",
      x2: "441.779",
      y2: "377.012",
      stroke: "url(#paint16_linear_12_143)",
      strokeWidth: "4",
      delay: 1.48,
    },
    {
      x1: "471.57",
      y1: "387.761",
      x2: "486.57",
      y2: "406.761",
      stroke: "url(#paint17_linear_12_143)",
      strokeWidth: "4",
      delay: 1.29,
    },
    {
      x1: "523.918",
      y1: "417.318",
      x2: "537.918",
      y2: "408.318",
      stroke: "url(#paint18_linear_12_143)",
      strokeWidth: "4",
      delay: 1.34,
    },
    {
      x1: "375",
      y1: "266",
      x2: "375",
      y2: "252",
      stroke: "url(#paint19_linear_12_143)",
      strokeWidth: "4",
      delay: 1.18,
    },
    {
      x1: "448.043",
      y1: "279.588",
      x2: "452.043",
      y2: "260.588",
      stroke: "url(#paint20_linear_12_143)",
      strokeWidth: "4",
      delay: 1.47,
    },
    {
      x1: "469.105",
      y1: "306.003",
      x2: "488.105",
      y2: "307.003",
      stroke: "url(#paint21_linear_12_143)",
      strokeWidth: "4",
      delay: 1.13,
    },
    {
      x1: "521.074",
      y1: "318.313",
      x2: "532.074",
      y2: "325.313",
      stroke: "url(#paint22_linear_12_143)",
      strokeWidth: "4",
      delay: 1.45,
    },
    {
      x1: "399.264",
      y1: "296.018",
      x2: "414.264",
      y2: "298.018",
      stroke: "url(#paint23_linear_12_143)",
      strokeWidth: "4",
      delay: 1.38,
    },
    {
      x1: "309.029",
      y1: "312.337",
      x2: "302.029",
      y2: "271.337",
      stroke: "url(#paint24_linear_12_143)",
      strokeWidth: "4",
      delay: 1.24,
    },
    {
      x1: "292.666",
      y1: "323.49",
      x2: "254.666",
      y2: "289.49",
      stroke: "url(#paint25_linear_12_143)",
      strokeWidth: "4",
      delay: 1.32,
    },
    {
      x1: "311",
      y1: "394",
      x2: "311",
      y2: "375",
      stroke: "url(#paint26_linear_12_143)",
      strokeWidth: "4",
      delay: 1.44,
    },
    {
      x1: "307",
      y1: "462",
      x2: "307",
      y2: "448",
      stroke: "url(#paint27_linear_12_143)",
      strokeWidth: "4",
      delay: 1.27,
    },
    {
      x1: "281.297",
      y1: "514.952",
      x2: "289.297",
      y2: "501.952",
      stroke: "url(#paint28_linear_12_143)",
      strokeWidth: "4",
      delay: 1.11,
    },
    {
      x1: "276.752",
      y1: "431.015",
      x2: "284.752",
      y2: "430.015",
      stroke: "url(#paint29_linear_12_143)",
      strokeWidth: "4",
      delay: 1.36,
    },
    {
      x1: "332.302",
      y1: "436.481",
      x2: "339.302",
      y2: "442.481",
      stroke: "url(#paint30_linear_12_143)",
      strokeWidth: "4",
      delay: 1.26,
    },
    {
      x1: "419.785",
      y1: "415.589",
      x2: "402.785",
      y2: "402.589",
      stroke: "url(#paint31_linear_12_143)",
      strokeWidth: "4",
      delay: 1.48,
    },
    {
      x1: "351.708",
      y1: "370.527",
      x2: "338.708",
      y2: "359.527",
      stroke: "url(#paint32_linear_12_143)",
      strokeWidth: "4",
      delay: 1.17,
    },
    {
      x1: "276.734",
      y1: "370.452",
      x2: "287.734",
      y2: "361.452",
      stroke: "url(#paint33_linear_12_143)",
      strokeWidth: "4",
      delay: 1.41,
    },
  ];

  const displayCircle = circles.map((data, i) => {
    return (
      <motion.circle
        key={i}
        cx={data.cx}
        cy={data.cy}
        r={data.r}
        fill={data.fill}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          width: [0, "100%"],
          height: [0, "100%"],
        }}
        transition={{
          duration: 2,
          delay: data.delay,
        }}
      />
    );
  });

  const displayLines = lines.map((data, i) => {
    return (
      <motion.line
        key={i}
        x1={data.x1}
        y1={data.y1}
        x2={data.x2}
        y2={data.y2}
        stroke={data.stroke}
        strokeWidth={data.strokeWidth}
        animate={{
          strokeDasharray: [0, 1],
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          delay: 3,
        }}
      />
    );
  });
  return (
    <div className="flex items-center justify-center max-md:w-[30%] m-3">
      <motion.svg
        className="w-full"
        // width="884"
        // height="883"
        viewBox="120 180 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="paint0_linear_12_143"
            x1="299.5"
            y1="450"
            x2="338"
            y2="450"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6381BD" />
            <stop offset="1" stopColor="#736DB1" />
          </linearGradient>

          <linearGradient
            id="paint1_linear_12_143"
            x1="427.5"
            y1="272"
            x2="488.5"
            y2="275"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C579E" />
            <stop offset="1" stopColor="#AE3683" />
          </linearGradient>

          <linearGradient
            id="paint2_linear_12_143"
            x1="427"
            y1="401"
            x2="436.5"
            y2="401"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8667A9" />
            <stop offset="1" stopColor="#995196" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_12_143"
            x1="485"
            y1="413"
            x2="526.5"
            y2="414"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AD4891" />
            <stop offset="1" stopColor="#C13989" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_12_143"
            x1="290.5"
            y1="272.5"
            x2="315.5"
            y2="275"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5F84C2" />
            <stop offset="1" stopColor="#6C6AAD" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_12_143"
            x1="248.5"
            y1="408"
            x2="278.5"
            y2="406"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5792C9" />
            <stop offset="1" stopColor="#6571AF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_12_143"
            x1="307"
            y1="351"
            x2="342"
            y2="347.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5D77B2" />
            <stop offset="1" stopColor="#6C6AAD" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_12_143"
            x1="421"
            y1="449"
            x2="444.5"
            y2="449"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#736DB1" />
            <stop offset="1" stopColor="#995096" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_12_143"
            x1="249"
            y1="455"
            x2="271.5"
            y2="455"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5691C9" />
            <stop offset="1" stopColor="#6381BD" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_12_143"
            x1="341"
            y1="469"
            x2="397.5"
            y2="469"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6573B5" />
            <stop offset="0.579267" stopColor="#7569AE" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_12_143"
            x1="422.5"
            y1="365"
            x2="436"
            y2="365"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8461AC" />
            <stop offset="1" stopColor="#974D95" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_12_143"
            x1="437.5"
            y1="375"
            x2="479"
            y2="369.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#87579F" />
            <stop offset="1" stopColor="#B64388" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_12_143"
            x1="204.988"
            y1="350.835"
            x2="281.105"
            y2="348.164"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38A8D8" />
            <stop offset="1" stopColor="#6780B8" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_12_143"
            x1="211.948"
            y1="404.593"
            x2="237.495"
            y2="391.975"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#40AADD" />
            <stop offset="1" stopColor="#5792C9" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_12_143"
            x1="338.324"
            y1="323.588"
            x2="357.324"
            y2="307.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6B6BAD" />
            <stop offset="1" stopColor="#6C6AAD" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_12_143"
            x1="431.5"
            y1="367"
            x2="395.395"
            y2="367.514"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0717711" stopColor="#8D579D" />
            <stop offset="1" stopColor="#736DB1" />
          </linearGradient>
          <linearGradient
            id="paint16_linear_12_143"
            x1="406.055"
            y1="383.497"
            x2="428"
            y2="381"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#736DB1" />
            <stop offset="1" stopColor="#8C559D" />
          </linearGradient>
          <linearGradient
            id="paint17_linear_12_143"
            x1="469.608"
            y1="389.31"
            x2="521.5"
            y2="389"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AE478C" />
            <stop offset="1" stopColor="#AC479B" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_12_143"
            x1="525.27"
            y1="419.421"
            x2="539.27"
            y2="410.421"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BA3F8C" />
            <stop offset="1" stopColor="#BB3E8B" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_12_143"
            x1="377.5"
            y1="252"
            x2="377.5"
            y2="266"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6A6CAF" />
            <stop offset="1" stopColor="#6C6AAD" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_12_143"
            x1="454.489"
            y1="261.103"
            x2="450.489"
            y2="280.103"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9C4891" />
            <stop offset="1" stopColor="#984C95" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_12_143"
            x1="468.974"
            y1="308.499"
            x2="487.974"
            y2="309.499"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A2428D" />
            <stop offset="1" stopColor="#B7418D" />
          </linearGradient>
          <linearGradient
            id="paint22_linear_12_143"
            x1="519.732"
            y1="320.422"
            x2="530.732"
            y2="327.422"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B7418D" />
            <stop offset="1" stopColor="#BB3E8B" />
          </linearGradient>
          <linearGradient
            id="paint23_linear_12_143"
            x1="398.934"
            y1="298.496"
            x2="411.5"
            y2="298"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C6AAD" />
            <stop offset="0.949993" stopColor="#8F549B" />
          </linearGradient>
          <linearGradient
            id="paint24_linear_12_143"
            x1="304.493"
            y1="270.916"
            x2="316"
            y2="326.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#647BBA" />
            <stop offset="1" stopColor="#6076B1" />
          </linearGradient>
          <linearGradient
            id="paint25_linear_12_143"
            x1="256.333"
            y1="287.627"
            x2="294.333"
            y2="321.627"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5597CE" />
            <stop offset="1" stopColor="#6274B1" />
          </linearGradient>
          <linearGradient
            id="paint26_linear_12_143"
            x1="313.5"
            y1="375"
            x2="313.5"
            y2="394"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6571AF" />
            <stop offset="1" stopColor="#6381BD" />
          </linearGradient>
          <linearGradient
            id="paint27_linear_12_143"
            x1="309.5"
            y1="448"
            x2="309.5"
            y2="462"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6381BD" />
            <stop offset="1" stopColor="#6180BE" />
          </linearGradient>
          <linearGradient
            id="paint28_linear_12_143"
            x1="291.426"
            y1="503.262"
            x2="283.426"
            y2="516.262"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6180BE" />
            <stop offset="1" stopColor="#588BC6" />
          </linearGradient>
          <linearGradient
            id="paint29_linear_12_143"
            x1="277.062"
            y1="433.496"
            x2="285.062"
            y2="432.496"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6481BD" />
            <stop offset="1" stopColor="#6381BD" />
          </linearGradient>
          <linearGradient
            id="paint30_linear_12_143"
            x1="330.675"
            y1="438.38"
            x2="337.675"
            y2="444.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7072B4" />
            <stop offset="1" stopColor="#6673B5" />
          </linearGradient>
          <linearGradient
            id="paint31_linear_12_143"
            x1="404.304"
            y1="400.603"
            x2="421.304"
            y2="413.603"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#736DB1" />
            <stop offset="1" stopColor="#746EB1" />
          </linearGradient>
          <linearGradient
            id="paint32_linear_12_143"
            x1="340.323"
            y1="357.618"
            x2="353.323"
            y2="368.618"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6A6CAE" />
            <stop offset="1" stopColor="#736DB1" />
          </linearGradient>
          <linearGradient
            id="paint33_linear_12_143"
            x1="278.317"
            y1="372.387"
            x2="289.317"
            y2="363.387"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6377B3" />
            <stop offset="1" stopColor="#6373B0" />
          </linearGradient>
        </defs>
        {displayCircle}
        <motion.ellipse
          cx="375.5"
          cy="290"
          rx="26.5"
          ry="26"
          fill="#6C6AAD"
          animate={{
            strokeDasharray: [0, 1],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            delay: 0.56,
          }}
        />
        <motion.ellipse
          cx="501.5"
          cy="427"
          rx="26.5"
          ry="26"
          fill="url(#paint3_linear_12_143)"
          animate={{
            strokeDasharray: [0, 1],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            delay: 0.45,
          }}
        />
        {displayLines}
      </motion.svg>
    </div>
  );
}

export default SVG;
