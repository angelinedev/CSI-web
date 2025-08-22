"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setHasAnimated(true);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-in-out',
        hasAnimated ? 'opacity-100' : 'opacity-0',
        hasAnimated ? animationClassName : '',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
