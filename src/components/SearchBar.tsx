'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex flex-1 items-center justify-between gap-4 rounded-md bg-gray-100 p-2"
      onSubmit={handleSearch}
    >
      <input
        className="flex-1 bg-transparent outline-none"
        name="name"
        placeholder="Search"
        type="text"
      />
      <button className="cursor-pointer">
        <Image height={16} width={16} alt="" src="/search.png" />
      </button>
    </form>
  );
};

export default SearchBar;
