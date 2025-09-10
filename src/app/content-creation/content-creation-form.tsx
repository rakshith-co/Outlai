"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Image as ImageIcon, FileText } from 'lucide-react';
import { createContent, type CreateContentOutput } from '@/ai/flows/ai-content-creation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  topic: z.string().min(5, { message: "Topic must be at least 5 characters." }),
  tone: z.string({ required_error: "Please select a tone." }),
  platform: z.string({ required_error: "Please select a platform." }),
  audience: z.string().min(10, { message: "Audience description must be at least 10 characters." }),
});

export function ContentCreationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<CreateContentOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      audience: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await createContent(values);
      setResult(response);
    } catch (error) {
      console.error("Error generating content:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate content. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem className="md:col-span-3">
                  <FormLabel>Content Topic</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'The future of renewable energy'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tone</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="witty">Witty</SelectItem>
                      <SelectItem value="inspirational">Inspirational</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Platform</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a platform" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="twitter">Twitter / X</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="audience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'Tech-savvy millennials'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full text-base font-semibold">
            {isSubmitting ? <Loader2 className="animate-spin" /> : <><Sparkles className="mr-2 h-5 w-5" /> Generate Content</>}
          </Button>
        </form>
      </Form>

      {(isSubmitting || result) && (
        <div className="mt-12">
            <h2 className="font-headline text-2xl font-bold text-center mb-6">Generated Content</h2>
             {isSubmitting && (
                <div className="space-y-6">
                    <Card><CardContent className="p-6 animate-pulse bg-muted rounded-lg h-24"></CardContent></Card>
                    <Card><CardContent className="p-6 animate-pulse bg-muted rounded-lg h-48"></CardContent></Card>
                </div>
            )}
            {result && (
                <div className="space-y-6 animate-in fade-in duration-500">
                    <Card className="bg-background">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl tracking-tight">{result.title}</CardTitle>
                        </CardHeader>
                    </Card>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-2">
                                <ImageIcon className="w-5 h-5 text-primary" />
                                <CardTitle className="font-headline text-lg">Visual Idea</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-light text-muted-foreground">{result.visualDescription}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                <CardTitle className="font-headline text-lg">Generated Copy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-light text-muted-foreground whitespace-pre-wrap">{result.copy}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}
        </div>
      )}
    </div>
  );
}
