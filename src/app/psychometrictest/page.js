'use client'

import React  from "react";
import HeroCarausel from "@/components/PsychometricTest/HeroCarausel";
import PsychometricTestsSection from "@/components/PsychometricTest/PsychometricTestsSection ";
import PsychometricAssessments from "@/components/PsychometricTest/PsychometricAssessments";
import OurService from "@/components/PsychometricTest/OurService";
import PsychometricTestBanner from "@/components/PsychometricTest/PsychometricTestBanner";
import Interview from "@/components/PsychometricTest/Interview";
import SuitablityBanner from "@/components/Home/SuitablityBanner";
import Ebook from "@/components/Home/Ebook";
import WhyChooseBrainwonders from "@/components/PsychometricTest/WhyChooseBrainwonders ";
import Accordion from "@/components/home/Accordion";
import TestimonialCard from "@/components/CareerCounselling/TestimonialCard ";
import PsychometricNavbar from "@/components/PsychometricTest/PsychometricPages/PsychometricNavbar"; 

export default function PsychometricTest() { 
 
  return (
    <>
      {/* <PsychometricNavbar /> */}
      <HeroCarausel />
      <PsychometricTestsSection />
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
        <PsychometricAssessments />
      </div>
      <PsychometricTestBanner />
      <div className="max-w-[1500px] mx-auto overflow-hidden  container-mar">
        <OurService />
      </div>
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <Interview />
      </div>
      <SuitablityBanner />
      <div className="max-w-[1500px] mx-auto overflow-hidden   container-mar">
        <Ebook />
      </div>
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <WhyChooseBrainwonders />
        <TestimonialCard />
      </div>
      <div className="container-mar">

        <Accordion />
      </div>
    </>
  );
}
