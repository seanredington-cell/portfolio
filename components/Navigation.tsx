"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useDarkMode } from "@/contexts/DarkModeContext";

/**
 * Navigation Component
 *
 * Modern glassmorphic navigation bar with:
 * - Frosted glass effect (backdrop blur + transparency)
 * - Smooth hover states
 * - Active link indication
 * - Icon placeholders
 * - Content-hugging design
 */

// 4 explicit icon colour states, all driven by CSS (no JS lag on theme switch):
// light+inactive: gray-400 | light+active: gray-800
// dark+inactive:  white/50 | dark+active:  white
const iconClass = (isActive: boolean) =>
  `transition-colors duration-200 ${
    isActive
      ? 'text-gray-800 dark:text-white'
      : 'text-gray-400 dark:text-white/50'
  }`;

const HomeIcon = ({ isActive }: { isActive: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass(isActive)}>
    <path d="M10 2L3 7V17H8V12H12V17H17V7L10 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AboutIcon = ({ isActive }: { isActive: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass(isActive)}>
    <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M5 17C5 13 7 11 10 11C13 11 15 13 15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ContactIcon = ({ isActive }: { isActive: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass(isActive)}>
    <path d="M3 4H17C17.5523 4 18 4.44772 18 5V15C18 15.5523 17.5523 16 17 16H3C2.44772 16 2 15.5523 2 15V5C2 4.44772 2.44772 4 3 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M2 5L10 10L18 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isDarkMode: contextDark } = useDarkMode();
  // Initialise directly from the DOM — the inline script in layout.tsx sets the
  // dark class synchronously before hydration, so this is always correct on first paint.
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, [contextDark]); // re-sync on every toggle

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: AboutIcon },
    { name: "Contact", href: "/contact", icon: ContactIcon },
  ];

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Glassmorphic container - hugs content */}
        <div
          className="nav-pill relative backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 rounded-full px-2 sm:px-3 py-2"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
          }}
        >
        {/* Subtle shine effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

        {/* Navigation items */}
        <div className="relative flex items-center gap-1 sm:gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.href}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={item.href}
                  className="relative group flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2"
                >
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 dark:bg-gray-700/30 rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Active indicator */}
                  {isActive && mounted && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full backdrop-blur-sm
                        bg-white/90 dark:bg-white/10
                        border border-black/[0.06] dark:border-white/[0.15]
                        shadow-[0_2px_8px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)]
                        dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Icon */}
                  <span className="relative">
                    <Icon isActive={isActive} />
                  </span>

                  {/* Link text - on mobile, only show for active item; always show on sm and up */}
                  <AnimatePresence mode="wait">
                    {(isActive || !isMobile) && (
                      <motion.span
                        key={`${item.href}-label`}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className={`relative text-xs sm:text-sm font-medium whitespace-nowrap overflow-hidden ${
                          isActive
                            ? "text-accent-primary dark:text-white font-semibold"
                            : "text-gray-600 dark:text-gray-300 group-hover:text-accent-primary"
                        }`}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Hover underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-accent-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      </motion.nav>
    </div>
  );
}
