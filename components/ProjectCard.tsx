import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

export function ProjectCard({ project }: any) {
    const isClientProject = project.type.toLowerCase().includes("client");

    return (
        <Link href={`/projects/${project.slug}`}>
            <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden group bg-card border-border relative">
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none z-10"></div>

                {/* Screenshot - Play Store Style with Larger Preview */}
                <div className="aspect-[9/16] relative bg-gradient-to-br from-primary/10 via-purple-500/5 to-secondary/10 overflow-hidden">
                    {project.screenshots[0] && (
                        <Image
                            src={project.screenshots[0]}
                            alt={project.title}
                            fill
                            className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                            priority
                        />
                    )}

                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

                    {/* Project Type Badge - Prominent Overlay */}
                    <div className="absolute top-3 right-3 transform group-hover:scale-110 transition-transform duration-300">
                        <Badge
                            variant={isClientProject ? "default" : "secondary"}
                            className={`${isClientProject ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-secondary/90 backdrop-blur-sm'} text-xs font-semibold px-3 py-1.5`}
                        >
                            {project.type}
                        </Badge>
                    </div>

                    {/* Quick View Icon - appears on hover */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/90 dark:bg-black/90 p-2 rounded-full">
                            <ExternalLink className="h-4 w-4 text-primary" />
                        </div>
                    </div>
                </div>

                <CardContent className="p-5 space-y-3 relative z-20">
                    {/* Title with hover effect */}
                    <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description - Outcome Focused */}
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.cardDescription}
                    </p>

                    {/* Tech Stack - Minimal with hover animation */}
                    <div className="flex gap-2 flex-wrap">
                        {project.techStack.slice(0, 2).map((tech: string, index: number) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs border-border/50 group-hover:border-primary/50 transition-colors duration-300"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {tech}
                            </Badge>
                        ))}
                        {project.techStack.length > 2 && (
                            <Badge variant="outline" className="text-xs border-border/50 group-hover:border-primary/50 transition-colors duration-300">
                                +{project.techStack.length - 2}
                            </Badge>
                        )}
                    </div>

                    {/* View Details Indicator with animated arrow */}
                    <div className="flex items-center text-xs text-primary font-medium pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                        <span>View Case Study</span>
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
