import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const events = [
  {
    title: 'Tech Talk: The Future of AI',
    image: 'https://placehold.co/600x400.png',
    hint: 'technology conference',
  },
  {
    title: 'Workshop: Modern Web Development',
    image: 'https://placehold.co/600x400.png',
    hint: 'coding workshop',
  },
  {
    title: 'CSI Annual Hackathon 2025',
    image: 'https://placehold.co/600x400.png',
    hint: 'students coding',
  },
];

export function Events() {
  return (
    <section id="events" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Get ready for an exciting year ahead! Here's a glimpse of what we have planned.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-md hover:shadow-xl">
              <CardHeader className="p-0 relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={event.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <Badge className="mb-2 bg-accent/80 text-accent-foreground">Coming Soon</Badge>
                <CardTitle className="font-headline text-xl text-foreground">{event.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
