'use client'

import React from "react";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../AnimatedSection";
import Image from "next/image";
const achievements = [
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnASZ9BEKu4hUZVVyW3AwxQictINHqswS0EbF-LA4vQnY-Oze",
    count: 250000,
    label: "Students Guided",
  },
  {
    icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2TeWt2WLV3N4x_SOF7_T_9gvMD78S1SDkz_MMv2TSBou5YUvV",
    count: 120,
    label: "Admission in Top Colleges",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexoxRRVtRJwjk3RSTl0_KqWt1SoKSvCwA0ZC_CjcasR_oem2R",
    count: 40000,
    label: "Scholarships",
  },
  {
    icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsDIToc2NCNgyEKOkCqe0CBv-cZdYU2rr0NqKEPadcLbflczxa",
    count: 250,
    label: "Diverse Careers",
  },
];
export default function Achievment() {
  return (
    <div>
    {/*  */}
    <div className="pt-5  ">
      <h2 className=" text-2xl md:text-[34px] mb-2 font-bold text-center heading-font  text-[#022F46]" style={{fontWeight:"700"}}>
        BRAINWONDERS ACHIEVEMENTS
      </h2>
      <AnimatedSection>
        <div className="flex justify-between flex-row  md:flex-col lg:flex-row flex-wrap">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              count={achievement.count}
              label={achievement.label}
              index={index}
              
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
    {/*  */}
  </div>
  );
}

const AchievementCard = ({ icon, count, label, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className={`bg-white shadow-lg rounded-lg  w-[10rem] md:w-auto flex flex-col lg:flex-row justify-center items-center gap-3  py-3 px-[16px]   my-4
    
      ${
    index === 0 || index === achievements.length - 1 ? "m-0" : ""  
  }
    `}>
      <div className="mb-2 lg:mb-0">
        <Image
          src={icon}
          alt={label}
          className="w-20 h-20 lg:w-16 lg:h-16"
          width={120}
          height={120}
        />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:text-left">
        <h3 className="text-[22px]   heading-font text-black" ref={ref}>
          {count}
        </h3>
        <p className="text-gray-600 text-[15px]">{label}</p>
      </div>
    </div>
  );
};
