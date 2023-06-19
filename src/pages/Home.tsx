import { useContext } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { ThemeContext } from "../contexts/theme-context/themeContext";
import Marquee from "react-fast-marquee";
import { DotnetCoreSVG } from "../components/svgs/DotnetCoreSVG";
import { ReactSVG } from "../components/svgs/ReactSVG";
import { PostgresSQLSVG } from "../components/svgs/PostgresSQLSVG";
import { AzureSVG } from "../components/svgs/Azure";
import uniqid from "uniqid";

export const Home = () => {
  const { currentTheme } = useContext(ThemeContext);
  const frontendSkills = [
    "React",
    "Angular",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "React Native",
    "Bootstrap",
    "jQuery",
  ];
  const backendSkills = [
    ".NET",
    "Wix Toolset",
    "SQL Server",
    "PostgreSQL",
    "gRPC",
    "REST",
    "Azure",
    "AWS",
  ];
  const MarqueeItem = ({
    text,
    stroke = "blue",
  }: {
    text: string;
    stroke?: "blue" | "red";
  }) => {
    const strokeClass = stroke == "blue" ? "blue-stroke" : "red-stroke";
    return <p className={`text-white px-4 pb-3 ${strokeClass}`}>{text}</p>;
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
      <div className="flex flex-col gap-5 mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-cyan-600 via-cyan-200 to-cyan-50 dark:from-red-600 dark:to-red-200  bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          <TypeWriterEffect
            textStyle={{ fontSize: "inherit" }}
            startDelay={100}
            cursorColor={currentTheme === "dark" ? "white" : "black"}
            multiText={["Understand User Flow.", "Increase Conversion."]}
            multiTextDelay={1000}
            typeSpeed={100}
          />
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
        <span className="[&>svg]:h-24 flex gap-6 justify-evenly">
          <DotnetCoreSVG />
          <ReactSVG />
          <PostgresSQLSVG />
          <AzureSVG />
        </span>
        {/* Marquee with other skills */}
        <Marquee
          gradient
          gradientWidth={"200px"}
          gradientColor={
            currentTheme === "light" ? [255, 255, 255] : [17, 24, 39]
          }
          className="text-7xl mt-4"
        >
          {frontendSkills.map((skill, index) => (
            <MarqueeItem
              text={skill}
              stroke={index % 3 === 0 ? "red" : "blue"}
              key={uniqid()}
            />
          ))}
        </Marquee>
        <Marquee
          gradient
          gradientWidth={"200px"}
          gradientColor={
            currentTheme === "light" ? [255, 255, 255] : [17, 24, 39]
          }
          className="text-6xl"
        >
          {backendSkills.map((skill, index) => (
            <MarqueeItem
              text={skill}
              stroke={index % 2 === 0 ? "red" : "blue"}
              key={uniqid()}
            />
          ))}
        </Marquee>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            className="block w-full rounded border border-cyan-600 bg-cyan-600 dark:border-red-500 dark:bg-red-500  px-12 py-3 text-sm font-medium text-white hover:text-cyan-600 dark:hover:text-black hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
          >
            Get Started
          </a>

          <a
            className="block w-full rounded border border-cyan-600 dark:border-red-500 hover:bg-cyan-600 dark:hover:bg-red-500 active:bg-cyan-500 dark:active:bg-red-500 px-12 py-3 text-sm font-medium  focus:outline-none focus:ring sm:w-auto text-cyan-600 dark:text-inherit hover:text-white"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
