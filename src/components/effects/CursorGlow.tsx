"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!reduced && !coarse);

    const onMove = (event: PointerEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="cursor-glow"
      aria-hidden="true"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    />
  );
}
