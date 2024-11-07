/* eslint-disable no-return-await */
import connectToDB from '@/database/db';

import Product from '../models/Product';

class ProductRepository {
  async createProduct(data: any) {
    const product = new Product(data);
    return await product.save();
  }

  async deleteProduct(id: string) {
    return Product.findByIdAndDelete(id);
  }

  async getAllCategoryList() {
    await connectToDB();

    const allCategories = (await Product.find()).map(
      (product) => product.category,
    );
    const categories = new Set(allCategories);

    return Array.from(categories);
  }

  async getAllProducts() {
    await connectToDB();

    return Product.find();
  }

  async getProductById(id: string) {
    return Product.findById(id);
  }

  async updateProduct(id: string, data: any) {
    return Product.findByIdAndUpdate(id, data, { new: true });
  }
}

export default new ProductRepository();
