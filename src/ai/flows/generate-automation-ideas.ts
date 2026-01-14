'use server';

/**
 * @fileOverview A flow for generating automation ideas based on a business process description.
 *
 * - generateAutomationIdeas - A function that generates automation ideas.
 * - GenerateAutomationIdeasInput - The input type for the generateAutomationIdeas function.
 * - GenerateAutomationIdeasOutput - The return type for the generateAutomationIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAutomationIdeasInputSchema = z.string().describe('A description of current business processes.');
export type GenerateAutomationIdeasInput = z.infer<typeof GenerateAutomationIdeasInputSchema>;

const GenerateAutomationIdeasOutputSchema = z.object({
  automationIdeas: z.array(z.string()).describe('A list of potential automation ideas.'),
  reasoning: z.string().describe('The reasoning behind the generated automation ideas.'),
});
export type GenerateAutomationIdeasOutput = z.infer<typeof GenerateAutomationIdeasOutputSchema>;

export async function generateAutomationIdeas(input: GenerateAutomationIdeasInput): Promise<GenerateAutomationIdeasOutput> {
  return generateAutomationIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAutomationIdeasPrompt',
  input: {schema: GenerateAutomationIdeasInputSchema},
  output: {schema: GenerateAutomationIdeasOutputSchema},
  prompt: `You are an AI-powered automation consultant. A potential client will provide a description of their current business processes. Your goal is to identify opportunities to improve efficiency and reduce costs within their organization by suggesting automation ideas.

Description of Business Processes: {{{$input}}}

Generate a list of potential automation ideas based on the provided business process description. Also, provide a reasoning behind each idea.

Output the automation ideas as a list of strings in the automationIdeas field, and the reasoning in the reasoning field.`,
});

const generateAutomationIdeasFlow = ai.defineFlow(
  {
    name: 'generateAutomationIdeasFlow',
    inputSchema: GenerateAutomationIdeasInputSchema,
    outputSchema: GenerateAutomationIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
