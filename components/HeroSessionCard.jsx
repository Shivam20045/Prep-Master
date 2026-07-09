import { Bot, AlertTriangle, Mic, BookX } from "lucide-react";

// Replaces the earlier "human interviewer conversation" mockup — Prept's
// interviewer is AI, so this now shows what the product actually produces:
// a post-session feedback breakdown (mistakes, mispronunciations, gaps).

export function HeroSessionCard() {
  return (
    <div className="relative w-full max-w-md h-[440px] mx-auto">
      {/* floating feedback-category chips */}
      <div className="absolute top-2 left-0 z-20 flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-slate-200/60 animate-[bob3_6s_ease-in-out_infinite]">
        <AlertTriangle size={13} className="text-red-500" />
        Mistake
      </div>
      <div className="absolute bottom-28 -left-2 z-20 flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-slate-200/60 animate-[bob2_5.5s_ease-in-out_infinite]">
        <Mic size={13} className="text-orange-500" />
        Mispronounced
      </div>
      <div className="absolute bottom-6 right-4 z-20 flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-slate-200/60 animate-[bob1_6.5s_ease-in-out_infinite]">
        <BookX size={13} className="text-amber-500" />
        Knowledge gap
      </div>

      {/* main feedback report card */}
      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[320px] bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-300/40 p-5 z-10 animate-[bob1_5s_ease-in-out_infinite]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-sky-400 flex items-center justify-center shrink-0">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-sm text-slate-900">
              AI Interviewer
            </p>
            <p className="text-xs text-slate-400">
              Session feedback · System Design
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex gap-2 items-start bg-red-50 rounded-lg px-3 py-2.5">
            <AlertTriangle size={14} className="text-red-500 mt-0.5 shrink-0" />
            <p className="text-[12.5px] text-slate-700 leading-snug">
              <span className="font-semibold text-red-600">Mistake — </span>
              said hash map lookup is O(n); it&apos;s O(1) average case.
            </p>
          </div>

          <div className="flex gap-2 items-start bg-orange-50 rounded-lg px-3 py-2.5">
            <Mic size={14} className="text-orange-500 mt-0.5 shrink-0" />
            <p className="text-[12.5px] text-slate-700 leading-snug">
              <span className="font-semibold text-orange-600">
                Mispronounced —{" "}
              </span>
              &quot;Kubernetes&quot; (said koo-ber-neh-tees)
            </p>
          </div>

          <div className="flex gap-2 items-start bg-amber-50 rounded-lg px-3 py-2.5">
            <BookX size={14} className="text-amber-500 mt-0.5 shrink-0" />
            <p className="text-[12.5px] text-slate-700 leading-snug">
              <span className="font-semibold text-amber-600">
                Knowledge gap —{" "}
              </span>
              unclear on CAP theorem trade-offs.
            </p>
          </div>
        </div>
      </div>

      {/* overall score chip */}
      <div className="absolute top-6 right-0 z-20 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-300/40 px-4 py-3 animate-[bob2_4.5s_ease-in-out_infinite]">
        <p className="font-serif text-2xl font-semibold text-emerald-500 leading-none">
          78%
        </p>
        <p className="text-[10px] text-slate-400 uppercase tracking-wide mt-1">
          Overall Score
        </p>
      </div>
    </div>
  );
}
