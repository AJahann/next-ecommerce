'use client';

import Image from 'next/image';
import Link from 'next/link';

const NavIcons = () => {
  const isProfileOpen = false;
  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <Image
        height={22}
        width={22}
        alt=""
        className="cursor-pointer"
        src="/profile.png"
      />
      {isProfileOpen && (
        <div className="absolute left-0 top-12 z-20 rounded-md bg-white p-4 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">test</div>
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
        <Image height={22} width={22} alt="" src="/cart.png" />
        <div className="absolute -right-4 -top-4 flex size-6 items-center justify-center rounded-full bg-lama text-sm text-white">
          5
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
