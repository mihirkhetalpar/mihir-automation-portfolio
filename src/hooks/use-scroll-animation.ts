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

    const { top, bottom, height } = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const isVisible = top < viewportHeight && bottom > 0;

    if (isVisible) {
      setStyle({
        opacity: 1,
        transform: 'translateY(0) translateX(0)',
        transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
        willChange: 'transform, opacity',
      });
    } else {
      // Determine if the element is above or below the viewport
      const isAbove = bottom < 0; // The bottom of the element is above the top of the viewport.
      
      let transform;
      const verticalOffset = '20px';
      const horizontalOffset = '30px';

      switch (animationType) {
        case 'fadeInUp':
          transform = `translateY(${isAbove ? `-${verticalOffset}` : verticalOffset})`;
          break;
        case 'slideInFromLeft':
           transform = `translateX(-${horizontalOffset})`;
          break;
        case 'slideInFromRight':
          transform = `translateX(${horizontalOffset})`;
          break;
        default:
          transform = 'none';
      }

      setStyle({
        opacity: 0,
        transform,
        transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
        willChange: 'transform, opacity',
      });
    }
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
