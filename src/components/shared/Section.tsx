import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("w-full container max-w-5xl mx-auto py-16 sm:py-24 px-4", className)}>
      {children}
    </section>
  );
}
