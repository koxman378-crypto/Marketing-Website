"use client";
import { navLinks } from "@/src/constant/Constant";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NavTitle = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const originalTopRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (originalTopRef.current === 0) {
          originalTopRef.current = navRef.current.offsetTop;
        }
        const scrollY = window.scrollY || window.pageYOffset;
        setIsFixed(scrollY >= originalTopRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isFixed && <div className="h-[100px]" />}
      <nav
        ref={navRef}
        className={`flex w-full text-white justify-center items-center bg-[#081626] text-xl max-[640px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl font-bold ${
          isFixed ? "fixed top-0 left-0 right-0 z-40" : "relative"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="w-1/4 flex items-center justify-center h-[100px] border-r border-gray-600 hover:bg-blue-400 hover:text-[#081626] transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavTitle;
