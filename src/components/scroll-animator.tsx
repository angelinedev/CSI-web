
"use client";

import React, { useRef, ReactNode } from 'react';
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

  // Add the 'is-visible' class to the direct child if the component is visible.
  const child = React.Children.only(children) as React.ReactElement;
  const childWithClass = React.cloneElement(child, {
    className: cn(child.props.className, { 'is-visible': isVisible }),
  });


  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-700 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible ? animationClassName : '',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {childWithClass}
    </div>
  );
}
