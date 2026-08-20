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
      'Built an end-to-end Inertial Measurement Unit (IMU) time-series workflow with Extract, Transform, Load (ETL), outlier handling, and feature engineering to classify exercises at 99.25% accuracy on 929 test samples and count repetitions at 0.35 Mean Absolute Error (MAE), then delivered analytics through a Streamlit app with file upload, key performance indicators (KPIs), progress trends, and report export.',
    tags: ['Python', 'Scikit-learn', 'LightGBM', 'LSTM'],
    githubLink:
      'https://github.com/vardhan1515/Smart-Workout-Tracking-using-Machine-Learning',
    liveLink: 'https://smart-workout-tracking-using-machine-learning.streamlit.app',
    thumbnail: '/Project-1.png',
  },
  {
    id: 2,
    title: 'House Price Prediction Application',
    description:
      'Developed a reproducible house-price machine learning workflow using Pandas, NumPy, and scikit-learn preprocessing for imputation, encoding, scaling, and feature engineering, trained and optimized a LightGBM regressor for accurate inference, and deployed a Streamlit app with real-time prediction, visual analysis, and Joblib-based model serialization.',
    tags: ['Python', 'LightGBM', 'Streamlit'],
    githubLink: 'https://github.com/vardhan1515/House-Prediction',
    liveLink: 'https://house-predict.streamlit.app',
    thumbnail: '/Project-2.png',
  },
  {
    id: 3,
    title: 'Fly-Trend Hub - Airline Data Dashboard',
    description:
      'Built an interactive airline analytics dashboard in Streamlit with a SQLite-backed storage layer and a Pandas preprocessing pipeline for dataset merging, filtering, and aggregation, then created Plotly visualizations to analyze passenger demographics, flight status distribution, nationality-based travel patterns, and monthly departure trends.',
    tags: ['Python', 'SQLite', 'Streamlit', 'Plotly'],
    githubLink: 'https://github.com/vardhan1515/Fly-Trend-Hub',
    liveLink: 'https://fly-trend-app.streamlit.app',
    thumbnail: '/Project-3.png',
  },
  {
    id: 4,
    title: 'Automated Trade Data Processing and Aggregation',
    description:
      'Engineered an automated Structured Query Language (SQL) workflow for high-volume trade records covering ingestion, validation, data cleansing, and transformation, then implemented bulk insertion and aggregation logic to generate reliable reporting tables, reduce manual processing effort, and improve consistency in downstream analytics.',
    tags: ['SQL', 'MySQL'],
    githubLink: 'https://github.com/vardhan1515',
    thumbnail: '/Project-4.png',
  },
  {
    id: 5,
    title: 'FIFA 21 Player Analytics: Exploring Attributes, Potential, and Market Value',
    description:
      'Performed end-to-end exploratory data analysis (EDA) on FIFA 2021 player data using Pandas and NumPy, built a preprocessing workflow for missing-value handling and attribute standardization, and produced Matplotlib, Seaborn, and Plotly insights on player performance, age distribution, market value, and country-level trends.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
    githubLink: 'https://github.com/vardhan1515/FIFA-2021-Data-Analysis',
    thumbnail: '/Project-5.png',
  },
  {
    id: 6,
    title: 'Software Industry Revealed: An EDA of Stack Overflow Survey Data 2022',
    description:
      'Analyzed 73K+ Stack Overflow 2022 responses with Pandas, engineered multi-select fields using one-hot encoding, and built Matplotlib and Seaborn analyses to uncover developer demographics, technology adoption patterns, and worked-versus-wanted gaps across languages and cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubLink: 'https://github.com/vardhan1515/EDA-of-Stack-Overflow-Survey-Data-2022',
    thumbnail: '/Project-6.png',
  },
  {
    id: 7,
    title: 'E-commerce Revenue & Retention Analysis',
    description:
      'Analyzed e-commerce transactions with SQL Server, Python, and Power BI to uncover a 3.12% repeat-customer rate and approximately $97K in revenue lost to cancellations, then built RFM customer segments, cohort retention analysis, and interactive dashboards to identify high-value, at-risk, and re-engagement opportunities.',
    tags: ['SQL Server', 'Power BI', 'Python', 'Pandas', 'DAX'],
    githubLink: 'https://github.com/vardhan1515',
    thumbnail: '/Project-7.jpg',
  },
];
