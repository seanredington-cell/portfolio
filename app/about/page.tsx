"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Background from "@/components/Background";
import ContactCards from "@/components/ContactCards";

/**
 * About Page
 *
 * Contains a hero section with Download CV CTA and CV content below
 */
export default function About() {
  const [dismissed, setDismissed] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scrollCTAOpacity = useTransform(scrollYProgress, [0, 0.05, 0.12], [1, 0.5, 0]);
  const scrollCTAPointerEvents = useTransform(scrollYProgress, (v) => v < 0.12 ? 'auto' : 'none');

  return (
    <main className="min-h-screen pt-24 sm:pt-28 relative z-0">
      <Background />

      {/* Cards Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700 p-6 sm:p-12"
          style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}
        >
          <div className="space-y-4">
            {/* Name + Image inline */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/about-hero/headshot-image.webp"
                    alt="Seán Redington"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Seán Redington</h1>
            </div>

            {/* Bio Text */}
            <div className="space-y-3 text-base text-gray-700 dark:text-gray-100 leading-relaxed font-lora">
                <p>I'm Seán, a designer who's spent over six years building digital products across Fortune 500 companies and startups. My most recent role was as Head of Product & Design at Getmee AI, an AI-powered platform helping migrants and non-English speakers build the skills they need to get hired.</p>
                <p>Having studied Industrial Design in university, I was fortunate enough to get a UX internship at Workday. This introduced me to some incredible people and opened my eyes to the world of UX design. After returning to Workday as a grad and earning a promotion, I moved to CYGNVS, a cybersecurity startup. There, I led design work across web and native mobile apps.</p>
                <p>I moved to Australia in 2024, and freelanced as a web designer within the charity space before accepting an offer for a full-time role at Getmee AI, a startup with a genuine mission, and the space to shape both the product and the team. At Getmee, I led product strategy, and built the systems that scaled the platform from 20,000 to 40,000 users across 15+ white-label apps.</p>
                <p>I work best when I'm close to the problem, talking to users, sitting with the engineering team, or challenging assumptions with stakeholders.</p>
                <p>I'm looking for my next role in a product team that's passionate about solving user problems and doesn't view design as a silo that churns out screens, but instead as a core backbone to a successful product and team.</p>
            </div>
          </div>

        </motion.div>

        {/* CV Card */}
        <motion.div
          id="cv-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700 p-6 sm:p-12"
          style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}
        >
          <div className="space-y-12 leading-relaxed">
          {/* Experience Section */}
          <section>
            {/* Download CV — full width above Experience on mobile, inline with heading on sm+ */}
            <a
              href="/SEAN_REDINGTON_CV_2026.pdf"
              download
              className="sm:hidden flex items-center justify-center gap-2 w-full bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-5 py-3 rounded-2xl shadow-lg mb-8 text-sm active:scale-95 transition-transform"
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>

            <div className="flex items-center justify-between mb-12 gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Experience</h2>
              <motion.a
                href="/SEAN_REDINGTON_CV_2026.pdf"
                download
                className="hidden sm:inline-flex items-center gap-2 bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </motion.a>
            </div>

            <div className="space-y-12">
              {/* Getmee AI */}
              <div className="space-y-4 pb-10 border-b border-gray-200/60 dark:border-gray-700/60 last:border-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                    <Image src="/about-hero/logo-getmee.webp" alt="Getmee AI" width={20} height={20} className="object-contain w-full h-full" />
                  </div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">Getmee AI, Melbourne</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Head of Product & Design</h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs font-semibold px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">CONTRACT</span>
                    <span className="text-sm text-gray-600 dark:text-gray-100 whitespace-nowrap font-lora">May 2025 – Aug 2026</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed font-lora">
                  Led the product strategy and design across 15+ white-label apps, doubling the userbase to 40,000 users as the sole designer with a 12-person engineering team.
                </p>
                <ul className="space-y-3 text-base text-gray-600 dark:text-gray-100 font-lora">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                    <span>Applied systems thinking to deliver AI-powered learning experiences, validated through pilots in varying geographies, with 89% of 1,100+ students wanting it to continue in their curriculum.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                    <span>Built a scalable design system and white-label infrastructure that cut new app deployment from weeks to 2 hours, enabling simultaneous feature releases across all apps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                    <span>Introduced product processes including a Product Council, UX office hours and Notion documentation that shifted the team from reactive to roadmap-driven, growing the userbase from 20,000 to 40,000.</span>
                  </li>
                </ul>

              </div>

              {/* Marlin Communications */}
              <div className="space-y-4 pb-10 border-b border-gray-200/60 dark:border-gray-700/60 last:border-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                    <Image src="/about-hero/logo-marlin.webp" alt="Marlin Communications" width={20} height={20} className="object-contain w-full h-full" />
                  </div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">Marlin Communications, Melbourne</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">UX/UI Designer</h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs font-semibold px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">CONTRACT</span>
                    <span className="text-sm text-gray-600 dark:text-gray-100 whitespace-nowrap font-lora">Jan 2025 – Jun 2025</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed font-lora">
                  Led UX research and design of a number of high traffic websites within the charity space, ensuring user goals were at the heart of all decision making.
                </p>
              </div>

              {/* CYGNVS */}
              <div className="space-y-4 pb-10 border-b border-gray-200/60 dark:border-gray-700/60 last:border-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                    <Image src="/about-hero/logo-cygnvs.webp" alt="CYGNVS" width={20} height={20} className="object-contain w-full h-full" />
                  </div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">CYGNVS, Dublin</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">UX Designer</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-100 whitespace-nowrap flex-shrink-0 font-lora">Mar 2022 – May 2024</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed font-lora">
                  As a Lead Designer across multiple teams I played a key role in growing the user base by over 300%, creating high quality, security conscious features in a start-up within the Cyber Security space.
                </p>
                <ul className="space-y-3 text-base text-gray-600 dark:text-gray-100 font-lora">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                    <span>Designed patented features that use large language models (LLMs) to solve core user problems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                    <span>Played a critical role in roadmap planning and execution for teams across multiple geographies and devices which expanded the user base by over 300%.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                    <span>Involved in interviewing, hiring, onboarding and up-skilling a team of designers both on and off-site.</span>
                  </li>
                </ul>

                {/* Testimonials — CYGNVS */}
                <div className="mt-6 space-y-3">
                  {[
                    { initials: 'EH', color: '#1E3A8A', name: 'Eoghan Hickey', role: 'Design Lead · CYGNVS & Workday', quote: 'Seán is an exceptional product designer who is thoughtful, pragmatic, and clever. He takes feedback like a champ, cares about UX, and is able to get up to speed with technical conversations that could spin your head around.' },
                    { initials: 'KR', color: '#3B82F6', name: 'Karen Reilly', role: 'Director of Product · CYGNVS & Workday', quote: "Seán is a natural leader who cares deeply about the people he works with, our users and our customers. When I moved to CYGNVS, he was the first person I wanted to bring with me and I'm glad I did because his influence on the product was invaluable." },
                    { initials: 'DF', color: '#0EA5E9', name: 'David Fox', role: 'Engineering Lead · CYGNVS', quote: 'Seán was a pleasure to work with at CYGNVS where he solved complex problems with engineering in mind always. He was a great collaborator on a number of big initiatives, and always made sure to listen to the room for ideas — not just taking orders from senior stakeholders.' },
                  ].map((t) => (
                    <div key={t.initials} className="rounded-2xl bg-gray-50/80 dark:bg-gray-700/40 border border-gray-200/60 dark:border-gray-600/40 p-5">
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-100 leading-relaxed font-lora font-medium">"{t.quote}"</p>
                      <div className="flex items-center gap-2.5 mt-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: t.color }}>{t.initials}</div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">{t.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workday */}
              <div className="space-y-4 pb-10 border-b border-gray-200/60 dark:border-gray-700/60 last:border-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                    <Image src="/about-hero/logo-workday.webp" alt="Workday" width={20} height={20} className="object-contain w-full h-full" />
                  </div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">Workday, Dublin</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Sr Associate UX Designer</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-100 whitespace-nowrap flex-shrink-0 font-lora">2019 – 2022</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed font-lora">
                  Hired as an intern, rehired as a graduate and then promoted to Senior Associate UX Designer. I led a scrum team across web and mobile on Workday's fastest selling product ever.
                </p>
                <ul className="space-y-3 text-base text-gray-600 dark:text-gray-100 font-lora">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1.5 flex-shrink-0">•</span>
                    <span>Designed and carried out research studies, built wireframes, prototypes and high fidelity product features within scrum teams that worked in an agile way delivering quality features to users.</span>
                  </li>
                </ul>

                {/* Testimonials — Workday */}
                <div className="mt-6 space-y-3">
                  {[
                    { initials: 'EH', color: '#1E3A8A', name: 'Eoghan Hickey', role: 'Design Lead · CYGNVS & Workday', quote: 'Seán is an exceptional product designer who is thoughtful, pragmatic, and clever. He takes feedback like a champ, cares about UX, and is able to get up to speed with technical conversations that could spin your head around.' },
                    { initials: 'RC', color: '#E65100', name: 'Robert Clarke', role: 'Senior Designer · Workday', quote: "Seán is a multi-talented designer — as adept at honing in on the details of an interaction design problem as he is at polishing high fidelity designs. A champion of research-informed design, I can't stress enough how having Seán on your team is a major step towards getting your product moving in the right direction." },
                  ].map((t) => (
                    <div key={t.initials} className="rounded-2xl bg-gray-50/80 dark:bg-gray-700/40 border border-gray-200/60 dark:border-gray-600/40 p-5">
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-100 leading-relaxed font-lora font-medium">"{t.quote}"</p>
                      <div className="flex items-center gap-2.5 mt-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: t.color }}>{t.initials}</div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">{t.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Education</h2>

            <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">BSc Product Design & Technology</h3>
                    <p className="text-base text-gray-600 dark:text-gray-100 font-lora">University of Limerick, Limerick</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-100 whitespace-nowrap flex-shrink-0 font-lora">2016 – 2020</span>
                </div>
            </div>
          </section>
          </div>
        </motion.div>

      </div>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden px-4 sm:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-accent-primary/10" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-gray-900 dark:text-gray-100">Contact</span>
            </h2>

            <div className="pt-2">
              <ContactCards />
            </div>

            {/* Copyright */}
            <div className="pt-12 text-sm text-gray-700 dark:text-gray-100 font-lora">
              © {new Date().getFullYear()} Seán Redington. All rights reserved.
            </div>

            {/* Back to Top */}
            <div className="pt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-700 dark:text-gray-300 hover:text-accent-primary transition-colors text-sm inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to top
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating scroll CTA */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
        animate={{ opacity: dismissed ? 0 : 1, pointerEvents: dismissed ? 'none' : 'auto' }}
        style={{
          opacity: scrollCTAOpacity,
          pointerEvents: scrollCTAPointerEvents as any,
        }}
      >
        <motion.button
          onClick={() => {
            setDismissed(true);
            const el = document.getElementById('cv-card');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="bg-white/80 dark:bg-gray-800/80 border border-white/60 dark:border-gray-700 shadow-2xl px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 cursor-pointer whitespace-nowrap"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Scroll to see experience</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.button>
      </motion.div>
    </main>
  );
}
