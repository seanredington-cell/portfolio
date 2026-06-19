"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * Background Component
 *
 * Creates a soft, blurred gradient background with:
 * - Background gradient image
 * - Grainy texture overlay
 * - Soft, feathered edges
 * - Parallax depth layers (desktop only)
 * - Animated grid pattern
 */
export default function Background() {
  const [isMobile, setIsMobile] = useState(true); // default true = safe for SSR/mobile

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Scroll hooks — only used on desktop
  const { scrollY } = useScroll();
  const layer1Y = useTransform(scrollY, [300, 1500], isMobile ? [0, 0] : [0, 150]);
  const layer2Y = useTransform(scrollY, [300, 1500], isMobile ? [0, 0] : [0, 250]);
  const layer3Y = useTransform(scrollY, [300, 1500], isMobile ? [0, 0] : [0, 100]);
  const gridY    = useTransform(scrollY, [300, 1500], isMobile ? [0, 0] : [0, -50]);
  const gridScale = useTransform(scrollY, [300, 1500], isMobile ? [1, 1] : [1, 1.05]);

  return (
    <>
      {/* Base layer - respects dark mode */}
      <div className="fixed inset-0 -z-20 bg-white dark:bg-gray-900" />

      {/* Gradient layer — blurred blobs on desktop, simple radial on mobile */}
      {isMobile ? (
        /* Mobile: single CSS gradient, zero GPU blur, zero JS */
        <div className="fixed inset-0 -z-10 pointer-events-none" style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(59,130,246,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 70%, rgba(37,99,235,0.05) 0%, transparent 70%)
          `
        }} />
      ) : (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-25 dark:opacity-10">
          {/* Layer 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ y: layer1Y }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2200px] h-[1200px]"
          >
            <div
              className="w-full h-full rounded-full blur-[180px]"
              style={{
                background: `radial-gradient(circle at 50% 50%, rgba(59,130,246,1) 0%, rgba(96,165,250,0.75) 30%, rgba(147,197,253,0.5) 60%, transparent 100%)`,
              }}
            />
          </motion.div>

          {/* Layer 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
            style={{ y: layer2Y }}
            className="absolute top-1/3 right-1/4 w-[1400px] h-[900px]"
          >
            <div
              className="w-full h-full rounded-full blur-[150px]"
              style={{
                background: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(37,99,235,1) 0%, rgba(59,130,246,0.7) 40%, transparent 100%)`,
              }}
            />
          </motion.div>

          {/* Layer 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
            style={{ y: layer3Y }}
            className="absolute bottom-1/4 left-1/3 w-[1200px] h-[700px]"
          >
            <div
              className="w-full h-full rounded-full blur-[140px]"
              style={{
                background: `radial-gradient(ellipse 70% 45% at 50% 50%, rgba(29,78,216,1) 0%, rgba(59,130,246,0.75) 50%, transparent 100%)`,
              }}
            />
          </motion.div>
        </div>
      )}

      {/* Dot grid pattern — light and dark handled via CSS */}
      <div className="dot-grid fixed inset-0 -z-10 pointer-events-none" />
    </>
  );
}
