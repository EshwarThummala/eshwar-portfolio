import { cyberImg, noorShop } from "@/public/assets";
import Image, { StaticImageData } from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import awsProjectImage from "../public/assets/images/project_images/aws.png";
import awsColorProjectImage from "../public/assets/images/project_images/aws_color.png";
import smieProjectImage from "../public/assets/images/project_images/smie.png";
import smieColorProjectImage from "../public/assets/images/project_images/smie_color.png";
import ecommerceProjectImage from "../public/assets/images/project_images/ecommerce.png";
import ecommerceColorProjectImage from "../public/assets/images/project_images/ecommerce_color.png";
import multimediaProjectImage from "../public/assets/images/project_images/multimedia.png";
import multimediaColorProjectImage from "../public/assets/images/project_images/multimedia_color.png";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";

const Projects = () => {
  const [awsImage, setAWSImage] = useState(awsProjectImage);
  const [smieImage, setSMIEImage] = useState(smieProjectImage);
  const [ecommerceImage, setEcommerceImage] = useState(ecommerceProjectImage);
  const [multimediaImage, setMultimediaImage] = useState(multimediaProjectImage)
  const imageChangeHandler = (
    newImage: StaticImageData,
    setImage: Function
  ) => {
    setImage(newImage);
  };
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* ============ project One Start here ================ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://docs.google.com/document/d/1XlkP9VImzRVl5o5LAUWJ1_OFE8-tjZEf9AFw6vAvNDM/edit?usp=sharing"
            target="_blank"
          >
            <div
              onMouseEnter={() =>
                imageChangeHandler(awsColorProjectImage, setAWSImage)
              }
              onMouseLeave={() =>
                imageChangeHandler(awsProjectImage, setAWSImage)
              }
            >
              <Image
                className="w-full h-full object-contain"
                src={awsImage}
                alt="aws-project-image"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide"></p>
              <h3 className="text-2xl font-bold">
                Full stack application with AWS
              </h3>
            </div>
            <p className="bg-textDark text-bodyColor text-sm md:text-base p-2 md:p-6 rounded-md">
              A full-stack application with a simple functionality: given a text
              file and an input text, the application appends the text to the
              file, stores it in an S3 bucket, and updates DynamoDB. The front
              end is built using the React Library, while the backend utilizes
              various AWS services, including Cognito, API Gateway, Lambda, EC2,
              CDK, and more. The aim of this project is to gain practical
              experience with AWS.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>S3</li>
              <li>Lambda</li>
              <li>EC2</li>
              <li>DynamoDB</li>
              <li>CDK</li>
              <li>Cognito</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/EshwarThummala/fovus-challenge-ui"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://docs.google.com/document/d/1XlkP9VImzRVl5o5LAUWJ1_OFE8-tjZEf9AFw6vAvNDM/edit?usp=sharing"
                target="_blank"
              >
                <IoDocumentTextOutline />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://smie-ui.onrender.com/"
            target="_blank"
          >
            <div
              onMouseEnter={() =>
                imageChangeHandler(smieColorProjectImage, setSMIEImage)
              }
              onMouseLeave={() =>
                imageChangeHandler(smieProjectImage, setSMIEImage)
              }
            >
              <Image
                className="w-full h-full object-contain"
                src={smieImage}
                alt="SMIE project Image"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Social Media Insights Engine
              </h3>
            </div>
            <p className="text-sm md:text-base bg-textDark text-bodyColor p-2 md:p-6 rounded-md xl:-mr-16">
              A dynamic application that fetches social media creator profiles
              from a JSON file and empowers users to apply various filters to
              refine their search results. The core idea revolves around
              efficiently parsing JSON data, implementing filter
              functionalities, and designing an intuitive user interface for
              seamless interaction.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Python</li>
              <li>Flask</li>
              <li>React</li>
              <li>Material UI</li>
              <li>JSON</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/EshwarThummala/smie-ui"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://docs.google.com/document/d/1q0r0g_JlEhlS8cyBwfdP5ek_uCg0Pgxpy1kOMksDCY8/edit?usp=sharing"
                target="_blank"
              >
                <IoDocumentTextOutline />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://smie-ui.onrender.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://eshwar-ecommerce.onrender.com/"
            target="_blank"
          >
            <div
              onMouseEnter={() =>
                imageChangeHandler(
                  ecommerceColorProjectImage,
                  setEcommerceImage
                )
              }
              onMouseLeave={() =>
                imageChangeHandler(ecommerceProjectImage, setEcommerceImage)
              }
            >
              <Image
                className="w-full h-full object-contain"
                src={ecommerceImage}
                alt="Ecommerce Image"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Ecommerce Website</h3>
            </div>
            <p className="text-sm md:text-base bg-textDark text-bodyColor p-2 md:p-6 rounded-md">
              As part of an internship screening process, I created a functional
              e-commerce website replica using a dummy product API. This project
              served as a technical case study demonstrating my skills and
              understanding of modern web development.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>JSON</li>
              <li>Bootstrap</li>
              <li>API</li>
              <li>JavaScript</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/EshwarThummala/ecommerce"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://eshwar-ecommerce.onrender.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
        {/* ============ project Four Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://docs.google.com/document/d/1E63Y18SU4qUesy6CuPWB24ZPsheRcyHi7lH2abp-8OI/edit?usp=sharing"
            target="_blank"
          >
            <div
              onMouseEnter={() =>
                imageChangeHandler(multimediaColorProjectImage, setMultimediaImage)
              }
              onMouseLeave={() =>
                imageChangeHandler(multimediaProjectImage, setMultimediaImage)
              }
            >
              <Image
                className="w-full object-contain"
                src={multimediaImage}
                alt="SMIE project Image"
              />
              <div className="absolute w-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <h3 className="text-2xl font-bold">
                Multimedia(Image) Database Search
              </h3>
            </div>
            <p className="text-sm md:text-base bg-textDark text-bodyColor p-2 md:p-6 rounded-md xl:-mr-16">
              A team project focuses on implementing and experimenting with the
              image processing algorithms on a database of 10,000 images to
              facilitate search functionality for a given input image. Some of
              the algorithms used in this project are SVD, LDA, NNMF, and CP
              decomposition. Some of the distance metrics used are Euclidean,
              Cosine Similarity, and Manhattan
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Python</li>
              <li>Tensorflow</li>
              <li>Keras</li>
              <li>PyTorch</li>
              <li>Numpy</li>
              <li>Pandas</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://docs.google.com/document/d/1E63Y18SU4qUesy6CuPWB24ZPsheRcyHi7lH2abp-8OI/edit?usp=sharing"
                target="_blank"
              >
                <IoDocumentTextOutline />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Four End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
