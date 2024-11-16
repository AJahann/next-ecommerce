/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Document, Types } from 'mongoose';

import { model, models, Schema } from 'mongoose';

export interface ProductDocument extends Document {
  slug: string;
  media: {
    mainMedia: { image: { url: string } };
    items: { image: { url: string } }[];
  };
  price: number;
  additionalInfoSections: { title: string; description: string }[];
  createdAt: Date;
  createdBy?: Types.ObjectId;
  type: string;
  category?: Types.ObjectId;
  reviews?: Types.ObjectId[];
  isFeatured: boolean;
  isNew: boolean;
  discount?: number;
  stock: number;
  tags?: string[];
}

const ProductSchema: Schema = new Schema({
  slug: { type: String, required: true, unique: true },
  media: {
    mainMedia: {
      image: {
        url: { type: String, required: true },
      },
    },
    items: [
      {
        image: {
          url: { type: String, required: false },
        },
      },
    ],
  },
  price: { type: Number, required: true },
  additionalInfoSections: [
    {
      title: { type: String },
      description: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  isFeatured: { type: Boolean, default: false },
  isNew: { type: Boolean, default: false },
  discount: { type: Number, default: 0 },
  stock: { type: Number, required: true },
  tags: [{ type: String }],
});

const Product =
  models.Product || model<ProductDocument>('Product', ProductSchema);

export default Product;
