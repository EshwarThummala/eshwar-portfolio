import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Backend Engineer Intern
        <span className="text-textGreen tracking-wide">
          @Virtualness USA
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Design, develop, and maintain backend systems and APIs using Python
          and related frameworks such as Django or Flask.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implement and optimize database schemas, queries, and transactions for
          efficient data storage and retrieval using SQL or NoSQL databases.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrate backend systems with external APIs, services, and
          third-party platforms to enable seamless functionality and data
          exchange.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
