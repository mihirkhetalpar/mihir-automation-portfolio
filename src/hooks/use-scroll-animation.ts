"use client";

import { useState, useEffect, RefObject } from 'react';

type AnimationType = 'fadeInUp' | 'slideInFromLeft' | 'slideInFromRight';

export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  animationType: AnimationType
) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const { top, height } = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate the progress of the element passing through the viewport
      // 1 = bottom of viewport, 0 = middle, -1 = top of viewport
      const progress = (top + height / 2 - viewportHeight / 2) / (viewportHeight / 2);
      
      // Clamp progress between -1 and 1
      const clampedProgress = Math.max(-1, Math.min(1, progress));

      let transform = '';
      const opacity = 1 - Math.abs(clampedProgress);

      switch (animationType) {
        case 'fadeInUp':
          transform = `translateY(${clampedProgress * 50}px)`;
          break;
        case 'slideInFromLeft':
          transform = `translateX(${clampedProgress * -100}px)`;
          break;
        case 'slideInFromRight':
          transform = `translateX(${clampedProgress * 100}px)`;
          break;
      }
      
      setStyle({
        transform,
        opacity,
        transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
        willChange: 'transform, opacity'
      });
    };
    
    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [ref, animationType]);

  return style;
}
