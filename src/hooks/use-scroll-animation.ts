"use client";

import { useState, useEffect, RefObject, useCallback } from 'react';

type AnimationType = 'fadeInUp' | 'slideInFromLeft' | 'slideInFromRight';

export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  animationType: AnimationType
) {
  const [style, setStyle] = useState({});

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const { top, height } = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Determine when the element is within the "active" zone of the viewport
    // Active zone is from 80% from top to 20% from bottom
    const start = viewportHeight * 0.8;
    const end = viewportHeight * 0.2;

    let progress = 1;
    if (top > start) {
      progress = 1; // Element is below the viewport
    } else if (top < end - height) {
      progress = -1; // Element is above the viewport
    } else {
      // Element is in view, calculate its progress
      progress = (top - start) / (end - height - start);
      progress = Math.max(-1, Math.min(1, 1 - progress * 2));
    }

    let transform = '';
    const opacity = 1 - Math.abs(progress);

    switch (animationType) {
      case 'fadeInUp':
        transform = `translateY(${-progress * 50}px)`;
        break;
      case 'slideInFromLeft':
        transform = `translateX(${-progress * 100}px)`;
        break;
      case 'slideInFromRight':
        transform = `translateX(${progress * 100}px)`;
        break;
    }
    
    setStyle({
      transform,
      opacity,
      transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
      willChange: 'transform, opacity',
      visibility: opacity > 0 ? 'visible' : 'hidden',
    });
  }, [ref, animationType]);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call to set position
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  return style;
}
