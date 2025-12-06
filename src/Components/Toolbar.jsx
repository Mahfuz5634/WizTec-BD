const PropertyToolbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row">
        {/* Left: Property Preference card */}
        <div className="flex w-full items-center justify-between rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-sm md:w-auto">
          <span className="text-sm font-medium text-gray-800">
            Property Preference
          </span>

          <button className="ml-4 flex items-center gap-1 rounded-xl border border-gray-100 bg-gray-50 px-3 py-1 text-xs text-gray-500 hover:bg-gray-100">
            <span>Reset Filter</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-[10px]">
              ⟳
            </span>
          </button>
        </div>

        {/* Right big card */}
        <div className="flex w-full items-center justify-between rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-sm">
          {/* Property + count */}
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-1 font-semibold text-gray-900">Property</span>
            <span className="mx-1 text-xs text-gray-400">---</span>
            <span className="text-xs text-gray-500">
              Showing result: <span className="font-medium text-gray-800">12</span>
            </span>
          </div>

          {/* Sort box */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wide text-gray-400">
              Sort By
            </span>
            <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-700">
              <select
                className="bg-transparent text-xs font-medium outline-none"
                defaultValue="low"
              >
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
                <option value="new">Newest First</option>
              </select>
              <span className="ml-1 text-[10px]">▾</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyToolbar;
