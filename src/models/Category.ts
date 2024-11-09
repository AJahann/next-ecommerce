/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Document, Types } from 'mongoose';

import { model, models, Schema } from 'mongoose';

import Product from './Product';

export interface CategoryDocument extends Document {
  name: string;
  description: string;
  image: { url: string };
  products: Types.ObjectId[];
}

const CategorySchema = new Schema<CategoryDocument>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  image: { url: { type: String, required: true } },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

const Category =
  models.Category || model<CategoryDocument>('Category', CategorySchema);

export default Category;
