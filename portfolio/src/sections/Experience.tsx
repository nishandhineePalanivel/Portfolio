import { Briefcase } from "lucide-react";
import { experience } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading tag="05 — Experience" title="Internships & practical experience" />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-paper-line dark:border-ink-line p-7 hover:border-brass/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brass/10 border border-brass/30 flex items-center justify-center mb-5">
                  <Briefcase size={18} className="text-brass" />
                </div>
                <h3 className="font-display text-xl font-medium text-paper-text dark:text-ink-text">{exp.role}</h3>
                <p className="text-signal dark:text-signal-bright text-sm font-medium mt-1">{exp.org}</p>
                <ul className="mt-4 space-y-2.5">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm text-paper-muted dark:text-ink-muted flex gap-2.5">
                      <span className="mt-1.5 block w-1 h-1 rounded-full bg-brass shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
