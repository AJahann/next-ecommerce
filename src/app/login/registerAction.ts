'use server';

import connectToDB from '@/database/db';
import UserRepository from '@/repositories/UserRepository';
import { createSession } from '@/utils/session';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const registerSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters' })
    .trim()
    .toLowerCase(),
  email: z.string().email({ message: 'Invalid email address' }).trim(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(16, { message: 'Wait a minute 16 characters?????' })
    .trim(),
});

export const register = async (prevState: any, formData: FormData) => {
  const resultSchema = registerSchema.safeParse(Object.fromEntries(formData));

  if (!resultSchema.success) {
    return {
      error: resultSchema.error.flatten().fieldErrors,
    };
  }

  const { email, password, username } = resultSchema.data;

  try {
    await connectToDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    const isFirst = await UserRepository.isFirstUser();
    const newUser = await UserRepository.createUser({
      email,
      password: hashedPassword,
      username,
      role: isFirst ? 'super_admin' : 'user',
    });

    await createSession(newUser._id);

    return { success: true };
  } catch (error) {
    console.log('we have error in register user => ', error);
  }
};
