'use client'
import React, { useEffect } from "react";
import InterestTestHero from "@/components/InterestTest/InterestTestHero";
import AwardRecognition from "@/components/Home/AwardRecognition";
import LoginAndStatsBanner from "@/components/PsychometricTest/PsychometricPages/AptitudeTest/LoginAndStatsBanner";
import InterestVideoSection from "@/components/InterestTest/InterestVideoSection";
import InteresrTestMiddleSection from "@/components/InterestTest/InteresrTestMiddleSection";
import BannerCard from "@/components/DMit/BannerCard";
import InterestTestCareer from "@/components/InterestTest/InterestTestCareer";
import PartnersVideoCard from "@/components/Home/PartnersVideoCard";
import AwardWinners from "@/components/DMit/AwardWinners";
import TestimonialCard from "@/components/CareerCounselling/TestimonialCard ";
import Accordion from "@/components/Home/Accordion"; 

export default function InterestTest() {
   

  return (
    <div>
      <InterestTestHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
        <AwardRecognition />
      </div>
      <LoginAndStatsBanner />
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
        <InterestVideoSection />
        <InteresrTestMiddleSection />
      </div>
      <BannerCard />
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
        <InterestTestCareer />
      </div>
      <BannerCard />
      <div className="max-w-[1500px] mx-auto overflow-hidden  container-mar">
        <PartnersVideoCard />
        <AwardWinners />
        <TestimonialCard />
        <Accordion />
      </div>
    </div>
  );
}
