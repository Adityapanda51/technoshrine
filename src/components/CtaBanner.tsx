"use client";

import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function CtaBanner({
  title = "Let's Build Something Great Together",
  description = "Tell us about your QA challenges — we have the knowledge, experience and skills to support your business.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-12 lg:px-14">
            <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-brand-500/20 blur-[110px]" />
            <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-royal-600/20 blur-[110px]" />
            <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-royal-600 shadow-lg shadow-brand-500/40"
              >
                <PhoneCall className="h-7 w-7 text-white" />
              </motion.div>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-400 lg:mx-0 mx-auto">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton href="/#contact">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href="tel:18008910810" variant="outline">
                  1800 891 0810
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
