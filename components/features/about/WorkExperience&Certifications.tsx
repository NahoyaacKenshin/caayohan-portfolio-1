"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";

const experiences = [
    {
        title: "WordPress Web Designer",
        company: "Libertario Digital Marketing Solutions",
        period: "2023 - Present",
        description:
            "Design and develop responsive WordPress websites for clients across various industries. Collaborate with the marketing team to translate brand identities into polished digital experiences, optimizing for performance, SEO, and mobile responsiveness.",
    },
];

const certifications = [
    { label: "AWS Certified Developer" },
    { label: "Google UX Design Certificate" },
    { label: "Meta Frontend Developer" },
    { label: "TypeScript Advanced" },
    { label: "Next.js Foundations" },
    { label: "Docker Essentials" },
    { label: "REST API Development" },
    { label: "Node.js Backend Fundamentals" },
    { label: "Responsive Web Design" },
    { label: "Git & Version Control" },
    { label: "Database Design (SQL/NoSQL)" },
    { label: "Web Performance Optimization" },
];

const ITEMS_PER_PAGE = 6;

export function WorkExperienceAndCertifications() {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);
    const visibleCerts = certifications.slice(
        activeIndex * ITEMS_PER_PAGE,
        activeIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    return (
        <div className="w-full bg-secondary">
            <Section className="space-y-12 container mx-auto px-5 md:px-7 lg:px-10">
                {/* Section Header */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Work Experience &amp; Certifications
                    </h2>
                    <p className="text-muted-foreground md:text-lg/relaxed max-w-[700px]">
                        My professional journey and the credentials I&apos;ve earned along the
                        way.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-30 items-start">
                    {/* LEFT: Experience Timeline */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-muted-foreground uppercase tracking-widest text-sm">
                            Experience
                        </h3>
                        <div className="relative border-l border-border ml-3 md:ml-6 space-y-8">
                            {experiences.map((experience, index) => (
                                <div key={index} className="ml-6 relative">
                                    <span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border border-primary bg-background ring-4 ring-background" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                                            {experience.period}
                                        </span>
                                    </div>
                                    <p className="text-primary font-medium mb-2">
                                        {experience.company}
                                    </p>
                                    <p className="text-muted-foreground">{experience.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Certifications */}
                    <div>
                        <h3 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-widest">
                            Certifications
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {visibleCerts.map((cert, i) => (
                                <div
                                    key={i}
                                    className="group border border-border rounded-xl overflow-hidden aspect-[4/3] bg-muted hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer"
                                >
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
                                        {/* Placeholder image icon */}
                                        <svg
                                            viewBox="0 0 48 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="w-[55%] opacity-40 group-hover:opacity-60 transition-opacity duration-200"
                                        >
                                            <rect
                                                x="1"
                                                y="1"
                                                width="46"
                                                height="36"
                                                rx="3"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <circle cx="15" cy="14" r="5" fill="currentColor" opacity="0.4" />
                                            <path
                                                d="M1 28 L13 18 L22 26 L31 16 L47 28"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                opacity="0.4"
                                            />
                                        </svg>
                                        <span className="text-[0.65rem] text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors duration-200">
                                            {cert.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination dots */}
                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-5">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        aria-label={`Page ${i + 1}`}
                                        className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer transition-all duration-200 ${i === activeIndex
                                            ? "bg-primary scale-125"
                                            : "bg-muted-foreground/30"
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
}