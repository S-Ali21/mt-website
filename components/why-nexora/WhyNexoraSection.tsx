"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Globe2, Cpu, Sparkles } from "lucide-react";

type Reason = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const reasons: Reason[] = [
  {
    title: "MENA-native, globally benchmarked",
    description:
      "We understand Arabic-first experiences, local regulations, and payments, while drawing on benchmarks from leading global SaaS teams.",
    icon: <Globe2 className="h-4 w-4 text-cyan-300" />,
  },
  {
    title: "Strategy plus shipping power",
    description:
      "Nexora squads blend product strategy, UX, data, and engineering, so you are never left with just a slide deck or a prototype.",
    icon: <Sparkles className="h-4 w-4 text-violet-300" />,
  },
  {
    title: "Responsible AI by design",
    description:
      "Guardrails, observability, and human-in-the-loop controls are built into the platform to meet enterprise and regulator expectations.",
    icon: <ShieldCheck className="h-4 w-4 text-emerald-300" />,
  },
  {
    title: "Composable, not another platform",
    description:
      "Integrate with your CRM, data warehouse, support tools, and in-house models—Nexora fits into your stack rather than replacing it.",
    icon: <Cpu className="h-4 w-4 text-sky-300" />,
  },
];

export const WhyNexoraSection: FC = () => {
  return (
    <section aria-labelledby="why-heading" className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
            Why Nexora
          </p>
          <h2
            id="why-heading"
            className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
          >
            A partner who understands{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              regional nuance and global scale
            </span>
            .
          </h2>
        </div>
        <Badge
          variant="outline"
          className="border-emerald-400/40 bg-emerald-500/10 text-[10px] font-medium text-emerald-200"
        >
          95% of clients renew into multi-year partnerships
        </Badge>
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
        {reasons.map((reason) => (
          <motion.div
            key={reason.title}
            className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/75 p-4 shadow-[0_18px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.18),transparent_60%)]" />
            <div className="relative flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/90 ring-1 ring-slate-700/70">
                {reason.icon}
              </div>
              <div className="space-y-1.5 text-xs">
                <h3 className="text-sm font-semibold text-slate-50">
                  {reason.title}
                </h3>
                <p className="text-slate-300">{reason.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

