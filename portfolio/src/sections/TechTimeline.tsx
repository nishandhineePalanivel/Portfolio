import { timeline } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function TechTimeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32 bg-paper-surface-2/50 dark:bg-ink-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading tag="08 — Roadmap" title="Technical timeline" description="How the toolkit was built, one system at a time." />

        <div className="mt-14 relative">
          {/* Trace line */}
          <div className="hidden sm:block absolute left-0 right-0 top-[13px] h-px bg-gradient-to-r from-signal via-brass to-signal opacity-40" />

          <div className="grid sm:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-4">
            {timeline.map((t, i) => (
              <Reveal key={t.label} delay={i * 0.08}>
                <div className="relative">
                  <div className="hidden sm:block w-[10px] h-[10px] rounded-full bg-brass border-2 border-paper dark:border-ink relative z-10 mb-4" />
                  <span className="label-tag text-brass block mb-1">{t.year}</span>
                  <p className="text-sm text-paper-text dark:text-ink-text leading-snug">{t.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
