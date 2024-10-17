'use client'

import React, { useEffect } from "react"; 
import ContactUsHeader from "../../Components/FooterPagesComp/ContactUs/ContactUsHeader";
import FormSection from "../../Components/FooterPagesComp/ContactUs/FormSection";
import ReviewSection from "../../Components/FooterPagesComp/ContactUs/ReviewSection";
import MapSection from "../../Components/FooterPagesComp/ContactUs/MapSection";
import LastSection from "../../Components/FooterPagesComp/ContactUs/LastSection";

export default function ContactUs() {
 

  return (
    <div>
      <ContactUsHeader />
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
        <FormSection />
        <ReviewSection/>
        <MapSection/>
        <LastSection/>
      </div>
    </div>
  );
}
