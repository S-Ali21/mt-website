"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const tiers = [
    {
      name: "Basic",
      price: "$29",
      desc: "Perfect for individuals and side projects.",
      features: ["5 Workflows", "1k AI Tokens", "Standard Support", "Basic Analytics"],
      highlight: false
    },
    {
      name: "Business",
      price: "$99",
      desc: "Ideal for growing startups and established teams.",
      features: ["Unlimited Workflows", "50k AI Tokens", "Priority Support", "Advanced Analytics", "Custom Integrations"],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "$299",
      desc: "For large organizations with custom needs.",
      features: ["Everything in Business", "Unlimited AI Tokens", "Dedicated Manager", "White-label Options", "SLA Guarantee"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Pick your Package</h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
          Transparent pricing that scales with you. No hidden fees, no complicated contracts.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-8 rounded-[2.5rem] flex flex-col gap-8 transition-all duration-300 ${
              tier.highlight 
                ? "bg-primary/10 border-2 border-primary shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]" 
                : "glass border border-white/10 hover:border-white/20"
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-primary text-[10px] font-bold uppercase tracking-widest">
                Recommended
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tighter">{tier.price}</span>
                <span className="text-muted-foreground font-medium">/mo</span>
              </div>
              <p className="text-sm text-muted-foreground">{tier.desc}</p>
            </div>

            <div className="space-y-4 flex-1">
              {tier.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm font-medium">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${tier.highlight ? "bg-primary/20 text-primary" : "bg-white/5 text-muted-foreground"}`}>
                    <Check className="w-3 h-3" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <Button size="lg" className={`rounded-full h-14 font-bold ${tier.highlight ? "bg-primary hover:bg-primary/90 glow-primary" : "glass border border-white/10 hover:bg-white/5"}`}>
              {tier.highlight ? "Join Business" : `Get ${tier.name}`}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
