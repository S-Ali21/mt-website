"use client";

import type { FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ className, children, ...props }) => (
  <div
    className={cn(
      "rounded-2xl border border-slate-800 bg-slate-950/80 text-slate-50",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader: FC<CardProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn("px-4 pt-4 pb-2 flex flex-col gap-1", className)}
    {...props}
  >
    {children}
  </div>
);

export const CardTitle: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => (
  <h3 className={cn("text-sm font-semibold tracking-tight", className)}>
    {children}
  </h3>
);

export const CardContent: FC<CardProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("px-4 pb-4 pt-1", className)} {...props}>
    {children}
  </div>
);

