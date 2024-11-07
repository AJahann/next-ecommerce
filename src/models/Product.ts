/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Document } from 'mongoose';

import mongoose, { Schema } from 'mongoose';

export interface ProductDocument extends Document {
  slug: string;
  media: {
    mainMedia: { image: { url: string } };
    items: { image: { url: string } }[];
  };
  price: number;
  additionalInfoSections: { title: string; description: string }[];
  createdAt: Date;
  createdBy: string;
  type: string;
  category: string;
}

const ProductSchema: Schema = new Schema({
  slug: { type: String, required: true },
  media: {
    mainMedia: { image: { url: { type: String, required: true } } },
    items: [{ image: { url: { type: String } } }],
  },
  price: { type: Number, required: true },
  additionalInfoSections: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
});

const Product =
  mongoose.models.Product ||
  mongoose.model<ProductDocument>('Product', ProductSchema);

export default Product;
