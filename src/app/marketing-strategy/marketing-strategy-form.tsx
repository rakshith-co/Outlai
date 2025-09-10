"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import { generateMarketingStrategy, type GenerateMarketingStrategyOutput } from '@/ai/flows/generate-marketing-strategy';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  businessDetails: z.string().min(50, { message: "Please provide at least 50 characters about your business." }),
  targetMarket: z.string().min(50, { message: "Please provide at least 50 characters about your target market." }),
});

export function MarketingStrategyForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<GenerateMarketingStrategyOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessDetails: "",
      targetMarket: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await generateMarketingStrategy(values);
      setResult(response);
    } catch (error) {
      console.error("Error generating strategy:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate marketing strategy. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="businessDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your business, products/services, mission, and unique selling points..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="targetMarket"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Market</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your target market's demographics, psychographics, needs, and pain points..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting} className="w-full text-base font-semibold">
            {isSubmitting ? <Loader2 className="animate-spin" /> : <><Sparkles className="mr-2 h-5 w-5" /> Generate Strategy</>}
          </Button>
        </form>
      </Form>

      {(isSubmitting || result) && (
        <div className="mt-12">
            <h2 className="font-headline text-2xl font-bold text-center mb-6">Your AI-Generated Marketing Strategy</h2>
            <Card className="bg-muted/50">
                <CardContent className="p-6">
                {isSubmitting && (
                    <div className="space-y-4">
                        <div className="h-8 w-1/2 bg-muted rounded animate-pulse"></div>
                        <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                        <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                        <div className="h-4 w-3/4 bg-muted rounded animate-pulse"></div>
                    </div>
                )}
                {result && (
                    <div className="prose prose-sm dark:prose-invert max-w-none font-light whitespace-pre-wrap animate-in fade-in duration-500">
                        {result.strategy}
                    </div>
                )}
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
