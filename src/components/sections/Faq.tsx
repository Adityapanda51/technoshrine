"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";

const faqs = [
  {
    q: "Does TechnoShrine have tools for complex businesses?",
    a: "TechnoShrine has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools. Enhanced, customer-friendly experiences help build deeper data and better customer relationships — and our open platform means you can connect to prebuilt integrations or build out your own with our APIs.",
  },
  {
    q: "What are merchant services?",
    a: "Merchant services is an all-encompassing term describing the hardware, software and financial services needed for a business to accept and process payments — credit cards, debit cards, NFC-enabled mobile wallets and other contactless payments, both online and in-store.",
  },
  {
    q: "Does TechnoShrine have tools for professional services businesses?",
    a: "We built a suite of integrated tools to help service businesses save time so they can focus on growing revenue and delivering exceptional service. From appointment scheduling to all-in-one invoicing and client messaging, everything works together in one place.",
  },
  {
    q: "How does TechnoShrine compare to other business software providers?",
    a: "Our software and suite of tools make it easy to sell in person, online, over the phone or out in the field. As your business evolves, you can quickly add tools — from managing team members to adding devices and locations — all with a couple of taps. We stand out with best-in-class support and an all-in-one platform.",
  },
  {
    q: "What kind of resources does TechnoShrine provide businesses?",
    a: "We strive to provide the best hardware, software and resources to support you at every stage of your journey — whether you're a first-time business owner or a seasoned entrepreneur. Brush up on basics with our business glossary, explore insights for modern business leaders, or find tips and tricks in our Support Center.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <AnimatedHeading
          kicker="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you need to know about working with TechnoShrine."
        />

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${
                  isOpen ? "border-brand-400/40" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-display text-sm font-semibold sm:text-base ${
                      isOpen ? "text-brand-300" : "text-white"
                    }`}
                  >
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-brand-400/50 bg-brand-500/20 text-brand-300"
                        : "border-brand-400/20 text-ink-300"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-400">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
