import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import { ImageSlideshow } from '@/components/image-slideshow';
import { Counter } from '@/components/counter';
import { Building, Award, Users, Info } from 'lucide-react';
import { ScrollAnimator } from './scroll-animator';

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

const studentCoordinator = { name: 'Mrs. Vanitha Sheba M', role: 'SBC-CSI' };

const csiInfo = {
  title: 'About Computer Society of India',
  description:
    'Being closely associated with Students the Society has developed a well-established net-work of “Student Branches” all across the country. CSI has 488 student branches with more than 90,000 Student Volunteers across the nation. The activities conducted for the Students associated with the Society include lecture meetings, seminars, conferences, training programmes, programming contests and practical visits to installations. CSI has a strong Educational Directorate based at Chennai which undertakes activities related to Certification of professionals related to the latest technologies. Its recent initiative of distance education in the Business Domain areas offers technology enabled learning supported by personal counseling & expert advice. In an ever changing environment, CSI offers professional counseling being a great need of the hour. And this is done by being in close contact with it’s young members through various events, conferences, symposia to name a few. CSI regularly organises SEARCC Programming Contest, Alan Turning Quiz, Discover Thinking Project Contest, On-line Programming Contest etc. for the students.',
  stats: [
    { value: 15000, label: 'Happy Members', symbol: '+' },
    { value: 780, label: 'Institutes', symbol: '+' },
    { value: 25, label: 'Industries', symbol: '+' },
  ],
  cards: [
    {
      icon: Info,
      title: 'About CSI',
      text: 'Computer Society of India (CSI) is the first and largest body of computer professionals in India. It was started on 6 March 1965 by a few computer professionals and has now grown to be the national body representing computer professionals.',
    },
    {
      icon: Users,
      title: 'What we do',
      text: 'Having 488 student branches and rooted firmly at 73 different locations, CSI has plans of opening more chapters & activity centers in smaller towns of the country. The idea is to spread the knowledge, and provide opportunities to as many interested as possible.',
    },
    {
      icon: Award,
      title: 'CSI Awards',
      text: 'We Recognize Innovations And Indigenous Developments In The Field Of Information Technology In India. CSI Awards Are Instituted To Acknowledge And Motivate Individuals And Organizations Working In The ICT Field.',
    },
  ],
};

const slideshowImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'CSI College Event 1', hint: 'student presentation' },
  { src: 'https://placehold.co/800x600.png', alt: 'CSI College Event 2', hint: 'coding workshop students' },
  { src: 'https://placehold.co/800x600.png', alt: 'CSI College Event 3', hint: 'group photo students' },
  { src: 'https://placehold.co/800x600.png', alt: 'CSI College Event 4', hint: 'speaker on stage' },
  { src: 'https://placehold.co/800x600.png', alt: 'CSI College Event 5', hint: 'students networking' },
];

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">{csiInfo.title}</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">{csiInfo.description}</p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {csiInfo.cards.map((card, index) => (
            <div key={index} className="bg-card/80 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <card.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          {csiInfo.stats.map((stat, index) => (
            <ScrollAnimator key={index} delay={index * 100}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary">
                  <Counter to={stat.value} />
                  {stat.symbol}
                </div>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator>
          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-headline text-primary text-center mb-8">Our Chapter Activities</h3>
            <ImageSlideshow images={slideshowImages} />
          </div>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">Meet the Team</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">The driving force behind our club's success, dedicated to fostering a vibrant tech community.</p>
          </div>
        </ScrollAnimator>
        
        <div className="mt-16 flex justify-center mb-16">
          <ScrollAnimator>
            <div className="group relative text-center flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:shadow-2xl hover:shadow-primary/20 w-full max-w-sm">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-56 h-56 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-pulse"></div>
              <Avatar className="w-40 h-40 border-4 border-primary/80 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Image src="https://placehold.co/160x160.png" alt={studentCoordinator.name} width={160} height={160} data-ai-hint="professional portrait" />
                <AvatarFallback>{studentCoordinator.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="mt-6 z-10">
                <h3 className="text-2xl font-headline font-semibold">{studentCoordinator.name}</h3>
                <p className="text-primary text-lg">{studentCoordinator.role}</p>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {coreMembers.map((member, index) => (
            <ScrollAnimator key={member.name} delay={index * 100}>
              <div
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
            </ScrollAnimator>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
            <ScrollAnimator delay={coreMembers.length * 100}>
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
            </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}
