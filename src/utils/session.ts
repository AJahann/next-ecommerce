/* eslint-disable @typescript-eslint/consistent-type-definitions */
'server only';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.SESSION_SECRET;
if (!secretKey) {
  throw new Error('SESSION_SECRET environment variable is not defined');
}
const encodedKey = new TextEncoder().encode(secretKey);

type SessionPayLoad = {
  userId: string;
  expiresAt: Date;
};

export const encrypt = async (payload: SessionPayLoad) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
};

export const decrypt = async (session: string | undefined = '') => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'], // Note: algorithms is an array
    });
    return payload;
  } catch (error) {
    console.log('Failed to verify session =>', error);
  }
};

export const createSession = async (userId: string) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 120 * 1000);
  const session = await encrypt({ userId, expiresAt });

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    path: '/',
    expires: expiresAt,
  });
};
