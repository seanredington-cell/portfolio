"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";

/**
 * Contact Page
 *
 * Contains contact information and links.
 */
export default function Contact() {
  return (
    <main className="min-h-screen pt-32 sm:pt-40 relative z-0">
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-gray-900 dark:text-gray-100">Get in Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just to say hello.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Email Card */}
            <motion.a
              href="mailto:seanredington@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              }}
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">Email</h3>
                  <p className="text-base text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors break-words">
                    seanredington@gmail.com
                  </p>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/sean-redington"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              }}
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">LinkedIn</h3>
                  <p className="text-base text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    Connect with me →
                  </p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="pt-12 text-sm text-[#4a4a4a] dark:text-gray-400">
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
    </main>
  );
}
