import { Bot, Cpu, Ticket, Workflow } from "lucide-react";
import { GlowingCard } from "../shared/GlowingCard";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { CardContent, CardHeader, CardTitle } from "../ui/card";

const services = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "IT Automation",
    description: "End-to-end automation of complex IT processes, from user provisioning to infrastructure management.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI Bots & Copilots",
    description: "Developing intelligent conversational AI and copilots to augment human capabilities and streamline workflows.",
  },
  {
    icon: <Ticket className="h-6 w-6" />,
    title: "Ticketing Automation",
    description: "Leveraging GenAI to triage, route, and resolve support tickets with superhuman speed and accuracy.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Enterprise Workflow Automation",
    description: "Designing and implementing robust, scalable automation for core business functions across the enterprise.",
  },
];

export function ServicesSection() {
  return (
    <Section id="services">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>Service Portfolio</SectionTitle>
        <p className="max-w-2xl text-center text-lg text-muted-foreground">
          Tailored automation and AI services designed for enterprise-scale challenges.
        </p>
        <div className="mt-4 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <GlowingCard key={service.title}>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-glow">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </GlowingCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
