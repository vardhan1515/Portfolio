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

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/app/config';
import { isMinimal } from '@/app/utils';
import {
  SiPython,
  SiMysql,
  SiR,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiStreamlit,
  SiSqlite,
  SiPycharm,
  SiJupyter,
  SiRstudioide,
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import {
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaFileExcel,
  FaFilePowerpoint,
  FaBolt,
  FaDatabase,
} from 'react-icons/fa6';

const CategoryIcons = {
  Languages: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M4 5h16M4 12h16M4 19h10" stroke="#60a5fa"></path>
      <path d="M8 5v14" stroke="#60a5fa"></path>
    </svg>
  ),
  Frameworks: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <circle cx="12" cy="12" r="9" stroke="#4ade80"></circle>
      <path d="M12 3v18M3 12h18" stroke="#4ade80"></path>
    </svg>
  ),
  Tools: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path
        d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-3-3 3-3z"
        stroke="#f59e0b"
      ></path>
    </svg>
  ),
  Platforms: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="#a78bfa"></rect>
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="#a78bfa"></rect>
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="#a78bfa"></rect>
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="#a78bfa"></rect>
    </svg>
  ),
  Frontend: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#60a5fa"></rect>
      <line x1="9" y1="3" x2="9" y2="21" stroke="#60a5fa"></line>
    </svg>
  ),
  Backend: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="#4ade80"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="#4ade80"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6" stroke="#4ade80"></line>
      <line x1="6" y1="18" x2="6.01" y2="18" stroke="#4ade80"></line>
    </svg>
  ),
  Mobile: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#f472b6"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="#f472b6"></line>
    </svg>
  ),
  DevOps: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
      <line
        x1="16.5"
        y1="9.4"
        x2="7.5"
        y2="4.21"
        stroke="#326ce5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        stroke="#326ce5"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(9.6,9.6) scale(0.6)">
        <circle cx="4" cy="4" r="1.5" fill="#326ce5" />
        <path
          d="M4 0v1M4 7v1M7 4h1M0 4h1M6.12 1.88l.7.7M1.88 6.12l.7.7M6.12 6.12l-.7.7M1.88 1.88l-.7.7"
          stroke="#326ce5"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),
  Database: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#a78bfa"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#a78bfa"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#a78bfa"></path>
    </svg>
  ),
  Design: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M12 2l9 4v12l-9 4-9-4V6l9-4z" stroke="#f59e0b"></path>
      <path d="M3.5 7.5L12 12l8.5-4.5" stroke="#f59e0b"></path>
      <path d="M12 12v9" stroke="#f59e0b"></path>
      <circle cx="8" cy="9" r="1" stroke="#f59e0b" fill="#f59e0b"></circle>
      <circle cx="16" cy="9" r="1" stroke="#f59e0b" fill="#f59e0b"></circle>
    </svg>
  ),
  'Analytics Methods': () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22d3ee"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M3 20h18" />
      <path d="M5 16l4-5 4 3 6-8" />
      <circle cx="5" cy="16" r="1" fill="#22d3ee" />
      <circle cx="9" cy="11" r="1" fill="#22d3ee" />
      <circle cx="13" cy="14" r="1" fill="#22d3ee" />
      <circle cx="19" cy="6" r="1" fill="#22d3ee" />
    </svg>
  ),
  Default: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path
        d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
        stroke="#ff9580"
      ></path>
    </svg>
  ),
};

const Skills: React.FC = () => {
  const config = portfolioConfig.sections.skills;
  const skills = config.categories;
  const sectionVariants = isMinimal
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  const getCategoryIcon = (category: string) => {
    const Icon = CategoryIcons[category as keyof typeof CategoryIcons] || CategoryIcons.Default;
    return <Icon />;
  };

  const skillIcons: Record<string, React.ReactNode> = {
    Python: <SiPython />,
    SQL: <SiMysql />,
    MySQL: <SiMysql />,
    'SQL Server': <FaDatabase />,
    R: <SiR />,
    DAX: <FaChartBar />,
    LightGBM: <FaChartLine />,
    'Scikit-learn': <SiScikitlearn />,
    Pandas: <SiPandas />,
    NumPy: <SiNumpy />,
    Matplotlib: <FaChartArea />,
    Seaborn: <FaChartArea />,
    Plotly: <SiPlotly />,
    Streamlit: <SiStreamlit />,
    Excel: <FaFileExcel />,
    'Power BI': <FaChartBar />,
    PowerPoint: <FaFilePowerpoint />,
    SQLite: <SiSqlite />,
    PyCharm: <SiPycharm />,
    Jupyter: <SiJupyter />,
    'Visual Studio Code': <BiLogoVisualStudio />,
    RStudio: <SiRstudioide />,
    'Time-Series Analysis': <FaChartLine />,
    'Statistical Analysis': <FaChartArea />,
    'ETL / Data Pipelines': <FaDatabase />,
    'RFM & Cohort Analysis': <FaChartBar />,
    'Energy Market Analytics': <FaBolt />,
  };

  const generateShadowStyle = (color: string) => {
    const rgbColor =
      color
        .replace('#', '')
        .match(/.{2}/g)
        ?.map((hex: string) => parseInt(hex, 16))
        .join(', ') || '0, 0, 0';

    return {
      borderColor: `${color}55`,
      backgroundColor: `rgba(${rgbColor}, 0.14)`,
      boxShadow: `0 8px 18px -10px rgba(${rgbColor}, 0.8), 0 0 0 1px rgba(${rgbColor}, 0.22)`,
    };
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="pointer-events-none absolute inset-0 opacity-35 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={isMinimal ? {} : { opacity: 0, y: 20 }}
          whileInView={isMinimal ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
            {config.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {config.subtitle}
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-[16.5px] md:text-[17.5px]">
            {config.description}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {skills.map((skillGroup, index) => {
            const accent = skillGroup.technologies[0]?.color ?? '#34d399';
            return (
            <motion.div
              key={skillGroup.category}
              initial={sectionVariants.initial}
              whileInView={sectionVariants.animate}
              transition={isMinimal ? {} : { duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/50 transition-all duration-300 shadow-lg overflow-hidden"
              style={{
                borderColor: `${accent}30`,
                boxShadow: `0 10px 30px -18px ${accent}55`,
              }}
            >
              <span className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/20 blur-2xl opacity-70" />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-500 to-fuchsia-500 opacity-60" />
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_55%)]" />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="h-10 w-10 rounded-xl border border-emerald-500/30 bg-gray-950/60 flex items-center justify-center"
                    style={{ boxShadow: `0 0 18px ${accent}55` }}
                  >
                    {getCategoryIcon(skillGroup.category)}
                  </span>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-white tracking-wide">
                      {skillGroup.category}
                    </div>
                    <div className="mt-1 h-1 w-full rounded-full bg-gradient-to-r from-emerald-400/80 via-blue-400/40 to-transparent" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map(tech => (
                    <div
                      key={tech.name}
                      className="group inline-flex items-center gap-2 rounded-full border border-gray-700/60 bg-gray-900/70 px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_24px_rgba(16,185,129,0.25)]"
                      style={generateShadowStyle(tech.color)}
                    >
                      <span
                        className="h-7 w-7 rounded-full flex items-center justify-center text-base ring-1 ring-white/15"
                        style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#ffffff' }}
                      >
                        <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]">
                          {skillIcons[tech.name] ?? '●'}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-gray-100">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Skills };
