export function BentoCard({ icon, title, desc, children, className = "" }) {
  return (
    <div
      className={`relative bg-white border border-slate-200 hover:border-violet-200 rounded-2xl p-9 h-full transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-violet-50/60 via-transparent pointer-events-none" />

      <span className="relative w-11 h-11 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-xl mb-5">
        {icon}
      </span>

      <h3 className="relative font-serif text-xl tracking-tight mb-2 text-slate-900">
        {title}
      </h3>

      <p className="relative text-sm text-slate-500 leading-relaxed">{desc}</p>

      <div className="relative">{children}</div>
    </div>
  );
}
