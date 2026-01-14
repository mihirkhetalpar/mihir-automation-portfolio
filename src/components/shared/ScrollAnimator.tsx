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
        // Update state to trigger animation based on whether the element is in view
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        // Animate when 10% of the element is visible
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
        'scroll-animate',
        `direction-${animation}`,
        { 'is-visible': isVisible },
        className
      )}
    >
      {children}
    </div>
  );
}
