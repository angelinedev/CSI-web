"use client";

import { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIsVisible } from '@/hooks/use-is-visible';

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  delay?: number;
}

export function ScrollAnimator({
  children,
  className,
  animationClassName = 'animate-fade-in-up',
  delay = 0,
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible ? animationClassName : '',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
