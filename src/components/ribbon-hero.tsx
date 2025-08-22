"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Award, MapPin, Calendar, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RibbonHero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-headline text-primary-foreground mb-4">
          CSI Student Chapter
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Inauguration 2025
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <Button size="lg" asChild>
            <a href="#events">View Events</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
             <a href="#contact">Contact Us</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full"><Award className="w-8 h-8 text-primary" /></div>
              <h3 className="text-xl font-headline text-foreground">Chief Guest</h3>
              <p className="text-muted-foreground text-sm">Dr. M. Senthil Kumar, Chairman, CSI-Kancheepuram Chapter</p>
            </CardContent>
          </Card>
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
            <CardContent className="p-6 flex flex-col items-center gap-4">
               <div className="p-3 bg-primary/10 rounded-full"><MapPin className="w-8 h-8 text-primary" /></div>
              <h3 className="text-xl font-headline text-foreground">Venue</h3>
              <p className="text-muted-foreground text-sm">2nd floor auditorium</p>
            </CardContent>
          </Card>
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full"><Calendar className="w-8 h-8 text-primary" /></div>
              <h3 className="text-xl font-headline text-foreground">Date & Time</h3>
              <p className="text-muted-foreground text-sm">August 26th, 1:00 PM - 3:30 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
