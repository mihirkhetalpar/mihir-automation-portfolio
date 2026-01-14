"use client";

import { triageTicket, TriageTicketOutput } from "@/ai/flows/ticket-triaging-demo";
import { useState, useTransition } from "react";
import { Loader2, Zap, Users, Lightbulb, ChevronRight } from "lucide-react";
import { Section } from "../shared/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { GlowingCard } from "../shared/GlowingCard";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useToast } from "@/hooks/use-toast";

const exampleTickets = [
  "I can't connect to the office Wi-Fi on my new laptop. It keeps saying 'authentication failed'. My colleague is connected fine.",
  "The CRM dashboard is not loading any sales data for the past 24 hours. This is urgent as we need it for our weekly report.",
  "I'm getting a 'permission denied' error when trying to access the Q3 financial records folder on the shared drive.",
];

export function TicketTriageSection() {
  const [ticketText, setTicketText] = useState("");
  const [result, setResult] = useState<TriageTicketOutput | null>(null);
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
    startTransition(async () => {
      try {
        const response = await triageTicket({ ticketData: ticketText });
        setResult(response);
      } catch (error) {
        console.error("Triage failed:", error);
        toast({
          title: "Error",
          description: "Failed to triage ticket. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  const handleExampleClick = (example: string) => {
    setTicketText(example);
    setResult(null);
  }

  return (
    <Section id="demo">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>GenAI Ticket Triaging Demo</SectionTitle>
        <p className="max-w-2xl text-center text-lg text-muted-foreground">
          Experience AI-driven efficiency firsthand. Enter a support ticket description below to see how generative AI can instantly determine the correct team and provide clear reasoning for its decision.
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
                    <button key={i} onClick={() => handleExampleClick(ex)} className="text-left text-xs p-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-primary">
                      Example {i+1} <ChevronRight className="inline h-3 w-3" />
                    </button>
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
                <p>AI is thinking...</p>
              </div>
            ) : result && (
              <Alert className="border-2 border-accent/50 bg-accent/10 shadow-lg shadow-accent/10">
                <AlertTitle className="font-headline text-2xl flex items-center gap-3 text-accent text-glow-accent">
                  Triage Complete!
                </AlertTitle>
                <AlertDescription>
                  <div className="mt-4 grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 font-semibold text-lg text-foreground">
                        <Users className="h-5 w-5 text-accent" />
                        Assigned Team
                      </h4>
                      <p className="text-2xl font-bold font-headline text-primary text-glow">{result.team}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 font-semibold text-lg text-foreground">
                        <Lightbulb className="h-5 w-5 text-accent" />
                        Reasoning
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
