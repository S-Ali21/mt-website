"use client";

import type { FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-slate-800 text-slate-100",
  outline: "border border-slate-700 text-slate-100 bg-transparent",
};

export const Badge: FC<BadgeProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
      variantClasses[variant],
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

