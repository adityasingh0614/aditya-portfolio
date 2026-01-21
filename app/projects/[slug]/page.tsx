import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { FaCreditCard, FaCode } from "react-icons/fa";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen py-8 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Project Header */}
                <div className="mb-12">
                    <div className="flex flex-col gap-4 mb-4">
                        <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Screenshots */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <h2 className="text-2xl md:text-3xl font-bold">App Preview</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {project.screenshots.map((screenshot, index) => (
                            <div
                                key={index}
                                className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-secondary/20 border border-border hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                            >
                                <Image
                                    src={screenshot}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Project Journey */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Project Journey</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* The Challenge */}
                        <Card className="border-border hover:shadow-lg transition-all">
                            <CardContent className="pt-6 space-y-4">
                                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">The Challenge</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
                            </CardContent>
                        </Card>

                        {/* The Solution */}
                        <Card className="border-border hover:shadow-lg transition-all">
                            <CardContent className="pt-6 space-y-4">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">The Solution</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                            </CardContent>
                        </Card>

                        {/* The Result */}
                        <Card className="border-border hover:shadow-lg transition-all">
                            <CardContent className="pt-6 space-y-4">
                                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">The Result</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.result}</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Features */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {project.features.map((feature, index) => (
                            <Card key={index} className="border-border hover:shadow-lg transition-all group">
                                <CardContent className="pt-6 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-foreground">{feature}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Tech Stack - COMPACT WITH ICONS */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Built With</h2>

                    <div className="flex flex-wrap justify-center gap-3">
                        {project.techStack.map((tech) => {
                            // Get CDN icon URL
                            const getTechIcon = (techName: string) => {
                                const name = techName.toLowerCase();

                                if (name.includes('android'))
                                    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg";
                                if (name.includes('kotlin'))
                                    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg";
                                if (name.includes('flutter'))
                                    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg";
                                if (name.includes('firebase'))
                                    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg";
                                if (name.includes('aws'))
                                    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
                                if (name.includes('mongodb'))
                                    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
                                if (name.includes('razorpay') || name.includes('payment'))
                                    return null; // Will use FaCreditCard
                                if (name.includes('jetpack') || name.includes('compose'))
                                    return "https://raw.githubusercontent.com/devicons/devicon/master/icons/jetpackcompose/jetpackcompose-original.svg";
                                if (name.includes('room') || name.includes('database'))
                                    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg";
                                if (name.includes('material'))
                                    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg";

                                return null;
                            };

                            const iconUrl = getTechIcon(tech);

                            return (
                                <div
                                    key={tech}
                                    className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 hover:bg-secondary rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-default hover:shadow-md"
                                >
                                    {/* Icon */}
                                    <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {iconUrl ? (
                                            <img src={iconUrl} alt={tech} className="w-5 h-5" />
                                        ) : (
                                            <FaCode className="w-4 h-4 text-primary" />
                                        )}
                                    </div>

                                    {/* Name */}
                                    <span className="text-sm font-medium">{tech}</span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-none">
                    <CardContent className="p-8 md:p-12 text-center space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold gradient-text">
                            Ready to Build Your App?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Let's discuss your project requirements and create a solution that delivers results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="px-8">
                                <Link href="/contact">Start Free Discussion</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="px-8">
                                <Link href="/projects">View More Projects</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>

    );
}
