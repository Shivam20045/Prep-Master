export function AmbientBlobsBackground({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        backgroundColor: "#050605",
        backgroundImage: [
          "radial-gradient(circle at 12% -10%, rgba(93, 202, 165, 0.22), transparent 45%)",
          "radial-gradient(circle at 90% 12%, rgba(120, 200, 150, 0.16), transparent 42%)",
          "linear-gradient(180deg, #07090a 0%, #0b0e0c 35%, #090b0a 70%, #050605 100%)",
        ].join(", "),
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-160px",
          left: "-128px",
          width: "560px",
          height: "560px",
          borderRadius: "9999px",
          filter: "blur(110px)",
          opacity: 0.45,
          background:
            "radial-gradient(circle at 40% 40%, #5dcaa5, transparent 70%)",
          animation: "driftSlow 34s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "-160px",
          width: "480px",
          height: "480px",
          borderRadius: "9999px",
          filter: "blur(110px)",
          opacity: 0.28,
          background:
            "radial-gradient(circle at 50% 50%, #6ee7b7, transparent 70%)",
          animation: "driftSlow 40s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "128px",
          left: "25%",
          width: "400px",
          height: "400px",
          borderRadius: "9999px",
          filter: "blur(130px)",
          opacity: 0.25,
          background:
            "radial-gradient(circle at 50% 50%, #4fb98a, transparent 70%)",
          animation: "driftSlow 28s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes driftSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(24px, 18px); }
        }
      `}</style>
    </div>
  );
}
