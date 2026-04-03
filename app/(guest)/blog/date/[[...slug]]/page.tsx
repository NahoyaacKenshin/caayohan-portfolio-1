import { Section } from "@/components/common/Section";
import { BlogGrid } from "@/components/features/blog/Blog-Grid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BLOG_POSTS } from "@/constants/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export default async function BlogDatePage({ params }: Props) {
  const { slug } = await params;
  const [year, month, day] = slug ?? [];

  const filtered = BLOG_POSTS.filter((post) => {
    const d = new Date(post.date);
    if (year && d.getFullYear() !== parseInt(year)) return false;
    if (month && d.getMonth() + 1 !== parseInt(month)) return false;
    if (day && d.getDate() !== parseInt(day)) return false;
    return true;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let label = "All Posts by Date";
  if (year && month && day) {
    label = new Date(`${year}-${month}-${day}`).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric",
    });
  } else if (year && month) {
    label = new Date(`${year}-${month}-01`).toLocaleDateString("en-US", {
      year: "numeric", month: "long",
    });
  } else if (year) {
    label = year;
  }

  return (
    <Section className="space-y-8 min-h-screen">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          All Posts
        </Button>
      </Link>

      <SectionHeading
        title={label}
        description={`${filtered.length} post${filtered.length !== 1 ? "s" : ""}`}
      />

      <BlogGrid posts={filtered} emptyMessage="No posts found for this date." />
    </Section>
  );
}