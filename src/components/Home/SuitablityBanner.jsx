import React, { useEffect } from "react";
import Img from '@/assets/Curious about how it works/Check Career Suitability.webp'
import Image from "next/image";


export default function SuitablityBanner() {

  return (
    <div>
      <div className="bg-[#022F46]   text-white py-8 flex flex-col md:flex-row justify-between items-center mx-auto mb-14 container-pad">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="lg:text-[34px] font-bold mb-4 heading-font"style={{fontWeight:"700"}}>
            Check Career Suitability for your Dream Career
          </h2>
          <p className="mb-4 text-[17px]" style={{fontWeight:"500"}}>
            Take Informed Career Decisions. Check Career Fit for your Dream
            Career
          </p>

          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="SEARCH YOUR CAREER"
              className="w-full p-2 pl-10 pr-16 rounded-full text-black bg-white"
            />
            <div className="absolute w-10 left-1 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-6 6m2-10a7 7 0 1114 0 7 7 0 01-14 0z"
                />
              </svg>
            </div>
            <button className="absolute right-0 top-0 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>

          <h3 className="font-bold mb-2 heading-font">
            MOST SEARCHABLE SUITABLE CHECK
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Medical Science",
              "Legal Services",
              "Software Engineering",
              "Interior Design",
              "Architect",
              "Digital Marketing",
              "Financial Analyst",
              "Entrepreneurship",
              "Government Services",
            ].map((career, index) => (
              <button
                key={index}
                className="bg-gray-300 text-black py-1 px-2 rounded-full"
              >
                {career}
              </button>
            ))}
            <div className="text-gray-400 pt-1 cursor-pointer">
              View More &raquo;
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[30%] flex flex-col items-center mt-8 md:mt-0">
          <Image
            src={Img}
            alt="Career Suitability"
            className="lg:w-72 h-auto mb-4"
            width={120}
            height={120}
          />
          <h3 className="font-bold pb-3">Check your career Suitability Now</h3>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
}
