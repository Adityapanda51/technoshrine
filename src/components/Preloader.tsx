"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setShow(true);
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 18 + 6));
    }, 150);
    const done = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1600);
    return () => {
      clearInterval(interval);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night-950"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />
          <motion.div
            className="relative mb-6 flex h-20 w-20 items-center justify-center"
            initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
          >
            <span className="absolute inset-0 rounded-2xl border border-brand-400/40 animate-pulse-ring" />
            <span className="absolute inset-0 rounded-2xl border border-royal-400/40 animate-pulse-ring [animation-delay:1s]" />
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-royal-600 font-display text-3xl font-bold text-white shadow-lg shadow-brand-500/30">
              T
            </div>
          </motion.div>
          <div className="mb-3 font-display text-sm tracking-[0.35em] text-ink-300 uppercase">
            TechnoShrine
          </div>
          <div className="h-[3px] w-52 overflow-hidden rounded-full bg-night-700">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-400 to-royal-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
