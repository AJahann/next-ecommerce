'use client';

import { useFormStatus } from 'react-dom';

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="max-w-96 cursor-pointer rounded-md bg-lama p-2 text-white disabled:cursor-not-allowed disabled:bg-pink-200"
      disabled={pending}
    >
      {pending ? 'Updating...' : 'Update'}
    </button>
  );
};

export default UpdateButton;
