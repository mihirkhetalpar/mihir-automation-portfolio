import { CopilotIcon } from "../icons/copilot";
import { GlowingCard } from "../shared/GlowingCard";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Azure, Database, BrainCircuit, Code, Terminal, Power } from 'lucide-react';

const skillCategories = [
  {
    title: "Automation & RPA",
    icon: <Power className="h-6 w-6 text-primary" />,
    skills: ["Power Automate", "UiPath", "Microsoft Power Platform"],
  },
  {
    title: "AI & ML",
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    skills: ["Copilot Studio", "Generative AI", "Azure AI", "AI Builder"],
  },
  {
    title: "Data & Analytics",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["Power BI", "SQL", "Dataverse", "Microsoft Fabric"],
  },
  {
    title: "Scripting & Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["PowerShell", "Python", "C#", "JavaScript"],
  },
];


export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <p className="max-w-2xl text-center text-lg text-muted-foreground">
          Proficient in a wide array of technologies for building production-grade automation systems.
        </p>
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
