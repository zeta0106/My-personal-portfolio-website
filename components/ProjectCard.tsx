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

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200"
    >
      {/* Thumbnail — taller on mobile, wider on tablet/desktop */}
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
          {hasLive ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
            >
              <span aria-hidden>↗</span> Live
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-sm text-slate-400"
              title="No live demo yet"
            >
              <span aria-hidden>↗</span> Live (soon)
            </span>
          )}
          <span className="text-slate-200" aria-hidden>
            ·
          </span>
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