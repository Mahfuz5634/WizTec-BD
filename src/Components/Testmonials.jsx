import React from "react";
import Marquee from "react-fast-marquee";
import videoThumb from "../assets/Framee (1).png";
import avatar from "../assets/avater(1).png";

const testimonials = [
  {
    name: "Iva Ryan",
    role: "Marketing manager at Adobe",
    tags: ["Content Creator", "Youtuber", "Growth Expert"],
    text: "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
    stat: "$2M",
    label: "EARNED IN HELENUIL",
    rating: 5,
  },

  {
    name: "Alex Chen",
    role: "Founder at Creatix",
    tags: ["Coach", "Consultant"],
    text: "Being able to sell from day one without a huge audience has completely changed how I launch products.",
    stat: "$850K",
    label: "ADDITIONAL REVENUE",
    rating: 5,
  },
];

const TestimonialsMarquee = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#1b0627] via-[#190622] to-[#0b0314] py-14 md:py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#f225ff]/15 px-4 py-1 text-[11px] font-semibold tracking-wide text-[#f1a9ff]">
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
            Trusted by Creators
            <br className="hidden md:block" /> &amp; Proven by Results.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs text-gray-300/80 md:text-sm">
            See how others grow with our platform – real stories, real success.
          </p>
        </div>

        <div className="mt-10">
          <Marquee
            direction="left"
            pauseOnHover
            gradient={false}
            speed={30}
            className="flex gap-6"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="mx-4 flex min-w-[320px] max-w-xl flex-col overflow-hidden rounded-[28px] bg-white text-gray-900 shadow-[0_24px_60px_rgba(15,23,42,0.45)] md:min-w-[540px]"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2">
                    <img
                      src={videoThumb}
                      alt="Testimonial video"
                      className="h-full w-full object-cover"
                    />
                    <button className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#1b0627] shadow-md">
                      ▶
                    </button>
                  </div>

                  <div className="flex w-full flex-col justify-between p-5 md:w-1/2 md:p-6">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={avatar}
                            alt={t.name}
                            className="h-9 w-9 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {t.name}
                            </p>
                            <p className="text-[11px] text-gray-500">
                              {t.role}
                            </p>
                          </div>
                        </div>
                        <div className="hidden items-center gap-0.5 text-[#f6b600] md:flex">
                          {"★".repeat(t.rating)}
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {t.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-0.5 text-[11px] text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-gray-700 md:text-sm">
                        {t.text}
                      </p>
                    </div>

                    <div className="mt-4 flex items-baseline gap-2 text-gray-900">
                      <span className="text-xl font-extrabold md:text-2xl">
                        {t.stat}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        {t.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
