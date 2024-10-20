import React from "react";
import AnimatedSection from "../AnimatedSection";

const TestsCard = ({cardData}) => {
  
  return (
    <div className="bg-gray-100 py-12 container-pad">
    <div className="w-full mx-auto  ">
      <h2 className="text-2xl lg:text-[34px] font-bold text-center text-gray-900 mb-4">
        Why Choose the DMIT Test?
      </h2>
      <p className="lg:text-[17px] text-center text-gray-600 mb-12" style={{fontWeight:"500"}}>
        Shape Your Career for Boundless Success and Growth
      </p>
      <AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6  ">
        {cardData.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl cursor-pointer shadow-md hover:shadow-xl p-6 duration-300 "
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-700 text-base">{benefit.description}</p>
          </div>
        ))}
      </div>
      </AnimatedSection>
    </div>
  </div>
  );
};

export default TestsCard;
