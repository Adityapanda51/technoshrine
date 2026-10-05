"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";

const tabs = ["All", "Advisory", "Solution", "Optimized"] as const;

const projects = [
  { title: "Software Consultancy", tag: "Advisory", desc: "End-to-end consulting for enterprise software roadmaps." },
  { title: "IT Business Solutions", tag: "Solution", desc: "Total IT solutions tailored for corporate customers." },
  { title: "System Testing", tag: "Optimized", desc: "Optimized QA frameworks for telecom-grade systems." },
  { title: "5G Rollout Assurance", tag: "Advisory", desc: "Advisory and testing for nationwide 5G deployments." },
  { title: "Data Centre Migration", tag: "Solution", desc: "Zero-downtime migration and validation programmes." },
  { title: "Network Audit", tag: "Optimized", desc: "Deep performance audits across carrier networks." },
];

export default function Projects() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-royal-600/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedHeading
          kicker="Complete Projects"
          title="Our Recently Completed"
          highlight="Projects List"
          description="Ever find yourself staring at your screen hoping a good consulting slogan comes to mind? Oftentimes, the work speaks for itself."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                active === tab ? "text-white" : "text-ink-400 hover:text-ink-200"
              }`}
            >
              {active === tab && (
                <motion.span
                  layoutId="project-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-royal-600"
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="glass card-hover group rounded-2xl p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-royal-600/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <FolderKanban className="h-6 w-6 text-brand-300" />
                </div>
                <div className="mb-2 inline-block rounded-full border border-brand-400/20 px-3 py-1 text-[11px] font-semibold tracking-wider text-brand-300 uppercase">
                  {p.tag}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{p.desc}</p>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
