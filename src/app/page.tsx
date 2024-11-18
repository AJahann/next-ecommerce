// "use client";

import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import Slider from '@/components/Slider';
import ProductRepository from '@/repositories/ProductRepository';
// import seedDB from '@/utils/seedDB';

const HomePage = async () => {
  // void seedDB();

  const featuredProducts = await ProductRepository.getProducts({
    isFeatured: true,
  });
  const newProducts = await ProductRepository.getProducts({
    isNew: true,
  });
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList products={featuredProducts} />
      </div>
      <div className="mt-24">
        <h1 className="mb-12 px-4 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList products={newProducts} />
      </div>
    </div>
  );
};

export default HomePage;
