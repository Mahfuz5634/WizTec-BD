import React from "react";
import rightImage from "../assets/authHero.png";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const RegisterPage = () => {
  return (
    <section className="min-h-screen w-full bg-[#f5f5f7] flex items-center justify-center px-4">
      <div className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-6 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.15)] md:flex-row md:px-10 md:py-10">
        <div className="flex w-full flex-col justify-center md:w-[40%]">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="WiztecBD"
              className="h-7 w-auto object-contain"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Create New Account
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Let’s sign you up to grab amazing deal
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <button className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FcGoogle className="h-5 w-5" />
              <span>Continue with Google</span>
            </button>

            <button className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FaApple className="h-5 w-5 text-black" />
              <span>Continue with Apple</span>
            </button>
          </div>

          <div className="my-5 flex items-center gap-3 text-[11px] text-gray-400">
            <span className="h-px flex-1 bg-gray-200" />
            <span>or</span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>

          <form className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 outline-none focus:border-[#8b0d54] focus:ring-1 focus:ring-[#8b0d54]"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 outline-none focus:border-[#8b0d54] focus:ring-1 focus:ring-[#8b0d54]"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 outline-none focus:border-[#8b0d54] focus:ring-1 focus:ring-[#8b0d54]"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 outline-none focus:border-[#8b0d54] focus:ring-1 focus:ring-[#8b0d54]"
              />
            </div>

            <div className="mt-1 text-xs text-gray-500">
              By creating an account, you agree to our{" "}
              <span className="font-semibold text-[#8b0d54] hover:underline">
                Terms &amp; Privacy Policy
              </span>
              .
            </div>

            <button
              type="submit"
              className="mt-3 h-11 w-full rounded-md bg-[#8b0d54] text-sm font-semibold text-white hover:bg-[#6b0a40]"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            Already have an account?{" "}
            <button className="font-semibold text-[#8b0d54] hover:underline">
              Login
            </button>
          </p>
        </div>

        <div className="relative w-full md:w-[60%]">
          <div className="relative h-full w-full overflow-hidden rounded-[56px] bg-gray-200">
            <img
              src={rightImage}
              alt="City properties"
              className="h-full w-full object-cover"
            />
            <p className="absolute right-8 top-8 max-w-xs text-right text-sm font-medium text-white drop-shadow-md">
              Browse thousands of properties to buy, sell,
              <br /> or rent with trusted agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
