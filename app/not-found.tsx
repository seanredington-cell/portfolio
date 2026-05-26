"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Background from "@/components/Background";

/**
 * 404 Not Found Page
 * Simple page that allows users to return to home
 */
export default function NotFound() {
  return (
    <main className="min-h-screen pt-24 sm:pt-28 relative z-0 flex items-center justify-center">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Background />
      </motion.div>

      {/* Light gradient overlay */}
      <motion.div
        className="fixed inset-0 -z-5 pointer-events-none opacity-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 100%)
          `,
        }}
      />

      {/* 404 Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/40 p-8 sm:p-12"
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl sm:text-9xl font-bold text-accent-primary mb-4"
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Page not found
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/">
              <motion.button
                className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 border border-white/60 text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                }}
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
                <span>Back to home</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
