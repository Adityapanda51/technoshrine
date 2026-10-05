"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Sparkles,
  Play,
  ArrowRight,
  ShieldCheck,
  Award,
  Network,
} from "lucide-react";
import Counter from "../Counter";
import MagneticButton from "../MagneticButton";

const rotating = ["Telecom Testing", "Software Testing", "IT Consultancy", "Web Development"];

const badges = [
  { icon: ShieldCheck, label: "ISO 9001:2015" },
  { icon: Award, label: "CMMI Level 5" },
  { icon: Network, label: "ISO/IEC 27001:2022" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 120]);
  const yContent = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotating.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Parallax background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-brand-500/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-royal-600/25 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-600/10 blur-[120px]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Left column */}
        <motion.div style={{ y: yContent, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            We Are Expert In This Field
          </motion.div>

          <h1 className="font-display text-[2.6rem] leading-[1.08] font-bold text-white sm:text-6xl xl:text-[4.2rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Get a Smart Way
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              For Your{" "}
              <span className="text-gradient">Business</span>
            </motion.span>
          </h1>

          {/* Rotating role text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="mt-6 flex h-8 items-center gap-3 text-lg font-medium text-ink-300 sm:text-xl"
          >
            <span>Specialists in</span>
            <span className="relative inline-flex h-8 min-w-[13rem] items-center overflow-hidden rounded-lg border border-brand-400/20 bg-night-800/60 px-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotating[index]}
                  initial={{ y: 26, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -26, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="font-semibold whitespace-nowrap text-brand-300"
                >
                  {rotating[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.6 }}
            className="mt-6 max-w-xl leading-relaxed text-ink-400"
          >
            The telecom sector is at the cutting edge of technology — driving
            advances in communications, networks and data. We operate and
            develop some of the most important technology in use today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#services">
              Explore Services <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#about" variant="outline">
              <Play className="h-4 w-4" /> Watch The Video
            </MagneticButton>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 + i * 0.15 }}
                className="flex items-center gap-2.5 text-sm text-ink-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-400/20 bg-brand-500/10">
                  <b.icon className="h-4.5 w-4.5 text-brand-300" />
                </span>
                {b.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — animated visual */}
        <motion.div
          style={{ y: yContent }}
          className="relative mx-auto hidden h-[480px] w-full max-w-md lg:block"
        >
          {/* Orbiting rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 rounded-full border border-brand-400/15 animate-spin-slower" />
            <div className="absolute inset-8 rounded-full border border-dashed border-royal-400/20 animate-spin-slow [animation-direction:reverse]" />
            <div className="absolute inset-16 rounded-full border border-brand-400/10" />

            {/* Orbiting satellites */}
            <div className="absolute inset-0 animate-spin-slower">
              <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-400 shadow-[0_0_16px_4px_rgba(34,211,238,0.5)]" />
            </div>
            <div className="absolute inset-8 animate-spin-slow [animation-direction:reverse]">
              <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-royal-400 shadow-[0_0_14px_4px_rgba(129,140,248,0.5)]" />
            </div>

            {/* Core */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute inset-24 flex flex-col items-center justify-center rounded-3xl"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-royal-600 shadow-xl shadow-brand-500/40"
              >
                <Network className="h-9 w-9 text-white" />
              </motion.div>
              <div className="mt-4 font-display text-sm font-semibold text-white">
                Innovation Paradise
              </div>
              <div className="text-xs text-brand-300">Since 2011</div>
            </motion.div>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.7 }}
            className="glass absolute -right-2 top-10 rounded-2xl px-5 py-4 animate-float"
          >
            <div className="font-display text-2xl font-bold text-white">
              <Counter to={12} suffix="+" />
            </div>
            <div className="text-xs text-ink-400">Years Experience</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 0.7 }}
            className="glass absolute -left-4 top-1/2 rounded-2xl px-5 py-4 animate-float-slow"
          >
            <div className="font-display text-2xl font-bold text-white">
              <Counter to={100} suffix="%" />
            </div>
            <div className="text-xs text-ink-400">Better Results</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.7 }}
            className="glass absolute bottom-6 right-8 rounded-2xl px-5 py-4 animate-float [animation-delay:1.5s]"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Projects Delivered
            </div>
            <div className="mt-1 font-display text-2xl font-bold text-white">
              <Counter to={450} suffix="+" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-brand-400/30 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-brand-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
