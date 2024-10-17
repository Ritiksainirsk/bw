import React from "react";
import Image from "next/image";
import { FaArrowRight, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection"; // Assuming this is your animation component

const SlideSec = ({ title, data1, data2 }) => {
  return (
    
<div className="flex justify-between flex-col  ">
      {/* Carousel */}
      <div className="flex flex-col items-center">
      <h2 className="text-xl md:text-3xl font-semibold my-6 lg:my-14 px-2   text-center heading-font text-[#022F46]  " style={{ fontWeight: "700" }}>
        {title}
        </h2>
    
    <AnimatedSection>
      <div className="flex justify-between w-full flex-col lg:flex-row rounded-2xl border-gray-200 border-2 md:mb-14 shadow-md main-hoverbox-container">
        {data1.map((card, index) => (
          <div
            key={index}
            className={`w-[100%]  md:w-[100%] lg:w-[22rem] h-[20rem] containerBox relative p-7 overflow-hidden   h-fit inline-border ${
              index == 0
                ? "hover:bg-[#9bc9ff]"
                : index == 1
                ? "hover:bg-[#c8bbff]"
                : index == 2
                ? "hover:bg-[#ffb1cc]"
                : index == 3
                ? "hover:bg-[#ffd972]"
                : ""
            }    ${index ==0 ? "left-radius-border" : ""}    ${index ==data1.length -1 ? "right-radius-border" : ""}`}
          >
            <div className="translate-x-[-100%] overlay-content-btn w-full h-full absolute">
              <button className="bg-[#1C4980] text-white py-1 px-5 rounded-lg bottom-10 absolute flex items-center gap-3">
                Explore<FaArrowRight />
              </button>
            </div>

            <div className=" flex flex-col   gap-y-0.5 w-[100%] md:w-[100%] lg:w-[22rem]">
              <div className={`w-[80px] pb-4 rounded-full text-center`}>
                <Image
                  src={card.icon}
                  alt={index}
                  className="rounded-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold heading-font pb-3 text-black">
                  {card.title}
                </h3>
                <p className="mb-6 lg:mb-2">{card.subtitle}</p></div>

              <div className="mt-4 btnn ">
                <button className="py-2 tracking-wider flex items-center gap-3">
                  <Link href={card.url}>
                  {card.buttonText} 
                  </Link>
                </button>
                  <FaAngleRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
 </div>
 </div>


   );
};

export default SlideSec;
