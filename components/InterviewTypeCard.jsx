import Link from "next/link";

const DIFFICULTY_STYLES = {
  Beginner: "bg-emerald-400/10 text-emerald-300 border-emerald-400/25",
  Intermediate: "bg-emerald-400/10 text-emerald-300 border-emerald-400/25",
  Advanced: "bg-red-400/10 text-red-400 border-red-400/25",
};

export default function InterviewTypeCard({ type }) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300  hover:border-emerald-400/30 hover:shadow-xl hover:shadow-black/40">
      <div className="absolute inset-0 rounded-2xl bg-transparent pointer-events-none" />

      <div className="relative flex items-start justify-between mb-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-xl">
          {type.icon}
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${DIFFICULTY_STYLES[type.difficulty]}`}
        >
          {type.difficulty}
        </span>
      </div>

      <h3 className="relative font-serif text-lg tracking-tight text-neutral-100 mb-2">
        {type.title}
      </h3>

      <p className="relative text-sm leading-relaxed text-neutral-400 mb-5 flex-1">
        {type.description}
      </p>

      <div className="relative flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <span>⏱ {type.durationMinutes} min</span>
        <span className="opacity-50">·</span>
        <span>❓ {type.questionCount} questions</span>
      </div>

      <Link
        href={`/interviewPage/${type.slug}`}
        className="relative w-full text-center text-sm font-semibold text-[#05100a] bg-gradient-to-br from-[#8fe0bc] to-[#3fae82] px-5 py-3 rounded-full shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
      >
        Start Interview →
      </Link>
    </div>
  );
}
