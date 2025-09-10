'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a marketing strategy based on user input.
 *
 * @file        Defines a Genkit flow for generating a marketing strategy tailored to user-provided business details and target market.
 * - generateMarketingStrategy - A function that takes business details and target market as input and returns a tailored marketing strategy.
 * - GenerateMarketingStrategyInput - The input type for the generateMarketingStrategy function.
 * - GenerateMarketingStrategyOutput - The return type for the generateMarketingStrategy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingStrategyInputSchema = z.object({
  businessDetails: z
    .string()
    .describe('Detailed information about the business, including its products/services, mission, and unique selling points.'),
  targetMarket: z
    .string()
    .describe('Description of the target market, including demographics, psychographics, and needs.'),
});

export type GenerateMarketingStrategyInput = z.infer<
  typeof GenerateMarketingStrategyInputSchema
>;

const GenerateMarketingStrategyOutputSchema = z.object({
  strategy: z
    .string()
    .describe('A comprehensive marketing strategy tailored to the business and its target market.'),
});

export type GenerateMarketingStrategyOutput = z.infer<
  typeof GenerateMarketingStrategyOutputSchema
>;

export async function generateMarketingStrategy(
  input: GenerateMarketingStrategyInput
): Promise<GenerateMarketingStrategyOutput> {
  return generateMarketingStrategyFlow(input);
}

const generateMarketingStrategyPrompt = ai.definePrompt({
  name: 'generateMarketingStrategyPrompt',
  input: {schema: GenerateMarketingStrategyInputSchema},
  output: {schema: GenerateMarketingStrategyOutputSchema},
  prompt: `You are an expert marketing strategist. Based on the provided business details and target market, you will create a comprehensive marketing strategy.

Business Details: {{{businessDetails}}}
Target Market: {{{targetMarket}}}

Marketing Strategy:`,
});

const generateMarketingStrategyFlow = ai.defineFlow(
  {
    name: 'generateMarketingStrategyFlow',
    inputSchema: GenerateMarketingStrategyInputSchema,
    outputSchema: GenerateMarketingStrategyOutputSchema,
  },
  async input => {
    const {output} = await generateMarketingStrategyPrompt(input);
    return output!;
  }
);
