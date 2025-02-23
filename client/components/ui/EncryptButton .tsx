"use client";

import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const TARGET_TEXT = "Encrypt data";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

interface EncryptButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const EncryptButton = ({ onClick, disabled }: EncryptButtonProps) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.025 }}
      whileTap={{ scale: disabled ? 1 : 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={onClick}
      disabled={disabled}
      className={`mt-5 group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-indigo-600 px-4 py-2 font-mono font-medium uppercase text-white transition-colors hover:text-indigo-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <div className="relative z-10 flex items-center gap-2">
        <FiLock />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1, ease: "linear" }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};
