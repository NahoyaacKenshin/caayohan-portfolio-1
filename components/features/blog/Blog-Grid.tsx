import { BLOG_POSTS, BlogPost } from "@/constants/blog";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  posts?: BlogPost[];
  emptyMessage?: string;
}

export function BlogGrid({ posts, emptyMessage = "No posts found." }: BlogGridProps) {
  const sorted = (posts ?? BLOG_POSTS).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (sorted.length === 0) {
    return (
      <div className="col-span-full py-16 text-center text-muted-foreground text-sm">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}