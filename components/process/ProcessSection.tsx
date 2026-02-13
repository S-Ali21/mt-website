"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Compass, PenTool, Rocket, BarChart3 } from "lucide-react";

type Step = {
  title: string;
  description: string;
  duration: string;
  icon: JSX.Element;
};

const steps: Step[] = [
  {
    title: "Discover & Align",
    description:
      "We immerse ourselves in your product, data, and customers to define the right AI bets and guardrails.",
    duration: "1–2 weeks",
    icon: <Compass className="h-4 w-4 text-cyan-300" />,
  },
  {
    title: "Design & Prototype",
    description:
      "Our team designs flows, interfaces, and model interactions, validating quickly with your stakeholders and customers.",
    duration: "2–3 weeks",
    icon: <PenTool className="h-4 w-4 text-violet-300" />,
  },
  {
    title: "Build & Integrate",
    description:
      "We ship production-ready experiences, integrate with your stack, and set up monitoring, analytics, and controls.",
    duration: "4–6 weeks",
    icon: <Rocket className="h-4 w-4 text-sky-300" />,
  },
  {
    title: "Scale & Evolve",
    description:
      "We partner with your teams to iterate on experiments, expand use-cases, and transfer capabilities.",
    duration: "Ongoing",
    icon: <BarChart3 className="h-4 w-4 text-emerald-300" />,
  },
];

export const ProcessSection: FC = () => {
  return (
    <section aria-labelledby="process-heading" className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
            Process
          </p>
          <h2
            id="process-heading"
            className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
          >
            A process built for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
              momentum and safety
            </span>
            .
          </h2>
        </div>
        <Badge
          variant="outline"
          className="border-slate-700/80 bg-slate-900/80 text-[10px] font-medium text-slate-300"
        >
          From discovery to launch in as little as 8 weeks
        </Badge>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card className="relative h-full overflow-hidden border-slate-800/80 bg-slate-950/80 shadow-[0_18px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_70%)]" />
              <CardContent className="relative flex h-full flex-col justify-between gap-4 p-4 text-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/90 ring-1 ring-slate-700/70">
                        {step.icon}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400">
                        Step {index + 1}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>
                    Joint working sessions, async updates, and clear artifacts.
                  </span>
                  <ArrowRight className="h-3 w-3 text-cyan-300" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

