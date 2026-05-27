"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Pre-filled email (opens mail app with subject + body ready)
  const emailHref =
    "mailto:cyrilchiu111@gmail.com" +
    "?subject=" +
    encodeURIComponent("Hello Zeta 👋") +
    "&body=" +
    encodeURIComponent(
      "Hi Zeta,\n\nI saw your portfolio and wanted to reach out about...\n\n"
    );

  return (
    <section className="max-w-3xl mx-auto px-6 pt-16 sm:pt-24">
      {/* Name & Title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-2">
          Hi, I&apos;m Zeta 👋
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Year 2 Computer Science student at HKCC. I love turning ideas into
          things you can actually click.
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-600"
      >
        <a
          href="https://github.com/zeta0106"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
        >
          <span aria-hidden>🔗</span>
          <span className="font-medium">GitHub</span>
        </a>

        <span className="text-slate-300" aria-hidden>
          ·
        </span>

        <a
          href={emailHref}
          className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
        >
          <span aria-hidden>📧</span>
          <span className="font-medium">Email</span>
        </a>

        <span className="text-slate-300" aria-hidden>
          ·
        </span>

        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden>📍</span>
          <span className="font-medium">Hong Kong</span>
        </span>
      </motion.div>
    </section>
  );
}