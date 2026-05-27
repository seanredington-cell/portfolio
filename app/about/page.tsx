"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Background from "@/components/Background";

/**
 * About Page
 *
 * Contains a hero section with Download CV CTA and CV content below
 */
export default function About() {
  const [dismissed, setDismissed] = React.useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <main className="min-h-screen pt-24 sm:pt-28 relative z-0">
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

      {/* Cards Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700 p-8 sm:p-12"
          style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}
        >
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden">
                <Image
                  src="/about-hero/headshot-image.png"
                  alt="Seán Redington"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Bio Text */}
            <div className="flex-1 space-y-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Seán Redington</h1>
              <div className="space-y-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>I'm Seán, a designer who's spent over six years building digital products across Fortune 500 companies and startups. My most recent role was as Head of Product & Design at Getmee AI, an AI-powered platform helping migrants and non-English speakers build the skills they need to get hired.</p>
                <p>Having studied Industrial Design in university, I was fortunate enough to get a UX internship at Workday. This introduced me to some incredible people and opened my eyes to the world of UX design. After returning to Workday as a grad and earning a promotion, I moved to CYGNVS, a cybersecurity startup. There, I led design work across web and native mobile apps.</p>
                <p>I moved to Australia in 2024, and freelanced as a web designer within the charity space before accepting an offer for a full-time role at Getmee AI, a startup with a genuine mission, and the space to shape both the product and the team. At Getmee, I led product strategy, and built the systems that scaled the platform from 20,000 to 40,000 users across 15+ white-label apps.</p>
                <p>I work best when I'm close to the problem, talking to users, sitting with the engineering team, or challenging assumptions with stakeholders.</p>
                <p>I'm looking for my next role in a product team that's passionate about solving user problems and doesn't view design as a silo that churns out screens, but instead as a core backbone to a successful product and team.</p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* CV Card */}
        <motion.div
          id="cv-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700 p-8 sm:p-12"
          style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}
        >
          <div className="space-y-12 leading-relaxed">
          {/* Experience Section */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Experience</h2>
              <motion.a
                href="/SEAN_REDINGTON_CV_2026.pdf"
                download
                className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 text-sm"
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
              <div className="space-y-5 pb-8 border-b border-gray-200/60 dark:border-gray-700/60 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                              <Image src="/about-hero/logo-getmee.png" alt="Getmee AI" width={20} height={20} className="object-contain w-full h-full" />
                            </div>
                            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-400">Getmee AI, Melbourne</p>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Head of Product & Design</h3>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm bg-blue-100 text-blue-800">
                            CONTRACT
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">May 2025 - Aug 2026</span>
                        </div>
                      </div>

                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Led the product strategy and design across 15+ white-label apps, doubling the userbase to 40,000 users as the sole-designer with a 12-person engineering team.
                      </p>

                      <ul className="space-y-3.5 text-base text-gray-600 dark:text-gray-400">
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
                  </div>
                </div>

              {/* Marlin Communications */}
              <div className="space-y-5 pb-8 border-b border-gray-200/60 dark:border-gray-700/60 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                              <Image src="/about-hero/logo-marlin.png" alt="Marlin Communications" width={20} height={20} className="object-contain w-full h-full" />
                            </div>
                            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-400">Marlin Communications, Melbourne</p>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">UX/UI Designer</h3>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm bg-blue-100 text-blue-800">
                            CONTRACT
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Jan 2025 - Jun 2025</span>
                        </div>
                      </div>

                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        Led UX research and design of a number of high traffic websites within the charity space, ensuring user's goals were at the heart of all decision making.
                      </p>
                    </div>
                  </div>
                </div>

              {/* CYGNVS */}
              <div className="space-y-5 pb-8 border-b border-gray-200/60 dark:border-gray-700/60 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                              <Image src="/about-hero/logo-cygnvs.png" alt="CYGNVS" width={20} height={20} className="object-contain w-full h-full" />
                            </div>
                            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-400">CYGNVS, Dublin</p>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">UX Designer</h3>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Mar 2022 - May 2024</span>
                      </div>

                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        As a Lead Designer across multiple teams I played a key role in growing the user base by over 300%, creating high quality, security conscious features in a start-up within the Cyber Security space.
                      </p>

                      <ul className="space-y-3.5 text-base text-gray-600 dark:text-gray-400">
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
                    </div>
                  </div>
                </div>

              {/* Workday */}
              <div className="space-y-5 pb-8 border-b border-gray-200/60 dark:border-gray-700/60 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                              <Image src="/about-hero/logo-workday.png" alt="Workday" width={20} height={20} className="object-contain w-full h-full" />
                            </div>
                            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-400">Workday, Dublin</p>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Sr Associate UX Designer</h3>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Jan 2019 - Aug 2019 | Sep 2020 - Mar 2022</span>
                      </div>

                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Hired as an intern, rehired as a graduate and then promoted to Senior Associate UX Designer. I led a scrum team across web and mobile on Workday's fastest selling product ever.
                      </p>

                      <ul className="space-y-3.5 text-base text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-3">
                          <span className="text-orange-500 mt-1.5 flex-shrink-0">•</span>
                          <span>Designed and carried out research studies, built wireframes, prototypes and high fidelity product features within scrum teams that worked in an agile way delivering quality features to users.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Education</h2>

            <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">BSc Product Design & Technology</h3>
                        <p className="text-base text-gray-600 dark:text-gray-400">University of Limerick, Limerick</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">Sep 2016 - May 2020</span>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          </div>
        </motion.div>

      </div>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden px-4 sm:px-8">
        {/* Background accent */}
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
              <span className="text-gray-900 dark:text-gray-100">Get in touch</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>

            <div className="pt-2 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
              {/* Email Card */}
              <motion.a
                href="mailto:seanredington@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
            <div className="pt-12 text-sm text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} Seán Redington. All rights reserved.
            </div>

            {/* Back to Top */}
            <div className="pt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-700 dark:text-gray-300 hover:text-accent-primary transition-colors text-sm inline-flex items-center gap-2"
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

      {/* Floating scroll CTA — fixed bottom-centre, fades on scroll or click */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.05, 0.12], dismissed ? [0, 0, 0] : [1, 0.5, 0]),
          pointerEvents: useTransform(scrollYProgress, (v) => (!dismissed && v < 0.12 ? 'auto' : 'none')) as any,
        }}
      >
        <motion.button
          onClick={() => {
            setDismissed(true);
            const el = document.getElementById('cv-card');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/60 dark:border-gray-700 shadow-2xl px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer whitespace-nowrap"
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
