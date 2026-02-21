"use client";

import { motion } from "framer-motion";
import { Twitter, Github, Slack, Twitch, Youtube, Chrome } from "lucide-react";

export const Brands = () => {
  const brandLogos = [
    { name: "Twitter", icon: <Twitter />, color: "hover:text-[#1DA1F2]" },
    { name: "GitHub", icon: <Github />, color: "hover:text-white" },
    { name: "Slack", icon: <Slack />, color: "hover:text-[#4A154B]" },
    { name: "Twitch", icon: <Twitch />, color: "hover:text-[#9146FF]" },
    { name: "Youtube", icon: <Youtube />, color: "hover:text-[#FF0000]" },
    { name: "Chrome", icon: <Chrome />, color: "hover:text-white" },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-12 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40">
          {brandLogos.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-2 grayscale brightness-200 transition-all cursor-pointer ${brand.color} group relative`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {brand.icon}
              </div>
              <span className="font-semibold text-lg">{brand.name}</span>
              <div className="absolute -inset-2 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
