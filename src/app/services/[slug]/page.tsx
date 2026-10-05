import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { services, getService } from "@/lib/data";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found — TechnoShrine" };
  return {
    title: `${service.title} — TechnoShrine Services`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Our Services"
          title={service.title}
          description={service.intro}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
        {/* Overview content rendered on the server (no icon objects needed) */}
        <section className="relative py-16 lg:py-20">
          <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-brand-500/10 blur-[130px]" />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                {service.longDescription.map((p, i) => (
                  <p key={i} className="mb-4 leading-relaxed text-ink-400">
                    {p}
                  </p>
                ))}
                <h2 className="mt-10 mb-2 font-display text-2xl font-bold text-white">
                  What We <span className="text-gradient">Offer</span>
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-ink-200"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass h-fit rounded-3xl p-8 lg:sticky lg:top-28">
                <h3 className="font-display text-lg font-bold text-white">
                  Key Deliverables
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-3 rounded-xl border border-brand-400/10 bg-night-800/50 px-4 py-3 text-sm text-ink-200"
                    >
                      <span className="h-1.5 w-1.5 rotate-45 bg-brand-400" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-2xl border border-brand-400/15 bg-gradient-to-r from-brand-500/10 to-royal-600/10 p-5 text-center">
                  <div className="font-display text-3xl font-bold text-gradient">
                    100%
                  </div>
                  <div className="mt-1 text-xs text-ink-400">
                    Better results, promised timeline guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated client sections */}
        <ServiceDetailClient othersSlugs={others.map((o) => o.slug)} />

        <CtaBanner
          title={`Need ${service.title} for Your Business?`}
          description="Tell us about your QA challenges — our experts have deep understanding of testing methodologies and business-process best practices."
        />
      </main>
      <Footer />
    </>
  );
}
