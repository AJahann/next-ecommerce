'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        height={28}
        width={28}
        alt=""
        className="cursor-pointer"
        src="/menu.png"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute left-0 top-20 z-10 flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-8 bg-black text-xl  text-white">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
