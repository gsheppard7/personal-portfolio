"use client";

import { useEffect, useRef } from "react";

export function GridBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const offset = (frame * 0.15) % 40;
      ctx.strokeStyle = "rgba(46, 228, 255, 0.055)";
      ctx.lineWidth = 1;

      for (let x = -40; x < w + 40; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, h);
        ctx.stroke();
      }

      for (let y = -40; y < h + 40; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y + offset * 0.6);
        ctx.lineTo(w, y + offset * 0.6);
        ctx.stroke();
      }

      const pulse = 0.35 + Math.sin(frame * 0.02) * 0.15;
      const gradient = ctx.createRadialGradient(
        w * 0.75,
        h * 0.2,
        0,
        w * 0.75,
        h * 0.2,
        Math.max(w, h) * 0.45,
      );
      gradient.addColorStop(0, `rgba(183, 148, 255, ${0.11 * pulse})`);
      gradient.addColorStop(0.45, `rgba(46, 228, 255, ${0.05 * pulse})`);
      gradient.addColorStop(1, "rgba(6, 10, 18, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      const plateX = w * 0.12;
      const plateY = h * 0.78;
      const plateSize = Math.min(w, h) * 0.09;
      ctx.save();
      ctx.translate(plateX, plateY);
      ctx.rotate(Math.PI / 4);
      ctx.strokeStyle = `rgba(251, 191, 36, ${0.08 + pulse * 0.04})`;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-plateSize / 2, -plateSize / 2, plateSize, plateSize);
      ctx.restore();

      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="grid-backdrop"
      aria-hidden="true"
    />
  );
}
