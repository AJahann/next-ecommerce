import type { UserBase } from '@/models/User';

import connectToDB from '@/database/db';
import User from '@/models/User';

class UserRepository {
  async createUser(data: UserBase) {
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

  async isFirstUser() {
    await connectToDB();
    const existUser = await User.find();
    return existUser[0];
  }
}

export default new UserRepository();
