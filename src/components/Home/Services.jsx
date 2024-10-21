"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import AnimatedSection from "../AnimatedSection";
// images
import Dmit from "@/assets/services/DMIT.webp";
import AptitudeTest from "@/assets/services/Aptitude test.webp";
import IdealCareerTest from "@/assets/services/Ideal Career Test.webp";
import PsychometricTest from "@/assets/services/Psychometric Test.webp";
import CareerCounselling from "@/assets/services/Career Counselling (1).webp";
import PersonalityTest from "@/assets/services/Personality test.webp";
import IQTest from "@/assets/services/IQ Test.webp";
import InterestTest from "@/assets/services/Interest Test.webp";


export default function Services() {
  return (
    <div className="flex justify-between flex-col  ">
      {/* Carousel */}
      <div className="flex flex-col items-center">
        <h2
          className="text-xl md:text-3xl font-semibold my-6 lg:my-14 px-2  text-center heading-font text-[#022F46]  "
          style={{ fontWeight: "700" }}
        >
          How does Brainwonders services
          <span> help you to sucess in your career? </span>
        </h2>
        <HoverEffectCard />
        <HoverEffectCard2 />
        
      </div>
      {/* Carousel */}
    </div>
  );
}

// const HoverEffectCard = () => {
//   return (
//     <AnimatedSection>
//       <div className="flex justify-center rounded-2xl border-gray-200 border-2 md:mb-14 shadow-md main-hoverbox-container">
//         {items.map((card, index) => (
//           <div
//             key={index}
//             className={`w-[22rem] h-[20rem] containerBox relative p-7 overflow-hidden ${
//               card.title === "DMIT Test"
//                 ? "hover:bg-yellow-500"
//                 : "" || card.title === "Aptitide Test"
//                 ? "hover:bg-blue-500"
//                 : "" || card.title === "Ideal Career Test"
//                 ? "hover:bg-green-500"
//                 : "" || card.title === "Psychometric Test"
//                 ? "hover:bg-red-500"
//                 : ""
//             }`}
//           >
//             <div className="translate-x-[-100%] overlay-content-btn w-full h-full absolute">
//               <button className="bg-[#1C4980] text-white py-1 px-5 rounded-lg bottom-10 absolute flex items-center gap-3">
//                 Explore <FaArrowRight />
//               </button>
//             </div>

//             <div>
//               <div className={`w-[80px] pb-4 rounded-full text-center`}>
//                 <Image
//                   src={card.url}
//                   alt={index}
//                   className="rounded-full object-cover"
//                   width={120}
//                   height={120}
//                 />
//               </div>

//               <h3 className="text-xl font-semibold heading-font pb-3 text-black">
//                 {card.title}
//               </h3>
//               <p className="mb-6 lg:mb-2">{card.subtitle}</p>

//               <div className="mt-4 btnn ">
//                 <button className="py-2 tracking-wider flex items-center gap-3">
//                   {card.buttonText} <FaAngleRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </AnimatedSection>
//   );
// };

// const HoverEffectCard2 = () => {
//   return (
//     <AnimatedSection>
//       <div className="flex justify-center rounded-2xl border-gray-200 border-2 mb-14 shadow-md main-hoverbox-container">
//         {items2.map((card, index) => (
//           <div
//             className={`w-[22rem] h-[20rem] containerBox relative p-7 overflow-hidden ${
//               card.title === "Career Counslling"
//                 ? "hover:bg-pink-300"
//                 : "" || card.title === "Personalit Test"
//                 ? "hover:bg-purple-200"
//                 : "" || card.title === "IQ Test"
//                 ? "hover:bg-orange-500"
//                 : "" || card.title === "Interest Test"
//                 ? "hover:bg-gray-400"
//                 : ""
//             }`}
//             key={index}
//           >
//             <div className="translate-x-[-100%] overlay-content-btn w-full h-full absolute">
//               <button className="bg-[#1C4980] text-white py-1 px-5 rounded-lg bottom-10 absolute flex items-center gap-3">
//                 Explore <FaArrowRight />
//               </button>
//             </div>

//             <div>
//               <div className={`w-[80px] pb-4 rounded-full text-center`}>
//                 <Image
//                   src={card.url}
//                   alt={card.title}
//                   className="rounded-full object-cover"
//                   width={120}
//                   height={120}
//                 />
//               </div>

//               <h3 className="text-lg font-semibold heading-font pb-3 text-black">
//                 {card.title}
//               </h3>
//               <p className="mb-6 lg:mb-2">{card.subtitle}</p>

//               <div className="mt-4 btnn ">
//                 <button className="py-2 tracking-wider flex items-center gap-3">
//                   {card.buttonText} <FaAngleRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </AnimatedSection>
//   );
// };

const HoverEffectCard = () => {

  const items = [
    {
      title: "DMIT Test",
      subtitle:
        "DMIT is the best tool powered by biometrics and genetic intelligence to map all the traits & talents",
      url: Dmit,
      buttonText: "Know More",
      bgcolor: "bg-yellow-500",
    },
    {
      buttonText: "Know Yourself Better",
      title: "Aptitide Test",
      subtitle:
        "measures work value congnitive abilities traits for shaping personal, social and profession growth.",
      url: AptitudeTest,
      bgcolor: "bg-blue-500",
    },
    {
      title: "Ideal Career Test",
      buttonText: "Professional Guidance",
      subtitle:
        "clear the confusion and build a career with confidence, based on personal abilities and current trends",
      url: IdealCareerTest,
      bgcolor: "bg-green-500",
    },
    {
      title: "Psychometric Test",
      buttonText: "India or Abroad",
      subtitle:
        "The test report will help you to explore career in order to get started in career search or change of career",
      url: PsychometricTest,
      bgcolor: "bg-red-500",
    },
  ];
  return (
    <AnimatedSection>
    <div className="flex justify-center items-center rounded-2xl border-gray-200 mb-14 main-hoverbox-container">
      {items.map((card, index) => (
       
       <div
          className={`w-[25rem] border-2 h-[21rem] containerBox relative p-7 overflow-hidden ${
            card.title === "Psychometric Test"
              ? "hover:bg-yellow-500"
              : "" || card.title === "DMIT Test"
              ? "hover:bg-blue-500"
              : "" || card.title === "Aptitide Test"
              ? "hover:bg-green-500"
              : "" || card.title === "Ideal Career Test"
              ? "hover:bg-red-500"
              : ""
          }`}
          key={index}
        >
          <div className="translate-x-[-100%] overlay-content-btn w-full h-full absolute">
            <button className="bg-[#1C4980] text-white py-1 px-5 rounded-lg bottom-10 absolute flex items-center gap-3">
              Explore <FaArrowRight />
            </button>
          </div>

          <div>
            <div
              className={`w-[80px] h-[80px] p-3 mb-4 rounded-full text-center ${
                card.title === "Career Guidance for class 8th and 9th"
                  ? "bg-[#C8BBFF]"
                  : "" || card.title === "Career Guidance After 10th"
                  ? "bg-[#B5D7FF]"
                  : "" || card.title === "Career Guidance after 12th"
                  ? "bg-[#FFB1CC]"
                  : "" || card.title === "Career Guidance after graduation"
                  ? "bg-[#FED872]"
                  : ""
              }`}
            >
              <Image
                src={card.url}
                alt=""
                className="rounded-full object-cover w-full"
                width={120}
                height={120}
              />
            </div>

            <h3 className="text-xl font-semibold heading-font pb-3">
              {card.title}
            </h3>
            <p className="mb-7">{card.subtitle}</p>

            <div className="mt-4 btnn ">
              <button className="py-2 tracking-wider flex items-center gap-3">
                {card.buttonText} <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </AnimatedSection>
  );
};

const HoverEffectCard2 = () => {

  const items2 = [
    {
      title: "Career Counslling",
      subtitle:
        "clear the confusion and build a career with confidence, based on personal abilities and current trends",
      url: CareerCounselling,
      buttonText: "Know More",
      bgcolor: "bg-yellow-500",
    },
    {
      title: "Personalit Test",
      subtitle:
        "Thoughtts, behaviour, relation, emotional regulation and more-decoded and defined.",
      url: PersonalityTest,
      bgcolor: "bg-yellow-500",
      buttonText: "Know More",
    },
    {
      title: "IQ Test",
      subtitle:
        "A standardisted way to measure the human intelligence and capability as per their age.",
      url: IQTest,
      bgcolor: "bg-yellow-500",
      buttonText: "Know More",
    },
    {
      title: "Interest Test",
      subtitle:
        "Intrest Inventory analyses the aspects and fields that privide long term satisfaction to the person.",
      url: InterestTest,
      bgcolor: "bg-yellow-500",
      buttonText: "Know More",
    },
  ];
  return (
    <AnimatedSection>
    <div className="flex justify-center items-center rounded-2xl border-gray-200 mb-14 main-hoverbox-container">
      {items2.map((card, index) => (
       
       <div
          className={`w-[25rem] border-2 h-[21rem] containerBox relative p-7 overflow-hidden ${
            card.title === "Career Counslling"
              ? "hover:bg-yellow-500"
              : "" || card.title === "Personalit Test"
              ? "hover:bg-blue-500"
              : "" || card.title === "IQ Test"
              ? "hover:bg-green-500"
              : "" || card.title === "Interest Test"
              ? "hover:bg-red-500"
              : ""
          }`}
          key={index}
        >
          <div className="translate-x-[-100%] overlay-content-btn w-full h-full absolute">
            <button className="bg-[#1C4980] text-white py-1 px-5 rounded-lg bottom-10 absolute flex items-center gap-3">
              Explore <FaArrowRight />
            </button>
          </div>

          <div>
            <div
              className={`w-[80px] h-[80px] p-3 mb-4 rounded-full text-center ${
                card.title === "Career Guidance for class 8th and 9th"
                  ? "bg-[#C8BBFF]"
                  : "" || card.title === "Career Guidance After 10th"
                  ? "bg-[#B5D7FF]"
                  : "" || card.title === "Career Guidance after 12th"
                  ? "bg-[#FFB1CC]"
                  : "" || card.title === "Career Guidance after graduation"
                  ? "bg-[#FED872]"
                  : ""
              }`}
            >
              <Image
                src={card.url}
                alt=""
                className="rounded-full object-cover w-full"
                width={120}
                height={120}
              />
            </div>

            <h3 className="text-xl font-semibold heading-font pb-3">
              {card.title}
            </h3>
            <p className="mb-7">{card.subtitle}</p>

            <div className="mt-4 btnn ">
              <button className="py-2 tracking-wider flex items-center gap-3">
                {card.buttonText} <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </AnimatedSection>
  );
};