"use client";

import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectData, heroData } from "@/data/projects";
import Callout from "@/components/Callout";
import { lightenForDark } from "@/lib/brandColor";
import GetmeeHeroShared from "@/components/GetmeeHero";
import CurrentlyShelf from "@/components/CurrentlyShelf";

function HeroImageComposition({ heroLayers, name }: { heroLayers: NonNullable<typeof heroData['heroLayers']>, name: string }) {
  return (
    <div className="relative w-full aspect-[4/5] flex items-center justify-center">
      <motion.div className="absolute" style={{ width: '55%', height: '55%', top: '20%', left: '22%' }}
        animate={{ y: [0, -10, 0], x: [0, 5, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <Image src={heroLayers.background} alt="Background" fill className="object-contain" />
      </motion.div>
      <motion.div className="absolute" style={{ width: '78%', height: '91%', top: '5%', left: '11%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
        animate={{ y: [0, -12, 0], rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
        <Image src={heroLayers.headshot} alt={name} fill className="object-contain" />
      </motion.div>
      <motion.div className="absolute" style={{ width: '42%', height: '42%', bottom: '12%', right: '10%', filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.2))' }}
        animate={{ y: [0, 8, 0], x: [0, -4, 0], rotate: [0, -2, 0, 2, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
        <Image src={heroLayers.writing} alt="Writing" fill className="object-contain" />
      </motion.div>
      <motion.div className="absolute" style={{ width: '20%', height: '20%', top: '22%', left: '4%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
        animate={{ y: [0, -8, 0], x: [0, 3, 0], rotate: [0, 4, 0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <Image src={heroLayers.logoWorkday} alt="Workday" fill className="object-contain" />
      </motion.div>
      <motion.div className="absolute" style={{ width: '20%', height: '20%', top: '22%', right: '18%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
        animate={{ y: [0, 10, 0], x: [0, -3, 0], rotate: [0, -3, 0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <Image src={heroLayers.logoMarlin} alt="Marlin" fill className="object-contain" />
      </motion.div>
      <motion.div className="absolute" style={{ width: '18%', height: '18%', top: '42%', left: '12%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
        animate={{ y: [0, 12, 0], x: [0, 4, 0], rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <Image src={heroLayers.logoCygnvs} alt="Cygnvs" fill className="object-contain" />
      </motion.div>
      <motion.div className="absolute" style={{ width: '18%', height: '18%', bottom: '14%', left: '20%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
        animate={{ y: [0, -10, 0], x: [0, 5, 0], rotate: [0, -4, 0, 4, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
        <Image src={heroLayers.logoGetmee} alt="Getmee" fill className="object-contain" />
      </motion.div>
    </div>
  );
}

function HeroTags({ tags }: { tags: NonNullable<typeof heroData['tags']> }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.role && (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {tags.role}
        </span>
      )}
      {tags.timeline && (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          {tags.timeline}
        </span>
      )}
      {tags.sector && (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {tags.sector}
        </span>
      )}
    </div>
  );
}

function HeroSection() {
  const p = heroData;
  return (
    <section className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-16 py-4 sm:py-12 lg:py-20 min-h-0 lg:min-h-screen">
      {/* Glow + card wrapper */}
      <div className="relative w-full max-w-6xl">
        {/* Glow — wraps the whole card, stronger at top-left and bottom-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-24px',
            borderRadius: '2rem',
            background: `
              radial-gradient(ellipse at 10% 15%, rgba(251,146,60,0.22) 0%, transparent 55%),
              radial-gradient(ellipse at 90% 85%, rgba(251,146,60,0.18) 0%, transparent 55%),
              radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)
            `,
            filter: 'blur(24px)',
          }}
        />
      {/* Glassmorphic card */}
      <div
        className="relative w-full rounded-3xl overflow-hidden border border-white/50 dark:border-gray-700/60"
        style={{
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 48px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)',
        }}
      >
        <div className="absolute inset-0 rounded-3xl bg-white/55 dark:bg-gray-900/80 pointer-events-none" />

        {/* Mobile layout */}
        <div className="relative z-10 lg:hidden flex flex-col gap-0">
          {/* Image */}
          <div className="w-full max-w-xs mx-auto px-8 pt-4">
            {p.heroLayers && <HeroImageComposition heroLayers={p.heroLayers} name={p.name} />}
          </div>
          {/* Text */}
          <div className="px-6 pb-6 space-y-3">
            <div className="flex items-center gap-3">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-400">{p.name}</p>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
                </span>
                <span className="text-sm text-orange-500 dark:text-orange-400 font-medium">Open to new opportunities</span>
              </div>
            </div>
            {p.tagline && (
              <p className="text-xl text-gray-900 dark:text-gray-100 font-bold leading-snug">
                {p.tagline.split('\n')[0]}
              </p>
            )}
            {p.tagline && p.tagline.split('\n')[1] && (
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{p.tagline.split('\n')[1]}</p>
            )}
            {p.tags && <HeroTags tags={p.tags} />}
            {/* Currently shelf */}
            <div className="w-fit">
              <div
                className="rounded-2xl px-3 py-3 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border border-white/70 dark:border-gray-700/60"
                style={{
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)',
                }}
              >
                <CurrentlyShelf />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout — 40/60 split */}
        <div className="relative z-10 hidden lg:flex items-center min-h-[480px]">
          {/* Text — 66% */}
          <div className="w-[66%] flex flex-col justify-center px-10 py-8 space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-400">{p.name}</p>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
                </span>
                <span className="text-sm text-orange-500 dark:text-orange-400 font-medium">Open to new opportunities</span>
              </div>
            </div>
            {p.tagline && (
              <>
                <p className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  {p.tagline.split('\n')[0]}
                </p>
                {p.tagline.split('\n')[1] && (
                  <p className="text-base xl:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {p.tagline.split('\n')[1]}
                  </p>
                )}
              </>
            )}
            {p.tags && <HeroTags tags={p.tags} />}
            {/* Currently shelf */}
            <div className="w-fit">
              <div
                className="rounded-2xl px-3 py-3 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border border-white/70 dark:border-gray-700/60"
                style={{
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)',
                }}
              >
                <CurrentlyShelf />
              </div>
            </div>
          </div>

          {/* Image — 34% */}
          <div className="w-[34%] flex items-center justify-center px-4 py-4">
            {p.heroLayers && (
              <div className="w-full">
                <HeroImageComposition heroLayers={p.heroLayers} name={p.name} />
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

/**
 * Projects Section Component
 *
 * Displays projects as full-width scroll-triggered cards.
 * Each card features:
 * - Hero image animating in from the left on an arc path
 * - Project name/description animating in from the right on an arc path
 * - Both elements converge near the center like two gears meeting
 * - Smooth, organic arc trajectories
 * - On mobile: cards stack vertically with simplified fade-in animations
 * - Scroll velocity effects and motion blur
 */
export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
  const [isCarouselHovered, setIsCarouselHovered] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => { setIsMounted(true); }, []);

  // Dark mode detection — updates reactively when theme is toggled
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    const root = document.documentElement;
    const check = () => setIsDark(root.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);


  /** Returns the brand colour appropriate for the current theme */
  const bc = (hex: string | undefined) => {
    const color = hex || "#1a1a1a";
    return isDark ? lightenForDark(color) : color;
  };

  const { scrollYProgress: containerProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track scroll velocity for motion blur effect
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Side nav fade in/out with the projects section
  const navOpacity = useTransform(containerProgress, [0, 0.04, 0.94, 1], [0, 1, 1, 0]);
  const navCounter = useTransform(containerProgress, (latest) => {
    const currentIndex = Math.round(latest * (projectData.length - 1));
    return `${currentIndex + 1} of ${projectData.length}`;
  });

  return (
    <>
    <HeroSection />
    <section ref={containerRef} data-projects-container className="relative" style={{ height: `${projectData.length * 85}vh` }}>
      {/* Fixed viewport - projects rotate through this */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Content container with padding and max-width */}
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-[200px] max-w-[1600px]">
          <div className="w-full h-full relative">
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                containerRef={containerRef}
                scrollVelocity={smoothVelocity}
                containerProgress={containerProgress}
                isDark={isDark}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator - bottom center, only visible on hero section */}
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
          style={{
            opacity: useTransform(scrollY, [0, 120, 200], [1, 0.5, 0]),
            pointerEvents: useTransform(scrollY, (value) => value < 200 ? 'auto' : 'none') as any,
          }}
        >
          <motion.button
            onClick={() => {
              const container = document.querySelector('[data-projects-container]');
              if (container) {
                const scrollHeight = container.scrollHeight - window.innerHeight;
                const projectDuration = 1 / projectData.length;
                const targetProgress = 0.5 * projectDuration; // First project
                const targetScroll = scrollHeight * targetProgress;

                window.scrollTo({
                  top: container.getBoundingClientRect().top + window.scrollY + targetScroll,
                  behavior: 'smooth'
                });
              }
            }}
            className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 shadow-2xl px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Scroll to see projects</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.button>
        </motion.div>

        {/* Carousel navigation - vertical on right side (portalled to body to escape stacking contexts) */}
        {isMounted && createPortal(
        <motion.div
          className="hidden lg:block fixed top-1/2 -translate-y-1/2 z-[9999]"
          style={{
            right: '12px',
            opacity: navOpacity,
          }}
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          <motion.div
            className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 shadow-2xl flex flex-col items-center gap-2 px-3 py-4"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              borderRadius: isCarouselHovered ? "24px" : "9999px",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Counter */}
            <motion.span
              className="text-xs text-gray-500 dark:text-gray-400 font-medium"
              animate={{
                opacity: isCarouselHovered ? 1 : 0.7,
              }}
            >
              {navCounter}
            </motion.span>

            {/* Project logos - vertical with overlap */}
            <div className="flex flex-col items-center relative">
              {projectData.map((project, index) => (
                <CarouselIndicator
                  key={project.id}
                  project={project}
                  index={index}
                  totalProjects={projectData.length}
                  containerProgress={containerProgress}
                  hoverIndex={hoverIndex}
                  setHoverIndex={setHoverIndex}
                  isCarouselHovered={isCarouselHovered}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
        , document.body)}
      </div>
    </section>
    </>
  );
}

/**
 * Carousel Indicator Component
 * Shows project logos with hover magnification and shape morphing
 */
function CarouselIndicator({
  project,
  index,
  totalProjects,
  containerProgress,
  hoverIndex,
  setHoverIndex,
  isCarouselHovered,
}: {
  project: typeof projectData[0];
  index: number;
  totalProjects: number;
  containerProgress: any;
  hoverIndex: number | null;
  setHoverIndex: (index: number | null) => void;
  isCarouselHovered: boolean;
}) {
  const isActive = useTransform(containerProgress, (value: number) => {
    const projectDuration = 1 / totalProjects;
    const projectStart = index * projectDuration;
    const projectEnd = (index + 1) * projectDuration;

    // Special case: first project is active at the very top
    if (index === 0 && value < projectDuration * 0.3) {
      return true;
    }

    // Active when in the middle 40% of this project's scroll range
    // This creates a dead zone between projects to prevent jumping
    const activeStart = projectStart + projectDuration * 0.3;
    const activeEnd = projectEnd - projectDuration * 0.3;

    return value >= activeStart && value <= activeEnd;
  });

  const handleClick = () => {
    // Calculate scroll position for this project
    const projectDuration = 1 / totalProjects;
    const targetProgress = (index + 0.5) * projectDuration;

    // Get container element and calculate scroll position
    const container = document.querySelector('[data-projects-container]');
    if (container) {
      const scrollHeight = container.scrollHeight - window.innerHeight;
      const targetScroll = scrollHeight * targetProgress;

      window.scrollTo({
        top: container.getBoundingClientRect().top + window.scrollY + targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const isActiveValue = useTransform(isActive, (active) => active);
  const [isCurrentlyActive, setIsCurrentlyActive] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = isActiveValue.on('change', (value) => {
      setIsCurrentlyActive(value);
    });
    return unsubscribe;
  }, [isActiveValue]);

  return (
    <div className="relative group">
      <motion.button
        className="relative cursor-pointer overflow-hidden w-8 h-8"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
        onClick={handleClick}
        animate={{
          borderRadius: isCarouselHovered ? "8px" : "50%",
          marginTop: index === 0 ? 0 : "8px",
          borderWidth: isCurrentlyActive ? "3px" : "2px",
          borderColor: isCurrentlyActive ? "rgba(99, 102, 241, 0.8)" : "rgba(255, 255, 255, 0.7)",
        }}
        transition={{
          borderRadius: { type: "spring", stiffness: 300, damping: 20 },
          marginTop: { type: "spring", stiffness: 300, damping: 20 },
          borderWidth: { duration: 0 },
          borderColor: { duration: 0 },
        }}
        style={{
          zIndex: hoverIndex === index ? 10 : totalProjects - index,
          boxShadow: isCurrentlyActive
            ? "0 4px 16px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255,255,255,0.4)"
            : "0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Color overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: project.logoColor || "#E5E7EB",
          }}
        />

        {/* Content */}
        <div className="relative w-full h-full flex items-center justify-center text-base overflow-hidden">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.name}
              fill
              className="object-contain"
            />
          ) : (
            project.logoPlaceholder || "📁"
          )}
        </div>
      </motion.button>

      {/* Tooltip */}
      {hoverIndex === index && isCarouselHovered && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="absolute right-full mr-3 top-0 whitespace-nowrap backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 border border-white/40 dark:border-gray-700 rounded-lg shadow-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 pointer-events-none"
          style={{ zIndex: 1000 }}
        >
          {project.name}

          {/* Triangle arrow pointing to the icon */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white/40" />
          <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-[1px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-white/90"
            style={{ backdropFilter: 'blur(12px)' }}
          />
        </motion.div>
      )}
    </div>
  );
}

/**
 * Individual Project Card Component
 *
 * Handles the arc animation logic for each project card.
 * Uses scroll position to drive animations along curved paths.
 */

function ProjectCard({
  project,
  index,
  containerRef,
  scrollVelocity,
  containerProgress,
  isDark,
}: {
  project: typeof projectData[0];
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
  scrollVelocity: any;
  containerProgress: any;
  isDark: boolean;
}) {
  const bc = (hex: string | undefined) => {
    const color = hex || "#1a1a1a";
    return isDark ? lightenForDark(color) : color;
  };

  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  // Map container progress to this specific project's window
  const scrollYProgress = useTransform(containerProgress, (value: number) => {
    const totalProjects = projectData.length;
    const projectDuration = 1 / totalProjects;
    const projectStart = index * projectDuration;
    const projectEnd = (index + 1) * projectDuration;

    if (value < projectStart) return 0;
    if (value > projectEnd) return 1;
    return (value - projectStart) / projectDuration;
  });

  // Add magnetic snap effect - items "stick" to center position with maximum stickiness
  const snappedProgress = useTransform(scrollYProgress, (value) => {
    // For first project, start locked at center (0.5), others animate in
    if (index === 0) {
      // First project: starts locked at 0.5 and only exits
      if (value <= 0.78) {
        // Ultra extended locked period: 0 to 0.78 stays at 0.5 (78% of scroll)
        return 0.5;
      } else if (value < 0.88) {
        // Gradual exit: 0.78 to 0.88 → 0.5 to 0.75
        const localProgress = (value - 0.78) / 0.1;
        return 0.5 + (localProgress * localProgress) * 0.25;
      } else {
        // Final exit phase: 0.88 to 1 → 0.75 to 1
        return 0.75 + ((value - 0.88) / 0.12) * 0.25;
      }
    }

    // Other projects: full animation with ultra extended sticky zone and quick entry/exit
    if (value < 0.15) {
      // Quick entry phase: 0 to 0.15 → 0 to 0.35
      return value * 2.33;
    } else if (value < 0.28) {
      // Magnetic pull approaching center: 0.15 to 0.28 → 0.35 to 0.48
      const localProgress = (value - 0.15) / 0.13;
      return 0.35 + (localProgress * localProgress) * 0.13;
    } else if (value < 0.32) {
      // Final snap into center: 0.28 to 0.32 → 0.48 to 0.5
      return 0.48 + ((value - 0.28) / 0.04) * 0.02;
    } else if (value <= 0.86) {
      // Ultra extended locked at center: 0.32 to 0.86 stays at 0.5 (54% of scroll!)
      return 0.5;
    } else if (value < 0.94) {
      // Gradual release and exit: 0.86 to 0.94 → 0.5 to 0.75
      const localProgress = (value - 0.86) / 0.08;
      return 0.5 + (localProgress * localProgress) * 0.25;
    } else {
      // Final exit phase: 0.94 to 1 → 0.75 to 1
      return 0.75 + ((value - 0.94) / 0.06) * 0.25;
    }
  });


  // Arc path calculations
  // For desktop: create smooth arc paths that feel like two gears meeting
  // For mobile: simplify to fade-in

  // Helper function to create smooth arc curve using easing
  // Creates a more organic, gear-like motion
  const arcEase = (t: number) => {
    // Custom easing function for smooth arc: starts slow, accelerates, then decelerates
    return t < 0.5
      ? 2 * t * t * (3 - 2 * t) // Ease in-out with slight acceleration
      : 1 - Math.pow(-2 * t + 2, 3) / 2; // Smooth deceleration
  };

  // Image: follows a smooth arc path on the left side
  // Not a circle, but an elongated arc that travels far vertically
  const imageX = useTransform(snappedProgress, (latest) => {
    // Smooth arc on left side - minimal horizontal movement
    // Starts far left, moves slightly right at middle, returns left
    const horizontalAmplitude = 150; // Small horizontal movement
    const baseX = -200; // Base position on left side

    // Use sine for smooth arc motion
    const arcProgress = Math.sin(latest * Math.PI); // 0 -> 1 -> 0
    return baseX + (horizontalAmplitude * arcProgress);
  });

  const imageY = useTransform(snappedProgress, (progress) => {
    // Vertical travel - all items pass through y=0 and never go below
    // At progress 0.5: y = 0 (horizontal centerline)
    // At progress 0: y = 400 (above center)
    // At progress 1: y = -400 (exiting above)
    return 400 - (progress * 800);
  });

  const imageOpacity = useTransform(scrollYProgress,
    index === 0 ? [0, 0.78, 0.92, 1] : [0, 0.08, 0.15, 0.82, 0.92, 1],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 1, 0.5, 0]
  );
  const imageScale = useTransform(scrollYProgress,
    index === 0 ? [0, 0.78, 0.92, 1] : [0, 0.08, 0.15, 0.88, 0.96, 1],
    index === 0 ? [1, 1, 1, 0.8] : [0.8, 1, 1, 1, 1, 0.8]
  );

  // Text: follows a smooth arc path on the right side
  // Not a circle, but an elongated arc that travels far vertically
  const textX = useTransform(snappedProgress, (latest) => {
    // Smooth arc on right side - minimal horizontal movement
    // Starts far right, moves slightly left at middle, returns right
    const horizontalAmplitude = 150; // Small horizontal movement
    const baseX = 200; // Base position on right side

    // Use sine for smooth arc motion (mirrored from left)
    const arcProgress = Math.sin(latest * Math.PI); // 0 -> 1 -> 0
    return baseX - (horizontalAmplitude * arcProgress); // Subtract to mirror
  });

  const textY = useTransform(snappedProgress, (progress) => {
    // Vertical travel - same as image, aligned horizontally
    // At progress 0.5: y = 0 (horizontal centerline)
    // At progress 0: y = 400 (above center)
    // At progress 1: y = -400 (exiting above)
    return 400 - (progress * 800);
  });

  const textOpacity = useTransform(scrollYProgress,
    index === 0 ? [0, 0.78, 0.92, 1] : [0, 0.08, 0.15, 0.82, 0.92, 1],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 1, 0.5, 0]
  );
  const textScale = useTransform(scrollYProgress,
    index === 0 ? [0, 0.78, 0.92, 1] : [0, 0.08, 0.15, 0.88, 0.96, 1],
    index === 0 ? [1, 1, 1, 0.8] : [0.8, 1, 1, 1, 1, 0.8]
  );

  // Rotation: no rotation while locked, only rotate during entry and exit
  const imageRotate = useTransform(scrollYProgress, (latest) => {
    const baseRotation = index === 0
      ? (latest <= 0.78 ? 0 : ((latest - 0.78) / 0.22) * 4)
      : (latest < 0.32 ? -4 + (latest / 0.32) * 4 : (latest <= 0.86 ? 0 : ((latest - 0.86) / 0.14) * 4));

    return baseRotation;
  });

  const textRotate = useTransform(scrollYProgress, (latest) => {
    const baseRotation = index === 0
      ? (latest <= 0.78 ? 0 : -((latest - 0.78) / 0.22) * 4)
      : (latest < 0.32 ? 4 - (latest / 0.32) * 4 : (latest <= 0.86 ? 0 : -((latest - 0.86) / 0.14) * 4));

    return baseRotation;
  });

  // First card (hero) should be visible from the start, others fade in/out
  const cardOpacity = useTransform(
    scrollYProgress,
    index === 0 ? [0, 0.78, 0.92, 1] : [0, 0.08, 0.15, 0.88, 0.96, 1],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 1, 1, 0]
  );

  const [currentOpacity, setCurrentOpacity] = React.useState(index === 0 ? 1 : 0);

  React.useEffect(() => {
    const unsubscribe = cardOpacity.on('change', (latest) => {
      setCurrentOpacity(latest);
    });
    return unsubscribe;
  }, [cardOpacity]);

  // Enhanced scale based on velocity for dramatic effect
  const velocityScale = useTransform(scrollVelocity, (velocity: number) => {
    const scale = 1 + Math.min(Math.abs(velocity) / 5000, 0.02);
    return scale;
  });

  // Mouse move handler for card tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className="absolute inset-0 w-full h-full flex items-center justify-center"
      style={{
        opacity: cardOpacity,
        pointerEvents: currentOpacity > 0.5 ? 'auto' : 'none',
        scale: velocityScale,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      {/* Mobile Layout: Stacked vertically with fade-in */}
      {!project.isHero ? (
        <a href={`/projects/${project.id}`} className="lg:hidden flex flex-col gap-4 w-full max-w-2xl px-4 cursor-pointer group relative">
          {/* Background orbs for mobile - behind everything */}
          {project.layeredImages && project.accentColor && (
            <>
              <motion.div
                className="absolute top-0 left-4 w-32 h-32 rounded-full pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle, rgba(${project.accentColor}, 0.08), transparent)`,
                }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-8 w-24 h-24 rounded-full pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle, rgba(${project.accentColor}, 0.06), transparent)`,
                }}
                animate={{
                  y: [0, 20, 0],
                  x: [0, -12, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/3 right-2 w-20 h-20 rounded-full pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle, rgba(${project.accentColor}, 0.05), transparent)`,
                }}
                animate={{
                  y: [0, -18, 0],
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </>
          )}

          <motion.div
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
            className="w-full max-w-md mx-auto aspect-video relative rounded-lg overflow-visible"
          >
            {project.layeredImages ? (
              <div className="w-full h-full relative flex items-center justify-center">
                {/* Decorative background elements */}
                {project.layeredImages && project.accentColor && (
                  <>
                    {project.id === 'workday-help' && (
                      <>
                        <motion.div
                          className="absolute top-10 left-8 w-16 h-16 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.15), transparent)`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute bottom-16 right-12 w-12 h-12 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.12), transparent)`,
                          }}
                          animate={{
                            y: [0, 15, 0],
                            x: [0, -8, 0],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        />
                        <motion.div
                          className="absolute top-1/3 right-16 w-8 h-8 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.1), transparent)`,
                          }}
                          animate={{
                            y: [0, -12, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        />
                      </>
                    )}
                    {project.id === 'bua' && (
                      <>
                        <motion.div
                          className="absolute top-12 right-10 w-20 h-20 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.12), transparent)`,
                          }}
                          animate={{
                            y: [0, 18, 0],
                            x: [0, -12, 0],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 6.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute bottom-12 left-10 w-14 h-14 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.15), transparent)`,
                          }}
                          animate={{
                            y: [0, -16, 0],
                            x: [0, 8, 0],
                            scale: [1, 1.12, 1],
                          }}
                          transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.7,
                          }}
                        />
                        <motion.div
                          className="absolute top-1/4 left-12 w-10 h-10 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.1), transparent)`,
                          }}
                          animate={{
                            y: [0, -14, 0],
                            scale: [1, 1.18, 1],
                          }}
                          transition={{
                            duration: 7.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.2,
                          }}
                        />
                      </>
                    )}
                    {project.id === 'registration-crisis' && (
                      <>
                        <motion.div
                          className="absolute top-8 left-12 w-18 h-18 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.14), transparent)`,
                          }}
                          animate={{
                            y: [0, -22, 0],
                            x: [0, 6, 0],
                            scale: [1, 1.14, 1],
                          }}
                          transition={{
                            duration: 6.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute bottom-14 right-8 w-16 h-16 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.11), transparent)`,
                          }}
                          animate={{
                            y: [0, 14, 0],
                            x: [0, -10, 0],
                            scale: [1, 1.13, 1],
                          }}
                          transition={{
                            duration: 5.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4,
                          }}
                        />
                        <motion.div
                          className="absolute top-2/3 right-14 w-12 h-12 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.09), transparent)`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            x: [0, 7, 0],
                            scale: [1, 1.16, 1],
                          }}
                          transition={{
                            duration: 7.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.9,
                          }}
                        />
                      </>
                    )}
                    {project.id === 'regulatory-reporting' && (
                      <>
                        <motion.div
                          className="absolute top-16 left-6 w-14 h-14 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.13), transparent)`,
                          }}
                          animate={{
                            y: [0, -18, 0],
                            x: [0, 9, 0],
                            scale: [1, 1.11, 1],
                          }}
                          transition={{
                            duration: 6.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute bottom-10 right-10 w-20 h-20 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.16), transparent)`,
                          }}
                          animate={{
                            y: [0, 16, 0],
                            x: [0, -7, 0],
                            scale: [1, 1.14, 1],
                          }}
                          transition={{
                            duration: 5.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6,
                          }}
                        />
                        <motion.div
                          className="absolute top-1/2 right-6 w-11 h-11 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${project.accentColor}, 0.1), transparent)`,
                          }}
                          animate={{
                            y: [0, -13, 0],
                            scale: [1, 1.19, 1],
                          }}
                          transition={{
                            duration: 7.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.4,
                          }}
                        />
                      </>
                    )}
                  </>
                )}

                {/* Background layer - full width, positioned behind (skip for floatingCards which renders its own) */}
                {!project.layeredImages.floatingCards && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <div className="relative w-[115%] aspect-video">
                    <Image
                      src={project.layeredImages.background}
                      alt={`${project.name} background`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                )}

                {/* Floating Icons */}
                {project.layeredImages.floatingIcons && project.layeredImages.floatingIcons.map((icon: any, iconIndex: number) => {
                  const getPosition = (position: string) => {
                    switch (position) {
                      case 'top-left':
                        return { top: '20%', left: '2%' };
                      case 'top-right':
                        return { top: '28%', right: '-3%' };
                      case 'middle-left':
                        return { top: '60%', left: '-5%' };
                      case 'middle-right':
                        return { top: '55%', right: '-4%' };
                      case 'bottom-center':
                        return { bottom: '20%', left: '48%' };
                      case 'bottom-left':
                        return { bottom: '15%', left: '8%' };
                      default:
                        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
                    }
                  };

                  return (
                    <motion.div
                      key={iconIndex}
                      className="absolute w-8 h-8 sm:w-10 sm:h-10"
                      style={getPosition(icon.position)}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0],
                      }}
                      transition={{
                        opacity: { duration: 0.5, delay: 0.7 + iconIndex * 0.1 },
                        scale: { duration: 0.5, delay: 0.7 + iconIndex * 0.1 },
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: iconIndex * 0.4,
                        }
                      }}
                    >
                      <Image
                        src={icon.src}
                        alt={`Icon ${iconIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  );
                })}

                {/* Floating Devices (for Workday-style multi-device layouts) */}
                {project.layeredImages.floatingDevices && project.layeredImages.floatingDevices.map((device: any, deviceIndex: number) => {
                  const getDevicePosition = (position: string) => {
                    switch (position) {
                      case 'left':
                        return { top: '25%', left: '-5%', transform: 'translateY(-50%)' };
                      case 'right':
                        return { top: '25%', right: '-5%', transform: 'translateY(-50%)' };
                      default:
                        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
                    }
                  };

                  return (
                    <motion.div
                      key={`mobile-device-${deviceIndex}`}
                      className="absolute w-[22%] aspect-[9/19]"
                      style={{
                        ...getDevicePosition(device.position),
                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.25))'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0],
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 0.7 + deviceIndex * 0.15 },
                        scale: { duration: 0.6, delay: 0.7 + deviceIndex * 0.15 },
                        y: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: deviceIndex * 0.5,
                        }
                      }}
                    >
                      <Image
                        src={device.src}
                        alt={`Device ${deviceIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  );
                })}

                {/* Foreground layer */}
                {project.layeredImages.foreground && !project.layeredImages.floatingCards && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative w-[65%] aspect-video" style={{ transform: 'translateZ(20px)', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}>
                      <Image src={project.layeredImages.foreground} alt={project.name} fill className="object-contain" />
                    </div>
                  </motion.div>
                )}

                {/* Getmee hero — mobile */}
                {project.id === 'getmee' && project.layeredImages.floatingCards && (
                  <GetmeeHeroShared
                    background={project.layeredImages.background}
                    foreground={project.layeredImages.foreground!}
                    cards={project.layeredImages.floatingCards}
                    name={project.name}
                  />
                )}

              </div>
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-accent-primary/30 text-sm">
                {project.imagePlaceholder}
              </div>
            )}
          </motion.div>

          <motion.div
            style={{
              opacity: textOpacity,
              scale: textScale,
            }}
            className="space-y-4"
          >
            {/* Logo + name header */}
            <div className="flex items-center gap-2.5">
              {(project.logo || project.logoPlaceholder) && (
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center text-sm shadow-sm overflow-hidden relative flex-shrink-0"
                  style={{ backgroundColor: project.logoColor || "#E5E7EB" }}
                >
                  {project.logo ? (
                    <Image src={project.logo} alt={project.name} fill className="object-contain" />
                  ) : (
                    project.logoPlaceholder
                  )}
                </div>
              )}
              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="group-hover:underline" style={{ color: bc(project.logoColor) }}>{project.name}</span>
              </h3>
            </div>

            {/* Tags */}
            {project.tags && (
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.role && (
                  <span
                    className="text-xs sm:text-sm font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                    style={{
                      color: bc(project.logoColor),
                      backgroundColor: `${bc(project.logoColor)}1a`,
                    }}
                  >
                    {project.tags.role}
                  </span>
                )}
                {project.tags.timeline && (
                  <span
                    className="text-xs sm:text-sm font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                    style={{
                      color: bc(project.logoColor),
                      backgroundColor: `${bc(project.logoColor)}1a`,
                    }}
                  >
                    {project.tags.timeline}
                  </span>
                )}
                {project.tags.sector && (
                  <span
                    className="text-xs sm:text-sm font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                    style={{
                      color: bc(project.logoColor),
                      backgroundColor: `${bc(project.logoColor)}1a`,
                    }}
                  >
                    {project.tags.sector}
                  </span>
                )}
              </div>
            )}

            <Callout>
              {project.description}
            </Callout>
            {project.readTime && (
              <div className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-400">{project.readTime} min read</span>
              </div>
            )}
            <div className="w-full flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:bg-white/20 dark:group-hover:bg-gray-800/50 transition-all duration-300 text-base">
              <span>Read more</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </motion.div>
        </a>
      ) : (
        <div className="lg:hidden flex flex-col gap-4 w-full max-w-2xl px-4">
          <motion.div
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
            className="w-full max-w-[224px] mx-auto aspect-square relative rounded-lg overflow-visible"
          >
            {project.heroLayers ? (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background color blob */}
                <motion.div
                  className="absolute"
                  style={{ width: '55%', height: '55%', top: '20%', left: '22%' }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={project.heroLayers.background}
                    alt="Background"
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Headshot - centered, overlapping with background */}
                <motion.div
                  className="absolute"
                  style={{ width: '78%', height: '91%', top: '5%', left: '11%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 1, 0, -1, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={project.heroLayers.headshot}
                    alt={project.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Writing/sticky notes - overlapping headshot bottom right */}
                <motion.div
                  className="absolute"
                  style={{ width: '42%', height: '42%', bottom: '12%', right: '10%', filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.2))' }}
                  animate={{
                    y: [0, 8, 0],
                    x: [0, -4, 0],
                    rotate: [0, -2, 0, 2, 0],
                  }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={project.heroLayers.writing}
                    alt="Writing"
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Workday logo - top left, overlapping behind headshot */}
                <motion.div
                  className="absolute"
                  style={{ width: '20%', height: '20%', top: '22%', left: '4%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 3, 0],
                    rotate: [0, 4, 0, -4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={project.heroLayers.logoWorkday}
                    alt="Workday"
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Marlin logo - top right, positioned near yellow blob */}
                <motion.div
                  className="absolute"
                  style={{ width: '20%', height: '20%', top: '22%', right: '18%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
                  animate={{
                    y: [0, 10, 0],
                    x: [0, -3, 0],
                    rotate: [0, -3, 0, 3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={project.heroLayers.logoMarlin}
                    alt="Marlin"
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Cygnvs logo - middle left, overlapping headshot */}
                <motion.div
                  className="absolute"
                  style={{ width: '18%', height: '18%', top: '42%', left: '12%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
                  animate={{
                    y: [0, 12, 0],
                    x: [0, 4, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={project.heroLayers.logoCygnvs}
                    alt="Cygnvs"
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Getmee logo - bottom center, overlapping headshot and writing */}
                <motion.div
                  className="absolute"
                  style={{ width: '18%', height: '18%', bottom: '14%', left: '20%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    rotate: [0, -4, 0, 4, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={project.heroLayers.logoGetmee}
                    alt="Getmee"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-accent-primary/30 text-sm">
                {project.imagePlaceholder}
              </div>
            )}
          </motion.div>

          <motion.div
            style={{
              opacity: textOpacity,
              scale: textScale,
            }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                {project.name}
              </h3>
            </div>
            {project.tagline && (
              <p className="text-lg sm:text-lg text-gray-900 dark:text-gray-100 font-semibold whitespace-pre-line">
                {project.tagline}
              </p>
            )}
            {/* Tags */}
            {project.tags && (
              <div className="flex flex-wrap items-center gap-2">
                {project.isHero ? (
                  <>
                    {/* Hero tags with icons and grey styling */}
                    {project.tags.role && (
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.tags.role}
                      </span>
                    )}
                    {project.tags.timeline && (
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {project.tags.timeline}
                      </span>
                    )}
                    {project.tags.sector && (
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {project.tags.sector}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {/* Regular project tags with brand colors, no icons */}
                    {project.tags.role && (
                      <span
                        className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                        style={{
                          color: bc(project.logoColor),
                          backgroundColor: `${bc(project.logoColor)}1a`,
                        }}
                      >
                        {project.tags.role}
                      </span>
                    )}
                    {project.tags.timeline && (
                      <span
                        className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                        style={{
                          color: bc(project.logoColor),
                          backgroundColor: `${bc(project.logoColor)}1a`,
                        }}
                      >
                        {project.tags.timeline}
                      </span>
                    )}
                    {project.tags.sector && (
                      <span
                        className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                        style={{
                          color: bc(project.logoColor),
                          backgroundColor: `${bc(project.logoColor)}1a`,
                        }}
                      >
                        {project.tags.sector}
                      </span>
                    )}
                  </>
                )}
              </div>
            )}
            {/* Availability */}
            {project.isHero && (
              <div className="inline-flex items-center gap-2">
                <svg className="w-2 h-2 text-orange-500 dark:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" className="animate-pulse" />
                </svg>
                <span className="text-sm font-normal text-orange-600 dark:text-orange-400">Open to new opportunities</span>
              </div>
            )}

          </motion.div>
        </div>
      )}

      {/* Desktop Layout: Side-by-side with arc animations */}
      <div className="hidden lg:flex items-center justify-center gap-4 w-full relative">
        {/* Background orbs for desktop - behind everything */}
        {!project.isHero && project.layeredImages && project.accentColor && (
          <>
            <motion.div
              className="absolute top-10 left-20 w-40 h-40 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(${project.accentColor}, 0.06), transparent)`,
                opacity: useTransform(scrollYProgress,
                  [0, 0.2, 0.5, 0.75, 1],
                  [0, 1, 1, 1, 0]
                ),
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-16 left-32 w-32 h-32 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(${project.accentColor}, 0.05), transparent)`,
                opacity: useTransform(scrollYProgress,
                  [0, 0.2, 0.5, 0.75, 1],
                  [0, 1, 1, 1, 0]
                ),
              }}
              animate={{
                y: [0, 25, 0],
                x: [0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
            />
            <motion.div
              className="absolute top-1/3 left-10 w-28 h-28 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(${project.accentColor}, 0.04), transparent)`,
                opacity: useTransform(scrollYProgress,
                  [0, 0.2, 0.5, 0.75, 1],
                  [0, 1, 1, 1, 0]
                ),
              }}
              animate={{
                y: [0, -22, 0],
                scale: [1, 1.35, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />
            <motion.div
              className="absolute top-20 right-32 w-36 h-36 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(${project.accentColor}, 0.05), transparent)`,
                opacity: useTransform(scrollYProgress,
                  [0, 0.2, 0.5, 0.75, 1],
                  [0, 1, 1, 1, 0]
                ),
              }}
              animate={{
                y: [0, 28, 0],
                x: [0, 18, 0],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
            <motion.div
              className="absolute bottom-24 right-16 w-30 h-30 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(${project.accentColor}, 0.07), transparent)`,
                opacity: useTransform(scrollYProgress,
                  [0, 0.2, 0.5, 0.75, 1],
                  [0, 1, 1, 1, 0]
                ),
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, -10, 0],
                scale: [1, 1.18, 1],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </>
        )}

        {/* Hero orbs - more subtle and elegant */}
        {project.isHero && (
          <>
            <motion.div
              className="absolute top-16 left-24 w-48 h-48 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent)`,
              }}
              animate={{
                y: [0, -35, 0],
                x: [0, 25, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-40 w-40 h-40 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(147, 197, 253, 0.1), transparent)`,
              }}
              animate={{
                y: [0, 30, 0],
                x: [0, -20, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
            <motion.div
              className="absolute top-1/3 left-16 w-36 h-36 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent)`,
              }}
              animate={{
                y: [0, -28, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <motion.div
              className="absolute top-24 right-36 w-44 h-44 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(96, 165, 250, 0.11), transparent)`,
              }}
              animate={{
                y: [0, 32, 0],
                x: [0, 22, 0],
                scale: [1, 1.35, 1],
              }}
              transition={{
                duration: 9.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute bottom-28 right-20 w-38 h-38 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(37, 99, 235, 0.13), transparent)`,
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, -15, 0],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-48 w-32 h-32 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.09), transparent)`,
              }}
              animate={{
                y: [0, 20, 0],
                x: [0, 12, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 10.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.2,
              }}
            />
          </>
        )}

        {project.isHero ? (
          <>
            {/* Hero layout: Text on left, Image on right */}
            <motion.div
              style={{
                x: imageX,
                y: imageY,
                opacity: imageOpacity,
                scale: imageScale,
                rotate: imageRotate,
              }}
              className="flex-1 min-w-0 space-y-5"
            >
              <div>
                <h3 className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {project.name}
                </h3>
              </div>
              {project.tagline && (
                <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 font-semibold whitespace-pre-line">
                  {project.tagline}
                </p>
              )}
              {/* Tags */}
              {project.tags && (
                <div className="flex flex-wrap items-center gap-2">
                  {project.isHero ? (
                    <>
                      {/* Hero tags with icons and grey styling */}
                      {project.tags.role && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.tags.role}
                        </span>
                      )}
                      {project.tags.timeline && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {project.tags.timeline}
                        </span>
                      )}
                      {project.tags.sector && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {project.tags.sector}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {/* Regular project tags with brand colors, no icons */}
                      {project.tags.role && (
                        <span
                          className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                          style={{
                            color: bc(project.logoColor),
                            backgroundColor: `${bc(project.logoColor)}1a`,
                          }}
                        >
                          {project.tags.role}
                        </span>
                      )}
                      {project.tags.timeline && (
                        <span
                          className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                          style={{
                            color: bc(project.logoColor),
                            backgroundColor: `${bc(project.logoColor)}1a`,
                          }}
                        >
                          {project.tags.timeline}
                        </span>
                      )}
                      {project.tags.sector && (
                        <span
                          className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                          style={{
                            color: bc(project.logoColor),
                            backgroundColor: `${bc(project.logoColor)}1a`,
                          }}
                        >
                          {project.tags.sector}
                        </span>
                      )}
                    </>
                  )}
                </div>
              )}
              {/* Availability */}
              {project.isHero && (
                <div className="inline-flex items-center gap-2">
                  <svg className="w-2 h-2 text-orange-500 dark:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" className="animate-pulse" />
                  </svg>
                  <span className="text-sm font-normal text-orange-600 dark:text-orange-400">Open to new opportunities</span>
                </div>
              )}

            </motion.div>

            <motion.div
              style={{
                x: textX,
                y: textY,
                opacity: textOpacity,
                scale: textScale,
                rotate: textRotate,
                rotateY: isHovered ? mousePosition.x * 10 : 0,
                rotateX: isHovered ? -mousePosition.y * 10 : 0,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex-1 min-w-0 flex items-center justify-center"
            >
              {project.heroLayers ? (
                <div className="relative w-[80%] aspect-[4/5] flex items-center justify-center">
                  {/* Background color blob */}
                  <motion.div
                    className="absolute"
                    style={{ width: '55%', height: '55%', top: '20%', left: '22%' }}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={project.heroLayers.background}
                      alt="Background"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Headshot - centered, overlapping with background */}
                  <motion.div
                    className="absolute"
                    style={{ width: '78%', height: '91%', top: '5%', left: '11%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 1, 0, -1, 0],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={project.heroLayers.headshot}
                      alt={project.name}
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Writing/sticky notes - overlapping headshot bottom right */}
                  <motion.div
                    className="absolute"
                    style={{ width: '42%', height: '42%', bottom: '12%', right: '10%', filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.2))' }}
                    animate={{
                      y: [0, 8, 0],
                      x: [0, -4, 0],
                      rotate: [0, -2, 0, 2, 0],
                    }}
                    transition={{
                      duration: 6.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={project.heroLayers.writing}
                      alt="Writing"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Workday logo - top left, overlapping behind headshot */}
                  <motion.div
                    className="absolute"
                    style={{ width: '20%', height: '20%', top: '22%', left: '4%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
                    animate={{
                      y: [0, -8, 0],
                      x: [0, 3, 0],
                      rotate: [0, 4, 0, -4, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={project.heroLayers.logoWorkday}
                      alt="Workday"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Marlin logo - top right, positioned near yellow blob */}
                  <motion.div
                    className="absolute"
                    style={{ width: '20%', height: '20%', top: '22%', right: '18%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
                    animate={{
                      y: [0, 10, 0],
                      x: [0, -3, 0],
                      rotate: [0, -3, 0, 3, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={project.heroLayers.logoMarlin}
                      alt="Marlin"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Cygnvs logo - middle left, overlapping headshot */}
                  <motion.div
                    className="absolute"
                    style={{ width: '18%', height: '18%', top: '42%', left: '12%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
                    animate={{
                      y: [0, 12, 0],
                      x: [0, 4, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={project.heroLayers.logoCygnvs}
                      alt="Cygnvs"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Getmee logo - bottom center, overlapping headshot and writing */}
                  <motion.div
                    className="absolute"
                    style={{ width: '18%', height: '18%', bottom: '14%', left: '20%', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      rotate: [0, -4, 0, 4, 0],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={project.heroLayers.logoGetmee}
                      alt="Getmee"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              ) : project.image ? (
                <div className="relative w-full aspect-[4/5]" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}>
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-accent-primary/30 text-sm">
                  {project.imagePlaceholder}
                </div>
              )}
            </motion.div>
          </>
        ) : (
          <>
            {/* Project layout: Text on left, Image on right */}
            <motion.div
              style={{
                x: imageX,
                y: imageY,
                opacity: textOpacity,
                scale: textScale,
                rotate: imageRotate,
              }}
              className="flex-[1.2] min-w-0 space-y-5"
            >
              {/* Eyebrow: logo + role label */}
              <div className="flex items-center gap-2">
                {(project.logo || project.logoPlaceholder) && (
                  <div
                    className="w-5 h-5 rounded-sm flex items-center justify-center text-xs shadow-sm overflow-hidden relative flex-shrink-0"
                    style={{ backgroundColor: project.logoColor || "#E5E7EB" }}
                  >
                    {project.logo ? (
                      <Image src={project.logo} alt={project.name} fill className="object-contain" />
                    ) : (
                      project.logoPlaceholder
                    )}
                  </div>
                )}
                <p className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
                  {project.company ?? project.name}
                </p>
              </div>
              {/* Project title */}
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: bc(project.logoColor) }}>
                {project.name}
              </h3>

              {/* Tags */}
              {project.tags && (
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.role && (
                    <span
                      className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                      style={{
                        color: bc(project.logoColor),
                        backgroundColor: `${bc(project.logoColor)}1a`,
                      }}
                    >
                      {project.tags.role}
                    </span>
                  )}
                  {project.tags.timeline && (
                    <span
                      className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                      style={{
                        color: bc(project.logoColor),
                        backgroundColor: `${bc(project.logoColor)}1a`,
                      }}
                    >
                      {project.tags.timeline}
                    </span>
                  )}
                  {project.tags.sector && (
                    <span
                      className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm"
                      style={{
                        color: bc(project.logoColor),
                        backgroundColor: `${bc(project.logoColor)}1a`,
                      }}
                    >
                      {project.tags.sector}
                    </span>
                  )}
                </div>
              )}

              <Callout>
                {project.description}
              </Callout>

              {project.readTime && (
                <div className="inline-flex items-center gap-1.5 mt-1">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
                  </svg>
                  <span className="text-sm text-gray-400 dark:text-gray-400">{project.readTime} min read</span>
                </div>
              )}

              {/* Visible button (non-interactive, just visual) */}
              <div className="relative z-20 pointer-events-none mt-5">
                <motion.div
                  className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-6 py-2.5 rounded-full text-sm"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                  }}
                  animate={isHovered ? {
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                  } : {
                    scale: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Read more</span>
                  <motion.svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={isHovered ? { x: 4 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              style={{
                x: textX,
                y: textY,
                opacity: imageOpacity,
                scale: imageScale,
                rotate: textRotate,
                rotateY: isHovered ? mousePosition.x * 8 : 0,
                rotateX: isHovered ? -mousePosition.y * 8 : 0,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex-1 min-w-0 aspect-[4/5] relative rounded-lg overflow-visible"
            >
              {project.layeredImages ? (
                <div className="w-full h-full relative flex items-center justify-center">
                  {/* Decorative background elements */}
                  {project.layeredImages && project.accentColor && (
                    <>
                      {project.id === 'workday-help' && (
                        <>
                          <motion.div
                            className="absolute top-12 left-10 w-20 h-20 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.15), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, -20, 0],
                              x: [0, 10, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute bottom-20 right-14 w-16 h-16 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.12), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, 15, 0],
                              x: [0, -8, 0],
                              scale: [1, 1.15, 1],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          />
                          <motion.div
                            className="absolute top-1/3 right-20 w-12 h-12 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.1), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, -12, 0],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 7,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1,
                            }}
                          />
                          <motion.div
                            className="absolute top-1/4 left-16 w-10 h-10 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.08), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, 10, 0],
                              x: [0, 5, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 6.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.5,
                            }}
                          />
                        </>
                      )}
                      {project.id === 'bua' && (
                        <>
                          <motion.div
                            className="absolute top-14 right-12 w-24 h-24 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.12), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, 18, 0],
                              x: [0, -12, 0],
                              scale: [1, 1.15, 1],
                            }}
                            transition={{
                              duration: 6.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute bottom-16 left-12 w-18 h-18 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.15), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, -16, 0],
                              x: [0, 8, 0],
                              scale: [1, 1.12, 1],
                            }}
                            transition={{
                              duration: 5.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.7,
                            }}
                          />
                          <motion.div
                            className="absolute top-1/4 left-14 w-13 h-13 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.1), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, -14, 0],
                              scale: [1, 1.18, 1],
                            }}
                            transition={{
                              duration: 7.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.2,
                            }}
                          />
                        </>
                      )}
                      {project.id === 'registration-crisis' && (
                        <>
                          <motion.div
                            className="absolute top-10 left-14 w-22 h-22 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.14), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, -22, 0],
                              x: [0, 6, 0],
                              scale: [1, 1.14, 1],
                            }}
                            transition={{
                              duration: 6.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute bottom-18 right-10 w-20 h-20 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.11), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, 14, 0],
                              x: [0, -10, 0],
                              scale: [1, 1.13, 1],
                            }}
                            transition={{
                              duration: 5.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.4,
                            }}
                          />
                          <motion.div
                            className="absolute top-2/3 right-16 w-14 h-14 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.09), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, -10, 0],
                              x: [0, 7, 0],
                              scale: [1, 1.16, 1],
                            }}
                            transition={{
                              duration: 7.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.9,
                            }}
                          />
                        </>
                      )}
                      {project.id === 'regulatory-reporting' && (
                        <>
                          <motion.div
                            className="absolute top-18 left-8 w-17 h-17 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.13), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, -18, 0],
                              x: [0, 9, 0],
                              scale: [1, 1.11, 1],
                            }}
                            transition={{
                              duration: 6.3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute bottom-12 right-12 w-24 h-24 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.16), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, 16, 0],
                              x: [0, -7, 0],
                              scale: [1, 1.14, 1],
                            }}
                            transition={{
                              duration: 5.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.6,
                            }}
                          />
                          <motion.div
                            className="absolute top-1/2 right-8 w-13 h-13 rounded-full"
                            style={{
                              background: `radial-gradient(circle, rgba(${project.accentColor}, 0.1), transparent)`,
                              opacity: useTransform(scrollYProgress,
                                [0, 0.2, 0.5, 0.75, 1],
                                [0, 1, 1, 1, 0]
                              ),
                            }}
                            animate={{
                              y: [0, -13, 0],
                              scale: [1, 1.19, 1],
                            }}
                            transition={{
                              duration: 7.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.4,
                            }}
                          />
                        </>
                      )}
                    </>
                  )}

                  {/* Background layer - full width, positioned behind */}
                  {!project.layeredImages.floatingCards && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      opacity: useTransform(scrollYProgress,
                        [0, 0.2, 0.5, 0.75, 1],
                        [0, 1, 1, 1, 0]
                      ),
                      scale: useTransform(scrollYProgress,
                        [0, 0.2, 0.5, 0.75, 1],
                        [0.85, 1, 1, 1, 0.85]
                      ),
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  >
                    <div className="relative w-[115%] aspect-[4/5]">
                      <Image
                        src={project.layeredImages.background}
                        alt={`${project.name} background`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                  )}

                  {/* Floating Icons */}
                  {project.layeredImages.floatingIcons && project.layeredImages.floatingIcons.map((icon: any, iconIndex: number) => {
                    const getPosition = (position: string) => {
                      switch (position) {
                        case 'top-left':
                          return { top: '20%', left: '2%' };
                        case 'top-right':
                          return { top: '28%', right: '-3%' };
                        case 'middle-left':
                          return { top: '60%', left: '-5%' };
                        case 'middle-right':
                          return { top: '55%', right: '-4%' };
                        case 'bottom-center':
                          return { bottom: '20%', left: '48%' };
                        case 'bottom-left':
                          return { bottom: '15%', left: '8%' };
                        default:
                          return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
                      }
                    };

                    return (
                      <motion.div
                        key={iconIndex}
                        className="absolute w-12 h-12 lg:w-14 lg:h-14"
                        style={{
                          ...getPosition(icon.position),
                          opacity: useTransform(scrollYProgress,
                            [0, 0.2, 0.5, 0.75, 1],
                            [0, 1, 1, 1, 0]
                          ),
                        }}
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: iconIndex * 0.4,
                          }
                        }}
                      >
                        <Image
                          src={icon.src}
                          alt={`Icon ${iconIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    );
                  })}

                  {/* Floating Devices (for Workday-style multi-device layouts) */}
                  {project.layeredImages.floatingDevices && project.layeredImages.floatingDevices.map((device: any, deviceIndex: number) => {
                    const getDevicePosition = (position: string) => {
                      switch (position) {
                        case 'left':
                          return { top: '40%', left: '-5%', transform: 'translateY(-50%)' };
                        case 'right':
                          return { top: '40%', right: '-5%', transform: 'translateY(-50%)' };
                        default:
                          return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
                      }
                    };

                    return (
                      <motion.div
                        key={`desktop-device-${deviceIndex}`}
                        className="absolute w-[26%] aspect-[9/19]"
                        style={{
                          ...getDevicePosition(device.position),
                          filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.25))',
                          opacity: useTransform(scrollYProgress,
                            [0, 0.2, 0.5, 0.75, 1],
                            [0, 1, 1, 1, 0]
                          ),
                        }}
                        animate={{
                          y: [0, -15, 0],
                        }}
                        transition={{
                          y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: deviceIndex * 0.5,
                          }
                        }}
                      >
                        <Image
                          src={device.src}
                          alt={`Device ${deviceIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    );
                  })}

                  {/* Foreground layer */}
                  {project.layeredImages.foreground && !project.layeredImages.floatingCards && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          opacity: useTransform(scrollYProgress, [0, 0.1, 0.25, 0.5, 0.8, 0.95, 1], [0, 0, 1, 1, 1, 1, 0]),
                          scale: useTransform(scrollYProgress, [0, 0.1, 0.25, 0.5, 0.8, 0.95, 1], [0.7, 0.7, 1, 1, 1, 1, 0.7]),
                        }}
                        animate={{ y: [0, 10, 0], x: [0, -6, 0], rotate: [0, -1.5, 0, 1.5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="relative w-[65%] aspect-[4/5]" style={{ transform: 'translateZ(20px)', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}>
                          <Image src={project.layeredImages.foreground} alt={project.name} fill className="object-contain" />
                        </div>
                      </motion.div>
                  )}

                  {/* Getmee floating cards hero */}
                  {project.id === 'getmee' && project.layeredImages.floatingCards && (
                    <GetmeeHeroShared
                      background={project.layeredImages.background}
                      foreground={project.layeredImages.foreground!}
                      cards={project.layeredImages.floatingCards}
                      name={project.name}
                    />
                  )}
                </div>
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-accent-primary/30 text-sm">
                  {project.imagePlaceholder}
                </div>
              )}
            </motion.div>

            {/* Clickable overlay for entire card */}
            <a
              href={`/projects/${project.id}`}
              className="absolute inset-0 z-10 cursor-pointer"
              aria-label={`View ${project.name} project`}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}
