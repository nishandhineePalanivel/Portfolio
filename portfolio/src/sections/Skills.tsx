import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

function SkillBar({ name, level, inView, delay }: { name: string; level: number; inView: boolean; delay: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm text-paper-text dark:text-ink-text">{name}</span>
        <span className="font-mono text-xs text-paper-muted dark:text-ink-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-paper-line dark:bg-ink-line overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-signal to-brass"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="03 — Skills"
          title="Toolkit"
          description="Skills as tracked signals — self-assessed relative strength, not a claim to mastery."
        />

        <div ref={ref} className="mt-14 grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {skills.map((cat, ci) => (
            <Reveal key={cat.category} delay={ci * 0.08}>
              <h3 className="label-tag text-signal dark:text-signal-bright mb-5">{cat.category}</h3>
              <div className="space-y-4">
                {cat.items.map((item, ii) => (
                  <SkillBar key={item.name} {...item} inView={inView} delay={ci * 0.08 + ii * 0.06} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
