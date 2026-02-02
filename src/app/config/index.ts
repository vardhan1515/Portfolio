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
      { href: 'about', label: 'Resume' },
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
        'Machine Learning',
        'Analytics & Visualization',
      ],
      description:
        'Data science graduate student at SUNY Buffalo with hands-on experience in predictive maintenance, analytics, and dashboarding.',
      scrollIndicatorText: 'Scroll to view my resume',
    },

    about: {
      title: 'Resume',
      subtitle: 'Overview',
      summary: [
        'Data science graduate student at the University at Buffalo with experience in predictive maintenance, analytics, and visualization.',
        'Comfortable with Python, SQL, and time-series modeling, plus clear stakeholder communication and cross-functional collaboration.',
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
          company: 'Machinery Monitoring Systems, LLC',
          role: 'Data Engineer (Intern)',
          dates: 'Aug 2025 - Dec 2025',
          highlights: [
            'Built a real-time predictive maintenance fault detection system for rotating machinery using tri-axial vibration sensing.',
            'Prepared and labeled 21,000+ vibration samples across four classes and standardized time-series preprocessing.',
            'Trained MiniRocket + Ridge Classifier to 99.96% accuracy with a ~1.7 MB deployable model.',
          ],
        },
        {
          company: 'Accenture Data Analytics and Visualization Job Simulation',
          role: 'Data Analyst (Intern)',
          dates: 'Oct 2023',
          highlights: [
            'Analyzed seven datasets to identify content trends and inform strategic recommendations.',
            'Built a PowerPoint deck and presentation to communicate insights to stakeholders.',
          ],
        },
        {
          company: 'PwC Switzerland Power BI Job Simulation',
          role: 'Power BI Analyst',
          dates: 'Sep 2023',
          highlights: [
            'Built dashboards for executive reporting and investigated drivers of gender balance trends.',
          ],
        },
        {
          company: 'KPMG Data Analytics Consulting Virtual Internship',
          role: 'Data Analyst (Intern)',
          dates: 'Aug 2023',
          highlights: [
            'Performed data quality assessments and produced actionable insights for decision making.',
            'Synthesized findings into concise presentations for leadership review.',
          ],
        },
      ],
      certifications: [
        'Python Programming - Internshala',
        'Machine Learning & Artificial Intelligence - PrepInsta',
        'Power BI & Business Intelligence - PrepInsta',
        'Data Science - PrepInsta',
        'Statistics - PrepInsta',
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
