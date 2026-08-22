"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { AmbientBlobsBackground } from "./AmbientBlobsBackground";
import { useVapi } from "@/hooks/useVapi";

export default function InterviewSession({ type }) {
  const { user } = useUser();
  const { status, start, stop } = useVapi();
  const INTRO_1 = "This is a ";
  const INTRO_2 = " Interview , Click Start Interview to start interview ";

  const handleStart = () => {
    start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID);
  };

  const handleEnd = () => {
    stop();
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
     
      <AmbientBlobsBackground className="z-0" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-8 pt-16 pb-24 mt-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <span className="flex h-13 w-13 items-center justify-center rounded-lg border border-violet-100 bg-violet-50 text-lg">
              {type.icon}
            </span>
            <div className="leading-tight">
              <p className=" text-xl font-semibold text-slate-900">
                {type.title}
              </p>
              <p className="text-xs text-slate-400">{type.slug}</p>
            </div>
          </div>

          <span className="text-sm font-medium text-violet-700 bg-violet-50 border border-violet-100 px-3 py-1.5 rounded-full">
            {type.difficulty} Interview
          </span>
        </div>

        {/* Interviewer / candidate faces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 mb-14">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 shadow-sm p-10">
            <div className="relative mb-4">
              <span className="absolute inset-0 rounded-full bg-violet-400/25 blur-xl animate-pulse" />
              <span className="absolute -inset-3 rounded-full border border-violet-200 animate-[ping_3s_ease-in-out_infinite]" />
              <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-violet-50 border border-violet-100 text-3xl">
                🤖
              </div>
            </div>
            <p className="font-serif text-base sm:text-lg text-slate-900">
              AI Interviewer
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 shadow-sm p-10">
            <div className="mb-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border border-slate-200 bg-slate-100">
              {user?.imageUrl ? (
                
                <img
                  src={user.imageUrl}
                  alt={user.fullName ?? "You"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-3xl text-slate-400">
                  🙂
                </div>
              )}
            </div>
            <p className="font-serif text-base sm:text-lg text-slate-900">
              {user?.firstName ?? "You"}
            </p>
          </div>
        </div>

        {/* Large question preview */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-violet-500 mb-4">
            First question
          </p>
          <p className="font-serif text-2xl sm:text-4xl leading-tight text-slate-900 max-w-2xl mx-auto">
            {INTRO_1}
            <span className="font-serif text-2xl sm:text-4xl">
              {type.title}
            </span>
            {INTRO_2}
          </p>

          <p className="text-sm text-slate-400 mt-5">
            {type.questionCount} questions · {type.durationMinutes} min
          </p>
          <p className="text-xs text-slate-400 mt-2">status: {status}</p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          {status === "active" ? (
            <button
              onClick={handleEnd}
              className="text-base font-semibold text-white bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full shadow-lg shadow-red-600/25 transition hover:-translate-y-0.5"
            >
              End Interview
            </button>
          ) : (
            <button
              onClick={handleStart}
              disabled={status === "connecting"}
              className="text-base font-semibold text-white bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-full shadow-lg shadow-violet-600/25 transition hover:-translate-y-0.5 disabled:opacity-50"
            >
              {status === "connecting" ? "Connecting…" : "Start Interview →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}