"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, FolderKanban } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services, projects } from "@/lib/data";

export default function ProjectDetailClient({
  abstract,
  highlight,
  othersSlugs,
}: {
  abstract: string;
  highlight: string;
  othersSlugs: string[];
}) {
  const others = othersSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <>
      {/* What we did + results */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Case Study
              </h2>
              <p className="mt-5 leading-relaxed text-ink-400">{abstract}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["AI", "IoT", "Blockchain", "5G / 6G"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-2 text-sm text-brand-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-lg font-bold text-white">
                Results We Delivered
              </h3>
              <ul className="mt-5 space-y-5">
                {[
                  "Reduced regression cycle time by 40%",
                  "Delivered zero critical defects in production",
                  "Cutover completed ahead of the promised timeline",
                  "ISO / CMMI aligned documentation",
                ].map((r, i) => (
                  <motion.li
                    key={r}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="flex items-start gap-3 text-sm text-ink-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
                    {r}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl border border-brand-400/15 bg-gradient-to-r from-brand-500/10 to-royal-600/10 p-5 text-center">
                <div className="font-display text-3xl font-bold text-gradient">
                  100%+
                </div>
                <div className="mt-1 text-xs text-ink-400">
                  Better results on every engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              More <span className="text-gradient">Case Studies</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="glass card-hover group overflow-hidden"
              >
                <div
                  className={`h-40 overflow-hidden bg-gradient-to-br ${p.image}`}
                >
                  <div className="grid-bg absolute inset-0 opacity-40" />
                  <div className="flex h-full items-center justify-center">
                    <span className="font-display text-6xl font-bold text-white/10">
                      TS
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 rounded-full bg-night-950/70 px-3 py-1 text-[11px] font-semibold tracking-wider text-white backdrop-blur">
                    {p.tag}
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
                      View Case Study
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
          </div>
        </div>
      </section>
    </>
  );
}
