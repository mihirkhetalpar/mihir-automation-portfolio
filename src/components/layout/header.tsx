"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const navItems = [
  { name: 'Showcase', href: '#showcase' },
  { name: 'Demo', href: '#demo' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b border-primary/10 bg-background/80 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-headline text-lg font-bold text-glow">
          MK
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:text-secondary">
          <a href="mailto:mihirkhetalpar111@gmail.com?subject=AI%20Automation%20Inquiry">
            Contact Me
          </a>
        </Button>
      </div>
    </header>
  );
}
