import Image from 'next/image';
import Link from 'next/link';

import Pagination from './Pagination';

const PRODUCT_PER_PAGE = 8;

const ProductList = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      {/* {res.items.map((product: products.Product) => (
        <Link
          className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          href={`/${product.slug}`}
          key={product._id}
        >
          <div className="relative h-80 w-full">
            <Image
              fill
              alt=""
              className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
              sizes="25vw"
              src={product.media?.mainMedia?.image?.url || '/product.png'}
            />
            {product.media?.items && (
              <Image
                fill
                alt=""
                className="absolute rounded-md object-cover"
                sizes="25vw"
                src={product.media?.items[1]?.image?.url || '/product.png'}
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{productt.name}/span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === 'shortDesc',
                  )?.description || '',
                ),
              }}
            ></div>
          )}
          <button className="w-max rounded-2xl px-4 py-2 text-xs text-lama ring-1 ring-lama hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))} */}
      {/* {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasNext={res.hasNext()}
          hasPrev={res.hasPrev()}
        />
      ) : null} */}
    </div>
  );
};

export default ProductList;
