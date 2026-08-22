"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs"; // swap for your auth hook if different
import { AmbientBlobsBackground } from "./AmbientBlobsBackground";
export default function InterviewSetupForm() {
  const router = useRouter();
  const { user } = useUser();

  const [role, setRole] = useState("");
  const [level, setLevel] = useState("Junior");
  const [techstack, setTechstack] = useState("");
  const [type, setType] = useState("technical");
  const [amount, setAmount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!role.trim() || !techstack.trim()) {
      setError("Please fill in role and tech stack.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
          level,
          techstack, 
          type,
          amount,
          userid: user?.id,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(
          data.error?.message || "Failed to generate interview. Try again.",
        );
        setLoading(false);
        return;
      }

     
      router.push(`/interview/${data.interview.id}`);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Check your connection and try again.");
      setLoading(false);
    }
  }

  return (
    <div className="relative bg-white overflow-x-hidden">
      <section className="relative px-4 sm:px-8 pt-20 sm:pt-20 pb-28 overflow-hidden">
        <AmbientBlobsBackground className="z-0" />
        <h1 className="text-center text-black text-10px">Fill out this form </h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 p-6  text-black"
        >
          <div>
            {/* <AmbientBlobsBackground className="z-0" /> */}
            <label className="block text-sm font-medium mb-1 ">Job Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Frontend Developer"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Experience Level
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tech Stack</label>
            <input
              type="text"
              value={techstack}
              onChange={(e) => setTechstack(e.target.value)}
              placeholder="e.g. React,Next.js,Node.js"
              className="w-full border rounded-md px-3 py-2 text-black"
            />
            <p className="text-xs text-gray-500 mt-1">
              Comma separated, no spaces needed.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Interview Focus
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="technical">Technical</option>
              <option value="behavioural">Behavioural</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Questions
            </label>
            <input
              type="number"
              min={1}
              max={15}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-md py-2 disabled:opacity-50"
          >
            {loading ? "Generating questions..." : "Start Interview"}
          </button>
        </form>
      </section>
    </div>
  );
}
