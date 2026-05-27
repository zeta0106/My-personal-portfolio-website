"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/lib/projects";

type Filter = {
  id: string;
  label: string;
  emoji: string;
  match: (tags: string[]) => boolean;
};

const FILTERS: Filter[] = [
  {
    id: "all",
    label: "All",
    emoji: "✨",
    match: () => true,
  },
  {
    id: "web",
    label: "Web",
    emoji: "🌐",
    match: (tags) =>
      tags.some((t) =>
        ["HTML", "CSS", "JavaScript", "Web"].includes(t)
      ),
  },
  {
    id: "react",
    label: "React",
    emoji: "⚛️",
    match: (tags) => tags.includes("React"),
  },
  {
    id: "java",
    label: "Java",
    emoji: "☕",
    match: (tags) => tags.includes("Java"),
  },
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Calculate counts for each filter
  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    FILTERS.forEach((f) => {
      map[f.id] = PROJECTS_DATA.filter((p) => f.match(p.tags)).length;
    });
    return map;
  }, []);

  const filtered = useMemo(() => {
    const filter = FILTERS.find((f) => f.id === activeFilter);
    if (!filter) return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => filter.match(p.tags));
  }, [activeFilter]);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          const count = counts[filter.id];
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              <span aria-hidden>{filter.emoji}</span>
              <span>{filter.label}</span>
              <span
                className={`tabular-nums text-xs px-1.5 py-0.5 rounded ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 py-12 text-center">
          <div className="text-3xl mb-2" aria-hidden>
            🤔
          </div>
          <p className="text-sm text-slate-600 font-medium">
            No projects in this category yet.
          </p>
          <p className="text-xs text-slate-400 mt-1">More coming soon!</p>
        </div>
      )}

      {/* Animated grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.repo}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}