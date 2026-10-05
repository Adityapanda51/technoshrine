"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";
import Link from "next/link";
import AnimatedHeading from "../AnimatedHeading";
import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 lg:py-32">
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-royal-600/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedHeading
          kicker="News & Blogs"
          title="Read Our Latest"
          highlight="Updates"
          description="Learn more about TechnoShrine — insights, announcements and thought leadership."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="glass card-hover group cursor-pointer overflow-hidden rounded-2xl"
            >
              <Link href={`/blog/${p.slug}`} className="block">
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
              >
                <div className="grid-bg absolute inset-0 opacity-40" />
                <Newspaper className="h-12 w-12 text-brand-300/60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <span className="absolute top-4 left-4 rounded-full bg-night-950/70 px-3 py-1 text-[11px] font-semibold tracking-wider text-brand-300 uppercase backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-7">
                <div className="mb-3 flex items-center gap-2 text-xs text-ink-500">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {p.date} · {p.readTime}
                </div>
                <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-brand-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{p.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                  Read More
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
