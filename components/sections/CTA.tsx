"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[3rem] border border-primary/20 relative overflow-hidden group"
        >
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 blur-[100px] rounded-full animate-pulse-slow" />

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-widest">
              <Rocket className="w-4 h-4 text-primary" />
              Ready to take flight?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Scale your Productivity <br />
              <span className="text-primary italic">with Our AI Platform.</span>
            </h2>
            
            <p className="max-w-xl mx-auto text-muted-foreground text-lg font-medium">
              Join thousands of businesses already using Nexux to redefine their 
              operational capabilities and customer experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full px-10 h-14 bg-primary hover:bg-primary/90 glow-primary text-lg font-bold">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold">
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
