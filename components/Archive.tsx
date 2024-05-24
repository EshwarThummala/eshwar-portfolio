import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import { RxOpenInNewWindow } from "react-icons/rx";
import { SiFlask } from "react-icons/si";
import { FaPython, FaReact, FaJs } from "react-icons/fa";
import { BiLogoSpringBoot, BiLogoTypescript, BiNetworkChart  } from "react-icons/bi";
import { FaAws, FaC, FaJava } from "react-icons/fa6";
import { BsRobot } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { CiCloudRainbow } from "react-icons/ci";
import { FiDatabase } from "react-icons/fi";
import { GrDocumentImage } from "react-icons/gr";
import { VscSettings } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import { MdOutlineInsertChart } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";



const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const firstSkills = [
    {
      name: "Front-End",
      icon: RiComputerLine
    },
    {
      name: "API's",
      icon: VscSettings
    },
    {
      name: "Database",
      icon: FiDatabase,
    },
    {
      name: "ML",
      icon: BsRobot,
    },
    {
      name: "Blockchain",
      icon: BiNetworkChart,
    },
    {
      name: "Cloud",
      icon: CiCloudRainbow,
    },
    {
      name: "Image Processing",
      icon: GrDocumentImage,
    },
    {
      name: "Testing",
      icon: GiSpanner,
    },
    {
      name: "Agile Framework",
      icon: DiScrum,
    },
    {
      name: "Data Visualization",
      icon: MdOutlineInsertChart,
    }
  ];
  const secondSkills = [
    {
      name: "React JS",
      icon: FaReact,
    },
    {
      name: "Flask",
      icon: SiFlask,
    },
    {
      name: "Spring Boot",
      icon: BiLogoSpringBoot,
    },
    {
      name: "AWS",
      icon: FaAws,
    },
    {
      name: "ML",
      icon: BsRobot,
    },
    {
      name: "ML",
      icon: BsRobot,
    },
    {
      name: "Java",
      icon: FaJava,
    },
    {
      name: "Python",
      icon: FaPython,
    },
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "TypeScript",
      icon: BiLogoTypescript,
    },
    {
      name: "Programming",
      icon: FaC,
    }
  ];
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Technical Skills
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          ofcourse there are many...
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 lgl:px-10">
        {firstSkills.map((skill) => (
          <ArchiveCard
            key={skill.name}
            title={skill.name}
            CustomIcon={skill.icon}
          />
        ))}
        {showMore && (
          <>
            {secondSkills.map((skill) => {
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <ArchiveCard title={skill.name} CustomIcon={skill.icon} />
                </motion.div>
              );
            })}
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
