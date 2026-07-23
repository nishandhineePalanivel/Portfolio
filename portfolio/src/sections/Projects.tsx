import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Lightbulb, Layers } from "lucide-react";
import { GithubIcon } from "../components/icons";
import { projects, type Project } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

const FILTERS = ["All", "AI/Web", "Frontend", "Embedded"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="group rounded-xl border border-paper-line dark:border-ink-line bg-paper-surface dark:bg-ink-surface overflow-hidden hover:border-brass/60 transition-colors flex flex-col"
    >
      <div className="relative h-44 bg-gradient-to-br from-signal/15 via-paper-surface-2 to-brass/10 dark:from-signal/10 dark:via-ink-surface-2 dark:to-brass/10 flex items-center justify-center overflow-hidden">
        <Layers size={38} className="text-paper-muted/40 dark:text-ink-muted/40 group-hover:scale-110 group-hover:text-brass/50 transition-all duration-500" />
        <span className="absolute top-3 left-3 label-tag px-2.5 py-1 rounded-full bg-ink/80 text-ink-text backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-medium text-paper-text dark:text-ink-text">{project.title}</h3>
        <p className="mt-2.5 text-sm text-paper-muted dark:text-ink-muted leading-relaxed">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-1 rounded-md bg-paper-surface-2 dark:bg-ink-surface-2 text-paper-muted dark:text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <p className="label-tag text-signal dark:text-signal-bright mb-2 flex items-center gap-1.5">
            <Lightbulb size={12} /> Highlights
          </p>
          <ul className="space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-paper-text dark:text-ink-text flex gap-2">
                <span className="text-brass mt-1.5 block w-1 h-1 rounded-full bg-brass shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-5 border-t border-paper-line dark:border-ink-line flex gap-3">
          <a
            href={project.github ?? "https://github.com/nishandhineepalanivel13"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-paper-text dark:text-ink-text hover:text-brass transition-colors"
          >
            <GithubIcon size={15} /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-paper-text dark:text-ink-text hover:text-brass transition-colors"
            >
              <ExternalLink size={15} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-paper-surface-2/50 dark:bg-ink-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading tag="04 — Projects" title="Selected work" />

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  filter === f
                    ? "bg-brass text-ink border-brass"
                    : "border-paper-line dark:border-ink-line text-paper-muted dark:text-ink-muted hover:border-brass hover:text-brass"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <Reveal>
            <p className="mt-12 text-center text-paper-muted dark:text-ink-muted">No projects in this category yet.</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
