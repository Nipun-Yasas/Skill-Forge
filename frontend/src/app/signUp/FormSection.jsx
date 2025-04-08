"use client";

import { useState } from "react";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { FormDivider } from "./FormDivider";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext"; // Updated path

export const FormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
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
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!formData.termsAccepted) {
      setError("You must agree to the terms and conditions");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        profileImageUrl: "/default.png", // Default value; you can add file upload later
      });

      const { user, token } = response.data;
      login(user, token); // Store user and token in context
      router.push("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Error registering user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col w-[360px] max-md:w-full">
      <h1 className="mb-6 text-2xl text-black">Create new account</h1>
      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="px-4 w-full text-base bg-white rounded-md shadow-sm h-[40px]"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            className="w-4 h-4 bg-white rounded-md border border-black"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <span className="text-sm text-black">
            I read and agree to terms and conditions
          </span>
        </label>
        <button
          type="submit"
          className="w-full h-10 text-sm text-white bg-sky-600 rounded-md shadow-sm hover:bg-sky-700 transition"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <FormDivider />
        <GoogleSignInButton />
        <p className="mt-4 text-sm text-center text-black">
          Already have an account?
        </p>
        <p className="text-sm font-semibold text-center text-black">
          <Link href="/login">Login</Link>
        </p>
      </form>
    </section>
  );
};

export default FormSection;