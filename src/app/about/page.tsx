"use client";
import Footer from "@/src/app/home/footer";
import { motion } from "framer-motion";
import Image from "next/image";
//example
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageContentSections = [
    {
      image: "/unplash1.jpg",
      alt: "Team collaboration",
      title: "Our Team",
      description:
        "We are a diverse group of creative professionals, strategists, and technologists who are passionate about delivering exceptional results. Our team combines years of industry experience with fresh perspectives to create innovative solutions.",
    },
    {
      image: "/unplash2.jpg",
      alt: "Innovation and technology",
      title: "Innovation First",
      description:
        "We stay at the forefront of digital marketing trends and technologies. Our commitment to innovation drives us to explore new strategies, tools, and methodologies that give our clients a competitive edge in the market.",
    },
    {
      image: "/unplash3.jpg",
      alt: "Client success",
      title: "Client Success",
      description:
        "Your success is our success. We work closely with each client to understand their unique goals and challenges, crafting tailored strategies that deliver measurable results and drive sustainable growth.",
    },
    {
      image: "/unplash4.jpg",
      alt: "Global reach",
      title: "Global Reach",
      description:
        "With a network spanning across continents, we help businesses of all sizes reach their target audiences worldwide. Our global perspective enables us to create campaigns that resonate across cultures and markets.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div
            className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="w-full lg:w-[30%] shrink-0">
              <motion.div
                className="border-2 border-black/50 flex items-center justify-center h-[50px] w-full max-w-[200px] hover:border-blue-500 transition-all duration-300"
                variants={itemVariantsLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-center text-sm lg:text-base font-bold text-gray-700">
                  About Us
                </div>
              </motion.div>
            </div>
            <motion.section
              className="w-full lg:w-[70%]"
              variants={itemVariantsRight}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[100px] font-bold text-gray-900 leading-tight max-[640px]:mt-5 sm:mt-4 md:mt-4 lg:-mt-4 xl:-mt-8 2xl:-mt-14">
                Who We Are
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mt-6 max-w-3xl leading-relaxed">
                We are a team of passionate digital marketing experts dedicated
                to helping businesses grow and succeed in the digital world.
              </p>
            </motion.section>
          </motion.div>

          {imageContentSections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.div
                  className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group"
                  variants={isEven ? itemVariantsLeft : itemVariantsRight}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </motion.div>
                <motion.div
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                  variants={isEven ? itemVariantsRight : itemVariantsLeft}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}

          <motion.div
            className="mb-16 sm:mb-20 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
              variants={itemVariants}
            >
              Our Values
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We stay ahead of trends and leverage cutting-edge technology.",
                },
                {
                  title: "Excellence",
                  description:
                    "We deliver high-quality work that exceeds expectations.",
                },
                {
                  title: "Integrity",
                  description:
                    "We build trust through transparency and honest communication.",
                },
                {
                  title: "Results",
                  description:
                    "We focus on measurable outcomes that drive business growth.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-gray-50 p-6 sm:p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  variants={
                    index % 2 === 0 ? itemVariantsLeft : itemVariantsRight
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8 sm:p-12 lg:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Why Choose Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Expert Team",
                  description:
                    "Our team consists of experienced professionals with deep industry knowledge.",
                },
                {
                  title: "Proven Results",
                  description:
                    "We have a track record of delivering successful campaigns for our clients.",
                },
                {
                  title: "Custom Solutions",
                  description:
                    "We tailor our strategies to meet your unique business needs.",
                },
                {
                  title: "24/7 Support",
                  description:
                    "We provide round-the-clock support to ensure your success.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4 sm:gap-6"
                  variants={
                    index % 2 === 0 ? itemVariantsLeft : itemVariantsRight
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
