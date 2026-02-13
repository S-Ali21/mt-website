"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MessageCircle, ArrowRight } from "lucide-react";

export const CtaSection: FC = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-950/90 px-4 py-8 shadow-[0_26px_120px_rgba(15,23,42,1)] backdrop-blur-xl sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.35),transparent_60%)]" />

      <motion.div
        className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="space-y-3">
          <Badge
            variant="outline"
            className="border-cyan-400/40 bg-cyan-500/10 text-[10px] font-medium text-cyan-200"
          >
            Strategy session · No slideware
          </Badge>
          <h2
            id="cta-heading"
            className="max-w-xl text-balance text-lg font-semibold tracking-tight text-slate-50 sm:text-xl lg:text-2xl"
          >
            Bring your next AI product idea, challenge, or roadmap—and leave
            with a concrete launch plan.
          </h2>
          <p className="max-w-xl text-xs leading-relaxed text-slate-300">
            In a 45-minute working session, we map where AI can have
            disproportionate impact, outline experiments, and share examples of
            what teams like yours have shipped with Nexora.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-xs text-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              className="h-10 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-5 text-xs font-semibold text-slate-950 shadow-[0_22px_70px_rgba(56,189,248,0.6)] hover:from-cyan-300 hover:via-sky-400 hover:to-violet-400"
            >
              <CalendarDays className="mr-1.5 h-4 w-4" />
              Book a strategy call
            </Button>
            <Button
              variant="outline"
              className="h-10 rounded-full border-slate-700/80 bg-slate-950/70 px-4 text-xs text-slate-200 hover:bg-slate-900"
            >
              <MessageCircle className="mr-1.5 h-4 w-4 text-cyan-300" />
              Talk to our team on WhatsApp
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Response in &lt; 24 hours for GCC-based teams.
            </span>
            <span className="hidden h-3 w-px bg-slate-700/80 sm:inline-block" />
            <span className="inline-flex items-center gap-1">
              Or email us at
              <span className="font-medium text-cyan-300">
                hello@nexora.studio
              </span>
              <ArrowRight className="h-3 w-3 text-cyan-300" />
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

