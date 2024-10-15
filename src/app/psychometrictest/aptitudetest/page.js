'use client'

import React from "react";
import HeroCarausel from "@/components/PsychometricTest/HeroCarausel";
import PsychometricTestsSection from "@/components/PsychometricTest/PsychometricTestsSection ";
import PsychometricAssessments from "@/components/PsychometricTest/PsychometricAssessments";
import OurService from "@/components/PsychometricTest/OurService";
import PsychometricTestBanner from "@/components/PsychometricTest/PsychometricTestBanner";
import Interview from "@/components/PsychometricTest/Interview";
import SuitablityBanner from "@/components/Home/SuitablityBanner";
import Ebook from "@/components/Home/Ebook";
import WhyChooseBrainwonders from "@/components/PsychometricTest/WhyChooseBrainwonders ";
import Accordion from "@/components/PsychometricTest/Accordion";
import TestimonialCard from "@/components/CareerCounselling/TestimonialCard ";
import PsychometricNavbar from "@/components/PsychometricTest/PsychometricPages/PsychometricNavbar";
// import { useLocation } from "react-router-dom";

export default function PsychometricTest() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [pathname]);

  return (
    <>
      <PsychometricNavbar />
      <HeroCarausel />
    <PsychometricTestsSection />
        <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PsychometricAssessments />
      </div>
    <PsychometricTestBanner />
       <div className="max-w-[1500px] mx-auto overflow-hidden">
        <OurService />
        <Interview />
      </div>
    <SuitablityBanner />
       <div className="max-w-[1500px] mx-auto overflow-hidden">
           {/* <Ebook /> */}
        <WhyChooseBrainwonders />
        <TestimonialCard />
        <Accordion />
           
      </div>
    </>
  );
}
