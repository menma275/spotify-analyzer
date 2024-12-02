"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.div
      className="w-full bg-[var(--mg)] p-6 rounded-3xl flex flex-row justify-between mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-sm font-bold text-[var(--subtle)]">
        Spotify Analyzer
      </h1>
      <ul className="text-xs font-medium flex flex-col gap-3">
        <li>
          <p className="text-[var(--subtle)]">Made by</p>
          <a
            className="hover:text-[var(--accent)]"
            href="https://www.sakamura.dev/"
            target="_blank"
          >
            Kusuke Sakamura
          </a>
        </li>
        <li>
          <p className="text-[var(--subtle)]">Source Code</p>
          <a
            className="flex gap-1 items-center hover:text-[var(--accent)]"
            href="https://github.com/menma275/spotify-analyzer"
            target="_blank"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
