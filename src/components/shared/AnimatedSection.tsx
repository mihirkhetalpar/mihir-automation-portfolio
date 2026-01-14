"use client";

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in-up' | 'slide-in-left' | 'slide-in-right';

interface AnimatedSectionProps {
  children: ReactNode;
  animationType: AnimationType;
  className?: string;
}

export function AnimatedSection({ children, animationType, className }: AnimatedSectionProps) {
  const { ref, style } = useScrollAnimation({ animationType });

  return (
    <div
      ref={ref}
      style={style}
      className={cn('transition-opacity duration-300', className)}
    >
      {children}
    </div>
  );
}
