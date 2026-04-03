import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/common/Section";
import { BlogCategoryNav } from "@/components/features/blog/Blog-Category-Nav";
import { BlogGrid } from "@/components/features/blog/Blog-Grid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({
    slug: cat.parent ? [cat.parent, cat.slug] : [cat.slug],
  }));
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const activeSlug = slug[slug.length - 1];
  const category = BLOG_CATEGORIES.find((c) => c.slug === activeSlug);
  if (!category) notFound();

  const posts = BLOG_POSTS.filter((p) => p.category.includes(activeSlug)).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const subCategories = BLOG_CATEGORIES.filter((c) => c.parent === activeSlug);

  return (
    <Section className="space-y-8 container mx-auto px-5 md:px-7 lg:px-10">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          All Posts
        </Button>
      </Link>

      <SectionHeading
        title={category.name}
        description={`${posts.length} post${posts.length !== 1 ? "s" : ""} in ${category.name}`}
      />

      <BlogCategoryNav activeSlug={activeSlug} />

      {subCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="self-center">Sub-topics:</span>
          {subCategories.map((sub) => (
            <Link
              key={sub.slug}
              href={`/blog/category/${activeSlug}/${sub.slug}`}
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}

      <BlogGrid posts={posts} emptyMessage={`No posts in ${category.name} yet.`} />
    </Section>
  );
}