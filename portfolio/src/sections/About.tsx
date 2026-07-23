import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { about, projects, experience, certifications } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useCountUp } from "../hooks/useCountUp";

const STATS = [
  { label: "Projects Shipped", value: projects.length },
  { label: "Internships", value: experience.length },
  { label: "Certifications", value: certifications.length },
  { label: "CGPA", value: 8.74, decimal: true },
];

function Stat({ label, value, decimal }: { label: string; value: number; decimal?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(decimal ? value * 100 : value, inView);
  const display = decimal ? (count / 100).toFixed(2) : count;

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-display text-3xl sm:text-4xl font-medium text-brass">{display}</div>
      <div className="mt-1 label-tag text-paper-muted dark:text-ink-muted">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading tag="01 — About" title="Where hardware meets interface" />

        <div className="mt-12 grid lg:grid-cols-[1.3fr_1fr] gap-14">
          <Reveal delay={0.1}>
            <p className="text-lg sm:text-xl leading-relaxed text-paper-text dark:text-ink-text">
              {about.objective}
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.15}>
              <h3 className="label-tag text-signal dark:text-signal-bright mb-4">Technical Strengths</h3>
              <ul className="space-y-3">
                {about.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-paper-text dark:text-ink-text text-[15px]">
                    <CheckCircle2 size={17} className="text-brass mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="label-tag text-signal dark:text-signal-bright mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {about.softSkills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-sm border border-paper-line dark:border-ink-line text-paper-text dark:text-ink-text"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
