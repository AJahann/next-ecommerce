import connectToDB from '@/database/db';
import Product from '@/models/Product';

class ProductRepository {
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
