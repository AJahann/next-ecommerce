/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef } from 'react';
import { useFormState } from 'react-dom';

import Button from './Button';
import { login, register } from './formActions';

const InputField = ({ label, id, type, error }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-gray-700" htmlFor={id}>
      {label}
    </label>
    <input
      className="rounded-md p-4 ring-2 ring-gray-300"
      id={id}
      name={id}
      placeholder={`Enter your ${label.toLowerCase()}`}
      type={type}
    />
    {error && <div className="text-red-600">{error}</div>}
  </div>
);

// eslint-disable-next-line complexity
const Form = ({ mode = 'REGISTER', changeMode }) => {
  const isRegisterMode = Boolean(mode === 'REGISTER');
  const [state, formAction] = useFormState(
    isRegisterMode ? register : login,
    undefined,
  );

  console.log(state);
  return (
    <form
      action={formAction}
      className="flex w-4/5 flex-col gap-8 md:w-2/4 xl:w-1/3"
    >
      <h1 className="text-2xl font-semibold">
        {mode === 'LOGIN' ? 'Login' : 'Register'}
      </h1>

      <div className="flex flex-col gap-2">
        <InputField
          error={state?.error?.username}
          id="username"
          label="Username"
          type="text"
        />
      </div>

      {mode === 'REGISTER' && (
        <div className="flex flex-col gap-2">
          <InputField
            error={state?.error?.email}
            id="email"
            label="E-mail"
            type="email"
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <InputField
          error={state?.error?.password}
          id="password"
          label="Password"
          type="password"
        />
      </div>

      <input name="mode" type="hidden" value={mode} />

      <Button>{mode === 'LOGIN' ? 'Login' : 'Register'}</Button>
      {state?.error?.global && (
        <div className="text-red-600">{state.error.global}</div>
      )}

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
