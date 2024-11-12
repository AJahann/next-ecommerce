/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';

const CustomizeProducts = () => {
  // Placeholder data
  const variants = [
    {
      _id: 'variant-1',
      choices: { Color: 'Red', Size: 'Small' },
      stock: { inStock: true, quantity: 5 },
    },
    {
      _id: 'variant-2',
      choices: { Color: 'Blue', Size: 'Medium' },
      stock: { inStock: false, quantity: 0 },
    },
  ];
  const productOptions = [
    {
      name: 'Color',
      choices: [
        { description: 'Red', value: '#FF0000' },
        { description: 'Blue', value: '#0000FF' },
      ],
    },
    {
      name: 'Size',
      choices: [{ description: 'Small' }, { description: 'Medium' }],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices.map((_) => {
              return <div key={_.description}></div>;
              // return option.name === 'Color' ? (
              //   <li
              //     className="relative size-8 rounded-full ring-1 ring-gray-300"
              //     key={choice.description}
              //     onClick={clickHandler}
              //     style={{
              //       backgroundColor: choice.value,
              //       cursor: 'pointer',
              //     }}
              //   >
              //     {selected && (
              //       <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2" />
              //     )}
              //   </li>
              // ) : (
              //   <li
              //     className="rounded-md px-4 py-1 text-sm ring-1 ring-gray-300"
              //     key={choice.description}
              //     onClick={clickHandler}
              //     style={{
              //       cursor: 'pointer',
              //       backgroundColor: selected ? '#f35c7a' : 'white',
              //       color: selected ? 'white' : '#f35c7a',
              //     }}
              //   >
              //     {choice.description}
              //   </li>
              // );
            })}
          </ul>
        </div>
      ))}
      {/* <Add
        productId={productId}
        stockNumber={selectedVariant?.stock?.quantity || 0}
        variantId={selectedVariant?._id || ''}
      /> */}
    </div>
  );
};

export default CustomizeProducts;
