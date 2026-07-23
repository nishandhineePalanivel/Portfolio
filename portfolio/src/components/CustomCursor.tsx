import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [pointer, setPointer] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setPointer(!!target.closest("a, button, input, textarea"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full border border-brass"
      animate={{
        x: pos.x - (pointer ? 18 : 8),
        y: pos.y - (pointer ? 18 : 8),
        width: pointer ? 36 : 16,
        height: pointer ? 36 : 16,
        backgroundColor: pointer ? "rgba(201,151,63,0.15)" : "rgba(201,151,63,0.6)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.4 }}
    />
  );
}
