"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
  {
    label: "Reading",
    title: "The Kite Runner",
    subtitle: "Khaled Hosseini",
    image: "/currently/kite-runner.jpg",
    emoji: "📖",
    aspect: "book",
  },
  {
    label: "Watching",
    title: "The Pitt",
    subtitle: "TV Series · 2025",
    image: "/currently/the-pitt.jpg",
    emoji: "📺",
    aspect: "book",
  },
  {
    label: "Listening to",
    title: "The Rewatchables",
    subtitle: "The Ringer",
    image: "/currently/rewatchables.jpg",
    emoji: "🎧",
    aspect: "square",
  },
  {
    label: "Learning",
    title: "Irish",
    subtitle: "As Gaeilge",
    image: "/currently/irish.png",
    emoji: "🗣️",
    aspect: "flag",
  },
];

export default function CurrentlyShelf({ fillWidth = false }: { fillWidth?: boolean }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = items[index];

  return (
    <div
      className="flex items-center gap-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Vertical dot indicators */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: 5,
              height: i === index ? 14 : 5,
              background: i === index ? '#6B7280' : '#D1D5DB',
            }}
            aria-label={`Go to ${items[i].label}`}
          />
        ))}
      </div>

      {/* Cover art */}
      <div className="relative flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text */}
      <div className="overflow-hidden flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-max"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 leading-none mb-0.5 whitespace-nowrap">
              {current.label}
            </p>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight whitespace-nowrap">
              {current.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight whitespace-nowrap">
              {current.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
