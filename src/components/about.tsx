import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const members = [
  { name: 'Member One', role: 'President', initials: 'M1' },
  { name: 'Member Two', role: 'Vice President', initials: 'M2' },
  { name: 'Member Three', role: 'Secretary', initials: 'M3' },
  { name: 'Member Four', role: 'Treasurer', initials: 'M4' },
  { name: 'Member Five', role: 'Event Lead', initials: 'M5' },
  { name: 'Member Six', role: 'Tech Lead', initials: 'M6' },
  { name: 'Member Seven', role: 'PR Head', initials: 'M7' },
  { name: 'Member Eight', role: 'Member', initials: 'M8' },
];

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">Meet the Team</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">The driving force behind our club's success, dedicated to fostering a vibrant tech community.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.name} className="text-center flex flex-col items-center">
              <Avatar className="w-28 h-28 border-4 border-primary/80 shadow-lg">
                <Image src="https://placehold.co/112x112.png" alt={member.name} width={112} height={112} data-ai-hint="professional portrait" />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div className="mt-4">
                <h3 className="text-lg font-headline font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
