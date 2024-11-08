import connectToDB from '@/database/db';
import Seller from '@/models/User';

class SellerRepository {
  async createSeller(data: any) {
    await connectToDB();
    const seller = new Seller(data);
    return seller.save();
  }

  async deleteSeller(id: string) {
    await connectToDB();
    return Seller.findByIdAndDelete(id);
  }

  async getSellerById(id: string) {
    await connectToDB();
    return Seller.findById(id).populate('products');
  }
}

export default new SellerRepository();
