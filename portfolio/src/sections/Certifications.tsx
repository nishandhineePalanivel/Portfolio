import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-paper-surface-2/50 dark:bg-ink-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading tag="06 — Certifications" title="Certifications" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-paper-line dark:border-ink-line p-6 bg-paper-surface dark:bg-ink-surface hover:border-brass/60 transition-colors flex flex-col">
                <Award size={20} className="text-brass mb-4" />
                <h3 className="font-medium text-paper-text dark:text-ink-text leading-snug flex-1">{cert.name}</h3>
                <p className="mt-3 text-sm text-paper-muted dark:text-ink-muted">{cert.provider}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-paper-muted/60 dark:text-ink-muted/60">
                  <ExternalLink size={12} /> Credential on request
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
