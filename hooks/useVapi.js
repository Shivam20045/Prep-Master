"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Vapi from "@vapi-ai/web";

export function useVapi() {
  const vapiRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [messages, setMessages] = useState([]);
  const [volumeLevel, setVolumeLevel] = useState(0);

  useEffect(() => {
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;

    vapi.on("call-start", () => setStatus("active"));
    vapi.on("call-end", () => setStatus("ended"));
    vapi.on("volume-level", (v) => setVolumeLevel(v));
    vapi.on("message", (m) => {
      if (m.type === "transcript" && m.transcriptType === "final") {
        setMessages((prev) => [...prev, { role: m.role, text: m.transcript }]);
      }
    });
    vapi.on("error", (e) => console.error("Vapi error:", e));

    return () => vapi.stop();
  }, []);

  const start = useCallback((assistantId, overrides) => {
    setStatus("connecting");
    vapiRef.current.start(assistantId, overrides);
  }, []);

  const stop = useCallback(() => vapiRef.current?.stop(), []);

  return { status, messages, volumeLevel, start, stop };
}