"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe2, Mail, MapPin } from "lucide-react";

export const Footer: FC = () => {
  return (
    <footer
      aria-label="Footer"
      className="border-t border-slate-800/80 bg-slate-950/95"
    >
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-xs text-slate-400 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-violet-500">
              <span className="text-[11px] font-semibold text-slate-950">
                NX
              </span>
            </div>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-slate-200">
              NEXORA
            </span>
          </div>
          <p className="max-w-xs text-[11px] text-slate-400">
            Nexora is a product and engineering studio helping teams design,
            build, and scale AI-powered SaaS experiences.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-cyan-300" />
              Riyadh · Dubai · Remote
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail className="h-3.5 w-3.5 text-cyan-300" />
              hello@nexora.studio
            </span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold text-slate-300">
              Solutions
            </p>
            <ul className="space-y-1 text-[11px]">
              <li>
                <Link href="#solutions" className="hover:text-slate-200">
                  Customer Experience
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-slate-200">
                  Revenue Intelligence
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-slate-200">
                  Product Ops
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-slate-200">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-semibold text-slate-300">
              Company
            </p>
            <ul className="space-y-1 text-[11px]">
              <li>
                <Link href="#why-nexora" className="hover:text-slate-200">
                  Why Nexora
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-slate-200">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#insights" className="hover:text-slate-200">
                  Insights
                </Link>
              </li>
              <li>
                <a href="#cta" className="hover:text-slate-200">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-semibold text-slate-300">
              region &amp; legal
            </p>
            <ul className="space-y-1 text-[11px]">
              <li className="inline-flex items-center gap-1">
                <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
                <span>MENA-first, global reach</span>
              </li>
              <li>
                <button
                  type="button"
                  className="rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] text-slate-300 hover:border-cyan-400/60 hover:text-slate-50"
                >
                  View data &amp; privacy overview
                </button>
              </li>
              <li>
                <span className="text-[10px] text-slate-500">
                  © {new Date().getFullYear()} Nexora Studio. All rights
                  reserved.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

