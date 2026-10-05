"use client";

import { motion } from "framer-motion";

export default function PostClient({
  post,
}: {
  post: { title: string; category: string };
}) {
  const words = post.title.split(" ");

  return (
    <div className="text-center">
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-brand-300 uppercase"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-tick" />
        {post.category}
      </motion.span>
      <h1 className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            initial={{ opacity: 0, y: 26, rotateX: -50 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
