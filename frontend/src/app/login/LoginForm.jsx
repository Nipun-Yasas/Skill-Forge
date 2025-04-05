"use client";
import React from "react";
import GoogleButton from "./GoogleButton";
import Divider from "./Divider";

const LoginForm = () => {
  return (
    <section className="flex flex-col flex-1 items-center p-10 max-md:p-5">
      <div className="w-full max-w-[419px]">
        <h1 className="mb-4 text-3xl text-black">Welcome Back!</h1>
        <p className="mb-10 text-xl text-black text-opacity-50">
          Log in to your account
        </p>
        <form>
          <div className="mb-5 w-full">
            <div className="relative w-full bg-white rounded-md shadow-sm h-[50px]">
              <input
                type="email"
                placeholder="Email"
                className="px-5 text-xl rounded-md border-[nonepx] size-full text-black text-opacity-30"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="mb-5 w-full">
            <div className="relative w-full bg-white rounded-md shadow-sm h-[50px]">
              <input
                type="password"
                placeholder="Password"
                className="px-5 text-xl rounded-md border-[nonepx] size-full text-black text-opacity-30"
                aria-label="Password"
              />
            </div>
          </div>
          <label className="flex items-center mb-5">
            <input
              type="checkbox"
              className="mr-2.5 w-5 h-5 bg-white rounded-md border border-black"
            />
            <span className="text-xl text-black">Remember me</span>
          </label>
          <button
            type="submit"
            className="mb-5 w-full h-12 text-lg text-white bg-sky-600 rounded-md shadow-sm"
          >
            Log In
          </button>
        </form>
        <p className="mb-4 text-xl text-center text-black">
          Don't have an account?
        </p>
        <a
          href="#"
          className="block mb-10 text-xl font-semibold text-center text-black"
        >
          Register
        </a>
        <Divider text="or" />
        <GoogleButton />
      </div>
    </section>
  );
};

export default LoginForm;
