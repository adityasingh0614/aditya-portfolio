"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScreenshotGallery from "@/components/ui/ScreenshotGallery";
import { ArrowLeft, CheckCircle2, Target, Lightbulb, TrendingUp, Rocket } from "lucide-react";

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl font-bold">Project Not Found</h1>
                    <p className="text-muted-foreground">The project "{slug}" could not be found.</p>
                    <Button asChild>
                        <Link href="/projects">Back to Projects</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const isClientProject = project.type.toLowerCase().includes("client");

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
                {/* Hero Section - Modern & Clean */}
                <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                            {project.title}
                        </h1>
                        <Badge
                            variant={isClientProject ? "default" : "secondary"}
                            className={`${isClientProject ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-secondary'} text-sm px-4 py-1.5`}
                        >
                            {project.type}
                        </Badge>
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        {project.fullDescription}
                    </p>
                </div>

                {/* Screenshots - Prominent & Early */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Rocket className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold">App Preview</h2>
                    </div>
                    <ScreenshotGallery screenshots={project.screenshots} />
                </section>

                {/* Problem/Solution/Result Cards - Enhanced Design */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Project Journey</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* The Challenge */}
                        <Card className="border-2 border-destructive/20 bg-gradient-to-br from-destructive/5 to-background hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <CardContent className="p-6 space-y-4">
                                <div className="w-14 h-14 bg-destructive/15 rounded-xl flex items-center justify-center mb-2">
                                    <Target className="h-7 w-7 text-destructive" />
                                </div>
                                <h3 className="font-bold text-xl mb-3">The Challenge</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {isClientProject
                                        ? "Client needed a production-ready solution to reach customers and drive sales with minimal technical complexity."
                                        : "Students lacked a centralized, easy-to-use platform for exam notifications and job updates."}
                                </p>
                            </CardContent>
                        </Card>

                        {/* The Solution */}
                        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <CardContent className="p-6 space-y-4">
                                <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mb-2">
                                    <Lightbulb className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl mb-3">The Solution</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Built a fast, scalable mobile app with focus on user experience, performance, and business-ready infrastructure.
                                </p>
                            </CardContent>
                        </Card>

                        {/* The Result */}
                        <Card className="border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-background hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <CardContent className="p-6 space-y-4">
                                <div className="w-14 h-14 bg-green-500/15 rounded-xl flex items-center justify-center mb-2">
                                    <TrendingUp className="h-7 w-7 text-green-600 dark:text-green-500" />
                                </div>
                                <h3 className="font-bold text-xl mb-3">The Result</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {isClientProject
                                        ? "Production-ready MVP delivered on schedule with secure payments and scalable architecture."
                                        : "Thousands of active users relying on the app for daily exam and job updates."}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Key Features - Improved Layout */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.features.map((feature: string, index: number) => (
                            <Card key={index} className="border-border/50 bg-secondary/10 hover:bg-secondary/20 hover:shadow-md transition-all duration-300">
                                <CardContent className="p-5 flex items-start gap-3">
                                    <div className="w-6 h-6 bg-primary/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed">{feature}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Tech Stack - Cleaner Design */}
                <section className="space-y-6 py-8 border-t border-border/50">
                    <h2 className="text-xl md:text-2xl font-bold">Built With</h2>
                    <div className="flex gap-3 flex-wrap">
                        {project.techStack.map((tech: string) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                className="px-4 py-2 text-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* CTA Section - More Engaging */}
                <section className="pt-8">
                    <Card className="p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-primary/10 via-purple-500/5 to-primary/10 border-primary/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="space-y-3">
                            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Ready to Build Your App?
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                                Let's discuss your project requirements and create a solution that delivers results.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Button asChild size="lg" className="px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Link href="/contact">Start Free Discussion</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="px-8 hover:bg-secondary transition-all duration-300">
                                <Link href="/projects">View More Projects</Link>
                            </Button>
                        </div>
                    </Card>
                </section>
            </div>
        </div>
    );
}
