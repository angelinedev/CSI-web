"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#events', label: 'Events' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-center relative">
        <Link href="/" className="absolute left-4 md:left-8 flex items-center gap-2 font-bold">
          <Logo className="h-10 w-10" />
          <span className={cn(
            "font-headline text-lg hidden sm:inline",
            isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>CSI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border/60 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-all duration-300 hover:text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden absolute right-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <Link href="/" className="flex items-center gap-2 mb-8 font-bold" onClick={handleLinkClick}>
                  <Logo className="h-10 w-10" />
                  <span className="font-headline text-lg">CSI</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
