"use client";

import { useRef, ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

type AnimationType = 'fadeInUp' | 'slideInFromLeft' | 'slideInFromRight';

interface AnimatedSectionProps {
  children: ReactNode;
  animationType: AnimationType;
  className?: string;
}

export function AnimatedSection({ children, animationType, className }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const style = useScrollAnimation(ref, animationType);

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
