import React from "react";
import Marquee from "react-fast-marquee";

const HeroExtra = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#241024] via-[#1b0e24] to-[#120a1c] py-12 text-white">
      <div className="mx-auto max-w-5xl px-4">
        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide">
            BUILD FOR YOU
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="block">Built for Creators.</span>
          <span className="block text-[#a6c8ff]">Powered for Profit</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-200/80 md:text-base">
          Create and sell courses, consulting services, and communities with
          zero marketing cost and a built‑in sales network.
        </p>

        {/* Email + button */}
        <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="h-11 flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#ff5cf0]"
          />
          <button className="h-11 rounded-full bg-gradient-to-r from-[#ff5cf0] to-[#7b5cff] px-6 text-sm font-semibold text-white shadow-md">
            Start for Free
          </button>
        </div>

        <p className="mt-2 text-center text-[11px] text-gray-300/80">
          By proceeding you agree to our Platform Terms &amp; Privacy Notice.
        </p>

        {/* Stats card */}
        <div className="mt-10 rounded-3xl border border-white/20 bg-white/5 p-5 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-sm font-semibold md:text-base">
              Sell from day one – even with zero audience
            </h2>
            <button className="hidden rounded-full border border-white/40 px-4 py-1 text-xs text-gray-100 sm:inline">
              Open calculator
            </button>
          </div>

          <div className="mt-5 grid gap-4 text-sm text-gray-100 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-wide text-gray-300">
                Co‑sellers in network
              </p>
              <p className="mt-2 text-2xl font-bold">21,500+</p>
              <p className="mt-1 text-[11px] text-gray-300">
                People who can co‑promote
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-wide text-gray-300">
                Expected buyers / month
              </p>
              <p className="mt-2 text-2xl font-bold">86</p>
              <p className="mt-1 text-[11px] text-gray-300">
                With zero personal audience
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-wide text-gray-300">
                Est. MRR at US$/mo
              </p>
              <p className="mt-2 text-2xl font-bold">US$774</p>
              <p className="mt-1 text-[11px] text-gray-300">
                From membership sales
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-wide text-gray-300">
                Earn w/o a product
              </p>
              <p className="mt-2 text-2xl font-bold">US$300</p>
              <p className="mt-1 text-[11px] text-gray-300">
                Just by co‑selling
              </p>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-[#fbeecf]/90">
            <div className="flex items-center gap-3 px-4 py-2">
                <Marquee
                pauseOnHover
                gradient={false}
                speed={40}
                className="flex-1 text-xs font-medium text-[#5b3a1a]"
              >
                Unlike Kajabi, Teachable, or Skool, this platform helps you find
                and convert clients inside the platform so you can sell from day
                one — even with zero audience.
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroExtra;
