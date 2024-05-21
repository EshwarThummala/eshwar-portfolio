import { motion } from "framer-motion";
import scrollDown from "../public/assets/images/scroll-down.png";
import Image from "next/image";

const Banner = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, this is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Eshwar Reddy Thummala.
        <span className="text-textDark mt-2 lgl:mt-4">
          I enjoy exporling and building software solutions.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Exploring new things in the pursuit of knowledge fuel my personal
        growth. However, my true strength resides in my ability to adapt and
        shape myself. More importantly, I cultivate passion and maintain
        discipline while dealing with challenges, and I take fun in overcoming
        them.
      </motion.p>
      <a href="#about" onClick={handleScroll}>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="animate-bounce w-52 h-14 text-sm font-titleFont text-textDark tracking-wide hover:bg-hoverColor duration-300"
        >
          <Image className="w-14" src={scrollDown} alt="logo" />
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
