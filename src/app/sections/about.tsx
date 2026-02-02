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
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-white">
            {config.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {config.subtitle}
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main content area - 50/50 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-xl h-full relative overflow-hidden">
              <h3 className="text-2xl font-semibold text-white mb-6 relative">Summary</h3>

              {/* Bio paragraphs */}
              <div className="space-y-4 relative">
                {config.summary.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Resume details */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative group hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="p-6 relative">
                <h4 className="text-lg font-semibold text-white mb-4">Education</h4>
                <div className="space-y-4">
                  {config.education.map((item, index) => (
                    <div key={index} className="text-sm text-gray-300">
                      <div className="text-white font-medium">{item.institution}</div>
                      <div>{item.degree}</div>
                      <div className="text-gray-400">{item.gpa}</div>
                      <div className="text-gray-400">
                        {item.dates} | {item.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative group hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="p-6 relative">
                <h4 className="text-lg font-semibold text-white mb-4">Experience</h4>
                <div className="space-y-5">
                  {config.experience.map((item, index) => (
                    <div key={index} className="text-sm text-gray-300">
                      <div className="text-white font-medium">{item.company}</div>
                      <div className="text-gray-300">{item.role}</div>
                      <div className="text-gray-400">{item.dates}</div>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-300">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative group hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="p-6 relative">
                <h4 className="text-lg font-semibold text-white mb-4">Certificates</h4>
                <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {config.certifications.map((certification, index) => (
                    <li key={index}>{certification}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
