import { University } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-secondary/30">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <University className="h-5 w-5 text-primary" />
          <span className="font-headline text-md font-medium text-foreground">CSI Student Chapter</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
