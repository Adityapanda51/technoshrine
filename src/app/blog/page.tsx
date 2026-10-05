import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import BlogGrid from "./BlogGrid";

export const metadata: Metadata = {
  title: "News & Blogs — TechnoShrine",
  description:
    "Learn more about TechnoShrine — insights, announcements and thought leadership on testing, AI and emerging technologies.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="News & Blogs"
          title="Read Our Latest"
          highlight="Updates"
          description="Insights, announcements and thought leadership from the TechnoShrine team."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />
        <BlogGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
