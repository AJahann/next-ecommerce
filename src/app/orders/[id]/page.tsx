import Link from 'next/link';

const OrderPage = () => {
  return (
    <div className="flex h-[calc(100vh-180px)] flex-col items-center justify-center ">
      <div className="px-40 py-20 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <h1 className="text-xl">Order Details</h1>
        <div className="mt-12 flex flex-col gap-6">
          <div className="">
            <span className="font-medium">Order Id: </span>
            <span>order._id</span>
          </div>
          <div className="">
            <span className="font-medium">Receiver Name: </span>
            <span>firstName lastName</span>
          </div>
          <div className="">
            <span className="font-medium">Receiver Email: </span>
            <span>email</span>
          </div>
          <div className="">
            <span className="font-medium">Price: </span>
            <span></span>
          </div>
          <div className="">
            <span className="font-medium">Payment Status: </span>
            <span></span>
          </div>
          <div className="">
            <span className="font-medium">Order Status: </span>
            <span></span>
          </div>
          <div className="">
            <span className="font-medium">Delivery Address: </span>
            <span></span>
          </div>
        </div>
      </div>
      <Link className="mt-6 underline" href="/">
        Have a problem? Contact us
      </Link>
    </div>
  );
};

export default OrderPage;
