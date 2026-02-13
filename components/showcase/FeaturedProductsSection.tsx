"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  BarChart3,
  MessageCircle,
  Banknote,
} from "lucide-react";

type CaseStudy = {
  name: string;
  company: string;
  region: string;
  metric: string;
  description: string;
  tag: string;
  icon: JSX.Element;
};

const caseStudies: CaseStudy[] = [
  {
    name: "Nexora Engage",
    company: "Lumi Retail Cloud",
    region: "UAE · Fashion & Lifestyle",
    metric: "+28% repeat purchase rate in 120 days",
    description:
      "We implemented an AI-led engagement layer that personalises promotions, content, and timing across web, app, and WhatsApp for millions of shoppers.",
    tag: "B2C Commerce",
    icon: <BarChart3 className="h-4 w-4 text-cyan-300" />,
  },
  {
    name: "Nexora Pulse",
    company: "Sarq Capital",
    region: "KSA · Digital Bank",
    metric: "-37% call center volume with higher CSAT",
    description:
      "Nexora Pulse became the AI copilot for relationship managers and customers, resolving queries instantly while routing complex cases with context.",
    tag: "Financial Services",
    icon: <MessageCircle className="h-4 w-4 text-violet-300" />,
  },
  {
    name: "Nexora Flow",
    company: "Sahara Mobility",
    region: "KSA · Mobility & Logistics",
    metric: "3× faster onboarding for new partners",
    description:
      "We built a workflow layer on top of their existing stack, automating verifications, pricing suggestions, and partner education flows in Arabic and English.",
    tag: "Mobility",
    icon: <Banknote className="h-4 w-4 text-sky-300" />,
  },
];

export const FeaturedProductsSection: FC = () => {
  return (
    <section
      aria-labelledby="products-heading"
      className="space-y-8"
      id="products-section"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
            Products &amp; case studies
          </p>
          <h2
            id="products-heading"
            className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
          >
            Proven AI products that unlock{" "}
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              measurable business outcomes
            </span>
            .
          </h2>
        </div>
        <p className="max-w-sm text-[11px] text-slate-400">
          Each Nexora deployment combines reusable product components with a
          playbook tailored to your market, language, and regulatory context.
        </p>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.06 },
          },
        }}
      >
        {caseStudies.map((study) => (
          <motion.div
            key={study.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card className="group flex h-full flex-col overflow-hidden border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950/70 shadow-[0_18px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl">
              <div className="relative h-1 w-full bg-slate-900">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 opacity-70 group-hover:translate-x-full group-hover:transition-transform group-hover:duration-700" />
              </div>
              <CardHeader className="relative space-y-3 pb-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/90 ring-1 ring-slate-700/80">
                      {study.icon}
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold text-slate-50">
                        {study.name}
                      </CardTitle>
                      <p className="text-[11px] text-slate-400">
                        {study.company}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-slate-700/80 bg-slate-900/80 text-[10px] font-medium text-slate-300"
                  >
                    {study.tag}
                  </Badge>
                </div>
                <p className="text-[11px] text-sky-300">{study.metric}</p>
              </CardHeader>
              <CardContent className="relative flex flex-1 flex-col justify-between space-y-3 text-xs text-slate-300">
                <p className="leading-relaxed">{study.description}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Delivered as a managed AI product partnership.</span>
                  <span className="inline-flex items-center gap-1 text-cyan-300">
                    View playbook
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

