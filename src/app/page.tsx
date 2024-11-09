// "use client";

import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import Slider from '@/components/Slider';
import CategoryRepository from '@/repositories/CategoryRepository';
import ProductRepository from '@/repositories/ProductRepository';

const HomePage = async () => {
  const newProduct = await CategoryRepository.createProductInCategory(
    {
      slug: 'test2',
      media: {
        mainMedia: {
          image: { url: '/product.jpg' },
        },
        items: [],
      },
      price: 99.99,
      additionalInfoSections: [
        { title: 'Size', description: 'Available in various sizes' },
      ],
      createdAt: new Date(),
      type: 'Sports',
    },
    '672f568f60bd7dee01b61804',
  );
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="mb-12 px-4 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
