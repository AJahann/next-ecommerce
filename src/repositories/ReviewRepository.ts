import connectToDB from '@/database/db';
import Review from '@/models/Review';

class ReviewRepository {
  async createReview(data: any) {
    await connectToDB();
    const review = new Review(data);
    return review.save();
  }

  async deleteReview(id: string) {
    await connectToDB();
    return Review.findByIdAndDelete(id);
  }

  async getAllReviewsByProduct(productId: string) {
    await connectToDB();
    return Review.find({ product: productId }).populate('createdBy');
  }
}

export default new ReviewRepository();
