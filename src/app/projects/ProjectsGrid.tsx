"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/data";

const tabs = ["All", "Advisory", "Solution", "Optimized"] as const;

export default function ProjectsGrid({
  projects,
}: {
  projects: Project[];
}) {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section className="relative py-20">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Hero preview card */}
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="glass card-hover group relative flex flex-col overflow-hidden rounded-3xl p-7"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-royal-600/20">
            <FolderKanban className="h-7 w-7 text-brand-300" />
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-brand-400/20 px-3 py-1 text-[11px] font-semibold tracking-wider text-brand-300 uppercase">
              {filtered[0]?.tag ?? "Case Study"}
            </span>
            {filtered[0]?.featured && (
              <span className="rounded-full bg-brand-500/15 px-3 py-1 text-[11px] font-semibold text-brand-300">
                Featured
              </span>
            )}
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            {filtered[0]?.title ?? "Project Preview"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">
            {filtered[0]?.abstract ?? "Case study placeholder."}
          </p>
          <div className="mt-4 flex gap-2">
            <Link
              href={`/projects/${filtered[0]?.slug ?? "unknown"}`}
              className="flex-1 rounded-xl bg-gradient-to-r from-brand-500 to-royal-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Read Case Study
            </Link>
            <Link
              href={`/projects/${filtered[0]?.slug ?? "unknown"}`}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-400/25 text-ink-300 transition-colors hover:border-brand-400/60 hover:text-brand-300"
            >
              <FolderKanban className="h-4.5 w-4.5" />
            </Link>
          </div>
        </motion.div>

        {/* Grid cards */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass card-hover group relative flex flex-col overflow-hidden rounded-2xl p-6"
            >
              <div
                className={`relative flex min-h-0 flex-1 overflow-hidden bg-gradient-to-br ${p.image}`}
              >
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderKanban className="h-12 w-12 text-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                </div>
                <span className="absolute top-4 left-4 rounded-full bg-night-950/70 px-3 py-1 text-[11px] font-semibold tracking-wider text-white backdrop-blur">
                  {p.tag}
                </span>
                <span className="absolute bottom-4 right-4 flex gap-2 animate-float">
                  {p.highlight.split("•").map((h, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-night-950/70 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur"
                    >
                      {h.trim()}
                    </span>
                  ))}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-brand-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{p.abstract}</p>
                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="flex-1 rounded-xl bg-gradient-to-r from-brand-500 to-royal-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
                  >
                    Read Case Study
                  </Link>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-400/25 text-ink-300 transition-colors hover:border-brand-400/60 hover:text-brand-300"
                  >
                    <FolderKanban className="h-4.5 w-4.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
