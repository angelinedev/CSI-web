import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';

const coreMembers = [
  { name: 'Mahendra U', role: 'President-CSI', department: 'CSE' },
  { name: 'Megha Shree G', role: 'Vice President- CSI', department: 'CSBS' },
  { name: 'Syed Tamim Mehdi', role: 'Secretary- CSI', department: 'CSE' },
  { name: 'Aliah Ridha A', role: 'Joint Secretary- CSI', department: 'CSE' },
  { name: 'Deepika R', role: 'Treasurer- CSI', department: 'CSE' },
  { name: 'Rajadurga R', role: 'Joint Treasurer- CSI', department: 'CSE' },
  { name: 'Manikandan Askar K', role: 'Executive Member- CSI', department: 'CSE' },
  { name: 'Angeline Hephzibah J', role: 'Executive Member- CSI', department: 'CSE' },
  { name: 'Shruthi D', role: 'Executive Member- CSI', department: 'CSE' },
];

const executiveMember = { name: 'Sharan S', role: 'Executive Member- CSI', department: 'CSBS' };

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">Meet the Team</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">The driving force behind our club's success, dedicated to fostering a vibrant tech community.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {coreMembers.map((member) => (
            <div
              key={member.name}
              className="group relative text-center flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-pulse"></div>

              <Avatar className="w-28 h-28 border-4 border-primary/80 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Image src="https://placehold.co/112x112.png" alt={member.name} width={112} height={112} data-ai-hint="professional portrait" />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="mt-4 z-10">
                <h3 className="text-lg font-headline font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.department}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
            <div
              className="group relative text-center flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-pulse"></div>

              <Avatar className="w-28 h-28 border-4 border-primary/80 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Image src="https://placehold.co/112x112.png" alt={executiveMember.name} width={112} height={112} data-ai-hint="professional portrait" />
                <AvatarFallback>{executiveMember.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="mt-4 z-10">
                <h3 className="text-lg font-headline font-semibold">{executiveMember.name}</h3>
                <p className="text-primary">{executiveMember.role}</p>
                <p className="text-sm text-muted-foreground">{executiveMember.department}</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}