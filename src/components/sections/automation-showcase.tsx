import { BrainCircuit, Bot, CalendarDays, DatabaseZap, AreaChart } from "lucide-react";
import { GlowingCard } from "../shared/GlowingCard";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { Badge } from "../ui/badge";
import { CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "GenAI-Driven Ticket Triaging System",
    description: "Enterprise-scale automation for IT service desks.",
    icon: <BrainCircuit className="h-8 w-8 text-secondary" />,
    details: [
      "Processes 12,000–15,000 tickets per month",
      "Reads ticket subject and body",
      "Compares against knowledge base",
      "Selects the correct resolver team",
      "Returns AI reasoning & justification",
    ],
    impact: [
      "Reduced routing time from minutes to under 30 seconds",
      "Significantly improved SLA compliance and routing accuracy",
      "Adopted by multiple IT teams",
    ],
    technologies: ["Copilot Studio", "Power Automate", "GenAI", "Knowledge Base", "APIs"],
  },
  {
    title: "Microsoft Teams Copilot Service Desk Bot",
    description: "A production-ready conversational AI assistant for employees.",
    icon: <Bot className="h-8 w-8 text-secondary" />,
    details: [
      "Create IT tickets",
      "Check ticket status",
      "Request software installation",
      "Add comments to tickets",
      "Escalate issues & reopen or close tickets",
      "Provide feedback & chat with AI",
    ],
    impactHeading: "Usage",
    impact: ["This bot is actively used by employees inside Microsoft Teams as a self-service IT portal."],
    technologies: ["Copilot Studio", "Power Automate", "ITSM APIs", "Teams Integration"],
  },
  {
    title: "Monthly Agent Roster Generator",
    description: "Automated workforce scheduling.",
    icon: <CalendarDays className="h-8 w-8 text-secondary" />,
    details: [
        "Generates monthly rosters for 20+ agents",
        "Handles shifts, leaves and availability",
        "Eliminates manual scheduling work",
    ],
    technologies: ["Power Automate", "Excel / Data Sources"],
  },
  {
    title: "SQL Server Automation Pack",
    description: "End-to-end SQL server provisioning and patching.",
    icon: <DatabaseZap className="h-8 w-8 text-secondary" />,
    details: [
        "Install SQL Server",
        "Configure SSMS",
        "Apply patches",
        "Minimize manual intervention",
    ],
    technologies: ["PowerShell", "Power Automate Desktop", "SQL Server"],
  },
  {
    title: "Power BI Monitoring Automation",
    description: "Automated monitoring and reporting workflows using Power BI and Power Platform.",
    icon: <AreaChart className="h-8 w-8 text-secondary" />,
    technologies: ["Power BI", "Power Automate"],
  }
];

export function AutomationShowcaseSection() {
  return (
    <Section id="showcase">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>AI-Powered Automation Showcase</SectionTitle>
        <p className="max-w-3xl text-center text-lg text-muted-foreground">
          Real enterprise-grade automation systems built using Copilot Studio, Power Automate, RPA and GenAI.
        </p>
        <div className="grid w-full gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <GlowingCard key={project.title} className={`flex flex-col ${index === 0 || index === 1 ? "lg:col-span-1" : "lg:col-span-1" } ${ index === 0 ? "lg:col-span-2" : ""}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl leading-tight">{project.title}</CardTitle>
                    <CardDescription className="mt-1">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-6">
                {project.details && (
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {project.impact && (
                   <div>
                    <h4 className="font-semibold mb-2">{project.impactHeading || "Impact:"}</h4>
                     <ul className="space-y-2">
                       {project.impact.map((item, i) => (
                         <li key={i} className="flex items-start gap-3">
                           <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                           <span className="text-muted-foreground">{item}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                )}
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
