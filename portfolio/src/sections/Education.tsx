import { GraduationCap } from "lucide-react";
import { education } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-paper-surface-2/50 dark:bg-ink-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading tag="02 — Education" title="Academic timeline" />

        <div className="mt-14 relative max-w-2xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-brass to-transparent" />
          <div className="space-y-12">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 0.12}>
                <div className="relative pl-11">
                  <span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-paper dark:bg-ink border-2 border-brass flex items-center justify-center">
                    <GraduationCap size={15} className="text-brass" />
                  </span>
                  <span className="label-tag text-signal dark:text-signal-bright">{item.period}</span>
                  <h3 className="font-display text-xl sm:text-2xl font-medium mt-1.5 text-paper-text dark:text-ink-text">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-paper-muted dark:text-ink-muted">{item.institution}</p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full text-sm font-mono bg-brass/10 text-brass border border-brass/30">
                    {item.detail}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
