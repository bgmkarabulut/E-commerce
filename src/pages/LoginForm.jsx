import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loginUser } from "../redux/actions/clientActions";
import md5 from "md5";
import { useState } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    const { email, password, remember } = data;
    try {
      const user = await dispatch(loginUser({ email, password }));
      if (user) {
        if (remember) {
          localStorage.setItem("token", user.token);
        }
        navigate(location.state?.from || "/");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {errorMessage && (
        <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center">
          <input type="checkbox" {...register("remember")} className="mr-2" />
          <label className="text-sm">Remember Me</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
