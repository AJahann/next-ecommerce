'use client';

const Add = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              type="button"
            >
              -
            </button>
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              type="button"
            >
              +
            </button>
          </div>
          <div className="text-xs">Product is out of stock</div>
          {/* <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span>{' '}
              left!
              <br /> {"Don't"} miss it
            </div> */}
        </div>
        <button
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="disabled:ring-none w-36 rounded-3xl px-4 py-2 text-sm text-lama ring-1 ring-lama hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
