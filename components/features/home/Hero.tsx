import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


export function Hero() {
    return (
        <div className="w-full bg-background">
            <Section className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center min-h-[calc(100vh-4rem)] container mx-auto px-5 md:px-7 lg:px-10">
                <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Crafting The Web <br className="hidden md:inline" />
                            One Pixel At A Time
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Hi, I&apos;m Kenji Agustine. I specialize in turning complex ideas into simple, beautiful digital realities. I build with modern tools to ensure every project is fast, accessible, and refined.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <Link href="/about">
                            <Button size="lg" className="group w-full lg:w-auto">
                                About Me
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="w-full lg:w-auto">
                                Let&apos;s Talk
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <Image
                        src="https://imgur.com/AriXu5O.png"
                        alt="Coding Environment"
                        width={350}
                        height={200}
                        className="hidden md:block rounded-2xl self-start object-cover max-w-[90%] sm:max-w-[450px] md:w-5xl lg:max-w-[350px] xl:max-w-[350px] h-auto -rotate-3 md:-rotate-5"
                    />
                    <div className="hidden md:block w-auto lg:w-[360px] xl:w-[400px] absolute translate-x-0 translate-y-0 md:translate-x-[15%] md:translate-y-[20%] lg:translate-x-[13%] lg:translate-y-[30%] xl:translate-x-[20%] xl:translate-y-[25%] bg-background p-4 rounded-2xl">
                        <Image
                            src="https://imgur.com/GM7LiCH.png"
                            alt="Coding Environment"
                            width={400}
                            height={200}
                            className="border rounded-2xl object-cover"
                        />
                    </div>
                    <Image
                            src="https://imgur.com/GM7LiCH.png"
                            alt="Coding Environment"
                            width={400}
                            height={200}
                            className="md:hidden border rounded-2xl object-cover"
                        />
                </div>
            </Section>
        </div>
    );
}