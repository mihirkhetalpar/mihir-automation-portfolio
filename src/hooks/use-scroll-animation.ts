"use client";

import { useEffect, useRef, CSSProperties } from 'react';

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

    const isVisible = rect.top < windowHeight && rect.bottom > 0;

    let progress = 0;
    if (isVisible) {
      // Calculate progress from 0 (bottom of viewport) to 1 (top of viewport)
      // This creates a smooth animation as it scrolls through the viewport
      progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      progress = Math.max(0, Math.min(1, progress));
    } else {
      // When not visible, reset progress based on position
      progress = rect.top > windowHeight ? 0 : 1;
    }

    // Apply styles based on progress
    const opacity = isVisible ? Math.sin(progress * Math.PI) : 0;
    
    let transform = 'none';

    // Invert the progress for slide-out effect
    const slideOutProgress = 1 - progress;

    if (isVisible) {
        switch (config.animationType) {
            case 'slide-in-left':
                transform = `translateX(${-50 * (1 - progress)}px)`;
                break;
            case 'slide-in-right':
                transform = `translateX(${50 * (1 - progress)}px)`;
                break;
            case 'fade-in-up':
                transform = `translateY(${30 * (1 - progress)}px)`;
                break;
        }
    } else {
        // Ensure elements are in their "out" position when not visible
        switch (config.animationType) {
            case 'slide-in-left':
                transform = `translateX(-50px)`;
                break;
            case 'slide-in-right':
                transform = `translateX(50px)`;
                break;
            case 'fade-in-up':
                transform = `translateY(30px)`;
                break;
        }
    }


    element.style.opacity = `${opacity}`;
    element.style.transform = transform;

    // Parallax for background
    const parallaxBg = document.querySelector('.parallax-bg') as HTMLElement | null;
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!isBrowser) return;

    const onScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    // Initial call
    animate();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [config.animationType]);

  return { ref: elementRef, style: { opacity: 0 } as CSSProperties };
}
