'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
];

const ProductImages = () => {
  const [index] = useState(0);

  return (
    <div className="">
      <div className="relative h-[500px]">
        <Image
          fill
          alt=""
          className="rounded-md object-cover"
          sizes="50vw"
          src={images[index].url}
        />
      </div>
      <div className="mt-8 flex justify-between gap-4">
        {images.map((item: any) => (
          <div
            className="relative mt-8 h-32 w-1/4 cursor-pointer gap-4"
            key={item._id}
          >
            <Image
              fill
              alt=""
              className="rounded-md object-cover"
              sizes="30vw"
              src={item.image?.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
