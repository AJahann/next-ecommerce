/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Document, Types } from 'mongoose';

import { model, models, Schema } from 'mongoose';

export interface ReviewDocument extends Document {
  content: string;
  rating: number;
  createdAt: Date;
  product: Types.ObjectId;
  createdBy: Types.ObjectId;
}

const ReviewSchema = new Schema<ReviewDocument>({
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now },
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Review = models.Review || model<ReviewDocument>('Review', ReviewSchema);

export default Review;
