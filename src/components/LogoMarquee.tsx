const items = [
  "ISO 9001:2015 Certified",
  "ISO/IEC 27001:2022 Certified",
  "CMMI Level 5 Company",
  "Telecom Testing Experts",
  "12+ Years of Excellence",
  "450+ Projects Delivered",
];

export default function LogoMarquee() {
  return (
    <div className="relative border-y border-brand-400/10 bg-night-900/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night-950 to-transparent" />
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 items-center gap-12 pr-12 animate-marquee">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm font-medium tracking-wide whitespace-nowrap text-ink-400"
            >
              <span className="h-1.5 w-1.5 rotate-45 bg-brand-400/70" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
