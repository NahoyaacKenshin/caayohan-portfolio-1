import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <div className="relative w-full overflow-hidden bg-background">
            {/* Optional: Subtle background texture/grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <Section className="relative container mx-auto px-5 md:px-7 lg:px-10 min-h-[90vh] flex flex-col justify-center">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Content (7 cols) */}
                    <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
                        <div className="space-y-6">
                            {/* Modern Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border animate-fade-in">
                                <Sparkles size={14} className="text-primary" />
                                <span className="text-xs font-medium tracking-wide uppercase">Available for new projects</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
                                Crafting the Web <br />
                                <span className="text-muted-foreground italic font-serif">One Pixel</span> at a Time
                            </h1>
                            
                            <p className="max-w-[600px] mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                                Hi, I&apos;m <span className="text-foreground font-medium">Kenji Agustine</span>. 
                                I transform complex Information Systems into refined digital realities using 
                                <span className="italic"> React, Next.js, and TypeScript.</span>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/about" className="w-full sm:w-auto">
                                <Button size="lg" className="group w-full h-14 px-8 text-base rounded-xl">
                                    View My Work
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full h-14 px-8 text-base rounded-xl border-border bg-transparent hover:bg-secondary transition-all">
                                    Let&apos;s Talk
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Visual Stack (5 cols) */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
                        <div className="relative w-full max-w-[400px] aspect-[4/5]">
                            
                            {/* Main Background Image */}
                            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-3xl overflow-hidden border border-border shadow-2xl rotate-3">
                                <Image
                                    src="https://imgur.com/AriXu5O.png"
                                    alt="Work Environment"
                                    fill
                                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                    priority
                                />
                            </div>

                            {/* Overlapping Detail Image */}
                            <div className="absolute bottom-0 left-0 w-[75%] h-[50%] rounded-2xl overflow-hidden border-4 border-background shadow-2xl -rotate-6 transition-transform hover:rotate-0 duration-500 cursor-pointer">
                                <Image
                                    src="https://imgur.com/GM7LiCH.png"
                                    alt="Code Snippet"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                            </div>

                            {/* Floating UI Element (Abstract IS element) */}
                            <div className="hidden xl:block absolute -top-4 -left-4 p-4 bg-background border border-border rounded-xl shadow-xl animate-bounce-slow">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}