import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 py-6">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Mihir Khetalpar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/mihir-khetalpar-1303021b4/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Mihir Khetalpar's LinkedIn Profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
