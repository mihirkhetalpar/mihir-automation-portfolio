import { BrainCircuit, Repeat, FileCheck } from "lucide-react";
import { GlowingCard } from "../shared/GlowingCard";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { Badge } from "../ui/badge";
import { CardContent, CardHeader, CardTitle } from "../ui/card";

const projects = [
  {
    title: "Enterprise-Scale Invoice Processing",
    description: "Developed an end-to-end automation solution that processes over 10,000 invoices monthly, reducing manual effort by 95% and improving data accuracy across financial systems.",
    technologies: ["Power Automate", "AI Builder", "Dataverse", "SQL"],
    icon: <FileCheck className="h-8 w-8 text-secondary" />,
  },
  {
    title: "GenAI-Powered Support Ticket Triaging",
    description: "Architected a generative AI system to automatically categorize and route IT support tickets. This increased SLA compliance by 40% and enhanced routing accuracy to 98%.",
    technologies: ["Generative AI", "Copilot Studio", "Power Automate", "APIs"],
    icon: <BrainCircuit className="h-8 w-8 text-secondary" />,
  },
  {
    title: "Automated Employee Onboarding Workflow",
    description: "Created a comprehensive workflow that automates user account creation, permissions assignment, and hardware provisioning for new hires, cutting onboarding time from days to minutes.",
    technologies: ["PowerShell", "Power Automate", "Azure AD", "Microsoft Graph"],
    icon: <Repeat className="h-8 w-8 text-secondary" />,
  },
];

export function AutomationShowcaseSection() {
  return (
    <Section id="showcase">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>AI-Powered Automation Showcase</SectionTitle>
        <p className="max-w-2xl text-center text-lg text-muted-foreground">
          Showcasing practical, enterprise-level solutions that drive efficiency and innovation.
        </p>
        <div className="grid w-full gap-6 md:grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => (
            <GlowingCard key={project.title} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  {project.icon}
                </div>
                <CardTitle className="font-headline text-xl leading-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-6">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </GlowingCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
