/*
 * File: page.tsx
 * Project: new
 * Author: Pedro Farias
 * Created: 2026-04-16
 * 
 * Last Modified: Thu Apr 16 2026
 * Modified By: Pedro Farias
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Database, Shield, Layout, Settings } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "App Router",
      description: "Next.js 15+ features including Server Components and Actions.",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      title: "Database Ready",
      description: "Prisma ORM integrated and ready for your schema.",
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Authentication",
      description: "Secure auth powered by Auth.js (NextAuth).",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "UI Components",
      description: "Polished components from Shadcn UI and Tailwind CSS.",
      icon: <Settings className="h-6 w-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-background p-8 md:p-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Next.js Boilerplate
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A production-ready starter template with Next.js, Prisma, Auth.js, and Shadcn UI.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2">
              <Rocket className="h-5 w-5" /> Get Started
            </Button>
            <Button size="lg" variant="outline">
              Documentation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          {features.map((feature, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <div>
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
