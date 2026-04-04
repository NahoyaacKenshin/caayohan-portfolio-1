import { notFound } from "next/navigation";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blog";
import { BlogFilterLayout } from "@/components/features/blog/Blog-Filter-Layout";

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

  const posts = BLOG_POSTS.filter((p) => p.category.includes(activeSlug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <BlogFilterLayout
      posts={posts}
      title={category.name}
      description={`${posts.length} post${posts.length !== 1 ? "s" : ""} in ${category.name}`}
      activeSlug={activeSlug}
      emptyMessage={`No posts in ${category.name} yet.`}
    />
  );
}