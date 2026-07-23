import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../data/profile";

export function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-ink-text text-sm tracking-widest"
          >
            {personal.initials}
            <span className="text-brass">//</span>
          </motion.div>
          <div className="mt-5 w-40 h-[3px] rounded-full bg-ink-line overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-signal to-brass"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
          <p className="mt-4 label-tag text-ink-muted">Booting portfolio</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
