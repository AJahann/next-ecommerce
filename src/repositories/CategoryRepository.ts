import connectToDB from '@/database/db';
import Category from '@/models/Category';
import Product from '@/models/Product';

class CategoryRepository {
  async createCategory(data: any) {
    await connectToDB();
    const category = new Category(data);
    return category.save();
  }

  async createProductInCategory(productData: any, categoryId: string) {
    await connectToDB();
    const product = new Product(productData);
    const savedProduct = await product.save();

    await Category.findByIdAndUpdate(categoryId, {
      $push: { products: savedProduct._id },
    });

    return savedProduct;
  }

  async deleteCategory(id: string) {
    await connectToDB();
    return Category.findByIdAndDelete(id);
  }

  async deleteProductFromCategory(productId: string, categoryId: string) {
    await connectToDB();
    await Product.findByIdAndDelete(productId);

    await Category.findByIdAndUpdate(categoryId, {
      $pull: { products: productId },
    });
  }

  async getAllCategories() {
    await connectToDB();
    return Category.find();
  }

  async getCategoryById(id: string) {
    await connectToDB();
    return Category.findById(id).populate('products');
  }
}

export default new CategoryRepository();
