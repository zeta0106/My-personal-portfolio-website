"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const repoUrl = `https://github.com/${project.repo}`;
  const hasLive =
    project.live &&
    project.live.trim() !== "" &&
    !project.live.startsWith("PASTE");

  // Determine status (default: live if URL exists, otherwise in-dev)
  const status = project.status ?? (hasLive ? "live" : "in-dev");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div
        className={`relative aspect-[4/3] sm:aspect-video w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_#000_1px,_transparent_0)] bg-[length:14px_14px]" />
        <span
          className="text-6xl sm:text-7xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
          aria-hidden
        >
          {project.emoji}
        </span>

        {/* Status corner badge */}
        {status === "in-dev" && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-amber-700 text-[10px] font-semibold uppercase tracking-wide shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              In Dev
            </span>
          </div>
        )}

        {status === "console" && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-sm text-slate-100 text-[10px] font-semibold uppercase tracking-wide shadow-sm">
              <span aria-hidden>▶</span>
              Console App
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-lg" aria-hidden>
            {project.emoji}
          </span>
          <h3 className="text-base font-semibold text-slate-900 truncate">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-slate-100">
          {/* Status-aware action link */}
          {status === "live" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
            >
              <span aria-hidden>↗</span> Live
            </a>
          )}

          {status === "in-dev" && (
            <span
              className="inline-flex items-center gap-1.5 text-sm text-amber-600 font-medium"
              title="Currently in development"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              Building
            </span>
          )}

          {status === "console" && (
            <span
              className="inline-flex items-center gap-1.5 text-sm text-slate-700 font-medium"
              title="Runs in BlueJ / terminal"
            >
              <span aria-hidden>▶</span> Terminal
            </span>
          )}

          <span className="text-slate-200" aria-hidden>·</span>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            <span aria-hidden>◆</span> Repo
          </a>
        </div>
      </div>
    </motion.article>
  );
}