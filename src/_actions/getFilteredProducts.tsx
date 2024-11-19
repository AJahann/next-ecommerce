'use server';

import ProductRepository from '@/repositories/ProductRepository';

const getFilteredProducts = async ({
  category,
  minPrice,
  maxPrice,
  sortBy,
  page = 1,
  limit = 10,
}: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  page?: number;
  limit?: number;
}) => {
  const filters: any = {};

  if (category) filters.category = category;
  if (minPrice) filters.price = { ...filters.price, $gte: minPrice };
  if (maxPrice) filters.price = { ...filters.price, $lte: maxPrice };

  const sortOptions = sortBy?.split(' ') ?? [];
  const [order = 'asc', field = 'price'] = sortOptions;

  const products = await ProductRepository.getProducts({
    filters,
    sort: { [field]: order === 'asc' ? 1 : -1 },
    page,
    limit,
  });

  return JSON.stringify(products);
};

export default getFilteredProducts;
