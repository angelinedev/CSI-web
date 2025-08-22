
"use client"
import React, { useState, useEffect } from 'react';

const easeOutExpo = (t: number) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const Counter = ({ to }: { to: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const start = performance.now();
    const duration = 2000;

    const animate = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      setCount(Math.floor(easedProgress * to));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [to]);

  return <span>{count.toLocaleString()}</span>;
};
