"use client";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { FormDivider } from "./FormDivider";

export const FormSection = () => {
  return (
    <section className="flex flex-col w-[424px] max-md:w-full">
      <h1 className="mb-8 text-3xl text-black">Create new account</h1>
      <form className="flex flex-col gap-6">
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="px-5 w-full text-xl bg-white rounded-md shadow-sm h-[50px]"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="px-5 w-full text-xl bg-white rounded-md shadow-sm h-[50px]"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-5 w-full text-xl bg-white rounded-md shadow-sm h-[50px]"
          />
        </div>
        <label className="flex gap-2.5 items-center">
          <input
            type="checkbox"
            className="w-5 h-5 bg-white rounded-md border border-black"
          />
          <span className="text-xl text-black">
            I read and agree to terms and conditions
          </span>
        </label>
        <button
          type="submit"
          className="w-full h-12 text-lg text-white bg-sky-600 rounded-md shadow-sm"
        >
          Register
        </button>
        <FormDivider />
        <GoogleSignInButton />
        <p className="mt-5 text-xl text-center text-black">
          Already an have an account?
        </p>
        <p className="text-xl font-semibold text-center text-black">Login</p>
      </form>
    </section>
  );
};
