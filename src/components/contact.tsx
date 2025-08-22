import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, User, Building } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions or just to say hello.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            <InfoItem icon={User} title="President" text="Mahendra U (+91 12345 67890)" />
            <InfoItem icon={User} title="Student Branch Counselor" text="Mrs. Vanitha Sheba M" />
            <InfoItem icon={Mail} title="Email Us" text="csijce@gmail.com" />
            <InfoItem icon={Building} title="Visit Us" text="2nd floor cse department faculty room" />
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <Input placeholder="Your Name" aria-label="Your Name" />
                <Input type="email" placeholder="Your Email" aria-label="Your Email" />
                <Textarea placeholder="Your Message" rows={5} aria-label="Your Message" />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, title, text }: { icon: React.ElementType, title: string, text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-headline text-foreground">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
