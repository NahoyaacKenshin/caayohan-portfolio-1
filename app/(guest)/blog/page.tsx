import { Section } from "@/components/common/Section";
import { BlogCategoryNav } from "@/components/features/blog/Blog-Category-Nav";
import { BlogGrid } from "@/components/features/blog/Blog-Grid";
import { SectionHeading } from "@/components/common/SectionHeading";

export default function BlogPage() {
  return (
    <Section className="space-y-8 container mx-auto px-5 md:px-7 lg:px-10">
      <SectionHeading
        title="Blog"
        description="Thoughts on technology, design, and craft."
      />
      <BlogCategoryNav />
      <BlogGrid />
    </Section>
  );
}