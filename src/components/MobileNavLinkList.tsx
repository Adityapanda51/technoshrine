"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface MobileNavLinkItemProps {
  link: {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
  };
  openAccordion: string | null;
  onToggleAccordion: (id: string) => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => void;
}

function MobileNavLinkItem({
  link,
  openAccordion,
  onToggleAccordion,
  onLinkClick,
}: MobileNavLinkItemProps) {
  const isOpen = openAccordion === link.label;
  const chevron = isOpen ? -180 : 0;

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => onToggleAccordion(link.label)}
        className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink-200 hover:bg-brand-500/10 hover:text-brand-300"
      >
        <span>{link.label}</span>
        <motion.span
          animate={{ rotate: chevron }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="shrink-0 text-brand-400"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && link.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-1 flex flex-col gap-0.5 px-5">
              {link.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  onClick={(e) => onLinkClick(e, child.href)}
                  className="px-3 py-2 text-sm text-ink-300 transition-colors hover:bg-brand-500/10 hover:text-brand-300"
                >
                  {child.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileNavLinkListProps {
  links: Array<{
    label: string;
    href: string;
    children?: { label: string; href: string }[];
  }>;
  openAccordion: string | null;
  onToggleAccordion: (id: string) => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => void;
}

export default function MobileNavLinkList({
  links,
  openAccordion,
  onToggleAccordion,
  onLinkClick,
}: MobileNavLinkListProps) {
  return (
    <div className="flex flex-col">
      {links.map((link) => (
        <MobileNavLinkItem
          key={link.label}
          link={link}
          openAccordion={openAccordion}
          onToggleAccordion={onToggleAccordion}
          onLinkClick={onLinkClick}
        />
      ))}
    </div>
  );
}
