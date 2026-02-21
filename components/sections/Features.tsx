"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, BarChart3, Cloud, Layout, MousePointer2 } from "lucide-react";

export const Features = () => {
  const cards = [
    {
      title: "Advanced Data Processing",
      desc: "Analyze millions of data points in milliseconds with our hybrid AI engine.",
      icon: <Brain className="w-6 h-6" />,
      className: "md:col-span-2",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Smart Automations",
      desc: "Connect your existing tools and let Nexux handle the heavy lifting.",
      icon: <Sparkles className="w-6 h-6" />,
      className: "md:col-span-1",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Intuitive Design",
      desc: "Clean, modern interfaces designed for humans, powered by machines.",
      icon: <Layout className="w-6 h-6" />,
      className: "md:col-span-1",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      title: "Real-time Insights",
      desc: "Visualize your growth with dynamic dashboards that update live.",
      icon: <BarChart3 className="w-6 h-6" />,
      className: "md:col-span-2",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Unlock New Possibilities <br />
          <span className="text-muted-foreground">with AI-Infused Tools</span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Discover a suite of features designed to bring your business into the age of AI. 
          Performance, scalability, and intelligence in every pixel.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative p-8 rounded-3xl border ${card.border} ${card.bg} overflow-hidden ${card.className}`}
          >
            {/* Ambient Background Light */}
            <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[80px] rounded-full opacity-5 group-hover:opacity-20 transition-opacity ${card.bg.replace('/10', '/40')}`} />
            
            <div className="relative z-10 flex flex-col h-full gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                {card.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{card.desc}</p>
              </div>
              <div className="mt-auto pt-6">
                <button className="flex items-center gap-2 text-sm font-semibold text-primary/80 hover:text-primary transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
