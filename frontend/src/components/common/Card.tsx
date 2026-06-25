import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-card backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);
