"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Activity, Zap, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Decorative Trails */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-20">
          <motion.path
            d="M-100,500 C200,400 300,600 500,500 C700,400 800,600 1100,500"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold tracking-wider text-primary uppercase mb-6">
            <Zap className="w-3 h-3" />
            Empowering the future with AI
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Transform your business <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              with AI-powered solutions
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            Nexux helps you automate workflows, gain predictive insights, and scale 
            your operations with intelligence that learns and grows with you.
          </p>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex items-center p-1 bg-card rounded-full border border-border">
              <Search className="ml-4 w-5 h-5 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="How can Nexux help your business today?"
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-sm px-4 outline-none"
              />
              <Button size="lg" className="rounded-full px-6">Generate</Button>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Preview Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Real-time Metrics", icon: <Activity className="w-5 h-5" />, value: "98.4%", desc: "Efficiency boost" },
            { title: "Smart Automation", icon: <Zap className="w-5 h-5" />, value: "1.2k", desc: "Workflows active" },
            { title: "Security Protocols", icon: <Shield className="w-5 h-5" />, value: "A+", desc: "Infrastructure grade" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass p-6 rounded-2xl text-left flex flex-col gap-4 group hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                {card.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-bold">{card.value}</span>
                  <span className="text-xs text-emerald-400">{card.desc}</span>
                </div>
              </div>
              <div className="h-12 w-full bg-primary/5 rounded flex items-center justify-center overflow-hidden">
                {/* Mock chart lines */}
                <div className="flex items-end gap-1 h-8">
                  {[4, 7, 5, 8, 6, 9, 3, 6].map((h, j) => (
                    <motion.div 
                      key={j} 
                      className="w-1 bg-primary/30 rounded-full" 
                      initial={{ height: 0 }}
                      animate={{ height: `${h * 10}%` }}
                      transition={{ delay: 0.5 + j * 0.05, duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
