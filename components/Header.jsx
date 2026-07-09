import React from "react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

// Note: swapped your ui/Button component for plain <button> elements here —
// I don't have your Button's "gold"/"ghost" variant source, so this avoids
// guessing at colors that might clash. Restyle to taste, or paste your
// Button variants and I'll wire them back in.

const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-slate-200 bg-white/75 backdrop-blur-xl">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo1.png"}
          alt="Prep-Master"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>

      {/* Sign In */}
      <div className="flex items-center gap-3">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className="text-sm font-medium text-slate-700 px-4 py-2 rounded-full hover:bg-slate-100 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 px-5 py-2.5 rounded-full shadow-lg shadow-violet-600/25 transition hover:-translate-y-0.5">
              Get Started →
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
