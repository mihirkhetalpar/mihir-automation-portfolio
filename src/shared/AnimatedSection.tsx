
"use client";

import { useRef, ReactNode, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in-up' | 'slide-in-left' | 'slide-in-right';

interface AnimatedSectionProps {
  children: ReactNode;
  animationType: AnimationType;
  className?: string;
}

export function AnimatedSection({ children, animationType, className }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref);

  const getAnimationClass = (type: AnimationType) => {
    switch (type) {
      case 'fade-in-up':
        return 'direction-fade-in-up';
      case 'slide-in-left':
        return 'direction-slide-in-left';
      case 'slide-in-right':
        return 'direction-slide-in-right';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={cn('scroll-animate', getAnimationClass(animationType), className)}
    >
      {children}
    </div>
  );
}
