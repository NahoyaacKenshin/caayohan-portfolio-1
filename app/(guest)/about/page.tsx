import { AboutHero } from "@/components/features/about/AboutHero";
import { CallToAction } from "@/components/common/CallToAction";
import { Introduction } from "@/components/features/about/Introduction";
import { MySkills } from "@/components/features/about/MySkills";
import { WorkExperienceAndCertifications } from "@/components/features/about/WorkExperience&Certifications";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Introduction />
      <MySkills />
      <WorkExperienceAndCertifications />
      <CallToAction />
    </>
  );
}