import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col">
        <Hero />
        <Brands />
        <Features />
        <Showcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
