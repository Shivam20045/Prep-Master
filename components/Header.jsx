import React from "react";
import {ClerkProvider, SignInButton, SignUpButton, Show, UserButton ,SignUp } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-slate-200 bg-white/75 backdrop-blur-xl">
      {/* Logo */}
      <Link href={"/"}>
      <h1 className="text-black">Prep-Master</h1>
        {/* <Image
          src={"/logo1.png"}
          alt="Prep-Master"
          width={100}
          height={100}
          className="h-11 w-auto"
        /> */}
      </Link>

      {/* Sign In */}
      
      <div className="flex items-center gap-3">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className="text-sm font-medium text-slate-700 px-4 py-2 rounded-full hover:bg-slate-100 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button onClick="<SignUp/>" className="text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 px-5 py-2.5 rounded-full shadow-lg shadow-violet-600/25 transition hover:-translate-y-0.5">
              Log In →
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
      
    </nav>
  );
};

export { Header };
