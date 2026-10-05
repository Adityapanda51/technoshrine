"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, AtSign, Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";

const serviceLinks = [
  { label: "Our Projects", href: "/projects" },
  { label: "Our Service", href: "/services" },
  { label: "Sales and Partnerships", href: "/sales-partnerships" },
  { label: "Customer Support", href: "/customer-support" },
  { label: "General Inquiries", href: "/contact" },
];

const companyLinks = [
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Team Training", href: "/team-training" },
  { label: "Our Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-400/10 bg-night-900/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-royal-600 font-display text-lg font-bold text-white">
                T
              </div>
              <span className="font-display text-lg font-bold text-white">
                Techno<span className="text-gradient">Shrine</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-ink-400">
              Leading IT company since 2011 — trusted for innovative solutions,
              software development, consultancy and web design services.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, AtSign, Share2].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-400/20 text-ink-300 transition-colors hover:border-brand-400/60 hover:text-brand-300"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-5 font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-brand-300"
                  >
                    <span className="h-px w-3 bg-brand-400/40 transition-all group-hover:w-5 group-hover:bg-brand-400" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-5 font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-brand-300"
                  >
                    <span className="h-px w-3 bg-brand-400/40 transition-all group-hover:w-5 group-hover:bg-brand-400" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-5 font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-ink-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                Infosys Road, Patia, Bhubaneswar, IN
              </li>
              <li>
                <a href="tel:18008910810" className="flex items-center gap-3 transition-colors hover:text-brand-300">
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                  TF: 1800 891 0810
                </a>
              </li>
              <li>
                <a href="mailto:info@technoshrine.com" className="flex items-center gap-3 transition-colors hover:text-brand-300">
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                  info@technoshrine.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brand-400/10 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} TechnoShrine Infosolutions Pvt Ltd. All rights reserved.
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -4 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/25 text-ink-300 transition-colors hover:border-brand-400/60 hover:text-brand-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
