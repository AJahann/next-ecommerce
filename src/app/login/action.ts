'use server';

import connectToDB from '@/database/db';
import UserRepository from '@/repositories/UserRepository';
import { redirect } from 'next/navigation';

const action = async (_: any, formData: FormData) => {
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    typeof email !== 'string'
  ) {
    return {
      error: 'Invalid form data.',
      message: null,
    };
  }

  if (!username.trim() || !password.trim() || !email.trim()) {
    return {
      error: 'please, please just enter your info -_-',
      message: null,
    };
  }

  try {
    await connectToDB();
    const existUser = await UserRepository.isFirstUser();
    const newUser = await UserRepository.createUser({
      username,
      password,
      email,
      role: existUser ? 'user' : 'super_admin',
    });

    console.log(newUser);
  } catch (error) {
    console.log('create user err => ', error);
    return {
      message: null,
      error: 'Oops we have a error :/',
    };
  }

  redirect('/');
  return { message: 'success', error: null };
};

export default action;
