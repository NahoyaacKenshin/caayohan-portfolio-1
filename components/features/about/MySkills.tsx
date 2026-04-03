// import { Section } from "@/components/common/Section";
// import { SectionHeading } from "@/components/common/SectionHeading";
// import { Separator } from "@/components/ui/separator";

// const skillGroups = [
//   {
//     number: "01",
//     title: "Frontend",
//     skills: [
//       "React & Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Framer Motion",
//       "HTML & CSS",
//     ],
//   },
//   {
//     number: "02",
//     title: "Backend",
//     skills: [
//       "Node.js",
//       "Express",
//       "REST APIs",
//       "GraphQL",
//       "PostgreSQL",
//     ],
//   },
//   {
//     number: "03",
//     title: "Tools & DevOps",
//     skills: [
//       "Git & GitHub",
//       "Docker",
//       "CI/CD Pipelines",
//       "Vercel",
//       "Linux CLI",
//     ],
//   },
//   {
//     number: "04",
//     title: "Design",
//     skills: [
//       "Figma",
//       "UI/UX Design",
//       "Wireframing",
//       "Design Systems",
//       "Responsive Design",
//     ],
//   },
// ];

// export function MySkills() {
//     return (
//         <Section id="My Skills" className="flex flex-col container mx-auto px-5 md:px-7 lg:px-10">
//             <SectionHeading title="My Skills" description="Here are some of my technical skills." />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//                 {skillGroups.map((group) => (
//                     <div key={group.number} className="flex flex-col items-start border border-border border-primary/30 rounded-lg p-6 space-y-4 hover:-translate-y-1.5 transition-transform duration-300 ease-in-out hover:shadow-xl dark:hover:border-white/20 dark:hover:bg-white/[0.02]">
//                         <h3 className="text-xl font-semibold">{group.title}</h3>
//                         <Separator />
//                         <ul className="list-disc list-inside text-muted-foreground">
//                             {group.skills.map((skill, index) => (
//                                 <li key={index}>{skill}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </Section>
//     );
// }

import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive, high-performance interfaces.",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML & CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Designing scalable server-side logic and databases.",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Tools & DevOps",
    description: "Streamlining deployment and development workflows.",
    skills: ["Git & GitHub", "Docker", "CI/CD", "Vercel", "Linux CLI"],
  },
  {
    number: "04",
    title: "Design",
    description: "Crafting intuitive and aesthetic user experiences.",
    skills: ["Figma", "UI/UX Design", "Wireframing", "Systems", "Responsive"],
  },
];

export function MySkills() {
    return (
        <Section id="skills" className="container mx-auto px-5 md:px-7 lg:px-10 py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <SectionHeading 
                        title="Technical Arsenal" 
                        description="A collection of technologies I've mastered to build robust digital solutions." 
                    />
                </div>
                <div className="hidden md:block text-right">
                    <span className="text-4xl font-black text-primary/10 tracking-tighter">MY SKILLS</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden rounded-3xl border border-border">
                {skillGroups.map((group) => (
                    <div 
                        key={group.number} 
                        className="relative group bg-background p-8 md:p-12 transition-colors hover:bg-secondary/50"
                    >
                        {/* Background Numbering */}
                        <span className="absolute top-8 right-8 text-6xl font-black text-foreground/[0.03] group-hover:text-primary/10 transition-colors duration-500">
                            {group.number}
                        </span>

                        <div className="relative z-10 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                    {group.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
                                    {group.description}
                                </p>
                            </div>

                            {/* Skill Pills */}
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span 
                                        key={skill} 
                                        className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full border border-border bg-secondary/30 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}