"use client";
import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const LearnMore = () => {
  return (
    <>
      <Link
        href="/"
        className="group flex items-center w-fit h-12 sm:h-14 md:h-16 lg:h-[70px] rounded-b-full rounded-r-full bg-blue-400 hover:bg-[#00111A] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl mb-8 sm:mb-10 md:mb-12 lg:mb-10 xl:mb-16 2xl:mb-20"
      >
        <div className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-5 lg:py-5 flex items-center justify-center h-full">
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white whitespace-nowrap">
            Learn More
          </span>
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[65px] lg:h-[65px] flex items-center justify-center rounded-full bg-white transition-colors duration-300 mr-1 sm:mr-1 md:mr-1 lg:mr-1">
          <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-blue-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </Link>
    </>
  );
};

export default LearnMore;
