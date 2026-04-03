import Image from "next/image";
import Link from "next/link";
import { File } from "lucide-react";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export function Introduction() {
    return (
        <div className="w-full bg-secondary">
            <Section className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center min-h-[calc(100vh-4rem)] container mx-auto px-5 md:px-7 lg:px-10">
                <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-4xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Hi, I&apos;m Kenji Agustine Caayohan
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I&apos;m a passionate software developer who enjoys turning ideas into functional, user-friendly applications. I specialize in building modern web experiences using technologies like React, Next.js, and TypeScript, with a focus on clean design and efficient performance.
                            <br /><br />
                            Beyond coding, I value continuous learning and creativity. I enjoy experimenting with new concepts, refining my skills, and building projects that not only work well but also deliver a great user experience. My goal is to create software that is both impactful and meaningful.
                        </p>
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