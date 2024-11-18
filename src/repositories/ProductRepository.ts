import connectToDB from '@/database/db';
import Product from '@/models/Product';

class ProductRepository {
  async getAllProducts() {
    await connectToDB();

    try {
      return await Product.find();
    } catch (error) {
      console.error('Error fetching all products:', error);
      throw error;
    }
  }

  async getProductById(id: string) {
    await connectToDB();

    try {
      return await Product.findById(id);
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error);
      throw error;
    }
  }

  async getProductBySlug(slug: string) {
    await connectToDB();

    try {
      return await Product.findOne({ slug });
    } catch (error) {
      console.error(`Error fetching product with slug ${slug}:`, error);
      throw error;
    }
  }

  async getProducts(filters: Record<string, any> = {}) {
    await connectToDB();

    try {
      return await Product.find(filters);
    } catch (error) {
      console.error('Error fetching products with filters:', error);
      throw error;
    }
  }

  async getProductsByIds(ids: string[]) {
    return Product.find({ _id: { $in: ids } }).lean();
  }

  async updateProduct(id: string, data: any) {
    await connectToDB();

    try {
      return await Product.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.error(`Error updating product with id ${id}:`, error);
      throw error;
    }
  }
}

export default new ProductRepository();
