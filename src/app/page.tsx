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

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AutomationShowcaseSection />
        <TicketTriageSection />
        <ServicesSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
