"use client";

import { motion } from "framer-motion";

type LearningItem = {
  emoji: string;
  title: string;
  description: string;
  status: "learning" | "exploring" | "planning";
};

const ITEMS: LearningItem[] = [
  {
    emoji: "🎮",
    title: "Game Development",
    description: "Exploring game design and building small interactive games.",
    status: "exploring",
  },
  {
    emoji: "🎨",
    title: "Blender 3D",
    description: "Learning 3D modeling to combine with web for richer visuals.",
    status: "learning",
  },
  {
    emoji: "🌐",
    title: "Full-Stack Web",
    description: "Diving deeper into Next.js, databases, and backend APIs.",
    status: "learning",
  },
];

const STATUS_STYLES = {
  learning: {
    label: "Learning",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  exploring: {
    label: "Exploring",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    dot: "bg-purple-500",
  },
  planning: {
    label: "Planning",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
};

export default function NowBuilding() {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-14 sm:mt-20">
      <div className="border-t border-slate-200 pt-8">
        <div className="flex items-baseline justify-between mb-1.5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 inline-flex items-center gap-2">
            <span aria-hidden>🌱</span> Now Building
          </h2>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Active
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-6">
          What I&apos;m currently learning &amp; exploring.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => {
            const style = STATUS_STYLES[item.status];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="group relative rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl" aria-hidden>
                    {item.emoji}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wide ${style.color}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                    />
                    {style.label}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}