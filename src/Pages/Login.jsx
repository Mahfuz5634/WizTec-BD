import React from "react";
import rightImage from "../assets/authHero.png";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <section className="min-h-screen w-full  flex items-center justify-center px-4">
      <div className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px]  px-6 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.15)] md:flex-row md:px-10 md:py-10">
        <div className="flex w-full flex-col justify-center md:w-[40%]">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="WiztecBD"
              className="h-7 w-auto object-contain"
            />
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Create New Account
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Let’s login to grab amazing deal
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {/* Google */}
            <button className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FcGoogle className="h-5 w-5" />
              <span>Continue with Google</span>
            </button>

            {/* Apple */}
            <button className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FaApple className="h-5 w-5 text-black" />
              <span>Continue with Apple</span>
            </button>

            {/* Email*/}
            <button className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[11px] font-semibold text-white">
                @
              </span>
              <span>Continue with Email/Phone</span>
            </button>
          </div>

          <p className="mt-5 text-xs text-gray-500">
            Don’t have an account?{" "}
            <Link
              to={"/auth/register"}
              className="font-semibold text-[#8b0d54] hover:underline"
            >
              Sign Up
            </Link>
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

export default LoginPage;
