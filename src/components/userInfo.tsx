"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import React from "react";

const UserInfo = () => {
  const { data: session } = authClient.useSession();

  const onSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="absolute right-4 top-4 flex items-center gap-3 text-sm sm:right-8">
      {session ? (
        <div className="flex flex-col items-center">
          <h2>Welcome, {session.user.name}</h2>
          <div className="avatar">
            <div className="w-10 rounded">
              <img
                alt='Avatar'
                src={session.user.image as string}
              />
            </div>
            <button
              type="button"
              onClick={onSignOut}
              className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800"
            >
              সাইন আউট
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Link href="/sign-in">
            <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">
              সাইন ইন
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
