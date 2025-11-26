"use client";
//dynamic text or content part
const TextPart = () => {
  return (
    <div>
      <div className="container mx-auto relative z-10 my-25 text-base">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[23%]">
            <button className="w-[200px] h-[50px] bg-white border border-black/50 hover:border-blue-500 transition-all duration-300">
              <div className="text-sm lg:text-base font-bold text-gray-700">
                Our Featured Client
              </div>
            </button>
          </div>
          <section className="w-full lg:w-[77%] xl:w-[77%]">
            <h1 className="text-5xl playfair-display sm:text-6xl md:text-7xl lg:text-7xl xl:text-[100px] font-bold text-gray-900 leading-tight">
              Amazing Partners
            </h1>

            <p className="text-base w-full sm:text-lg md:text-xl font-semibold text-gray-700 mt-6 leading-relaxed mb-10">
              Crafted is committed to offering 360˚ We believe direct
              collaboration with our clients is essential to bringing unique and
              engaging experiences to life. We help our clients solve business
              problems, increase visibility, and achieve unexpected results
              exclusively from NYC.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TextPart;
