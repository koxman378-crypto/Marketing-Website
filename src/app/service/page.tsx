"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/src/app/home/footer";
import { useRouter } from "next/navigation";

function Service() {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const services = [
    {
      id: 1,
      images: ["/unplash1.jpg", "/unplash2.jpg"],
      title: "Web Design",
      description:
        "Create stunning, user-friendly websites that captivate your audience and drive conversions. Our designs combine aesthetics with functionality to deliver exceptional user experiences.",
      href: "/web-design",
    },
    {
      id: 2,
      images: ["/unplash3.jpg", "/unplash4.jpg"],
      title: "Web Development",
      description:
        "Build robust, scalable web applications using the latest technologies. We deliver high-performance solutions tailored to your needs, ensuring your digital presence is powerful and reliable.",
      href: "/web-development",
    },
    {
      id: 3,
      images: ["/unplash5.jpg", "/unplash6.jpg"],
      title: "SEO",
      description:
        "Boost your search engine rankings and increase organic traffic. Our SEO strategies help you reach the top of search results and connect with your target audience effectively.",
      href: "/seo",
    },
    {
      id: 4,
      images: ["/unplash7.jpg", "/unplash8.jpg"],
      title: "Social Media",
      description:
        "Engage your audience across all social platforms. We create compelling content and campaigns that build brand awareness and drive meaningful engagement with your community.",
      href: "/social-media",
    },
    {
      id: 5,
      images: ["/unplash9.jpg", "/unplash10.jpg"],
      title: "Marketing",
      description:
        "Comprehensive marketing strategies that drive growth and maximize ROI. We create integrated campaigns that connect with your target audience and deliver measurable results.",
      href: "/Pages/Marketing",
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
                variants={itemVariants}
              >
                <div className="text-center text-sm lg:text-base font-bold text-gray-700">
                  Our Services
                </div>
              </motion.div>
            </div>
            <motion.section
              className="w-full lg:w-[70%]"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[100px] font-bold text-gray-900 leading-tight max-[640px]:mt-5 sm:mt-4 md:mt-4 lg:-mt-4 xl:-mt-8 2xl:-mt-14">
                What We Offer
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mt-6 max-w-3xl leading-relaxed">
                Comprehensive digital solutions designed to elevate your
                business and drive measurable results. We combine creativity
                with strategy to deliver exceptional outcomes.
              </p>
            </motion.section>
          </motion.div>

          {services.map((service, index) => (
            <div key={service.id} className="mb-20 sm:mb-24 lg:mb-32">
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    className="mb-12 sm:mb-16 lg:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                  >
                    <motion.div
                      className="max-w-4xl mx-auto text-center"
                      variants={itemVariants}
                    >
                      <Link href={service.href} className="block group">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </Link>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                  >
                    {service.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={image}
                          alt={`${service.title} ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                  >
                    {service.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={image}
                          alt={`${service.title} ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                  >
                    <motion.div
                      className="max-w-4xl mx-auto text-center"
                      variants={itemVariants}
                    >
                      <Link href={service.href} className="block group">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </Link>
                    </motion.div>
                  </motion.div>
                </>
              )}
            </div>
          ))}

          <motion.div
            className="mt-20 sm:mt-24 lg:mt-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 lg:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div
              className="text-center max-w-4xl mx-auto"
              variants={itemVariants}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                Let's discuss how our services can help transform your business
                and achieve your goals. Contact us today for a free
                consultation.
              </p>
              <motion.button
                onClick={() => router.push("/contact")}
                className="px-8 sm:px-12 py-4 sm:py-5 bg-blue-600 text-white font-semibold text-base sm:text-lg rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Service;
