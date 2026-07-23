import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "../data/profile";

const QUICK_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-paper-line dark:border-ink-line py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <span className="font-mono text-sm text-paper-text dark:text-ink-text">
            {personal.initials}
            <span className="text-brass">//</span>
          </span>
          <p className="mt-1 text-xs text-paper-muted dark:text-ink-muted">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {QUICK_LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-paper-muted dark:text-ink-muted hover:text-brass transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={personal.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-paper-muted dark:text-ink-muted hover:text-brass transition-colors">
            <GithubIcon size={17} />
          </a>
          <a href={personal.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-paper-muted dark:text-ink-muted hover:text-brass transition-colors">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="text-paper-muted dark:text-ink-muted hover:text-brass transition-colors">
            <Mail size={17} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-1 p-2 rounded-md border border-paper-line dark:border-ink-line hover:border-brass hover:text-brass transition-colors text-paper-muted dark:text-ink-muted"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
