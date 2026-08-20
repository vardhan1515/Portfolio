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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface ExperienceCard {
  id: string;
  role: string;
  company: string;
  dates: string;
  location?: string;
  description: string;
  logo?: string;
}

interface StackedExperienceProps {
  items: ExperienceCard[];
  className?: string;
}

const StackedExperience: React.FC<StackedExperienceProps> = ({ items, className }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const carRef = React.useRef<HTMLDivElement | null>(null);
  const carGlowRef = React.useRef<HTMLSpanElement | null>(null);
  const carDirRef = React.useRef<'down' | 'up'>('down');

  const getInitials = (value: string) =>
    value
      .split(' ')
      .filter(Boolean)
      .map(part => part[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();

  const buildBullets = (text: string) => {
    const primary = text
      .split(/(?:\r?\n|•)/)
      .map(part => part.trim())
      .filter(Boolean);

    if (primary.length > 1) {
      return primary;
    }

    return text
      .split(/\. (?=[A-Z])/)
      .map(part => part.trim().replace(/\.$/, ''))
      .filter(Boolean);
  };

  React.useLayoutEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-exp-card]');
      const containerEl = containerRef.current;
      const carEl = carRef.current;

      cards.forEach(card => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 45%',
              scrub: true,
            },
          },
        );
      });

      if (containerEl && carEl) {
        const containerHeight = containerEl.offsetHeight;
        const carHeight = carEl.offsetHeight;
        const travel = Math.max(0, containerHeight - 16 - carHeight);

        gsap.set(carEl, { y: 0, rotate: 0 });
        gsap.to(carEl, {
          y: travel,
          ease: 'none',
          scrollTrigger: {
            trigger: containerEl,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            onUpdate: self => {
              const glowEl = carGlowRef.current;
              if (!glowEl) return;
              const velocity = Math.abs(self.getVelocity());
              const intensity = gsap.utils.clamp(0.15, 1, velocity / 1500);
              gsap.set(glowEl, { opacity: intensity, scale: 0.9 + intensity * 0.6 });
              const rawVelocity = self.getVelocity();
              const nextDir = rawVelocity < -40 ? 'up' : rawVelocity > 40 ? 'down' : carDirRef.current;
              if (nextDir !== carDirRef.current) {
                carDirRef.current = nextDir;
                gsap.to(carEl, { rotate: nextDir === 'up' ? 180 : 0, duration: 0.25, ease: 'power2.out' });
              }
            },
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className ?? ''}`}>
      <div className="absolute left-1/2 top-2 bottom-2 hidden w-10 -translate-x-1/2 rounded-[999px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 shadow-[0_0_22px_rgba(0,0,0,0.6)] lg:block">
        <div className="absolute inset-0 rounded-[999px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)] opacity-60" />
        <div className="absolute inset-y-2 left-1/2 w-[3px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_12%,transparent_12%,transparent_24%,rgba(255,255,255,0.9)_24%,rgba(255,255,255,0.9)_36%,transparent_36%,transparent_48%,rgba(255,255,255,0.9)_48%,rgba(255,255,255,0.9)_60%,transparent_60%,transparent_72%,rgba(255,255,255,0.9)_72%,rgba(255,255,255,0.9)_84%,transparent_84%,transparent_100%)] opacity-80" />
        <div className="absolute inset-y-1 left-1 w-[2px] rounded-full bg-gradient-to-b from-amber-200/70 via-amber-100/20 to-amber-200/70 opacity-60" />
        <div className="absolute inset-y-1 right-1 w-[2px] rounded-full bg-gradient-to-b from-amber-200/70 via-amber-100/20 to-amber-200/70 opacity-60" />
        <div className="absolute inset-0 rounded-[999px] ring-1 ring-white/10" />
        <div className="absolute inset-0 rounded-[999px] ring-1 ring-white/5 blur-[1px]" />
      </div>
      <div
        ref={carRef}
        className="pointer-events-none absolute left-1/2 top-2 hidden -translate-x-1/2 z-20 lg:block isolate"
      >
        <span
          ref={carGlowRef}
          className="absolute right-0 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-amber-300/70 blur-xl opacity-40 transition-opacity"
        />
        <Image
          src="/car.png"
          alt="Car"
          width={128}
          height={96}
          className="h-[96px] w-[128px] object-contain mix-blend-multiply drop-shadow-[0_0_16px_rgba(16,185,129,0.6)]"
        />
      </div>
      <div className="space-y-10 lg:space-y-0">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                index > 0 ? 'lg:-mt-14' : ''
              }`}
            >
              <div className={`${isLeft ? 'lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
                <div className="relative h-full pt-4">
                  <div
                    data-exp-card
                    className="group relative z-10 overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-900/80 p-6 shadow-xl backdrop-blur-sm"
                  >
                    <div
                      className={`pointer-events-none absolute top-6 hidden -translate-y-1/2 lg:block ${
                        isLeft ? '-right-12' : '-left-12'
                      }`}
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400/50 via-blue-500/35 to-fuchsia-500/35 blur-md" />
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-gray-900/90 shadow-[0_0_18px_rgba(16,185,129,0.6)]">
                          {item.logo ? (
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              width={28}
                              height={28}
                              className="h-7 w-7 rounded-md bg-white p-1 object-contain"
                              style={{ filter: 'contrast(1.2) saturate(1.15)' }}
                            />
                          ) : (
                            <span className="text-[11px] font-semibold tracking-[0.2em] text-emerald-200">
                              {getInitials(item.company)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-500 to-fuchsia-500" />
                    <span className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-400/20 to-fuchsia-500/20 blur-2xl" />

                      <div className="flex items-center gap-4">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`${item.company} logo`}
                            width={64}
                            height={64}
                            className="h-16 w-16 rounded-xl bg-white p-2.5 shadow-md ring-1 ring-white/70 object-contain"
                            style={{ filter: 'contrast(1.25) saturate(1.2)' }}
                          />
                        ) : null}
                        <div>
                          <div className="text-white font-display text-xl md:text-2xl tracking-wide">
                            {item.role}
                          </div>
                          <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 font-semibold text-lg md:text-xl">
                            {item.company}
                          </div>
                          <div className="text-gray-400 text-[14px] uppercase tracking-[0.2em] font-mono">
                            {item.dates}
                            {item.location ? ` · ${item.location}` : ''}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 relative overflow-hidden rounded-xl border border-emerald-400/15 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 p-4">
                        <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500 opacity-70" />
                        <span className="pointer-events-none absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                          Impact
                        </div>
                        <ul className="mt-3 space-y-2 text-gray-200/90 text-[16.5px] md:text-[17px]">
                          {buildBullets(item.description).map(point => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                              <span className="leading-relaxed text-justify">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              <div className={`${isLeft ? 'hidden lg:block' : 'hidden lg:block lg:order-1'}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { StackedExperience };
