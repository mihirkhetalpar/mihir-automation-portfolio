import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function GlowingCard({ className, ...props }: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "bg-card/50 backdrop-blur-sm border-2 border-primary/20 transition-all duration-300",
        "hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]",
        className
      )}
      {...props}
    />
  );
}
