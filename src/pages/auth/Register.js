import React, { useRef } from "react";
import Head from "../../layout/head/Head";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    navigate("/login");
    toast.success("Registered Succesfully");
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <React.Fragment>
      <Head title="Register" />
      <div className="w-full max-w-md mx-auto mt-24">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="my-2">
            <h3 className="text-gray-700 text-lg font-bold mb-2">Sign-Up</h3>
            <span className="text-mute text-sm">Register for the project using mobile and a password</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone number"
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
              placeholder="******************"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-xs italic">Please choose a password.</p>}
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="******************"
              {...register("confirmPassword", {
                required: "Please choose a password",
                validate: (value) => value === password.current || "The passwords do not match",
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
          </div>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mb-6" href="/">
            Already a user ?
          </a>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy;2022 HealthOs. All rights reserved.</p>
      </div>
    </React.Fragment>
  );
};

export default Register;
