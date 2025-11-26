"use client";
import Link from "next/link";
import { Building2 } from "lucide-react";
const CardPage = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <div className="flex-1 min-h-[500px] sm:min-h-[600px] lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[500px] bg-[#06385D] text-white flex flex-col items-center justify-center gap-y-3 sm:gap-y-4 lg:gap-y-3 xl:gap-y-4 py-8 sm:py-10 lg:py-8 xl:py-10 px-4 sm:px-6 lg:px-4 xl:px-6">
        <Building2 className="w-25 h-25 lg:w-35 lg:h-35 xl:w-40 xl:h-40" />

        <h1 className="playfair-display text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[50px] 2xl:text-[55px] font-extrabold opacity-90 text-center">
          Minami
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold opacity-70 text-center">
          78 SW 7th Street
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold opacity-70 text-center">
          Miami, Florida 33130
        </p>

        <Link
          href="tel:+13053511819"
          className="hover:opacity-80 transition-opacity"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold opacity-70 text-[#0AAEF5] text-center">
            +1 (305) 351-1819
          </p>
        </Link>
        <Link
          href="mailto:miami@craftedny.com"
          className="hover:opacity-80 transition-opacity"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold opacity-70 text-[#0AAEF5] text-center break-all">
            miami@craftedny.com
          </p>
        </Link>
      </div>
      <div className="flex-1 min-h-[500px] sm:min-h-[600px] lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[500px] bg-[#1F5E88] text-white flex flex-col items-center justify-center gap-y-3 sm:gap-y-4 lg:gap-y-3 xl:gap-y-4 py-8 sm:py-10 lg:py-8 xl:py-10 px-4 sm:px-6 lg:px-4 xl:px-6">
        <Building2 className="w-25 h-25 lg:w-35 lg:h-35 xl:w-40 xl:h-40" />

        <h1 className="playfair-display text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[50px] 2xl:text-[55px] font-extrabold opacity-90 text-center">
          Minami
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold opacity-70 text-center">
          78 SW 7th Street
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold opacity-70 text-center">
          Miami, Florida 33130
        </p>

        <Link
          href="tel:+13053511819"
          className="hover:opacity-80 transition-opacity"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold opacity-70 text-[#0AAEF5] text-center">
            +1 (305) 351-1819
          </p>
        </Link>
        <Link
          href="mailto:miami@craftedny.com"
          className="hover:opacity-80 transition-opacity"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold opacity-70 text-[#0AAEF5] text-center break-all">
            miami@craftedny.com
          </p>
        </Link>
      </div>
    </section>
  );
};

export default CardPage;
