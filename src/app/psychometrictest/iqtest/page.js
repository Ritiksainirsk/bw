'use client'

import React from "react";
import IqTestHero from "@/components/PsychometricTest/PsychometricPages/IqTest/IqTestHero";
import PsychometricNavbar from "@/components/PsychometricTest/PsychometricPages/PsychometricNavbar";
import AwardRecognition from "@/components/Home/AwardRecognition";
import LoginAndStatsBanner from "@/components/PsychometricTest/PsychometricPages/AptitudeTest/LoginAndStatsBanner";
import IqTestVideoSection from "@/components/PsychometricTest/PsychometricPages/IqTest/IqTestVideoSection";
import IqTestGuide from "@/components/PsychometricTest/PsychometricPages/IqTest/IqTestGuide";
import IQTestMeasure from "@/components/PsychometricTest/PsychometricPages/IqTest/IQTestMeasure";
import BannerCard from "@/components/DMit/BannerCard";
import PricingCard from "@/components/PsychometricTest/PsychometricPages/AptitudeTest/PricingCard";
import PartnersVideoCard from "@/components/Home/PartnersVideoCard";
import AwardWinners from "@/components/DMit/AwardWinners";
import TestimonialCard from "@/components/CareerCounselling/TestimonialCard ";
import Accordion from "@/components/Home/Accordion";

export default function IqTest() {
  return (
    <div>
      {/* <PsychometricNavbar /> */}
      <IqTestHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar ">
        <AwardRecognition /> 
        </div>
      <LoginAndStatsBanner /> 
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar ">
        <IqTestVideoSection />
        <IqTestGuide /> 
        </div>
      <IQTestMeasure />
      <BannerCard /> 
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar ">
        <PricingCard />
        <PartnersVideoCard/>
        <AwardWinners/>
        <TestimonialCard/>
        <Accordion/>
      </div>
    </div>
  );
}
