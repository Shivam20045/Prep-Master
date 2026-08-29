import React from "react";
import {ClerkProvider, SignInButton, SignUpButton, Show, UserButton ,SignUp } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {ButtonGhost, ButtonPrimary} from "./reusable"; 

const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-3 sm:px-10 py-3 bg-black/75 backdrop-blur-xl">
      {/* Logo */}
      <Link href={"/"}>
      <h1 className="font-serif text-white text-xl">Prep-Master</h1>
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
             <ButtonGhost> {/*className="text-sm font-medium text-slate-700 px-4 py-2 rounded-full hover:bg-slate-100 transition"> */}
              Sign In
            </ButtonGhost>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="text-sm  font-semibold text-[#05100a] bg-gradient-to-br from-[#8fe0bc] to-[#3fae82] px-4 py-2 rounded-full shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
            >
              Sign Up →
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
