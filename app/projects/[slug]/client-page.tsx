"use client";

import React from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectData } from "@/data/projects";
import Link from "next/link";
import Callout from "@/components/Callout";
import WhitelabelSlotMachine from "@/components/WhitelabelSlotMachine";
import { lightenForDark } from "@/lib/brandColor";
import GetmeeHero from "@/components/GetmeeHero";
import ContactCards from "@/components/ContactCards";

interface ClientPageProps {
  params: {
    slug: string;
  };
  markdownContent: string;
  frontMatter: any;
  headings: Array<{ id: string; text: string; level: number }>;
  readTime?: number;
}

export default function ProjectDetailClient({ params, markdownContent, frontMatter, headings, readTime }: ClientPageProps) {
  const router = useRouter();
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'full' | 'quick'>('full');
  const [expandedImage, setExpandedImage] = React.useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Password gate state
  const isProtected = frontMatter.protected === true;
  const correctPassword = frontMatter.password || "";
  const sessionKey = `unlocked-${params.slug}`;
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  const [passwordInput, setPasswordInput] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [contentVisible, setContentVisible] = React.useState(!isProtected);

  // Check sessionStorage after mount to avoid hydration mismatch
  React.useEffect(() => {
    if (isProtected && sessionStorage.getItem(sessionKey) === "true") {
      setIsUnlocked(true);
      setContentVisible(true);
    }
  }, [isProtected, sessionKey]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      sessionStorage.setItem(sessionKey, "true");
      setIsUnlocked(true);
      setPasswordError(false);
      setTimeout(() => setContentVisible(true), 50);
    } else {
      setPasswordError(true);
      setPasswordInput("");
    }
  };

  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const rawBrandColor = frontMatter.logoColor || "#1a1a1a";
  const brandColorLight = rawBrandColor;
  const brandColorDark = lightenForDark(rawBrandColor);
  const brandColor = isDark ? brandColorDark : brandColorLight;

  // Track reading progress through the page
  const { scrollYProgress: readingProgress } = useScroll();


  // Track screen size for responsive device positioning
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show back to top after scrolling
  React.useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setShowBackToTop(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Process markdown content to replace blockquotes with InternalNote for workday-help
  const processedMarkdownContent = React.useMemo(() => {
    let content = markdownContent;

    // Replace blockquotes with InternalNote HTML structure for workday-help
    if (params.slug === 'workday-help') {
      content = content.replace(
        /<blockquote>[\s\S]*?<p>(?:<strong>Note:<\/strong>\s*)?([\s\S]*?)<\/p>[\s\S]*?<\/blockquote>/g,
        (match, noteContent) => `
          <div class="internal-note-wrapper">
            <div class="internal-note">
              <div class="internal-note-header">
                <img src="/about-hero/headshot-image.webp" alt="Seán" class="internal-note-avatar" width="32" height="32" />
                <div class="internal-note-label">Note</div>
              </div>
              <div class="internal-note-content">${noteContent}</div>
            </div>
          </div>
        `
      );
    }

    // Replace blockquotes with glassmorphic callout cards for regulatory-reporting
    if (params.slug === 'regulatory-reporting') {
      content = content.replace(
        /<blockquote>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/g,
        (match, blockContent) => `<div class="callout-card"><div class="callout-card-content">${blockContent}</div></div>`
      );
    }

    // Add lazy loading and async decoding to all content images — prevents
    // simultaneous GPU decode of many images when scrolling fast on mobile
    content = content.replace(
      /<img(?![^>]*loading=)([^>]*?)>/g,
      '<img loading="lazy" decoding="async"$1>'
    );

    return content;
  }, [markdownContent, params.slug]);

  // Split content by slider container for getmee project
  const contentParts = React.useMemo(() => {
    if (params.slug === 'getmee') {
      const parts = processedMarkdownContent.split('<div class="whitelabel-slider-container"></div>');
      return parts;
    }
    return [processedMarkdownContent];
  }, [processedMarkdownContent, params.slug]);

  // Add click handlers to images for expansion using event delegation
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const markdownContent = document.querySelector('.markdown-content');

      if (!markdownContent) return;

      // Add class to all images for styling
      const images = markdownContent.querySelectorAll('img');
      images.forEach(img => {
        img.classList.add('expandable-image');
        img.style.cursor = 'zoom-in';
      });

      const handleClick = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'IMG') {
          const img = target as HTMLImageElement;
          setExpandedImage(img.src);
        }
      };

      markdownContent.addEventListener('click', handleClick);

      return () => {
        markdownContent.removeEventListener('click', handleClick);
      };
    }, 500);

    return () => clearTimeout(timer);
  }, [markdownContent]);

  // Count-up animation for pilot stat numbers
  React.useEffect(() => {
    if (params.slug !== 'getmee') return;

    const timer = setTimeout(() => {
      const statEls = document.querySelectorAll('.pilot-stat-number');
      if (!statEls.length) return;

      const animateStat = (el: Element) => {
        const text = el.textContent || '';
        const match = text.match(/([\d.]+)/);
        if (!match) return;

        const target = parseFloat(match[1]);
        const hasDecimal = text.includes('.');
        const suffix = text.replace(/([\d.]+)/, '');
        const duration = 1000;
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;
          el.textContent = (hasDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateStat(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      statEls.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 1000);

    return () => clearTimeout(timer);
  }, [markdownContent, params.slug]);

  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-900"
      style={{
        ['--brand-color' as string]: brandColor,
      } as React.CSSProperties}
    >
      {/* Reading Progress Bar — desktop only */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 right-0 h-1 z-[60] origin-left pointer-events-none"
        style={{
          scaleX: readingProgress,
          backgroundColor: brandColor,
          willChange: 'transform',
        }}
      />

      {/* Desktop - Back to Home */}
      <div
        className="hidden lg:flex fixed left-6 top-20 z-[200] transition-all duration-300"
        style={{ opacity: showBackToTop ? 1 : 0, pointerEvents: showBackToTop ? 'auto' : 'none', transform: showBackToTop ? 'translateY(0)' : 'translateY(8px)' }}
      >
        <button
          onClick={() => {
            sessionStorage.setItem('scrollToProject', params.slug);
            router.push('/');
          }}
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-primary transition-colors font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </button>
      </div>

      {/* Image Lightbox - Above everything */}
      {expandedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] bg-black/25"
          onClick={() => setExpandedImage(null)}
        >
          {/* Image Container */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.25 }
              }}
              className="relative max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={expandedImage}
                alt="Expanded view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                onClick={() => setExpandedImage(null)}
                className="absolute -top-2 -right-2 sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-white/40 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 transition-all shadow-lg"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}


      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 z-[100] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform"
        style={{
          right: '16px',
          pointerEvents: showBackToTop ? 'auto' : 'none',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        }}
        aria-label="Back to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700 dark:text-gray-300"
        >
          <path
            d="M12 19V5M12 5L5 12M12 5L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4 sm:px-8 lg:px-[168px]">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <button
              onClick={() => {
                sessionStorage.setItem('scrollToProject', params.slug);
                router.push('/');
              }}
              className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-accent-primary dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.5 5L7.5 10L12.5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to home
            </button>
          </motion.div>

          {/* Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 space-y-2"
          >
            {/* Eyebrow: small logo chip + company name */}
            {(frontMatter.logo || frontMatter.logoPlaceholder || frontMatter.company) && (
              <div className="flex items-center gap-2">
                {(frontMatter.logo || frontMatter.logoPlaceholder) && (
                  <div
                    className="w-5 h-5 rounded-sm flex items-center justify-center text-xs shadow-sm overflow-hidden relative flex-shrink-0"
                    style={{ backgroundColor: frontMatter.logoColor || "#E5E7EB" }}
                  >
                    {frontMatter.logo ? (
                      <Image
                        src={frontMatter.logo}
                        alt={frontMatter.company || frontMatter.name}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      frontMatter.logoPlaceholder
                    )}
                  </div>
                )}
                <p className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-300">
                  {frontMatter.company ?? frontMatter.name}
                </p>
              </div>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: brandColor }}>
              {frontMatter.name}
            </h1>
          </motion.div>

          {/* Tags */}
          {frontMatter.tags && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              {frontMatter.tags.role && (
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm"
                  style={{
                    color: brandColor,
                    backgroundColor: `${brandColor}1a`,
                  }}
                >
                  {frontMatter.tags.role}
                </span>
              )}
              {frontMatter.tags.timeline && (
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm"
                  style={{
                    color: brandColor,
                    backgroundColor: `${brandColor}1a`,
                  }}
                >
                  {frontMatter.tags.timeline}
                </span>
              )}
              {frontMatter.tags.sector && (
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm"
                  style={{
                    color: brandColor,
                    backgroundColor: `${brandColor}1a`,
                  }}
                >
                  {frontMatter.tags.sector}
                </span>
              )}
            </motion.div>
          )}

          {/* TLDR */}
          {(frontMatter.tldr || frontMatter.description) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p
                className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: (frontMatter.tldr || frontMatter.description).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Hero Image */}
      {(frontMatter.layeredImages || frontMatter.image) && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="px-4 sm:px-8 lg:px-[168px] mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative w-full aspect-square rounded-xl overflow-visible">
              <div className="w-full h-full relative flex items-center justify-center">

                {/* Mobile: always use flat image — no layered GPU composition */}
                {isMobile ? (
                  frontMatter.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={frontMatter.image}
                        alt={frontMatter.name}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  ) : null
                ) : frontMatter.layeredImages ? (
                  /* Desktop: full layered composition */
                  params.slug === 'getmee' && frontMatter.layeredImages.floatingCards ? (
                    <GetmeeHero
                      background={frontMatter.layeredImages.background}
                      foreground={frontMatter.layeredImages.foreground}
                      cards={frontMatter.layeredImages.floatingCards}
                      name={frontMatter.name}
                    />
                  ) : (
                    <>
                      {/* Main background image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full" style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}>
                          <Image
                            src={frontMatter.layeredImages.background}
                            alt={`${frontMatter.name} background`}
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>

                      {/* Floating Icons */}
                      {frontMatter.layeredImages.floatingIcons && frontMatter.layeredImages.floatingIcons.map((icon: any, index: number) => {
                        const getPosition = (position: string) => {
                          switch (position) {
                            case 'top-left':    return { top: '20%', left: '2%' };
                            case 'top-right':   return { top: '28%', right: '-3%' };
                            case 'middle-left': return { top: '60%', left: '-5%' };
                            case 'middle-right':return { top: '55%', right: '-4%' };
                            case 'bottom-center':return { bottom: '20%', left: '48%' };
                            case 'bottom-left': return { bottom: '15%', left: '8%' };
                            default:            return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
                          }
                        };
                        return (
                          <motion.div
                            key={index}
                            className="absolute w-10 h-10 sm:w-12 sm:h-12"
                            style={getPosition(icon.position)}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ opacity: { duration: 0.5, delay: 0.7 + index * 0.1 }, scale: { duration: 0.5, delay: 0.7 + index * 0.1 } }}
                          >
                            <Image src={icon.src} alt={`Icon ${index + 1}`} fill className="object-contain" />
                          </motion.div>
                        );
                      })}

                      {/* Floating Devices */}
                      {frontMatter.layeredImages.floatingDevices && frontMatter.layeredImages.floatingDevices.map((device: any, index: number) => {
                        const isLeftDevice = device.position === 'left';
                        const isRightDevice = device.position === 'right';
                        return (
                          <motion.div
                            key={`device-${index}`}
                            className="absolute w-[18%] aspect-[9/19]"
                            style={{
                              top: '20%',
                              ...(isLeftDevice && { left: '-8%' }),
                              ...(isRightDevice && { right: '-8%' }),
                              ...(!isLeftDevice && !isRightDevice && { top: '50%', left: '50%' }),
                              transform: isLeftDevice || isRightDevice ? 'translateY(-50%)' : 'translate(-50%, -50%)',
                              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ opacity: { duration: 0.6, delay: 0.7 + index * 0.15 }, scale: { duration: 0.6, delay: 0.7 + index * 0.15 } }}
                          >
                            <Image src={device.src} alt={`Device ${index + 1}`} fill className="object-contain" />
                          </motion.div>
                        );
                      })}

                      {/* Foreground image */}
                      {frontMatter.layeredImages.foreground && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-[90%] aspect-video" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}>
                            <Image src={frontMatter.layeredImages.foreground} alt={frontMatter.name} fill className="object-contain" />
                          </div>
                        </div>
                      )}
                    </>
                  )
                ) : frontMatter.image ? (
                  <div className="relative w-full h-full">
                    <Image src={frontMatter.image} alt={frontMatter.name} fill className="object-contain" priority />
                  </div>
                ) : null}

              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mt-16" />
          </div>
        </motion.section>
      )}

      {/* Password Gate */}
      {isProtected && !isUnlocked && (
        <section className="px-4 sm:px-8 lg:px-[168px] pb-24">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/90 dark:bg-gray-800/90 border border-white/40 dark:border-gray-700 rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              }}
            >
              {/* Top shine line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

              <div className="px-8 py-12 flex flex-col items-center text-center gap-6">
                {/* Lock icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: `${brandColor}18`,
                    border: `1.5px solid ${brandColor}30`,
                    boxShadow: `0 0 0 6px ${brandColor}08`,
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>

                {/* Text */}
                <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  This case study is password protected
                </p>

                {/* Form */}
                <motion.form
                  onSubmit={handlePasswordSubmit}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.4 }}
                  className="w-full max-w-[280px] flex flex-col gap-3"
                >
                  <div className="relative">
                    <input
                      type="password"
                      value={passwordInput}
                      onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
                      placeholder="Password"
                      autoComplete="current-password"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white/60 dark:bg-gray-900/40 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-200 ${
                        passwordError
                          ? 'border-red-400/70 ring-2 ring-red-300/40 dark:ring-red-500/30'
                          : 'border-white/60 dark:border-gray-600 focus:ring-2 focus:border-transparent'
                      }`}
                      style={!passwordError ? {
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)',
                        outline: 'none',
                        fontSize: '16px', // Prevents iOS Safari auto-zoom on focus
                      } as React.CSSProperties : {
                        fontSize: '16px', // Prevents iOS Safari auto-zoom on focus
                      } as React.CSSProperties}
                    />
                  </div>

                  <AnimatePresence>
                    {passwordError && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-red-500 dark:text-red-400 text-left -mt-1"
                      >
                        Incorrect password. Try again.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3 rounded-xl font-semibold text-white text-sm shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${brandColor}, ${brandColor}cc)`,
                      boxShadow: `0 4px 16px ${brandColor}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    }}
                  >
                    Unlock
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Tab bar — below hero image, above content */}
      {(!isProtected || isUnlocked) && (
        <div className="px-4 sm:px-8 lg:px-[168px] pb-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('full')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  activeTab === 'full'
                    ? 'bg-white/80 dark:bg-gray-800/80 border-white/60 dark:border-gray-600 shadow-md text-gray-900 dark:text-gray-100'
                    : 'bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/50 text-gray-500 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-gray-800/40'
                }`}
              >
                {/* Book icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 opacity-80">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Full case study
                {readTime && <span className="hidden sm:inline opacity-50 font-normal">{readTime} min</span>}
              </button>
              <button
                onClick={() => setActiveTab('quick')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  activeTab === 'quick'
                    ? 'bg-white/80 dark:bg-gray-800/80 border-white/60 dark:border-gray-600 shadow-md text-gray-900 dark:text-gray-100'
                    : 'bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/50 text-gray-500 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-gray-800/40'
                }`}
              >
                {/* Sparkle/AI icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 opacity-80">
                  <path d="M12 2C12 2 13 7 16 10C19 13 24 12 24 12C24 12 19 13 16 16C13 19 12 24 12 24C12 24 11 19 8 16C5 13 0 12 0 12C0 12 5 13 8 10C11 7 12 2 12 2Z"/>
                </svg>
                AI Summary
                <span className="hidden sm:inline opacity-50 font-normal">2 min</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Summary Content */}
      {activeTab === 'quick' && (!isProtected || isUnlocked) && (
        <div className="px-4 sm:px-8 lg:px-[168px] pb-24">
          <div className="max-w-2xl mx-auto">
            {frontMatter.quickRead ? (
              <div className="bg-white/80 dark:bg-gray-800/80 border border-white/50 dark:border-gray-700/60 rounded-2xl p-8 space-y-6 shadow-sm">
                {[
                  { label: 'My role', value: frontMatter.quickRead.role },
                  { label: 'The problem', value: frontMatter.quickRead.problem },
                  { label: 'My approach', value: frontMatter.quickRead.approach },
                  { label: 'Outcome', value: frontMatter.quickRead.outcome },
                  { label: 'Skills', value: frontMatter.quickRead.skills },
                ].map(({ label, value }) => value && (
                  <div key={label}>
                    <p className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: brandColor }}>{label}</p>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">AI Summary not available for this project.</p>
            )}
          </div>
        </div>
      )}

      {/* Markdown Content */}
      <section
        ref={contentRef}
        className="px-4 sm:px-8 lg:px-[168px] pb-16"
        style={{
          display: (isProtected && !isUnlocked) || activeTab === 'quick' ? 'none' : 'block',
          opacity: contentVisible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <style dangerouslySetInnerHTML={{__html: `
            .markdown-content h2 {
              color: var(--brand-color);
              scroll-margin-top: 64px;
            }
            .markdown-content ul li::before {
              background-color: var(--brand-color);
            }
            .markdown-content blockquote {
              border-left-color: var(--brand-color);
              background-color: color-mix(in srgb, var(--brand-color) 10%, transparent);
            }

            /* Image optimization */
            .markdown-content img {
              max-width: 100%;
              height: auto;
              display: block;
            }

            /* Callout Card Styles (regulatory-reporting) */
            .callout-card {
              background: rgba(255,255,255,0.55);
              border: 1px solid rgba(0,0,0,0.07);
              border-radius: 0.875rem;
              padding: 1rem 1.25rem;
              margin: 1.5rem 0;
              box-shadow: 0 2px 8px rgba(0,0,0,0.04);
            }
            .dark .callout-card {
              background: rgba(31,41,55,0.5);
              border-color: rgba(255,255,255,0.08);
            }
            .callout-card-content {
              font-size: 1rem;
              line-height: 1.75;
              color: #374151;
            }
            @media (min-width: 640px) {
              .callout-card-content {
                font-size: 1.125rem;
              }
            }
            .dark .callout-card-content {
              color: #d1d5db;
            }
            .callout-card-content p {
              margin: 0;
            }
            .callout-card-content strong:first-child {
              display: block;
              font-weight: 700;
              color: var(--brand-color);
              margin-bottom: 0.25rem;
              letter-spacing: -0.01em;
            }

            /* Internal Note Styles */
            .internal-note-wrapper {
              position: relative;
              margin: 1.5rem 0;
            }
            .internal-note {
              position: relative;
              background: linear-gradient(to bottom right, #fefce8, #fef9c3);
              border-radius: 0.5rem;
              padding: 1rem 1.25rem;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(251, 191, 36, 0.15);
            }
            .internal-note-header {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              margin-bottom: 0.5rem;
            }
            .internal-note-avatar {
              width: 28px !important;
              height: 28px !important;
              max-width: 28px !important;
              border-radius: 50%;
              object-fit: cover;
              flex-shrink: 0;
              display: block;
            }
            .internal-note-label {
              font-size: 1.125rem;
              font-weight: 600;
              color: rgba(113, 63, 18, 0.8);
              margin: 0;
              padding: 0;
            }
            .internal-note-content {
              font-size: 1.125rem;
              color: rgba(113, 63, 18, 0.9);
              line-height: 1.75;
              margin: 0;
              padding: 0;
              font-style: italic;
            }
            .internal-note-content p {
              margin: 0;
              padding: 0;
              font-style: italic;
            }
            .internal-note-content strong {
              font-weight: 600;
              color: rgb(113, 63, 18);
              font-style: italic;
            }

            /* Whitelabel Slider Styles */
            .whitelabel-slider-container {
              margin: 2rem 0;
              width: 100%;
            }

            /* Standard bullet list items */
            .markdown-content ul li {
              display: block !important;
              padding-left: 1.5rem;
              position: relative;
            }

            .markdown-content ul li::before {
              position: absolute;
              left: 0;
              top: 0.75rem;
              margin-right: 0 !important;
              margin-top: 0 !important;
            }

            .markdown-content ul li strong {
              font-weight: 600;
            }

            /* Card-style list items — triggered when li starts with a bold element (tight or loose lists) */
            .markdown-content ul:has(li > strong:first-child),
            .markdown-content ul:has(li > p > strong:first-child) {
              display: grid;
              grid-template-columns: 1fr;
              gap: 0.75rem;
              list-style: none;
              padding: 0;
              margin: 1.5rem 0;
            }

            .markdown-content ul:has(li > strong:first-child) li,
            .markdown-content ul:has(li > p > strong:first-child) li {
              background: rgba(255,255,255,0.55);
              border: 1px solid rgba(0,0,0,0.07);
              border-radius: 0.875rem;
              padding: 1rem 1.25rem !important;
              padding-left: 1.25rem !important;
              position: relative;
              box-shadow: 0 2px 8px rgba(0,0,0,0.04);
            }

            .dark .markdown-content ul:has(li > strong:first-child) li,
            .dark .markdown-content ul:has(li > p > strong:first-child) li {
              background: rgba(31,41,55,0.5);
              border-color: rgba(255,255,255,0.08);
            }

            .markdown-content ul:has(li > strong:first-child) li::before,
            .markdown-content ul:has(li > p > strong:first-child) li::before {
              display: none;
            }

            .markdown-content ul:has(li > strong:first-child) li > strong:first-child,
            .markdown-content ul:has(li > p > strong:first-child) li > p:first-child > strong:first-child {
              display: block;
              font-weight: 700;
              color: var(--brand-color);
              margin-bottom: 0.25rem;
              letter-spacing: -0.01em;
            }

            .markdown-content ul:has(li > p > strong:first-child) li > p {
              margin-bottom: 0;
            }

            /* Section divider for Feature Deep Dive */
            .feature-deep-dive {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin: 4rem 0 2rem;
            }
            .feature-deep-dive-line {
              flex: 1;
              height: 1px;
              background-color: var(--brand-color);
              opacity: 0.25;
            }
            .feature-deep-dive-label {
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              color: var(--brand-color);
              opacity: 0.6;
              white-space: nowrap;
            }

            /* Pilot Stats Cards */
            .pilot-stats-grid {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              margin: 2rem 0;
            }
            .pilot-card {
              background: rgba(255,255,255,0.9);
              border: 1px solid rgba(255,255,255,0.8);
              border-radius: 1rem;
              padding: 1.5rem;
              box-shadow: 0 4px 24px rgba(0,0,0,0.06);
            }
            .dark .pilot-card {
              background: rgba(31,41,55,0.6);
              border-color: rgba(255,255,255,0.1);
            }
            .pilot-card-header {
              display: flex;
              align-items: center;
              gap: 0.875rem;
              margin-bottom: 1.25rem;
            }
            .pilot-flag {
              font-size: 2rem;
              line-height: 1;
            }
            .pilot-card-title {
              font-size: 1.05rem;
              font-weight: 700;
              color: var(--brand-color);
            }
            .pilot-card-meta {
              font-size: 0.8rem;
              color: #9ca3af;
              margin-top: 0.1rem;
            }
            .pilot-stats-row {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
            }
            .pilot-stat {
              flex: 1;
              min-width: 120px;
              background: color-mix(in srgb, var(--brand-color) 7%, transparent);
              border-radius: 0.75rem;
              padding: 1rem;
            }
            .pilot-stat-number {
              font-size: 1.75rem;
              font-weight: 800;
              color: var(--brand-color);
              line-height: 1;
              margin-bottom: 0.4rem;
            }
            .pilot-stat-label {
              font-size: 0.8rem;
              color: #6b7280;
              line-height: 1.4;
            }
            .dark .pilot-stat-label {
              color: #9ca3af;
            }
            .pilot-improvements {
              margin-top: 1.25rem;
              display: flex;
              flex-direction: column;
              gap: 0.875rem;
            }
            .pilot-improvement-item {
              display: flex;
              flex-direction: column;
              gap: 0.3rem;
            }
            .pilot-improvement-label {
              font-size: 0.78rem;
              font-weight: 600;
              color: #6b7280;
              text-transform: uppercase;
              letter-spacing: 0.04em;
            }
            .dark .pilot-improvement-label {
              color: #9ca3af;
            }
            .pilot-improvement-bar-wrap {
              display: flex;
              align-items: center;
              gap: 0.5rem;
            }
            .pilot-improvement-bar-before {
              background: #e5e7eb;
              border-radius: 999px;
              padding: 0.25rem 0.6rem;
              font-size: 0.78rem;
              font-weight: 600;
              color: #6b7280;
              white-space: nowrap;
              min-width: 52px;
            }
            .pilot-improvement-bar-after {
              background: color-mix(in srgb, var(--brand-color) 15%, transparent);
              border-radius: 999px;
              padding: 0.25rem 0.6rem;
              font-size: 0.78rem;
              font-weight: 700;
              color: var(--brand-color);
              white-space: nowrap;
              min-width: 52px;
            }
            .pilot-improvement-arrow {
              font-size: 0.875rem;
              color: #9ca3af;
              flex-shrink: 0;
            }
          `}} />
          <div className="markdown-content">
            {contentParts.length > 1 ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: contentParts[0] }} />
                {/* Slot machine component */}
                <WhitelabelSlotMachine brandColor={brandColor} />
                <div dangerouslySetInnerHTML={{ __html: contentParts[1] }} />
              </>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: contentParts[0] }} />
            )}
          </div>
        </div>
      </section>

      {/* Next Project Card — always shown, even on locked projects */}
      {(() => {
        // Filter out hero project and find current project index
        const nonHeroProjects = projectData.filter(p => !p.isHero);
        const currentIndex = nonHeroProjects.findIndex(p => p.id === params.slug);

        // Get next project (loop back to first if at end)
        const nextProject = currentIndex >= 0 && currentIndex < nonHeroProjects.length - 1
          ? nonHeroProjects[currentIndex + 1]
          : nonHeroProjects[0];

        if (!nextProject || nextProject.id === params.slug) return null;

        return (
          <section className="px-4 sm:px-8 lg:px-[168px] pb-24">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-6 text-center">Next Project</h2>

                <Link href={`/projects/${nextProject.id}`} className="group block">
                  <motion.div
                    className="bg-white/60 dark:bg-gray-800/60 border border-white/60 dark:border-gray-700/60 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                    }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6">
                      {/* Text Content - Left Side on Desktop, Bottom on Mobile */}
                      <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-tight">
                            <span className="group-hover:underline" style={{ color: isDark ? lightenForDark(nextProject.logoColor || "#1a1a1a") : (nextProject.logoColor || "#1a1a1a") }}>
                              {nextProject.name}
                            </span>
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {nextProject.description}
                        </p>

                        <div className="pt-2">
                          <span
                            className="inline-flex items-center gap-2 font-semibold transition-colors text-xs sm:text-sm"
                            style={{ color: isDark ? lightenForDark(nextProject.logoColor || "#1a1a1a") : (nextProject.logoColor || "#1a1a1a") }}
                          >
                            <span>Read more</span>
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Hero Image - Right Side on Desktop, Top on Mobile */}
                      <div className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-square rounded-lg overflow-visible">
                          {/* Mobile: always flat image */}
                          {isMobile ? (
                            nextProject.image ? (
                              <Image src={nextProject.image} alt={nextProject.name} fill className="object-contain rounded-lg" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">{nextProject.imagePlaceholder}</div>
                            )
                          ) : nextProject.id === 'getmee' && nextProject.layeredImages?.floatingCards ? (
                            <GetmeeHero
                              background={nextProject.layeredImages.background}
                              foreground={nextProject.layeredImages.foreground!}
                              cards={nextProject.layeredImages.floatingCards}
                              name={nextProject.name}
                            />
                          ) : nextProject.layeredImages ? (
                            <div className="w-full h-full relative flex items-center justify-center">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[140%] aspect-video">
                                  <Image src={nextProject.layeredImages.background} alt={`${nextProject.name} background`} fill className="object-contain" />
                                </div>
                              </div>
                              {nextProject.layeredImages.floatingIcons && nextProject.layeredImages.floatingIcons.map((icon: any, iconIndex: number) => {
                                const getPosition = (position: string) => {
                                  switch (position) {
                                    case 'top-left': return { top: '20%', left: '2%' };
                                    case 'top-right': return { top: '28%', right: '-3%' };
                                    case 'middle-left': return { top: '60%', left: '-5%' };
                                    case 'middle-right': return { top: '55%', right: '-4%' };
                                    case 'bottom-center': return { bottom: '20%', left: '48%' };
                                    case 'bottom-left': return { bottom: '15%', left: '8%' };
                                    default: return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
                                  }
                                };
                                return (
                                  <div key={iconIndex} className="absolute w-5 h-5 sm:w-6 sm:h-6" style={getPosition(icon.position)}>
                                    <Image src={icon.src} alt={`Icon ${iconIndex + 1}`} fill className="object-contain" />
                                  </div>
                                );
                              })}
                              {nextProject.layeredImages.floatingDevices && nextProject.layeredImages.floatingDevices.map((device: any, deviceIndex: number) => {
                                const isLeftDevice = device.position === 'left';
                                const isRightDevice = device.position === 'right';
                                return (
                                  <div key={`next-device-${deviceIndex}`} className="absolute w-[16%] aspect-[9/19]"
                                    style={{
                                      top: '20%',
                                      ...(isLeftDevice && { left: '-8%' }),
                                      ...(isRightDevice && { right: '-8%' }),
                                      ...(!isLeftDevice && !isRightDevice && { top: '50%', left: '50%' }),
                                      transform: isLeftDevice || isRightDevice ? 'translateY(-50%)' : 'translate(-50%, -50%)',
                                      filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.2))'
                                    }}>
                                    <Image src={device.src} alt={`Device ${deviceIndex + 1}`} fill className="object-contain" />
                                  </div>
                                );
                              })}
                              {nextProject.layeredImages.foreground && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="relative w-[65%] aspect-video" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}>
                                    <Image src={nextProject.layeredImages.foreground} alt={nextProject.name} fill className="object-contain" />
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : nextProject.image ? (
                            <Image src={nextProject.image} alt={nextProject.name} fill className="object-contain rounded-lg" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm">
                              {nextProject.imagePlaceholder}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </section>
        );
      })()}

      {/* Contact Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden px-4 sm:px-8 lg:px-[168px]">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-accent-primary/10" />

        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-gray-900 dark:text-gray-100">Get in touch</span>
            </h2>

            <div className="pt-6">
              <ContactCards />
            </div>

            {/* Copyright */}
            <div className="pt-12 text-xs sm:text-sm text-[#4a4a4a] dark:text-gray-400">
              © {new Date().getFullYear()} Seán Redington. All rights reserved.
            </div>

            {/* Back to Top */}
            <div className="pt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[#4a4a4a] dark:text-gray-400 hover:text-accent-primary transition-colors text-sm inline-flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V4M8 4L4 8M8 4L12 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to top
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

