import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function PsychometricTestBanner() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div data-aos="fade-up" className="bg-[#070954] text-white  flex flex-col lg:gap-20 md:flex-row items-center justify-between my-5 container-pad py-8">
        <div className="md:w-3/4 ">
          <h3 className="text-3xl lg:text-4xl font-bold heading-font">
            Not sure if career counselling is right for you?
          </h3>
          <p className="mt-4 text-lg lg:text-xl">
            Book a Career Brainstorm Session to explore your options with a
            counsellor before opting for the full career guidance solution.
          </p>
          <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl">
            KNOW MORE
          </button>
        </div>
        <div className="md:w-1/4 mt-8 md:mt-0 flex justify-center md:justify-end ">
          <Image
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT91vdIdPgbz4fG5KA8VRyi5GTzTCdQa_dJxGx-VJsd2zhjlZtH"
            alt="Career Counselling"
            className="w-full h-auto rounded-[7rem]"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
