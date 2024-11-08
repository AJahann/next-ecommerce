import connectToDB from '@/database/db';
import Product from '@/models/Product';

class ProductRepository {
  async createProduct(data: any) {
    await connectToDB();

    const product = new Product(data);
    return product.save();
  }

  async deleteProduct(id: string) {
    await connectToDB();

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
    await connectToDB();

    return Product.findById(id);
  }

  async updateProduct(id: string, data: any) {
    await connectToDB();

    return Product.findByIdAndUpdate(id, data, { new: true });
  }
}

export default new ProductRepository();
