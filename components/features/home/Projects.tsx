import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/common/ProjectCards";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants/projects";

export function Projects() {
    return (
        <div className="w-full bg-secondary">
            <Section id="projects" className="space-y-8 container min-h-[calc(100vh-4rem)] mx-auto px-5 md:px-7 lg:px-10">
                <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-20 md:justify-between md:items-center">
                    <SectionHeading title="Projects" description="A showcase of my work, highlighting the diversity and quality of my projects." />
                    <Link href="/projects">
                        <Button variant="default" size="lg" className="group hover:scale-105 transition-transform">
                            View All Projects
                        </Button>
                    </Link>
                </div>


                {/* Project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center pt-2.5 md:pt-5 gap-5 md:gap-5">
                    {PROJECTS.slice(0, 3).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </Section>
        </div>

    );
}