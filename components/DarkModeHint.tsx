"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "@/contexts/DarkModeContext";

export default function DarkModeHint() {
  const [visible, setVisible] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const seen = localStorage.getItem('darkModeHintSeen');
    if (!seen) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onScroll = () => {
      if (window.scrollY > 40) {
        setVisible(false);
        localStorage.setItem('darkModeHintSeen', 'true');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible]);

  const label = isDarkMode ? 'Turn on the lights' : 'Turn off the lights';

  // Layout: SVG 380w x 44h
  // Text starts at x=4, arrow shaft runs from ~x=195 to x=364, arrowhead at x=364
  // SVG positioned fixed: top so vertical center (y=22) aligns with toggle center (viewport y=50) → top=28
  // right: viewport(1307) - toggle_left(1235) + 4px gap + arrow_tip_offset_from_right(380-364=16) = 72+16 = 88
  // → right: 88

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block fixed z-[99] pointer-events-none"
          style={{ top: 28, right: 46 }}
        >
          <svg
            width="244"
            height="44"
            viewBox="0 0 244 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600 dark:text-gray-300"
          >
            {/* Handwritten label — tight to arrow */}
            <text
              x="4"
              y="28"
              fontFamily="var(--font-caveat), cursive"
              fontSize="22"
              fill="currentColor"
            >
              {label}
            </text>

            {/* Short arrow shaft — starts just 8px after text ends */}
            <path
              d="M 156 22 C 174 20, 204 24, 222 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Arrowhead */}
            <path
              d="M 222 22 L 210 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 222 22 L 210 31"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
