import type { NextRequest } from 'next/server';

import { isValidObjectId } from 'mongoose';
import { NextResponse } from 'next/server';

import { decrypt } from './utils/session';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('session')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const payload = await decrypt(token);

    if (isValidObjectId(payload?.userId)) {
      return NextResponse.next();
    } else {
      throw 'userId in not valied :((';
    }
  } catch (error) {
    console.log('Middleware Error:', error);

    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/profile', '/success', '/orders'],
};
