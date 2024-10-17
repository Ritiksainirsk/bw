import React, { useEffect } from 'react';
import AnimatedSection from '../AnimatedSection';

const BannerCard = () => {

  return (
    <AnimatedSection> 
    <div className="bg-[#022F46]  text-center container-pad py-8" >
      <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-2 heading-font" style={{fontWeight:"600"}}>Take the first step towards career clarity!</h3>
      <p className="text-white mb-6">Discover your best-fit career with the world’s most-advanced career assessment</p>
      <div className="flex flex-wrap justify-center  gap-5">
        <input
          type="text"
          placeholder="Name"
          className="w-40 px-3 py-2  rounded-full focus:outline-none"
        />
        <input
          type="text"
          placeholder="Contact"
          className="w-40 px-3 py-2  rounded-full focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email Id"
          className="w-40 px-3 py-2  rounded-full focus:outline-none"
        />
        <input
          type="text"
          placeholder="City"
          className="w-40 px-3 py-2  rounded-full focus:outline-none"
        />
        <button className="w-40 px-3 py-2 bg-green-700 text-white rounded-full focus:outline-none">
          Submit
        </button>
      </div>
    </div>
    </AnimatedSection>
  );
};

export default BannerCard;
