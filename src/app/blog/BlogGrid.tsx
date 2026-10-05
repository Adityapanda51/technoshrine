"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import { posts } from "@/lib/data";

export default function BlogGrid() {
  const [featured, ...rest] = posts;

  return (
    <section className="relative py-16 lg:py-20">
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-royal-600/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="glass card-hover group mb-8 grid overflow-hidden rounded-3xl lg:grid-cols-2"
          >
            <div
              className={`relative flex min-h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br ${featured.gradient}`}
            >
              <div className="grid-bg absolute inset-0 opacity-40" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="font-display text-7xl font-bold text-white/15"
              >
                TS
              </motion.div>
              <span className="absolute top-5 left-5 rounded-full bg-night-950/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-brand-300 uppercase backdrop-blur">
                Featured · {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-4 text-xs text-ink-500">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-brand-300 lg:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-400">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                Read Article
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Rest of posts */}
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
            >
              <Link
                href={`/blog/${p.slug}`}
                className="glass card-hover group block overflow-hidden rounded-2xl"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
                >
                  <div className="grid-bg absolute inset-0 opacity-40" />
                  <span className="font-display text-5xl font-bold text-white/10 transition-transform duration-500 group-hover:scale-110">
                    TS
                  </span>
                  <span className="absolute top-4 left-4 rounded-full bg-night-950/70 px-3 py-1 text-[11px] font-semibold tracking-wider text-brand-300 uppercase backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-7">
                  <div className="mb-3 flex items-center gap-4 text-xs text-ink-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {p.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {p.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-white transition-colors group-hover:text-brand-300">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
