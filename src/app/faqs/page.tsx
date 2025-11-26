"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Footer from "@/src/app/home/footer";
import { faqsData } from "@/src/constant/Constant";
import Loading from "@/src/components/loading";
import HeaderNav from "@/src/app/home/headernav";
import TextPart from "../home/hero/textpart";
import Imgs from "../home/hero/imgs";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Loading />
      <HeaderNav />
      <div className="container mx-auto mt-20 mb-20 px-5">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-[30%] shrink-0">
            <div className="border-2 border-black/50 flex items-center justify-center h-[50px] w-full max-w-[200px] hover:border-blue-500 transition-all duration-300">
              <div className="text-center text-sm lg:text-base font-bold text-gray-700">
                Our Featured Client
              </div>
            </div>
          </div>
          <section className="w-full lg:w-[70%]">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[100px] font-bold text-gray-900 leading-tight max-[640px]:mt-5 sm:mt-4 md:mt-4 lg:-mt-4 xl:-mt-8 2xl:-mt-14">
              Frequently Asked
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-gray-900 leading-tight -mt-4">
              Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mt-6 max-w-3xl leading-relaxed">
              Find answers to common questions about our services, processes,
              and how we can help your business succeed in the digital world.
            </p>

            <div className="mt-12 space-y-4">
              {faqsData.map(
                (
                  faq: { id: number; question: string; answer: string },
                  index: number
                ) => (
                  <div
                    key={faq.id}
                    className="border-2 border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{
                          rotate: openIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-600 shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </div>
      <TextPart />
      <Imgs />
      <Footer />
    </>
  );
};

export default Faqs;
