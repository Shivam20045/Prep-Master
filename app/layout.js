import { Fraunces, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Header } from "@/components/Header";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Prep-Master",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    // Removed appearance={{ theme: dark }} — Clerk's modal should match the new light UI.
    // If you want the Clerk modal themed to match violet accents, see the note at the
    // bottom of this file for a light-appearance config you can drop in instead.
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${fraunces.variable} ${inter.variable} font-sans bg-white text-slate-900`}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

/*
Optional light Clerk appearance, if you want the sign-in modal to match:

import { ClerkProvider } from "@clerk/nextjs";

<ClerkProvider
  appearance={{
    variables: {
      colorPrimary: "#7c5cfc",
      colorBackground: "#ffffff",
      colorText: "#0f172a",
    },
  }}
>
*/