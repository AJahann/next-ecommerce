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

    return {
      success: true,
      user: {
        username: newUser?.username,
        email: newUser?.email,
      },
    };
  } catch (error) {
    console.log('we have error in register user => ', error);
    return {
      error: {
        global: ['Unexpected register error'],
      },
    };
  }
};

const loginSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters' })
    .trim()
    .toLowerCase(),
  password: z.string().min(1, { message: 'Password is required' }).trim(),
});

export const login = async (prevState: any, formData: FormData) => {
  const resultSchema = loginSchema.safeParse(Object.fromEntries(formData));

  if (!resultSchema.success) {
    return {
      error: resultSchema.error.flatten().fieldErrors,
    };
  }

  const { username, password } = resultSchema.data;

  try {
    await connectToDB();
    const user = await UserRepository.getUser(username, password);
    console.log('login user => ', user);
    if (!user) {
      return {
        error: {
          global: ['Invalid username or password'],
        },
      };
    }
    await createSession(user._id);

    return {
      success: true,
      user: {
        username: user?.username,
        email: user?.email,
      },
    };
  } catch (error) {
    console.log('we have error in login user => ', error);
    return {
      error: { global: ['Unexpected login error'] },
    };
  }
};
