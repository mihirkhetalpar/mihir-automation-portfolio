'use server';
/**
 * @fileOverview A ticket triaging AI agent.
 *
 * - triageTicket - A function that handles the ticket triaging process.
 * - TriageTicketInput - The input type for the triageTicket function.
 * - TriageTicketOutput - The return type for the triageTicket function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TriageTicketInputSchema = z.object({
  ticketData: z.string().describe('The text content of the ticket.'),
});
export type TriageTicketInput = z.infer<typeof TriageTicketInputSchema>;

const TriageTicketOutputSchema = z.object({
  team: z.string().describe('The support team to which the ticket should be routed.'),
  reasoning: z.string().describe('The rationale for routing the ticket to the selected team.'),
});
export type TriageTicketOutput = z.infer<typeof TriageTicketOutputSchema>;

export async function triageTicket(input: TriageTicketInput): Promise<TriageTicketOutput> {
  return triageTicketFlow(input);
}

const prompt = ai.definePrompt({
  name: 'triageTicketPrompt',
  input: {schema: TriageTicketInputSchema},
  output: {schema: TriageTicketOutputSchema},
  prompt: `You are an AI-powered ticket triaging system. Your task is to analyze the content of a ticket and determine the most appropriate support team to handle the issue.

Analyze the following ticket data:

Ticket Data: {{{ticketData}}}

Based on the ticket data, select the correct support team and provide a rationale for your decision.  The "team" field in the JSON must be one of:

*   "IT Support"
*   "Network Support"
*   "Application Support"
*   "Database Support"
*   "Security Support"

Ensure the output is a JSON object with 'team' and 'reasoning' fields.  The output MUST BE valid JSON.
`,
});

const triageTicketFlow = ai.defineFlow(
  {
    name: 'triageTicketFlow',
    inputSchema: TriageTicketInputSchema,
    outputSchema: TriageTicketOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
