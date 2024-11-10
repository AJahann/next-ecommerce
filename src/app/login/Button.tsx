import { useFormStatus } from 'react-dom';

const Button = ({ children }: { children: string }) => {
  const { pending } = useFormStatus();
  return (
    <input
      className="rounded-md bg-lama p-2 text-white disabled:cursor-not-allowed disabled:bg-pink-200"
      disabled={pending}
      type="submit"
      value={pending ? 'wait a minute...' : children}
    />
  );
};

export default Button;
