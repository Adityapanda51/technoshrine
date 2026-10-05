"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Quote, TrendingUp } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";
import Counter from "../Counter";
import Reveal from "../Reveal";

const bullets = [
  "100% Better results",
  "Enterprise Web applications",
  "Promise Specific Timeline Guarantee",
  "Review Credit Reports",
];

const stats = [
  { to: 12, suffix: "+", label: "Years Experience" },
  { to: 450, suffix: "+", label: "Projects Completed" },
  { to: 100, suffix: "%", label: "Better Results" },
  { to: 98, suffix: "%", label: "Client Retention" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-royal-600/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedHeading
          kicker="Get To Know Us"
          title="Innovative Solutions for"
          highlight="Your Company."
          description="Continuous innovation and the ability to introduce new services in a shorter span of time is the key to success for technology service operators. We care for everything as per your requirements."
        />

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass card-hover rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-4xl font-bold text-gradient">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-ink-400">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glass mt-6 flex items-start gap-4 rounded-2xl p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-royal-600">
                <Quote className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-sm leading-relaxed text-ink-300">
                  We have the knowledge, experiences, and skills to support even
                  telecom firms with their testing.
                </p>
                <div className="mt-3 font-display text-sm font-semibold text-white">
                  SP Jayasingh
                  <span className="ml-2 font-normal text-ink-400">CEO, TechnoShrine</span>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15">
                  <TrendingUp className="h-5 w-5 text-brand-300" />
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  Why teams choose us
                </h3>
              </div>
              <ul className="space-y-4">
                {bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                    className="flex items-center gap-3 text-ink-200"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 260, damping: 15 }}
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-400" />
                    </motion.span>
                    <span className="text-sm sm:text-base">{b}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-brand-400/15 bg-gradient-to-r from-brand-500/10 to-royal-600/10 p-5">
                <p className="text-sm leading-relaxed text-ink-300">
                  For improving customer retention, companies are incessantly
                  evolving their offerings to enhance customer experience — our
                  QA and engineering experts make that possible.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
