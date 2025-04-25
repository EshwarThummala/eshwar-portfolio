import { motion } from "framer-motion";
import { TiAnchor, TiArrowForward } from "react-icons/ti";

const Verix = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Backend Engineer
        <span className="text-textGreen tracking-wide">
          @Verix USA
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
            Worked on RAG (Retrieval-Augmented Generation) workflow to integrate API documentation and guidelines into LLM-based chat interactions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            Developed a product leveraging LLMs and modern frameworks to generate personalized newsletters by scraping the web and using public APIs to compile recent events and updates for a given individual based on contextual input.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and Developed a blockchain-based credential issuance platform aligned with Verifiable Credentials and Open Badge Standards.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated backend REST APIs with platforms like Zapier and SAP App Store in Django framework,
          enhancing interoperability and driving increased user engagement.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed backend functionality for a Zoom-integrated certification system, enabling multi-day meeting
          scheduling and automated certificate issuance based on issuer-defined criteria. 
          Handeled async webhook calls and mapped to respective Zoom users and participants.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented OAuth2 authentication using Django libraries, supporting multiple grant flows, including
          Client Credentials, Social Auth (Google, Zoom, LinkedIn), and Email OTP.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built a user account linking system, allowing users to merge credentials/certificates into a single account.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and implemented an analytics system, extracting and processing event data from Mixpanel into
          fact tables using scheduled CRON jobs and APIs.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a workflow framework using Celery and Redis Queue to manage asynchronous task execution. 
          This workflow framework helped to manage multiple steps of credentials issuance 
          (criteria_eval, creation, issuance, distribution etc.) to be modular and loosely coupled.
        </li>
      </ul>
    </motion.div>
  );
};

export default Verix;
