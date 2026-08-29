// ===== Badge / Eyebrow =====
export function Badge({ children, pulse = false }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-400/10 border border-emerald-400/25 px-3.5 py-1.5 rounded-full">
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
      )}
      {children}
    </span>
  );
}

// ===== Titles =====
export function GrayTitle({ children }) {
  return <span className="text-neutral-100">{children}</span>;
}

export function GoldTitle({ children }) {
  return (
    <span className="bg-gradient-to-br from-[#8fe0bc] to-[#3fae82] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

// ===== Section Label + Heading =====
export function SectionLabel({ children }) {
  return (
    <span className="block text-center text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3.5">
      {children}
    </span>
  );
}

export function SectionHeading({ gray, gold }) {
  return (
    <h2 className="text-center font-serif text-3xl sm:text-4xl mb-14">
      <span className="text-neutral-100">{gray} </span>
      <span className="bg-gradient-to-br from-[#8fe0bc] to-[#3fae82] bg-clip-text text-transparent">
        {gold}
      </span>
    </h2>
  );
}

// ===== Buttons =====
export function ButtonPrimary({ children, ...props }) {
  return (
    <button
      className="text-sm sm:text-base font-semibold text-[#05100a] bg-gradient-to-br from-[#8fe0bc] to-[#3fae82] px-6 py-3.5 rounded-full shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonSecondary({ children, ...props }) {
  return (
    <button
      className="text-sm sm:text-base font-semibold text-neutral-100 border border-white/15 hover:border-emerald-400/40 hover:bg-white/5 px-6 py-3.5 rounded-full transition"
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonGhost({ children, ...props }) {
  return (
    <button
      className="text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition"
      {...props}
    >
      {children}
    </button>
  );
}
