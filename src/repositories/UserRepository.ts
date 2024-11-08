import connectToDB from '@/database/db';
import User from '@/models/User';

class UserRepository {
  async createUser(data: any) {
    await connectToDB();
    const user = new User(data);
    return user.save();
  }

  async deleteUser(id: string) {
    await connectToDB();
    return User.findByIdAndDelete(id);
  }

  async getUserById(id: string) {
    await connectToDB();
    return User.findById(id).populate('products');
  }
}

export default new UserRepository();
