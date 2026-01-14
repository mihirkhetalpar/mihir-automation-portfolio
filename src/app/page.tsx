"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AutomationShowcaseSection } from '@/components/sections/automation-showcase';
import { TicketTriageSection } from '@/components/sections/ticket-triage';
import { ServicesSection } from '@/components/sections/services';
import { ExperienceSection } from '@/components/sections/experience';
import { SkillsSection } from '@/components/sections/skills';
import { CertificationSection } from '@/components/sections/certification';
import { ContactSection } from '@/components/sections/contact';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection animationType="slideInFromLeft">
          <AutomationShowcaseSection />
        </AnimatedSection>
        <AnimatedSection animationType="slideInFromRight">
          <TicketTriageSection />
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp">
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection animationType="slideInFromLeft">
          <ExperienceSection />
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp">
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection animationType="slideInFromRight">
          <CertificationSection />
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
