"use client";

import React, { useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import Image from "next/image";

interface WhitelabelSlotMachineProps {
  brandColor: string;
}

const apps = [
  { id: 1, name: "Brand 1", image: "/projects/getmee/Slider image 1.webp" },
  { id: 2, name: "Brand 2", image: "/projects/getmee/Slider image 2.webp" },
  { id: 3, name: "Brand 3", image: "/projects/getmee/Slider image 3.webp" },
  { id: 4, name: "Brand 4", image: "/projects/getmee/Slider image 4.webp" },
  { id: 5, name: "Brand 5", image: "/projects/getmee/Slider image 5.webp" },
  { id: 6, name: "Brand 6", image: "/projects/getmee/Slider image 6.webp" },
  { id: 7, name: "Brand 7", image: "/projects/getmee/Slider image 7.webp" },
  { id: 8, name: "Brand 8", image: "/projects/getmee/Slider image 8.webp" },
  { id: 9, name: "Brand 9", image: "/projects/getmee/Slider image 9.webp" },
  { id: 10, name: "Brand 10", image: "/projects/getmee/Slider image 10.webp" },
];

// Image native dimensions
const IMG_W = 918;
const IMG_H = 1682;

// Width we display at
const DISPLAY_W = 300;

// Each slide's rendered height at DISPLAY_W — this is the scroll unit
const SLIDE_H = Math.round((IMG_H / IMG_W) * DISPLAY_W); // ~549px

const repeated = [...apps, ...apps, ...apps, ...apps];

export default function WhitelabelSlotMachine({ brandColor }: WhitelabelSlotMachineProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const y = useMotionValue(0);

  const handleSpin = async () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const target = Math.floor(Math.random() * apps.length);
    const destination = -(3 * apps.length * SLIDE_H + target * SLIDE_H);

    await animate(y, destination, {
      duration: 2.5,
      ease: [0.25, 0.1, 0.25, 1],
    });

    // Reset to equivalent position in first repetition
    y.set(-(target * SLIDE_H));
    setIsSpinning(false);
  };

  return (
    <div className="my-16 sm:my-20" style={{ contain: 'layout' }}>
      {/* Window is exactly one SLIDE_H tall so one image fills it perfectly */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{ width: DISPLAY_W, height: SLIDE_H, contain: 'layout' }}
      >
        <motion.div style={{ y }}>
          {repeated.map((app, i) => (
            // Each slide: exact pixel width & height, no fill, no object-fit guesswork
            <div key={`${app.id}-${i}`} style={{ width: DISPLAY_W, height: SLIDE_H, flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
              <Image
                src={app.image}
                alt={app.name}
                width={DISPLAY_W}
                height={SLIDE_H}
                style={{
                  width: DISPLAY_W,
                  height: SLIDE_H,
                  display: 'block',
                  position: 'relative',
                  top: '-42px',
                  filter: isSpinning ? 'blur(2px)' : 'none',
                  opacity: isSpinning ? 0.7 : 1,
                  transition: 'filter 0.3s, opacity 0.3s',
                }}
              />
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-white/50 dark:from-gray-800/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white/50 dark:from-gray-800/50 to-transparent" />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <motion.button
          onClick={handleSpin}
          disabled={isSpinning}
          className="px-8 py-3 rounded-full font-semibold text-gray-800 dark:text-gray-200 bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/50 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSpinning ? "Shuffling..." : "Shuffle colourway"}
        </motion.button>
      </div>
    </div>
  );
}
