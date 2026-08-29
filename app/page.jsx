"use client";
import {
  GoldTitle,
  GrayTitle,
  ButtonPrimary,
  ButtonSecondary,
  SectionLabel,
  SectionHeading,
  Badge,
} from "@/components/reusable";
import { AlertColors } from "@/components/AlertBox";
import { AI_TAGS, AVATARS, LOGOS, SLOTS } from "@/lib/data";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Bot, Wallet } from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import PricingSection from "@/components/PricingSection";
import { AmbientBlobsBackground } from "@/components/AmbientBlobsBackground";
import { HeroSessionCard } from "@/components/HeroSessionCard";
import { SignIn, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

function MockUI({ rows = 3 }) {
  const widths = ["w-4/5", "w-3/5", "w-2/5", "w-4/5", "w-1/2"];
  const colors = [
    "bg-slate-100",
    "bg-slate-100",
    "bg-violet-100",
    "bg-slate-100",
    "bg-slate-100",
  ];

  return (
    <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
      <div className="h-9 bg-slate-100 border-b border-slate-200 flex items-center px-3.5 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full ${widths[i]} ${colors[i]}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleBrowseInterview = () => {
    if (!isSignedIn) {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return;
    }

    router.push("/interview");
  };
  return (
    <div className=" overflow-x-hidden">
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pt-28 sm:pt-15 pb-20 overflow-hidden">
        <AmbientBlobsBackground className="z-0" />

        <div className="relative z-10 col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center">
          <Badge>
            {/* <span className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 bg-green-200 border border-violet-100 px-3.5 py-1.5 rounded-full mb-6"> */}
            ✦ Powered by AI — Mock Interview Platform
            {/* </span> */}
          </Badge>
          
          <h1 className="font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
            <GrayTitle>Your Personal AI</GrayTitle>
            <br />
            <GoldTitle>Interview Coach</GoldTitle>
          </h1>

          <p className="relative text-sm sm:text-base md:text-lg text-slate-500 max-w-xl mt-6 leading-relaxed">
            Practice real interview questions, get AI-powered feedback, improve
            communication, and track your performance score.
          </p>

          <div className="relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto">
            {/* <Link href="/onboardin"> */}
            <ButtonPrimary
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Features
            </ButtonPrimary>
            {/* </Link> */}
            {showAlert && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md">
                <AlertColors />
              </div>
            )}

            <ButtonSecondary onClick={handleBrowseInterview}>
              Browse Interviews
            </ButtonSecondary>
          </div>

          <div className="relative flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-16">
            <div className="flex">
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white overflow-hidden ${
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
            <p className="text-sm text-slate-500 text-center sm:text-left">
              <strong className="text-white font-semibold">
                2,400+ engineers
              </strong>{" "}
              cracked FAANG interviews via Prep-Master
            </p>
          </div>
        </div>

        {/* RIGHT — Portion*/}
        <div className="relative z-10 col-span-full lg:col-span-2 flex items-center justify-center mt-12 lg:mt-0">
          <HeroSessionCard />
        </div>
      </section>

      {/* LOGOS
      <section className="relative z-10 border-y border-slate-200 py-14">
        <p className="text-center text-xs font-medium text-slate-400 tracking-widest uppercase mb-8">
          Interviewees landed roles at
        </p>

        <div className="flex flex-wrap items-center justify-center gap-24 px-6">
          {LOGOS.map((l) => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={50}
              height={50}
              className="h-6 w-auto opacity-50 grayscale"
            />
          ))}
        </div>
      </section>

      {/* FEATURES 
      <section
        id="features"
        className="relative z-10 py-28 max-w-5xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <SectionLabel>Features</SectionLabel>
          <SectionHeading
            gray="Everything you need,"
            gold="nothing you don't"
          />
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7">
            <BentoCard
              icon="🤖"
              title={<GrayTitle>AI Mock Interviews</GrayTitle>}
              desc="Practice realistic AI-powered interviews tailored to your chosen role, experience level, and technology stack. Receive dynamic follow-up questions just like a real interviewer."
            >
              <div className="flex flex-wrap gap-2 mt-5">
                {AI_TAGS.map((t) => (
                  <span
                    key={t.label}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${
                      t.active
                        ? "bg-violet-600 border-violet-600 text-white"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </BentoCard>
          </div>

          <div className="col-span-12 md:col-span-5">
            <BentoCard
              icon={<Wallet size={16} className="text-violet-600" />}
              title={<GrayTitle>Credit System</GrayTitle>}
              desc="Every interview uses AI credits. Choose a subscription plan and get fresh credits every month to continue practicing."
            >
              <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-5 flex justify-between items-end">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Your balance</p>
                  <p className="font-serif text-4xl leading-none bg-linear-to-br from-violet-500 to-violet-700 bg-clip-text text-transparent">
                    28
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    credits remaining
                  </p>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
                  +10 this month
                </span>
              </div>
            </BentoCard>
          </div>

          <div className="col-span-12 md:col-span-4">
            <BentoCard
              icon="🗣️"
              title="Voice AI Interview"
              desc="Talk naturally with an AI interviewer using real-time voice conversations. Improve communication skills through interactive interview sessions."
            >
              <MockUI rows={3} />
            </BentoCard>
          </div>

          <div className="col-span-12 md:col-span-4">
            <BentoCard
              icon="📚"
              title="Multiple Interview Categories"
              desc="Practice interviews across different domains and difficulty levels."
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <BentoCard
              icon="💻"
              title="Personalized Question Generation"
              desc="Every interview is unique. Questions are dynamically generated using AI based on your selected role, experience level, and interview type."
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <BentoCard
              icon="📊"
              title={<GrayTitle>AI Feedback Reports</GrayTitle>}
              desc="Post-interview analysis by Gemini with actionable insights."
            >
              <MockUI rows={5} />
            </BentoCard>
          </div>

          <div className="col-span-12 md:col-span-6">
            <BentoCard
              icon="📄"
              title={<GoldTitle>Resume Analyzer</GoldTitle>}
              desc="Upload your resume and receive ATS score, keyword optimization, formatting suggestions, and personalized improvement tips."
            >
              <div className="flex flex-wrap gap-2 mt-5">
                {SLOTS.map((s) => (
                  <span
                    key={s.label}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${s.cls}`}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* PRICING 
      <section className="relative z-10 pb-28 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading
            gray="Simple, transparent"
            gold="credit-based plans"
          />
          <p className="text-slate-400 mt-3 text-sm">
            Each credit = one session. Unused credits roll over.
          </p>
        </div>

        <PricingSection />
      </section> */}
    </div>
  );
}
