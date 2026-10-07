"use client";
import { authClient } from "@/lib/auth-client";
import { handleBuildComplete } from "next/dist/build/adapter/build-complete";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Successfully Logged in");
      console.log(data);
    }
    if (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
  };
  return (
    <div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-2xl text-red-700">সাইন ইন</h2>
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset rounded-box w-xs">
            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button
              type="submit"
              className="btn bg-red-700
          text-white mt-4"
            >
              সাইন ইন করুন
            </button>
          </fieldset>
        </form>
        <button onClick={handleGoogleSignIn} className="btn">Google</button>
        <button onClick={handleGitHubSignIn} className="btn">GitHub</button>
      </div>
    </div>
  );
};

export default SignInPage;
