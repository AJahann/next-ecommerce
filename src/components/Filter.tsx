'use client';

import { useRouter } from 'next/navigation';

const Filter = () => {
  const router = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(window.location.search);
    if (value) params.set(name, value);
    else params.delete(name);

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <input
          className="w-24 rounded-2xl pl-2 text-xs ring-1 ring-gray-400"
          name="min"
          placeholder="min price"
          type="text"
          onChange={handleFilterChange}
        />
        <input
          className="w-24 rounded-2xl pl-2 text-xs ring-1 ring-gray-400"
          name="max"
          placeholder="max price"
          type="text"
          onChange={handleFilterChange}
        />
        {/* TODO: Filter Categories */}

        <select
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
          name="category"
          onChange={handleFilterChange}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
        <select
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
          name="sortBy"
          onChange={handleFilterChange}
        >
          <option value="">Sort By</option>
          <option value="asc price">Price (Low to High)</option>
          <option value="desc price">Price (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
