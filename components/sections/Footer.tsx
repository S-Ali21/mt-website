"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xl font-bold tracking-tighter">NEXUX</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pioneering the next generation of AI solutions for forward-thinking businesses. 
              Built with precision, powered by innovation.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-primary">Product</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><Link href="#" className="hover:text-foreground transition-all">Features</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-all">Integrations</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-all">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-all">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-primary">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><Link href="#" className="hover:text-foreground transition-all">About Us</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-all">Blog</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-all">Careers</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-all">Legal</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-primary">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Subscribe for the latest AI news and updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-4 py-2 glass rounded-lg text-sm outline-none border-white/10 focus:border-primary/50"
              />
              <Button size="sm" className="rounded-lg">Join</Button>
            </div>
          </div>
        </div>

        {/* Huge Brand Name Backdrop */}
        <div className="relative pt-20 select-none pointer-events-none overflow-hidden">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[12vw] md:text-[18vw] font-black tracking-tighter text-center leading-none bg-gradient-to-b from-white/[0.05] to-transparent bg-clip-text text-transparent transform translate-y-1/4">
              NEXUX
            </h2>
          </motion.div>
          
          {/* Light trails for the logo */}
          <div className="absolute inset-x-0 bottom-0 h-[300px] flex justify-center items-end -z-10">
            <div className="w-full max-w-[800px] h-[300px] bg-primary/20 blur-[120px] rounded-full translate-y-1/2" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 pt-12 border-t border-white/5 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
          <p>© 2026 Nexux Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-all">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-all">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-all">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
