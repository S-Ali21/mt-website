"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "CTO at TechFlow",
      text: "Nexux has completely transformed how we handle our backend automation. The AI agents are incredibly reliable.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Product Lead at Lucid",
      text: "The integration process was seamless. We saw a 40% increase in productivity within the first month.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "founder of Pulse",
      text: "Best-in-class UI and powerful AI capabilities. Nexux is the partner we needed to scale globally.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Trusted by Leaders</h2>
          <p className="text-muted-foreground italic">Real feedback from innovative companies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2, y: 30 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-3xl relative overflow-hidden group border border-white/10"
            >
              <Quote className="absolute -top-4 -left-4 w-24 h-24 text-white/[0.03] -z-10 group-hover:text-primary/5 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg font-medium leading-relaxed mb-8 italic">"{review.text}"</p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent" />
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{review.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
