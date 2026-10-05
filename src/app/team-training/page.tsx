import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Team Training - TechnoShrine Infosolutions Pvt Ltd",
  description:
    "Team training and online courses at TechnoShrine Infosolutions Pvt Ltd. Build skills across telecom testing, software testing and IT consultancy.",
};

const courses = [
  {
    title: "Telecom Testing Fundamentals",
    duration: "4 weeks",
    level: "Beginner",
  },
  {
    title: "Software Testing & QA Practices",
    duration: "6 weeks",
    level: "Intermediate",
  },
  {
    title: "5G/6G Network Validation",
    duration: "5 weeks",
    level: "Advanced",
  },
  {
    title: "Automation Frameworks",
    duration: "4 weeks",
    level: "Intermediate",
  },
  {
    title: "Consulting & Business Strategy",
    duration: "3 weeks",
    level: "Beginner",
  },
  {
    title: "Emerging Technologies",
    duration: "4 weeks",
    level: "Advanced",
  },
];

export default function TeamTrainingPage() {
  return (
    <>
      <PageHero
        title="Team Training"
        highlight="Online Courses & Development"
        description="Structured learning paths, certification support and hands-on labs for every member of our team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team Training" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold leading-tight text-white">
            Training Programs
          </h2>
          <p className="mt-3 max-w-2xl text-ink-300 leading-relaxed">
            Our training programs are built to help team members grow fastest when
            given real responsibility early — owning test strategies, automation
            frameworks and client relationships from day one, supported by mentors and
            structured learning paths.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group flex flex-col gap-3 rounded-xl border border-brand-400/10 bg-night-900/40 p-5 transition-colors hover:border-brand-400/30 hover:bg-night-900/60"
            >
              <h3 className="font-display text-base font-semibold text-white">
                {course.title}
              </h3>
              <ul className="space-y-1.5 text-sm text-ink-400">
                <li className="flex items-center gap-2">
                  <span className="text-brand-400">●</span>
                  {course.duration}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-400">●</span>
                  {course.level}
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-royal-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Enroll Now
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-400/10 bg-night-900/40 p-6">
          <h3 className="font-display text-lg font-semibold text-white">
            How we train
          </h3>
          <p className="mt-3 text-sm text-ink-300 leading-relaxed">
            We believe people grow fastest when given real responsibility early. Our
            engineers own test strategies, automation frameworks and client
            relationships from day one — supported by mentors, structured learning
            paths and the best certification support in the industry.
          </p>
        </div>
      </section>
    </>
  );
}
