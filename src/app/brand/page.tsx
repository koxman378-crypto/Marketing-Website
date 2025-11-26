"use client";
import Footer from "@/src/app/home/footer";
import { motion } from "framer-motion";

const BrandPage = () => {
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

  const brandServices = [
    {
      title: "Brand Identity Design",
      description:
        "We create distinctive brand identities that resonate with your target audience. From logo design to comprehensive brand guidelines, we ensure your brand stands out in the marketplace.",
      icon: "🎨",
    },
    {
      title: "Brand Strategy",
      description:
        "Our strategic approach helps define your brand's unique positioning, voice, and messaging. We develop comprehensive brand strategies that align with your business goals.",
      icon: "📊",
    },
    {
      title: "Visual Branding",
      description:
        "We design cohesive visual systems including color palettes, typography, and imagery that communicate your brand's essence across all touchpoints.",
      icon: "✨",
    },
    {
      title: "Brand Guidelines",
      description:
        "We create comprehensive brand guidelines that ensure consistent application of your brand identity across all channels and platforms.",
      icon: "📋",
    },
  ];

  const brandProcess = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business, target audience, and market positioning through in-depth research and analysis.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "We develop a comprehensive brand strategy that defines your unique value proposition and brand positioning.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Our creative team brings your brand to life through innovative design solutions that capture your brand's essence.",
    },
    {
      step: "04",
      title: "Implementation",
      description:
        "We ensure seamless implementation of your brand identity across all platforms and touchpoints.",
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
                  Our Brand Services
                </div>
              </motion.div>
            </div>
            <motion.section
              className="w-full lg:w-[70%]"
              variants={itemVariantsRight}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[100px] font-bold text-gray-900 leading-tight max-[640px]:mt-5 sm:mt-4 md:mt-4 lg:-mt-4 xl:-mt-8 2xl:-mt-14">
                Brand Excellence
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mt-6 max-w-3xl leading-relaxed">
                We help businesses build powerful, memorable brands that connect
                with audiences and drive growth. Our comprehensive brand
                services create cohesive identities that stand the test of time.
              </p>
            </motion.section>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {brandServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 p-6 sm:p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                variants={
                  index % 2 === 0 ? itemVariantsLeft : itemVariantsRight
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

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
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Our Brand Process
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {brandProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  className="flex flex-col"
                  variants={
                    index % 2 === 0 ? itemVariantsLeft : itemVariantsRight
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-5xl sm:text-6xl font-bold text-blue-500 opacity-20 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {process.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {process.description}
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
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Why Brand Matters
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Build Trust",
                  description:
                    "A strong brand builds credibility and trust with your audience, making it easier to attract and retain customers.",
                },
                {
                  title: "Stand Out",
                  description:
                    "Differentiate your business from competitors with a unique brand identity that captures attention.",
                },
                {
                  title: "Drive Growth",
                  description:
                    "A well-defined brand strategy helps drive business growth by creating clear market positioning.",
                },
                {
                  title: "Create Loyalty",
                  description:
                    "Consistent branding creates emotional connections that turn customers into brand advocates.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex gap-4 sm:gap-6"
                  variants={
                    index % 2 === 0 ? itemVariantsLeft : itemVariantsRight
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
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

export default BrandPage;
