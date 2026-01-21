import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen py-12 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Production-ready mobile applications built for real businesses
                    </p>
                </div>

                {/* Projects List - Horizontal Cards */}
                <div className="space-y-8 mb-16">
                    {projects.map((project) => (
                        <Link key={project.slug} href={`/projects/${project.slug}`}>
                            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-2 border-border/50 hover:border-primary/30">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0 min-h-80">

                                        {/* Left Side - Logo, Title, Description, Tech Stack */}
                                        <div className="md:col-span-2 p-8 flex flex-col justify-between bg-gradient-to-br from-card to-card/50">

                                            {/* Logo Section */}
                                            <div className="space-y-6">
                                                {/* App Logo */}
                                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-2 border-border shadow-lg">
                                                    {project.logo ? (
                                                        <Image
                                                            src={project.logo}
                                                            alt={`${project.title} logo`}
                                                            width={80}
                                                            height={80}
                                                            className="w-full h-full object-cover rounded-2xl"
                                                        />
                                                    ) : (
                                                        <span className="text-3xl font-bold text-primary">
                                                            {project.title.charAt(0)}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Type Badge */}
                                                <Badge variant="secondary" className="w-fit text-xs font-medium">
                                                    {project.type}
                                                </Badge>

                                                {/* Title */}
                                                <div>
                                                    <h3 className="text-2xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                                                        {project.title}
                                                    </h3>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed max-w-sm">
                                                    {project.cardDescription}
                                                </p>
                                            </div>

                                            {/* Tech Stack Pills at Bottom */}
                                            <div className="flex gap-2 flex-wrap">
                                                {project.techStack.slice(0, 3).map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="text-xs font-medium cursor-default"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <Badge
                                                        variant="outline"
                                                        className="text-xs font-medium cursor-default"
                                                    >
                                                        +{project.techStack.length - 3}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Side - Screenshot */}
                                        <div className="md:col-span-3 relative bg-secondary/10 overflow-hidden group">
                                            {project.screenshots[0] && (
                                                <Image
                                                    src={project.screenshots[0]}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                                />
                                            )}

                                            {/* Overlay with CTA on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="flex flex-col items-center gap-3 text-white">
                                                    <div className="flex items-center text-lg font-semibold">
                                                        View Case Study
                                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <Card className="bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent border-2 border-primary/20">
                    <CardContent className="p-12 text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Have a Project in Mind?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Let's discuss your requirements and build something amazing together
                        </p>
                        <Button asChild size="lg" className="px-8">
                            <Link href="/contact">
                                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
