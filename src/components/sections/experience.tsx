import { GlowingCard } from "../shared/GlowingCard";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle2 } from "lucide-react";

const timelineEvents = [
  {
    company: "Yoda Tech",
    role: "RPA Developer",
    period: "2022 - Present",
    achievements: [
      "Led the design and implementation of over 20 production-grade automation projects.",
      "Contributed to a 30% increase in operational efficiency through strategic workflow automation.",
      "Pioneered the use of Generative AI for internal support systems.",
      "Mentored junior developers on best practices in RPA and AI integration.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>Experience Timeline</SectionTitle>
        <div className="relative w-full max-w-2xl">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-primary/20" />
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-background" />
              <GlowingCard>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-headline text-2xl text-secondary text-glow-secondary">
                        {event.role}
                      </CardTitle>
                      <p className="text-md font-medium text-primary">{event.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {event.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </GlowingCard>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
