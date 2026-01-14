"use client";

import { useState, useTransition } from "react";
import { Loader2, Zap, Users, Lightbulb, Percent, BrainCircuit } from "lucide-react";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { GlowingCard } from "../shared/GlowingCard";
import { CardContent } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useToast } from "@/hooks/use-toast";

const triageRules = {
  "Service Desk": ["password", "login", "account", "locked", "reset"],
  "Messaging Team": ["email", "outlook", "teams", "mail"],
  "End User Computing": ["laptop", "desktop", "hardware", "screen", "keyboard", "mouse", "computer"],
  "Network Team": ["vpn", "network", "wifi", "internet", "connect"],
  "Application Support": ["software", "install", "access", "license", "app", "application", "crm"],
  "Infrastructure / DBA": ["database", "sql", "server", "performance", "slow"],
};

type TriageResult = {
  team: string;
  confidence: number;
  reasoning: string;
};

const runTriageSimulation = (ticketText: string): TriageResult => {
  const text = ticketText.toLowerCase();
  let bestMatch = { team: "IT Support", score: 0, keywords: [] as string[] };

  for (const [team, keywords] of Object.entries(triageRules)) {
    const foundKeywords = keywords.filter(kw => text.includes(kw));
    if (foundKeywords.length > bestMatch.score) {
      bestMatch = { team, score: foundKeywords.length, keywords: foundKeywords };
    }
  }

  if (bestMatch.score === 0) {
    return {
      team: "IT Support",
      confidence: 30,
      reasoning: "No specific keywords were detected. The ticket has been routed to general IT Support for further analysis.",
    };
  }
  
  const confidence = Math.min(65 + bestMatch.score * 15, 98);
  const reasoning = `Detected keywords '${bestMatch.keywords.join("', '")}', which strongly indicate the issue is related to the ${bestMatch.team} category. Confidence is high based on keyword relevance.`;

  return {
    team: bestMatch.team,
    confidence,
    reasoning,
  };
};


const exampleTickets = [
  "I can't connect to the office Wi-Fi on my new laptop. It keeps saying 'authentication failed'.",
  "The CRM dashboard is not loading any sales data for the past 24 hours. This is urgent.",
  "My password for the sales portal has expired and I can't reset it.",
];

export function TicketTriageSection() {
  const [ticketText, setTicketText] = useState("");
  const [result, setResult] = useState<TriageResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleTriage = () => {
    if (!ticketText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some ticket text to triage.",
        variant: "destructive",
      });
      return;
    }
    setResult(null);
    startTransition(() => {
      // Simulate network delay for a more realistic feel
      setTimeout(() => {
        const response = runTriageSimulation(ticketText);
        setResult(response);
      }, 750);
    });
  };

  const handleExampleClick = (example: string) => {
    setTicketText(example);
    setResult(null);
  }

  return (
    <Section id="demo">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>Simulated AI Ticket Triage</SectionTitle>
        <p className="max-w-3xl text-center text-lg text-muted-foreground">
          This demo simulates an AI triage engine using frontend logic. Enter a ticket description to see how rules-based routing assigns it to the correct team and provides a confidence score.
        </p>
        <p className="text-center text-sm text-accent/80 font-medium -mt-4">
          (AI Simulation based on enterprise routing logic)
        </p>

        <GlowingCard className="w-full max-w-3xl">
          <CardContent className="p-6">
            <div className="grid gap-4">
              <Textarea
                placeholder="e.g., 'My password for the sales portal has expired and I can't reset it.'"
                value={ticketText}
                onChange={(e) => setTicketText(e.target.value)}
                className="min-h-[120px] bg-background/50 border-primary/30 text-base"
                disabled={isPending}
              />
              <div className="text-sm text-muted-foreground">
                Try an example:
                <div className="flex flex-wrap gap-2 mt-2">
                  {exampleTickets.map((ex, i) => (
                    <Button key={i} onClick={() => handleExampleClick(ex)} variant="outline" size="sm" className="text-xs text-primary border-primary/20 hover:bg-primary/10 hover:text-primary">
                      Example {i+1}
                    </Button>
                  ))}
                </div>
              </div>
              <Button onClick={handleTriage} disabled={isPending} className="w-full">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" /> Triage Ticket
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </GlowingCard>

        {(isPending || result) && (
          <div className="w-full max-w-3xl mt-4">
            {isPending ? (
              <div className="flex items-center justify-center gap-3 text-lg text-primary text-glow p-8 rounded-lg border-2 border-dashed border-primary/30">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>AI Simulation Running...</p>
              </div>
            ) : result && (
              <Alert className="border-2 border-accent/50 bg-accent/10 shadow-lg shadow-accent/10">
                <AlertTitle className="font-headline text-2xl flex items-center gap-3 text-accent text-glow-accent">
                  <BrainCircuit className="h-7 w-7" />
                  Triage Complete
                </AlertTitle>
                <AlertDescription>
                  <div className="mt-6 grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h4 className="flex items-center gap-2 font-semibold text-lg text-foreground">
                            <Users className="h-5 w-5 text-accent" />
                            Assigned Team
                          </h4>
                          <p className="text-2xl font-bold font-headline text-primary text-glow">{result.team}</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="flex items-center gap-2 font-semibold text-lg text-foreground">
                            <Percent className="h-5 w-5 text-accent" />
                            Confidence Score
                          </h4>
                          <p className="text-2xl font-bold font-headline text-primary text-glow">{result.confidence}%</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 font-semibold text-lg text-foreground">
                        <Lightbulb className="h-5 w-5 text-accent" />
                        AI Reasoning
                      </h4>
                      <p className="text-muted-foreground">{result.reasoning}</p>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
