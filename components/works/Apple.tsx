import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Programmer Analyst Trainee
        <span className="text-textGreen tracking-wide">@Cognizant</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2021 - July 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated closely with experts over 5 months to construct complete
          Java SpringBoot APIs from scratch.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engaged in building relational databases and managed table data
          through complex SQL queries.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
