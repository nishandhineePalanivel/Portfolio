import { FlaskConical } from "lucide-react";
import { research } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="07 — Research"
          title="Research & concept work"
          description="Independent concept work exploring embedded systems applied to safety and sustainability."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {research.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-paper-line dark:border-ink-line p-7 hover:border-brass/60 transition-colors">
                <FlaskConical size={20} className="text-signal dark:text-signal-bright mb-4" />
                <h3 className="font-display text-lg font-medium text-paper-text dark:text-ink-text">{item.title}</h3>
                <p className="mt-3 text-sm text-paper-muted dark:text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
