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

import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Workout Tracking using Machine Learning',
    description:
      'End-to-end system for strength-training exercise recognition and repetition counting using wearable sensor data.',
    tags: ['Python', 'Scikit-learn', 'LightGBM', 'LSTM'],
    githubLink:
      'https://github.com/vardhan1515/Smart-Workout-Tracking-using-Machine-Learning',
    liveLink: 'https://smart-workout-tracking-using-machine-learning.streamlit.app',
    type: 'Machine Learning',
    thumbnail: '/Project-1.png',
  },
  {
    id: 2,
    title: 'House Price Prediction Application',
    description:
      'LightGBM model with feature engineering and a Streamlit dashboard for real-time price prediction.',
    tags: ['Python', 'LightGBM', 'Streamlit'],
    githubLink: 'https://github.com/vardhan1515/House-Prediction',
    liveLink: 'https://house-predict.streamlit.app',
    type: 'Web App',
    thumbnail: '/Project-2.png',
  },
  {
    id: 3,
    title: 'Fly-Trend Hub - Airline Data Dashboard',
    description:
      'Interactive Streamlit dashboard for airline trends with SQLite-backed analytics and Plotly visuals.',
    tags: ['Python', 'SQLite', 'Streamlit', 'Plotly'],
    githubLink: 'https://github.com/vardhan1515/Fly-Trend-Hub',
    liveLink: 'https://fly-trend-app.streamlit.app',
    type: 'Dashboard',
    thumbnail: '/Project-3.png',
  },
  {
    id: 4,
    title: 'Automated Trade Data Processing and Aggregation',
    description:
      'SQL automation for bulk insertion, aggregation, and data cleansing in trading records.',
    tags: ['SQL', 'MySQL'],
    githubLink: 'https://github.com/vardhan1515',
    type: 'Data Engineering',
    thumbnail: '/Project-4.png',
  },
  {
    id: 5,
    title: 'FIFA 21 Player Analytics: Exploring Attributes, Potential, and Market Value',
    description:
      'Performed EDA and preprocessing on FIFA 2021 player data, then built visual analytics for player comparisons, age distributions, and country-wise trends.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
    githubLink: 'https://github.com/vardhan1515/FIFA-2021-Data-Analysis',
    type: 'Data Analytics',
    thumbnail: '/Project-5.png',
  },
  {
    id: 6,
    title: 'Software Industry Revealed: An EDA of Stack Overflow Survey Data 2022',
    description:
      'Analyzed 73K+ Stack Overflow 2022 survey responses, cleaned multi-select fields with one-hot encoding, and visualized developer demographics, tech preferences, and worked-vs-wanted gaps across languages and cloud platforms.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubLink: 'https://github.com/vardhan1515/EDA-of-Stack-Overflow-Survey-Data-2022',
    type: 'Data Analytics',
    thumbnail: '/Project-6.png',
  },
];
