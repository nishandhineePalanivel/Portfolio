import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export type ToastState = { message: string; visible: boolean };

export function Toast({ message, visible }: ToastState) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2.5 px-4 py-3 rounded-lg bg-ink text-ink-text border border-brass/40 shadow-xl"
          role="status"
        >
          <CheckCircle2 size={17} className="text-brass shrink-0" />
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
