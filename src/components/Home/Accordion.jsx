"use client";

import React, { useState } from "react";
import AnimatedSection from "../AnimatedSection";

export default function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  const faqData = [
    {
      question: "What is Dermatoglyphics?",
      answer:
        "Dermatoglyphics is the scientific study of fingerprints, lines, mounts and shapes of hands, as distinct from the superficially similar pseudoscience of palmistry. Dermatoglyphics also refers to the making of naturally occurring ridges on certain body parts, namely palms, fingers, soles, and toes.",
    },
    {
      question: "Can the Dermatoglyphics test help me?",
      answer:
        "Dermatoglyphics tests can help us understand people that are being tested the following five items: first, the structure of the superior order of brain function; second, learning how to operate a keen ability; third, visual, auditory, somatosensory learning the proper channels; Fourth, learning and education.",
    },
    {
      question: "Is Dermatoglyphics testing scientific or Medical basic?",
      answer:
        "Dermatoglyphics multiple intelligences test is scientifically proven. Besides, the data acquisition process is computerized. Therefore, we can achieve an accuracy of more than 90%. Striae formation and formation of brain are synchronized with the foetus in the mother's body in first 13 weeks to 19 weeks.",
    },
    {
      question: "Is Dermatoglyphics testing palm Reading or palmistry?",
      answer:
        "Dermatoglyphics (from Ancient Greek derma, 'skin', and glyph, 'carving') is the scientific study of fingerprints, lines, mounts and shapes of hands, as distinct from the superficially similar pseudoscience of palmistry.",
    },
    {
      question: "Is the Dermatoglyphics test not an IQ test?",
      answer:
        "Dermatoglyphics test is not an IQ test, where DMIT is an intelligent narrowing definition of striae test of multiple intelligences include linguistic intelligence, logical and mathematical intelligence, spatial intelligence, body - kinesthetic intelligence, musical intelligence, interpersonal intelligence.",
    },
    {
      question: "What specific help can be given?",
      answer:
        "Show appreciation, publicly. Praising someone on a blog, in front of coworkers, in front of family, or in some other public way, is a great way to make them feel better about themselves. Donate food. Clean out your cupboard of canned goods, or buy a couple bags of groceries, and donate them to a homeless shelter.",
    },
    {
      question:
        "How accurate is the dermatoglyphics multiple intelligences test?",
      answer:
        "The Indian Psychiatric Society said in a 'position statement' that the dermatoglyphics multiple intelligence test (DMIT) is 'not based on scientific evidence' and is 'not useful for intelligence testing, brain lobe function testing, or predicting future behaviour.'",
    },
    {
      question: "How will a Dermatoglyphics Assessments benefit Me?",
      answer:
        "Dermatoglyphics tests can help us understand people that are being tested the following five items: first, the structure of the superior order of brain function; second, learning how to operate a keen ability; third, visual, auditory, somatosensory learning the proper channels; Fourth, learning and education.",
    },
  ];

  return (
    <div className=" mb-14 text-left  ">
      <h2
        className="text-2xl lg:text-[34px] font-semibold text-center mb-6 heading-font text-[#022F46] mt-5 "
        style={{ fontWeight: "700" }}
      >
        Frequently Asked Questions
      </h2>
      <div className="join join-vertical w-full ">
        <div className="w-full ">
          <div className=" ">
            <div className="mb-6 lg:mb-16"></div>
            <div className="accordion-group px-5">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion py-8 border-b border-solid border-gray-200 ${
                    activeAccordion === index ? "active" : ""
                  }`}
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h5 className="text-left md:text-center">{faq.question}</h5>
                    <svg
                      className={`text-gray-900 transition duration-500 group-hover:text-indigo-600 ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500 mt-4 ${
                      activeAccordion === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="text-base text-gray-500 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
