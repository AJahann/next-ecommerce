'use server';

import connectToDB from '@/database/db';
import UserRepository from '@/repositories/UserRepository';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

const action = async (_: any, formData: FormData) => {
  const mode = formData.get('mode');
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  if (typeof username !== 'string' || typeof password !== 'string') {
    return { error: 'Invalid form data.', message: null };
  }

  if (
    !username.trim() ||
    !password.trim() ||
    (mode === 'REGISTER' && !email?.trim())
  ) {
    return { error: 'Please fill in all required fields.', message: null };
  }

  try {
    await connectToDB();
    const toLowerCaseUsername = username.toLocaleLowerCase();

    if (mode === 'REGISTER') {
      const hashedPassword = await bcrypt.hash(password, 10);
      const existUser = await UserRepository.isFirstUser();
      const newUser = await UserRepository.createUser({
        username: toLowerCaseUsername,
        password: hashedPassword,
        email: email as string,
        role: existUser ? 'user' : 'super_admin',
      });
      console.log('the user REGISTER successfully => ', newUser);
    } else if (mode === 'LOGIN') {
      const user = await UserRepository.getUser(toLowerCaseUsername, password);

      console.log('login was successfully =>', user);
      if (!user) {
        return { error: 'Invalid username or password.', message: null };
      }
    }
  } catch (error) {
    console.log('Action error => ', error);
    return { message: null, error: 'Oops we encountered an error.' };
  }

  redirect('/');
  return { message: 'success', error: null };
};

export default action;
