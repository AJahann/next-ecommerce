/* eslint-disable tailwindcss/no-custom-classname */
import type {
  AwaitedReactNode,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface Props {
  slug: any;
  _id: Key | null | undefined;
  media: {
    mainMedia: { image: { url: any } };
    items: { image: { url: any } }[];
  };
  price: {
    price:
      | bigint
      | boolean
      | number
      | string
      | Iterable<ReactNode>
      | Promise<AwaitedReactNode>
      | ReactElement
      | ReactPortal
      | null
      | undefined;
  };
  additionalInfoSections: any[];
}

const products: Props[] = [
  {
    slug: 'gold-ring',
    _id: '1',
    media: {
      mainMedia: { image: { url: '/product1.jpg' } },
      items: [
        { image: { url: '/images/gold-ring-side.jpg' } },
        { image: { url: '/images/gold-ring-top.jpg' } },
      ],
    },
    price: {
      price: 249.99,
    },
    additionalInfoSections: [
      {
        title: 'shortDesc',
        description:
          'A beautifully crafted gold ring perfect for any occasion.',
      },
      {
        title: 'details',
        description: 'Made from 18K gold with a stunning, polished finish.',
      },
    ],
  },
  {
    slug: 'silver-necklace',
    _id: '2',
    media: {
      mainMedia: { image: { url: '/product1.jpg' } },
      items: [
        { image: { url: '/images/silver-necklace-side.jpg' } },
        { image: { url: '/images/silver-necklace-top.jpg' } },
      ],
    },
    price: {
      price: 99.99,
    },
    additionalInfoSections: [
      {
        title: 'shortDesc',
        description: 'Elegant silver necklace that adds grace to any outfit.',
      },
      {
        title: 'details',
        description: 'Crafted from pure sterling silver with a sleek design.',
      },
    ],
  },
  {
    slug: 'diamond-earrings',
    _id: '3',
    media: {
      mainMedia: { image: { url: '/product1.jpg' } },
      items: [
        { image: { url: '/images/diamond-earrings-side.jpg' } },
        { image: { url: '/images/diamond-earrings-top.jpg' } },
      ],
    },
    price: {
      price: 599.99,
    },
    additionalInfoSections: [
      {
        title: 'shortDesc',
        description: 'Sparkling diamond earrings for special occasions.',
      },
      {
        title: 'details',
        description: 'Set with brilliant-cut diamonds in a timeless design.',
      },
    ],
  },
  {
    slug: 'platinum-bracelet',
    _id: '4',
    media: {
      mainMedia: { image: { url: '/product1.jpg' } },
      items: [
        { image: { url: '/images/platinum-bracelet-side.jpg' } },
        { image: { url: '/images/platinum-bracelet-top.jpg' } },
      ],
    },
    price: {
      price: 799.99,
    },
    additionalInfoSections: [
      {
        title: 'shortDesc',
        description: 'A luxurious platinum bracelet with a refined style.',
      },
      {
        title: 'details',
        description: 'Exquisitely crafted from high-quality platinum.',
      },
    ],
  },
];

const ProductList = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      {products.map((product) => (
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
              src={product.media.mainMedia.image.url || '/product.png'}
            />
            {product.media.items && (
              <Image
                fill
                alt=""
                className="absolute rounded-md object-cover"
                sizes="25vw"
                src={product.media.items[1]?.image?.url || '/product.png'}
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">product name</span>
            <span className="font-semibold">${product.price.price}</span>
          </div>

          <button
            className="w-max rounded-2xl px-4 py-2 text-xs text-lama ring-1 ring-lama hover:bg-lama hover:text-white"
            type="button"
          >
            Add to Cart
          </button>
        </Link>
      ))}
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
