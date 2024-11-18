'use server';

import ProductRepository from '@/repositories/ProductRepository';

export async function getCartItems(cartData: { id: any }[]) {
  try {
    const ids = cartData.map((item: { id: any }) => item.id);
    const products = await ProductRepository.getProductsByIds(ids);

    const enrichedCartItems = products.map((product) => {
      return {
        ...product,
      };
    });

    return enrichedCartItems;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw new Error('Failed to retrieve cart items.');
  }
}
