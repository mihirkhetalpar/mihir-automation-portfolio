import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex h-[80dvh] min-h-[500px] w-full items-center justify-center text-center">
      <div className="container z-10 px-4">
        <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)]">
          Mihir Khetalpar
        </h1>
        <p className="mx-auto mt-6 max-w-3xl font-headline text-2xl font-medium tracking-tight text-secondary md:text-3xl text-glow-secondary">
          AI Automation Architect
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Building production-grade GenAI and Power Platform automations for enterprise IT operations.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-shadow hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.8)]">
            <a href="#showcase">
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:text-secondary">
            <a href="#contact">
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
