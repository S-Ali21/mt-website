"use client";

import type {
  FC,
  ReactNode,
  HTMLAttributes,
  MouseEventHandler,
  ReactElement,
} from "react";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  cloneElement,
  isValidElement,
} from "react";
import { cn } from "@/lib/utils";

type SheetSide = "left" | "right" | "top" | "bottom";

type SheetContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const SheetContext = createContext<SheetContextValue | null>(null);

const useSheet = () => {
  const ctx = useContext(SheetContext);
  if (!ctx) {
    throw new Error("Sheet components must be used within <Sheet>");
  }
  return ctx;
};

export interface SheetProps {
  children: ReactNode;
}

export const Sheet: FC<SheetProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

export interface SheetTriggerProps {
  children: ReactNode;
}

export const SheetTrigger: FC<SheetTriggerProps> = ({ children }) => {
  const { setOpen } = useSheet();

  const handleClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  if (isValidElement(children)) {
    const child = children as ReactElement<{ onClick?: MouseEventHandler }>;
    return cloneElement(child, {
      onClick: (event: React.MouseEvent) => {
        handleClick(event);
        child.props.onClick?.(event);
      },
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: SheetSide;
  children: ReactNode;
}

export const SheetContent: FC<SheetContentProps> = ({
  side = "right",
  className,
  children,
  ...props
}) => {
  const { open, setOpen } = useSheet();
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  if (!open) return null;

  const sideClasses: Record<SheetSide, string> = {
    right: "right-0 top-0 h-full w-80 max-w-full",
    left: "left-0 top-0 h-full w-80 max-w-full",
    top: "left-0 top-0 w-full max-h-[80vh]",
    bottom: "left-0 bottom-0 w-full max-h-[80vh]",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex"
      aria-modal="true"
      role="dialog"
      onClick={handleClose}
    >
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" />
      <div
        className={cn(
          "fixed bg-slate-950 shadow-xl border border-slate-800",
          sideClasses[side],
          className,
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export const SheetHeader: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn("flex flex-col gap-2 px-4 pt-4", className)}>
    {children}
  </div>
);

export const SheetTitle: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <h2
    className={cn(
      "text-sm font-semibold tracking-tight text-slate-50",
      className,
    )}
  >
    {children}
  </h2>
);

