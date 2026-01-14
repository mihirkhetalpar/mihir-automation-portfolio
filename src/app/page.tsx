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
    <div className="flex flex-col min-h-dvh bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection animationType="slide-in-left">
          <AutomationShowcaseSection />
        </AnimatedSection>
        <AnimatedSection animationType="slide-in-right">
          <TicketTriageSection />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up">
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection animationType="slide-in-left">
          <ExperienceSection />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up">
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection animationType="slide-in-right">
          <CertificationSection />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
