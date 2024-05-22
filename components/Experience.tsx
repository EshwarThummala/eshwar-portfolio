import { use, useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import Splash from "./works/Splash";

const Experience = () => {
  const [workVirtualness, setWorkVirtualness] = useState(true)
  const [workTCS, setWorkTCS]  = useState(false)
  const [workCognizant, setWorkCongnizant] = useState(false)


  const handleWorkVirtualness = () => {
    setWorkVirtualness(true);
    setWorkTCS(false);
    setWorkCongnizant(false)
  };

  const handleWorkTCS = () => {
    setWorkVirtualness(false);
    setWorkTCS(true);
    setWorkCongnizant(false)
  }

  const handleWorkCognizant = () => {
    setWorkVirtualness(false);
    setWorkTCS(false);
    setWorkCongnizant(true)
  }

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleWorkVirtualness}
            className={`${
              workVirtualness
                ? "border-l-textGreen text-textGreen"
                : "border-l-bodyColor text-textDark"
            } border-l-2 bg-transparent hover:bg-textDark hover:text-bodyColor py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Virtualness
          </li>
          <li
            onClick={handleWorkTCS}
            className={`${
              workTCS
                ? "border-l-textGreen text-textGreen"
                : "border-l-bodyColor text-textDark"
            } border-l-2 bg-transparent hover:bg-textDark hover:text-bodyColor py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            TCS
          </li>
          <li
            onClick={handleWorkCognizant}
            className={`${
              workCognizant
                ? "border-l-textGreen text-textGreen"
                : "border-l-bodyColor text-textDark"
            } border-l-2 bg-transparent hover:bg-textDark hover:text-bodyColor py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Cognizant
          </li>
        </ul>
        {workVirtualness && <ReactBD />}
        {workTCS && <Google />}
        {workCognizant && <Apple />}
      </div>
    </section>
  );
};

export default Experience;
