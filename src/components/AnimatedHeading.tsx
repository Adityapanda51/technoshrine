"use client";

import { motion } from "framer-motion";

type AnimatedHeadingProps = {
  kicker: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
};

export default function AnimatedHeading({
  kicker,
  title,
  highlight,
  description,
  align = "center",
}: AnimatedHeadingProps) {
  const words = `${title} ${highlight ?? ""}`.trim().split(" ");
  const split = highlight ? title.split(" ").length : words.length;

  return (
    <div
      className={`mb-14 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-brand-300 uppercase ${
          align === "center" ? "" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-tick" />
        {kicker}
      </motion.div>

      <h2 className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-[2.75rem]">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className={`inline-block ${
              highlight && i >= split ? "text-gradient" : ""
            }`}
            initial={{ opacity: 0, y: 24, rotateX: -60 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.08 * i,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className={`mt-5 text-base leading-relaxed text-ink-300 ${
            align === "center" ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
