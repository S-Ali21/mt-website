"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Activity,
  LayoutDashboard,
  Users,
  Bot,
  Workflow,
} from "lucide-react";

type Solution = {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  badge: string;
  impact: string;
};

const solutions: Solution[] = [
  {
    id: "cx-orchestration",
    name: "AI Customer Experience Orchestration",
    description:
      "Design personalised journeys across web, app, WhatsApp, and email with a single AI brain that learns from every interaction.",
    icon: <MessageSquare className="h-4 w-4 text-cyan-300" />,
    badge: "CX squads",
    impact: "Increase retention by 20–35% in 90 days.",
  },
  {
    id: "revenue-intelligence",
    name: "Revenue Intelligence for GTM Teams",
    description:
      "Prioritise accounts, score opportunities, and coach reps in real time with AI assistants embedded into your existing CRM.",
    icon: <Activity className="h-4 w-4 text-violet-300" />,
    badge: "Sales & RevOps",
    impact: "Add 15–25% more pipeline without headcount.",
  },
  {
    id: "product-ops",
    name: "Product Ops Command Center",
    description:
      "Unify product analytics, experimentation, and feedback loops into a live workspace for your product, engineering, and design teams.",
    icon: <LayoutDashboard className="h-4 w-4 text-sky-300" />,
    badge: "Product leaders",
    impact: "Ship high-confidence releases every sprint.",
  },
  {
    id: "ai-platform",
    name: "Nexora AI Platform",
    description:
      "A composable platform to ideate, prototype, and launch AI features—chatbots, copilots, recommenders—without rebuilding your stack.",
    icon: <Bot className="h-4 w-4 text-cyan-300" />,
    badge: "Platform teams",
    impact: "Launch AI features 4× faster, safely.",
  },
];

export const SolutionsOverviewSection: FC = () => {
  return (
    <section
      aria-labelledby="solutions-heading"
      className="space-y-8"
      id="solutions-section"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
            Solutions
          </p>
          <h2
            id="solutions-heading"
            className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
          >
            Modular AI solutions tailored to{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
              regional realities
            </span>{" "}
            and global ambitions.
          </h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/70 px-3 py-1 text-[11px] text-slate-300">
          <Users className="h-3.5 w-3.5 text-cyan-300" />
          <span>Designed with product, growth, and technology leaders.</span>
        </div>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.06 },
          },
        }}
      >
        {solutions.map((solution) => (
          <motion.div
            key={solution.id}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Card className="relative overflow-hidden border-slate-800/80 bg-slate-950/80 shadow-[0_18px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_65%)] opacity-75" />
              <CardHeader className="relative flex flex-row items-start justify-between gap-3 pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/90 ring-1 ring-slate-700/80">
                    {solution.icon}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-sm font-semibold text-slate-50">
                      {solution.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/40 bg-cyan-500/10 text-[10px] font-medium text-cyan-200"
                    >
                      {solution.badge}
                    </Badge>
                  </div>
                </div>
                <Workflow className="hidden h-4 w-4 text-slate-600 sm:block" />
              </CardHeader>
              <CardContent className="relative space-y-4 text-xs text-slate-300">
                <p className="leading-relaxed">{solution.description}</p>
                <div className="flex items-center justify-between gap-3 text-[11px]">
                  <p className="max-w-xs text-cyan-200">{solution.impact}</p>
                  <p className="hidden text-slate-500 sm:block">
                    Delivered through discovery sprints, pilot builds, and
                    long-term product partnerships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

