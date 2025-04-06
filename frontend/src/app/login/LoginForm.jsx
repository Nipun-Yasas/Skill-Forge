"use client";
import React from "react";
import GoogleButton from "./GoogleButton";
import Divider from "./Divider";
import Link from "next/link";
const LoginForm = () => {
  return (
    <section className="flex flex-col w-[360px] max-w-full px-4 md:px-0 mx-auto my-8">
      <h1 className="mb-6 text-2xl text-black text-center">Welcome Back!</h1>
      <p className="mb-6 text-sm text-black text-opacity-50 text-center">
        Log in to your account
      </p>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
            aria-label="Email"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
            aria-label="Password"
          />
        </div>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-4 h-4 bg-white rounded-md border border-black"
          />
          <span className="text-sm text-black">Remember me</span>
        </label>
        <button
          type="submit"
          className="w-full h-10 text-sm text-white bg-sky-600 rounded-md shadow-sm hover:bg-sky-700 transition"
        >
          Log In
        </button>
        <p className="mt-4 text-sm text-center text-black">
          Don't have an account?
        </p>
        <a
          href="#"
          className="text-sm font-semibold text-center text-sky-600 hover:underline"
        ><Link href="/signUp">
          Register</Link>
        </a>
        <Divider text="or" />
        <GoogleButton />
      </form>
    </section>
  );
};

export default LoginForm;
