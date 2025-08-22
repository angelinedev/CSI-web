
'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageSlideshowProps {
  images: {
    src: string;
    alt: string;
    hint: string;
  }[];
  className?: string;
}

export function ImageSlideshow({ images, className }: ImageSlideshowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className={cn('overflow-hidden rounded-lg shadow-xl max-w-2xl mx-auto', className)} ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div className="relative flex-[0_0_100%] aspect-video" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              data-ai-hint={image.hint}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
