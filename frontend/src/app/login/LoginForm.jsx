"use client";

import { useState } from "react";
import GoogleButton from "./GoogleButton";
import Divider from "./Divider";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext"; // Updated path

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Client-side validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      const { user, token } = response.data;
      login(user, token); // Store user and token in context

      // If "Remember Me" is checked, you can extend token storage logic here
      if (formData.rememberMe) {
        // For simplicity, we're already storing in localStorage via AuthContext
        // You can add additional logic (e.g., longer token expiration) if needed
      }

      router.push("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Error logging in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col w-[360px] max-w-full px-4 md:px-0 mx-auto my-8">
      <h1 className="mb-6 text-2xl text-black text-center">Welcome Back!</h1>
      <p className="mb-6 text-sm text-black text-opacity-50 text-center">
        Log in to your account
      </p>
      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
            aria-label="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="rememberMe"
            className="w-4 h-4 bg-white rounded-md border border-black"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <span className="text-sm text-black">Remember me</span>
        </label>
        <button
          type="submit"
          className="w-full h-10 text-sm text-white bg-sky-600 rounded-md shadow-sm hover:bg-sky-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
        <p className="mt-4 text-sm text-center text-black">
          Don't have an account?
        </p>
        <Link
          href="/signUp"
          className="text-sm font-semibold text-center text-sky-600 hover:underline"
        >
          Register
        </Link>
        <Divider text="or" />
        <GoogleButton />
      </form>
    </section>
  );
};

export default LoginForm;