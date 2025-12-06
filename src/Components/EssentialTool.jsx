const tools = [
  { title: "Payments", description: "Responsibly sourced payments for a better tomorrow." },
  { title: "Analytics", description: "Understand your growth with built‑in analytics." },
  { title: "Newsletters", description: "Build your audience with engaging newsletters." },
  { title: "Pages", description: "Share your expertise with a personal profile site." },
  { title: "Contact", description: "Organize your contacts and turn them into assets." },
  { title: "Emails", description: "Showcase your expertise with a personal email profile." },
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
            Create diverse products on the platform and leverage our powerful tools to drive sales within and beyond your brand.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="flex flex-col justify-between rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-black/5"
            >
              <div>
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  {tool.title}
                </h3>
                <p className="mt-2 text-xs text-gray-600 md:text-sm">
                  {tool.description}
                </p>
              </div>
              <button className="mt-4 inline-flex items-center text-xs font-semibold text-[#c58a1d] md:text-sm">
                Learn more →
              </button>
            </div>
          ))}

          {/* Enterprise plan card: spans full width on md+ */}
          <div className="md:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-r from-[#1b1636] via-[#343056] to-[#f1b646] p-5 text-left text-white shadow-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-yellow-200/90">
                  Enterprise plan
                </p>
                <p className="mt-2 max-w-2xl text-xs md:text-sm text-white/80">
                  Full white‑label platform hosted on a dedicated, auto‑scaling server.
                  Includes branding freedom, private content protection, and 24/7 service availability.
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
