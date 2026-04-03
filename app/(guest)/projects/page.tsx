import { ProjectHero } from "@/components/features/project/ProjectHero";
import { ProjectList } from "@/components/features/project/ProjectList";
import { CallToAction } from "@/components/common/CallToAction";

export default function ProjectsPage() {
    return (
        <>
            <ProjectHero />
            <ProjectList />
            <CallToAction />
        </>
    );
}