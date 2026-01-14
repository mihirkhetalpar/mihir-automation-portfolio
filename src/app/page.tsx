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
import { ScrollAnimator } from '@/components/shared/ScrollAnimator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <ScrollAnimator animation="fade-in-up">
          <AutomationShowcaseSection />
        </ScrollAnimator>
        <ScrollAnimator animation="slide-in-left">
          <TicketTriageSection />
        </ScrollAnimator>
        <ScrollAnimator animation="fade-in-up">
          <ServicesSection />
        </ScrollAnimator>
        <ScrollAnimator animation="slide-in-right">
          <ExperienceSection />
        </ScrollAnimator>
        <ScrollAnimator animation="fade-in-up">
          <SkillsSection />
        </ScrollAnimator>
        <ScrollAnimator animation="slide-in-left">
          <CertificationSection />
        </ScrollAnimator>
        <ScrollAnimator animation="fade-in-up">
          <ContactSection />
        </ScrollAnimator>
      </main>
      <Footer />
    </div>
  );
}
