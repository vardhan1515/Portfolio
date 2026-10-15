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

import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { projects } from '@/app/config/projects';
import { skills } from '@/app/config/skills';

/**
 * Default portfolio configuration
 * Edit this file to customize your portfolio
 */
export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Vardhan Burande',
    description: 'Data science and analytics portfolio',
    author: 'Vardhan Burande',
  },

  navigation: {
    logo: {
      text: 'VB',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Vardhan Burande',
      typingTexts: [
        'Data Engineering',
        'Energy Market Analytics',
        'Machine Learning',
        'Analytics & Visualization',
      ],
      description:
        'Dedicated to bridging the gap between raw data and real-world applications by building intuitive, scalable solutions that transform information into intelligence.',
      scrollIndicatorText: 'Scroll to explore my work',
    },

    about: {
      title: 'About',
      subtitle: 'Overview',
      summary: [
        'Data science graduate student at the University at Buffalo, driven by curious questions, stubborn datasets, and systems that quietly do the right thing. My work spans data analysis, machine learning, and analytics engineering, using Python, SQL, and modern ML tools to turn raw data into models, insights, and interactive visualizations.',
        'I enjoy taking problems end to end, from messy inputs, data cleaning, and feature engineering to predictive modeling, dashboards, and clear communication. The goal is always the same: build solutions that are accurate, scalable, interpretable, and genuinely useful in the real world.',
      ],
      education: [
        {
          institution: 'State University of New York at Buffalo',
          degree: 'Masters of Professional Studies in Data Science and Applications',
          gpa: 'GPA: 3.93/4.0',
          dates: 'Aug 2024 - Dec 2025',
          location: 'Buffalo, USA',
        },
        {
          institution: 'S.I.E.S Graduate School of Technology, Nerul',
          degree: 'Mechanical Engineering',
          gpa: 'GPA: 3.81/4.0',
          dates: 'Aug 2019 - May 2023',
          location: 'Nerul, India',
        },
      ],
      experience: [
        {
          company: 'University at Buffalo',
          role: 'Research Assistant – Electricity Market Analytics & Data Engineering',
          dates: 'March 2026 – Present',
          highlights: [
            'Analyzed three years (2023–2025) of NYISO day-ahead and real-time electricity market data across 232 generator nodes and all 11 NYISO zones, investigating locational pricing (LBMP), congestion, and price spikes.',
            'Developed Python workflows for hourly data cleaning, generator-to-node mapping, weather alignment, and feature preparation, producing a matched dataset of approximately 6.1 million node-hours.',
            'Applied statistical analysis, seasonal comparisons, and Principal Component Analysis (PCA) to identify market patterns and geographic relationships, finding distance correlations of 0.608 statewide and 0.811 on Long Island.',
            'Collaborated with faculty and PhD researchers on analytical workflows, data visualization, and technical presentations to communicate research findings.',
          ],
        },
        {
          company: 'Machinery Monitoring Systems, LLC',
          role: 'Data Engineer Intern',
          dates: 'August 2025 – January 2026',
          logo: '/MMS_logo.jpg',
          highlights: [
            'Supported a predictive maintenance pipeline using tri-axial vibration signals to classify equipment conditions in rotating machinery.',
            'Processed, cleaned, and validated 21,000+ labeled time-series windows across four equipment conditions: Normal, Bearing Fault, Misalignment, and Imbalance.',
            'Performed signal filtering, normalization, and data-quality checks to prepare reliable datasets for machine learning training and evaluation.',
            'Supported MiniRocket feature extraction and Ridge classification, contributing to a model that achieved 99.96% test accuracy on a controlled dataset.',
            'Helped package the trained model into an approximately 1.7 MB artifact for efficient CPU-based inference and potential edge deployment.',
          ],
        },
      ],
    },

    projects: {
      title: 'Selected',
      subtitle: 'Projects',
      description:
        'Projects spanning machine learning, data engineering, and analytics dashboards.',
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/vardhan1515',
      },
    },

    skills: {
      title: 'Skills',
      subtitle: 'Summary',
      description:
        'Core languages, frameworks, and tools used for data analysis, modeling, and visualization.',
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description: 'Reach out for collaboration, internships, or data-focused roles.',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Vardhan Burande. All rights reserved.`,
    tagline: 'Built with focus on data, insight, and impact.',
  },
};

export default portfolioConfig;
