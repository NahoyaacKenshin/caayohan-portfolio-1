import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
    return (
        <div className="w-full bg-">
            <Section id="projects" className="space-y-8 container mx-auto px-5 md:px-7 lg:px-10">
                <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-20 md:justify-between md:items-center">
                    <SectionHeading title="Let's Work Together" description="I'm always open to discussing new opportunities and exciting projects." />
                    <Link href="/contact">
                        <Button variant="default" size="lg" className="group text-md md:text-xl hover:scale-105 p-5 md:p-7 transition-transform">
                            Get in Touch
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}