import { useState } from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { 
  SiFlask,
  SiKibana,
  SiPowerbi,
  SiTensorflow,
  SiCelery,
  SiGoogleassistant,
  SiDjango } from "react-icons/si";
import { FaPython, FaReact, FaJs, FaAndroid, FaGitAlt } from "react-icons/fa";
import {
  BiLogoSpringBoot,
  BiNetworkChart,
} from "react-icons/bi";
import { FaAws, FaJava } from "react-icons/fa6";
import { CgCPlusPlus } from "react-icons/cg";
import { BsRobot } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { CiCloudRainbow, CiMobile3 } from "react-icons/ci";
import { FiDatabase } from "react-icons/fi";
import { GrDocumentImage } from "react-icons/gr";
import { VscSettings } from "react-icons/vsc";
import { DiScrum, DiMysql } from "react-icons/di";
import { MdOutlineInsertChart } from "react-icons/md";
import { PiFileSqlThin } from "react-icons/pi";
import { TbBrandOauth } from "react-icons/tb";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);
  const firstSkills = [
    {
      name: "Front-End",
      icon: RiComputerLine,
    },
    {
      name: "API's",
      icon: VscSettings,
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
      name: "Mobile App Development",
      icon: CiMobile3,
    },
    {
      name: "Agile Framework",
      icon: DiScrum,
    },
    {
      name: "Data Visualization",
      icon: MdOutlineInsertChart,
    },
  ];
  const secondSkills = [
    {
      name: "React JS",
      icon: FaReact,
    },
    {
      name: "Django",
      icon: SiDjango
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
      name: "Programming",
      icon: CgCPlusPlus,
    },
    {
      name: "SQL",
      icon: PiFileSqlThin,
    },
    {
      name: "Power BI",
      icon: SiPowerbi,
    },
    {
      name: "MySQL",
      icon: DiMysql,
    },
    {
      name: "Git",
      icon: FaGitAlt,
    },
    {
      name: "Android",
      icon: FaAndroid
    },
    {
      name: "Kibana",
      icon: SiKibana
    },
    {
      name: "Tensorflow",
      icon: SiTensorflow
    },
    {
      name: "OAuth",
      icon: TbBrandOauth,
    },
    {
      name: "Celery",
      icon: SiCelery
    },
    {
      name: "LLM",
      icon: SiGoogleassistant
    },
    {
      name: "RAG",
      icon: BsRobot
    }
  ];
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Things I Worked With
        </h2>
        {/*<p className="text-sm font-titleFont text-textGreen">
          ofcourse there are many...
  </p>*/}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-10 lgl:px-10">
        {firstSkills.map((skill) => (
          <SkillCard
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
                  <SkillCard title={skill.name} CustomIcon={skill.icon} />
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
            Hide Specific Skills
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Specific Skills
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
