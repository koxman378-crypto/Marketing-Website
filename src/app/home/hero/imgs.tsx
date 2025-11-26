"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { imagesData } from "@/src/constant/Constant";

const MotionImage = motion(Image);

const Imgs = () => {
  return (
    <>
      {/* Image Gallery Section */}
      <div className="container mx-auto max-[640px]:px-0 sm:px-5 md:px-10 lg:px-20 xl:px-25 2xl:px-30 sm:max-w-[700px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1000px]">
        <div className="grid mx-auto grid-cols-2 max-[640px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2">
          {imagesData.map((img, index) => {
            // Determine if it's a left column (odd index) or right column (even index)
            const isLeftColumn = index % 2 === 0;

            return (
              <Link
                key={img.id}
                href={`/imgs/${img.id}`}
                className="group block overflow-hidden"
              >
                <motion.div
                  className="relative w-full h-[400px] aspect-square overflow-hidden"
                  initial={{ opacity: 0, x: isLeftColumn ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                >
                  <MotionImage
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6 bg-linear-to-t from-black/60 via-black/20 to-transparent">
                    <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 text-white drop-shadow-lg">
                      {img.name}
                    </h3>
                    <p className="text-gray-100 text-sm sm:text-base lg:text-lg mb-2 drop-shadow-md">
                      {img.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Hero Section */}

      {/* Services Section */}
    </>
  );
};
export default Imgs;
