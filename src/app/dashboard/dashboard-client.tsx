"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Sector, Tooltip, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";
import React from 'react';
import { Badge } from "@/components/ui/badge";

const chartConfig = {
  views: { label: "Page Views" },
  desktop: { label: "Desktop", color: "hsl(var(--primary))" },
  mobile: { label: "Mobile", color: "hsl(var(--accent-foreground))" },
};

const topContent = [
  { content: "/blog/ai-in-marketing", platform: "Blog", views: "21.5k", conversion: "12.2%" },
  { content: "New Feature Launch", platform: "Twitter", views: "18.2k", conversion: "8.7%" },
  { content: "Case Study: Acme Inc.", platform: "LinkedIn", views: "15.1k", conversion: "10.5%" },
  { content: "Behind the Scenes", platform: "Instagram", views: "12.8k", conversion: "5.3%" },
];

const trafficSources = [
  { name: 'Organic Search', value: 400, fill: 'hsl(var(--primary))' },
  { name: 'Social Media', value: 300, fill: 'hsl(var(--chart-2))' },
  { name: 'Direct', value: 300, fill: 'hsl(var(--chart-3))' },
  { name: 'Referral', value: 200, fill: 'hsl(var(--chart-4))' },
];

const campaignData = [
  { month: 'Jan', roi: 120 }, { month: 'Feb', roi: 150 }, { month: 'Mar', roi: 170 },
  { month: 'Apr', roi: 210 }, { month: 'May', roi: 250 }, { month: 'Jun', roi: 230 },
];


export function DashboardClient() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Card className="lg:col-span-1">
        <CardHeader className="flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
          <TrendingUp className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1.2M</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card className="lg:col-span-1">
        <CardHeader className="flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Engagement</CardTitle>
          <Users className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12.8%</div>
          <p className="text-xs text-muted-foreground">+1.2% from last month</p>
        </CardContent>
      </Card>
      <Card className="lg:col-span-1">
        <CardHeader className="flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversions</CardTitle>
          <Target className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,350</div>
          <p className="text-xs text-muted-foreground">+180 from last month</p>
        </CardContent>
      </Card>
      <Card className="lg:col-span-1">
        <CardHeader className="flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Avg. ROI</CardTitle>
          <BarChart3 className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">210%</div>
          <p className="text-xs text-muted-foreground">+32% from last quarter</p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle className="font-headline">Campaign Performance</CardTitle>
          <CardDescription>Return on Investment (ROI) over the last 6 months.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <BarChart data={campaignData} accessibilityLayer>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
              <Tooltip cursor={{ fill: "hsl(var(--muted))" }} content={<ChartTooltipContent />} />
              <Bar dataKey="roi" fill="hsl(var(--primary))" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle className="font-headline">Traffic Sources</CardTitle>
           <CardDescription>Breakdown of website traffic sources this month.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
            <ChartContainer config={{}} className="h-[250px] w-full">
                <PieChart>
                    <Tooltip cursor={{ fill: "hsl(var(--muted))" }} content={<ChartTooltipContent />} />
                    <Pie data={trafficSources} dataKey="value" nameKey="name" innerRadius={60} outerRadius={80} paddingAngle={5}>
                        {trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                </PieChart>
            </ChartContainer>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle className="font-headline">Top Performing Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Content</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Conversion Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topContent.map((item) => (
                <TableRow key={item.content}>
                  <TableCell className="font-medium">{item.content}</TableCell>
                  <TableCell><Badge variant="outline">{item.platform}</Badge></TableCell>
                  <TableCell className="text-right">{item.views}</TableCell>
                  <TableCell className="text-right text-green-500 font-semibold">{item.conversion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
