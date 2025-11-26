"use client";
import Link from "next/link";
import { footerLinks, socialLinks } from "@/src/constant/Constant";
import Loading from "@/src/components/loading";

const Footer = () => {
  return (
    <footer className="bg-[#0B2138] text-white">
      {/* 4 Columns Section */}
      <div className="container mx-auto py-5 px-10 max-[640px]:px-4 sm:px-4 md:px-6 xl:px-14 2xl:px-20 grid grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-10 2xl:gap-12 mb-10">
        {/* Column 1 - Main */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg max-[640px]:text-md lg:text-lg xl:text-xl 2xl:text-xl font-bold mb-2 max-[640px]:mb-1 lg:mb-3 xl:mb-3 2xl:mb-3 opacity-70">
            Main
          </h3>
          <ul className="space-y-3 max-[640px]:space-y-2 lg:space-y-6 xl:space-y-8 2xl:space-y-8">
            {footerLinks.Main.map((link) => (
              <>
                <Loading />
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-md max-[640px]:text-sm lg:text-md xl:text-lg 2xl:text-lg opacity-80 font-bold hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>

        {/* Column 2 - Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg max-[640px]:text-md lg:text-lg xl:text-xl 2xl:text-xl font-bold mb-2 max-[640px]:mb-1 lg:mb-3 xl:mb-3 2xl:mb-3 opacity-70">
            Services
          </h3>
          <ul className="space-y-3 max-[640px]:space-y-2 lg:space-y-6 xl:space-y-8 2xl:space-y-8">
            {footerLinks.Services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 text-md max-[640px]:text-sm lg:text-md xl:text-lg 2xl:text-lg opacity-80 font-bold hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Focus */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg max-[640px]:text-md lg:text-lg xl:text-xl 2xl:text-xl font-bold mb-2 max-[640px]:mb-1 lg:mb-3 xl:mb-3 2xl:mb-3 opacity-70">
            Focus
          </h3>
          <ul className="space-y-3 max-[640px]:space-y-2 lg:space-y-6 xl:space-y-8 2xl:space-y-8">
            {footerLinks.Focus.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 text-md max-[640px]:text-sm lg:text-md xl:text-lg 2xl:text-lg opacity-80 font-bold hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Industries */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg max-[640px]:text-md lg:text-lg xl:text-xl 2xl:text-xl font-bold mb-2 max-[640px]:mb-1 lg:mb-3 xl:mb-3 2xl:mb-3 opacity-70">
            Industries
          </h3>
          <ul className="space-y-3 max-[640px]:space-y-2 lg:space-y-6 xl:space-y-8 2xl:space-y-8">
            {footerLinks.Industries.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 text-md max-[640px]:text-sm lg:text-md xl:text-lg 2xl:text-lg opacity-80 font-bold hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex bg-amber-400 justify-between w-100dvw text-gray-300 text-sm opacity-80 font-bold">
          <div className="max-w-[500px">
            © 2011 - 2025 Crafted. All Rights Reserved.
          </div>
          <div className="">Designed in NYC & Developed in Miami. ;</div>
        </div> */}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-6 text-sm sm:text-base md:text-lg font-bold opacity-70 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center sm:text-left">
          © 2011 - 2025 Crafted. All Rights Reserved.
        </div>
        <div className="text-center sm:text-right">
          Designed in NYC & Developed in Miami.
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center bg-[#001018] h-[80px]">
        {/* Legal Links */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-1 lg:mt-0 xl:mt-0 2xl:mt-0 3xl:mt-0 text-lg text-blue-400 font-bold pl-10">
          <Link
            href="/sitemap"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Site Map
          </Link>
          <Link
            href="/privacy"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex h-10 max-[640px]:h-10 lg:h-20 xl:h-20 2xl:h-20 3xl:h-20 bg-blue-600 gap-13 mt-2 max-[640px]:mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 3xl:mt-0 items-center px-10 w-full max-w-[640px]:w-full lg:w-[500px] xl:w-[600px] 2xl:w-[700px] justify-center">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                <Icon className="w-7 h-7 hover:scale-110 transition-transform text-black duration-300" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
