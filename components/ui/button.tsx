"use client";

import type { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-slate-800 text-slate-50 hover:bg-slate-700 border border-slate-700",
  outline:
    "border border-slate-700 text-slate-100 bg-transparent hover:bg-slate-900/60",
  ghost: "text-slate-100 hover:bg-slate-900/70",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-xs",
  icon: "h-9 w-9 p-0",
};

export const Button: FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  asChild,
  className,
  children,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50";

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      className: cn(classes, (children as ReactElement).props.className),
      ...props,
    });
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

