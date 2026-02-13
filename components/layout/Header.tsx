"use client";

import type { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Sparkles, Globe2, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Why Nexora", href: "#why-nexora" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
];

export const Header: FC = () => {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link
          href="#hero"
          className="group inline-flex items-center gap-2"
          aria-label="Nexora home"
        >
          <motion.span
            className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-violet-500 shadow-[0_0_40px_rgba(56,189,248,0.35)]"
            whileHover={{ rotate: -6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Sparkles className="h-4 w-4 text-slate-950" />
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-white/10 blur-xl" />
          </motion.span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-200">
              NEXORA
            </span>
            <span className="text-xs text-slate-400">
              Applied AI for bold teams
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full bg-slate-900/70 px-2 py-1 text-sm text-slate-300 shadow-[0_0_0_1px_rgba(148,163,184,0.14)] backdrop-blur xl:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800/80 hover:text-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 h-5 w-px bg-slate-700/70" aria-hidden="true" />
          <div className="flex items-center gap-2 pl-1">
            <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-300">
              <Globe2 className="mr-0.5 h-3 w-3 text-cyan-400" />
              <span>MENA-first</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span>Global scale</span>
            </div>
            <Button
              asChild
              size="sm"
              className="h-8 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-4 text-xs font-semibold text-slate-950 shadow-[0_12px_45px_rgba(56,189,248,0.45)] hover:from-cyan-300 hover:via-sky-400 hover:to-violet-400"
            >
              <Link href="#cta">Book a strategy call</Link>
            </Button>
          </div>
        </nav>

        <div className="hidden items-center gap-2 lg:flex xl:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 rounded-full border border-slate-800/70 bg-slate-900/70 px-3 text-xs text-slate-300 hover:bg-slate-800"
          >
            Log in
          </Button>
          <Button
            asChild
            size="sm"
            className="h-8 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-4 text-xs font-semibold text-slate-950 shadow-[0_12px_45px_rgba(56,189,248,0.45)] hover:from-cyan-300 hover:via-sky-400 hover:to-violet-400"
          >
            <Link href="#cta">Talk to our team</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full border border-slate-800/70 bg-slate-900/70 text-slate-300 hover:bg-slate-800"
            aria-label="Log in"
          >
            <Globe2 className="h-4 w-4" />
          </Button>
          <Sheet>
            <SheetTrigger>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-slate-700/80 bg-slate-900/80 text-slate-100 hover:bg-slate-800"
                aria-label="Open navigation"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-slate-800 bg-slate-950/95 text-slate-50 backdrop-blur-xl"
              aria-label="Mobile navigation"
            >
              <SheetHeader className="flex flex-row items-center justify-between gap-2">
                <SheetTitle className="flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-slate-200">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-violet-500">
                    <Sparkles className="h-3 w-3 text-slate-950" />
                  </span>
                  NEXORA
                </SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full border border-slate-800/80 bg-slate-900/80 text-slate-300 hover:bg-slate-800"
                  aria-label="Close navigation"
                  onClick={() => {
                    // handled by backdrop click via SheetContent
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </SheetHeader>

              <div className="mt-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/70 px-3 py-3 text-sm font-medium text-slate-100 shadow-[0_0_30px_rgba(15,23,42,0.9)] hover:border-cyan-400/50 hover:bg-slate-900"
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-center rounded-full border-slate-700/80 bg-slate-900/80 text-xs text-slate-200 hover:bg-slate-800"
                >
                  Log in
                </Button>
                <Button
                  asChild
                  className="w-full justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 text-xs font-semibold text-slate-950 shadow-[0_18px_55px_rgba(56,189,248,0.55)] hover:from-cyan-300 hover:via-sky-400 hover:to-violet-400"
                >
                  <Link href="#cta">Book a strategy call</Link>
                </Button>
                <p className="text-[11px] text-slate-500">
                  Built for high-velocity teams across the Middle East and
                  beyond. Response within 24 hours.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

