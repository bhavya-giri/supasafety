import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import supabase from "../utils/supabase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { user, error } = await supabase.auth.signIn({
      email: email,
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Sent! Check your email");
    }
    setLoading(false);
  };
  const handleGoogleSignup = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signIn(
      { provider: "google" },
      {
        redirectTo: "http://localhost:3000",
      }
    );
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className=" pt-40 px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-left">
          <h1 className="text-2xl font-bold sm:text-3xl text-center">
            Welcome to SupaSafety!
          </h1>
          <p className="mt-4 text-lg text-gray-500 text-center">
            Online tool to help you and your closed ones stay safe and secure.
            <br />A project by Bhavya, Ishar & Ishaan
          </p>
        </div>

        <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex justify-evenly cursor-pointer w-72 py-3 ml-3 text-base bg-black hover:bg-black/70 text-gray-100 rounded-lg font-semibold mt-7"
              disabled={!email}
              onClick={(e) => {
                handleSignup(e);
              }}
            >
              <AiOutlineMail className="mt-1" />
              {loading ? "Loading..." : "Sign up with email"}
            </button>
          </div>
          <div className="text-gray-400 flex justify-center">
            <hr className="w-28 inline-flex m-3" />
            OR
            <hr className="w-28 inline-flex m-3" />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex justify-evenly w-72 py-4 ml-3 text-base text-white bg-red-500 hover:bg-red-500/90 rounded-lg font-semibold"
              onClick={(e) => {
                handleGoogleSignup(e);
              }}
            >
              <BsGoogle className="mt-1" />
              Sign up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
