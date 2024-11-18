'use client';
import Image from 'next/image';
import { useState } from 'react';

const ProductImages = ({ media }: any) => {
  const parsedMedia = JSON.parse(media);
  const images = [
    parsedMedia.mainMedia.image,
    ...parsedMedia.items.map((item: any) => item.image),
  ];
  const [index, setIndex] = useState(0);

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
      <div className="mt-8 flex justify-start gap-4">
        {images.map((item: any, i: number) => (
          <div
            className="relative mt-8 h-32 w-1/4 cursor-pointer gap-4"
            key={item._id}
          >
            <Image
              fill
              alt=""
              className="rounded-md object-cover"
              sizes="30vw"
              src={images[i].url}
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
