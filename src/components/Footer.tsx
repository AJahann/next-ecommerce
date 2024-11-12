import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mt-24 bg-gray-100 px-4 py-24 text-sm md:px-8 lg:px-16 2xl:px-64">
      {/* TOP */}
      <div className="flex flex-col justify-between gap-24 md:flex-row">
        {/* LEFT */}
        <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <span className="font-semibold">hello@lama.dev</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6">
            <Image height={16} width={16} alt="" src="/facebook.png" />
            <Image height={16} width={16} alt="" src="/instagram.png" />
            <Image height={16} width={16} alt="" src="/youtube.png" />
            <Image height={16} width={16} alt="" src="/pinterest.png" />
            <Image height={16} width={16} alt="" src="/x.png" />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden w-1/2 justify-between lg:flex">
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-medium">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-medium">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-medium">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
          <h1 className="text-lg font-medium">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              className="w-3/4 p-4"
              placeholder="Email address"
              type="text"
            />
            <button className="w-1/4 bg-lama text-white" type="button">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image height={20} width={40} alt="" src="/discover.png" />
            <Image height={20} width={40} alt="" src="/skrill.png" />
            <Image height={20} width={40} alt="" src="/paypal.png" />
            <Image height={20} width={40} alt="" src="/mastercard.png" />
            <Image height={20} width={40} alt="" src="/visa.png" />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="">© 2024 Lama Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="mr-4 text-gray-500">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="mr-4 text-gray-500">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
