import React, { useState } from "react";

import img1 from "../assets/h-1.png";
import img2 from "../assets/h-2.png";
import img3 from "../assets/h-3.png";
import img4 from "../assets/h-4.png";
import img5 from "../assets/h-5.png";
import img6 from "../assets/h-6.png";

const properties = [
  {
    id: 1,
    title: "Maple Grove Garden House",
    price: "$2800",
    location: "New York, USA",
    beds: 4,
    baths: 3,
    sqft: "2500sqft",
    image: img1,
  },
  {
    id: 2,
    title: "Sunset Towers Ekolobet",
    price: "$2600",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    sqft: "2200sqft",
    image: img2,
  },
  {
    id: 3,
    title: "Riverside Retreat",
    price: "$3400",
    location: "New York, USA",
    beds: 5,
    baths: 3,
    sqft: "3000sqft",
    image: img3,
  },
  {
    id: 4,
    title: "Golden Meadows",
    price: "$2950",
    location: "New York, USA",
    beds: 4,
    baths: 3,
    sqft: "2400sqft",
    image: img4,
  },
  {
    id: 5,
    title: "Ocean Sea Breeze",
    price: "$2800",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    sqft: "2100sqft",
    image: img5,
  },
  {
    id: 6,
    title: "The Urban Nest Loft",
    price: "$3200",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    sqft: "2300sqft",
    image: img6,
  },
];

const PropertyPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [openImage, setOpenImage] = useState(null); 
  return (
    <section className="w-full bg-white">
      {/* Mobile Filters button */}
      <div className="border-b border-gray-100 px-4 py-3 md:hidden">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
        >
          <span>Filters</span>
          <span className="text-xs text-gray-400">▼</span>
        </button>
      </div>

      {/* Main layout */}
      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6 lg:py-8">
        {/* LEFT SIDEBAR (desktop) */}
        <aside className="hidden w-64 flex-shrink-0 space-y-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:block">
          {/* Rent Budget */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Rent Budget
            </h3>
            <div className="space-y-2">
              <div className="h-1 rounded-full bg-gray-200">
                <div className="h-1 w-2/3 rounded-full bg-[#7b144b]" />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>$2000</span>
                <span>$6000</span>
              </div>
            </div>
          </div>

          {/* Suburb */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Suburb
              </h3>
              <button className="text-[11px] text-gray-400">▼</button>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-3 w-3 rounded border-gray-300"
                />
                <span>Example Suburb 1</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-3 w-3 rounded border-gray-300"
                />
                <span>Example Suburb 2</span>
              </label>
            </div>
          </div>

          {/* Property Type */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Property Type
              </h3>
              <button className="text-[11px] text-gray-400">▼</button>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              {[
                "House",
                "Land",
                "Apartment",
                "Town House",
                "Unit",
                "Acreage",
              ].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="type"
                    className="h-3 w-3 border-gray-300"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Amenities
              </h3>
              <button className="text-[11px] text-gray-400">▼</button>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              {["Pet-friendly", "Parking", "Gym", "Private Pool"].map((a) => (
                <label key={a} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-3 w-3 rounded border-gray-300"
                  />
                  <span>{a}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT: CARDS + PAGINATION */}
        <div className="flex-1">
          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenImage(p)}
                  className="block h-40 w-full sm:h-44 md:h-48 focus:outline-none"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </button>

                <div className="space-y-2 p-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {p.title}
                  </h3>

                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-[#7b144b]">
                      {p.price}
                    </span>
                    <span className="text-xs text-gray-400">/month</span>
                  </div>

                  <div className="text-xs text-gray-500">{p.location}</div>

                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-gray-500">
                    <span>{p.beds} Bed</span>
                    <span>{p.baths} Bathroom</span>
                    <span>{p.sqft}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-gray-500 sm:flex-row">
            <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-4 py-2 hover:bg-gray-50">
              <span className="text-sm">‹</span>
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-600">
                1
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7b144b] text-xs font-semibold text-white">
                2
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-600">
                3
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-600">
                4
              </button>
            </div>

            <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-4 py-2 hover:bg-gray-50">
              <span>Next</span>
              <span className="text-sm">›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="h-full w-72 space-y-6 overflow-y-auto bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-900">Filters</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-sm text-gray-500"
              >
                ✕
              </button>
            </div>

          </div>
        </div>
      )}

      {/*MODAL */}
      {openImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white">
            <button
              onClick={() => setOpenImage(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-2 py-1 text-xs text-white"
            >
              ✕
            </button>
            <img
              src={openImage.image}
              alt={openImage.title}
              className="h-full w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyPage;
