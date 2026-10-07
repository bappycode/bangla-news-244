"use client";
import { authClient, signUp } from "@/lib/auth-client";
import React from "react";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      url: string;
      email: string;
      password: string;
    };
    console.log(user);
    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(data);
    }
  };
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="text-2xl text-red-700">সাইন আপ করুন</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-xs">
          <label className="label">নাম</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          <label className="label">ImageUrl</label>
          <input
            name="image"
            type="url"
            className="input"
            placeholder="Image"
          />
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
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <button onClick={handleGoogleSignIn} className="btn">
        Google
      </button>
      <button onClick={handleGitHubSignIn} className="btn">GitHub</button>
    </div>
  );
};

export default SignUpPage;
