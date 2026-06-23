"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import ContactCards from "@/components/ContactCards";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 sm:pt-40 relative z-0">
      <Background />

      <motion.div
        className="fixed inset-0 -z-5 pointer-events-none opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 100%)`,
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 sm:space-y-12"
        >
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
              Contact
            </h1>
            <p className="text-base sm:text-xl text-[#4a4a4a] dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-lora">
              Feel free to reach out for collaborations, opportunities, or just to say hello.
            </p>
          </div>

          <ContactCards />

          <div className="pt-6 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4a4a4a] dark:text-gray-400">
            <span>© {new Date().getFullYear()} Seán Redington. All rights reserved.</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-accent-primary transition-colors inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to top
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
