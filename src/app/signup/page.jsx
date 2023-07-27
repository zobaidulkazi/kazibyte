"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/button/Button";

const SignUpForm = () => {
  const [SignUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ChannelMergerNode: "",
  });

  const handleSubmit = async (e) => {
   await e.preventDefault(e);

    console.log(SignUpData);

    try {
      // Send the form data to the API route
      const response = await fetch("/api/users/signup", {
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
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-slate-200">
      <section className=" dark:bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt="Pattern"
              src=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                Welcome to KaziByte ⤴
              </h1>

              <div>
                <span className="mt-4 leading-relaxed text-gray-00 dark:text-gray-900 m-2 p-2">
                  Sign Up in:
                </span>
                <span>Google | Github | Facebook</span>
              </div>

              <form
                action="#"
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    First Name
                  </label>

                  <div className="relative">
                    <input
                      type="firstName"
                      name="firstName"
                      id="firstName"
                      value={SignUpData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter firstName"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      type="lastName"
                      name="lastName"
                      id="lastName"
                      value={SignUpData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter lastName"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={SignUpData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={SignUpData.password}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Password Confirmation
                  </label>

                  <div className="relative">
                    <input
                      type="password"
                      name="PasswordConfirmation"
                      id="PasswordConfirmation"
                      value={SignUpData.PasswordConfirmation}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter PasswordConfirmation"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <label for="MarketingAccept" className="flex gap-4">
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="MarketingAccept"
                        id="MarketingAccept"
                        value={SignUpData.MarketingAccept}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      />
                    </div>

                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By creating an account, you agree to our
                    <Link
                      href="#"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      terms and conditions
                    </Link>
                    and
                    <Link
                      href="#"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      privacy policy{" "}
                    </Link>
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <Button
                    but_name="Create an account"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                  ></Button>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    Already have an account?
                    <Link
                      href="/login"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignUpForm;
