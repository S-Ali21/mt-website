import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora · Applied AI Studio",
  description:
    "Nexora partners with modern teams across the Middle East and beyond to design, build, and scale AI-powered SaaS products.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="h-full bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}

