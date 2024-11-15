'use server';

import connectToDB from '@/database/db';
import UserRepository from '@/repositories/UserRepository';
import { createSession, decrypt } from '@/utils/session';
import { cookies } from 'next/headers';
import { z } from 'zod';

const updateSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters' })
    .trim()
    .toLowerCase(),
  email: z.string().email({ message: 'Invalid email address' }).trim(),
  firstname: z.string().trim(),
  surname: z.string().trim(),
});

const updateAction = async (prevState: any, formData: FormData) => {
  const resultSchema = updateSchema.safeParse(Object.fromEntries(formData));

  if (!resultSchema.success) {
    return {
      error: resultSchema.error.flatten().fieldErrors,
    };
  }

  const { email, firstname, surname, username } = resultSchema.data;

  try {
    await connectToDB();
    const session = cookies().get('session')?.value;

    if (!session) {
      throw new Error('Session is not valid :(');
    }

    const verifySession = await decrypt(session);
    if (!verifySession) {
      throw new Error('User ID is not valid :(');
    }

    const updatedUser = await UserRepository.updateUserInfoById(
      verifySession.userId,
      {
        email,
        firstname,
        surname,
        username,
      },
    );

    if (!updatedUser) {
      throw new Error('Failed to update user');
    }

    await createSession(updatedUser._id);

    return {
      success: true,
      user: {
        username: updatedUser.username,
        email: updatedUser.email,
      },
    };
  } catch (error: unknown) {
    console.error('Error updating user:', error);
    return {
      error: {
        global: [
          error instanceof Error ? error.message : 'Unexpected error occurred',
        ],
      },
    };
  }
};

export default updateAction;
