// Same export names as your original reusable.jsx (GrayTitle, GoldTitle, etc.)
// so any other file importing these still works — only the colors changed,
// from the amber/dark palette to the violet/light one.

export const GrayTitle = ({ children }) => (
  <span className="bg-linear-to-br from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
    {children}
  </span>
);

export const GoldTitle = ({ children }) => (
  <span className="bg-linear-to-br from-violet-500 via-violet-600 to-violet-700 bg-clip-text text-transparent">
    {children}
  </span>
);

export const SectionLabel = ({ children }) => (
  <p className="inline-flex items-center gap-2 text-xs font-semibold text-violet-600 tracking-[0.14em] uppercase mb-4">
    <span className="w-4 h-px bg-violet-600" />
    {children}
  </p>
);

export const SectionHeading = ({ gray, gold }) => (
  <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.025em]">
    <GrayTitle>{gray}</GrayTitle>
    <br />
    <GoldTitle>{gold}</GoldTitle>
  </h2>
);
