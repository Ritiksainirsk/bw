"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import Img1 from '/public/CareerCounsellingAfter12th.webp';
import Img1 from "@/assets/slider-images/CareerCounsellingAfter12th.webp";
import Img2 from "@/assets/slider-images/CareerCounselling.webp";
import Img3 from "@/assets/slider-images/CareerGuidanceAfter10th.webp";
// import Img4 from '@/assets/slider-images/CareerGuidanceForClass8thAnd9thStudents.webp';
import Img5 from "@/assets/slider-images/DMIT.webp";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 left-4 text-black rounded-full z-30 w-20`}
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 right-4 text-black rounded-full p-2 z-30 lg:mr-16`}
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};

export default function HeroCarousel() {
  const slides = [
    {
      img: Img3,
      title: "CLASS 11th & 12th",
      description:
        "Career Counselling Services for 11th & 12th students contain exploration of career options, colleges, competitive exams and admission assistance",
      btntext: "Ask our Experts",
    },
    {
      img: Img1,
      title: "College Students",
      description:
        "Career guidance with a certified career counsellor will give College Students a stronger understanding of what they need to do to pursue the right career in the future",
      btntext: "Ask our Experts",
    },
    {
      img: Img5,
      title: "Study Abroad",
      description:
        "We Fulfill Your Dreams to Study Abroad. Choose from 1000s of universities in 100s of countries for a smart education",
      btntext: "Ask our Experts ",
    },
    {
      img: Img2,
      title: "Working Professional",
      description:
        "A career session with a certified career counsellor will give working professionals a strong understanding of job roles & clarity to prosper in their career",
      btntext: "Ask our Experts ",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className="relative w-full">
        <Slider {...settings}>
          {/* Static Slide */}

          {/* Dynamic Slides from Array */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-full h-[324px] md:h-[40vh] lg:h-[60vh]"
            >
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                width={120}
                height={120}
                key={index}
              />
              <div
                className="absolute top-0 text-white h-full   flex flex-col justify-center items-center lg:items-start w-full lg:w-[40%] container-pad gap-5 lg:gap-4h-full"
                key={index}
              >
                <h2
                  className="text-3xl 2xl:text-[40px] leading-[60px] heading-font text-shadow text-center lg:text-start"
                  style={{ fontWeight: "700" }}
                >
                  {slide.title}
                </h2>
                <p
                  className="lg:mt-2 2xl:text-[17px] text-sm leading-7 text-center lg:text-left"
                  style={{ fontWeight: "500" }}
                >
                  {slide.description}
                </p>
                <button className="bg-[#F23E36] lg:p-2 leading-7 rounded-lg w-auto md:w-full lg:w-[23rem] font-medium px-2">
                  {slide.btntext}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
