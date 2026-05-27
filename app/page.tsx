"use client";

import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { useEffect, useState, useRef } from "react";
import { projectData } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeColor, setActiveColor] = useState(projectData[0].accentColor || "99, 102, 241");
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Check if we should scroll to a specific project
    const scrollToProject = sessionStorage.getItem('scrollToProject');
    if (scrollToProject) {
      sessionStorage.removeItem('scrollToProject');

      // Wait for page to load, then scroll to the project
      setTimeout(() => {
        const projectIndex = projectData.findIndex(p => p.id === scrollToProject);
        if (projectIndex >= 0) {
          // Calculate scroll position for this project
          const container = document.querySelector('[data-projects-container]');
          if (container) {
            const scrollHeight = container.scrollHeight - window.innerHeight;
            const projectDuration = 1 / projectData.length;
            const targetProgress = (projectIndex + 0.5) * projectDuration;
            const targetScroll = scrollHeight * targetProgress;

            window.scrollTo({
              top: container.getBoundingClientRect().top + window.scrollY + targetScroll,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    }

    // Update active color based on scroll
    const handleScroll = () => {
      const container = document.querySelector('[data-projects-container]');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.scrollHeight - window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, (window.scrollY - rect.top) / containerHeight));

      const projectIndex = Math.floor(scrollProgress * projectData.length);
      const clampedIndex = Math.min(projectIndex, projectData.length - 1);
      const newColor = projectData[clampedIndex].accentColor || "99, 102, 241";

      if (newColor !== activeColor) {
        setActiveColor(newColor);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeColor]);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white dark:bg-gray-900 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-6"
            >
              {/* Headshot icon */}
              <motion.div
                className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent-primary shadow-lg"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/about-hero/headshot-image.webp"
                  alt="Seán Redington"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Hello there text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-medium text-gray-700 dark:text-gray-300"
              >
                Hello there
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main
        ref={containerRef}
        className="min-h-screen relative"
      >
      <Background />

      {/* Dynamic color overlay with wash effect */}
      <div
        className="fixed inset-0 -z-5 pointer-events-none opacity-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(${activeColor}, 0.8) 0%, rgba(${activeColor}, 0.2) 50%, transparent 100%)
          `,
        }}
      />

        <Projects />
      {/* Testimonials section */}
      <section className="pt-16 sm:pt-24 pb-4 sm:pb-8 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-lg sm:text-xl text-[#4a4a4a] dark:text-gray-400"
          >
            From the leaders and people that I've worked with
          </motion.p>
        </div>
        <TestimonialCarousel />
      </section>

      <Footer />
    </main>
    </>
  );
}
