import { GlowingCard } from "../shared/GlowingCard";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { CheckCircle2, Award } from "lucide-react";

const timelineEvents = [
  {
    company: "Yoda Tech",
    role: "Engineer – RPA Developer",
    period: "Oct 2024 – Present",
    achievements: [
      "Architected and delivered enterprise-scale GenAI ticket triaging automation",
      "Built scalable backend orchestration using Power Automate logic flows",
      "Enabled cross-team adoption across IT teams",
      "Improved SLA compliance and routing accuracy",
    ],
    projects: [
        "GenAI Ticket Triage",
        "Agent Roster Scheduling",
        "SQL Server Automation",
        "Power BI Monitoring",
    ],
    award: "Best in Automation Delivery – Aug 2025"
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative w-full max-w-3xl">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-primary/20" />
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-background" />
              <GlowingCard>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="font-headline text-2xl text-secondary text-glow-secondary">
                        {event.role}
                      </CardTitle>
                      <p className="text-md font-medium text-primary">{event.company}</p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground sm:mt-0">{event.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {event.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h4 className="font-semibold mb-2">Delivered multiple production automations:</h4>
                     <ul className="space-y-2">
                       {event.projects.map((item, i) => (
                         <li key={i} className="flex items-start gap-3">
                           <span className="text-primary">&bull;</span>
                           <span className="text-muted-foreground">{item}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                  {event.award && (
                     <div className="flex items-center gap-3 rounded-md bg-accent/10 p-3">
                        <Award className="h-6 w-6 text-accent" />
                        <p className="font-semibold text-accent">{event.award}</p>
                    </div>
                  )}
                </CardContent>
              </GlowingCard>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
