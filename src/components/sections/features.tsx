"use client";

import { Bot, BrainCircuit, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featureList = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "AI-Ready Websites & SEO",
    description: "Not just Google SEO. Agent SEO. We optimize your site so AI agents like ChatGPT can find and recommend your business first.",
    comparison: {
      time: [
        { name: 'Outlai', value: 2, label: '1-2 Days' },
        { name: 'Traditional', value: 35, label: '5-7 Weeks' }
      ],
      cost: [
        { name: 'Outlai', value: 1, label: 'A fraction of the cost' },
        { name: 'Traditional', value: 10, label: 'Up to 90% more' }
      ]
    }
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Creative Content, Made Fast",
    description: "Videos, reels, carousels, and campaigns—cut from weeks to hours. Choose from quick creative assets or fully managed growth funnels.",
    comparison: {
      time: [
        { name: 'Outlai', value: 2, label: '1-3 Days' },
        { name: 'Traditional', value: 17, label: '2-3 Weeks' }
      ],
      cost: [
        { name: 'Outlai', value: 1, label: 'A fraction of the cost' },
        { name: 'Traditional', value: 12, label: 'Up to 92% more' }
      ]
    }
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Social & Marketing Ops",
    description: "End-to-end management of your digital presence. From YouTube SEO to Instagram funnels, we run the campaigns while you scale.",
    comparison: {
      time: [
        { name: 'Outlai', value: 1, label: 'Ongoing' },
        { name: 'Traditional', value: 1, label: 'Ongoing' }
      ],
      cost: [
        { name: 'Outlai', value: 1, label: 'A fraction of the cost' },
        { name: 'Traditional', value: 6, label: 'Up to 84% more' }
      ]
    }
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/80 backdrop-blur-sm p-2 border border-border rounded-lg shadow-lg">
        <p className="font-bold">{`${label}`}</p>
        <p className="text-primary">{`${payload[0].payload.label}`}</p>
      </div>
    );
  }
  return null;
};

export function Features() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            We deliver high-impact results with speed and precision, saving you time and money.
          </p>
        </div>
        
        <Tabs defaultValue={featureList[0].title} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto">
            {featureList.map((feature, index) => (
              <TabsTrigger key={index} value={feature.title} className="text-base py-3 data-[state=active]:shadow-md data-[state=active]:bg-muted">
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {featureList.map((feature, index) => (
            <TabsContent key={index} value={feature.title}>
              <div className="grid md:grid-cols-3 gap-8 items-stretch">
                <Card className="glassmorphic p-4 md:p-8 flex flex-col md:col-span-1">
                  <div className="flex-grow">
                    <div className="mb-4 bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center">
                        {feature.icon}
                    </div>
                    <h3 className="font-headline text-3xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground font-light text-lg">{feature.description}</p>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" className="font-semibold glassmorphic">
                        <Link href="#contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </Card>
                <Card className="glassmorphic p-4 md:p-8 md:col-span-2">
                  <div className="space-y-8 h-full flex flex-col justify-center">
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-center">Time to Delivery</h4>
                        <ResponsiveContainer width="100%" height={100}>
                            <BarChart data={feature.comparison.time} layout="vertical" margin={{ left: 50, right: 120 }}>
                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={80} tick={{ fill: 'hsl(var(--muted-foreground))', textAnchor: 'start' }} dx={-80} />
                                <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsl(var(--primary) / 0.1)'}}/>
                                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={30}>
                                    {feature.comparison.time.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 0 ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} />
                                    ))}
                                    <LabelList dataKey="label" position="right" offset={10} className="font-semibold" fill="hsl(var(--foreground))" />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-center">Estimated Cost</h4>
                        <ResponsiveContainer width="100%" height={100}>
                            <BarChart data={feature.comparison.cost} layout="vertical" margin={{ left: 50, right: 120 }}>
                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={80} tick={{ fill: 'hsl(var(--muted-foreground))', textAnchor: 'start' }} dx={-80} />
                                <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsl(var(--primary) / 0.1)'}}/>
                                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={30}>
                                    {feature.comparison.cost.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 0 ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} />
                                    ))}
                                    <LabelList dataKey="label" position="right" offset={10} className="font-semibold" fill="hsl(var(--foreground))" />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
