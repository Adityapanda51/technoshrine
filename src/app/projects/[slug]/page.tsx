import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import {
  projects,
  getProject,
  services,
} from "@/lib/data";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found — TechnoShrine" };
  return {
    title: `${project.title} — TechnoShrine Projects`,
    description: project.abstract,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects
    .filter((p) => p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Complete Projects"
          title={project.title}
          description={project.abstract}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />

        {/* Project hero gallery */}
        <section className="relative overflow-hidden py-16 lg:py-20">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.image} [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]`} />
          <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
            <span className="mb-5 inline-block rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-brand-300 uppercase">
              {project.tag}
            </span>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-400">
              {project.subtitle}
            </p>
          </div>
        </section>

        {/* Animated client sections */}
        <ProjectDetailClient
          abstract={project.abstract}
          highlight={project.highlight}
          othersSlugs={
            others
              .map((o) => o.slug)
              .filter((s): s is string => Boolean(s))
          }
        />

        <CtaBanner
          title="Let's Make Your Next Project Happen"
          description="Tell us about your QA challenges — our experts have deep understanding of testing methodologies and business-process best practices."
        />
      </main>
      <Footer />
    </>
  );
}
