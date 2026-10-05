import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import PostClient from "./PostClient";
import { posts, getPost } from "@/lib/data";
import Link from "next/link";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found — TechnoShrine" };
  return {
    title: `${post.title} — TechnoShrine Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-36 pb-10 lg:pt-44">
          <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
          <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-500/15 blur-[140px]" />
          <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
            <nav
              className="mb-6 flex items-center justify-center gap-1.5 text-xs font-medium text-ink-500"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="transition-colors hover:text-brand-300">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-ink-600" />
              <Link href="/blog" className="transition-colors hover:text-brand-300">
                Blog
              </Link>
              <ChevronRight className="h-3 w-3 text-ink-600" />
              <span className="text-brand-300">{post.category}</span>
            </nav>
            <PostClient post={post} />
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-ink-500">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <article className="relative py-12">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            {post.body.map((para, i) => (
              <p
                key={i}
                className={`mb-6 leading-[1.85] text-ink-300 ${
                  i === 0 ? "text-lg first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-brand-400 first-letter:mr-2 first-letter:float-left" : ""
                }`}
              >
                {para}
              </p>
            ))}

            <div className="glass mt-10 rounded-2xl p-6">
              <p className="text-sm text-ink-400">
                Want to talk about how TechnoShrine can support your business?
                Our team is one call away.
              </p>
              <Link
                href="/#contact"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-400"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="relative py-16">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <h2 className="mb-8 font-display text-2xl font-bold text-white">
              Related <span className="text-gradient">Articles</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="glass card-hover group rounded-2xl p-6"
                >
                  <span className="text-[11px] font-semibold tracking-wider text-brand-300 uppercase">
                    {r.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-white transition-colors group-hover:text-brand-300">
                    {r.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-400">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
