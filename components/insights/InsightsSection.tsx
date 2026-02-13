"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

type Insight = {
  title: string;
  category: string;
  readTime: string;
  summary: string;
};

const insights: Insight[] = [
  {
    title: "What Middle East consumers expect from AI-powered experiences",
    category: "Customer Experience",
    readTime: "7 min read",
    summary:
      "We break down how expectations around language, privacy, and channels differ across GCC markets and what that means for your product roadmap.",
  },
  {
    title: "Designing AI copilots your sales team actually adopts",
    category: "Revenue",
    readTime: "6 min read",
    summary:
      "A practical guide to embedding AI into existing workflows instead of adding yet another dashboard that no one opens.",
  },
  {
    title: "From POC fatigue to production AI in 90 days",
    category: "Product & Strategy",
    readTime: "8 min read",
    summary:
      "Why many AI initiatives stall at prototype and how to align leadership, data, and operations around a focused launch plan.",
  },
];

export const InsightsSection: FC = () => {
  return (
    <section aria-labelledby="insights-heading" className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
            Insights
          </p>
          <h2
            id="insights-heading"
            className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
          >
            Ideas, playbooks, and{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
              field notes from Nexora teams
            </span>
            .
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-medium text-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.9)] hover:border-cyan-400/60 hover:text-slate-50"
        >
          Visit the insight hub
          <ArrowRight className="h-3.5 w-3.5 text-cyan-300" />
        </button>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {insights.map((insight) => (
          <motion.article
            key={insight.title}
            className="h-full"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card className="group flex h-full flex-col overflow-hidden border-slate-800/80 bg-slate-950/80 shadow-[0_18px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl">
              <div className="relative h-10 w-full bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-violet-500/20">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%)]" />
                <div className="absolute left-3 top-2 inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] text-slate-300">
                  <Sparkles className="h-3 w-3 text-cyan-300" />
                  Fresh from the field
                </div>
              </div>
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <Badge
                    variant="outline"
                    className="border-slate-700/80 bg-slate-900/80 text-[10px] font-medium text-slate-300"
                  >
                    {insight.category}
                  </Badge>
                  <span className="text-[10px] text-slate-500">
                    {insight.readTime}
                  </span>
                </div>
                <CardTitle className="text-sm font-semibold text-slate-50">
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between space-y-3 p-4 text-xs text-slate-300">
                <p className="leading-relaxed">{insight.summary}</p>
                <p className="inline-flex items-center gap-1 text-[11px] text-cyan-300">
                  Read story
                  <ArrowRight className="h-3 w-3" />
                </p>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

