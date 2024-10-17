'use client'
import React, { useEffect } from "react";
import CareerCounsellingHero from "@/components/CareerCounselling/CareerCounsellingHero";
import CareerGuidance from "@/components/CareerCounselling/CareerGuidance";
import GuidingSteps from "@/components/CareerCounselling/GuidingSteps";
import BannerCardOfCareer from "@/components/CareerCounselling/BannerCardOfCareer";
import ImportanceOfCareerCounselling from "@/components/CareerCounselling/ImportanceOfCareerCounselling";
import MIddleImageBanner from "@/components/CareerCounselling/MIddleImageBanner";
import PartnersVideoCard from "@/components/Home/PartnersVideoCard";
import AwardRecognition from "@/components/Home/AwardRecognition";
import TestimonialCard from "@/components/CareerCounselling/TestimonialCard ";
import Accordion from "@/components/Home/Accordion"; 
import TestsCard from "@/components/Home/TestsCard";
import CareerCounselingExpectations from "@/components/CareerCounselling/CareerCounselingExpectations";
import HowItWorks from "@/components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/HowItWorks";

// images
import Img1 from '@/assets/Curious about how it works/Assessment.webp'
import Img2 from '@/assets/Curious about how it works/Guidance.webp'
import Img3 from '@/assets/Curious about how it works/Strategizing.webp'
import Editor from "@/components/Admin/editableComponents/Editor";
import BannerCard from "@/components/DMit/BannerCard";
import Services from "@/components/Home/Services";
import SlideSec from "@/components/common/slideSec";

export default function CareerCounselling() {
 

  const benefits = [
    {
      title: "Provides Clarity and Direction",
      description:
        "Career counselling helps individuals understand their strengths, interests, and skills, providing clear direction in choosing a career path that suits them."
    },
    {
      title: "Informed Career Choices",
      description:
        "Through expert advice on education, career options, and job market trends, career counselling enables individuals to make well-informed decisions that align with their goals."
    },
    {
      title: "Exploration of Career Options",
      description:
        "Career counselling introduces individuals to a wide variety of career options, including emerging fields, helping them find the right fit for their interests and abilities."
    },
    {
      title: "Personalized Career Guidance",
      description:
        "By considering personal aptitudes, interests, and values, career counsellors provide tailored advice that aligns with individual aspirations, ensuring satisfaction and success."
    },
    {
      title: "Skill Development and Competence",
      description:
        "Career counsellors guide individuals in identifying and developing the necessary skills for their chosen careers, enhancing employability and adaptability."
    },
    {
      title: "Confidence and Long-Term Planning",
      description:
        "Career counselling boosts confidence by helping individuals create structured, long-term career plans and offering continuous support throughout their journey."
    }
  ];
    // Content array including title and description for the component
    const content = {
      title: "Curious about how it works?",
      description: `Discover how Brainwonders has empowered over 4.3 lakhs+ individuals and collaborated with 1220+ top schools across the country to help them become #CareerReady.`,
      steps: [
        {
          step: "STEP - 1",
          title: "Take the Brainwonders DMIT test for career assessment",
          description: `DMIT Dermatoglyphics Multiple Intelligence test (DMIT) is the latest
            and most trending way of mapping a person's brain. In DMIT, the
            fingerprints of the client are taken using a scanner, and then a
            report is generated that gives complete details of the client's
            personality, strengths, weaknesses and potential. Research suggests
            85% accuracy for this approach. It is considered more effective than
            any psychometric test. Counselling done on the basis of fingerprint
            reports gives a clearer picture to the students to choose a career
            option based on their abilities and skill sets. In India, Brainwonders
            is the largest DMIT and career counselling centre, with 108 branches
            all across the country.`,
          imgSrc: Img1,
          imgAlt: "Evaluation",
        },
        {
          step: "STEP - 2",
          title: "1-on-1 career counselling",
          description: `Brainwonders ' 1-on-1 career counselling aims to help individuals
            comprehend their strengths, talents, and interests, enabling them to
            set achievable goals and develop valuable skill sets for their
            chosen career paths. Individuals can make counselling decisions
            about their careers by engaging in this counselling session,
            enhancing their chances of success and fulfilment in their
            professional lives.`,
          imgSrc: Img2,
          imgAlt: "Guidance",
        },
        {
          step: "STEP - 3",
          title: "Gain insights from industry experts",
          description: `Our team helps you understand your strengths and goals. Whether you
            're starting or looking to grow, we offer personalized tips to help
            you succeed. Our knowledge of different industries guides you
            towards the right path. Trust us to support you in making
            intelligent career choices and reaching your potential.`,
          imgSrc: Img3,
          imgAlt: "Strategizing",
        },
      ],
    };
  
    const cards = [
      {
        title: "Career Guidance for class 8th and 9th",
        description: "Find the perfect career pathway that's just right for you",
        buttonText: "Explore Now",
        icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/straight.webp",
        iconColor: "#FFD772",
        url:"/career-guidance-for-class-8th-and-9th-student"
      },
      {
        title: "Career Guidance After 10th",
        description:
          "Helps you to identify your Personality, Areas of Interest and Aptitude Level.",
        buttonText: "Know Yourself Better",
        icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/evaluation.webp",
        iconColor: "#9BC9FF",
        url:'career-guidance-after-10th'
      },
      {
        title: "Career Guidance after 12th",
        description:
          "Interact with Real Counselors, not Bots. Get answers for your quick career-related questions.",
        buttonText: "Professional Guidance",
        icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/help-1.webp",
        iconColor: "#FFB1CC",
        url:'career-guidance-after-12th'
      },
      {
        title: "Career Guidance after graduation",
        description:
          "We’ll help you choose the perfect college fit in India or Abroad.",
        buttonText: "India or Abroad",
        icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/graduate.webp",
        iconColor: "#C8BBFF",
        url:'career-guidance-after-graduation'
      },
    ];

  return (
    <>
      <div>
        <CareerCounsellingHero />
        {/* <div className="max-w-[1500px] mx-auto overflow-hidden container-mar"> */}
          {/* <CareerGuidance /> */}
          {/* <GuidingSteps /> */}
        {/* </div> */}
        <BannerCardOfCareer />
        {/* <BannerCard/> */}
          <TestsCard cardData={benefits} />
        <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
          <CareerCounselingExpectations/>
       <HowItWorks data={content}/>
       </div>
        <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
            <ImportanceOfCareerCounselling />
          {/* <MIddleImageBanner />   */} 
          <SlideSec title='   Paving a path for your Bright future' data1={cards}/> 
        </div>
          <BannerCardOfCareer />
        <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
         <PartnersVideoCard />
          <AwardRecognition />
          
        </div>
        <div className=" max-w-[1500px] mx-auto overflow-hidden">
            
          <TestimonialCard />
        </div>
        <div className=" max-w-[1500px] mx-auto overflow-hidden container-mar">
         <Accordion />  
          {/* <Editor/> */}
        </div>
      </div>
    </>
  );
}
