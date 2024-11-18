'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

const Add = ({
  productId,
  stockNumber,
}: {
  productId: any;
  stockNumber: number;
}) => {
  const [count, setCount] = useState(1);

  const addProductToUserCart = (id: any) => {
    const userCartCookie = document.cookie
      .split('; ')
      .find((item) => item.startsWith('cart='));

    let cart = [];

    if (userCartCookie) {
      try {
        cart = JSON.parse(decodeURIComponent(userCartCookie.split('=')[1]));
      } catch (e) {
        console.error('Failed to parse cart cookie:', e);
      }
    }

    const existingProductIndex = cart.findIndex((item: any) => item.id === id);

    if (existingProductIndex >= 0) {
      if (+cart[existingProductIndex].count + count >= stockNumber) {
        toast.error('Oops you already have all of this product!');
      } else {
        toast.success('Add to cart successfully');
        cart[existingProductIndex].count += count;
      }
    } else {
      toast.success('Add to cart successfully');
      cart.push({ id, count });
    }

    document.cookie = `cart=${encodeURIComponent(JSON.stringify(cart))};path=/;max-age=${60 * 60 * 24 * 7}`;
    window.dispatchEvent(new Event('cart-updated'));
    setCount(1);
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              type="button"
              onClick={() => {
                if (count === 1) {
                  return null;
                } else {
                  setCount((prevCount) => prevCount - 1);
                }
              }}
            >
              -
            </button>
            {count}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              type="button"
              onClick={() => {
                if (count === stockNumber) {
                  return null;
                } else {
                  setCount((prevCount) => prevCount + 1);
                }
              }}
            >
              +
            </button>
          </div>
          {stockNumber === 0 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : null}
          {stockNumber < 20 && (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span>{' '}
              left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>
        <button
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="disabled:ring-none w-36 rounded-3xl px-4 py-2 text-sm text-lama ring-1 ring-lama hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0"
          type="button"
          onClick={() => addProductToUserCart(productId)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
