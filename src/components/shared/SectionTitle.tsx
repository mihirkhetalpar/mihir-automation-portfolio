import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionTitleProps = {
  className?: string;
  children: ReactNode;
};

export function SectionTitle({ className, children }: SectionTitleProps) {
  return (
    <h2 className={cn(
      "font-headline text-4xl md:text-5xl font-bold tracking-tighter text-center",
      "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]",
      className
    )}>
      {children}
    </h2>
  );
}
