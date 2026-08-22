export function AmbientBlobsBackground({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <div
        className="absolute w-[520px] h-[520px] rounded-full blur-[90px] opacity-40 -top-36 -left-28
        bg-[radial-gradient(circle_at_30%_30%,#7c5cfc,transparent_70%)]
        animate-[drift1_22s_ease-in-out_infinite]"
      />
      <div
        className="absolute w-[460px] h-[460px] rounded-full blur-[90px] opacity-40 top-56 -right-40
        bg-[radial-gradient(circle_at_40%_40%,#59c6ff,transparent_70%)]
        animate-[drift2_26s_ease-in-out_infinite]"
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[90px] opacity-35 -bottom-36 left-1/4
        bg-[radial-gradient(circle_at_50%_50%,#ff9f6b,transparent_70%)]
        animate-[drift3_30s_ease-in-out_infinite]"
      />
      <div
        className="absolute w-[340px] h-[340px] rounded-full blur-[90px] opacity-25 bottom-10 right-10
        bg-[radial-gradient(circle_at_50%_50%,#2fd48f,transparent_70%)]
        animate-[drift1_24s_ease-in-out_infinite_reverse]"
      />
    </div>
  );
}
