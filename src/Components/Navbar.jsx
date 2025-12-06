import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.png" // put your logo path here
            alt="WiztecBD logo"
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-lg font-semibold tracking-tight text-[#7b144b]">
            WiztecBD
          </span>
        </a>

        {/* Center links */}
        <div className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#" className="text-[#7b144b]">
            Buy
          </a>
          <a href="#" className="hover:text-[#7b144b]">
            Rent
          </a>
          <a href="#" className="hover:text-[#7b144b]">
            Sell
          </a>
          <a href="#" className="hover:text-[#7b144b]">
            Agents
          </a>
          <a href="#" className="hover:text-[#7b144b]">
            Blogs
          </a>
          <a href="#" className="hover:text-[#7b144b]">
            Contact Us
          </a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-1 text-sm text-gray-700 md:inline-flex">
            <span className="text-base">♡</span>
            <span>Favourite</span>
          </button>

          <button className="rounded-full bg-[#7b144b] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5c0f37]">
            Login Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
