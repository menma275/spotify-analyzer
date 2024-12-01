"use client";
import { motion } from "framer-motion";
import AuthButton from "./AuthButton";
import { useState, useEffect } from "react";

export default function Welcome() {
  const [buttonWidth, setButtonWidth] = useState<"full" | "fit">("fit");

  useEffect(() => {
    const updateWidth = () => {
      setButtonWidth(window.innerWidth < 640 ? "full" : "fit");
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-dvh">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } }}
        className="text-3xl font-black drop-shadow-sm text-center"
        // style={{ textShadow: "0px 0px 5px #fff" }}
      >
        Analyze your Listening Experience
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 1 } }}
        className="flex sm:flex-row flex-col gap-2 items-center justify-center"
      >
        <AuthButton width={buttonWidth} />
        <p className="whitespace-nowrap text-sm">with your Spotify Account</p>
      </motion.div>
    </div>
  );
}
