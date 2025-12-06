import React from "react";
import Marquee from "react-fast-marquee";

const partnerLogos = ["KDNXT", "UIA", "PlannIT", "LEVELS", "NEXMO", "Growmax"];

const PartnersMarquee = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-[11px] font-medium tracking-wide text-gray-500">
          TRUSTED BY +10,000 CONSULTANTS &amp; ORGANISATIONS
        </p>

        <div className="mt-3 rounded-3xl border border-gray-100 bg-gray-50/80 px-4 py-3 shadow-sm">
          <Marquee direction="left" gradient={false} speed={40} pauseOnHover>
            {partnerLogos.map((name, i) => (
              <div
                key={i}
                className="mx-10 flex h-8 items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition"
              >
                <div className="flex h-7 items-center rounded-lg bg-white px-4 text-xs font-semibold tracking-wide text-gray-700 shadow-sm">
                  {name}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
