"use client";

import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

// NavItem Component
export const NavItem = ({ to, children, setActivePage, activePage }) => {
  return (
    <Link
      href={to}
      onClick={() => {
        setActivePage(to);
      }}
      className={`py-[8px] px-[6px] 2xl:px-[10px] 2xl:py-[12px] rounded ${
        activePage === to ? "bg-[#022F46] text-white" : "text-[#022F46]"
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [activePage, setActivePage] = useState(""); // Initialize with an empty string

  // Ensure `activePage` is set only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePage(window.location.pathname); // Access window safely inside useEffect
    }
  }, []);

  // Dropdown menu state
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Sticky navbar state
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Adjust this value as needed
      setIsFixed(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white py-[12px] w-full shadow-lg ${
        isFixed ? "fixed z-50" : ""
      }`}
    >
      <nav className="justify-between text-[12px] 2xl:px-24 lg:text-[13px] xl:text-[14px] 2xl:text-lg flex items-center gap-x-20 md:gap-x-10 xl:gap-x-8 lg:min-h-[50px] container-mar">
        <div className="md:w-[240px] flex flex-col w-full">
          <a href="/">
            <Image
              src="https://www.brainwonders.in/images/logo.webp"
              sizes="(max-width: 570px) 100vw, 570px"
              alt="brainwonders"
              width="570"
              height="92"
            />
          </a>

          {/* Dropdown Menu for Mobile */}
          <div className="mt-2 flex flex-row justify-between dropdown dropdown-end lg:hidden dropdownMenu sm:absolute sm:right-0 sm:top-0 bg-white">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-white"
              onClick={toggleDropdown}
            >
              <IoMenu className="text-3xl" />
            </div>

            <div className="flex flex-row">
              <div className="sm:hidden flex items-center">
                <button className="bg-[#022F46] text-[10px] rounded-lg h-[22px] md:text-lg 2xl:text-lg text-white px-2 md:py-1 md:px-4">
                  <p>Book an Appointment</p>
                </button>
              </div>
              <div>
                <PiPhoneCallFill className="text-[30px] ml-4" />
              </div>
            </div>
          </div>

          {isOpen && (
            <ul className="dropdown-content menu rounded-box z-[1] w-full p-2 shadow bg-white flex flex-wrap justify-center">
              <NavItem
                to="/dmit"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                DMIT
              </NavItem>
              <NavItem
                to="/careercounselling"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Career Counselling
              </NavItem>
              <NavItem
                to="/psychometrictest"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Psychometric Test
              </NavItem>
              <NavItem
                to="/interesttest"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Interest Test
              </NavItem>
              <NavItem
                to="/franchise"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Franchise
              </NavItem>
              <NavItem
                to="/blog"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Blog
              </NavItem>
            </ul>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden gap-4 text-[16px] lg:flex items-center">
          <ul className="flex">
          <NavItem
              to="/"
              setActivePage={setActivePage}
              activePage={activePage}
            >
              Home
            </NavItem>
            <NavItem
              to="/dmit"
              setActivePage={setActivePage}
              activePage={activePage}
            >
              DMIT
            </NavItem>
            <NavItem
              to="/careercounselling"
              setActivePage={setActivePage}
              activePage={activePage}
            >
              Career Counselling
            </NavItem>
            <NavItem
              to="/psychometrictest"
              setActivePage={setActivePage}
              activePage={activePage}
            >
              Psychometric Test
            </NavItem>
            <NavItem
              to="/interesttest"
              setActivePage={setActivePage}
              activePage={activePage}
            >
              Interest Test
            </NavItem>
            <NavItem
              to="/franchise"
              setActivePage={setActivePage}
              activePage={activePage}
            >
              Franchise
            </NavItem>
            <NavItem
              to="/blog"
              setActivePage={setActivePage}
              activePage={activePage}
            >
              Blog
            </NavItem>
          </ul>

          <button className="bg-[#F7CA01] py-[8px] px-[14px] font-semibold rounded-[50px] text-[16px]">
            Explore
          </button>
        </div>

        <div className="hidden bookanappointmentbtn items-center 2xl:flex gap-1">
          <button className="bg-[#022F46] text-[12px] rounded-lg 2xl:text-sm hidden text-white py-2 px-4 bookanappointmentbtn">
            Book an Appointment
          </button>
          <PiPhoneCallFill className="text-[40px] bounce ml-8" />
        </div>
      </nav>

      {/* WhatsApp Button */}
      <div className="fixed bottom-24 lg:bottom-5 right-5 z-50 cursor-pointer">
        <a
          href="https://api.whatsapp.com/send?phone=919987422220&text=I%20have%20enquiry%20for%20https://www.brainwonders.in//"
          target="_blank"
        >
          <IoLogoWhatsapp className="text-5xl text-[#25D366]" />
        </a>
      </div>

      {/* Signup Banner */}
      <SignupBanner />
    </header>
  );
}

function SignupBanner() {
  return (
    <div className="fixed right-[-253px] xl:top-[380px] top-[650px] transform rotate-[-90deg] origin-bottom-left z-50 hidden md:block">
      <div className="bg-[#022F46] text-white px-4 py-4 rounded-t-lg shadow-lg flex items-center gap-3">
        <MdEmail />
        <p className="text-sm font-semibold">Sign up & Get Rs. 500* OFF</p>
      </div>
    </div>
  );
}
