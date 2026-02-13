"use client";

import type { FC } from "react";
import { motion } from "framer-motion";

type Logo = {
  name: string;
  region: string;
};

const logos: Logo[] = [
  { name: "Sarq Capital", region: "Riyadh · Fintech" },
  { name: "Lumi Retail Cloud", region: "Dubai · Omnichannel" },
  { name: "HayatCare", region: "Doha · Healthtech" },
  { name: "OrbitLink", region: "Kuwait City · Telecom" },
  { name: "NebulaPay", region: "Abu Dhabi · Payments" },
  { name: "Sahara Mobility", region: "Jeddah · Mobility" },
];

export const TrustedBySection: FC = () => {
  return (
    <section
      aria-labelledby="trusted-heading"
      className="space-y-8 border-y border-slate-800/70 bg-slate-950/40 py-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
            Trusted partners
          </p>
          <h2
            id="trusted-heading"
            className="text-sm font-medium text-slate-200 sm:text-base"
          >
            Trusted by{" "}
            <span className="text-cyan-300">
              scale-ups across the Middle East
            </span>{" "}
            and teams in 18+ markets.
          </h2>
        </div>
        <p className="max-w-xs text-[11px] text-slate-400">
          From early-stage ventures to listed enterprises, Nexora becomes the AI
          product layer behind their most ambitious experiences.
        </p>
      </div>

      <motion.div
        className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.name}
            className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 px-3 py-3 text-xs text-slate-300 shadow-[0_10px_40px_rgba(15,23,42,0.9)] backdrop-blur-xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="mb-3 h-5 w-16 rounded-full bg-gradient-to-r from-slate-700 to-slate-500/80 opacity-60 group-hover:opacity-100" />
            <div className="space-y-0.5">
              <p className="text-[11px] font-medium text-slate-200">
                {logo.name}
              </p>
              <p className="text-[10px] text-slate-500">{logo.region}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

