
import React from "react";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import AboutUsVideoSection from "@/components/AboutUs/AboutUsVideoSection";
import OurTeam from "@/components/AboutUs/OurTeam";
import TeamMembers from "@/components/AboutUs/TeamMemebers";
import Achievment from "@/components/Home/Achievment";
import AwardWinners from "@/components/DMit/AwardWinners";
import PartnersVideoCard from "@/components/Home/PartnersVideoCard";
import TestimonialCard from "@/components/CareerCounselling/TestimonialCard ";
import Accordion from "@/components/Home/Accordion"; 

export default function AboutUs() {
 

  return (
    <div>
      <AboutUsHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AboutUsVideoSection />
        <OurTeam />
        <TeamMembers />
       <Achievment />
       <AwardWinners />
        <PartnersVideoCard />
         <TestimonialCard />
        <Accordion />  
      </div>
    </div>
  );
}
