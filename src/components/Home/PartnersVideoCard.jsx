"use client";
import React, { useRef, useState } from "react";
import AnimatedSection from "../AnimatedSection";
import Image from "next/image";

export default function PartnersVideoCard() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div className="px-5">
      <PartnerSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

const PartnerCard = ({ video, title, description, btcolor, id, thumbnail }) => {
  const iframeRef = useRef(null);

  const handleDialogClose = () => {
    iframeRef.current.src = ""; // Remove the src attribute to stop the video
  };

  const handleDialogOpen = () => {
    iframeRef.current.src = video; // Restore the src attribute to start the video
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105  mx-auto">
      {/* <Image className="w-full h-52" src={video} alt={title}  width={120} height={120}  /> */}
      <iframe
        // width={}
        //  height={120}
        className="w-full h-64"
        src={video} // Replace with the actual video ID
        title={title}
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
      ></iframe>
      <div className="flex">
        <div className="p-4">
          <h3 className="text-xl text-start heading-font font-bold text-black">
            {title}
          </h3>
          <p className="text-black mt-2 text-start ">{description}</p>
        </div>
        <div className="p-4 pt-10">
          <button
            style={{ background: btcolor }}
            className="btn rounded-full text-white p-4 w-14 border-none"
            onClick={() => {
              handleDialogOpen();
              document.getElementById(`modal_${id}`).showModal();
            }}
          >
            ▶
          </button>
          <dialog
            id={`modal_${id}`}
            className="modal"
            onClose={handleDialogClose}
          >
            <div className="modal-box p-0 w-[40vw]">
              <iframe
                ref={iframeRef}
                className="w-full h-80"
                src=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              ></iframe>
              <form method="dialog" className="modal-backdrop">
                <button className="btn btn-sm btn-circle btn-ghost rounded-full absolute right-2 top-2 text-black p-1 font-bold bg-white">
                  ✕
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

const PartnerSection = ({ selectedCategory, setSelectedCategory }) => (
  <div className="py-16 text-center w-full">
    <h2
      className="text-3xl md:text-[34px] font-bold mb-2 heading-font text-[#022F46]"
      style={{ fontWeight: "700" }}
    >
      What Our Partners Say About Us
    </h2>
    <p className="mb-8 md:text-[17px] text-black" style={{ fontWeight: "500" }}>
      Watch People from Different Backgrounds talk about their experience with
      Brainwonders.
    </p>

    {/* Category Selection */}
    <div className="bg-navblue p-[11px] rounded-[32px] my-10px flex justify-center my-[30px]">
      <div className="w-[50%] flex flex-col gap-[9px] md:flex-row md:w-[90%] md:justify-evenly">
        {/* Category 1: Parents Testimony */}
        <div
          className={`md:px-[15px] py-[6px] rounded-[11px] cursor-pointer ${
            selectedCategory === 1 ? "bg-white" : ""
          }`}
          onClick={() => setSelectedCategory(1)}
        >
          <p
            className={`font-semibold ${
              selectedCategory === 1 ? "text-navblue" : "text-white"
            }`}
          >
            Parents Testimony
          </p>
        </div>

        {/* Category 2: About Brainwonders */}
        <div
          className={`md:px-[15px] py-[6px] rounded-[11px] cursor-pointer ${
            selectedCategory === 2 ? "bg-white" : ""
          }`}
          onClick={() => setSelectedCategory(2)}
        >
          <p
            className={`font-semibold ${
              selectedCategory === 2 ? "text-navblue" : "text-white"
            }`}
          >
            About Brainwonders
          </p>
        </div>

        {/* Category 3: Educator Testimony */}
        <div
          className={`md:px-[15px] py-[6px] rounded-[11px] cursor-pointer ${
            selectedCategory === 3 ? "bg-white" : ""
          }`}
          onClick={() => setSelectedCategory(3)}
        >
          <p
            className={`font-semibold ${
              selectedCategory === 3 ? "text-navblue" : "text-white"
            }`}
          >
            Educator Testimony
          </p>
        </div>
      </div>
    </div>

    {/* Display Partner Cards */}
    <AnimatedSection>
      {selectedCategory == 1 && (
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-6">
          <PartnerCard
            video="https://www.youtube.com/embed/4wxwS28Khl4"
            thumbnail="https://www.univariety.com/home/images/schools.png"
            title="Schools"
            description="Vouch for us for our world-class counselling services"
            btcolor="#2ebaf6f7"
            id="1"
          />
          <PartnerCard
            video="https://www.youtube.com/embed/gwjpgiFV_BY"
            thumbnail="https://www.univariety.com/home/images/universities.png"
            title="Universities"
            description="Partner with us for our unique services"
            btcolor="#5730f4"
            id="2"
          />
          <PartnerCard
            video="https://www.youtube.com/embed/cfxfgYoy_qQ"
            thumbnail="https://www.univariety.com/home/images/counsellors.png"
            title="Counsellors"
            description="Collaborate with us for career transformations"
            btcolor="#f66231"
            id="3"
          />
        </div>
      )}

      {selectedCategory == 2 && (
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-6">
          <PartnerCard
            video="https://www.youtube.com/embed/cfxfgYoy_qQ"
            thumbnail="https://www.univariety.com/home/images/counsellors.png"
            title="Counsellors"
            description="Collaborate with us for career transformations"
            btcolor="#f66231"
            id="3"
          />
          <PartnerCard
            video="https://www.youtube.com/embed/4wxwS28Khl4"
            thumbnail="https://www.univariety.com/home/images/schools.png"
            title="Schools"
            description="Vouch for us for our world-class counselling services"
            btcolor="#2ebaf6f7"
            id="1"
          />
          <PartnerCard
            video="https://www.youtube.com/embed/gwjpgiFV_BY"
            thumbnail="https://www.univariety.com/home/images/universities.png"
            title="Universities"
            description="Partner with us for our unique services"
            btcolor="#5730f4"
            id="2"
          />
        </div>
      )}

      {selectedCategory == 3 && (
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-6">
          <PartnerCard
            video="https://www.youtube.com/embed/gwjpgiFV_BY"
            thumbnail="https://www.univariety.com/home/images/universities.png"
            title="Universities"
            description="Partner with us for our unique services"
            btcolor="#5730f4"
            id="2"
          />
          <PartnerCard
            video="https://www.youtube.com/embed/cfxfgYoy_qQ"
            thumbnail="https://www.univariety.com/home/images/counsellors.png"
            title="Counsellors"
            description="Collaborate with us for career transformations"
            btcolor="#f66231"
            id="3"
          />
          <PartnerCard
            video="https://www.youtube.com/embed/4wxwS28Khl4"
            thumbnail="https://www.univariety.com/home/images/schools.png"
            title="Schools"
            description="Vouch for us for our world-class counselling services"
            btcolor="#2ebaf6f7"
            id="1"
          />
        </div>
      )}
    </AnimatedSection>
  </div>
);
