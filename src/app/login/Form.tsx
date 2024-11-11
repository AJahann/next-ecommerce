import { redirect } from 'next/navigation';
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

import Button from './Button';
import { register } from './registerAction';

interface Props {
  mode: 'LOGIN' | 'REGISTER';
  changeMode: () => void;
}

const Form = ({ mode, changeMode }: Props) => {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(register, undefined);

  useEffect(() => {
    if (state?.success) {
      return redirect('/');
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex w-4/5 flex-col gap-8 md:w-2/4 xl:w-1/3"
      ref={ref}
    >
      <h1 className="text-2xl font-semibold">
        {mode === 'LOGIN' ? 'Login' : 'Register'}
      </h1>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700" htmlFor="username">
          Username
        </label>
        <input
          className="rounded-md p-4 ring-2 ring-gray-300"
          id="username"
          name="username"
          placeholder="Enter your username"
          type="text"
        />
        {state?.error?.username && (
          <div className="text-red-600">{state.error.username[0]}</div>
        )}
      </div>

      {mode === 'REGISTER' && (
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700" htmlFor="email">
            E-mail
          </label>
          <input
            className="rounded-md p-4 ring-2 ring-gray-300"
            id="email"
            name="email"
            placeholder="Your email..."
            type="email"
          />
          {state?.error?.email && (
            <div className="text-red-600">{state.error.email[0]}</div>
          )}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md p-4 ring-2 ring-gray-300"
          id="password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        {state?.error?.password && (
          <div className="text-red-600">{state.error.password[0]}</div>
        )}
      </div>

      <input name="mode" type="hidden" value={mode} />

      <Button>{mode === 'LOGIN' ? 'Login' : 'Register'}</Button>
      {/* {state.error && <div className="text-red-600">{state.error}</div>} */}

      <div
        className="cursor-pointer text-sm underline"
        role="button"
        onClick={changeMode}
      >
        {mode === 'LOGIN' ? "Don't have an account?" : 'Have an account?'}
      </div>
    </form>
  );
};

export default Form;
