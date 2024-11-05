const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <select
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
          id=""
          name="type"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          className="w-24 rounded-2xl pl-2 text-xs ring-1 ring-gray-400"
          name="min"
          placeholder="min price"
        />
        <input
          className="w-24 rounded-2xl pl-2 text-xs ring-1 ring-gray-400"
          name="max"
          placeholder="max price"
          type="text"
        />
        {/* TODO: Filter Categories */}
        <select
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
          name="cat"
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
          id=""
          name=""
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          className="rounded-2xl bg-white px-4 py-2 text-xs font-medium ring-1 ring-gray-400"
          id=""
          name="sort"
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
