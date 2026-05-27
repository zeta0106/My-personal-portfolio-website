"use client";

import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/lib/projects";

export default function StatsBar() {
  // Auto-calculate stats from project data
  const totalProjects = PROJECTS_DATA.length;
  const liveProjects = PROJECTS_DATA.filter(
    (p) => p.status === "live" || (!p.status && p.live)
  ).length;

  // Count unique technologies from all tags
  const allTags = PROJECTS_DATA.flatMap((p) => p.tags);
  const uniqueTechs = new Set(allTags).size;

  const stats = [
    { value: totalProjects.toString(), label: "Projects", emoji: "🚀" },
    { value: liveProjects.toString(), label: "Live", emoji: "🌐" },
    { value: uniqueTechs.toString(), label: "Technologies", emoji: "🛠️" },
    { value: "Year 2", label: "CS Student", emoji: "🎓" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-3xl mx-auto px-6 mt-10 sm:mt-12"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
            className="group relative rounded-xl border border-slate-200 bg-white px-4 py-3 sm:py-4 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base" aria-hidden>
                {stat.emoji}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {stat.label}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}