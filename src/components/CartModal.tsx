/* eslint-disable @eslint-react/no-array-index-key */
'use client';

import type { ProductDocument } from '@/models/Product';

import { getCartItems } from '@/_actions/getCartItems';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CartItem {
  id: string;
  count: number;
}

const CartModal = ({ cartData }: { cartData: CartItem[] }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const enrichedCartItems = await getCartItems(cartData);
        setCartItems(enrichedCartItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchCartItems();
  }, [cartData]);

  const deleteAll = () => {
    document.cookie = `cart=[];path=/;max-age=100000`;
    setCartItems([]);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const checkout = () => {
    console.log('Proceeding to checkout...');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const subtotal = cartItems.reduce(
    (total, item, index) => total + item.price * cartData[index].count,
    0,
  );

  return (
    <div className="absolute right-0 top-12 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {cartItems.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {cartItems.map((item: ProductDocument, index) => (
              <div className="flex gap-4" key={index}>
                <Image
                  height={96}
                  width={72}
                  alt=""
                  className="rounded-md object-cover"
                  src={item.media.mainMedia.image.url}
                />
                <div className="flex w-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.slug.replaceAll('-', ' ')}
                      </h3>
                      <div className="flex items-center gap-2 rounded-sm bg-gray-50 p-1">
                        {cartData[index].count > 1 && (
                          <div className="text-xs text-green-500">
                            {cartData[index].count} x{' '}
                          </div>
                        )}
                        ${item.price}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{item.stock}</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Qty. {cartData[index].count}
                    </span>
                    <span
                      className="text-blue-500"
                      style={{ cursor: 'pointer' }}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <p className="mb-4 mt-2 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button
                className="rounded-md px-4 py-3 ring-1 ring-gray-300"
                type="button"
                onClick={deleteAll}
              >
                Delete all
              </button>
              <button
                className="rounded-md bg-black px-4 py-3 text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
                type="button"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
