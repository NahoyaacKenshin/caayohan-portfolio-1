import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    links: {
      demo: string;
      github: string;
    };
  }
}

export function ProjectCard({project}: ProjectCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:shadow-xl hover:border-slate-200 dark:hover:border-white/20 dark:hover:bg-white/[0.02]">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        src={project.image}
        alt={project.title}
        width={700}
        height={500}
        className="relative aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="mr-1">
              {tag}
            </Badge>
          ))}
        </CardAction>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={project.links.demo}>
        <Button size="lg" variant="default" className="w-full">
          <Play className="mr-2 h-4 w-4" />
          View Live
        </Button>
        </Link>
        <Link href={project.links.github}>
        <Button size="lg" variant="outline" className="w-full">
          <SiGithub size={20} className="mr-2" />
          Source Code
        </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
