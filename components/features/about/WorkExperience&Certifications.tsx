"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Section } from "@/components/common/Section";
import { Briefcase, Award, Calendar, CheckCircle2, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CERTIFICATIONS } from "@/constants/certifications";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const experiences = [
  {
    title: "WordPress Web Designer",
    company: "Libertario Digital Marketing Solutions",
    period: "2023 - Present",
    description: "Design and develop responsive WordPress websites. Collaborate with marketing teams to optimize for performance, SEO, and mobile responsiveness."
  }
];

export function WorkExperienceAndCertifications() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    }, 0);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      clearTimeout(timer);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full bg-secondary">
      <Section className="container mx-auto px-5 md:px-10 space-y-16">
        <SectionHeading 
          title="Experience & Credits" 
          description="My professional journey and technical certifications." 
        />
    
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
            
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {CERTIFICATIONS.map((cert, i) => (
                  <CarouselItem key={i} className="sm:basis-1/2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="group cursor-pointer overflow-hidden rounded-[2rem] border-none bg-background shadow-sm hover:shadow-xl transition-all duration-500">
                          <CardContent className="p-0 relative">
                            <div className="absolute inset-0 z-10 bg-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ZoomIn className="text-primary-foreground h-10 w-10 p-2 bg-primary/60 rounded-full shadow-lg" />
                            </div>
                            <AspectRatio ratio={4 / 3} className="overflow-hidden">
                              <Image 
                                src={cert.img} 
                                alt={cert.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                            </AspectRatio>
                            <div className="p-5">
                              <div className="flex items-start gap-3 mb-1">
                                <CheckCircle2 className="text-primary mt-1 shrink-0" size={16} />
                                <span className="text-sm font-semibold leading-tight tracking-tight">
                                  {cert.title}
                                </span>
                              </div>
                              <p className="text-[10px] text-muted-foreground pl-7 uppercase tracking-wider font-bold">
                                {cert.issuer}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-hidden rounded-[2.5rem] p-0 border-2 bg-background shadow-2xl">
                        <DialogHeader className="p-6 border-b border-primary/10">
                          <DialogTitle className="font-black text-2xl tracking-tighter">
                            {cert.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="p-2 md:p-4 w-full h-full flex items-center justify-center">
                          <AspectRatio ratio={16 / 9} className="relative w-full h-full overflow-hidden rounded-2xl">
                            <Image
                              src={cert.img}
                              alt={`Full size certificate for ${cert.title}`}
                              fill
                              className="object-contain"
                              sizes="90vw"
                            />
                          </AspectRatio>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}