import { notFound } from "next/navigation";
import { Section } from "@/components/common/Section";
import { BlogPostContent } from "@/components/features/blog/Blog-Post-Content";
import { BLOG_POSTS } from "@/constants/blog";


interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {    
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Section className="container mx-auto px-5 md:px-7 lg:px-10">
      <BlogPostContent post={post} />
    </Section>
  );
}