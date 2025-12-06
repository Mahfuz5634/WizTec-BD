import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="WiztecBD logo" />
        </a>

        {/* Center links (desktop) */}
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

        
        <div className="hidden items-center gap-4 md:flex">
          <button className="items-center gap-1 text-sm text-gray-700 inline-flex">
            <span className="text-base">♡</span>
            <span>Favourite</span>
          </button>

          <Link
            to={"/auth/login"}
            className="rounded-full bg-[#7b144b] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5c0f37]"
          >
            Login Now
          </Link>
        </div>

       
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          type="button"
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-transform ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-transform ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

     
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 py-3 text-sm font-medium text-gray-700">
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

          <div className="flex items-center justify-between pt-2">
            <button className="flex items-center gap-1 text-sm text-gray-700">
              <span className="text-base">♡</span>
              <span>Favourite</span>
            </button>
            <Link
              to={"/auth/login"}
              className="rounded-full bg-[#7b144b] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5c0f37]"
            >
              Login Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
