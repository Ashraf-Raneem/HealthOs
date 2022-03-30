import React from "react";

const Login = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-24">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="my-2">
          <h3 className="text-gray-700 text-lg font-bold mb-2">Sign-In</h3>
          <span className="text-mute text-sm">Access the project using mobile and a password</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="number"
            placeholder="phone number"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/register"
          >
            Not Registered yet ?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">&copy;2022 HealthOs. All rights reserved.</p>
    </div>
  );
};

export default Login;
