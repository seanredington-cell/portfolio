"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/**
 * Background Component
 *
 * Creates a soft, blurred gradient background with:
 * - Background gradient image
 * - Grainy texture overlay
 * - Soft, feathered edges
 * - Parallax depth layers
 * - Animated grid pattern
 */
export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms for different layers - starts after scrolling a bit
  const layer1Y = useTransform(scrollY, [300, 1500], [0, 150]);
  const layer2Y = useTransform(scrollY, [300, 1500], [0, 250]);
  const layer3Y = useTransform(scrollY, [300, 1500], [0, 100]);

  return (
    <>
      {/* Base layer - respects dark mode */}
      <div className="fixed inset-0 -z-20 bg-white dark:bg-gray-900" />

      {/* Background gradient image - Disabled for performance (34MB image) */}
      {/* The CSS gradients below provide a beautiful background without the heavy image */}
      {/*
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-30">
        <div className="relative w-full h-full">
          <Image
            src="/background-gradient.jpg"
            alt="Background gradient"
            fill
            className="object-cover"
            quality={100}
            priority
            sizes="100vw"
          />
        </div>
      </div>
      */}

      {/* Blurry gradient layer with parallax (keep for extra depth) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-25 dark:opacity-10">
        {/* Main blurred gradient shape - horizontal oval - Layer 1 (slowest) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ y: layer1Y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px] sm:w-[1800px] sm:h-[1000px] lg:w-[2200px] lg:h-[1200px]"
      >
        <div
          className="w-full h-full rounded-full blur-[120px] sm:blur-[150px] lg:blur-[180px]"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                rgba(59, 130, 246, 1) 0%,
                rgba(96, 165, 250, 0.75) 30%,
                rgba(147, 197, 253, 0.5) 60%,
                rgba(191, 219, 254, 0.25) 80%,
                transparent 100%
              )
            `,
          }}
        />
      </motion.div>

      {/* Secondary gradient shape for depth - offset - Layer 2 (fastest) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        style={{ y: layer2Y }}
        className="absolute top-1/3 right-1/4 w-[1000px] h-[600px] sm:w-[1200px] sm:h-[800px] lg:w-[1400px] lg:h-[900px]"
      >
        <div
          className="w-full h-full rounded-full blur-[100px] sm:blur-[130px] lg:blur-[150px]"
          style={{
            background: `
              radial-gradient(
                ellipse 80% 50% at 50% 50%,
                rgba(37, 99, 235, 1) 0%,
                rgba(59, 130, 246, 0.7) 40%,
                rgba(96, 165, 250, 0.5) 80%,
                transparent 100%
              )
            `,
          }}
        />
      </motion.div>

      {/* Tertiary accent shape - Layer 3 (medium) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        style={{ y: layer3Y }}
        className="absolute bottom-1/4 left-1/3 w-[800px] h-[500px] sm:w-[1000px] sm:h-[600px] lg:w-[1200px] lg:h-[700px]"
      >
        <div
          className="w-full h-full rounded-full blur-[90px] sm:blur-[120px] lg:blur-[140px]"
          style={{
            background: `
              radial-gradient(
                ellipse 70% 45% at 50% 50%,
                rgba(29, 78, 216, 1) 0%,
                rgba(59, 130, 246, 0.75) 50%,
                transparent 100%
              )
            `,
          }}
        />
      </motion.div>

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-radial-gradient(circle at 0 0, transparent 0, rgba(0,0,0,0.04) 1px, transparent 2px),
            repeating-radial-gradient(circle at 50% 50%, transparent 0, rgba(0,0,0,0.03) 1px, transparent 2px),
            repeating-radial-gradient(circle at 100% 100%, transparent 0, rgba(0,0,0,0.02) 1px, transparent 2px)
          `,
          backgroundSize: '4px 4px, 5px 5px, 6px 6px',
          backgroundPosition: '0 0, 2px 2px, 3px 3px',
          opacity: 0.5,
        }}
      />

      {/* Fine grain overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent 0, transparent 1px, rgba(0,0,0,0.015) 1px, rgba(0,0,0,0.015) 2px),
            repeating-linear-gradient(90deg, transparent 0, transparent 1px, rgba(0,0,0,0.015) 1px, rgba(0,0,0,0.015) 2px)
          `,
          backgroundSize: '3px 3px',
          opacity: 0.4,
        }}
      />

      </div>

      {/* Animated grid pattern that warps with scroll */}
      <motion.div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-20 dark:opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          y: useTransform(scrollY, [300, 1500], [0, -50]),
          scale: useTransform(scrollY, [300, 1500], [1, 1.05]),
        }}
      />


      {/* Subtle blur overlay - much lighter to not hide the gradient */}
      <div className="fixed inset-0 pointer-events-none backdrop-blur-[1px]" style={{ zIndex: -5 }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.05) 100%
              )
            `,
          }}
        />
      </div>
    </>
  );
}

