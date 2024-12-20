'use client';

import { useAuth } from '@/context/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import CartModal from './CartModal';

const NavIcons = () => {
  const { loggedIn } = useAuth();
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const [cart, setCart] = useState<any[]>([]);

  const router = useRouter();

  const handleOpenProfile = () => {
    if (loggedIn) {
      setIsOpenProfile(!isOpenProfile);
    } else {
      router.push('/login');
    }
  };

  useEffect(() => {
    const updateCart = () => {
      const userCartCookie = document.cookie
        .split('; ')
        .find((item) => item.startsWith('cart='));
      if (userCartCookie) {
        try {
          setCart(JSON.parse(decodeURIComponent(userCartCookie.split('=')[1])));
        } catch (e) {
          console.error('Failed to parse cart cookie:', e);
        }
      }
    };

    updateCart();
    window.addEventListener('cart-updated', updateCart);

    return () => window.removeEventListener('cart-updated', updateCart);
  }, []);

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <Image
        height={22}
        width={22}
        alt=""
        className="cursor-pointer"
        src="/profile.png"
        onClick={handleOpenProfile}
      />
      {isOpenProfile && (
        <div className="absolute left-0 top-12 z-20 rounded-md bg-white p-4 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        height={22}
        width={22}
        alt=""
        className="cursor-pointer"
        src="/notification.png"
      />
      <div className="relative cursor-pointer">
        <Image
          height={22}
          width={22}
          alt=""
          src="/cart.png"
          onClick={() => setIsOpenCart(!isOpenCart)}
        />
        {cart.length > 0 && (
          <div className="absolute -right-4 -top-4 flex size-6 items-center justify-center rounded-full bg-lama text-sm text-white">
            {cart.length}
          </div>
        )}
        {isOpenCart && <CartModal cartData={cart} />}
      </div>
    </div>
  );
};

export default NavIcons;
