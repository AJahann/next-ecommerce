import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Image from 'next/image';

const ListPage = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* CAMPAIGN */}
      <div className="hidden h-64 justify-between bg-pink-50 px-4 sm:flex">
        <div className="flex w-2/3 flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button
            className="w-max rounded-3xl bg-lama px-5 py-3 text-sm text-white"
            type="button"
          >
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image fill alt="" className="object-contain" src="/woman.png" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">For You!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
