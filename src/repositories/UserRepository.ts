import type { UserBase } from '@/models/User';

import connectToDB from '@/database/db';
import User from '@/models/User';
import bcrypt from 'bcrypt';

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

  async getUser(username: string, password: string) {
    const user = await User.findOne({ username });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async getUserById(id: string) {
    await connectToDB();
    return User.findById(id).populate('products');
  }

  async isFirstUser() {
    await connectToDB();
    const users = await User.find();
    const result = Boolean(!users[0]);
    return result;
  }
}

export default new UserRepository();
