"use client";

import { useEffect, RefObject } from 'react';

const isBrowser = typeof window !== 'undefined';

function handleScroll() {
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      el.classList.add('is-visible');
    } else {
      el.classList.remove('is-visible');
    }
  });
}

let scrollRaf: number;

function onScroll() {
  if (scrollRaf) {
    cancelAnimationFrame(scrollRaf);
  }
  scrollRaf = requestAnimationFrame(handleScroll);
}

export function useScrollAnimation(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!isBrowser) return;

    // Initial check
    handleScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (scrollRaf) {
        cancelAnimationFrame(scrollRaf);
      }
    };
  }, []);
}
