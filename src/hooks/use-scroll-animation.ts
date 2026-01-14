
"use client";

import { useEffect, useRef } from 'react';

const isBrowser = typeof window !== 'undefined';

interface AnimationConfig {
  animationType: 'fade-in-up' | 'slide-in-left' | 'slide-in-right';
}

export function useScrollAnimation(config: AnimationConfig) {
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const animate = () => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // A buffer to start fading in a bit earlier and fade out a bit later
    const buffer = windowHeight * 0.1;

    // Check if any part of the element is within the buffered viewport
    const isVisible = rect.top < windowHeight - buffer && rect.bottom > buffer;
    
    // Calculate progress: 0 when just entering viewport, 1 when fully visible
    let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
    progress = Math.max(0, Math.min(1, progress));

    const opacity = isVisible ? Math.sin(progress * Math.PI) * 0.9 + 0.1 : 0;
    const translateY = (1 - progress) * 20;

    element.style.opacity = `${opacity}`;
    element.style.transform = `translateY(${translateY}px)`;


    // Parallax for background
    const parallaxBg = document.querySelector('.parallax-bg') as HTMLElement | null;
    if (parallaxBg) {
      // Slow down the background scroll speed
      parallaxBg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
  };

  useEffect(() => {
    if (!isBrowser) return;

    const onScroll = () => {
      // Debounce with requestAnimationFrame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    // Initial animation call
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    // Re-run effect if animationType changes, although in this case it's static
  }, [config.animationType]); 

  // Initialize with opacity 0 to prevent flash of unstyled content
  return { ref: elementRef, style: { opacity: 0 } };
}
