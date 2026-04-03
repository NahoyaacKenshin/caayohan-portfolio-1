"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import { Briefcase, Award, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const experiences = [
  {
    title: "WordPress Web Designer",
    company: "Libertario Digital Marketing Solutions",
    period: "2023 - Present",
    description: "Design and develop responsive WordPress websites. Collaborate with marketing teams to optimize for performance, SEO, and mobile responsiveness."
  }
];

const certifications = [
  "AWS Certified Developer", "Google UX Design", "Meta Frontend Developer",
  "TypeScript Advanced", "Next.js Foundations", "Docker Essentials",
  "REST API Development", "Node.js Backend", "Responsive Web Design",
  "Git & Version Control", "Database Design", "Web Performance"
];

const ITEMS_PER_PAGE = 6;

export function WorkExperienceAndCertifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);
  const visibleCerts = certifications.slice(activeIndex * ITEMS_PER_PAGE, (activeIndex + 1) * ITEMS_PER_PAGE);

  return (
    <div className="w-full bg-secondary">
      <Section className="container mx-auto px-5 md:px-10 space-y-16">
 
        <SectionHeading title="Experience & Credits" description="My professional journey and technical certifications." />
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
          <div className="space-y-8">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Briefcase size={14} /> Professional Path
            </h3>
            <div className="relative border-l-2 border-primary/20 ml-2 space-y-10">
              {experiences.map((exp, i) => (
                <div key={i} className="pl-8 relative group">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform" />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <span className="text-[10px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded-md flex items-center gap-1">
                      <Calendar size={10} /> {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-semibold text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Award size={14} /> Certifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {visibleCerts.map((cert, i) => (
                <div key={i} className="group p-4 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-lg transition-all aspect-square flex flex-col justify-between">
                  <CheckCircle2 className="text-primary/20 group-hover:text-primary transition-colors" size={20} />
                  <span className="text-[11px] font-medium leading-snug text-muted-foreground group-hover:text-foreground transition-colors">
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-3">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40"}`}
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