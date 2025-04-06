"use client";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { FormDivider } from "./FormDivider";

export const FormSection = () => {
  return (
    <section className="flex flex-col w-[360px] max-md:w-full">
      <h1 className="mb-6 text-2xl text-black">Create new account</h1>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
          />
        </div>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-4 h-4 bg-white rounded-md border border-black"
          />
          <span className="text-sm text-black">
            I read and agree to terms and conditions
          </span>
        </label>
        <button
          type="submit"
          className="w-full h-10 text-sm text-white bg-sky-600 rounded-md shadow-sm"
        >
          Register
        </button>
        <FormDivider />
        <GoogleSignInButton />
        <p className="mt-4 text-sm text-center text-black">
          Already have an account?
        </p>
        <p className="text-sm font-semibold text-center text-black">Login</p>
      </form>
    </section>
  );
};
