import { motion } from "framer-motion";

// The signature element: an oscilloscope-style signal trace over a PCB grid,
// nodding to the resume's flame-sensor / signal-processing projects while
// standing in for "reading and generating a signal" — hardware becoming interface.
export function SignalVisual() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto select-none" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-paper-line dark:text-ink-line" />
          </pattern>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-signal)" />
            <stop offset="100%" stopColor="var(--color-brass)" />
          </linearGradient>
        </defs>

        <rect x="20" y="20" width="360" height="360" rx="18" fill="url(#grid)" opacity="0.6" />
        <rect x="20" y="20" width="360" height="360" rx="18" fill="none" stroke="currentColor" strokeWidth="1" className="text-paper-line dark:text-ink-line" />

        {/* Corner circuit traces */}
        <path
          d="M 20 90 L 60 90 L 75 105 L 75 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-paper-line dark:text-ink-line"
        />
        <path
          d="M 380 300 L 330 300 L 315 315 L 315 360"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-paper-line dark:text-ink-line"
        />
        <circle cx="75" cy="150" r="4" fill="var(--color-brass)" />
        <circle cx="315" cy="360" r="4" fill="var(--color-signal)" />
        <circle cx="20" cy="90" r="3" fill="currentColor" className="text-paper-muted dark:text-ink-muted" />
        <circle cx="380" cy="300" r="3" fill="currentColor" className="text-paper-muted dark:text-ink-muted" />

        {/* Oscilloscope waveform - the signature stroke */}
        <motion.path
          d="M 40 210 L 110 210 L 130 130 L 160 290 L 190 210 L 230 210 L 250 165 L 270 245 L 290 210 L 360 210"
          fill="none"
          stroke="url(#traceGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
        />

        {/* Traveling pulse along the wave */}
        <motion.circle
          r="5"
          fill="var(--color-brass)"
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
          style={{
            offsetPath:
              "path('M 40 210 L 110 210 L 130 130 L 160 290 L 190 210 L 230 210 L 250 165 L 270 245 L 290 210 L 360 210')",
          }}
        />

        {/* Baseline ticks like a datasheet */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={40 + i * 40}
            y1="205"
            x2={40 + i * 40}
            y2="215"
            stroke="currentColor"
            strokeWidth="1"
            className="text-paper-muted/40 dark:text-ink-muted/40"
          />
        ))}

        <text x="40" y="345" className="font-mono fill-current text-paper-muted dark:text-ink-muted" fontSize="10" letterSpacing="1">
          CH1 · SIGNAL.TRACE
        </text>
      </svg>
    </div>
  );
}
