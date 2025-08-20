"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Award, MapPin, Calendar } from 'lucide-react';
import { Gift } from 'lucide-react';

export function RibbonHero() {
  const [scrolled, setScrolled] = useState(false);
  const [detailsInView, setDetailsInView] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDetailsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (detailsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Title that appears before ribbon unties */}
        <div className={cn(
          "z-20 text-center text-primary-foreground drop-shadow-lg transition-all duration-500 flex flex-col items-center",
          scrolled ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
        )}>
           <div className={cn(
             "transition-transform duration-1000 ease-in-out",
             scrolled ? 'rotate-45' : 'rotate-0'
           )}>
            <Gift className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48" />
           </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline mt-4">
              CSI Inauguration 2025
          </h1>
        </div>
        
        {/* Full-screen ribbon background with shine */}
        <div className={cn(
          "absolute inset-0 bg-primary z-10 transition-opacity duration-700",
          scrolled ? 'opacity-0' : 'opacity-100'
        )}>
           <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
        </div>

        {/* Ribbon halves that split apart on scroll */}
        <div className={cn(
          "absolute h-full w-1/2 top-0 left-0 bg-primary z-30 transition-transform duration-1000 ease-in-out",
          scrolled ? "-translate-x-full" : "translate-x-0"
        )} />
        <div className={cn(
          "absolute h-full w-1/2 top-0 right-0 bg-primary z-30 transition-transform duration-1000 ease-in-out",
          scrolled ? "translate-x-full" : "translate-x-0"
        )} />
      </section>

      <div ref={detailsRef} className="bg-background">
        <section className={cn(
            "container mx-auto px-4 py-16 md:py-24 text-center transition-all duration-1000 ease-out",
            detailsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
              <h2 className="text-4xl md:text-5xl font-headline text-primary mb-12">Inauguration Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <Award className="w-12 h-12 text-accent" />
                    <h3 className="text-xl font-headline text-foreground">Chief Guest</h3>
                    <p className="text-muted-foreground">Dr. Evelyn Reed</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <MapPin className="w-12 h-12 text-accent" />
                    <h3 className="text-xl font-headline text-foreground">Venue</h3>
                    <p className="text-muted-foreground">Main Auditorium</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <Calendar className="w-12 h-12 text-accent" />
                    <h3 className="text-xl font-headline text-foreground">Date & Time</h3>
                    <p className="text-muted-foreground">Oct 25, 2025 - 10:00 AM</p>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-12 text-2xl font-headline text-primary">Stay Tuned for the Grand Opening!</p>
        </section>
      </div>
    </>
  );
}
