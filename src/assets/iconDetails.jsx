import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
  DiMsqlServer,
  DiPostgresql,
  DiDocker,
} from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiDotnet, SiCsharp, SiFigma } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const iconDetails = {
  DiHtml5: { icon: <DiHtml5 className="text-[#E34F26]" />, name: "HTML5" },
  DiCss3: { icon: <DiCss3 className="text-[#1572B6]" />, name: "CSS3" },
  DiBootstrap: {
    icon: <DiBootstrap className="text-[#7952B3]" />,
    name: "Bootstrap",
  },
  DiJavascript1: {
    icon: <DiJavascript1 className="text-[#F7DF1E]" />,
    name: "JavaScript",
  },
  DiReact: { icon: <DiReact className="text-[#61DAFB]" />, name: "React" },
  DiNodejsSmall: {
    icon: <DiNodejsSmall className="text-[#339933]" />,
    name: "Node.js",
  },
  DiGithubBadge: {
    icon: <DiGithubBadge className="text-[#181717]" />,
    name: "GitHub",
  },
  DiMongodb: {
    icon: <DiMongodb className="text-[#47A248]" />,
    name: "MongoDB",
  },
  DiMsqlServer: {
    icon: <DiMsqlServer className="text-[#CC2927]" />,
    name: "SQL Server",
  },
  DiPostgresql: {
    icon: <DiPostgresql className="text-[#336791]" />,
    name: "PostgreSQL",
  },
  DiDocker: { icon: <DiDocker className="text-[#2496ED]" />, name: "Docker" },
  BiLogoTailwindCss: {
    icon: <BiLogoTailwindCss className="text-[#38B2AC]" />,
    name: "Tailwind CSS",
  },
  SiDotnet: { icon: <SiDotnet className="text-[#512BD4]" />, name: ".NET" },
  SiCsharp: { icon: <SiCsharp className="text-[#239120]" />, name: "C#" },
  SiFigma: { icon: <SiFigma className="text-[#F24E1E]" />, name: "Figma" },
  TbBrandThreejs: {
    icon: <TbBrandThreejs className="text-[#7267F2]" />,
    name: "Three.js",
  },
};

export default iconDetails;
