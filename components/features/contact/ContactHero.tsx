import { Section } from "@/components/common/Section";
import Image from "next/image";

export function ContactHero() {
    return (
        <Section className="relative min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden p-0">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="https://datamotion.com/wp-content/uploads/2021/08/AdobeStock_773205260-scaled.jpeg.webp"
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
                    Let&apos;s Connect
                </p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-md">
                    Contact
                </h1>
                <div className="mt-4 h-px w-16 bg-white/30" />
            </div>
        </Section>
    );
}