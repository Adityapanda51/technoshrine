"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type PageHeroProps = {
  kicker: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export default function PageHero({
  kicker,
  title,
  highlight,
  description,
  breadcrumbs = [],
}: PageHeroProps) {
  const words = highlight ? `${title} ${highlight}`.split(" ") : title.split(" ");
  const highlightStart = highlight ? title.split(" ").length : words.length;

  return (
    <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
      {/* Background */}
      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-500/15 blur-[140px]" />
      <div className="absolute top-20 -right-24 h-80 w-80 rounded-full bg-royal-600/20 blur-[130px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-1.5 text-xs font-medium text-ink-500"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-brand-300"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-brand-300">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-ink-600" />
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-brand-300 uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-tick" />
          {kicker}
        </motion.div>

        <h1 className="font-display text-4xl leading-[1.1] font-bold text-white sm:text-5xl lg:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className={`inline-block ${
                highlight && i >= highlightStart ? "text-gradient" : ""
              }`}
              initial={{ opacity: 0, y: 30, rotateX: -50 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.15 + i * 0.06,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-400"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
