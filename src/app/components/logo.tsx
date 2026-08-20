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
import Image from 'next/image';
import { motion } from 'framer-motion';
import portfolioConfig from '@/app/config';

const Logo: React.FC = () => {
  const { logo } = portfolioConfig.navigation;
  const fullName = portfolioConfig.siteMetadata.author || logo.text;
  const [imageError, setImageError] = React.useState(false);
  const profileSrc = '/Profile.png';

  return (
    <motion.div
      className="group flex items-center cursor-pointer gap-3"
      whileHover={{ y: -1, transition: { duration: 0.2 } }}
    >
      {!imageError ? (
        <motion.div
          className="relative"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={profileSrc}
            alt={`${logo.text} profile`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-emerald-400/70 shadow-[0_10px_24px_rgba(0,0,0,0.5)]"
            onError={() => setImageError(true)}
          />
          <span className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-br from-emerald-400/40 to-blue-500/40 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
      ) : null}

      <motion.span
        className="text-[17px] font-semibold tracking-wide text-gray-100 px-3 py-1 rounded-full border border-emerald-400/40 bg-white/5"
        initial={{ y: 4, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        {fullName}
      </motion.span>
    </motion.div>
  );
};

export { Logo };
