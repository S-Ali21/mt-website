"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Database, Cloud, ShieldCheck } from "lucide-react";

type StackItem = {
  label: string;
  detail: string;
  icon: JSX.Element;
};

const stack: StackItem[] = [
  {
    label: "AI & ML",
    detail:
      "LLMs, retrieval, and recommendation systems orchestrated via Nexora’s governance layer.",
    icon: <Cpu className="h-4 w-4 text-cyan-300" />,
  },
  {
    label: "Data & Integrations",
    detail:
      "Event streams, warehouses, CRM, and support tools connected through secure APIs.",
    icon: <Database className="h-4 w-4 text-violet-300" />,
  },
  {
    label: "Experience Layer",
    detail:
      "Web, mobile, and messaging interfaces built on modern front-end frameworks.",
    icon: <Cloud className="h-4 w-4 text-sky-300" />,
  },
  {
    label: "Security & Compliance",
    detail:
      "SSO, RBAC, encryption, audit trails, and configurable data residency policies.",
    icon: <ShieldCheck className="h-4 w-4 text-emerald-300" />,
  },
];

export const TechStackSection: FC = () => {
  return (
    <section aria-labelledby="tech-heading" className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
            Technology
          </p>
          <h2
            id="tech-heading"
            className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
          >
            A composable stack for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              building responsible AI products
            </span>
            .
          </h2>
        </div>
        <Badge
          variant="outline"
          className="border-slate-700/80 bg-slate-900/80 text-[10px] font-medium text-slate-300"
        >
          Works with your preferred cloud, models, and data stack
        </Badge>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {stack.map((item) => (
            <Card
              key={item.label}
              className="relative overflow-hidden border-slate-800/80 bg-slate-950/80 shadow-[0_18px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_70%)]" />
              <CardContent className="relative flex flex-col gap-2 p-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/90 ring-1 ring-slate-700/70">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.label}
                  </h3>
                </div>
                <p className="text-slate-300">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="relative overflow-hidden border-slate-800/80 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950/75 shadow-[0_18px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),transparent_70%)]" />
          <CardContent className="relative space-y-4 p-4 text-xs">
            <h3 className="text-sm font-semibold text-slate-50">
              Built on a modern front-end foundation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-2">
                <p className="font-semibold text-cyan-300">Next.js &amp; React</p>
                <p className="mt-1">
                  For performant, SEO-friendly web experiences across devices.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-2">
                <p className="font-semibold text-cyan-300">
                  TypeScript &amp; UI
                </p>
                <p className="mt-1">
                  Type-safe interfaces with Tailwind, shadcn/ui, and motion-first
                  design.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-2">
                <p className="font-semibold text-cyan-300">Analytics-ready</p>
                <p className="mt-1">
                  Structured events and observability baked into every
                  interaction.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-2">
                <p className="font-semibold text-cyan-300">Security-first</p>
                <p className="mt-1">
                  Best practices around auth, access, and data minimisation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

