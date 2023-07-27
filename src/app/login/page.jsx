"use client";

import Link from "next/link";
import React from "react";
import Button from "../../components/button/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = { useRouter };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      // Send the form data to the API route
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const data = await response.json();
      console.log(data); // Log the response from the API

      // Redirect to another page after successful submission (optional)
      router.push("/success-page");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className=" bg-slate-200 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        <p className="mt-4 text-gray-500">Sin up in:</p>
        <span>Google | GitHub | Facebook </span>
      </div>

      <form
        action="post"
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </p>

          <Button
            but_name="Login"
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
