"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in-up' | 'slide-in-left' | 'slide-in-right';

interface ScrollAnimatorProps {
  children: ReactNode;
  animation: AnimationType;
  className?: string;
}

export function ScrollAnimator({ children, animation, className }: ScrollAnimatorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity',
        isVisible ? `animate-on-scroll animation-${animation}` : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
