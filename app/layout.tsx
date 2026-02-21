import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXUX · AI-Powered Solutions",
  description:
    "Transform your business with cutting-edge AI solutions. Nexux leads the way in intelligent automation and data-driven insights.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full scroll-smooth dark">
      <body className={`${inter.className} h-full bg-slate-950 text-slate-50 antialiased overflow-x-hidden`}>
        {/* Background Effects */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute top-[40%] right-[10%] w-[25%] h-[25%] rounded-full bg-cyan-600/5 blur-[100px]" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        
        {children}
      </body>
    </html>
  );
}

