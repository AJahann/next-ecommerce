/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Document } from 'mongoose';

import { model, models, Schema } from 'mongoose';

export interface UserBase {
  username: string;
  email: string;
  password: string;
  role: 'super_admin' | 'user';
}

interface Props extends UserBase, Document {}

const UserSchema = new Schema<Props>({
  username: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  role: {
    type: String,
    enum: ['user', 'super_admin'],
    default: 'user',
  },
});

const User = models.User || model<UserBase>('User', UserSchema);

export default User;
