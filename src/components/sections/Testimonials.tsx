"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";

const testimonials = [
  {
    quote:
      "I have been working with TechnoShrine for a few months now and I can confidently say they are a great company to work with. Their software and web development services are top-notch and their telecom testing is thorough and reliable.",
    name: "Lilianna Jilly Burns",
    role: "CEO, Revika Agency",
  },
  {
    quote:
      "These days quality matters & quality makes a base for your business. I have been working with TechnoShrine for the past year and am very pleased with their services. Their software testing is thorough and reliable, and their consultancy has been invaluable.",
    name: "Emmaline Margie Outlaw",
    role: "CEO, GMI Agency",
  },
  {
    quote:
      "I would recommend TechnoShrine for anyone trying to get the word out about their business. It has saved me so much time! Their telecom testing is thorough and reliable. I highly recommend them for anyone looking for quality and reliable services.",
    name: "Jefferson Rorie Atterberry",
    role: "CEO, SCELA Agency",
  },
];

export default function Testimonials() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = useCallback((dir: number) => {
    setIndex(([i]) => [
      (i + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6500);
    return () => clearInterval(id);
  }, [paginate]);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-brand-500/10 blur-[140px]" />
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <AnimatedHeading
          kicker="Our Testimonials"
          title="What Customers Say About"
          highlight="Our Services"
        />

        <div className="relative">
          <Quote className="absolute -top-6 left-1/2 h-14 w-14 -translate-x-1/2 text-brand-500/20" />
          <div className="glass relative min-h-[300px] overflow-hidden rounded-3xl px-8 py-12 sm:px-14">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 300, damping: 14 }}
                    >
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    </motion.span>
                  ))}
                </div>
                <blockquote className="mx-auto max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-display font-bold text-white">{t.name}</div>
                  <div className="mt-1 text-sm text-brand-300">{t.role}</div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/25 text-ink-300 transition-colors hover:border-brand-400/60 hover:text-brand-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-brand-400" : "w-2 bg-night-600 hover:bg-ink-500"
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/25 text-ink-300 transition-colors hover:border-brand-400/60 hover:text-brand-300"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
