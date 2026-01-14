import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function GlowingCard({ className, ...props }: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "bg-transparent border-2 border-primary/20 transition-all duration-300",
        "animated-border-glow",
        className
      )}
      {...props}
    />
  );
}
