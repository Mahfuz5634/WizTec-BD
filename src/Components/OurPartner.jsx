import React from "react";
import heroImage from "../assets/Hero.png";

const tabs = [
  "Courses",
  "Communities",
  "Coaching & Consulting",
  "Merchandise",
  "Podcasts",
  "Events",
  "Brokerage",
];

const RevenueSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#ffeef7] to-[#f2f6ff] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
       
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#f225ff]/12 px-4 py-1 text-[11px] font-semibold tracking-wide text-[#d317ff]">
            DIVERSIFY REVENUE STREAM
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Maximise earnings with
            <br className="hidden md:block" />
            <span className="block">limitless revenue streams.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
            Create and sell courses, consulting services, and communities – with
            zero marketing cost and a built‑in sales network.
          </p>
        </div>

       
        <div className="mt-7 flex flex-wrap justify-center gap-2 rounded-full bg-white px-2 py-2 text-xs font-medium text-gray-600 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`rounded-full px-4 py-1.5 transition ${
                index === 0
                  ? "bg-[#151225] text-white shadow-sm"
                  : "bg-transparent text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        
        <div className="mt-8 overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.20)]">
          <div className="flex flex-col md:flex-row">
        
            <div className="relative flex-1 bg-gradient-to-br from-[#5b0f55] via-[#6a1c6e] to-[#f4b06b]">
              <div className="relative h-full w-full overflow-hidden rounded-l-[32px] bg-gradient-to-br from-[#2a0727]/95 via-[#3b0f3a]/95 to-[#9b3f6b]/40 px-8 py-10 text-white">
                <h3 className="text-lg font-semibold md:text-xl">Courses</h3>

                <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-100/90 md:text-sm">
                  Turn your knowledge into structured, sellable products. Build
                  online, drip, academic, or challenge‑based courses with
                  built‑in tools for gamification, accountability, and
                  engagement.
                </p>

                <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-100/90 md:text-sm">
                  Every course is optimised to deliver value and generate
                  recurring income.
                </p>

                <button className="mt-6 rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#151225] shadow-md">
                  Learn More
                </button>
              </div>
            </div>

         
            <div className="flex flex-1 items-stretch bg-transparent">
              <div className="relative h-full w-full overflow-hidden rounded-l-[120px] md:rounded-l-[160px]">
                <img
                  src={heroImage}
                  alt="Courses preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
