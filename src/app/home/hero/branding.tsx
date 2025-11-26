import { LuCircleMinus } from "react-icons/lu";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { CgAdd } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";

const Branding = () => {
  return (
    <main className="container mx-auto flex flex-col lg:flex-row px-6 md:px-4 sm:px-2 my-15">
      <section className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
        <div className="flex items-baseline gap-2 sm:gap-3 mb-4">
          <LuCircleMinus className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-bold leading-tight">
            Branding
          </h3>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-10">
            Branding is one of the most crucial aspects of any business, large
            or small. An effective brand can give you a significant edge in
            today's highly competitive market.
          </p>
          <Link
            href="/"
            className="group flex items-center w-fit h-[70px] rounded-b-full rounded-r-full bg-blue-400 hover:bg-[#00111A] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl mb-15 lg:mb-10 xl:mb-18 2xl:mb-20"
          >
            <div className="px-5 py-5 flex items-center justify-center h-full">
              <span className="text-2xl sm:text-lg font-bold text-white">
                Learn More
              </span>
            </div>
            <div className="w-[65px] h-[65px] flex items-center justify-center rounded-full bg-white transition-colors duration-300 mr-1">
              <ArrowRightIcon className="w-5 h-5 text-blue-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
          <div className="mt-6 sm:mt-8 lg:mt-10 space-y-6 sm:space-y-8 lg:space-y-5">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 text-gray-700 group"
            >
              <CgAdd className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 group-hover:rotate-90 transition-transform duration-500" />
              <span className="max-[640px]:text-[25px] sm:text-[30px] md:text-[40px] lg:text-[30px] xl:text-[45px] 2xl:text-[50px] font-medium leading-tight">
                Website Design
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 text-gray-700 group"
            >
              <CgAdd className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 group-hover:rotate-90 transition-transform duration-500" />
              <span className="max-[640px]:text-[25px] sm:text-[30px] md:text-[40px] lg:text-[30px] xl:text-[45px] 2xl:text-[50px] font-medium leading-tight">
                Content Development
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 text-gray-700 group mb-0 sm:mb-5 md:mb-5 lg:mb-0 xl:mb-0 2xl:mb-0"
            >
              <CgAdd className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 group-hover:rotate-90 transition-transform duration-500" />
              <span className="max-[640px]:text-[25px] sm:text-[30px] md:text-[40px] lg:text-[30px] xl:text-[45px] 2xl:text-[50px] font-medium leading-tight">
                Web Development
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-1/2">
        <img
          src="/paper.png"
          alt="paper"
          className="w-full h-auto sm:h-[300px] lg:h-[400px] xl:h-5/6 object-cover rounded-b-2xl"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-5">
          <div className="flex items-baseline gap-2 font-semibold opacity-80">
            <GoDotFill className="w-2 h-2 sm:w-3 sm:h-3 mt-1" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] leading-tight">
              Brand Strategy Development
            </span>
          </div>
          <div className="flex items-baseline gap-2 font-semibold opacity-80">
            <GoDotFill className="w-2 h-2 sm:w-3 sm:h-3 mt-1" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] leading-tight">
              Visual Identity Creation
            </span>
          </div>
          <div className="flex items-baseline gap-2 font-semibold opacity-80">
            <GoDotFill className="w-2 h-2 sm:w-3 sm:h-3 mt-1" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] leading-tight">
              Brand Messaging and Voice
            </span>
          </div>
          <div className="flex items-baseline gap-2 font-semibold opacity-80">
            <GoDotFill className="w-2 h-2 sm:w-3 sm:h-3 mt-1" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] leading-tight">
              Brand Guidelines and Management
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branding;
