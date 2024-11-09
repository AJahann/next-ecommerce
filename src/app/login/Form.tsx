/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

interface Props {
  mode: 'LOGIN' | 'REGISTER';
  changeMode: () => void;
}
const Form = (data: Props) => {
  const { mode, changeMode } = data;
  return (
    <form className="flex w-4/5 flex-col gap-8 md:w-2/4 xl:w-1/3">
      <h1 className="text-2xl font-semibold">
        {mode === 'LOGIN' ? 'Login' : 'Register'}
      </h1>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700">Username</label>
        <input
          className="rounded-md p-4 ring-2 ring-gray-300"
          name="username"
          placeholder="Enter your username"
          type="text"
        />
      </div>
      {mode === 'REGISTER' && (
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            className="rounded-md p-4 ring-2 ring-gray-300"
            name="email"
            placeholder="your email..."
            type="email"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700">Password</label>
        <input
          className="rounded-md p-4 ring-2 ring-gray-300"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      {mode === 'LOGIN' && (
        <div className="cursor-pointer text-sm underline">Forgot Password?</div>
      )}
      <button
        className="rounded-md bg-lama p-2 text-white disabled:cursor-not-allowed disabled:bg-pink-200"
        type="button"
      >
        {mode === 'LOGIN' ? 'Login' : 'Register'}
      </button>
      {/* {error && <div className="text-red-600">{error}</div>} */}
      {mode === 'LOGIN' && (
        <div
          className="cursor-pointer text-sm underline"
          role="button"
          onClick={changeMode}
        >
          {"Don't"} have an account?
        </div>
      )}
      {mode === 'REGISTER' && (
        <div
          className="cursor-pointer text-sm underline"
          role="button"
          onClick={changeMode}
        >
          Have and account?
        </div>
      )}
      {/* {message && <div className="text-sm text-green-600">{message}</div>} */}
    </form>
  );
};

export default Form;
