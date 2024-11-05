'use client';

import Image from 'next/image';

const CartModal = () => {
  // Placeholder data for demonstration purposes
  const cartItems = [
    {
      _id: '1',
      image: '/path/to/image.jpg',
      productName: 'Sample Product 1',
      quantity: 2,
      price: { amount: 20 },
      availability: { status: 'In Stock' },
    },
    {
      _id: '2',
      image: '/path/to/image2.jpg',
      productName: 'Sample Product 2',
      quantity: 1,
      price: { amount: 45 },
      availability: { status: 'Out of Stock' },
    },
  ];
  const subtotal = { amount: 85 };
  const isLoading = false;

  return (
    <div className="absolute right-0 top-12 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {cartItems.length === 0 ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cartItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    height={96}
                    width={72}
                    alt=""
                    className="rounded-md object-cover"
                    src={item.image}
                  />
                )}
                <div className="flex w-full flex-col justify-between">
                  {/* TOP */}
                  <div className="">
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">{item.productName}</h3>
                      <div className="flex items-center gap-2 rounded-sm bg-gray-50 p-1">
                        {item.quantity > 1 && (
                          <div className="text-xs text-green-500">
                            {item.quantity} x{' '}
                          </div>
                        )}
                        ${item.price.amount}
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-gray-500">
                      {item.availability.status}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span
                      className="text-blue-500"
                      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                      style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">${subtotal.amount}</span>
            </div>
            <p className="mb-4 mt-2 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button
                className="rounded-md px-4 py-3 ring-1 ring-gray-300"
                type="button"
              >
                View Cart
              </button>
              <button
                className="rounded-md bg-black px-4 py-3 text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
                type="button"
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
