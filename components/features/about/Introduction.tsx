import Image from "next/image";
import { Section } from "@/components/common/Section";
import { Terminal, Code2, Cpu } from "lucide-react";

export function Introduction() {
    return (
        <div className="w-full bg-secondary">
            <Section className="container mx-auto px-5 md:px-7 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">


                    <div className="relative group order-2 lg:order-1">

                        <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

                        <div className="relative space-y-6">

                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-border shadow-xl">
                                <Image
                                    src="https://imgur.com/AriXu5O.png"
                                    alt="Kenji's Workspace"
                                    fill
                                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                            </div>


                            <div className="absolute -bottom-6 -right-4 md:right-10 w-64 md:w-80 bg-background border border-border rounded-xl shadow-2xl p-5 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                <div className="flex gap-1.5 border-b border-border pb-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                                </div>
                                <div className="space-y-2 font-mono text-xs md:text-sm">
                                    <p className="text-primary font-semibold">const kenji = &#123;</p>
                                    <p className="pl-4 text-muted-foreground">role: <span className="text-foreground">&quot;Software Developer&quot;</span>,</p>
                                    <p className="pl-4 text-muted-foreground">focus: [<span className="text-foreground">&quot;UX&quot;, &quot;Clean Code&quot;</span>],</p>
                                    <p className="pl-4 text-muted-foreground">status: <span className="text-emerald-500">&quot;Ready to build&quot;</span></p>
                                    <p className="text-primary font-semibold">&#125;;</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-2">
                            <h3 className="text-primary font-mono text-sm tracking-widest uppercase">The Story So Far</h3>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                                Bridging the gap between <span className="italic font-serif text-muted-foreground">logic</span> and design.
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I&apos;m a passionate software developer who enjoys turning ideas into functional,
                                user-friendly applications. I specialize in building modern web experiences using
                                <span className="text-foreground font-medium"> React, Next.js, and TypeScript</span>,
                                with a focus on clean design and efficient performance.
                            </p>

                            <p>
                                Beyond coding, I value continuous learning and creativity. I enjoy experimenting with
                                new concepts, refining my skills, and building projects that not only work well but
                                also deliver a great user experience. My goal is to create software that is both
                                impactful and meaningful.
                            </p>
                        </div>


                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="flex flex-col gap-2">
                                <Code2 className="text-primary" size={24} />
                                <span className="text-xs font-bold text-foreground">Clean Code</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Cpu className="text-primary" size={24} />
                                <span className="text-xs font-bold text-foreground">Optimization</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Terminal className="text-primary" size={24} />
                                <span className="text-xs font-bold text-foreground">Responsive</span>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}