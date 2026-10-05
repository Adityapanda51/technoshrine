"use client";

import { motion } from "framer-motion";
import {
  MessagesSquare,
  ClipboardList,
  PlayCircle,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

const process = [
  {
    icon: MessagesSquare,
    title: "Discover",
    desc: "We analyse your requirements, architecture and quality goals together.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    desc: "A tailored test strategy with specific timeline guarantees is drafted.",
  },
  {
    icon: PlayCircle,
    title: "Execute",
    desc: "Our specialists run manual and automated cycles with daily reporting.",
  },
  {
    icon: BarChart3,
    title: "Optimize",
    desc: "Actionable insights, quality dashboards and continuous improvement.",
  },
];

export default function ServiceDetailClient({
  othersSlugs,
}: {
  othersSlugs: string[];
}) {
  const others = othersSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <>
      {/* Process */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              How We <span className="text-gradient">Work</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass card-hover relative rounded-2xl p-7"
              >
                <span className="absolute top-5 right-6 font-display text-4xl font-bold text-brand-400/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-royal-600/20">
                  <p.icon className="h-6 w-6 text-brand-300" />
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Explore Other <span className="text-gradient">Services</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="glass card-hover group flex h-full items-center gap-4 rounded-2xl p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-royal-600/20">
                    <s.icon className="h-6 w-6 text-brand-300" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-sm font-bold text-white">
                      {s.title}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-xs text-ink-400">
                      {s.short}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-400/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
