"use client";
import useHasCookie from "../hooks/useHasCookie";
import AuthButton from "./AuthButton";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { hasCookie } = useHasCookie();
  return (
    <div className="flex flex-row items-center justify-between p-3">
      <div className="flex flex-row gap-2 items-center h-fit">
        <span className="w-4 h-4 bg-[var(--accent)] rounded-full"></span>
        <h1 className="font-bold text-md">Spotify Analyzer</h1>
      </div>
      <AnimatePresence>
        {hasCookie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
            exit={{ opacity: 0 }}
            key={hasCookie}
          >
            <AuthButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
