"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EMAIL = "seanredington@gmail.com";

export default function ContactCards() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const succeed = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).then(succeed).catch(() => fallback());
    } else {
      fallback();
    }

    function fallback() {
      const el = document.createElement('textarea');
      el.value = EMAIL;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.focus();
      el.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(el);
      succeed();
    }
  };

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: -8, scale: 0.95, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 z-[200] flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium px-4 py-2.5 rounded-full shadow-xl pointer-events-none whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
        {/* Email */}
        <motion.a
          href={`mailto:${EMAIL}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700 p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center"
          style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}
        >
          <div className="flex items-center gap-3 w-full">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-0.5">Email</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors truncate">
                {EMAIL}
              </p>
            </div>
            {/* Copy button */}
            <button
              onClick={handleCopy}
              aria-label="Copy email address"
              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            >
              {copied ? (
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/sean-redington"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="group bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700 p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center"
          style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}
        >
          <div className="flex items-center gap-3 w-full">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-0.5">LinkedIn</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Connect with me →
              </p>
            </div>
          </div>
        </motion.a>
      </div>
    </>
  );
}
