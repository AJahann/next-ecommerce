'use client';

import { getUserSession } from '@/_actions/getUserSession';
import { useAuth } from '@/context/useAuth';
import { useEffect } from 'react';

export default function UserHydration() {
  const { setAuthState } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserSession();
      if (user) {
        setAuthState({
          loggedIn: true,
          user,
        });
      } else {
        setAuthState({
          loggedIn: false,
          user: null,
        });
      }
    };

    void fetchUser();
  }, [setAuthState]);

  return null;
}
