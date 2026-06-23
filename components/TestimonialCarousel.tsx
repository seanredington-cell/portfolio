"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 0,
    name: "Eoghan Hickey",
    role: "Design Lead",
    company: "CYGNVS & Workday",
    initials: "EH",
    color: "#1E3A8A",
    quote: "Seán is an exceptional product designer who is thoughtful, pragmatic, and clever. He takes feedback like a champ, cares about UX, and is able to get up to speed with technical conversations that could spin your head around.",
  },
  {
    id: 1,
    name: "Karen Reilly",
    role: "Director of Product",
    company: "CYGNVS & Workday",
    initials: "KR",
    color: "#3B82F6",
    quote: "Seán is a natural leader who cares deeply about the people he works with, our users and our customers. When I moved to CYGNVS, he was the first person I wanted to bring with me and I'm glad I did because his influence on the product was invaluable.",
  },
  {
    id: 2,
    name: "Robert Clarke",
    role: "Senior Designer",
    company: "Workday",
    initials: "RC",
    color: "#E65100",
    quote: "Seán is a multi-talented designer — as adept at honing in on the details of an interaction design problem as he is at polishing high fidelity designs. A champion of research-informed design, I can't stress enough how having Seán on your team is a major step towards getting your product moving in the right direction.",
  },
  {
    id: 3,
    name: "David Fox",
    role: "Engineering Lead",
    company: "CYGNVS",
    initials: "DF",
    color: "#0EA5E9",
    quote: "Seán was a pleasure to work with at CYGNVS where he solved complex problems with engineering in mind always. He was a great collaborator on a number of big initiatives, and always made sure to listen to the room for ideas — not just taking orders from senior stakeholders.",
  },
  {
    id: 4,
    name: "Balendran Thavarajah",
    role: "CEO",
    company: "Getmee",
    initials: "BT",
    color: "#E17033",
    quote: "Placeholder — testimonial coming soon.",
  },
];

const AUTO_ADVANCE_MS = 10000;

function CardInner({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="rounded-2xl px-6 py-5 border border-white/50 dark:border-gray-700/50 bg-white/90 dark:bg-gray-800/90 h-full flex flex-col"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.6)' }}
    >
      {/* Quote — vertically centred in remaining space */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-200 font-lora font-medium">{t.quote}</p>
      </div>

      {/* Person — always at the bottom */}
      <div className="flex items-center gap-3 mt-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: t.color }}>
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">{t.name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const prev = () => goTo(index - 1, -1);
  const next = () => goTo(index + 1, 1);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!isPaused) {
      timerRef.current = setTimeout(() => goTo(index + 1, 1), AUTO_ADVANCE_MS);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const delta = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartXRef.current = null;
    setIsPaused(false);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto px-4 sm:px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Container: all cards absolutely stacked, only tallest sets height via invisible in-flow card */}
      <div className="relative">
        {/* Single invisible in-flow card — the longest one — sets container height */}
        <div className="invisible pointer-events-none" aria-hidden="true">
          <CardInner t={testimonials[2]} />
        </div>

        {/* Active animated card — absolutely covers the container */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <CardInner t={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <button onClick={prev} className="w-7 h-7 rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-800/90 border border-white/50 dark:border-gray-700 shadow-sm hover:scale-110 transition-transform" aria-label="Previous">
          <svg className="w-3 h-3 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => goTo(i, i > index ? 1 : -1)}
              className="rounded-full transition-all duration-300"
              style={{ width: index === i ? 16 : 6, height: 6, background: index === i ? '#6B7280' : '#D1D5DB' }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-7 h-7 rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-800/90 border border-white/50 dark:border-gray-700 shadow-sm hover:scale-110 transition-transform" aria-label="Next">
          <svg className="w-3 h-3 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
