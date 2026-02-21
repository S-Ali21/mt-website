"use client";

import { motion } from "framer-motion";

export const Stats = () => {
  const stats = [
    { label: "Active Users", value: "1.2M+", growth: "+12.5%" },
    { label: "Integrations", value: "2k+", growth: "Verified" },
    { label: "API Requests / Day", value: "21.3M+", growth: "99.9% Sla" },
    { label: "Global Clients", value: "350+", growth: "45 Regions" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">An efficient AI-First approach</h2>
          <p className="text-muted-foreground text-lg italic">for better results, every time.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="inline-block px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] text-primary font-bold uppercase">
                {stat.growth}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
