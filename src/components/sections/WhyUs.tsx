"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Plus, PlayCircle } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";
import Counter from "../Counter";
import Reveal from "../Reveal";
import MagneticButton from "../MagneticButton";

const skills = [
  { label: "Consulting", value: 85 },
  { label: "Investment", value: 76 },
  { label: "Business", value: 90 },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <AnimatedHeading
              align="left"
              kicker="Company Overview"
              title="Plan Your Business Strategy With"
              highlight="Our Experts"
              description="From an ever-increasing range of new devices to implementing new networks like 5G/6G, and from data centres to total IT solutions — telecom companies must keep moving forward to stay ahead of customer demands."
            />

            <div className="space-y-6">
              {skills.map((s, i) => (
                <div key={s.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink-200">{s.label}</span>
                    <span className="font-display font-semibold text-brand-300">
                      <Counter to={s.value} suffix="%" />
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-night-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-royal-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-8 lg:p-10">
              <h3 className="font-display text-xl font-bold text-white">
                We'll Ensure You Always Get the Best Guidance.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                Our testing experts' deep understanding of testing methodologies,
                technologies and business-process best practices makes them lead
                QA services in the industry.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                {[
                  { icon: Trophy, to: 40, suffix: "+", label: "Best Awards" },
                  { icon: Users, to: 320, suffix: "+", label: "Happy Clients" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 200, damping: 16 }}
                    className="rounded-2xl border border-brand-400/15 bg-night-800/60 p-6 text-center"
                  >
                    <s.icon className="mx-auto mb-3 h-7 w-7 text-brand-300" />
                    <div className="font-display text-3xl font-bold text-white">
                      <Counter to={s.to} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-ink-400">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-brand-400/30 bg-brand-500/10 py-3.5 text-sm font-semibold text-brand-300 transition-colors hover:bg-brand-500/20"
              >
                <PlayCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Video
              </motion.button>
            </div>
          </Reveal>
        </div>

        {/* Call banner */}
        <Reveal delay={0.2}>
          <div className="glass relative mt-20 overflow-hidden rounded-3xl px-8 py-10 lg:px-14">
            <div className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-brand-500/20 blur-[100px]" />
            <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="flex items-center gap-5">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-royal-600 shadow-lg shadow-brand-500/40"
                >
                  <Plus className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <div className="text-sm text-ink-400">Call For More Info</div>
                  <a
                    href="tel:18008910810"
                    className="font-display text-2xl font-bold text-white transition-colors hover:text-brand-300 sm:text-3xl"
                  >
                    1800 891 0810
                  </a>
                </div>
              </div>
              <p className="max-w-sm text-center text-sm text-ink-300 lg:text-left">
                Let's request a schedule for a free consultation — our experts
                will find the right solution for your business.
              </p>
              <MagneticButton href="/services">All Services</MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
