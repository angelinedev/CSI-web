"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (ref.current) {
                observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-500',
        isMobile ? (isVisible ? 'opacity-100' : 'opacity-0') : 'opacity-100',
        isVisible ? animationClassName : '',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
