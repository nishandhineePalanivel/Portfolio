import { motion } from "framer-motion";
import { Mail, ArrowDown, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { personal } from "../data/profile";
import { SignalVisual } from "../components/SignalVisual";
import { useState, useEffect } from "react";

const ROLES = [
  "Frontend Developer",
  "Embedded Systems Enthusiast",
  "Electronics & Communication Engineer",
];

function useTypewriter(words: string[], speed = 55, pause = 1600) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-tag text-signal dark:text-signal-bright mb-5"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.02] text-paper-text dark:text-ink-text"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-8 flex items-center gap-2 font-mono text-lg sm:text-xl text-brass"
          >
            <Code2 size={18} className="shrink-0" />
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-brass animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-paper-muted dark:text-ink-muted leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="resume.pdf"
              download
              className="px-6 py-3 rounded-md bg-paper-text dark:bg-ink-text text-paper dark:text-ink font-medium text-sm hover:bg-brass dark:hover:bg-brass hover:text-ink transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-md border border-paper-line dark:border-ink-line text-paper-text dark:text-ink-text font-medium text-sm hover:border-brass hover:text-brass transition-colors"
            >
              Get in Touch
            </a>

            <div className="flex items-center gap-1 ml-1">
              {[
                { icon: GithubIcon, href: personal.links.github, label: "GitHub" },
                { icon: LinkedinIcon, href: personal.links.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 text-paper-muted dark:text-ink-muted hover:text-brass transition-colors"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <SignalVisual />
          <div className="absolute -top-6 -right-2 sm:right-4 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-paper-surface dark:border-ink-surface shadow-xl rotate-3">
            <img
              src={personal.photo}
              alt={`Portrait of ${personal.name}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-paper-muted dark:text-ink-muted hover:text-brass transition-colors"
      >
        <span className="label-tag">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
