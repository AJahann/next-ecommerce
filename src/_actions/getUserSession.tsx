'use server';

import UserRepository from '@/repositories/UserRepository';
import { decrypt } from '@/utils/session';
import { cookies } from 'next/headers';

export async function getUserSession() {
  const cookieStore = cookies();
  const session = cookieStore.get('session')?.value;

  if (!session) return null;

  try {
    const sessionInfo = await decrypt(session);
    if (!sessionInfo?.userId) return null;

    const user = await UserRepository.getUserById(sessionInfo.userId);
    return user ? { username: user.username, email: user.email } : null;
  } catch {
    return null;
  }
}
