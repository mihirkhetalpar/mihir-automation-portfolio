import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function GlowingCard({ className, ...props }: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "bg-transparent border-2 border-primary/20 transition-all duration-300",
        "animated-border-glow",
        "hover:-translate-y-2 hover:shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.2),_0_5px_15px_-5px_hsl(var(--secondary)/0.2)]",
        className
      )}
      {...props}
    />
  );
}
