/*
 * Copyright 2025 Praveen Kumar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/app/config';
import { isMinimal } from '@/app/utils';
import { StackedExperience } from '@/app/components/stacked-experience';
import { GraduationCap, Sparkles } from 'lucide-react';

const About = () => {
  const config = portfolioConfig.sections.about;

  const itemVariants = isMinimal
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      };

  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-title">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute -left-20 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-white font-display"
          >
            {config.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {config.subtitle}
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main content area */}
        <div className="space-y-8">
          {/* Summary + Education side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, rotate: 0.2 }}
            >
              <div className="group relative rounded-[28px] border border-transparent p-[2px] h-full">
                <span className="pointer-events-none absolute inset-0 rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.35),rgba(59,130,246,0.25),rgba(34,211,238,0.25),rgba(16,185,129,0.35))] opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.18),transparent_50%)]" />
                <div className="relative rounded-[26px] bg-gradient-to-b from-gray-900/80 via-gray-900/55 to-gray-950/70 p-7 h-full border border-emerald-500/15 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.6)]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-200 text-xs font-semibold tracking-wide uppercase">
                    <Sparkles className="h-4 w-4 text-emerald-300" />
                    Signature Summary
                  </div>

                  <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white font-display">
                    <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      Summary
                    </span>
                  </h3>

                  <div className="mt-4 space-y-4">
                    {config.summary.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-200/90 leading-relaxed text-[16px] md:text-[17px] text-justify"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -6, rotate: -0.3 }}
              className="group relative rounded-[28px] border border-transparent p-[2px] h-full"
            >
              <span className="pointer-events-none absolute inset-0 rounded-[28px] bg-[conic-gradient(from_210deg_at_50%_50%,rgba(251,191,36,0.35),rgba(244,63,94,0.3),rgba(217,70,239,0.25),rgba(251,191,36,0.35))] opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_85%_15%,rgba(251,191,36,0.22),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(244,63,94,0.2),transparent_50%),radial-gradient(circle_at_60%_50%,rgba(217,70,239,0.18),transparent_55%)]" />
              <div className="relative rounded-[26px] bg-gradient-to-b from-gray-900/80 via-gray-900/55 to-gray-950/70 p-7 h-full border border-amber-400/20 shadow-[0_20px_60px_-30px_rgba(244,63,94,0.55)]">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-500/10 px-3 py-1 text-amber-200 text-xs font-semibold tracking-wide uppercase">
                  <GraduationCap className="h-4 w-4 text-amber-300" />
                  Academic Core
                </div>

                <h4 className="mt-4 text-2xl md:text-3xl font-semibold text-white font-display">
                  <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-fuchsia-400 bg-clip-text text-transparent">
                    Education
                  </span>
                </h4>
                <div className="mt-4 space-y-4">
                  {config.education.map((item, index) => (
                    <div
                      key={index}
                      className="text-base text-gray-200 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:border-amber-300/30 hover:bg-white/10"
                    >
                      <div className="text-white font-semibold">{item.institution}</div>
                      <div className="text-gray-200">{item.degree}</div>
                      <div className="text-gray-400">{item.gpa}</div>
                      <div className="text-gray-400">
                        {item.dates} | {item.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience below */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h4 className="text-2xl md:text-3xl font-semibold text-white mb-5 font-display">
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h4>
            <StackedExperience
              className="mt-12"
              items={config.experience.map(item => ({
                id: item.company,
                role: item.role,
                company: item.company,
                dates: item.dates,
                description: item.highlights.join(' '),
                logo: item.logo,
              }))}
            />
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          #about .group {
            animation: floatGlow 10s ease-in-out infinite;
          }
        }

        @keyframes floatGlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
};

export { About };
