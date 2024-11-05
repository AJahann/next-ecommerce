import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import Menu from './Menu';
import SearchBar from './SearchBar';
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import('./NavIcons'), { ssr: false });

const Navbar = () => {
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* MOBILE */}
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden h-full items-center justify-between gap-8 md:flex">
        {/* LEFT */}
        <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
          <Link className="flex items-center gap-3" href="/">
            <Image height={24} width={24} alt="" src="/logo.png" />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <div className="hidden gap-4 xl:flex">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex w-2/3 items-center justify-between gap-8 xl:w-1/2">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
