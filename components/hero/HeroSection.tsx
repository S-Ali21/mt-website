"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PlayCircle, ShieldCheck, Globe2 } from "lucide-react";

export const HeroSection: FC = () => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <div className="pointer-events-none absolute -inset-x-16 -top-24 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_65%)]" />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/80 px-3 py-1 text-xs text-cyan-100 shadow-[0_0_40px_rgba(56,189,248,0.4)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20">
              <ShieldCheck className="h-3 w-3 text-cyan-300" />
            </span>
            <span className="font-medium">
              AI-native SaaS for the Middle East &amp; beyond
            </span>
          </div>

          <div className="space-y-4">
            <motion.h1
              id="hero-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Orchestrate every customer journey with{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                applied AI from Nexora
              </span>
              .
            </motion.h1>
            <motion.p
              className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Nexora helps B2B and B2C teams design, launch, and scale AI-driven
              SaaS products in weeks—not quarters. Built for fast-growing
              companies across the GCC, powered by a global-grade platform.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <Button
              asChild
              className="h-10 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-5 text-xs font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.55)] hover:from-cyan-300 hover:via-sky-400 hover:to-violet-400"
            >
              <a href="#cta">
                Book a strategy call
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-10 rounded-full border-slate-700/80 bg-slate-900/70 px-4 text-xs text-slate-200 hover:bg-slate-800"
            >
              <PlayCircle className="mr-1.5 h-4 w-4 text-cyan-300" />
              Watch 3-min platform tour
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>
                24/7 support across KSA, UAE, Qatar &amp; Bahrain
              </span>
            </div>
            <span className="hidden h-3 w-px bg-slate-700/70 sm:inline-block" />
            <div className="flex items-center gap-2">
              <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
              <span>Deployed in 18+ countries</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/70 p-4 shadow-[0_24px_120px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_65%)]" />
            <div className="relative space-y-3 text-xs">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-medium text-slate-300">
                    Live AI Signals
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-full border-cyan-400/40 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-200"
                >
                  Real-time
                </Badge>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Churn risk — GCC B2C
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                      -32%
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-200">
                    Proactive retention journeys created by Nexora reduced churn
                    for a regional streaming platform in under 90 days.
                  </p>
                </div>

                <div className="space-y-2 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Sales pipeline uplift
                    </span>
                    <span className="text-[11px] font-semibold text-cyan-300">
                      +47%
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: static mock data
                      <div
                        key={idx}
                        className="flex-1 rounded-full bg-slate-800/80"
                      >
                        <div
                          className="h-6 rounded-full bg-gradient-to-t from-cyan-500/80 to-sky-400/80"
                          style={{ height: `${30 + idx * 8}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    AI-qualified leads synced to your CRM and WhatsApp journeys.
                  </p>
                </div>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
                <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-950/90 to-slate-900/60 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Launch timeline
                    </span>
                    <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-slate-200">
                      From idea to pilot
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1 flex-1 rounded-full bg-slate-800">
                      <div className="h-1 w-2/3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500" />
                    </div>
                    <span className="text-[11px] text-slate-300">6 weeks</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    End-to-end product strategy, design, and engineering led by
                    Nexora squads.
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <span className="flex h-6 w-6 items-center justify-center rounded-xl bg-cyan-500/15">
                      <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
                    </span>
                    <span>
                      Data residency aligned with regional regulations.
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Built with compliance in mind for banks, fintech, and
                    government-backed innovators.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="pointer-events-none absolute -right-3 -top-4 hidden rounded-full border border-slate-700/60 bg-slate-950/90 px-3 py-1.5 text-[10px] text-slate-300 shadow-[0_18px_60px_rgba(15,23,42,0.95)] sm:flex"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
          >
            <span className="mr-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
            </span>
            Teams in Riyadh, Dubai &amp; Doha rely on Nexora.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

