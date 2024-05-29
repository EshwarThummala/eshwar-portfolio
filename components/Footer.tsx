import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi2";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/EshwarThummala" target="_blank">
        <span className="w-10 h-10 text-xl bg-textDark border-[1px] border-textDark hover:border-bodyColor text-bodyColor rounded-full inline-flex items-center justify-center hover:text-bodyColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      {/*<a
        href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-textDark border-[1px] border-textDark hover:border-bodyColor text-bodyColor rounded-full inline-flex items-center justify-center hover:text-bodyColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialYoutube />
        </span>
  </a>*/}
      <a href="https://www.linkedin.com/in/eshwar-thummala/" target="_blank">
        <span className="w-10 h-10 text-xl bg-textDark border-[1px] border-textDark hover:border-bodyColor text-bodyColor rounded-full inline-flex items-center justify-center hover:text-bodyColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>
      <div data-tooltip-target="tooltip-phone-footer" data-tooltip-placement="right">
      <span className="w-10 h-10 text-xl bg-textDark border-[1px] border-textDark hover:border-bodyColor text-bodyColor rounded-full inline-flex items-center justify-center hover:text-bodyColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <HiOutlinePhone />
        </span>
      </div>
      <div
        id="tooltip-phone-footer"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-xs text-bodyColor bg-textDark rounded-lg shadow-sm opacity-1 tooltip"
      >
        +1 (480)-853-2372
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

export default Footer;
