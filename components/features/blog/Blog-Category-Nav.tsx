import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BLOG_CATEGORIES } from "@/constants/blog";

interface BlogCategoryNavProps {
  activeSlug?: string;
}

export function BlogCategoryNav({ activeSlug }: BlogCategoryNavProps) {
  // Top-level categories only
  const topLevel = BLOG_CATEGORIES.filter((c) => !c.parent);

  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/blog">
        <Badge variant={!activeSlug ? "default" : "outline"} className="cursor-pointer text-sm px-4 py-4">
          All
        </Badge>
      </Link>
      {topLevel.map((cat) => (
        <Link key={cat.slug} href={`/blog/category/${cat.slug}`}>
          <Badge
            variant={activeSlug === cat.slug ? "default" : "outline"}
            className="cursor-pointer text-sm px-4 py-4"
          >
            {cat.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
}