"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants/projects";
import { ProjectCard } from "@/components/common/ProjectCards";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ITEMS_PER_PAGE = 6;
const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export function ProjectList() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(0);

    const filteredProjects = PROJECTS.filter((project) => {
        const matchesCategory = filter === "All" || project.category === filter;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const safePage = Math.min(page, Math.max(0, totalPages - 1));
    const visible = filteredProjects.slice(safePage * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

    function handleFilter(category: string) {
        setFilter(category);
        setPage(0);
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(e.target.value);
        setPage(0);
    }

    return (
        <div className="w-full bg-secondary">
        <Section className="space-y-12 min-h-screen container mx-auto px-5 md:px-7 lg:px-10">

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? "default" : "outline"}
                            onClick={() => handleFilter(category)}
                            size="lg"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="pl-8"
                    />
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visible.length > 0 ? (
                    visible.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No projects found matching your criteria.
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-5">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            aria-label={`Page ${i + 1}`}
                            className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer transition-all duration-200 ${
                                i === safePage ? "bg-primary scale-125" : "bg-muted-foreground/30"
                            }`}
                        />
                    ))}
                </div>
            )}
        </Section>
        </div>
    );
}