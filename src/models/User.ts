/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Document, Types } from 'mongoose';

import { model, models, Schema } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  role: 'seller' | 'super_admin' | 'user';
  createdProducts?: Types.ObjectId[];
  storeName?: string;
  storeDescription?: string;
}

const UserSchema = new Schema<UserDocument>({
  username: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  role: {
    type: String,
    enum: ['user', 'super_admin', 'seller'],
    default: 'user',
  },
  createdProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  storeName: { type: String },
  storeDescription: { type: String },
});

const User = models.User || model<UserDocument>('User', UserSchema);

export default User;
