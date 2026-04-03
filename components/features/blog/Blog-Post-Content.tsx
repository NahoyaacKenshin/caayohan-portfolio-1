import { Badge } from "@/components/ui/badge";
import { BLOG_CATEGORIES, BlogPost } from "@/constants/blog";
import { CalendarDays, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex flex-col md:flex-row justify-between items-center gap-10">
      {/* meta */}
      <div className="space-y-4 w-full md:flex-1">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="gap-1.5 mb-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt="blog-img"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 flex-1">
        <div className="flex flex-wrap gap-1.5">
          {post.category.map((cat) => {
            const found = BLOG_CATEGORIES.find((c) => c.slug === cat);
            return (
              <Link key={cat} href={`/blog/category/${cat}`}>
                <Badge variant="secondary" className="text-xs cursor-pointer">
                  {found?.name ?? cat}
                </Badge>
              </Link>
            );
          })}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <p className="text-muted-foreground text-base">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
          <span className="flex items-center gap-1.5">
            <User className="h-3 w-3" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3 w-3" />
            {formattedDate}
          </span>
        </div>


        <hr className="border-border" />

        {/* content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed">
          {post.content}
        </div>
      </div>
    </article>
  );
}