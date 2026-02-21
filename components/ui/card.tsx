"use client";

import type { FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ className, children, ...props }) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
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
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {children}
  </div>
);

export const CardTitle: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)}>
    {children}
  </h3>
);

export const CardDescription: FC<{ className?: string; children: ReactNode }> = ({
    className,
    children,
  }) => (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );

export const CardContent: FC<CardProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

export const CardFooter: FC<CardProps> = ({
    className,
    children,
    ...props
  }) => (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
