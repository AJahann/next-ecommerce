import Image from 'next/image';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className="scrollbar-hide overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        <Link className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6" href="/">
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="20vw"
              src={'/woman.png'}
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">name</h1>
        </Link>
        <Link className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6" href="/">
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="20vw"
              src={'/woman.png'}
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">name</h1>
        </Link>
        <Link className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6" href="/">
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="20vw"
              src={'/woman.png'}
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">name</h1>
        </Link>
        <Link className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6" href="/">
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="20vw"
              src={'/woman.png'}
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">name</h1>
        </Link>
        <Link className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6" href="/">
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="20vw"
              src={'/woman.png'}
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">name</h1>
        </Link>
        <Link className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6" href="/">
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="20vw"
              src={'/woman.png'}
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">name</h1>
        </Link>
        <Link className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6" href="/">
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="20vw"
              src={'/woman.png'}
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">name</h1>
        </Link>
        <Link className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6" href="/">
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="20vw"
              src={'/woman.png'}
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">name</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
