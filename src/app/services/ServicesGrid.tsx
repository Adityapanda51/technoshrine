"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";

export default function ServicesGrid() {
  return (
    <section className="relative py-20">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="glass card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-7"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-royal-600/20"
                >
                  <s.icon className="h-7 w-7 text-brand-300" />
                </motion.div>
                <h2 className="mb-3 font-display text-lg font-bold text-white">
                  {s.title}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-ink-400">{s.short}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                  Explore Service
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
