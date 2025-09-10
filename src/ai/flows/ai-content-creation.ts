'use server';

/**
 * @fileOverview A content creation AI agent.
 *
 * - createContent - A function that handles the content creation process.
 * - CreateContentInput - The input type for the createContent function.
 * - CreateContentOutput - The return type for the createContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreateContentInputSchema = z.object({
  topic: z.string().describe('The topic of the content.'),
  tone: z.string().describe('The desired tone of the content (e.g., professional, funny, serious).'),
  platform: z.string().describe('The platform for the content (e.g., blog, social media, ad).'),
  audience: z.string().describe('The target audience for the content.'),
});
export type CreateContentInput = z.infer<typeof CreateContentInputSchema>;

const CreateContentOutputSchema = z.object({
  title: z.string().describe('The title of the content.'),
  visualDescription: z.string().describe('A description of a visual to accompany the content.'),
  copy: z.string().describe('The generated content copy.'),
});
export type CreateContentOutput = z.infer<typeof CreateContentOutputSchema>;

export async function createContent(input: CreateContentInput): Promise<CreateContentOutput> {
  return createContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createContentPrompt',
  input: {schema: CreateContentInputSchema},
  output: {schema: CreateContentOutputSchema},
  prompt: `You are a content creation expert. You will generate content based on the given topic, tone, platform, and audience.

Topic: {{{topic}}}
Tone: {{{tone}}}
Platform: {{{platform}}}
Audience: {{{audience}}}

Generate a title, a description of a visual to accompany the content, and the content copy itself. The visual should be suitable for illustrating the copy on the given platform.

Ensure the content is tailored to the platform and audience and incorporates relevant details. If appropriate, add facts, memes, or other details related to the topic.

Title:
Visual Description:
Copy:`,
});

const createContentFlow = ai.defineFlow(
  {
    name: 'createContentFlow',
    inputSchema: CreateContentInputSchema,
    outputSchema: CreateContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
