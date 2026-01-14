import Link from "next/link";
import { Award } from "lucide-react";
import { GlowingCard } from "../shared/GlowingCard";
import { Section } from "../shared/Section";
import { Button } from "../ui/button";
import { CardContent } from "../ui/card";

export function CertificationSection() {
  return (
    <Section id="certification" className="py-16 sm:py-24">
      <GlowingCard className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 text-center md:p-12 md:text-left">
              <p className="font-headline text-sm font-semibold uppercase tracking-widest text-secondary text-glow-secondary">
                Microsoft Certified
              </p>
              <h3 className="mt-2 font-headline text-3xl font-bold text-primary text-glow">
                Power Platform Fundamentals
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Credential ID: PL-900
              </p>
              <div className="mt-6 flex justify-center md:justify-start">
                <Button asChild variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                  <a 
                    href="https://learn.microsoft.com/api/credentials/share/en-us/MihirK-4249/D5564DCE23E301ED?sharingId=77ECA4ABE1D58494"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Validate Certification
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-primary/5 p-12">
              <Award className="h-32 w-32 text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.6)]" />
            </div>
          </div>
        </CardContent>
      </GlowingCard>
    </Section>
  );
}
