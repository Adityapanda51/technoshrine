import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — TechnoShrine",
  description:
    "A portfolio of our recently completed projects: telecom & software testing, digital banking, ERP go-live readiness and IoT device farm automation.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Complete Projects"
          title="Our Recently Completed"
          highlight="Projects List"
          description="Ever find yourself staring at your screen hoping a good consulting slogan comes to mind? Oftentimes, the work speaks for itself."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        />
        <ProjectsGrid projects={projects} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
