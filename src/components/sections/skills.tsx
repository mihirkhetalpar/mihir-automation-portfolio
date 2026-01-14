import { GlowingCard } from "../shared/GlowingCard";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Bot, BrainCircuit, Code, Database, Power } from 'lucide-react';

const skillCategories = [
  {
    title: "Power Platform",
    icon: <Power className="h-6 w-6 text-primary" />,
    skills: ["Power Automate", "Power Automate Desktop", "Copilot Studio", "Power Apps (Basic)"],
  },
  {
    title: "AI & Automation",
    icon: <Bot className="h-6 w-6 text-primary" />,
    skills: ["Generative AI", "Agentic AI", "Knowledge-based AI routing"],
  },
  {
    title: "Data & Systems",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["Power BI", "SQL", "APIs"],
  },
  {
    title: "Scripting",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["PowerShell"],
  },
];


export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <GlowingCard key={category.title}>
              <CardHeader className="flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="font-headline text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">&bull;</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </GlowingCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
