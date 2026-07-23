import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ tag, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-brass opacity-60 animate-ping" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brass" />
        </span>
        <span className="label-tag text-brass">{tag}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-paper-text dark:text-ink-text">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-paper-muted dark:text-ink-muted text-base sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
