import React from "react";
import { Button } from "./ui/button"; 
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      
      {/* Logo */}
      <Link href={"/"}>
      <Image src={"/logo.png"}
      alt="Prep-Master"
      width={100}
      height={100}
      className="h-11 w-auto"
      <Link>
      Prep-Master
      {/* Sign In */}
      <div className="flex items-center gap-3">
        <Show when="signed-out">
          <SignInButton mode="modal ">
            <Button variant="ghost">Sign In </Button>
          </SignInButton>
          <SignUpButton >
            <Button variant="gold">Get Started</Button>
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
