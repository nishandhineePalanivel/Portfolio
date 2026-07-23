import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-paper dark:bg-ink text-center">
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewBox="0 0 200 80"
        className="w-56 mb-6"
      >
        <path
          d="M 10 40 L 60 40 L 72 15 L 84 65 L 96 40 L 130 40 L 142 25 L 154 55 L 190 40"
          fill="none"
          stroke="var(--color-brass)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      <p className="label-tag text-brass mb-3">Error 404</p>
      <h1 className="font-display text-4xl sm:text-5xl font-medium text-paper-text dark:text-ink-text">
        Signal lost
      </h1>
      <p className="mt-4 max-w-md text-paper-muted dark:text-ink-muted">
        This page doesn't exist. It may have moved, or the URL might be off by a bit.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brass text-ink font-medium text-sm hover:bg-brass-bright transition-colors"
      >
        <ArrowLeft size={15} /> Back to home
      </a>
    </div>
  );
}
