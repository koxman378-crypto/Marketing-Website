"use client";
//the whole header nav vd part
import Link from "next/link";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

import Menu from "@/src/components/menuicon";
import { TextGenerateEffect } from "@/src/components/textgenerate";

import { navLinks } from "@/src/constant/Constant";
import NavTitle from "./navtitle";

interface MenuLink {
  name: string;
  href: string;
}

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const words = `These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful but has to feel and function beautifully, too. Crafted to perfection.`;

  // Calculate when to show RotatingText (after TextGenerateEffect finishes)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="px-0 py-0">
        <div className="relative header flex items-center gap-5">
          <div className="header-wrap relative overflow-hidden w-screen h-screen flex items-center justify-center">
            <Link href="video.mp4">
              <video
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
            </Link>
            <div className="absolute top-0 left-0 w-full h-full bg-[#031225]/60 z-10 pointer-events-none"></div>
            <Menu links={navLinks as unknown as MenuLink[]} />

            <div className="w-full p-4 lg:p-6 z-10 h-full flex flex-col justify-center lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
              <div className="flex flex-col items-start mx-auto">
                <div className="border-2 border-black/50 flex items-center justify-center sm:justify-start md:justify-start lg:justify-center xl:justify-center 2xl:justify-center 3xl:justify-center h-[50px] max-w-[200px] hover:border-blue-500 transition-all duration-300">
                  <div className="text-center text-sm lg:text-base font-bold text-gray-700 px-3">
                    Digital Brand Agency
                  </div>
                </div>
                <h1 className="playfair-display text-[60px] max-[640px]:text-[50px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] font-extrabold text-left mb-3">
                  We Make Your
                </h1>
                <h1 className="playfair-display text-white text-[40px] max-[640px]:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-extrabold -mt-5 text-left">
                  Dreams Come True
                </h1>
                <div className="inline-flex flex-wrap items-baseline gap-2">
                  <TextGenerateEffect
                    duration={1.8}
                    filter={false}
                    words={words}
                  />
                </div>

                <Link href="/">
                  <button className="mt-6 w-20 h-20 rounded-full bg-transparent hover:bg-white/20 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 ring-2 ring-blue-600 ring-offset-2">
                    <Play
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                    />
                  </button>
                </Link>
              </div>
              {/* <img
                src="/logo.png"
                alt="logo"
                className="w-30 h-30 object-cover z-0"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <NavTitle />
    </>
  );
}
