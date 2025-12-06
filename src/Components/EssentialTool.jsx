import React from "react";

import payIcon from "../assets/Capa_1.png";
import analyticsIcon from "../assets/Group.png";
import newsIcon from "../assets/Layer2.png";
import pagesIcon from "../assets/Frame.png";
import contactIcon from "../assets/Capa_2 (1).png";
import emailsIcon from "../assets/Layer2.png";

const tools = [
  {
    title: "Payments",
    description: "Responsibly source payments for a better tomorrow.",
    icon: payIcon,
  },
  {
    title: "Analytics",
    description: "Understand your growth with built‑in analytics.",
    icon: analyticsIcon,
  },
  {
    title: "Newsletters",
    description: "Build your audience with engaging newsletters.",
    icon: newsIcon,
  },
  {
    title: "Pages",
    description: "Share your expertise with a personal profile site.",
    icon: pagesIcon,
  },
  {
    title: "Contact",
    description: "Organize your contacts and turn them into assets.",
    icon: contactIcon,
  },
  {
    title: "Emails",
    description: "Showcase your expertise with personal email tools.",
    icon: emailsIcon,
  },
];

const EssentialToolsSection = () => {
  return (
    <section className="w-full bg-[#f7efe0] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-4 py-1 text-xs font-semibold tracking-wide text-gray-700">
            ESSENTIAL TOOLS
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Essential Tools
          </h2>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Zero Distractions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
            Create diverse products on the platform and leverage our powerful
            tools to drive sales within and beyond your brand.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="flex flex-col justify-between rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-black/5"
            >
              {/* Title left, logo right */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                    {tool.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 md:text-sm">
                    {tool.description}
                  </p>
                </div>

                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#fff6df]">
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    className="h-7 w-7 object-contain"
                  />
                </div>
              </div>

              <button className="mt-4 inline-flex items-center text-xs font-semibold text-[#c58a1d] md:text-sm">
                Learn more →
              </button>
            </div>
          ))}

          {/* Enterprise plan card */}
          <div className="md:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-r from-[#1b1636] via-[#343056] to-[#f1b646] p-5 text-left text-white shadow-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-yellow-200/90">
                  Enterprise plan
                </p>
                <p className="mt-2 max-w-2xl text-xs text-white/80 md:text-sm">
                  Full white‑label platform hosted on a dedicated, auto‑scaling
                  server. Includes branding freedom, content protection, and
                  24/7 service availability.
                </p>
              </div>
              <button className="mt-4 inline-flex items-center text-xs font-semibold text-yellow-200 md:text-sm">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialToolsSection;
