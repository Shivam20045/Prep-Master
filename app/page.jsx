import { CodeDemo } from "@/components/demo-components-animate-code";
import { GravityStarsBackgroundDemo } from "@/components/demo-components-backgrounds-gravity-stars";
import { GoldTitle, GrayTitle } from "@/components/reusable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AVATARS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pt-28 sm:pt-15 pb-20 overflow-hidden">
        <GravityStarsBackgroundDemo />

        <div className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2 mt -25">
          {/* left-side-styling */}
          <Badge variant="gold">
            ⚡ Powered by AI — Mock Interview Platform
          </Badge>

          <h1 className="font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
            <GrayTitle>Your Personal AI</GrayTitle>
            <br />
            <GoldTitle>Interview Coach</GoldTitle>
          </h1>

          <p className="relative text-sm sm:text-base md:text-lg text-stone-400 max-w-xl mt-6 leading-relaxed">
            Practice real interview questions, get AI-powered feedback, improve
            communication, and track your performance score.
          </p>

          <div className="relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto">
            <Link href="/onboarding">
              <Button variant="gold" size="hero">
                Get started
              </Button>
            </Link>

            <Link href="/explore">
              <Button variant="outline" size="hero">
                Browse Interviewers →
              </Button>
            </Link>
          </div>
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-16">
            <div className="flex">
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[#0a0a0b] overflow-hidden ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                >
                  <Image
                    src={av.src}
                    alt="user avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-500 text-center sm:text-left">
              <strong className="text-stone-400 font-medium">
                2,400+ engineers
              </strong>{" "}
              cracked FAANG interviews via Prept
            </p>
          </div>
            
        </div>
        {/* RIGHT */}
        <div className="col-span-full lg:col-span-2 flex items-center justify-center lg:justify-start mt-12 lg:mt-0 lg:rotate-3">
          {/* <Image
            src="/hero.png"
            alt="Hero illustration"
            width={600}
            height={400}
            className="w-full max-w-md sm:max-w-lg lg:max-w-none h-auto"
            priority
          /> */}

          <CodeDemo duration={30000} writing />
        </div>
      </section>
    </div>
  );
}
