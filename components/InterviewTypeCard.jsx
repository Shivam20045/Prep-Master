import Link from "next/link";

const DIFFICULTY_STYLES = {
  Beginner: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Intermediate: "bg-violet-50 text-violet-700 border-violet-100",
  Advanced: "bg-rose-50 text-rose-600 border-rose-100",
};

export default function InterviewTypeCard({ type }) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-violet-50/60 via-transparent pointer-events-none" />

      <div className="relative flex items-start justify-between mb-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-xl">
          {type.icon}
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${DIFFICULTY_STYLES[type.difficulty]}`}
        >
          {type.difficulty}
        </span>
      </div>

      <h3 className="relative font-serif text-lg tracking-tight text-slate-900 mb-2">
        {type.title}
      </h3>

      <p className="relative text-sm leading-relaxed text-slate-500 mb-5 flex-1">
        {type.description}
      </p>

      <div className="relative flex items-center gap-2 text-xs text-slate-400 mb-6">
        <span>⏱ {type.durationMinutes} min</span>
        <span className="opacity-50">·</span>
        <span>❓ {type.questionCount} questions</span>
      </div>

      <Link
        href={`/interviewPage/${type.slug}`}
        className="relative w-full text-center text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-full shadow-lg shadow-violet-600/25 transition hover:-translate-y-0.5"
      >
        Start Interview →
      </Link>
    </div>
  );
}
