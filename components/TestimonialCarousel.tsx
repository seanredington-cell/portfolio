"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

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

const CARD_GAP = 16;
const AUTO_SCROLL_SPEED = 0.4; // px per frame

function getCardWidth() {
  if (typeof window === 'undefined') return 480;
  if (window.innerWidth < 640) return window.innerWidth - 48;
  if (window.innerWidth < 1024) return 360;
  return 480;
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const stepRef = useRef(CARD_GAP);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);

  const step = cardWidth + CARD_GAP;
  stepRef.current = step;

  // Duplicate testimonials for seamless loop
  const items = [...testimonials, ...testimonials, ...testimonials];
  const totalWidth = testimonials.length * step;

  // Set card width on mount and on resize
  useEffect(() => {
    setCardWidth(getCardWidth());
    const onResize = () => setCardWidth(getCardWidth());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const tick = useCallback(() => {
    if (!isPaused) {
      offsetRef.current += AUTO_SCROLL_SPEED;
      // Seamless loop: when we've scrolled one full set, reset
      if (offsetRef.current >= totalWidth) {
        offsetRef.current -= totalWidth;
      }
      setOffset(offsetRef.current);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [isPaused, totalWidth]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  const goTo = (dir: 1 | -1) => {
    offsetRef.current += dir * stepRef.current;
    if (offsetRef.current < 0) offsetRef.current += totalWidth;
    if (offsetRef.current >= totalWidth * 2) offsetRef.current -= totalWidth;
    setOffset(offsetRef.current);
    setActiveIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  // Touch handlers — hold to pause, swipe to scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartOffsetRef.current = offsetRef.current;
    isDraggingRef.current = false;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const delta = touchStartXRef.current - e.touches[0].clientX;
    if (Math.abs(delta) > 5) isDraggingRef.current = true;
    let next = touchStartOffsetRef.current + delta;
    // Keep within looping bounds
    if (next < 0) next += totalWidth;
    if (next >= totalWidth * 2) next -= totalWidth;
    offsetRef.current = next;
    setOffset(next);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDraggingRef.current) {
      // Snap to nearest card
      const nearest = Math.round(offsetRef.current / stepRef.current) * stepRef.current;
      offsetRef.current = nearest;
      setOffset(nearest);
    }
    touchStartXRef.current = null;
    isDraggingRef.current = false;
    setIsPaused(false);
  };

  return (
    <div className="w-full">
      {/* Track wrapper — clips the overflow */}
      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Fade edges — narrow on mobile, wide on desktop */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 lg:w-32 z-10 bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 lg:w-32 z-10 bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          style={{ transform: `translateX(-${offset}px)`, display: 'flex', alignItems: 'stretch', gap: `${CARD_GAP}px`, willChange: 'transform' }}
        >
          {items.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              style={{ width: cardWidth, flexShrink: 0 }}
              className="py-1 flex"
            >
              <div
                className="relative rounded-2xl px-4 pt-3 pb-3 backdrop-blur-md border border-white/50 dark:border-gray-700/50 shadow-lg bg-white/60 dark:bg-gray-800/70 flex flex-col w-full"
                style={{
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.6)',
                }}
              >

                <div className="relative z-10">
                  {/* Quote mark */}
                  <div className="text-2xl font-serif leading-none mb-1 opacity-20 dark:opacity-30 select-none"
                    style={{ color: t.color }}>"</div>

                  {/* Quote text */}
                  <p className="text-base leading-snug text-gray-700 dark:text-gray-200 mb-3 flex-1">
                    {t.quote}
                  </p>

                  {/* Person */}
                  <div className="flex items-center gap-3 mt-auto">
                    {/* Avatar */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 overflow-hidden"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">{t.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-3">
        <button
          onClick={() => goTo(-1)}
          className="w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border border-white/50 dark:border-gray-700 shadow-sm hover:scale-110 transition-transform"
          aria-label="Previous testimonial"
        >
          <svg className="w-3 h-3 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - (Math.floor(offsetRef.current / stepRef.current) % testimonials.length);
                offsetRef.current += diff * stepRef.current;
                setOffset(offsetRef.current);
                setActiveIndex(i);
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 16 : 6,
                height: 6,
                background: activeIndex === i ? '#6B7280' : '#D1D5DB',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(1)}
          className="w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border border-white/50 dark:border-gray-700 shadow-sm hover:scale-110 transition-transform"
          aria-label="Next testimonial"
        >
          <svg className="w-3 h-3 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
