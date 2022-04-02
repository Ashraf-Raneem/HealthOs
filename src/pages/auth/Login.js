import React from "react";
import { useForm } from "react-hook-form";
import Head from "../../layout/head/Head";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    const { phone, password } = data;

    if (phone === "1732710968" && password === "12345") {
      localStorage.setItem("accessToken", "accessToken");
      window.location.reload();
    }
  };

  return (
    <React.Fragment>
      <Head title="Login" />
      <div className="w-full max-w-md mx-auto mt-24">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="my-2">
            <h3 className="text-gray-700 text-lg font-bold mb-2">Sign-In</h3>
            <span className="text-mute text-sm">Access the project using mobile and a password</span>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phone"
              id="phone"
              type="text"
              prefix="+880"
              defaultValue={1732710968}
              placeholder="phone number"
              {...register("phone", { required: true })}
            />
            {errors.phone && <p className="text-red-500 mt-2 text-xs italic">This field is required</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              defaultValue="12345"
              placeholder="******************"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-xs italic">Please choose a password.</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
    </React.Fragment>
  );
};

export default Login;
