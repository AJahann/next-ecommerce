import connectToDB from '@/database/db';
import Category from '@/models/Category';

class CategoryRepository {
  async createCategory(data: any) {
    await connectToDB();
    const category = new Category(data);
    return category.save();
  }

  async deleteCategory(id: string) {
    await connectToDB();
    return Category.findByIdAndDelete(id);
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
