/* eslint-disable @eslint-react/dom/no-missing-button-type */
'use client';

const Pagination = () => {
  return (
    <div className="mt-12 flex w-full justify-between">
      <button className="w-24 cursor-pointer rounded-md bg-lama p-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-pink-200">
        Previous
      </button>
      <button className="w-24 cursor-pointer rounded-md bg-lama p-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-pink-200">
        Next
      </button>
    </div>
  );
};

export default Pagination;
