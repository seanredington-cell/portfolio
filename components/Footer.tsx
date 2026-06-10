"use client";

import { motion } from "framer-motion";
import ContactCards from "@/components/ContactCards";

/**
 * Footer Component with Contact Section
 *
 * Contact section with email and social links
 */
export default function Footer() {
  return (
    <footer className="relative pt-16 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-accent-primary/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-gray-900 dark:text-gray-100">Contact</span>
          </h2>

          <div className="pt-8">
            <ContactCards />
          </div>

          {/* Copyright + Built by */}
          <div className="pt-12 flex flex-col items-center gap-1">
            <p className="text-sm text-[#4a4a4a] dark:text-gray-400">
              © {new Date().getFullYear()} Seán Redington. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Designed &amp; built by Seán Redington
            </p>
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
    </footer>
  );
}
