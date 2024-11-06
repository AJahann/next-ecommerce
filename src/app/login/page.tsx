/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';

const LoginPage = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <form className="flex w-4/5 flex-col gap-8 md:w-2/4 xl:w-1/3">
        <h1 className="text-2xl font-semibold">REGISTER</h1>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Username</label>
          <input
            className="rounded-md p-4 ring-2 ring-gray-300"
            name="username"
            placeholder="john"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            className="rounded-md p-4 ring-2 ring-gray-300"
            name="email"
            placeholder="john@gmail.com"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Verification Code</label>
          <input
            className="rounded-md p-4 ring-2 ring-gray-300"
            name="emailCode"
            placeholder="Code"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Password</label>
          <input
            className="rounded-md p-4 ring-2 ring-gray-300"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="cursor-pointer text-sm underline">Forgot Password?</div>
        <button
          className="rounded-md bg-lama p-2 text-white disabled:cursor-not-allowed disabled:bg-pink-200"
          type="button"
        >
          title
        </button>
        {/* {error && <div className="text-red-600">{error}</div>} */}
        {/* {mode === MODE.LOGIN && (
          <div
            className="cursor-pointer text-sm underline"
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="cursor-pointer text-sm underline"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Have and account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="cursor-pointer text-sm underline"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to Login
          </div>
        )}
        {message && <div className="text-sm text-green-600">{message}</div>} */}
      </form>
    </div>
  );
};

export default LoginPage;
