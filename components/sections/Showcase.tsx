"use client";

import { motion } from "framer-motion";
import { CreditCard, Globe, Zap, BarChart2 } from "lucide-react";

export const Showcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Experience a new level <br />
            of <span className="text-primary italic">Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our enterprise-grade platform integrates seamlessly with your existing stack. 
            Native iOS & Android apps allow your team to monitor AI performance from anywhere.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Native App", icon: <Globe className="w-5 h-5" /> },
              { title: "Smart Cards", icon: <CreditCard className="w-5 h-5" /> },
              { title: "Fast API", icon: <Zap className="w-5 h-5" /> },
              { title: "Analytics", icon: <BarChart2 className="w-5 h-5" /> },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 p-4 glass rounded-2xl hover:border-primary/30 transition-colors">
                <div className="text-primary">{item.icon}</div>
                <span className="font-medium text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative flex justify-center perspective-1000">
          <motion.div
            initial={{ rotateY: 20, rotateX: 10, y: 50, opacity: 0 }}
            whileInView={{ rotateY: -10, rotateX: 5, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[300px] h-[600px] rounded-[3rem] border-8 border-slate-900 bg-slate-950 shadow-2xl overflow-hidden preserve-3d"
          >
            {/* Phone Screen Mockup */}
            <div className="p-6 h-full flex flex-col gap-6">
              <div className="flex justify-between items-center text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-1 bg-white/20 rounded-full" />
                  <div className="w-4 h-1 bg-primary rounded-full" />
                </div>
              </div>
              
              <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/5 p-4 flex flex-col justify-end gap-2">
                <p className="text-[10px] font-bold uppercase text-primary">Main Wallet</p>
                <p className="text-2xl font-bold">$12,450.00</p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase text-muted-foreground">Recent Transactions</p>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 glass rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
                      <div className="space-y-1">
                        <div className="h-2 w-16 bg-white/20 rounded-full" />
                        <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    <div className="h-2 w-10 bg-primary/20 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Platform Shadow/glow */}
          <div className="absolute -bottom-10 w-[400px] h-20 bg-primary/20 blur-[60px] rounded-full -z-10" />
          <div className="absolute bottom-0 w-[450px] h-4 bg-black/40 blur-xl rounded-full -z-20" />
        </div>
      </div>
    </section>
  );
};
