/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import type { Document, Types } from 'mongoose';

import { model, models, Schema } from 'mongoose';

export interface OrderProduct {
  productId: Types.ObjectId; // مرجع به مدل Product
  quantity: number;
}

export interface Order {
  products: OrderProduct[];
  totalPrice: number;
  status: 'cancelled' | 'completed' | 'pending';
  createdAt: Date;
  address: string;
}

export interface UserBase {
  username: string;
  email: string;
  password: string;
  role: 'super_admin' | 'user';
  firstname?: string;
  surname?: string;
  orders?: Order[];
}

export interface Props extends UserBase, Document {}

const UserSchema = new Schema<Props>(
  {
    username: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    role: {
      type: String,
      enum: ['user', 'super_admin'],
      default: 'user',
    },
    firstname: { type: String, required: false },
    surname: { type: String, required: false },
    orders: [
      {
        products: [
          {
            productId: {
              type: Schema.Types.ObjectId,
              ref: 'Product',
              required: true,
            },
            quantity: { type: Number, required: true, default: 1 },
          },
        ],
        totalPrice: { type: Number, required: true },
        status: {
          type: String,
          enum: ['pending', 'completed', 'cancelled'],
          default: 'pending',
        },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { strict: true },
);

const User = models.User || model<Props>('User', UserSchema);

export default User;
