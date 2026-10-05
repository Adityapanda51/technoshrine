"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Check } from "lucide-react";

const servicesSublinks = [
  { label: "Network Testing", href: "/services/network-testing" },
  { label: "UE & System Testing", href: "/services/ue-system-testing" },
  { label: "Telecom Testing", href: "/services/telecom-testing" },
  { label: "Software Testing", href: "/services/software-testing" },
  { label: "Software Consultancy", href: "/services" },
  { label: "IT Business Solutions", href: "/services" },
  { label: "Innovative Solutions", href: "/services" },
  { label: "System Testing", href: "/services/software-testing" },
];

interface DropdownProps {
  href?: string;
  label: string;
  sublinks: { label: string; href: string }[];
}

export default function NavbarDesktopDropdown({
  label,
  sublinks,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [inside, setInside] = useState(false);

  return (
    <span
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setInside(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-ink-300 transition-colors hover:text-white"
        aria-expanded={open}
        aria-haspopup="true"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 text-brand-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setInside(true)}
            onMouseLeave={() => setInside(false)}
            className="absolute left-1/2 top-full mt-2 w-screen max-w-[260px] -translate-x-1/2 overflow-hidden rounded-xl border border-brand-400/10 bg-night-950/98 backdrop-blur-xl p-1.5 shadow-2xl shadow-brand-500/10"
          >
            <div className="flex flex-col gap-0.5">
              {sublinks.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-ink-300 transition-colors hover:bg-brand-500/10 hover:text-brand-300"
                  onMouseEnter={() => setInside(true)}
                  onMouseLeave={() => setInside(false)}
                >
                  <span className="truncate">{sub.label}</span>
                  <Check
                    className="h-3.5 w-3.5 shrink-0 text-brand-500 opacity-0 transition-all duration-200 group-hover:opacity-100"
                    strokeWidth={3}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
