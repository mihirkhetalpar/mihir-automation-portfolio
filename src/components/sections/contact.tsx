import { Button } from "../ui/button";
import { Section } from "../shared/Section";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <Section id="contact" className="text-center">
      <div className="rounded-lg border-2 border-primary/20 bg-card/50 p-8 backdrop-blur-sm md:p-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary text-glow md:text-4xl">
          Ready to see how AI-powered automation can transform IT operations?
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.8)] transition-shadow">
            <a href="mailto:mihir.khetalpar.dev@gmail.com?subject=Free%20Automation%20Consultation">
              Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:text-secondary">
            <a href="https://www.linkedin.com/in/mihir-khetalpar/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
