"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative">
      {/* Profile content */}
      <div className="max-w-3xl mx-auto px-6 pt-12 sm:pt-16">
        {/* Emoji avatar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200 shadow-sm text-5xl sm:text-6xl">
            <span aria-hidden>💻</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
        >
          Zeta&apos;s Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
        >
          Year 2 Computer Science student building websites, games, and 3D
          experiments. Welcome to my workspace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"
        >
          <a
            href="https://github.com/zeta0106"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
          >
            <span aria-hidden>🔗</span> GitHub
          </a>
          <span className="text-slate-300" aria-hidden>
            ·
          </span>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
          >
            <span aria-hidden>✉️</span> Email
          </a>
          <span className="text-slate-300" aria-hidden>
            ·
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden>📍</span> Hong Kong
          </span>
        </motion.div>
      </div>
    </header>
  );
}