import { Section } from "@/components/common/Section";
import Image from "next/image";

export function ProjectHero() {
    return (
        <Section className="relative min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden p-0">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="https://t4.ftcdn.net/jpg/08/86/49/53/360_F_886495385_XudXZcfZb7FqTwSWpDjwOEWfsol6Sw6e.jpg"
                    alt="Programming Background"
                    fill
                    className="object-cover z-0"
                    priority
                />
            </div>

            {/* Dark gradient overlay — heavier at bottom so text is legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-5 md:px-7 lg:px-10 pb-12 md:pb-16">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
                    See My Work
                </p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-md">
                    Projects
                </h1>
                <div className="mt-4 h-px w-16 bg-white/30" />
            </div>
        </Section>
    );
}