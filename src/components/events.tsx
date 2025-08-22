import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ScrollAnimator } from './scroll-animator';

const events = [
  {
    title: 'Event 1',
    image: 'https://storage.googleapis.com/stedi-studio-assets/project-assets/csi-inaguration-2025/coming-soon.png',
    hint: 'coming soon',
  },
  {
    title: 'Event 2',
    image: 'https://storage.googleapis.com/stedi-studio-assets/project-assets/csi-inaguration-2025/coming-soon.png',
    hint: 'coming soon',
  },
  {
    title: 'Event 3',
    image: 'https://storage.googleapis.com/stedi-studio-assets/project-assets/csi-inaguration-2025/coming-soon.png',
    hint: 'coming soon',
  },
  {
    title: 'Event 4',
    image: 'https://storage.googleapis.com/stedi-studio-assets/project-assets/csi-inaguration-2025/coming-soon.png',
    hint: 'coming soon',
  },
];

export function Events() {
  return (
    <section id="events" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Get ready for an exciting year ahead! Here's a glimpse of what we have planned.</p>
        </div>
        </ScrollAnimator>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <ScrollAnimator key={index} delay={index * 100} animationClassName="animate-fade-in-up group">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 animate-tilt"></div>
                <Card className="relative overflow-hidden group transform md:group-hover:-translate-y-2 transition-transform duration-500 ease-in-out shadow-md md:group-hover:shadow-xl h-full flex flex-col">
                  <CardHeader className="p-0 relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      data-ai-hint={event.hint}
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <Badge className="mb-2 bg-accent/80 text-accent-foreground self-start">Coming Soon</Badge>
                    <CardTitle className="font-headline text-xl text-foreground mt-auto">{event.title}</CardTitle>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
