import Image from "next/image";
import Link from "next/link";

import { talksData } from "@/src/constant/Constant";
import LearnMore from "@/src/components/learnmore";
const CardItem = () => {
  return (
    <>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-6 md:gap-8 lg:gap-8">
          {talksData.map((talk) => (
            <div key={talk.id}>
              <div className="relative w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] overflow-hidden">
                <Image
                  src={talk.image}
                  alt={talk.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                <Link
                  href="/"
                  className="inline-block border border-black/50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 mb-3 sm:mb-4 w-fit"
                >
                  {talk.category}
                </Link>
                <Link href="/" className="mb-2 sm:mb-3 group">
                  <h1 className="playfair-display tracking-tight text-[50px] font-extrabold mb-3 text-gray-900 hover:text-blue-500 transition-colors duration-300 leading-tight">
                    {talk.title}
                  </h1>
                </Link>
                <p className="text-gray-600 text-[25px] sm:text-base md:text-lg tracking-tight ">
                  {talk.description}
                </p>
                <div className="mt-5">
                  <LearnMore />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default CardItem;
