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
          company: 'Machinery Monitoring Systems, LLC',
          role: 'Data Engineer Intern',
          dates: 'Aug 2025 - Dec 2025',
          logo: '/MMS_logo.jpg',
          highlights: [
            'Built a real-time predictive maintenance and fault detection system for rotating machinery using tri-axial vibration sensor data.',
            'Performed large-scale time-series data labeling and preprocessing, including filtering, normalization, and dataset preparation for training and testing.',
            'Trained and evaluated machine-learning models with MiniRocket and a Ridge Classifier, optimizing for accuracy and model size.',
            'Delivered a 99.96% accurate, lightweight, deployable solution balancing performance, efficiency, and production readiness.',
          ],
        },
        {
          company: 'Accenture',
          role: 'Data Analytics & Visualization Intern (Simulation)',
          dates: 'Oct 2023',
          logo: '/Accenture_logo.png',
          highlights: [
            'Cleaned, modeled, and analyzed multiple datasets to identify trends in content performance and user engagement.',
            'Applied exploratory data analysis, data transformation, and insight generation to support strategic recommendations.',
            'Communicated findings through structured PowerPoint storytelling and a recorded walkthrough focused on stakeholder alignment.',
          ],
        },
        {
          company: 'PwC Switzerland',
          role: 'Power BI Analyst (Simulation)',
          dates: 'Sep 2023',
          logo: '/pwc_switzerland_logo.jpg',
          highlights: [
            'Designed interactive Power BI dashboards using data modeling, DAX measures, and visual analytics best practices.',
            'Investigated root causes behind executive-level gender balance challenges and translated results into actionable insights.',
          ],
        },
        {
          company: 'KPMG',
          role: 'Data Analytics Consulting Intern (Simulation)',
          dates: 'Aug 2023',
          logo: '/Kpmg_logo.jpg',
          highlights: [
            'Performed data quality assessments, validation checks, and structured analysis on complex datasets.',
            'Extracted actionable insights using SQL-style logic and analytical reasoning and summarized them for business decisions.',
          ],
        },
      ],
      certifications: [],
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
