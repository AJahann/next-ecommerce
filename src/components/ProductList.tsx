/* eslint-disable tailwindcss/no-custom-classname */

import type { ProductDocument } from '@/models/Product';

import ProductRepository from '@/repositories/ProductRepository';
import Image from 'next/image';
import Link from 'next/link';

const ProductList = async () => {
  const products: ProductDocument[] = await ProductRepository.getAllProducts();

  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      {products.slice(0, 4).map((product) => (
        <Link
          className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          href={product.slug}
          key={product.id}
        >
          <div className="relative h-80 w-full">
            <Image
              fill
              alt=""
              className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
              sizes="25vw"
              src={product.media.mainMedia.image.url}
            />
            <Image
              fill
              alt=""
              className="absolute rounded-md object-cover"
              sizes="25vw"
              src={product.media.items[0]?.image?.url}
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">
              {product.slug.replaceAll('-', ' ')}
            </span>
            <span className="font-semibold">${product.price}</span>
          </div>

          <button
            className="w-max rounded-2xl px-4 py-2 text-xs text-lama ring-1 ring-lama hover:bg-lama hover:text-white"
            type="button"
          >
            Add to Cart
          </button>
        </Link>
      ))}
      {/* <Pagination /> */}
    </div>
  );
};

export default ProductList;
