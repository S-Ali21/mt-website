import type { FC } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustedBySection } from "@/components/showcase/TrustedBySection";
import { SolutionsOverviewSection } from "@/components/solutions/SolutionsOverviewSection";
import { FeaturedProductsSection } from "@/components/showcase/FeaturedProductsSection";
import { WhyNexoraSection } from "@/components/why-nexora/WhyNexoraSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { TechStackSection } from "@/components/tech-stack/TechStackSection";
import { InsightsSection } from "@/components/insights/InsightsSection";
import { CtaSection } from "@/components/cta/CtaSection";
import { Footer } from "@/components/layout/Footer";

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_top,_#22d3ee33,_transparent_60%)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_bottom,_#4f46e533,_transparent_60%)]" />

      <Header />

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <HeroSection />
        </motion.section>

        <motion.section
          id="trusted"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TrustedBySection />
        </motion.section>

        <motion.section
          id="solutions"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          <SolutionsOverviewSection />
        </motion.section>

        <motion.section
          id="products"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          <FeaturedProductsSection />
        </motion.section>

        <motion.section
          id="why-nexora"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <WhyNexoraSection />
        </motion.section>

        <motion.section
          id="process"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          <ProcessSection />
        </motion.section>

        <motion.section
          id="tech-stack"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TechStackSection />
        </motion.section>

        <motion.section
          id="insights"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          <InsightsSection />
        </motion.section>

        <motion.section
          id="cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CtaSection />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

