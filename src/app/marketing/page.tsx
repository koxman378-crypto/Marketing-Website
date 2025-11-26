"use client";
import { HiOutlineLightBulb } from "react-icons/hi2";

import Footer from "@/src/app/home/footer";
import CardItem from "./hero/carditme";
import HeaderNav from "../home/headernav";
function Marketing() {
  return (
    <>
      <HeaderNav />
      <div className="text-change1 relative">
        <div className="container mx-auto mt-20 mb-20">
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
                Brand-first
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-gray-900 leading-tight -mt-4">
                Digital Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mt-6 max-w-3xl leading-relaxed">
                Crafted is committed to offering 360˚
                <span className="text-blue-500 ml-1 mr-1 font-bold cursor-pointer hover:text-blue-600 transition-colors">
                  digital marketing
                </span>
                services that create identities, build brands, drive
                interactions and get results. Pixel by pixel.
              </p>
            </section>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 gap-4 sm:gap-5 md:gap-6 lg:gap-5">
          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-[#333C45] flex items-center justify-center shrink-0">
              <HiOutlineLightBulb className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            </div>
            <div className="flex-1">
              <h3 className="playfair-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold mb-2 sm:mb-3">
                Lead Generation
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] mb-4 sm:mb-5">
                At Crafted, we specialize in prospecting and lead generation.
                Using the latest software, we will take care of end-to-end lead
                generation for you. From optimized landing page strategies to
                state of the art tracking data, we can configure and optimize a
                successful lead generation strategy.
              </p>
              {/* <LearnMore /> */}
            </div>
          </div>
          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-[#333C45] flex items-center justify-center shrink-0">
              <HiOutlineLightBulb className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            </div>
            <div className="flex-1">
              <h3 className="playfair-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold mb-2 sm:mb-3">
                Marketing Strategy
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] mb-4 sm:mb-5">
                Digitization of business is changing the way brands attract
                leads, engage prospects, create conversions and compete with
                each other. A good digital strategy, backed by real-time data
                can help organizations in everything from lead management to
                customer retention.
              </p>
              {/* <LearnMore /> */}
            </div>
          </div>
          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-[#333C45] flex items-center justify-center shrink-0">
              <HiOutlineLightBulb className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            </div>
            <div className="flex-1">
              <h3 className="playfair-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold mb-2 sm:mb-3">
                Content Marketing
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] mb-4 sm:mb-5">
                Quality content is the defining factor that differentiates
                between a good brand and a great one. Creating content which can
                reel in superior-quality and verifiable leads is extremely
                important. Crafted prides itself on its ability to curate and
                create highly-engaging and effective content.
              </p>
              {/* <LearnMore /> */}
            </div>
          </div>
          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-[#333C45] flex items-center justify-center shrink-0">
              <HiOutlineLightBulb className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            </div>
            <div className="flex-1">
              <h3 className="playfair-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold mb-2 sm:mb-3">
                SEO & Search Marketing
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] mb-4 sm:mb-5">
                Having an online presence was the first step to expanding your
                services online, now you need to make sure your investment is
                optimized to get the search results you deserve. Our SEO and
                Search Marketing services are catered to deliver results, no
                matter the type of business/services your provide.
              </p>
              {/* <LearnMore /> */}
            </div>
          </div>
          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-[#333C45] flex items-center justify-center shrink-0">
              <HiOutlineLightBulb className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            </div>
            <div className="flex-1">
              <h3 className="playfair-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold mb-2 sm:mb-3">
                Social Marketing
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] mb-4 sm:mb-5">
                Our social media marketing team is here to walk you through
                tried strategies that get results. Our strategies get your brand
                noticed, shared, talked about, liked and hearted, no matter the
                social network, we have the know-how to get you the results your
                brand requires.
              </p>
              {/* <LearnMore /> */}
            </div>
          </div>
          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-[#333C45] flex items-center justify-center shrink-0">
              <HiOutlineLightBulb className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            </div>
            <div className="flex-1">
              <h3 className="playfair-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold mb-2 sm:mb-3">
                Marketing Campaigns
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] mb-4 sm:mb-5">
                From digital banner ads to digital concierge experiences our
                team of digital marketing experts are here to develop full blown
                360˚ marketing campaigns that attracts visitors and convert
                audiences into loyal advocates.
              </p>
              {/* <LearnMore /> */}
            </div>
          </div>
        </div>
        <CardItem />
        <Footer />
      </div>
    </>
  );
}

export default Marketing;
