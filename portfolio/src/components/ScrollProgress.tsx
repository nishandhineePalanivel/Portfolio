import { useScrollProgress } from "../hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-signal to-brass transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
