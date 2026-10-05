"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton";
import NavbarDesktopDropdown from "./NavbarDesktopDropdown";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services", children: [
    { label: "Network Testing", href: "/services/network-testing" },
    { label: "UE & System Testing", href: "/services/ue-system-testing" },
    { label: "Telecom Testing", href: "/services/telecom-testing" },
    { label: "Software Testing", href: "/services/software-testing" },
    { label: "Software Consultancy", href: "/services" },
    { label: "IT Business Solutions", href: "/services" },
    { label: "Innovative Solutions", href: "/services" },
    { label: "System Testing", href: "/services/software-testing" },
  ]},
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/#team" },
  { label: "Blog", href: "/blog" },
];

const mobileAccordionLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services", children: [
    { label: "Network Testing", href: "/services/network-testing" },
    { label: "UE & System Testing", href: "/services/ue-system-testing" },
    { label: "Telecom Testing", href: "/services/telecom-testing" },
    { label: "Software Testing", href: "/services/software-testing" },
    { label: "Software Consultancy", href: "/services" },
    { label: "IT Business Solutions", href: "/services" },
    { label: "Innovative Solutions", href: "/services" },
    { label: "System Testing", href: "/services/software-testing" },
  ]},
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/#team" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "https://technoshrine.com/TS/careers/" },
  { label: "Intranet", href: "https://technoshrine.com/TS/intranet/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleToggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (href && !href.startsWith("http")) {
      setOpen(false);
      setOpenAccordion(null);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-brand-400/10 bg-night-950/80 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <motion.a
          href="#home"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-royal-600 font-display text-lg font-bold text-white shadow-md shadow-brand-500/30">
            T
          </div>
          <span className="font-display text-lg font-bold tracking-wide text-white">
            Techno<span className="text-gradient">Shrine</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <span key={link.label} className="relative inline-block">
              {link.children ? (
                <NavbarDesktopDropdown label={link.label} sublinks={link.children} />
              ) : (
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-ink-300 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-brand-400 to-royal-500 transition-all duration-300 group-hover:w-full" />
                </a>
              )}
            </span>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="#contact" variant="outline" className="!px-5 !py-2.5">
            <Phone className="h-4 w-4" />
            1800 891 0810
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-400/20 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-b border-brand-400/10 bg-night-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              <MobileNavLinkList
                links={mobileAccordionLinks}
                openAccordion={openAccordion}
                onToggleAccordion={handleToggleAccordion}
                onLinkClick={handleLinkClick}
              />
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="mt-3 rounded-full bg-gradient-to-r from-brand-500 to-royal-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Free Consultation
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MobileNavLinkList({
  links,
  openAccordion,
  onToggleAccordion,
  onLinkClick,
}: {
  links: Array<{
    label: string;
    href: string;
    children?: { label: string; href: string }[];
  }>;
  openAccordion: string | null;
  onToggleAccordion: (id: string) => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => void;
}) {
  return (
    <div className="flex flex-col">
      {links.map((link) => (
        <MobileNavItem
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

function MobileNavItem({
  link,
  openAccordion,
  onToggleAccordion,
  onLinkClick,
}: {
  link: {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
  };
  openAccordion: string | null;
  onToggleAccordion: (id: string) => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => void;
}) {
  const [mountedOpen, setMountedOpen] = useState(false);
  const isOpen = openAccordion === link.label;

  if (isOpen && !mountedOpen) setMountedOpen(true);
  else if (!isOpen && mountedOpen) setMountedOpen(false);

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
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-1 flex flex-col gap-0.5 px-5">
              {link.children?.map((child) => (
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
