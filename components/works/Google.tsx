import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
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
          Engineered nearly 20 React UI features for an agile-managed Umbrella
          Insurance web application at USAA.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilized React-Redux framework to create adaptive web pages rendered
          based on JSON data from APIs.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed SpringBoot REST API functionalities, incorporating a new
          endpoint to retrieve and manage intricate customer information from
          nearly 5 underlying legacy API systems and databases using SQL.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Used various testing libraries like React-testing-library, Mockito,
          and Cypress to test API and UI functionalities. Integrated the tests
          with CI/CD pipelines.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Increased team productivity by 50% & recognized as one of the top 1\%
          of technical resources.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led a team in technical capacities, earning a special initiative award
          for exceptional leadership.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
