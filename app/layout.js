import { Fraunces, Inter } from "next/font/google";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
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