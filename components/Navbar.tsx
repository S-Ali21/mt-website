"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="flex items-center justify-between w-full max-w-5xl h-14 px-6 glass rounded-full">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-glow">NEXUX</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "Tools", "Pricing", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground">
            Sign In
          </Link>
          <Button size="sm" className="rounded-full px-5 bg-primary hover:bg-primary/90 glow-primary">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
