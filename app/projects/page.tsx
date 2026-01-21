import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Client Work & Case Studies</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Production-ready apps built for startups and businesses.
                        Each project delivered measurable results.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
