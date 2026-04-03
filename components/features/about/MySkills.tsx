import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Separator } from "@/components/ui/separator";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML & CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
    ],
  },
  {
    number: "03",
    title: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD Pipelines",
      "Vercel",
      "Linux CLI",
    ],
  },
  {
    number: "04",
    title: "Design",
    skills: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Design Systems",
      "Responsive Design",
    ],
  },
];

export function MySkills() {
    return (
        <Section id="My Skills" className="flex flex-col container mx-auto px-5 md:px-7 lg:px-10">
            <SectionHeading title="My Skills" description="Here are some of my technical skills." />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {skillGroups.map((group) => (
                    <div key={group.number} className="flex flex-col items-start border border-border border-primary/30 rounded-lg p-6 space-y-4 hover:-translate-y-1.5 transition-transform duration-300 ease-in-out hover:shadow-xl dark:hover:border-white/20 dark:hover:bg-white/[0.02]">
                        <h3 className="text-xl font-semibold">{group.title}</h3>
                        <Separator />
                        <ul className="list-disc list-inside text-muted-foreground">
                            {group.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}