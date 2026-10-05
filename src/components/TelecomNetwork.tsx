"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
}

export default function TelecomNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    // Build telecom-style network: grid-like clusters + some floating nodes
    const nodeCount = Math.min(60, Math.floor((w * h) / 25000));
    nodesRef.current = [];
    for (let i = 0; i < nodeCount; i++) {
      // Cluster some nodes near center/lines to simulate tower clusters
      let x = Math.random() * w;
      let y = Math.random() * h;
      // Bias toward center and horizontal bands (telecom tower feel)
      if (Math.random() > 0.5) {
        x = w * 0.5 + (Math.random() - 0.5) * w * 0.6;
        y = h * 0.5 + (Math.random() - 0.5) * h * 0.4;
      }

      nodesRef.current.push({
        x,
        y,
                vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        radius: 2 + Math.random() * 3,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;

      //Subtle radial glow at center
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.7);
      grad.addColorStop(0, "rgba(6,182,212,0.08)");
      grad.addColorStop(0.5, "rgba(6,182,212,0.03)");
      grad.addColorStop(1, "rgba(6,182,212,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw connections (telecom links)
      const maxDist = Math.min(w, h) * 0.22;
      ctx.lineWidth = 0.8;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(103,232,249,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with glow
      for (const n of nodes) {
        const time = Date.now() * 0.001;
        const glow = 6 + Math.sin(n.pulse + time * 0.8) * 3;

        // Outer glow
        const gRad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glow * 2);
        gRad.addColorStop(0, `rgba(103,232,249,0.8)`);
        gRad.addColorStop(0.4, `rgba(103,232,249,0.2)`);
        gRad.addColorStop(1, `rgba(103,232,249,0)`);
        ctx.fillStyle = gRad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, glow * 2, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = "rgba(103,232,249,0.95)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Data pulses traveling along some connections (simulated by dots)
      const pulseCount = 18;
      for (let k = 0; k < pulseCount; k++) {
        const t = (Date.now() * 0.0003 + k * 0.55) % 1;
        const idxA = Math.floor(Math.random() * nodes.length);
        const idxB = Math.floor(Math.random() * nodes.length);
        if (idxA === idxB) continue;
        const a = nodes[idxA];
        const b = nodes[idxB];
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;
        const alpha = 0.6 * Math.sin(t * Math.PI);

        ctx.fillStyle = `rgba(103,232,249,${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update node positions slowly
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.012;
        // Wrap around gently
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Telecom network animation"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{ opacity: 0.85 }}
    />
  );
}
