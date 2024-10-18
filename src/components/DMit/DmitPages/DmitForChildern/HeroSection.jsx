import React from "react";
import Image from 'next/image'
import img from "@/assets/Childholdingbooks.webp"
 
export default function HeroSection() {
  return (
    <div>
      <div className="bg-[#E3F2FB] py-8 md:py-10   rounded-lg flex flex-col md:flex-row items-center justify-around container-pad">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl 2xl:text-[40px] text-gray-800  mb-4 md:flex md:flex-col md:gap-2" style={{fontWeight:"700"}}>
            Are you ready for
            <span className="text-[#043E56]">your childs success story?</span>
          </h1>
          <p className="md:mt-4 text-black text-lg md:text-[16px] md:flex md:flex-col">
            With Our DMIT Test, Understand your Childs
            capabilities & plan her future accordingly
          </p>
          <button className="mt-4 bg-[#043E56] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#032F42] transition">
            Get Your DMIT Test now
          </button>
        </div>

        {/* Right Section */}
        <div className=" mt-8 md:mt-0 relative">
          <Image
            src={img} /* Replace with actual image URL */
            alt="Child holding books"
            className="w-[450px] h-full rounded-md shadow-lg"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
