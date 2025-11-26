"use client";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Vortex } from "./vortex";

interface MenuLink {
  name: string;
  href: string;
}

interface MenuProps {
  links: MenuLink[];
}

const Menu = ({ links }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`${
          isMenuOpen
            ? "fixed top-[120px] right-0 z-[60] flex items-center gap-0"
            : "absolute top-30 right-0 flex items-center gap-0"
        }`}
      >
        <div className="h-[100px] max-[640px]:h-[100px] lg:h-[150px] xl:h-[150px] 2xl:h-[150px] w-[100px] max-[640px]:w-[100px] lg:w-[150px] xl:w-[150px] 2xl:w-[150px] bg-[#031E32]">
          <Link href="/" className="flex items-center justify-center h-full">
            <h1 className="merienda text-sm max-[640px]:text-sm lg:text-xl xl:text-xl 2xl:text-xl text-white font-bold items-center justify-center">
              MM Social
            </h1>
          </Link>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="bg-[#001018] h-[100px] max-[640px]:h-[100px] lg:h-[150px] xl:h-[1050px] 2xl:h-[150px] w-[100px] max-[640px]:w-[100px] lg:w-[150px] xl:w-[150px] 2xl:w-[150px] transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer z-[70] relative"
          type="button"
        >
          {isMenuOpen ? (
            <X className="w-10 h-10 text-white" />
          ) : (
            <MenuIcon className="w-10 h-10 text-blue-800" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-[#020b16] backdrop-blur-md z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="fixed inset-0 z-50 pointer-events-none">
              <Vortex
                backgroundColor="transparent"
                particleCount={450}
                rangeY={800}
                baseHue={180}
                containerClassName="absolute inset-0"
                className="h-full w-full pointer-events-none"
              >
                <motion.nav
                  initial={{ opacity: 0, y: 40, translateY: "-50%" }}
                  animate={{ opacity: 1, y: 0, translateY: "0%" }}
                  exit={{ opacity: 0, y: 40, translateY: "-50%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="pointer-events-auto absolute right-[25%] top-2/3 -translate-y-1/2 flex flex-col space-y-10 items-start"
                  onClick={(e) => e.stopPropagation()}
                >
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        className="block  playfair-display text-gray-100 text-[48px] font-semibold tracking-tight hover:text-white transition-colors duration-300 drop-shadow-xl"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </Vortex>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
