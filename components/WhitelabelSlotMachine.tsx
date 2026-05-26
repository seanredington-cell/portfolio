"use client";

import React, { useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import Image from "next/image";

interface WhitelabelSlotMachineProps {
  brandColor: string;
}

const apps = [
  { id: 1, name: "Brand 1", image: "/projects/getmee/Slider image 1.png" },
  { id: 2, name: "Brand 2", image: "/projects/getmee/Slider image 2.png" },
  { id: 3, name: "Brand 3", image: "/projects/getmee/Slider image 3.png" },
  { id: 4, name: "Brand 4", image: "/projects/getmee/Slider image 4.png" },
  { id: 5, name: "Brand 5", image: "/projects/getmee/Slider image 5.png" },
  { id: 6, name: "Brand 6", image: "/projects/getmee/Slider image 6.png" },
  { id: 7, name: "Brand 7", image: "/projects/getmee/Slider image 7.png" },
  { id: 8, name: "Brand 8", image: "/projects/getmee/Slider image 8.png" },
  { id: 9, name: "Brand 9", image: "/projects/getmee/Slider image 9.png" },
  { id: 10, name: "Brand 10", image: "/projects/getmee/Slider image 10.png" },
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
    <div className="my-16 sm:my-20">
      {/* Window is exactly one SLIDE_H tall so one image fills it perfectly */}
      <div
        className="relative mx-auto overflow-hidden rounded-3xl shadow-xl bg-white dark:bg-gray-800"
        style={{ width: DISPLAY_W, height: SLIDE_H }}
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
          className="px-8 py-3 rounded-full font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColor}dd)` }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSpinning ? "Shuffling..." : "Shuffle"}
        </motion.button>
      </div>
    </div>
  );
}
