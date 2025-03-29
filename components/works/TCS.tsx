import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const TCS = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Systems Engineer
        <span className="text-textGreen tracking-wide">
          @Tata Consultancy Services
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2021 - July 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a dynamic insurance web application using React, leveraging Redux for centralized state
          management to ensure seamless data flow
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated robust error handling and user-friendly messaging, interpreting backend response codes to
          enhance user experience and prevent dead-end scenarios.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Addressed 40-45% of significant UI defects and features, enhancing team bandwidth by 30-50%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed SpringBoot REST API functionalities, incorporating a new endpoint to retrieve and manage
          intricate customer information from multiple underlying legacy API systems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Increased team productivity by 50% and recognized in one of the top 1% of technical resources.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led a team in technical capacities, earning a special initiative award for exceptional leadership.
        </li>
      </ul>
    </motion.div>
  );
};

export default TCS;
