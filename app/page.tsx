import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/lib/projects";

export default function HomePage() {
  return (
    <main className="min-h-screen pb-24">
      <Hero />

      <section className="max-w-5xl mx-auto px-6 mt-14 sm:mt-20">
        {/* Notion-style database header */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex items-baseline justify-between mb-1.5">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 inline-flex items-center gap-2">
              <span aria-hidden>📂</span> Projects
            </h2>
            <span className="text-sm text-slate-500 tabular-nums">
              {PROJECTS_DATA.length} items
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-8">
            A collection of things I&apos;ve built.
          </p>

          {/* Responsive grid: 1 → 2 → 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS_DATA.map((project, i) => (
              <ProjectCard key={project.repo} project={project} index={i} />
            ))}
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-slate-200 text-sm text-slate-400 text-center">
          <p>
            Built with Next.js, Tailwind CSS &amp; Framer Motion · ©{" "}
            {new Date().getFullYear()} Zeta
          </p>
        </footer>
      </section>
    </main>
  );
}